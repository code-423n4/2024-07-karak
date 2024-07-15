export const IBeacon = {
  "abi": [
    {
      "type": "function",
      "name": "implementation",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
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
    "implementation()": "5c60da1b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"This is the interface that {BeaconProxy} expects of its beacon.\",\"kind\":\"dev\",\"methods\":{\"implementation()\":{\"details\":\"Must return an address that can be used as a delegate call target. {UpgradeableBeacon} will check that this address is a contract.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":\"IBeacon\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "implementation()": {
            "details": "Must return an address that can be used as a delegate call target. {UpgradeableBeacon} will check that this address is a contract."
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
        "node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol": "IBeacon"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol": {
        "keccak256": "0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c",
        "urls": [
          "bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa",
          "dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol",
    "id": 49892,
    "exportedSymbols": {
      "IBeacon": [
        49891
      ]
    },
    "nodeType": "SourceUnit",
    "src": "108:364:43",
    "nodes": [
      {
        "id": 49883,
        "nodeType": "PragmaDirective",
        "src": "108:24:43",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49891,
        "nodeType": "ContractDefinition",
        "src": "214:257:43",
        "nodes": [
          {
            "id": 49890,
            "nodeType": "FunctionDefinition",
            "src": "411:58:43",
            "nodes": [],
            "documentation": {
              "id": 49885,
              "nodeType": "StructuredDocumentation",
              "src": "238:168:43",
              "text": " @dev Must return an address that can be used as a delegate call target.\n {UpgradeableBeacon} will check that this address is a contract."
            },
            "functionSelector": "5c60da1b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "implementation",
            "nameLocation": "420:14:43",
            "parameters": {
              "id": 49886,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "434:2:43"
            },
            "returnParameters": {
              "id": 49889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49888,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49890,
                  "src": "460:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49887,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "460:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "459:9:43"
            },
            "scope": 49891,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IBeacon",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 49884,
          "nodeType": "StructuredDocumentation",
          "src": "134:79:43",
          "text": " @dev This is the interface that {BeaconProxy} expects of its beacon."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          49891
        ],
        "name": "IBeacon",
        "nameLocation": "224:7:43",
        "scope": 49892,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 43
} as const;