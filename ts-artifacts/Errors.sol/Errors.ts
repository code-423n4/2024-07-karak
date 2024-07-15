export const Errors = {
  "abi": [],
  "bytecode": {
    "object": "0x",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "linkReferences": {}
  },
  "ast": {
    "absolutePath": "src/interfaces/Errors.sol",
    "id": 63004,
    "exportedSymbols": {
      "ArrayLengthsNotEqual": [
        62991
      ],
      "CrossedDepositLimit": [
        63001
      ],
      "ExpiredSign": [
        62997
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
      "PermitFailed": [
        62995
      ],
      "RoleNotGranted": [
        62983
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
    "src": "51:849:90",
    "nodes": [
      {
        "id": 62947,
        "nodeType": "PragmaDirective",
        "src": "51:24:90",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 62949,
        "nodeType": "ErrorDefinition",
        "src": "77:21:90",
        "nodes": [],
        "errorSelector": "b4fa3fb3",
        "name": "InvalidInput",
        "nameLocation": "83:12:90",
        "parameters": {
          "id": 62948,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "95:2:90"
        }
      },
      {
        "id": 62951,
        "nodeType": "ErrorDefinition",
        "src": "99:31:90",
        "nodes": [],
        "errorSelector": "796571ae",
        "name": "InvalidWithdrawalDelay",
        "nameLocation": "105:22:90",
        "parameters": {
          "id": 62950,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "127:2:90"
        }
      },
      {
        "id": 62953,
        "nodeType": "ErrorDefinition",
        "src": "131:20:90",
        "nodes": [],
        "errorSelector": "d92e233d",
        "name": "ZeroAddress",
        "nameLocation": "137:11:90",
        "parameters": {
          "id": 62952,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "148:2:90"
        }
      },
      {
        "id": 62955,
        "nodeType": "ErrorDefinition",
        "src": "152:27:90",
        "nodes": [],
        "errorSelector": "bc091edc",
        "name": "NotVaultSupervisor",
        "nameLocation": "158:18:90",
        "parameters": {
          "id": 62954,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "176:2:90"
        }
      },
      {
        "id": 62957,
        "nodeType": "ErrorDefinition",
        "src": "180:18:90",
        "nodes": [],
        "errorSelector": "59cc8a2f",
        "name": "NotStaker",
        "nameLocation": "186:9:90",
        "parameters": {
          "id": 62956,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "195:2:90"
        }
      },
      {
        "id": 62959,
        "nodeType": "ErrorDefinition",
        "src": "199:33:90",
        "nodes": [],
        "errorSelector": "35a34c35",
        "name": "WithdrawAlreadyCompleted",
        "nameLocation": "205:24:90",
        "parameters": {
          "id": 62958,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "229:2:90"
        }
      },
      {
        "id": 62961,
        "nodeType": "ErrorDefinition",
        "src": "233:34:90",
        "nodes": [],
        "errorSelector": "4b90bbc2",
        "name": "MinWithdrawDelayNotPassed",
        "nameLocation": "239:25:90",
        "parameters": {
          "id": 62960,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "264:2:90"
        }
      },
      {
        "id": 62963,
        "nodeType": "ErrorDefinition",
        "src": "268:28:90",
        "nodes": [],
        "errorSelector": "584434d4",
        "name": "WithdrawerNotCaller",
        "nameLocation": "274:19:90",
        "parameters": {
          "id": 62962,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "293:2:90"
        }
      },
      {
        "id": 62965,
        "nodeType": "ErrorDefinition",
        "src": "297:19:90",
        "nodes": [],
        "errorSelector": "9811e0c7",
        "name": "ZeroShares",
        "nameLocation": "303:10:90",
        "parameters": {
          "id": 62964,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "313:2:90"
        }
      },
      {
        "id": 62967,
        "nodeType": "ErrorDefinition",
        "src": "317:23:90",
        "nodes": [],
        "errorSelector": "63923f0e",
        "name": "MaxStakerVault",
        "nameLocation": "323:14:90",
        "parameters": {
          "id": 62966,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "337:2:90"
        }
      },
      {
        "id": 62969,
        "nodeType": "ErrorDefinition",
        "src": "341:28:90",
        "nodes": [],
        "errorSelector": "b13b4eea",
        "name": "VaultNotAChildVault",
        "nameLocation": "347:19:90",
        "parameters": {
          "id": 62968,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "366:2:90"
        }
      },
      {
        "id": 62971,
        "nodeType": "ErrorDefinition",
        "src": "370:32:90",
        "nodes": [],
        "errorSelector": "d04f8cc5",
        "name": "NotDelegationSupervisor",
        "nameLocation": "376:23:90",
        "parameters": {
          "id": 62970,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "399:2:90"
        }
      },
      {
        "id": 62973,
        "nodeType": "ErrorDefinition",
        "src": "403:50:90",
        "nodes": [],
        "errorSelector": "9b6f3e97",
        "name": "NotPreviousNorCurrentDelegationSupervisor",
        "nameLocation": "409:41:90",
        "parameters": {
          "id": 62972,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "450:2:90"
        }
      },
      {
        "id": 62975,
        "nodeType": "ErrorDefinition",
        "src": "454:22:90",
        "nodes": [],
        "errorSelector": "dee790fb",
        "name": "VaultNotFound",
        "nameLocation": "460:13:90",
        "parameters": {
          "id": 62974,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "473:2:90"
        }
      },
      {
        "id": 62977,
        "nodeType": "ErrorDefinition",
        "src": "477:24:90",
        "nodes": [],
        "errorSelector": "f15ed214",
        "name": "NotEnoughShares",
        "nameLocation": "483:15:90",
        "parameters": {
          "id": 62976,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "498:2:90"
        }
      },
      {
        "id": 62979,
        "nodeType": "ErrorDefinition",
        "src": "502:34:90",
        "nodes": [],
        "errorSelector": "c55dde3d",
        "name": "InvalidVaultAdminFunction",
        "nameLocation": "508:25:90",
        "parameters": {
          "id": 62978,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "533:2:90"
        }
      },
      {
        "id": 62981,
        "nodeType": "ErrorDefinition",
        "src": "537:23:90",
        "nodes": [],
        "errorSelector": "87138d5c",
        "name": "NotInitialized",
        "nameLocation": "543:14:90",
        "parameters": {
          "id": 62980,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "557:2:90"
        }
      },
      {
        "id": 62983,
        "nodeType": "ErrorDefinition",
        "src": "561:23:90",
        "nodes": [],
        "errorSelector": "391cf229",
        "name": "RoleNotGranted",
        "nameLocation": "567:14:90",
        "parameters": {
          "id": 62982,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "581:2:90"
        }
      },
      {
        "id": 62985,
        "nodeType": "ErrorDefinition",
        "src": "599:22:90",
        "nodes": [],
        "errorSelector": "196938fc",
        "name": "NotSupervisor",
        "nameLocation": "605:13:90",
        "parameters": {
          "id": 62984,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "618:2:90"
        }
      },
      {
        "id": 62987,
        "nodeType": "ErrorDefinition",
        "src": "622:24:90",
        "nodes": [],
        "errorSelector": "3f9f188e",
        "name": "TokenNotEnabled",
        "nameLocation": "628:15:90",
        "parameters": {
          "id": 62986,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "643:2:90"
        }
      },
      {
        "id": 62989,
        "nodeType": "ErrorDefinition",
        "src": "659:26:90",
        "nodes": [],
        "errorSelector": "a4f8591d",
        "name": "NoElementsInArray",
        "nameLocation": "665:17:90",
        "parameters": {
          "id": 62988,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "682:2:90"
        }
      },
      {
        "id": 62991,
        "nodeType": "ErrorDefinition",
        "src": "686:29:90",
        "nodes": [],
        "errorSelector": "440de63f",
        "name": "ArrayLengthsNotEqual",
        "nameLocation": "692:20:90",
        "parameters": {
          "id": 62990,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "712:2:90"
        }
      },
      {
        "id": 62993,
        "nodeType": "ErrorDefinition",
        "src": "716:19:90",
        "nodes": [],
        "errorSelector": "1f2a2005",
        "name": "ZeroAmount",
        "nameLocation": "722:10:90",
        "parameters": {
          "id": 62992,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "732:2:90"
        }
      },
      {
        "id": 62995,
        "nodeType": "ErrorDefinition",
        "src": "760:21:90",
        "nodes": [],
        "errorSelector": "b78cb0dd",
        "name": "PermitFailed",
        "nameLocation": "766:12:90",
        "parameters": {
          "id": 62994,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "778:2:90"
        }
      },
      {
        "id": 62997,
        "nodeType": "ErrorDefinition",
        "src": "782:20:90",
        "nodes": [],
        "errorSelector": "af04a38e",
        "name": "ExpiredSign",
        "nameLocation": "788:11:90",
        "parameters": {
          "id": 62996,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "799:2:90"
        }
      },
      {
        "id": 62999,
        "nodeType": "ErrorDefinition",
        "src": "803:25:90",
        "nodes": [],
        "errorSelector": "8baa579f",
        "name": "InvalidSignature",
        "nameLocation": "809:16:90",
        "parameters": {
          "id": 62998,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "825:2:90"
        }
      },
      {
        "id": 63001,
        "nodeType": "ErrorDefinition",
        "src": "829:28:90",
        "nodes": [],
        "errorSelector": "bf2af50b",
        "name": "CrossedDepositLimit",
        "nameLocation": "835:19:90",
        "parameters": {
          "id": 63000,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "854:2:90"
        }
      },
      {
        "id": 63003,
        "nodeType": "ErrorDefinition",
        "src": "874:25:90",
        "nodes": [],
        "errorSelector": "24a01144",
        "name": "UnsupportedAsset",
        "nameLocation": "880:16:90",
        "parameters": {
          "id": 63002,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "896:2:90"
        }
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 90
} as const;