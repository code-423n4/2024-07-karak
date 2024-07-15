export const SigUtils = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_DOMAIN_SEPARATOR",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "PERMIT_TYPEHASH",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTypedDataHash",
      "inputs": [
        {
          "name": "_permit",
          "type": "tuple",
          "internalType": "struct Permit",
          "components": [
            {
              "name": "owner",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "spender",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "value",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "nonce",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "deadline",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    }
  ],
  "bytecode": {
    "object": "0x608034604e57601f61031e38819003918201601f19168301916001600160401b03831184841017605357808492602094604052833981010312604e57516000556040516102b4908161006a8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604090808252600436101561001557600080fd5b600090813560e01c90816330adf81f14610222575063ba20b89d1461003957600080fd5b3461021f5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021f57815167ffffffffffffffff9160a08201838111838210176101f25784526004359073ffffffffffffffffffffffffffffffffffffffff808316928381036101ee578452602435908116908181036101ee576020850152608060443594858882015260643590816060820152608435928391015283549588519360208501967f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c988528a8601526060850152608084015260a083015260c082015260c0815260e0810192818410868511176101c1579061016091848852815190206101008201957f1901000000000000000000000000000000000000000000000000000000000000875261010283015261012282015260428452019382851090851117610194575082602094525190208152f35b807f4e487b7100000000000000000000000000000000000000000000000000000000602492526041600452fd5b6024837f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b8280fd5b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b80fd5b90503461027a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a57807f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960209252f35b5080fdfea2646970667358221220c3435349b2701251cdb456e23673b90643752e7296709e38c5080ff20225195b64736f6c63430008190033",
    "sourceMap": "145:970:107:-:0;;;;;;;;;;;;;-1:-1:-1;;145:970:107;;;;-1:-1:-1;;;;;145:970:107;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;145:970:107;;;;;;;;;;;-1:-1:-1;145:970:107;;;;;;-1:-1:-1;145:970:107;;;;;-1:-1:-1;145:970:107",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604090808252600436101561001557600080fd5b600090813560e01c90816330adf81f14610222575063ba20b89d1461003957600080fd5b3461021f5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021f57815167ffffffffffffffff9160a08201838111838210176101f25784526004359073ffffffffffffffffffffffffffffffffffffffff808316928381036101ee578452602435908116908181036101ee576020850152608060443594858882015260643590816060820152608435928391015283549588519360208501967f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c988528a8601526060850152608084015260a083015260c082015260c0815260e0810192818410868511176101c1579061016091848852815190206101008201957f1901000000000000000000000000000000000000000000000000000000000000875261010283015261012282015260428452019382851090851117610194575082602094525190208152f35b807f4e487b7100000000000000000000000000000000000000000000000000000000602492526041600452fd5b6024837f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b8280fd5b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b80fd5b90503461027a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a57807f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960209252f35b5080fdfea2646970667358221220c3435349b2701251cdb456e23673b90643752e7296709e38c5080ff20225195b64736f6c63430008190033",
    "sourceMap": "145:970:107:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;681:107;145:970;681:107;;145:970;453:66;145:970;;;;;;;;;;;;;;;;;;;;;;;681:107;;145:970;;;;;;;;;;;;;;;;;;;;;658:140;;1035:70;;;145:970;;;;;;;;;;;;;1035:70;;145:970;;;;;;;;;;;;;;;;;1025:81;;145:970;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;453:66;145:970;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "PERMIT_TYPEHASH()": "30adf81f",
    "getTypedDataHash((address,address,uint256,uint256,uint256))": "ba20b89d"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_DOMAIN_SEPARATOR\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"internalType\":\"struct Permit\",\"name\":\"_permit\",\"type\":\"tuple\"}],\"name\":\"getTypedDataHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/SigUtils.sol\":\"SigUtils\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"test/utils/SigUtils.sol\":{\"keccak256\":\"0x3b156b04dc0802abb18aaf5109b3a1fc2668c52e1bad3fd0a2f6368d00f87478\",\"urls\":[\"bzz-raw://7a4178749986705af4194e58463480908eb8b818a8319953a5d55deedf80a87d\",\"dweb:/ipfs/QmdRcySpehiZESMk74Q9aWHrQL3zSGfck7sfcxAQM6L7Zt\"]}},\"version\":1}",
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
              "name": "_DOMAIN_SEPARATOR",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "PERMIT_TYPEHASH",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct Permit",
              "name": "_permit",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                }
              ]
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getTypedDataHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
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
        "test/utils/SigUtils.sol": "SigUtils"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "test/utils/SigUtils.sol": {
        "keccak256": "0x3b156b04dc0802abb18aaf5109b3a1fc2668c52e1bad3fd0a2f6368d00f87478",
        "urls": [
          "bzz-raw://7a4178749986705af4194e58463480908eb8b818a8319953a5d55deedf80a87d",
          "dweb:/ipfs/QmdRcySpehiZESMk74Q9aWHrQL3zSGfck7sfcxAQM6L7Zt"
        ],
        "license": null
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/utils/SigUtils.sol",
    "id": 71528,
    "exportedSymbols": {
      "Permit": [
        71465
      ],
      "SigUtils": [
        71527
      ]
    },
    "nodeType": "SourceUnit",
    "src": "0:1116:107",
    "nodes": [
      {
        "id": 71454,
        "nodeType": "PragmaDirective",
        "src": "0:24:107",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 71465,
        "nodeType": "StructDefinition",
        "src": "26:117:107",
        "nodes": [],
        "canonicalName": "Permit",
        "members": [
          {
            "constant": false,
            "id": 71456,
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "54:5:107",
            "nodeType": "VariableDeclaration",
            "scope": 71465,
            "src": "46:13:107",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 71455,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "46:7:107",
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
            "id": 71458,
            "mutability": "mutable",
            "name": "spender",
            "nameLocation": "73:7:107",
            "nodeType": "VariableDeclaration",
            "scope": 71465,
            "src": "65:15:107",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 71457,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "65:7:107",
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
            "id": 71460,
            "mutability": "mutable",
            "name": "value",
            "nameLocation": "94:5:107",
            "nodeType": "VariableDeclaration",
            "scope": 71465,
            "src": "86:13:107",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 71459,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "86:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 71462,
            "mutability": "mutable",
            "name": "nonce",
            "nameLocation": "113:5:107",
            "nodeType": "VariableDeclaration",
            "scope": 71465,
            "src": "105:13:107",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 71461,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "105:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 71464,
            "mutability": "mutable",
            "name": "deadline",
            "nameLocation": "132:8:107",
            "nodeType": "VariableDeclaration",
            "scope": 71465,
            "src": "124:16:107",
            "stateVariable": false,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 71463,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "124:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          }
        ],
        "name": "Permit",
        "nameLocation": "33:6:107",
        "scope": 71528,
        "visibility": "public"
      },
      {
        "id": 71527,
        "nodeType": "ContractDefinition",
        "src": "145:970:107",
        "nodes": [
          {
            "id": 71467,
            "nodeType": "VariableDeclaration",
            "src": "169:33:107",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "DOMAIN_SEPARATOR",
            "nameLocation": "186:16:107",
            "scope": 71527,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 71466,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "169:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 71477,
            "nodeType": "FunctionDefinition",
            "src": "209:92:107",
            "nodes": [],
            "body": {
              "id": 71476,
              "nodeType": "Block",
              "src": "248:53:107",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 71474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 71472,
                      "name": "DOMAIN_SEPARATOR",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71467,
                      "src": "258:16:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 71473,
                      "name": "_DOMAIN_SEPARATOR",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71469,
                      "src": "277:17:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "258:36:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 71475,
                  "nodeType": "ExpressionStatement",
                  "src": "258:36:107"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 71470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71469,
                  "mutability": "mutable",
                  "name": "_DOMAIN_SEPARATOR",
                  "nameLocation": "229:17:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 71477,
                  "src": "221:25:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 71468,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "220:27:107"
            },
            "returnParameters": {
              "id": 71471,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "248:0:107"
            },
            "scope": 71527,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 71480,
            "nodeType": "VariableDeclaration",
            "src": "411:108:107",
            "nodes": [],
            "constant": true,
            "functionSelector": "30adf81f",
            "mutability": "constant",
            "name": "PERMIT_TYPEHASH",
            "nameLocation": "435:15:107",
            "scope": 71527,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 71478,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "411:7:107",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307836653731656461653132623162393766346431663630333730666566313031303566613266616165303132363131346131363963363438343564363132366339",
              "id": 71479,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "453:66:107",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_49955707469362902507454157297736832118868343942642399513960811609542965143241_by_1",
                "typeString": "int_const 4995...(69 digits omitted)...3241"
              },
              "value": "0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9"
            },
            "visibility": "public"
          },
          {
            "id": 71506,
            "nodeType": "FunctionDefinition",
            "src": "563:242:107",
            "nodes": [],
            "body": {
              "id": 71505,
              "nodeType": "Block",
              "src": "641:164:107",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 71491,
                            "name": "PERMIT_TYPEHASH",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71480,
                            "src": "692:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "expression": {
                              "id": 71492,
                              "name": "_permit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 71483,
                              "src": "709:7:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permit_$71465_memory_ptr",
                                "typeString": "struct Permit memory"
                              }
                            },
                            "id": 71493,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "717:5:107",
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 71456,
                            "src": "709:13:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "expression": {
                              "id": 71494,
                              "name": "_permit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 71483,
                              "src": "724:7:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permit_$71465_memory_ptr",
                                "typeString": "struct Permit memory"
                              }
                            },
                            "id": 71495,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "732:7:107",
                            "memberName": "spender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 71458,
                            "src": "724:15:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "expression": {
                              "id": 71496,
                              "name": "_permit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 71483,
                              "src": "741:7:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permit_$71465_memory_ptr",
                                "typeString": "struct Permit memory"
                              }
                            },
                            "id": 71497,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "749:5:107",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 71460,
                            "src": "741:13:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 71498,
                              "name": "_permit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 71483,
                              "src": "756:7:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permit_$71465_memory_ptr",
                                "typeString": "struct Permit memory"
                              }
                            },
                            "id": 71499,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "764:5:107",
                            "memberName": "nonce",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 71462,
                            "src": "756:13:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 71500,
                              "name": "_permit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 71483,
                              "src": "771:7:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permit_$71465_memory_ptr",
                                "typeString": "struct Permit memory"
                              }
                            },
                            "id": 71501,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "779:8:107",
                            "memberName": "deadline",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 71464,
                            "src": "771:16:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 71489,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "681:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 71490,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "685:6:107",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "681:10:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 71502,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "681:107:107",
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
                      "id": 71488,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "658:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 71503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "658:140:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 71487,
                  "id": 71504,
                  "nodeType": "Return",
                  "src": "651:147:107"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getStructHash",
            "nameLocation": "572:13:107",
            "parameters": {
              "id": 71484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71483,
                  "mutability": "mutable",
                  "name": "_permit",
                  "nameLocation": "600:7:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 71506,
                  "src": "586:21:107",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permit_$71465_memory_ptr",
                    "typeString": "struct Permit"
                  },
                  "typeName": {
                    "id": 71482,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 71481,
                      "name": "Permit",
                      "nameLocations": [
                        "586:6:107"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 71465,
                      "src": "586:6:107"
                    },
                    "referencedDeclaration": 71465,
                    "src": "586:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permit_$71465_storage_ptr",
                      "typeString": "struct Permit"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "585:23:107"
            },
            "returnParameters": {
              "id": 71487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71486,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 71506,
                  "src": "632:7:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 71485,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "632:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "631:9:107"
            },
            "scope": 71527,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 71526,
            "nodeType": "FunctionDefinition",
            "src": "929:184:107",
            "nodes": [],
            "body": {
              "id": 71525,
              "nodeType": "Block",
              "src": "1008:105:107",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "1901",
                            "id": 71517,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1052:10:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541",
                              "typeString": "literal_string hex\"1901\""
                            },
                            "value": "\u0019\u0001"
                          },
                          {
                            "id": 71518,
                            "name": "DOMAIN_SEPARATOR",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71467,
                            "src": "1064:16:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 71520,
                                "name": "_permit",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 71509,
                                "src": "1096:7:107",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Permit_$71465_memory_ptr",
                                  "typeString": "struct Permit memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Permit_$71465_memory_ptr",
                                  "typeString": "struct Permit memory"
                                }
                              ],
                              "id": 71519,
                              "name": "getStructHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 71506,
                              "src": "1082:13:107",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Permit_$71465_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (struct Permit memory) pure returns (bytes32)"
                              }
                            },
                            "id": 71521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1082:22:107",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541",
                              "typeString": "literal_string hex\"1901\""
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 71515,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1035:3:107",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 71516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1039:12:107",
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "src": "1035:16:107",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 71522,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1035:70:107",
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
                      "id": 71514,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "1025:9:107",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 71523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1025:81:107",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 71513,
                  "id": 71524,
                  "nodeType": "Return",
                  "src": "1018:88:107"
                }
              ]
            },
            "functionSelector": "ba20b89d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTypedDataHash",
            "nameLocation": "938:16:107",
            "parameters": {
              "id": 71510,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71509,
                  "mutability": "mutable",
                  "name": "_permit",
                  "nameLocation": "969:7:107",
                  "nodeType": "VariableDeclaration",
                  "scope": 71526,
                  "src": "955:21:107",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permit_$71465_memory_ptr",
                    "typeString": "struct Permit"
                  },
                  "typeName": {
                    "id": 71508,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 71507,
                      "name": "Permit",
                      "nameLocations": [
                        "955:6:107"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 71465,
                      "src": "955:6:107"
                    },
                    "referencedDeclaration": 71465,
                    "src": "955:6:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permit_$71465_storage_ptr",
                      "typeString": "struct Permit"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "954:23:107"
            },
            "returnParameters": {
              "id": 71513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71512,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 71526,
                  "src": "999:7:107",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 71511,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "999:7:107",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "998:9:107"
            },
            "scope": 71527,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SigUtils",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          71527
        ],
        "name": "SigUtils",
        "nameLocation": "154:8:107",
        "scope": 71528,
        "usedErrors": [],
        "usedEvents": []
      }
    ]
  },
  "id": 107
} as const;