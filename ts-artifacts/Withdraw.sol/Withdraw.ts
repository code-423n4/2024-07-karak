export const Withdraw = {
  "abi": [],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea26469706673582212203c770371367e403d5a376eb2cd78675580a87f825b7a905828b144b7fb45078f64736f6c63430008190033",
    "sourceMap": "268:2131:88:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea26469706673582212203c770371367e403d5a376eb2cd78675580a87f825b7a905828b144b7fb45078f64736f6c63430008190033",
    "sourceMap": "268:2131:88:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/entities/Withdraw.sol\":\"Withdraw\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/auth/OwnableRoles.sol\":{\"keccak256\":\"0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c\",\"dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L\"]},\"src/entities/DelegationSupervisorLib.sol\":{\"keccak256\":\"0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1\",\"dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45\"]},\"src/entities/Staker.sol\":{\"keccak256\":\"0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f\",\"dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr\"]},\"src/entities/Withdraw.sol\":{\"keccak256\":\"0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653\",\"dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY\"]},\"src/interfaces/Constants.sol\":{\"keccak256\":\"0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c\",\"dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG\"]},\"src/interfaces/Errors.sol\":{\"keccak256\":\"0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915\",\"dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2\"]},\"src/interfaces/Events.sol\":{\"keccak256\":\"0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21\",\"dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
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
        "src/entities/Withdraw.sol": "Withdraw"
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
    "absolutePath": "src/entities/Withdraw.sol",
    "id": 62914,
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
    "src": "51:2349:88",
    "nodes": [
      {
        "id": 62715,
        "nodeType": "PragmaDirective",
        "src": "51:24:88",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 62716,
        "nodeType": "ImportDirective",
        "src": "77:39:88",
        "nodes": [],
        "absolutePath": "src/entities/DelegationSupervisorLib.sol",
        "file": "./DelegationSupervisorLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62914,
        "sourceUnit": 62417,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 62717,
        "nodeType": "ImportDirective",
        "src": "117:34:88",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "../interfaces/IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62914,
        "sourceUnit": 63272,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 62718,
        "nodeType": "ImportDirective",
        "src": "152:44:88",
        "nodes": [],
        "absolutePath": "src/interfaces/IVaultSupervisor.sol",
        "file": "../interfaces/IVaultSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62914,
        "sourceUnit": 63405,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 62719,
        "nodeType": "ImportDirective",
        "src": "197:34:88",
        "nodes": [],
        "absolutePath": "src/interfaces/Errors.sol",
        "file": "../interfaces/Errors.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62914,
        "sourceUnit": 63004,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 62720,
        "nodeType": "ImportDirective",
        "src": "232:34:88",
        "nodes": [],
        "absolutePath": "src/interfaces/Events.sol",
        "file": "../interfaces/Events.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62914,
        "sourceUnit": 63036,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 62913,
        "nodeType": "ContractDefinition",
        "src": "268:2131:88",
        "nodes": [
          {
            "id": 62732,
            "nodeType": "StructDefinition",
            "src": "291:163:88",
            "nodes": [],
            "canonicalName": "Withdraw.QueuedWithdrawal",
            "members": [
              {
                "constant": false,
                "id": 62722,
                "mutability": "mutable",
                "name": "staker",
                "nameLocation": "333:6:88",
                "nodeType": "VariableDeclaration",
                "scope": 62732,
                "src": "325:14:88",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 62721,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "325:7:88",
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
                "id": 62724,
                "mutability": "mutable",
                "name": "delegatedTo",
                "nameLocation": "357:11:88",
                "nodeType": "VariableDeclaration",
                "scope": 62732,
                "src": "349:19:88",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 62723,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "349:7:88",
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
                "id": 62726,
                "mutability": "mutable",
                "name": "nonce",
                "nameLocation": "386:5:88",
                "nodeType": "VariableDeclaration",
                "scope": 62732,
                "src": "378:13:88",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 62725,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "378:7:88",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 62728,
                "mutability": "mutable",
                "name": "start",
                "nameLocation": "409:5:88",
                "nodeType": "VariableDeclaration",
                "scope": 62732,
                "src": "401:13:88",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 62727,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "401:7:88",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 62731,
                "mutability": "mutable",
                "name": "request",
                "nameLocation": "440:7:88",
                "nodeType": "VariableDeclaration",
                "scope": 62732,
                "src": "424:23:88",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_WithdrawRequest_$62742_storage_ptr",
                  "typeString": "struct Withdraw.WithdrawRequest"
                },
                "typeName": {
                  "id": 62730,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 62729,
                    "name": "WithdrawRequest",
                    "nameLocations": [
                      "424:15:88"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 62742,
                    "src": "424:15:88"
                  },
                  "referencedDeclaration": 62742,
                  "src": "424:15:88",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_WithdrawRequest_$62742_storage_ptr",
                    "typeString": "struct Withdraw.WithdrawRequest"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "QueuedWithdrawal",
            "nameLocation": "298:16:88",
            "scope": 62913,
            "visibility": "public"
          },
          {
            "id": 62742,
            "nodeType": "StructDefinition",
            "src": "460:109:88",
            "nodes": [],
            "canonicalName": "Withdraw.WithdrawRequest",
            "members": [
              {
                "constant": false,
                "id": 62736,
                "mutability": "mutable",
                "name": "vaults",
                "nameLocation": "502:6:88",
                "nodeType": "VariableDeclaration",
                "scope": 62742,
                "src": "493:15:88",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                  "typeString": "contract IVault[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 62734,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62733,
                      "name": "IVault",
                      "nameLocations": [
                        "493:6:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "493:6:88"
                    },
                    "referencedDeclaration": 63271,
                    "src": "493:6:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "id": 62735,
                  "nodeType": "ArrayTypeName",
                  "src": "493:8:88",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                    "typeString": "contract IVault[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 62739,
                "mutability": "mutable",
                "name": "shares",
                "nameLocation": "528:6:88",
                "nodeType": "VariableDeclaration",
                "scope": 62742,
                "src": "518:16:88",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 62737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "518:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 62738,
                  "nodeType": "ArrayTypeName",
                  "src": "518:9:88",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 62741,
                "mutability": "mutable",
                "name": "withdrawer",
                "nameLocation": "552:10:88",
                "nodeType": "VariableDeclaration",
                "scope": 62742,
                "src": "544:18:88",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 62740,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "544:7:88",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "WithdrawRequest",
            "nameLocation": "467:15:88",
            "scope": 62913,
            "visibility": "public"
          },
          {
            "id": 62854,
            "nodeType": "FunctionDefinition",
            "src": "575:1207:88",
            "nodes": [],
            "body": {
              "id": 62853,
              "nodeType": "Block",
              "src": "739:1043:88",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62752
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62752,
                      "mutability": "mutable",
                      "name": "withdrawalRoot",
                      "nameLocation": "757:14:88",
                      "nodeType": "VariableDeclaration",
                      "scope": 62853,
                      "src": "749:22:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 62751,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "749:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62756,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 62754,
                        "name": "withdrawal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62745,
                        "src": "798:10:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                          "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                          "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                        }
                      ],
                      "id": 62753,
                      "name": "calculateWithdrawalRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62870,
                      "src": "774:23:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (struct Withdraw.QueuedWithdrawal memory) pure returns (bytes32)"
                      }
                    },
                    "id": 62755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "774:35:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "749:60:88"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 62762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "expression": {
                          "id": 62757,
                          "name": "withdrawal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62745,
                          "src": "823:10:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                            "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                          }
                        },
                        "id": 62758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "834:7:88",
                        "memberName": "request",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62731,
                        "src": "823:18:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                          "typeString": "struct Withdraw.WithdrawRequest calldata"
                        }
                      },
                      "id": 62759,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "842:10:88",
                      "memberName": "withdrawer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62741,
                      "src": "823:29:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 62760,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "856:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 62761,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "860:6:88",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "856:10:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "823:43:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62766,
                  "nodeType": "IfStatement",
                  "src": "819:77:88",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62763,
                        "name": "WithdrawerNotCaller",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62963,
                        "src": "875:19:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 62764,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "875:21:88",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 62765,
                    "nodeType": "RevertStatement",
                    "src": "868:28:88"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 62771,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 62767,
                          "name": "withdrawal",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62745,
                          "src": "910:10:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                            "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                          }
                        },
                        "id": 62768,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "921:5:88",
                        "memberName": "start",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62728,
                        "src": "910:16:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "expression": {
                          "id": 62769,
                          "name": "delegationSupervisor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62748,
                          "src": "929:20:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                            "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 62770,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "950:15:88",
                        "memberName": "withdrawalDelay",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62355,
                        "src": "929:36:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "910:55:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "id": 62772,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "968:5:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 62773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "974:9:88",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "968:15:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "910:73:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62779,
                  "nodeType": "IfStatement",
                  "src": "906:138:88",
                  "trueBody": {
                    "id": 62778,
                    "nodeType": "Block",
                    "src": "985:59:88",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 62775,
                            "name": "MinWithdrawDelayNotPassed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62961,
                            "src": "1006:25:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 62776,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1006:27:88",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 62777,
                        "nodeType": "RevertStatement",
                        "src": "999:34:88"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 62784,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1057:56:88",
                    "subExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 62780,
                          "name": "delegationSupervisor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62748,
                          "src": "1058:20:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                            "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 62781,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1079:18:88",
                        "memberName": "pendingWithdrawals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62342,
                        "src": "1058:39:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 62783,
                      "indexExpression": {
                        "id": 62782,
                        "name": "withdrawalRoot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62752,
                        "src": "1098:14:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1058:55:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62788,
                  "nodeType": "IfStatement",
                  "src": "1053:95:88",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62785,
                        "name": "WithdrawAlreadyCompleted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62959,
                        "src": "1122:24:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 62786,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1122:26:88",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 62787,
                    "nodeType": "RevertStatement",
                    "src": "1115:33:88"
                  }
                },
                {
                  "expression": {
                    "id": 62793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "1158:62:88",
                    "subExpression": {
                      "baseExpression": {
                        "expression": {
                          "id": 62789,
                          "name": "delegationSupervisor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62748,
                          "src": "1165:20:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                            "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                          }
                        },
                        "id": 62790,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1186:18:88",
                        "memberName": "pendingWithdrawals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62342,
                        "src": "1165:39:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 62792,
                      "indexExpression": {
                        "id": 62791,
                        "name": "withdrawalRoot",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62752,
                        "src": "1205:14:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1165:55:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62794,
                  "nodeType": "ExpressionStatement",
                  "src": "1158:62:88"
                },
                {
                  "body": {
                    "id": 62851,
                    "nodeType": "Block",
                    "src": "1294:482:88",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 62813,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1375:3:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 62814,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1379:6:88",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1375:10:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "baseExpression": {
                                "expression": {
                                  "expression": {
                                    "id": 62815,
                                    "name": "withdrawal",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62745,
                                    "src": "1387:10:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                                      "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                                    }
                                  },
                                  "id": 62816,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "1398:7:88",
                                  "memberName": "request",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 62731,
                                  "src": "1387:18:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                                    "typeString": "struct Withdraw.WithdrawRequest calldata"
                                  }
                                },
                                "id": 62817,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1406:6:88",
                                "memberName": "vaults",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62736,
                                "src": "1387:25:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_calldata_ptr",
                                  "typeString": "contract IVault[] calldata"
                                }
                              },
                              "id": 62819,
                              "indexExpression": {
                                "id": 62818,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62796,
                                "src": "1413:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1387:28:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IVault_$63271",
                                "typeString": "contract IVault"
                              }
                            },
                            {
                              "baseExpression": {
                                "expression": {
                                  "expression": {
                                    "id": 62820,
                                    "name": "withdrawal",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62745,
                                    "src": "1417:10:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                                      "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                                    }
                                  },
                                  "id": 62821,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "1428:7:88",
                                  "memberName": "request",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 62731,
                                  "src": "1417:18:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                                    "typeString": "struct Withdraw.WithdrawRequest calldata"
                                  }
                                },
                                "id": 62822,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1436:6:88",
                                "memberName": "shares",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62739,
                                "src": "1417:25:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 62824,
                              "indexExpression": {
                                "id": 62823,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62796,
                                "src": "1443:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1417:28:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_contract$_IVault_$63271",
                                "typeString": "contract IVault"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "expression": {
                                "id": 62808,
                                "name": "delegationSupervisor",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62748,
                                "src": "1308:20:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                                  "typeString": "struct DelegationSupervisorLib.Storage storage pointer"
                                }
                              },
                              "id": 62811,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1329:15:88",
                              "memberName": "vaultSupervisor",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62358,
                              "src": "1308:36:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                                "typeString": "contract IVaultSupervisor"
                              }
                            },
                            "id": 62812,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1345:12:88",
                            "memberName": "redeemShares",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 63325,
                            "src": "1308:49:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_contract$_IVault_$63271_$_t_uint256_$returns$__$",
                              "typeString": "function (address,contract IVault,uint256) external"
                            }
                          },
                          "id": 62825,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1308:151:88",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 62826,
                        "nodeType": "ExpressionStatement",
                        "src": "1308:151:88"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "expression": {
                                      "expression": {
                                        "id": 62830,
                                        "name": "withdrawal",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 62745,
                                        "src": "1522:10:88",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                                          "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                                        }
                                      },
                                      "id": 62831,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "1533:7:88",
                                      "memberName": "request",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 62731,
                                      "src": "1522:18:88",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                                        "typeString": "struct Withdraw.WithdrawRequest calldata"
                                      }
                                    },
                                    "id": 62832,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "1541:6:88",
                                    "memberName": "vaults",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 62736,
                                    "src": "1522:25:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_calldata_ptr",
                                      "typeString": "contract IVault[] calldata"
                                    }
                                  },
                                  "id": 62834,
                                  "indexExpression": {
                                    "id": 62833,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62796,
                                    "src": "1548:1:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1522:28:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IVault_$63271",
                                    "typeString": "contract IVault"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IVault_$63271",
                                    "typeString": "contract IVault"
                                  }
                                ],
                                "id": 62829,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1514:7:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 62828,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1514:7:88",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62835,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1514:37:88",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 62836,
                                "name": "withdrawal",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62745,
                                "src": "1569:10:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                                  "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                                }
                              },
                              "id": 62837,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1580:6:88",
                              "memberName": "staker",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62722,
                              "src": "1569:17:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 62838,
                                "name": "withdrawal",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62745,
                                "src": "1604:10:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                                  "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                                }
                              },
                              "id": 62839,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1615:11:88",
                              "memberName": "delegatedTo",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62724,
                              "src": "1604:22:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "expression": {
                                  "id": 62840,
                                  "name": "withdrawal",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62745,
                                  "src": "1644:10:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                                    "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                                  }
                                },
                                "id": 62841,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1655:7:88",
                                "memberName": "request",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62731,
                                "src": "1644:18:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                                  "typeString": "struct Withdraw.WithdrawRequest calldata"
                                }
                              },
                              "id": 62842,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1663:10:88",
                              "memberName": "withdrawer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62741,
                              "src": "1644:29:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "baseExpression": {
                                "expression": {
                                  "expression": {
                                    "id": 62843,
                                    "name": "withdrawal",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62745,
                                    "src": "1691:10:88",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                                      "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                                    }
                                  },
                                  "id": 62844,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "1702:7:88",
                                  "memberName": "request",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 62731,
                                  "src": "1691:18:88",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                                    "typeString": "struct Withdraw.WithdrawRequest calldata"
                                  }
                                },
                                "id": 62845,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1710:6:88",
                                "memberName": "shares",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 62739,
                                "src": "1691:25:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 62847,
                              "indexExpression": {
                                "id": 62846,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62796,
                                "src": "1717:1:88",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1691:28:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 62848,
                              "name": "withdrawalRoot",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62752,
                              "src": "1737:14:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 62827,
                            "name": "FinishedWithdrawal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63031,
                            "src": "1478:18:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                              "typeString": "function (address,address,address,address,uint256,bytes32)"
                            }
                          },
                          "id": 62849,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1478:287:88",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 62850,
                        "nodeType": "EmitStatement",
                        "src": "1473:292:88"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 62799,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62796,
                      "src": "1251:1:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "expression": {
                            "id": 62800,
                            "name": "withdrawal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62745,
                            "src": "1255:10:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                              "typeString": "struct Withdraw.QueuedWithdrawal calldata"
                            }
                          },
                          "id": 62801,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1266:7:88",
                          "memberName": "request",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62731,
                          "src": "1255:18:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                            "typeString": "struct Withdraw.WithdrawRequest calldata"
                          }
                        },
                        "id": 62802,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1274:6:88",
                        "memberName": "vaults",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62736,
                        "src": "1255:25:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_calldata_ptr",
                          "typeString": "contract IVault[] calldata"
                        }
                      },
                      "id": 62803,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1281:6:88",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1255:32:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1251:36:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62852,
                  "initializationExpression": {
                    "assignments": [
                      62796
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 62796,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "1244:1:88",
                        "nodeType": "VariableDeclaration",
                        "scope": 62852,
                        "src": "1236:9:88",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 62795,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1236:7:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 62798,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 62797,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1248:1:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1236:13:88"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 62806,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1289:3:88",
                      "subExpression": {
                        "id": 62805,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62796,
                        "src": "1289:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 62807,
                    "nodeType": "ExpressionStatement",
                    "src": "1289:3:88"
                  },
                  "nodeType": "ForStatement",
                  "src": "1231:545:88"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "finishStartedWithdrawal",
            "nameLocation": "584:23:88",
            "parameters": {
              "id": 62749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62745,
                  "mutability": "mutable",
                  "name": "withdrawal",
                  "nameLocation": "643:10:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 62854,
                  "src": "617:36:88",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_calldata_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal"
                  },
                  "typeName": {
                    "id": 62744,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62743,
                      "name": "QueuedWithdrawal",
                      "nameLocations": [
                        "617:16:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62732,
                      "src": "617:16:88"
                    },
                    "referencedDeclaration": 62732,
                    "src": "617:16:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62748,
                  "mutability": "mutable",
                  "name": "delegationSupervisor",
                  "nameLocation": "703:20:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 62854,
                  "src": "663:60:88",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                    "typeString": "struct DelegationSupervisorLib.Storage"
                  },
                  "typeName": {
                    "id": 62747,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62746,
                      "name": "DelegationSupervisorLib.Storage",
                      "nameLocations": [
                        "663:23:88",
                        "687:7:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62359,
                      "src": "663:31:88"
                    },
                    "referencedDeclaration": 62359,
                    "src": "663:31:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Storage_$62359_storage_ptr",
                      "typeString": "struct DelegationSupervisorLib.Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "607:122:88"
            },
            "returnParameters": {
              "id": 62750,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "739:0:88"
            },
            "scope": 62913,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62870,
            "nodeType": "FunctionDefinition",
            "src": "1788:158:88",
            "nodes": [],
            "body": {
              "id": 62869,
              "nodeType": "Block",
              "src": "1889:57:88",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 62865,
                            "name": "withdrawal",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62857,
                            "src": "1927:10:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                              "typeString": "struct Withdraw.QueuedWithdrawal memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                              "typeString": "struct Withdraw.QueuedWithdrawal memory"
                            }
                          ],
                          "expression": {
                            "id": 62863,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1916:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 62864,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1920:6:88",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1916:10:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 62866,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1916:22:88",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 62862,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "1906:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 62867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1906:33:88",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 62861,
                  "id": 62868,
                  "nodeType": "Return",
                  "src": "1899:40:88"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateWithdrawalRoot",
            "nameLocation": "1797:23:88",
            "parameters": {
              "id": 62858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62857,
                  "mutability": "mutable",
                  "name": "withdrawal",
                  "nameLocation": "1845:10:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 62870,
                  "src": "1821:34:88",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal"
                  },
                  "typeName": {
                    "id": 62856,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62855,
                      "name": "QueuedWithdrawal",
                      "nameLocations": [
                        "1821:16:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62732,
                      "src": "1821:16:88"
                    },
                    "referencedDeclaration": 62732,
                    "src": "1821:16:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1820:36:88"
            },
            "returnParameters": {
              "id": 62861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62860,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62870,
                  "src": "1880:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 62859,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1880:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1879:9:88"
            },
            "scope": 62913,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62912,
            "nodeType": "FunctionDefinition",
            "src": "1952:445:88",
            "nodes": [],
            "body": {
              "id": 62911,
              "nodeType": "Block",
              "src": "2037:360:88",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 62886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 62880,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "id": 62876,
                            "name": "withdrawalRequest",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62873,
                            "src": "2076:17:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                              "typeString": "struct Withdraw.WithdrawRequest calldata"
                            }
                          },
                          "id": 62877,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2094:6:88",
                          "memberName": "shares",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62739,
                          "src": "2076:24:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        },
                        "id": 62878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2101:6:88",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "2076:31:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 62879,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2111:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "2076:36:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 62885,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "id": 62881,
                            "name": "withdrawalRequest",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62873,
                            "src": "2116:17:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                              "typeString": "struct Withdraw.WithdrawRequest calldata"
                            }
                          },
                          "id": 62882,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2134:6:88",
                          "memberName": "vaults",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62736,
                          "src": "2116:24:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_calldata_ptr",
                            "typeString": "contract IVault[] calldata"
                          }
                        },
                        "id": 62883,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2141:6:88",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "2116:31:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 62884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2151:1:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "2116:36:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2076:76:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62890,
                  "nodeType": "IfStatement",
                  "src": "2072:108:88",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62887,
                        "name": "NoElementsInArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62989,
                        "src": "2161:17:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 62888,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2161:19:88",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 62889,
                    "nodeType": "RevertStatement",
                    "src": "2154:26:88"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "expression": {
                          "id": 62891,
                          "name": "withdrawalRequest",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62873,
                          "src": "2194:17:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                            "typeString": "struct Withdraw.WithdrawRequest calldata"
                          }
                        },
                        "id": 62892,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2212:6:88",
                        "memberName": "shares",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62739,
                        "src": "2194:24:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      },
                      "id": 62893,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2219:6:88",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2194:31:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 62894,
                          "name": "withdrawalRequest",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62873,
                          "src": "2229:17:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                            "typeString": "struct Withdraw.WithdrawRequest calldata"
                          }
                        },
                        "id": 62895,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2247:6:88",
                        "memberName": "vaults",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62736,
                        "src": "2229:24:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_calldata_ptr",
                          "typeString": "contract IVault[] calldata"
                        }
                      },
                      "id": 62896,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2254:6:88",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2229:31:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2194:66:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62901,
                  "nodeType": "IfStatement",
                  "src": "2190:101:88",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62898,
                        "name": "ArrayLengthsNotEqual",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62991,
                        "src": "2269:20:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 62899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2269:22:88",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 62900,
                    "nodeType": "RevertStatement",
                    "src": "2262:29:88"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 62906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 62902,
                        "name": "withdrawalRequest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62873,
                        "src": "2328:17:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                          "typeString": "struct Withdraw.WithdrawRequest calldata"
                        }
                      },
                      "id": 62903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2346:10:88",
                      "memberName": "withdrawer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62741,
                      "src": "2328:28:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 62904,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "2360:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 62905,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2364:6:88",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "2360:10:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2328:42:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62910,
                  "nodeType": "IfStatement",
                  "src": "2324:66:88",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62907,
                        "name": "NotStaker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62957,
                        "src": "2379:9:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 62908,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2379:11:88",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 62909,
                    "nodeType": "RevertStatement",
                    "src": "2372:18:88"
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "validate",
            "nameLocation": "1961:8:88",
            "parameters": {
              "id": 62874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62873,
                  "mutability": "mutable",
                  "name": "withdrawalRequest",
                  "nameLocation": "2004:17:88",
                  "nodeType": "VariableDeclaration",
                  "scope": 62912,
                  "src": "1970:51:88",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_WithdrawRequest_$62742_calldata_ptr",
                    "typeString": "struct Withdraw.WithdrawRequest"
                  },
                  "typeName": {
                    "id": 62872,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62871,
                      "name": "Withdraw.WithdrawRequest",
                      "nameLocations": [
                        "1970:8:88",
                        "1979:15:88"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62742,
                      "src": "1970:24:88"
                    },
                    "referencedDeclaration": 62742,
                    "src": "1970:24:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_WithdrawRequest_$62742_storage_ptr",
                      "typeString": "struct Withdraw.WithdrawRequest"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1969:53:88"
            },
            "returnParameters": {
              "id": 62875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2037:0:88"
            },
            "scope": 62913,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Withdraw",
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          62913
        ],
        "name": "Withdraw",
        "nameLocation": "276:8:88",
        "scope": 62914,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 88
} as const;