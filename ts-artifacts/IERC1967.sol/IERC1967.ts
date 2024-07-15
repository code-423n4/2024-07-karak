export const IERC1967 = {
  "abi": [
    {
      "type": "event",
      "name": "AdminChanged",
      "inputs": [
        {
          "name": "previousAdmin",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "newAdmin",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "BeaconUpgraded",
      "inputs": [
        {
          "name": "beacon",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Upgraded",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "indexed": true,
          "internalType": "address"
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
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousAdmin\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"beacon\",\"type\":\"address\"}],\"name\":\"BeaconUpgraded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"}],\"devdoc\":{\"details\":\"ERC-1967: Proxy Storage Slots. This interface contains the events defined in the ERC.\",\"events\":{\"AdminChanged(address,address)\":{\"details\":\"Emitted when the admin account has changed.\"},\"BeaconUpgraded(address)\":{\"details\":\"Emitted when the beacon is changed.\"},\"Upgraded(address)\":{\"details\":\"Emitted when the implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC1967.sol\":\"IERC1967\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC1967.sol\":{\"keccak256\":\"0xb25a4f11fa80c702bf5cd85adec90e6f6f507f32f4a8e6f5dbc31e8c10029486\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6917f8a323e7811f041aecd4d9fd6e92455a6fba38a797ac6f6e208c7912b79d\",\"dweb:/ipfs/QmShuYv55wYHGi4EFkDB8QfF7ZCHoKk2efyz3AWY1ExSq7\"]}},\"version\":1}",
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
              "name": "previousAdmin",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "newAdmin",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "AdminChanged",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "beacon",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "BeaconUpgraded",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Upgraded",
          "anonymous": false
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
        "node_modules/@openzeppelin/contracts/interfaces/IERC1967.sol": "IERC1967"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC1967.sol": {
        "keccak256": "0xb25a4f11fa80c702bf5cd85adec90e6f6f507f32f4a8e6f5dbc31e8c10029486",
        "urls": [
          "bzz-raw://6917f8a323e7811f041aecd4d9fd6e92455a6fba38a797ac6f6e208c7912b79d",
          "dweb:/ipfs/QmShuYv55wYHGi4EFkDB8QfF7ZCHoKk2efyz3AWY1ExSq7"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC1967.sol",
    "id": 49026,
    "exportedSymbols": {
      "IERC1967": [
        49025
      ]
    },
    "nodeType": "SourceUnit",
    "src": "107:529:33",
    "nodes": [
      {
        "id": 49006,
        "nodeType": "PragmaDirective",
        "src": "107:24:33",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49025,
        "nodeType": "ContractDefinition",
        "src": "235:400:33",
        "nodes": [
          {
            "id": 49012,
            "nodeType": "EventDefinition",
            "src": "333:47:33",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 49008,
              "nodeType": "StructuredDocumentation",
              "src": "260:68:33",
              "text": " @dev Emitted when the implementation is upgraded."
            },
            "eventSelector": "bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b",
            "name": "Upgraded",
            "nameLocation": "339:8:33",
            "parameters": {
              "id": 49011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49010,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "364:14:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 49012,
                  "src": "348:30:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49009,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "348:7:33",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "347:32:33"
            }
          },
          {
            "id": 49019,
            "nodeType": "EventDefinition",
            "src": "458:60:33",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 49013,
              "nodeType": "StructuredDocumentation",
              "src": "386:67:33",
              "text": " @dev Emitted when the admin account has changed."
            },
            "eventSelector": "7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f",
            "name": "AdminChanged",
            "nameLocation": "464:12:33",
            "parameters": {
              "id": 49018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49015,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "previousAdmin",
                  "nameLocation": "485:13:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 49019,
                  "src": "477:21:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49014,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:33",
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
                  "id": 49017,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newAdmin",
                  "nameLocation": "508:8:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 49019,
                  "src": "500:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49016,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "500:7:33",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "476:41:33"
            }
          },
          {
            "id": 49024,
            "nodeType": "EventDefinition",
            "src": "588:45:33",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 49020,
              "nodeType": "StructuredDocumentation",
              "src": "524:59:33",
              "text": " @dev Emitted when the beacon is changed."
            },
            "eventSelector": "1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e",
            "name": "BeaconUpgraded",
            "nameLocation": "594:14:33",
            "parameters": {
              "id": 49023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49022,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "beacon",
                  "nameLocation": "625:6:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 49024,
                  "src": "609:22:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49021,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "609:7:33",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "608:24:33"
            }
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC1967",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 49007,
          "nodeType": "StructuredDocumentation",
          "src": "133:101:33",
          "text": " @dev ERC-1967: Proxy Storage Slots. This interface contains the events defined in the ERC."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          49025
        ],
        "name": "IERC1967",
        "nameLocation": "245:8:33",
        "scope": 49026,
        "usedErrors": [],
        "usedEvents": [
          49012,
          49019,
          49024
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 33
} as const;