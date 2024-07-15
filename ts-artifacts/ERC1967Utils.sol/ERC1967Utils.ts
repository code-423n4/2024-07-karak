export const ERC1967Utils = {
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
    },
    {
      "type": "error",
      "name": "ERC1967InvalidAdmin",
      "inputs": [
        {
          "name": "admin",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC1967InvalidBeacon",
      "inputs": [
        {
          "name": "beacon",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC1967InvalidImplementation",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC1967NonPayable",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220e99cb6c17d5cd2c6b100d1a623da2c29e904d85c72ee02475c8faa5dd28f488864736f6c63430008190033",
    "sourceMap": "449:6273:40:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea2646970667358221220e99cb6c17d5cd2c6b100d1a623da2c29e904d85c72ee02475c8faa5dd28f488864736f6c63430008190033",
    "sourceMap": "449:6273:40:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidAdmin\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"beacon\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidBeacon\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidImplementation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC1967NonPayable\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousAdmin\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"beacon\",\"type\":\"address\"}],\"name\":\"BeaconUpgraded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"}],\"devdoc\":{\"details\":\"This abstract contract provides getters and event emitting update functions for https://eips.ethereum.org/EIPS/eip-1967[EIP1967] slots.\",\"errors\":{\"ERC1967InvalidAdmin(address)\":[{\"details\":\"The `admin` of the proxy is invalid.\"}],\"ERC1967InvalidBeacon(address)\":[{\"details\":\"The `beacon` of the proxy is invalid.\"}],\"ERC1967InvalidImplementation(address)\":[{\"details\":\"The `implementation` of the proxy is invalid.\"}],\"ERC1967NonPayable()\":[{\"details\":\"An upgrade function sees `msg.value > 0` that may be lost.\"}]},\"events\":{\"AdminChanged(address,address)\":{\"details\":\"Emitted when the admin account has changed.\"},\"BeaconUpgraded(address)\":{\"details\":\"Emitted when the beacon is changed.\"},\"Upgraded(address)\":{\"details\":\"Emitted when the implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{},\"stateVariables\":{\"ADMIN_SLOT\":{\"details\":\"Storage slot with the admin of the contract. This is the keccak-256 hash of \\\"eip1967.proxy.admin\\\" subtracted by 1.\"},\"BEACON_SLOT\":{\"details\":\"The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy. This is the keccak-256 hash of \\\"eip1967.proxy.beacon\\\" subtracted by 1.\"},\"IMPLEMENTATION_SLOT\":{\"details\":\"Storage slot with the address of the current implementation. This is the keccak-256 hash of \\\"eip1967.proxy.implementation\\\" subtracted by 1.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol\":\"ERC1967Utils\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a\",\"dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]}},\"version\":1}",
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
              "name": "admin",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC1967InvalidAdmin"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "beacon",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC1967InvalidBeacon"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC1967InvalidImplementation"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ERC1967NonPayable"
        },
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
        "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol": "ERC1967Utils"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol": {
        "keccak256": "0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65",
        "urls": [
          "bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a",
          "dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol": {
        "keccak256": "0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c",
        "urls": [
          "bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa",
          "dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Address.sol": {
        "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
        "urls": [
          "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
          "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol": {
        "keccak256": "0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418",
        "urls": [
          "bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c",
          "dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol",
    "id": 49788,
    "exportedSymbols": {
      "Address": [
        51304
      ],
      "ERC1967Utils": [
        49787
      ],
      "IBeacon": [
        49891
      ],
      "StorageSlot": [
        51729
      ]
    },
    "nodeType": "SourceUnit",
    "src": "114:6609:40",
    "nodes": [
      {
        "id": 49486,
        "nodeType": "PragmaDirective",
        "src": "114:24:40",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49488,
        "nodeType": "ImportDirective",
        "src": "140:46:40",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol",
        "file": "../beacon/IBeacon.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49788,
        "sourceUnit": 49892,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49487,
              "name": "IBeacon",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49891,
              "src": "148:7:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49490,
        "nodeType": "ImportDirective",
        "src": "187:48:40",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Address.sol",
        "file": "../../utils/Address.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49788,
        "sourceUnit": 51305,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49489,
              "name": "Address",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51304,
              "src": "195:7:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49492,
        "nodeType": "ImportDirective",
        "src": "236:56:40",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol",
        "file": "../../utils/StorageSlot.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49788,
        "sourceUnit": 51730,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49491,
              "name": "StorageSlot",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51729,
              "src": "244:11:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49787,
        "nodeType": "ContractDefinition",
        "src": "449:6273:40",
        "nodes": [
          {
            "id": 49498,
            "nodeType": "EventDefinition",
            "src": "733:47:40",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 49494,
              "nodeType": "StructuredDocumentation",
              "src": "660:68:40",
              "text": " @dev Emitted when the implementation is upgraded."
            },
            "eventSelector": "bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b",
            "name": "Upgraded",
            "nameLocation": "739:8:40",
            "parameters": {
              "id": 49497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49496,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "764:14:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49498,
                  "src": "748:30:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49495,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "748:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "747:32:40"
            }
          },
          {
            "id": 49505,
            "nodeType": "EventDefinition",
            "src": "858:60:40",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 49499,
              "nodeType": "StructuredDocumentation",
              "src": "786:67:40",
              "text": " @dev Emitted when the admin account has changed."
            },
            "eventSelector": "7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f",
            "name": "AdminChanged",
            "nameLocation": "864:12:40",
            "parameters": {
              "id": 49504,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49501,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "previousAdmin",
                  "nameLocation": "885:13:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49505,
                  "src": "877:21:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "877:7:40",
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
                  "id": 49503,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newAdmin",
                  "nameLocation": "908:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49505,
                  "src": "900:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49502,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "900:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "876:41:40"
            }
          },
          {
            "id": 49510,
            "nodeType": "EventDefinition",
            "src": "988:45:40",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 49506,
              "nodeType": "StructuredDocumentation",
              "src": "924:59:40",
              "text": " @dev Emitted when the beacon is changed."
            },
            "eventSelector": "1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e",
            "name": "BeaconUpgraded",
            "nameLocation": "994:14:40",
            "parameters": {
              "id": 49509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49508,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "beacon",
                  "nameLocation": "1025:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49510,
                  "src": "1009:22:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49507,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1009:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1008:24:40"
            }
          },
          {
            "id": 49514,
            "nodeType": "VariableDeclaration",
            "src": "1279:114:40",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 49511,
              "nodeType": "StructuredDocumentation",
              "src": "1039:170:40",
              "text": " @dev Storage slot with the address of the current implementation.\n This is the keccak-256 hash of \"eip1967.proxy.implementation\" subtracted by 1."
            },
            "mutability": "constant",
            "name": "IMPLEMENTATION_SLOT",
            "nameLocation": "1305:19:40",
            "scope": 49787,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 49512,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1279:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307833363038393461313362613161333231303636376338323834393264623938646361336532303736636333373335613932306133636135303564333832626263",
              "id": 49513,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1327:66:40",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_24440054405305269366569402256811496959409073762505157381672968839269610695612_by_1",
                "typeString": "int_const 2444...(69 digits omitted)...5612"
              },
              "value": "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
            },
            "visibility": "internal"
          },
          {
            "id": 49519,
            "nodeType": "ErrorDefinition",
            "src": "1474:59:40",
            "nodes": [],
            "documentation": {
              "id": 49515,
              "nodeType": "StructuredDocumentation",
              "src": "1400:69:40",
              "text": " @dev The `implementation` of the proxy is invalid."
            },
            "errorSelector": "4c9c8ce3",
            "name": "ERC1967InvalidImplementation",
            "nameLocation": "1480:28:40",
            "parameters": {
              "id": 49518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49517,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "1517:14:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49519,
                  "src": "1509:22:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49516,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1509:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1508:24:40"
            }
          },
          {
            "id": 49524,
            "nodeType": "ErrorDefinition",
            "src": "1604:41:40",
            "nodes": [],
            "documentation": {
              "id": 49520,
              "nodeType": "StructuredDocumentation",
              "src": "1539:60:40",
              "text": " @dev The `admin` of the proxy is invalid."
            },
            "errorSelector": "62e77ba2",
            "name": "ERC1967InvalidAdmin",
            "nameLocation": "1610:19:40",
            "parameters": {
              "id": 49523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49522,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "1638:5:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49524,
                  "src": "1630:13:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49521,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1630:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1629:15:40"
            }
          },
          {
            "id": 49529,
            "nodeType": "ErrorDefinition",
            "src": "1717:43:40",
            "nodes": [],
            "documentation": {
              "id": 49525,
              "nodeType": "StructuredDocumentation",
              "src": "1651:61:40",
              "text": " @dev The `beacon` of the proxy is invalid."
            },
            "errorSelector": "64ced0ec",
            "name": "ERC1967InvalidBeacon",
            "nameLocation": "1723:20:40",
            "parameters": {
              "id": 49528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49527,
                  "mutability": "mutable",
                  "name": "beacon",
                  "nameLocation": "1752:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49529,
                  "src": "1744:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49526,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1744:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1743:16:40"
            }
          },
          {
            "id": 49532,
            "nodeType": "ErrorDefinition",
            "src": "1853:26:40",
            "nodes": [],
            "documentation": {
              "id": 49530,
              "nodeType": "StructuredDocumentation",
              "src": "1766:82:40",
              "text": " @dev An upgrade function sees `msg.value > 0` that may be lost."
            },
            "errorSelector": "b398979f",
            "name": "ERC1967NonPayable",
            "nameLocation": "1859:17:40",
            "parameters": {
              "id": 49531,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1876:2:40"
            }
          },
          {
            "id": 49545,
            "nodeType": "FunctionDefinition",
            "src": "1957:138:40",
            "nodes": [],
            "body": {
              "id": 49544,
              "nodeType": "Block",
              "src": "2018:77:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 49540,
                          "name": "IMPLEMENTATION_SLOT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49514,
                          "src": "2062:19:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "expression": {
                          "id": 49538,
                          "name": "StorageSlot",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51729,
                          "src": "2035:11:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_StorageSlot_$51729_$",
                            "typeString": "type(library StorageSlot)"
                          }
                        },
                        "id": 49539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2047:14:40",
                        "memberName": "getAddressSlot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 51651,
                        "src": "2035:26:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_struct$_AddressSlot_$51625_storage_ptr_$",
                          "typeString": "function (bytes32) pure returns (struct StorageSlot.AddressSlot storage pointer)"
                        }
                      },
                      "id": 49541,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2035:47:40",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AddressSlot_$51625_storage_ptr",
                        "typeString": "struct StorageSlot.AddressSlot storage pointer"
                      }
                    },
                    "id": 49542,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2083:5:40",
                    "memberName": "value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 51624,
                    "src": "2035:53:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 49537,
                  "id": 49543,
                  "nodeType": "Return",
                  "src": "2028:60:40"
                }
              ]
            },
            "documentation": {
              "id": 49533,
              "nodeType": "StructuredDocumentation",
              "src": "1885:67:40",
              "text": " @dev Returns the current implementation address."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getImplementation",
            "nameLocation": "1966:17:40",
            "parameters": {
              "id": 49534,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1983:2:40"
            },
            "returnParameters": {
              "id": 49537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49536,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49545,
                  "src": "2009:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49535,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2009:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2008:9:40"
            },
            "scope": 49787,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49572,
            "nodeType": "FunctionDefinition",
            "src": "2186:281:40",
            "nodes": [],
            "body": {
              "id": 49571,
              "nodeType": "Block",
              "src": "2249:218:40",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "expression": {
                          "id": 49551,
                          "name": "newImplementation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49548,
                          "src": "2263:17:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 49552,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2281:4:40",
                        "memberName": "code",
                        "nodeType": "MemberAccess",
                        "src": "2263:22:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 49553,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2286:6:40",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2263:29:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 49554,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2296:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2263:34:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49561,
                  "nodeType": "IfStatement",
                  "src": "2259:119:40",
                  "trueBody": {
                    "id": 49560,
                    "nodeType": "Block",
                    "src": "2299:79:40",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 49557,
                              "name": "newImplementation",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49548,
                              "src": "2349:17:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 49556,
                            "name": "ERC1967InvalidImplementation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49519,
                            "src": "2320:28:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 49558,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2320:47:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 49559,
                        "nodeType": "RevertStatement",
                        "src": "2313:54:40"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 49569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 49565,
                            "name": "IMPLEMENTATION_SLOT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49514,
                            "src": "2414:19:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 49562,
                            "name": "StorageSlot",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51729,
                            "src": "2387:11:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_StorageSlot_$51729_$",
                              "typeString": "type(library StorageSlot)"
                            }
                          },
                          "id": 49564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2399:14:40",
                          "memberName": "getAddressSlot",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 51651,
                          "src": "2387:26:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_struct$_AddressSlot_$51625_storage_ptr_$",
                            "typeString": "function (bytes32) pure returns (struct StorageSlot.AddressSlot storage pointer)"
                          }
                        },
                        "id": 49566,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2387:47:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AddressSlot_$51625_storage_ptr",
                          "typeString": "struct StorageSlot.AddressSlot storage pointer"
                        }
                      },
                      "id": 49567,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "2435:5:40",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 51624,
                      "src": "2387:53:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 49568,
                      "name": "newImplementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49548,
                      "src": "2443:17:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2387:73:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49570,
                  "nodeType": "ExpressionStatement",
                  "src": "2387:73:40"
                }
              ]
            },
            "documentation": {
              "id": 49546,
              "nodeType": "StructuredDocumentation",
              "src": "2101:80:40",
              "text": " @dev Stores a new address in the EIP1967 implementation slot."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setImplementation",
            "nameLocation": "2195:18:40",
            "parameters": {
              "id": 49549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49548,
                  "mutability": "mutable",
                  "name": "newImplementation",
                  "nameLocation": "2222:17:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49572,
                  "src": "2214:25:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49547,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2214:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2213:27:40"
            },
            "returnParameters": {
              "id": 49550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2249:0:40"
            },
            "scope": 49787,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 49606,
            "nodeType": "FunctionDefinition",
            "src": "2779:335:40",
            "nodes": [],
            "body": {
              "id": 49605,
              "nodeType": "Block",
              "src": "2860:254:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49581,
                        "name": "newImplementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49575,
                        "src": "2889:17:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 49580,
                      "name": "_setImplementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49572,
                      "src": "2870:18:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 49582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2870:37:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49583,
                  "nodeType": "ExpressionStatement",
                  "src": "2870:37:40"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 49585,
                        "name": "newImplementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49575,
                        "src": "2931:17:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 49584,
                      "name": "Upgraded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49498,
                      "src": "2922:8:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 49586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2922:27:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49587,
                  "nodeType": "EmitStatement",
                  "src": "2917:32:40"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49591,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 49588,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49577,
                        "src": "2964:4:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 49589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2969:6:40",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2964:11:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 49590,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2978:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2964:15:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 49603,
                    "nodeType": "Block",
                    "src": "3065:43:40",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 49600,
                            "name": "_checkNonPayable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49786,
                            "src": "3079:16:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 49601,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3079:18:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 49602,
                        "nodeType": "ExpressionStatement",
                        "src": "3079:18:40"
                      }
                    ]
                  },
                  "id": 49604,
                  "nodeType": "IfStatement",
                  "src": "2960:148:40",
                  "trueBody": {
                    "id": 49599,
                    "nodeType": "Block",
                    "src": "2981:78:40",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 49595,
                              "name": "newImplementation",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49575,
                              "src": "3024:17:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 49596,
                              "name": "data",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49577,
                              "src": "3043:4:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
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
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "expression": {
                              "id": 49592,
                              "name": "Address",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51304,
                              "src": "2995:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Address_$51304_$",
                                "typeString": "type(library Address)"
                              }
                            },
                            "id": 49594,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3003:20:40",
                            "memberName": "functionDelegateCall",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 51223,
                            "src": "2995:28:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function (address,bytes memory) returns (bytes memory)"
                            }
                          },
                          "id": 49597,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2995:53:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 49598,
                        "nodeType": "ExpressionStatement",
                        "src": "2995:53:40"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49573,
              "nodeType": "StructuredDocumentation",
              "src": "2473:301:40",
              "text": " @dev Performs implementation upgrade with additional setup call if data is nonempty.\n This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\n to avoid stuck value in the contract.\n Emits an {IERC1967-Upgraded} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upgradeToAndCall",
            "nameLocation": "2788:16:40",
            "parameters": {
              "id": 49578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49575,
                  "mutability": "mutable",
                  "name": "newImplementation",
                  "nameLocation": "2813:17:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49606,
                  "src": "2805:25:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49574,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2805:7:40",
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
                  "id": 49577,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "2845:4:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49606,
                  "src": "2832:17:40",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 49576,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2832:5:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2804:46:40"
            },
            "returnParameters": {
              "id": 49579,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2860:0:40"
            },
            "scope": 49787,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49610,
            "nodeType": "VariableDeclaration",
            "src": "3335:105:40",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 49607,
              "nodeType": "StructuredDocumentation",
              "src": "3120:145:40",
              "text": " @dev Storage slot with the admin of the contract.\n This is the keccak-256 hash of \"eip1967.proxy.admin\" subtracted by 1."
            },
            "mutability": "constant",
            "name": "ADMIN_SLOT",
            "nameLocation": "3361:10:40",
            "scope": 49787,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 49608,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "3335:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307862353331323736383461353638623331373361653133623966386136303136653234336536336236653865653131373864366137313738353062356436313033",
              "id": 49609,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3374:66:40",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_81955473079516046949633743016697847541294818689821282749996681496272635257091_by_1",
                "typeString": "int_const 8195...(69 digits omitted)...7091"
              },
              "value": "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103"
            },
            "visibility": "internal"
          },
          {
            "id": 49623,
            "nodeType": "FunctionDefinition",
            "src": "3792:120:40",
            "nodes": [],
            "body": {
              "id": 49622,
              "nodeType": "Block",
              "src": "3844:68:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 49618,
                          "name": "ADMIN_SLOT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49610,
                          "src": "3888:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "expression": {
                          "id": 49616,
                          "name": "StorageSlot",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51729,
                          "src": "3861:11:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_StorageSlot_$51729_$",
                            "typeString": "type(library StorageSlot)"
                          }
                        },
                        "id": 49617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3873:14:40",
                        "memberName": "getAddressSlot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 51651,
                        "src": "3861:26:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_struct$_AddressSlot_$51625_storage_ptr_$",
                          "typeString": "function (bytes32) pure returns (struct StorageSlot.AddressSlot storage pointer)"
                        }
                      },
                      "id": 49619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3861:38:40",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AddressSlot_$51625_storage_ptr",
                        "typeString": "struct StorageSlot.AddressSlot storage pointer"
                      }
                    },
                    "id": 49620,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3900:5:40",
                    "memberName": "value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 51624,
                    "src": "3861:44:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 49615,
                  "id": 49621,
                  "nodeType": "Return",
                  "src": "3854:51:40"
                }
              ]
            },
            "documentation": {
              "id": 49611,
              "nodeType": "StructuredDocumentation",
              "src": "3447:340:40",
              "text": " @dev Returns the current admin.\n TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using\n the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\n `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAdmin",
            "nameLocation": "3801:8:40",
            "parameters": {
              "id": 49612,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3809:2:40"
            },
            "returnParameters": {
              "id": 49615,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49614,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49623,
                  "src": "3835:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49613,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3835:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3834:9:40"
            },
            "scope": 49787,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49654,
            "nodeType": "FunctionDefinition",
            "src": "3994:217:40",
            "nodes": [],
            "body": {
              "id": 49653,
              "nodeType": "Block",
              "src": "4039:172:40",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 49634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 49629,
                      "name": "newAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49626,
                      "src": "4053:8:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 49632,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4073:1:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 49631,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "4065:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 49630,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4065:7:40",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49633,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4065:10:40",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4053:22:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49643,
                  "nodeType": "IfStatement",
                  "src": "4049:91:40",
                  "trueBody": {
                    "id": 49642,
                    "nodeType": "Block",
                    "src": "4077:63:40",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 49638,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4126:1:40",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 49637,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4118:7:40",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 49636,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4118:7:40",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 49639,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4118:10:40",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 49635,
                            "name": "ERC1967InvalidAdmin",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49524,
                            "src": "4098:19:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 49640,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4098:31:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 49641,
                        "nodeType": "RevertStatement",
                        "src": "4091:38:40"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 49651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 49647,
                            "name": "ADMIN_SLOT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49610,
                            "src": "4176:10:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 49644,
                            "name": "StorageSlot",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51729,
                            "src": "4149:11:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_StorageSlot_$51729_$",
                              "typeString": "type(library StorageSlot)"
                            }
                          },
                          "id": 49646,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4161:14:40",
                          "memberName": "getAddressSlot",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 51651,
                          "src": "4149:26:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_struct$_AddressSlot_$51625_storage_ptr_$",
                            "typeString": "function (bytes32) pure returns (struct StorageSlot.AddressSlot storage pointer)"
                          }
                        },
                        "id": 49648,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4149:38:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AddressSlot_$51625_storage_ptr",
                          "typeString": "struct StorageSlot.AddressSlot storage pointer"
                        }
                      },
                      "id": 49649,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4188:5:40",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 51624,
                      "src": "4149:44:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 49650,
                      "name": "newAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49626,
                      "src": "4196:8:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4149:55:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49652,
                  "nodeType": "ExpressionStatement",
                  "src": "4149:55:40"
                }
              ]
            },
            "documentation": {
              "id": 49624,
              "nodeType": "StructuredDocumentation",
              "src": "3918:71:40",
              "text": " @dev Stores a new address in the EIP1967 admin slot."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setAdmin",
            "nameLocation": "4003:9:40",
            "parameters": {
              "id": 49627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49626,
                  "mutability": "mutable",
                  "name": "newAdmin",
                  "nameLocation": "4021:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49654,
                  "src": "4013:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49625,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4013:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4012:18:40"
            },
            "returnParameters": {
              "id": 49628,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4039:0:40"
            },
            "scope": 49787,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 49671,
            "nodeType": "FunctionDefinition",
            "src": "4331:133:40",
            "nodes": [],
            "body": {
              "id": 49670,
              "nodeType": "Block",
              "src": "4379:85:40",
              "nodes": [],
              "statements": [
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 49661,
                          "name": "getAdmin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49623,
                          "src": "4407:8:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 49662,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4407:10:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 49663,
                        "name": "newAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49657,
                        "src": "4419:8:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                        }
                      ],
                      "id": 49660,
                      "name": "AdminChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49505,
                      "src": "4394:12:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 49664,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4394:34:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49665,
                  "nodeType": "EmitStatement",
                  "src": "4389:39:40"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49667,
                        "name": "newAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49657,
                        "src": "4448:8:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 49666,
                      "name": "_setAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49654,
                      "src": "4438:9:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 49668,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4438:19:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49669,
                  "nodeType": "ExpressionStatement",
                  "src": "4438:19:40"
                }
              ]
            },
            "documentation": {
              "id": 49655,
              "nodeType": "StructuredDocumentation",
              "src": "4217:109:40",
              "text": " @dev Changes the admin of the proxy.\n Emits an {IERC1967-AdminChanged} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "changeAdmin",
            "nameLocation": "4340:11:40",
            "parameters": {
              "id": 49658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49657,
                  "mutability": "mutable",
                  "name": "newAdmin",
                  "nameLocation": "4360:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49671,
                  "src": "4352:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49656,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4352:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4351:18:40"
            },
            "returnParameters": {
              "id": 49659,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4379:0:40"
            },
            "scope": 49787,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49675,
            "nodeType": "VariableDeclaration",
            "src": "4741:106:40",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 49672,
              "nodeType": "StructuredDocumentation",
              "src": "4470:201:40",
              "text": " @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.\n This is the keccak-256 hash of \"eip1967.proxy.beacon\" subtracted by 1."
            },
            "mutability": "constant",
            "name": "BEACON_SLOT",
            "nameLocation": "4767:11:40",
            "scope": 49787,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 49673,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "4741:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307861336630616437346535343233616562666438306433656634333436353738333335613961373261656165653539666636636233353832623335313333643530",
              "id": 49674,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4781:66:40",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_74152234768234802001998023604048924213078445070507226371336425913862612794704_by_1",
                "typeString": "int_const 7415...(69 digits omitted)...4704"
              },
              "value": "0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50"
            },
            "visibility": "internal"
          },
          {
            "id": 49688,
            "nodeType": "FunctionDefinition",
            "src": "4910:122:40",
            "nodes": [],
            "body": {
              "id": 49687,
              "nodeType": "Block",
              "src": "4963:69:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 49683,
                          "name": "BEACON_SLOT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49675,
                          "src": "5007:11:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "expression": {
                          "id": 49681,
                          "name": "StorageSlot",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51729,
                          "src": "4980:11:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_StorageSlot_$51729_$",
                            "typeString": "type(library StorageSlot)"
                          }
                        },
                        "id": 49682,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4992:14:40",
                        "memberName": "getAddressSlot",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 51651,
                        "src": "4980:26:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_struct$_AddressSlot_$51625_storage_ptr_$",
                          "typeString": "function (bytes32) pure returns (struct StorageSlot.AddressSlot storage pointer)"
                        }
                      },
                      "id": 49684,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4980:39:40",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_AddressSlot_$51625_storage_ptr",
                        "typeString": "struct StorageSlot.AddressSlot storage pointer"
                      }
                    },
                    "id": 49685,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5020:5:40",
                    "memberName": "value",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 51624,
                    "src": "4980:45:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 49680,
                  "id": 49686,
                  "nodeType": "Return",
                  "src": "4973:52:40"
                }
              ]
            },
            "documentation": {
              "id": 49676,
              "nodeType": "StructuredDocumentation",
              "src": "4854:51:40",
              "text": " @dev Returns the current beacon."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBeacon",
            "nameLocation": "4919:9:40",
            "parameters": {
              "id": 49677,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4928:2:40"
            },
            "returnParameters": {
              "id": 49680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49679,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49688,
                  "src": "4954:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49678,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4954:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4953:9:40"
            },
            "scope": 49787,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49734,
            "nodeType": "FunctionDefinition",
            "src": "5114:437:40",
            "nodes": [],
            "body": {
              "id": 49733,
              "nodeType": "Block",
              "src": "5161:390:40",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49698,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "expression": {
                          "id": 49694,
                          "name": "newBeacon",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49691,
                          "src": "5175:9:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 49695,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5185:4:40",
                        "memberName": "code",
                        "nodeType": "MemberAccess",
                        "src": "5175:14:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 49696,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5190:6:40",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "5175:21:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 49697,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5200:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5175:26:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49704,
                  "nodeType": "IfStatement",
                  "src": "5171:95:40",
                  "trueBody": {
                    "id": 49703,
                    "nodeType": "Block",
                    "src": "5203:63:40",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 49700,
                              "name": "newBeacon",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49691,
                              "src": "5245:9:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 49699,
                            "name": "ERC1967InvalidBeacon",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49529,
                            "src": "5224:20:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 49701,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5224:31:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 49702,
                        "nodeType": "RevertStatement",
                        "src": "5217:38:40"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 49712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 49708,
                            "name": "BEACON_SLOT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49675,
                            "src": "5303:11:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 49705,
                            "name": "StorageSlot",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51729,
                            "src": "5276:11:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_StorageSlot_$51729_$",
                              "typeString": "type(library StorageSlot)"
                            }
                          },
                          "id": 49707,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5288:14:40",
                          "memberName": "getAddressSlot",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 51651,
                          "src": "5276:26:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_struct$_AddressSlot_$51625_storage_ptr_$",
                            "typeString": "function (bytes32) pure returns (struct StorageSlot.AddressSlot storage pointer)"
                          }
                        },
                        "id": 49709,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5276:39:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_AddressSlot_$51625_storage_ptr",
                          "typeString": "struct StorageSlot.AddressSlot storage pointer"
                        }
                      },
                      "id": 49710,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5316:5:40",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 51624,
                      "src": "5276:45:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 49711,
                      "name": "newBeacon",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49691,
                      "src": "5324:9:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5276:57:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49713,
                  "nodeType": "ExpressionStatement",
                  "src": "5276:57:40"
                },
                {
                  "assignments": [
                    49715
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 49715,
                      "mutability": "mutable",
                      "name": "beaconImplementation",
                      "nameLocation": "5352:20:40",
                      "nodeType": "VariableDeclaration",
                      "scope": 49733,
                      "src": "5344:28:40",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 49714,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5344:7:40",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 49721,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "arguments": [
                          {
                            "id": 49717,
                            "name": "newBeacon",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49691,
                            "src": "5383:9:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 49716,
                          "name": "IBeacon",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49891,
                          "src": "5375:7:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IBeacon_$49891_$",
                            "typeString": "type(contract IBeacon)"
                          }
                        },
                        "id": 49718,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5375:18:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IBeacon_$49891",
                          "typeString": "contract IBeacon"
                        }
                      },
                      "id": 49719,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5394:14:40",
                      "memberName": "implementation",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 49890,
                      "src": "5375:33:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                        "typeString": "function () view external returns (address)"
                      }
                    },
                    "id": 49720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5375:35:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5344:66:40"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49726,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "expression": {
                          "id": 49722,
                          "name": "beaconImplementation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49715,
                          "src": "5424:20:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 49723,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5445:4:40",
                        "memberName": "code",
                        "nodeType": "MemberAccess",
                        "src": "5424:25:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 49724,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5450:6:40",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "5424:32:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 49725,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5460:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5424:37:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49732,
                  "nodeType": "IfStatement",
                  "src": "5420:125:40",
                  "trueBody": {
                    "id": 49731,
                    "nodeType": "Block",
                    "src": "5463:82:40",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 49728,
                              "name": "beaconImplementation",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49715,
                              "src": "5513:20:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 49727,
                            "name": "ERC1967InvalidImplementation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49519,
                            "src": "5484:28:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 49729,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5484:50:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 49730,
                        "nodeType": "RevertStatement",
                        "src": "5477:57:40"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49689,
              "nodeType": "StructuredDocumentation",
              "src": "5038:71:40",
              "text": " @dev Stores a new beacon in the EIP1967 beacon slot."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setBeacon",
            "nameLocation": "5123:10:40",
            "parameters": {
              "id": 49692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49691,
                  "mutability": "mutable",
                  "name": "newBeacon",
                  "nameLocation": "5142:9:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49734,
                  "src": "5134:17:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49690,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5134:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5133:19:40"
            },
            "returnParameters": {
              "id": 49693,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5161:0:40"
            },
            "scope": 49787,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 49772,
            "nodeType": "FunctionDefinition",
            "src": "6076:333:40",
            "nodes": [],
            "body": {
              "id": 49771,
              "nodeType": "Block",
              "src": "6155:254:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49743,
                        "name": "newBeacon",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49737,
                        "src": "6176:9:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 49742,
                      "name": "_setBeacon",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49734,
                      "src": "6165:10:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 49744,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6165:21:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49745,
                  "nodeType": "ExpressionStatement",
                  "src": "6165:21:40"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 49747,
                        "name": "newBeacon",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49737,
                        "src": "6216:9:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 49746,
                      "name": "BeaconUpgraded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49510,
                      "src": "6201:14:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 49748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6201:25:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49749,
                  "nodeType": "EmitStatement",
                  "src": "6196:30:40"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 49750,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49739,
                        "src": "6241:4:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 49751,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6246:6:40",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6241:11:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 49752,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6255:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6241:15:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 49769,
                    "nodeType": "Block",
                    "src": "6360:43:40",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 49766,
                            "name": "_checkNonPayable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49786,
                            "src": "6374:16:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 49767,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6374:18:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 49768,
                        "nodeType": "ExpressionStatement",
                        "src": "6374:18:40"
                      }
                    ]
                  },
                  "id": 49770,
                  "nodeType": "IfStatement",
                  "src": "6237:166:40",
                  "trueBody": {
                    "id": 49765,
                    "nodeType": "Block",
                    "src": "6258:96:40",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 49758,
                                      "name": "newBeacon",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 49737,
                                      "src": "6309:9:40",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "id": 49757,
                                    "name": "IBeacon",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 49891,
                                    "src": "6301:7:40",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IBeacon_$49891_$",
                                      "typeString": "type(contract IBeacon)"
                                    }
                                  },
                                  "id": 49759,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6301:18:40",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IBeacon_$49891",
                                    "typeString": "contract IBeacon"
                                  }
                                },
                                "id": 49760,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "6320:14:40",
                                "memberName": "implementation",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 49890,
                                "src": "6301:33:40",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                                  "typeString": "function () view external returns (address)"
                                }
                              },
                              "id": 49761,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6301:35:40",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 49762,
                              "name": "data",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49739,
                              "src": "6338:4:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
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
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "expression": {
                              "id": 49754,
                              "name": "Address",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 51304,
                              "src": "6272:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Address_$51304_$",
                                "typeString": "type(library Address)"
                              }
                            },
                            "id": 49756,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6280:20:40",
                            "memberName": "functionDelegateCall",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 51223,
                            "src": "6272:28:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function (address,bytes memory) returns (bytes memory)"
                            }
                          },
                          "id": 49763,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6272:71:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 49764,
                        "nodeType": "ExpressionStatement",
                        "src": "6272:71:40"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49735,
              "nodeType": "StructuredDocumentation",
              "src": "5557:514:40",
              "text": " @dev Change the beacon and trigger a setup call if data is nonempty.\n This function is payable only if the setup call is performed, otherwise `msg.value` is rejected\n to avoid stuck value in the contract.\n Emits an {IERC1967-BeaconUpgraded} event.\n CAUTION: Invoking this function has no effect on an instance of {BeaconProxy} since v5, since\n it uses an immutable beacon without looking at the value of the ERC-1967 beacon slot for\n efficiency."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upgradeBeaconToAndCall",
            "nameLocation": "6085:22:40",
            "parameters": {
              "id": 49740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49737,
                  "mutability": "mutable",
                  "name": "newBeacon",
                  "nameLocation": "6116:9:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49772,
                  "src": "6108:17:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49736,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6108:7:40",
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
                  "id": 49739,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "6140:4:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 49772,
                  "src": "6127:17:40",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 49738,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6127:5:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6107:38:40"
            },
            "returnParameters": {
              "id": 49741,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6155:0:40"
            },
            "scope": 49787,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 49786,
            "nodeType": "FunctionDefinition",
            "src": "6598:122:40",
            "nodes": [],
            "body": {
              "id": 49785,
              "nodeType": "Block",
              "src": "6634:86:40",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 49779,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 49776,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "6648:3:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 49777,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6652:5:40",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "6648:9:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 49778,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6660:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6648:13:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49784,
                  "nodeType": "IfStatement",
                  "src": "6644:70:40",
                  "trueBody": {
                    "id": 49783,
                    "nodeType": "Block",
                    "src": "6663:51:40",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 49780,
                            "name": "ERC1967NonPayable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49532,
                            "src": "6684:17:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 49781,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6684:19:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 49782,
                        "nodeType": "RevertStatement",
                        "src": "6677:26:40"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 49773,
              "nodeType": "StructuredDocumentation",
              "src": "6415:178:40",
              "text": " @dev Reverts if `msg.value` is not zero. It can be used to avoid `msg.value` stuck in the contract\n if an upgrade doesn't perform an initialization call."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkNonPayable",
            "nameLocation": "6607:16:40",
            "parameters": {
              "id": 49774,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6623:2:40"
            },
            "returnParameters": {
              "id": 49775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6634:0:40"
            },
            "scope": 49787,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "ERC1967Utils",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 49493,
          "nodeType": "StructuredDocumentation",
          "src": "294:154:40",
          "text": " @dev This abstract contract provides getters and event emitting update functions for\n https://eips.ethereum.org/EIPS/eip-1967[EIP1967] slots."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          49787
        ],
        "name": "ERC1967Utils",
        "nameLocation": "457:12:40",
        "scope": 49788,
        "usedErrors": [
          49519,
          49524,
          49529,
          49532
        ],
        "usedEvents": [
          49498,
          49505,
          49510
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 40
} as const;