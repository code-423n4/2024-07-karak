export const IERC1271 = {
  "abi": [
    {
      "type": "function",
      "name": "isValidSignature",
      "inputs": [
        {
          "name": "hash",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "signature",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "magicValue",
          "type": "bytes4",
          "internalType": "bytes4"
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
    "isValidSignature(bytes32,bytes)": "1626ba7e"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"}],\"name\":\"isValidSignature\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"magicValue\",\"type\":\"bytes4\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC1271 standard signature validation method for contracts as defined in https://eips.ethereum.org/EIPS/eip-1271[ERC-1271].\",\"kind\":\"dev\",\"methods\":{\"isValidSignature(bytes32,bytes)\":{\"details\":\"Should return whether the signature provided is valid for the provided data\",\"params\":{\"hash\":\"Hash of the data to be signed\",\"signature\":\"Signature byte array associated with _data\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol\":\"IERC1271\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743\",\"dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL\"]}},\"version\":1}",
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
              "internalType": "bytes32",
              "name": "hash",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isValidSignature",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "magicValue",
              "type": "bytes4"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "isValidSignature(bytes32,bytes)": {
            "details": "Should return whether the signature provided is valid for the provided data",
            "params": {
              "hash": "Hash of the data to be signed",
              "signature": "Signature byte array associated with _data"
            }
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
        "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol": "IERC1271"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol": {
        "keccak256": "0x85a45f3f10014a0f8be41157a32b6a5f905753ea64a4b64e29fc12b7deeecf39",
        "urls": [
          "bzz-raw://c3c74009ce36136b36c77c23935b8e4a7b4f253be2da2be4fb4a916b1ce43743",
          "dweb:/ipfs/QmcH36v3iN7SJJuF73AunLR2LtNxhVJ1wm63ph4dPZ4pcL"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol",
    "id": 49005,
    "exportedSymbols": {
      "IERC1271": [
        49004
      ]
    },
    "nodeType": "SourceUnit",
    "src": "107:545:32",
    "nodes": [
      {
        "id": 48992,
        "nodeType": "PragmaDirective",
        "src": "107:24:32",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49004,
        "nodeType": "ContractDefinition",
        "src": "293:358:32",
        "nodes": [
          {
            "id": 49003,
            "nodeType": "FunctionDefinition",
            "src": "543:106:32",
            "nodes": [],
            "documentation": {
              "id": 48994,
              "nodeType": "StructuredDocumentation",
              "src": "318:220:32",
              "text": " @dev Should return whether the signature provided is valid for the provided data\n @param hash      Hash of the data to be signed\n @param signature Signature byte array associated with _data"
            },
            "functionSelector": "1626ba7e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isValidSignature",
            "nameLocation": "552:16:32",
            "parameters": {
              "id": 48999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48996,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "577:4:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 49003,
                  "src": "569:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48995,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "569:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48998,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "596:9:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 49003,
                  "src": "583:22:32",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 48997,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "583:5:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "568:38:32"
            },
            "returnParameters": {
              "id": 49002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49001,
                  "mutability": "mutable",
                  "name": "magicValue",
                  "nameLocation": "637:10:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 49003,
                  "src": "630:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 49000,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "630:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "629:19:32"
            },
            "scope": 49004,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC1271",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 48993,
          "nodeType": "StructuredDocumentation",
          "src": "133:159:32",
          "text": " @dev Interface of the ERC1271 standard signature validation method for\n contracts as defined in https://eips.ethereum.org/EIPS/eip-1271[ERC-1271]."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          49004
        ],
        "name": "IERC1271",
        "nameLocation": "303:8:32",
        "scope": 49005,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 32
} as const;