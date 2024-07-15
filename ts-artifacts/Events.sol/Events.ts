export const Events = {
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
    "absolutePath": "src/interfaces/Events.sol",
    "id": 63036,
    "exportedSymbols": {
      "FinishedWithdrawal": [
        63031
      ],
      "NewVault": [
        63035
      ],
      "StartedWithdrawal": [
        63017
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:390:91",
    "nodes": [
      {
        "id": 63005,
        "nodeType": "PragmaDirective",
        "src": "51:24:91",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 63017,
        "nodeType": "EventDefinition",
        "src": "77:139:91",
        "nodes": [],
        "anonymous": false,
        "eventSelector": "6ee63f530864567ac8a1fcce5050111457154b213c6297ffc622603e8497f7b2",
        "name": "StartedWithdrawal",
        "nameLocation": "83:17:91",
        "parameters": {
          "id": 63016,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 63007,
              "indexed": true,
              "mutability": "mutable",
              "name": "vault",
              "nameLocation": "122:5:91",
              "nodeType": "VariableDeclaration",
              "scope": 63017,
              "src": "106:21:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 63006,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "106:7:91",
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
              "id": 63009,
              "indexed": true,
              "mutability": "mutable",
              "name": "staker",
              "nameLocation": "145:6:91",
              "nodeType": "VariableDeclaration",
              "scope": 63017,
              "src": "129:22:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 63008,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "129:7:91",
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
              "id": 63011,
              "indexed": true,
              "mutability": "mutable",
              "name": "operator",
              "nameLocation": "169:8:91",
              "nodeType": "VariableDeclaration",
              "scope": 63017,
              "src": "153:24:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 63010,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "153:7:91",
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
              "id": 63013,
              "indexed": false,
              "mutability": "mutable",
              "name": "withdrawer",
              "nameLocation": "187:10:91",
              "nodeType": "VariableDeclaration",
              "scope": 63017,
              "src": "179:18:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 63012,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "179:7:91",
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
              "id": 63015,
              "indexed": false,
              "mutability": "mutable",
              "name": "shares",
              "nameLocation": "207:6:91",
              "nodeType": "VariableDeclaration",
              "scope": 63017,
              "src": "199:14:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 63014,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "199:7:91",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "100:115:91"
        }
      },
      {
        "id": 63031,
        "nodeType": "EventDefinition",
        "src": "218:182:91",
        "nodes": [],
        "anonymous": false,
        "eventSelector": "486508c3c40ef7985dcc1f7d43acb1e77e0059505d1f0e6064674ca655a0c82f",
        "name": "FinishedWithdrawal",
        "nameLocation": "224:18:91",
        "parameters": {
          "id": 63030,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 63019,
              "indexed": true,
              "mutability": "mutable",
              "name": "vault",
              "nameLocation": "264:5:91",
              "nodeType": "VariableDeclaration",
              "scope": 63031,
              "src": "248:21:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 63018,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "248:7:91",
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
              "id": 63021,
              "indexed": true,
              "mutability": "mutable",
              "name": "staker",
              "nameLocation": "291:6:91",
              "nodeType": "VariableDeclaration",
              "scope": 63031,
              "src": "275:22:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 63020,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "275:7:91",
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
              "id": 63023,
              "indexed": true,
              "mutability": "mutable",
              "name": "operator",
              "nameLocation": "319:8:91",
              "nodeType": "VariableDeclaration",
              "scope": 63031,
              "src": "303:24:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 63022,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "303:7:91",
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
              "id": 63025,
              "indexed": false,
              "mutability": "mutable",
              "name": "withdrawer",
              "nameLocation": "341:10:91",
              "nodeType": "VariableDeclaration",
              "scope": 63031,
              "src": "333:18:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 63024,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "333:7:91",
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
              "id": 63027,
              "indexed": false,
              "mutability": "mutable",
              "name": "shares",
              "nameLocation": "365:6:91",
              "nodeType": "VariableDeclaration",
              "scope": 63031,
              "src": "357:14:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 63026,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "357:7:91",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 63029,
              "indexed": false,
              "mutability": "mutable",
              "name": "withdrawRoot",
              "nameLocation": "385:12:91",
              "nodeType": "VariableDeclaration",
              "scope": 63031,
              "src": "377:20:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              },
              "typeName": {
                "id": 63028,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "377:7:91",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "242:157:91"
        }
      },
      {
        "id": 63035,
        "nodeType": "EventDefinition",
        "src": "402:38:91",
        "nodes": [],
        "anonymous": false,
        "eventSelector": "2cd7a531712f8899004c782d9607e0886d1dbc91bfac7be88dadf6750d9e1419",
        "name": "NewVault",
        "nameLocation": "408:8:91",
        "parameters": {
          "id": 63034,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 63033,
              "indexed": true,
              "mutability": "mutable",
              "name": "vault",
              "nameLocation": "433:5:91",
              "nodeType": "VariableDeclaration",
              "scope": 63035,
              "src": "417:21:91",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 63032,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "417:7:91",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "416:23:91"
        }
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 91
} as const;