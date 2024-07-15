export const IERC165 = {
  "abi": [
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
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
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC165 standard, as defined in the https://eips.ethereum.org/EIPS/eip-165[EIP]. Implementers can declare support of contract interfaces, which can then be queried by others ({ERC165Checker}). For an implementation, see {ERC165}.\",\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":\"IERC165\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df\",\"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL\"]}},\"version\":1}",
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
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "supportsInterface(bytes4)": {
            "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
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
        "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol": "IERC165"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b",
        "urls": [
          "bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df",
          "dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
    "id": 52771,
    "exportedSymbols": {
      "IERC165": [
        52770
      ]
    },
    "nodeType": "SourceUnit",
    "src": "115:754:66",
    "nodes": [
      {
        "id": 52760,
        "nodeType": "PragmaDirective",
        "src": "115:24:66",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 52770,
        "nodeType": "ContractDefinition",
        "src": "421:447:66",
        "nodes": [
          {
            "id": 52769,
            "nodeType": "FunctionDefinition",
            "src": "790:76:66",
            "nodes": [],
            "documentation": {
              "id": 52762,
              "nodeType": "StructuredDocumentation",
              "src": "445:340:66",
              "text": " @dev Returns true if this contract implements the interface defined by\n `interfaceId`. See the corresponding\n https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n to learn more about how these ids are created.\n This function call must use less than 30 000 gas."
            },
            "functionSelector": "01ffc9a7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "799:17:66",
            "parameters": {
              "id": 52765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52764,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "824:11:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 52769,
                  "src": "817:18:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 52763,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "817:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "816:20:66"
            },
            "returnParameters": {
              "id": 52768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52767,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52769,
                  "src": "860:4:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52766,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "860:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "859:6:66"
            },
            "scope": 52770,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC165",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 52761,
          "nodeType": "StructuredDocumentation",
          "src": "141:279:66",
          "text": " @dev Interface of the ERC165 standard, as defined in the\n https://eips.ethereum.org/EIPS/eip-165[EIP].\n Implementers can declare support of contract interfaces, which can then be\n queried by others ({ERC165Checker}).\n For an implementation, see {ERC165}."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          52770
        ],
        "name": "IERC165",
        "nameLocation": "431:7:66",
        "scope": 52771,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 66
} as const;