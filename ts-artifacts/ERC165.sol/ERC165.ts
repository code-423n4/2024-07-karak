export const ERC165 = {
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the {IERC165} interface. Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check for the additional interface id that will be supported. For example: ```solidity function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId); } ```\",\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol\":\"ERC165\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8\",\"dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df\",\"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL\"]}},\"version\":1}",
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
            "details": "See {IERC165-supportsInterface}."
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
        "node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol": "ERC165"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133",
        "urls": [
          "bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8",
          "dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA"
        ],
        "license": "MIT"
      },
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
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol",
    "id": 52759,
    "exportedSymbols": {
      "ERC165": [
        52758
      ],
      "IERC165": [
        52770
      ]
    },
    "nodeType": "SourceUnit",
    "src": "114:797:65",
    "nodes": [
      {
        "id": 52736,
        "nodeType": "PragmaDirective",
        "src": "114:24:65",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 52738,
        "nodeType": "ImportDirective",
        "src": "140:38:65",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "./IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 52759,
        "sourceUnit": 52771,
        "symbolAliases": [
          {
            "foreign": {
              "id": 52737,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52770,
              "src": "148:7:65",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 52758,
        "nodeType": "ContractDefinition",
        "src": "659:251:65",
        "nodes": [
          {
            "id": 52757,
            "nodeType": "FunctionDefinition",
            "src": "762:146:65",
            "nodes": [],
            "body": {
              "id": 52756,
              "nodeType": "Block",
              "src": "844:64:65",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 52754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 52749,
                      "name": "interfaceId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52744,
                      "src": "861:11:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 52751,
                            "name": "IERC165",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52770,
                            "src": "881:7:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$52770_$",
                              "typeString": "type(contract IERC165)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$52770_$",
                              "typeString": "type(contract IERC165)"
                            }
                          ],
                          "id": 52750,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "876:4:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 52752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "876:13:65",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_contract$_IERC165_$52770",
                          "typeString": "type(contract IERC165)"
                        }
                      },
                      "id": 52753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "890:11:65",
                      "memberName": "interfaceId",
                      "nodeType": "MemberAccess",
                      "src": "876:25:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "861:40:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 52748,
                  "id": 52755,
                  "nodeType": "Return",
                  "src": "854:47:65"
                }
              ]
            },
            "baseFunctions": [
              52769
            ],
            "documentation": {
              "id": 52742,
              "nodeType": "StructuredDocumentation",
              "src": "701:56:65",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "771:17:65",
            "parameters": {
              "id": 52745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52744,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "796:11:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 52757,
                  "src": "789:18:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 52743,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "789:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "788:20:65"
            },
            "returnParameters": {
              "id": 52748,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52747,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52757,
                  "src": "838:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 52746,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "838:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "837:6:65"
            },
            "scope": 52758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 52740,
              "name": "IERC165",
              "nameLocations": [
                "687:7:65"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 52770,
              "src": "687:7:65"
            },
            "id": 52741,
            "nodeType": "InheritanceSpecifier",
            "src": "687:7:65"
          }
        ],
        "canonicalName": "ERC165",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 52739,
          "nodeType": "StructuredDocumentation",
          "src": "180:478:65",
          "text": " @dev Implementation of the {IERC165} interface.\n Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n for the additional interface id that will be supported. For example:\n ```solidity\n function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n }\n ```"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          52758,
          52770
        ],
        "name": "ERC165",
        "nameLocation": "677:6:65",
        "scope": 52759,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 65
} as const;