export const UUPSUpgradeable = {
  "abi": [
    {
      "type": "function",
      "name": "proxiableUUID",
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
      "name": "upgradeToAndCall",
      "inputs": [
        {
          "name": "newImplementation",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
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
      "name": "UnauthorizedCallContext",
      "inputs": []
    },
    {
      "type": "error",
      "name": "UpgradeFailed",
      "inputs": []
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
    "proxiableUUID()": "52d1902d",
    "upgradeToAndCall(address,bytes)": "4f1ef286"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"UnauthorizedCallContext\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpgradeFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"proxiableUUID\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/utils/UUPSUpgradeable.sol)Modified from OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/UUPSUpgradeable.sol) Note: - This implementation is intended to be used with ERC1967 proxies. See: `LibClone.deployERC1967` and related functions. - This implementation is NOT compatible with legacy OpenZeppelin proxies which do not store the implementation at `_ERC1967_IMPLEMENTATION_SLOT`.\",\"errors\":{\"UnauthorizedCallContext()\":[{\"details\":\"The call is from an unauthorized call context.\"}],\"UpgradeFailed()\":[{\"details\":\"The upgrade failed.\"}]},\"events\":{\"Upgraded(address)\":{\"details\":\"Emitted when the proxy's implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{\"proxiableUUID()\":{\"details\":\"Returns the storage slot used by the implementation, as specified in [ERC1822](https://eips.ethereum.org/EIPS/eip-1822). Note: The `notDelegated` modifier prevents accidental upgrades to an implementation that is a proxy contract.\"},\"upgradeToAndCall(address,bytes)\":{\"details\":\"Upgrades the proxy's implementation to `newImplementation`. Emits a {Upgraded} event. Note: Passing in empty `data` skips the delegatecall to `newImplementation`.\"}},\"stateVariables\":{\"_ERC1967_IMPLEMENTATION_SLOT\":{\"details\":\"The ERC-1967 storage slot for the implementation in the proxy. `uint256(keccak256(\\\"eip1967.proxy.implementation\\\")) - 1`.\"},\"_UPGRADED_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"Upgraded(address)\\\"))`.\"},\"__self\":{\"details\":\"For checking if the context is a delegate call.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"UUPS proxy mixin.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/utils/UUPSUpgradeable.sol\":\"UUPSUpgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/utils/UUPSUpgradeable.sol\":{\"keccak256\":\"0x0f4da34fe99caf063e6d3a09d0a4ce783fdcd955b475d46ba00be48f7fda348f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5f8e8e92e7b781a8b0d3fdb720915964f46354395a806e87aa7d0a355a024a83\",\"dweb:/ipfs/QmdDmVgUstEYpVQn97jDdaACoqoqiEvcXjxtEhC8b6vmFC\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "UnauthorizedCallContext"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UpgradeFailed"
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
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "proxiableUUID",
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
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "upgradeToAndCall"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "proxiableUUID()": {
            "details": "Returns the storage slot used by the implementation, as specified in [ERC1822](https://eips.ethereum.org/EIPS/eip-1822). Note: The `notDelegated` modifier prevents accidental upgrades to an implementation that is a proxy contract."
          },
          "upgradeToAndCall(address,bytes)": {
            "details": "Upgrades the proxy's implementation to `newImplementation`. Emits a {Upgraded} event. Note: Passing in empty `data` skips the delegatecall to `newImplementation`."
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
        "node_modules/solady/src/utils/UUPSUpgradeable.sol": "UUPSUpgradeable"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/solady/src/utils/UUPSUpgradeable.sol": {
        "keccak256": "0x0f4da34fe99caf063e6d3a09d0a4ce783fdcd955b475d46ba00be48f7fda348f",
        "urls": [
          "bzz-raw://5f8e8e92e7b781a8b0d3fdb720915964f46354395a806e87aa7d0a355a024a83",
          "dweb:/ipfs/QmdDmVgUstEYpVQn97jDdaACoqoqiEvcXjxtEhC8b6vmFC"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/utils/UUPSUpgradeable.sol",
    "id": 58966,
    "exportedSymbols": {
      "UUPSUpgradeable": [
        58965
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:6633:77",
    "nodes": [
      {
        "id": 58878,
        "nodeType": "PragmaDirective",
        "src": "32:23:77",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 58965,
        "nodeType": "ContractDefinition",
        "src": "635:6029:77",
        "nodes": [
          {
            "id": 58882,
            "nodeType": "ErrorDefinition",
            "src": "991:22:77",
            "nodes": [],
            "documentation": {
              "id": 58880,
              "nodeType": "StructuredDocumentation",
              "src": "958:28:77",
              "text": "@dev The upgrade failed."
            },
            "errorSelector": "55299b49",
            "name": "UpgradeFailed",
            "nameLocation": "997:13:77",
            "parameters": {
              "id": 58881,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1010:2:77"
            }
          },
          {
            "id": 58885,
            "nodeType": "ErrorDefinition",
            "src": "1079:32:77",
            "nodes": [],
            "documentation": {
              "id": 58883,
              "nodeType": "StructuredDocumentation",
              "src": "1019:55:77",
              "text": "@dev The call is from an unauthorized call context."
            },
            "errorSelector": "9f03a026",
            "name": "UnauthorizedCallContext",
            "nameLocation": "1085:23:77",
            "parameters": {
              "id": 58884,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1108:2:77"
            }
          },
          {
            "id": 58898,
            "nodeType": "VariableDeclaration",
            "src": "1461:66:77",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 58886,
              "nodeType": "StructuredDocumentation",
              "src": "1400:56:77",
              "text": "@dev For checking if the context is a delegate call."
            },
            "mutability": "immutable",
            "name": "__self",
            "nameLocation": "1487:6:77",
            "scope": 58965,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 58887,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1461:7:77",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "arguments": [
                {
                  "arguments": [
                    {
                      "arguments": [
                        {
                          "id": 58894,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "1520:4:77",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_UUPSUpgradeable_$58965",
                            "typeString": "contract UUPSUpgradeable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_UUPSUpgradeable_$58965",
                            "typeString": "contract UUPSUpgradeable"
                          }
                        ],
                        "id": 58893,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1512:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 58892,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1512:7:77",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 58895,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1512:13:77",
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
                    "id": 58891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "1504:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_uint160_$",
                      "typeString": "type(uint160)"
                    },
                    "typeName": {
                      "id": 58890,
                      "name": "uint160",
                      "nodeType": "ElementaryTypeName",
                      "src": "1504:7:77",
                      "typeDescriptions": {}
                    }
                  },
                  "id": 58896,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "nameLocations": [],
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1504:22:77",
                  "tryCall": false,
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint160",
                    "typeString": "uint160"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_uint160",
                    "typeString": "uint160"
                  }
                ],
                "id": 58889,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "1496:7:77",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_uint256_$",
                  "typeString": "type(uint256)"
                },
                "typeName": {
                  "id": 58888,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1496:7:77",
                  "typeDescriptions": {}
                }
              },
              "id": 58897,
              "isConstant": false,
              "isLValue": false,
              "isPure": false,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1496:31:77",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "id": 58903,
            "nodeType": "EventDefinition",
            "src": "1883:47:77",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 58899,
              "nodeType": "StructuredDocumentation",
              "src": "1817:61:77",
              "text": "@dev Emitted when the proxy's implementation is upgraded."
            },
            "eventSelector": "bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b",
            "name": "Upgraded",
            "nameLocation": "1889:8:77",
            "parameters": {
              "id": 58902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58901,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "1914:14:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58903,
                  "src": "1898:30:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58900,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1898:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1897:32:77"
            }
          },
          {
            "id": 58907,
            "nodeType": "VariableDeclaration",
            "src": "1990:127:77",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 58904,
              "nodeType": "StructuredDocumentation",
              "src": "1936:49:77",
              "text": "@dev `keccak256(bytes(\"Upgraded(address)\"))`."
            },
            "mutability": "constant",
            "name": "_UPGRADED_EVENT_SIGNATURE",
            "nameLocation": "2015:25:77",
            "scope": 58965,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 58905,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1990:7:77",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307862633763643735613230656532376664396164656261623332303431663735353231346462633662666661393063633032323562333964613265356332643362",
              "id": 58906,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2051:66:77",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_85255390875014325802867460126659607941379558699672153012307716606304121007419_by_1",
                "typeString": "int_const 8525...(69 digits omitted)...7419"
              },
              "value": "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b"
            },
            "visibility": "private"
          },
          {
            "id": 58911,
            "nodeType": "VariableDeclaration",
            "src": "2549:131:77",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 58908,
              "nodeType": "StructuredDocumentation",
              "src": "2407:137:77",
              "text": "@dev The ERC-1967 storage slot for the implementation in the proxy.\n `uint256(keccak256(\"eip1967.proxy.implementation\")) - 1`."
            },
            "mutability": "constant",
            "name": "_ERC1967_IMPLEMENTATION_SLOT",
            "nameLocation": "2575:28:77",
            "scope": 58965,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 58909,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2549:7:77",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307833363038393461313362613161333231303636376338323834393264623938646361336532303736636333373335613932306133636135303564333832626263",
              "id": 58910,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2614:66:77",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_24440054405305269366569402256811496959409073762505157381672968839269610695612_by_1",
                "typeString": "int_const 2444...(69 digits omitted)...5612"
              },
              "value": "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
            },
            "visibility": "internal"
          },
          {
            "id": 58917,
            "nodeType": "FunctionDefinition",
            "src": "3226:71:77",
            "nodes": [],
            "documentation": {
              "id": 58912,
              "nodeType": "StructuredDocumentation",
              "src": "2970:251:77",
              "text": "@dev Please override this function to check if `msg.sender` is authorized\n to upgrade the proxy to `newImplementation`, reverting if not.\n ```\n     function _authorizeUpgrade(address) internal override onlyOwner {}\n ```"
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_authorizeUpgrade",
            "nameLocation": "3235:17:77",
            "parameters": {
              "id": 58915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58914,
                  "mutability": "mutable",
                  "name": "newImplementation",
                  "nameLocation": "3261:17:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58917,
                  "src": "3253:25:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58913,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3253:7:77",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3252:27:77"
            },
            "returnParameters": {
              "id": 58916,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3296:0:77"
            },
            "scope": 58965,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 58928,
            "nodeType": "FunctionDefinition",
            "src": "3579:227:77",
            "nodes": [],
            "body": {
              "id": 58927,
              "nodeType": "Block",
              "src": "3655:151:77",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 58925,
                    "name": "_ERC1967_IMPLEMENTATION_SLOT",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 58911,
                    "src": "3771:28:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 58924,
                  "id": 58926,
                  "nodeType": "Return",
                  "src": "3764:35:77"
                }
              ]
            },
            "documentation": {
              "id": 58918,
              "nodeType": "StructuredDocumentation",
              "src": "3303:271:77",
              "text": "@dev Returns the storage slot used by the implementation,\n as specified in [ERC1822](https://eips.ethereum.org/EIPS/eip-1822).\n Note: The `notDelegated` modifier prevents accidental upgrades to\n an implementation that is a proxy contract."
            },
            "functionSelector": "52d1902d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 58921,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 58920,
                  "name": "notDelegated",
                  "nameLocations": [
                    "3624:12:77"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58964,
                  "src": "3624:12:77"
                },
                "nodeType": "ModifierInvocation",
                "src": "3624:12:77"
              }
            ],
            "name": "proxiableUUID",
            "nameLocation": "3588:13:77",
            "parameters": {
              "id": 58919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3601:2:77"
            },
            "returnParameters": {
              "id": 58924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58923,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58928,
                  "src": "3646:7:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58922,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3646:7:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3645:9:77"
            },
            "scope": 58965,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58944,
            "nodeType": "FunctionDefinition",
            "src": "4012:1575:77",
            "nodes": [],
            "body": {
              "id": 58943,
              "nodeType": "Block",
              "src": "4155:1432:77",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 58939,
                        "name": "newImplementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58931,
                        "src": "4183:17:77",
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
                      "id": 58938,
                      "name": "_authorizeUpgrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58917,
                      "src": "4165:17:77",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 58940,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4165:36:77",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58941,
                  "nodeType": "ExpressionStatement",
                  "src": "4165:36:77"
                },
                {
                  "AST": {
                    "nativeSrc": "4263:1318:77",
                    "nodeType": "YulBlock",
                    "src": "4263:1318:77",
                    "statements": [
                      {
                        "nativeSrc": "4277:56:77",
                        "nodeType": "YulAssignment",
                        "src": "4277:56:77",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4302:2:77",
                              "nodeType": "YulLiteral",
                              "src": "4302:2:77",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "4310:2:77",
                                  "nodeType": "YulLiteral",
                                  "src": "4310:2:77",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "newImplementation",
                                  "nativeSrc": "4314:17:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "4314:17:77"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "4306:3:77",
                                "nodeType": "YulIdentifier",
                                "src": "4306:3:77"
                              },
                              "nativeSrc": "4306:26:77",
                              "nodeType": "YulFunctionCall",
                              "src": "4306:26:77"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "4298:3:77",
                            "nodeType": "YulIdentifier",
                            "src": "4298:3:77"
                          },
                          "nativeSrc": "4298:35:77",
                          "nodeType": "YulFunctionCall",
                          "src": "4298:35:77"
                        },
                        "variableNames": [
                          {
                            "name": "newImplementation",
                            "nativeSrc": "4277:17:77",
                            "nodeType": "YulIdentifier",
                            "src": "4277:17:77"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4378:4:77",
                              "nodeType": "YulLiteral",
                              "src": "4378:4:77",
                              "type": "",
                              "value": "0x01"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4384:10:77",
                              "nodeType": "YulLiteral",
                              "src": "4384:10:77",
                              "type": "",
                              "value": "0x52d1902d"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4371:6:77",
                            "nodeType": "YulIdentifier",
                            "src": "4371:6:77"
                          },
                          "nativeSrc": "4371:24:77",
                          "nodeType": "YulFunctionCall",
                          "src": "4371:24:77"
                        },
                        "nativeSrc": "4371:24:77",
                        "nodeType": "YulExpressionStatement",
                        "src": "4371:24:77"
                      },
                      {
                        "nativeSrc": "4430:37:77",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4430:37:77",
                        "value": {
                          "name": "_ERC1967_IMPLEMENTATION_SLOT",
                          "nativeSrc": "4439:28:77",
                          "nodeType": "YulIdentifier",
                          "src": "4439:28:77"
                        },
                        "variables": [
                          {
                            "name": "s",
                            "nativeSrc": "4434:1:77",
                            "nodeType": "YulTypedName",
                            "src": "4434:1:77",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "4648:113:77",
                          "nodeType": "YulBlock",
                          "src": "4648:113:77",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4673:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "4673:4:77",
                                    "type": "",
                                    "value": "0x01"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4679:10:77",
                                    "nodeType": "YulLiteral",
                                    "src": "4679:10:77",
                                    "type": "",
                                    "value": "0x55299b49"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "4666:6:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "4666:6:77"
                                },
                                "nativeSrc": "4666:24:77",
                                "nodeType": "YulFunctionCall",
                                "src": "4666:24:77"
                              },
                              "nativeSrc": "4666:24:77",
                              "nodeType": "YulExpressionStatement",
                              "src": "4666:24:77"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4736:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "4736:4:77",
                                    "type": "",
                                    "value": "0x1d"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4742:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "4742:4:77",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "4729:6:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "4729:6:77"
                                },
                                "nativeSrc": "4729:18:77",
                                "nodeType": "YulFunctionCall",
                                "src": "4729:18:77"
                              },
                              "nativeSrc": "4729:18:77",
                              "nodeType": "YulExpressionStatement",
                              "src": "4729:18:77"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "gas",
                                            "nativeSrc": "4592:3:77",
                                            "nodeType": "YulIdentifier",
                                            "src": "4592:3:77"
                                          },
                                          "nativeSrc": "4592:5:77",
                                          "nodeType": "YulFunctionCall",
                                          "src": "4592:5:77"
                                        },
                                        {
                                          "name": "newImplementation",
                                          "nativeSrc": "4599:17:77",
                                          "nodeType": "YulIdentifier",
                                          "src": "4599:17:77"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "4618:4:77",
                                          "nodeType": "YulLiteral",
                                          "src": "4618:4:77",
                                          "type": "",
                                          "value": "0x1d"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "4624:4:77",
                                          "nodeType": "YulLiteral",
                                          "src": "4624:4:77",
                                          "type": "",
                                          "value": "0x04"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "4630:4:77",
                                          "nodeType": "YulLiteral",
                                          "src": "4630:4:77",
                                          "type": "",
                                          "value": "0x01"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "4636:4:77",
                                          "nodeType": "YulLiteral",
                                          "src": "4636:4:77",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "staticcall",
                                        "nativeSrc": "4581:10:77",
                                        "nodeType": "YulIdentifier",
                                        "src": "4581:10:77"
                                      },
                                      "nativeSrc": "4581:60:77",
                                      "nodeType": "YulFunctionCall",
                                      "src": "4581:60:77"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "4575:5:77",
                                    "nodeType": "YulIdentifier",
                                    "src": "4575:5:77"
                                  },
                                  "nativeSrc": "4575:67:77",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4575:67:77"
                                },
                                {
                                  "name": "s",
                                  "nativeSrc": "4644:1:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "4644:1:77"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "4572:2:77",
                                "nodeType": "YulIdentifier",
                                "src": "4572:2:77"
                              },
                              "nativeSrc": "4572:74:77",
                              "nodeType": "YulFunctionCall",
                              "src": "4572:74:77"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "4565:6:77",
                            "nodeType": "YulIdentifier",
                            "src": "4565:6:77"
                          },
                          "nativeSrc": "4565:82:77",
                          "nodeType": "YulFunctionCall",
                          "src": "4565:82:77"
                        },
                        "nativeSrc": "4562:199:77",
                        "nodeType": "YulIf",
                        "src": "4562:199:77"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "4821:8:77",
                                "nodeType": "YulIdentifier",
                                "src": "4821:8:77"
                              },
                              "nativeSrc": "4821:10:77",
                              "nodeType": "YulFunctionCall",
                              "src": "4821:10:77"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4833:4:77",
                              "nodeType": "YulLiteral",
                              "src": "4833:4:77",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "_UPGRADED_EVENT_SIGNATURE",
                              "nativeSrc": "4839:25:77",
                              "nodeType": "YulIdentifier",
                              "src": "4839:25:77"
                            },
                            {
                              "name": "newImplementation",
                              "nativeSrc": "4866:17:77",
                              "nodeType": "YulIdentifier",
                              "src": "4866:17:77"
                            }
                          ],
                          "functionName": {
                            "name": "log2",
                            "nativeSrc": "4816:4:77",
                            "nodeType": "YulIdentifier",
                            "src": "4816:4:77"
                          },
                          "nativeSrc": "4816:68:77",
                          "nodeType": "YulFunctionCall",
                          "src": "4816:68:77"
                        },
                        "nativeSrc": "4816:68:77",
                        "nodeType": "YulExpressionStatement",
                        "src": "4816:68:77"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "s",
                              "nativeSrc": "4904:1:77",
                              "nodeType": "YulIdentifier",
                              "src": "4904:1:77"
                            },
                            {
                              "name": "newImplementation",
                              "nativeSrc": "4907:17:77",
                              "nodeType": "YulIdentifier",
                              "src": "4907:17:77"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "4897:6:77",
                            "nodeType": "YulIdentifier",
                            "src": "4897:6:77"
                          },
                          "nativeSrc": "4897:28:77",
                          "nodeType": "YulFunctionCall",
                          "src": "4897:28:77"
                        },
                        "nativeSrc": "4897:28:77",
                        "nodeType": "YulExpressionStatement",
                        "src": "4897:28:77"
                      },
                      {
                        "body": {
                          "nativeSrc": "5070:501:77",
                          "nodeType": "YulBlock",
                          "src": "5070:501:77",
                          "statements": [
                            {
                              "nativeSrc": "5168:20:77",
                              "nodeType": "YulVariableDeclaration",
                              "src": "5168:20:77",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5183:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "5183:4:77",
                                    "type": "",
                                    "value": "0x40"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "5177:5:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "5177:5:77"
                                },
                                "nativeSrc": "5177:11:77",
                                "nodeType": "YulFunctionCall",
                                "src": "5177:11:77"
                              },
                              "variables": [
                                {
                                  "name": "m",
                                  "nativeSrc": "5172:1:77",
                                  "nodeType": "YulTypedName",
                                  "src": "5172:1:77",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "m",
                                    "nativeSrc": "5218:1:77",
                                    "nodeType": "YulIdentifier",
                                    "src": "5218:1:77"
                                  },
                                  {
                                    "name": "data.offset",
                                    "nativeSrc": "5221:11:77",
                                    "nodeType": "YulIdentifier",
                                    "src": "5221:11:77"
                                  },
                                  {
                                    "name": "data.length",
                                    "nativeSrc": "5234:11:77",
                                    "nodeType": "YulIdentifier",
                                    "src": "5234:11:77"
                                  }
                                ],
                                "functionName": {
                                  "name": "calldatacopy",
                                  "nativeSrc": "5205:12:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "5205:12:77"
                                },
                                "nativeSrc": "5205:41:77",
                                "nodeType": "YulFunctionCall",
                                "src": "5205:41:77"
                              },
                              "nativeSrc": "5205:41:77",
                              "nodeType": "YulExpressionStatement",
                              "src": "5205:41:77"
                            },
                            {
                              "body": {
                                "nativeSrc": "5363:194:77",
                                "nodeType": "YulBlock",
                                "src": "5363:194:77",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "5465:1:77",
                                          "nodeType": "YulIdentifier",
                                          "src": "5465:1:77"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "5468:4:77",
                                          "nodeType": "YulLiteral",
                                          "src": "5468:4:77",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nativeSrc": "5474:14:77",
                                            "nodeType": "YulIdentifier",
                                            "src": "5474:14:77"
                                          },
                                          "nativeSrc": "5474:16:77",
                                          "nodeType": "YulFunctionCall",
                                          "src": "5474:16:77"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "returndatacopy",
                                        "nativeSrc": "5450:14:77",
                                        "nodeType": "YulIdentifier",
                                        "src": "5450:14:77"
                                      },
                                      "nativeSrc": "5450:41:77",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5450:41:77"
                                    },
                                    "nativeSrc": "5450:41:77",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5450:41:77"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "5519:1:77",
                                          "nodeType": "YulIdentifier",
                                          "src": "5519:1:77"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nativeSrc": "5522:14:77",
                                            "nodeType": "YulIdentifier",
                                            "src": "5522:14:77"
                                          },
                                          "nativeSrc": "5522:16:77",
                                          "nodeType": "YulFunctionCall",
                                          "src": "5522:16:77"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "5512:6:77",
                                        "nodeType": "YulIdentifier",
                                        "src": "5512:6:77"
                                      },
                                      "nativeSrc": "5512:27:77",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5512:27:77"
                                    },
                                    "nativeSrc": "5512:27:77",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5512:27:77"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "gas",
                                          "nativeSrc": "5286:3:77",
                                          "nodeType": "YulIdentifier",
                                          "src": "5286:3:77"
                                        },
                                        "nativeSrc": "5286:5:77",
                                        "nodeType": "YulFunctionCall",
                                        "src": "5286:5:77"
                                      },
                                      {
                                        "name": "newImplementation",
                                        "nativeSrc": "5293:17:77",
                                        "nodeType": "YulIdentifier",
                                        "src": "5293:17:77"
                                      },
                                      {
                                        "name": "m",
                                        "nativeSrc": "5312:1:77",
                                        "nodeType": "YulIdentifier",
                                        "src": "5312:1:77"
                                      },
                                      {
                                        "name": "data.length",
                                        "nativeSrc": "5315:11:77",
                                        "nodeType": "YulIdentifier",
                                        "src": "5315:11:77"
                                      },
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "codesize",
                                          "nativeSrc": "5328:8:77",
                                          "nodeType": "YulIdentifier",
                                          "src": "5328:8:77"
                                        },
                                        "nativeSrc": "5328:10:77",
                                        "nodeType": "YulFunctionCall",
                                        "src": "5328:10:77"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5340:4:77",
                                        "nodeType": "YulLiteral",
                                        "src": "5340:4:77",
                                        "type": "",
                                        "value": "0x00"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "delegatecall",
                                      "nativeSrc": "5273:12:77",
                                      "nodeType": "YulIdentifier",
                                      "src": "5273:12:77"
                                    },
                                    "nativeSrc": "5273:72:77",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5273:72:77"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "5266:6:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "5266:6:77"
                                },
                                "nativeSrc": "5266:80:77",
                                "nodeType": "YulFunctionCall",
                                "src": "5266:80:77"
                              },
                              "nativeSrc": "5263:294:77",
                              "nodeType": "YulIf",
                              "src": "5263:294:77"
                            }
                          ]
                        },
                        "condition": {
                          "name": "data.length",
                          "nativeSrc": "5058:11:77",
                          "nodeType": "YulIdentifier",
                          "src": "5058:11:77"
                        },
                        "nativeSrc": "5055:516:77",
                        "nodeType": "YulIf",
                        "src": "5055:516:77"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58911,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4439:28:77",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58907,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4839:25:77",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58933,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5058:11:77",
                      "suffix": "length",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58933,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5234:11:77",
                      "suffix": "length",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58933,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5315:11:77",
                      "suffix": "length",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58933,
                      "isOffset": true,
                      "isSlot": false,
                      "src": "5221:11:77",
                      "suffix": "offset",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58931,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4277:17:77",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58931,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4314:17:77",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58931,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4599:17:77",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58931,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4866:17:77",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58931,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4907:17:77",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58931,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5293:17:77",
                      "valueSize": 1
                    }
                  ],
                  "id": 58942,
                  "nodeType": "InlineAssembly",
                  "src": "4254:1327:77"
                }
              ]
            },
            "documentation": {
              "id": 58929,
              "nodeType": "StructuredDocumentation",
              "src": "3812:195:77",
              "text": "@dev Upgrades the proxy's implementation to `newImplementation`.\n Emits a {Upgraded} event.\n Note: Passing in empty `data` skips the delegatecall to `newImplementation`."
            },
            "functionSelector": "4f1ef286",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 58936,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 58935,
                  "name": "onlyProxy",
                  "nameLocations": [
                    "4141:9:77"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58954,
                  "src": "4141:9:77"
                },
                "nodeType": "ModifierInvocation",
                "src": "4141:9:77"
              }
            ],
            "name": "upgradeToAndCall",
            "nameLocation": "4021:16:77",
            "parameters": {
              "id": 58934,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58931,
                  "mutability": "mutable",
                  "name": "newImplementation",
                  "nameLocation": "4046:17:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58944,
                  "src": "4038:25:77",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58930,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4038:7:77",
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
                  "id": 58933,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4080:4:77",
                  "nodeType": "VariableDeclaration",
                  "scope": 58944,
                  "src": "4065:19:77",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 58932,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4065:5:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4037:48:77"
            },
            "returnParameters": {
              "id": 58937,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4155:0:77"
            },
            "scope": 58965,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 58954,
            "nodeType": "ModifierDefinition",
            "src": "5664:565:77",
            "nodes": [],
            "body": {
              "id": 58953,
              "nodeType": "Block",
              "src": "5685:544:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    58948
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 58948,
                      "mutability": "mutable",
                      "name": "s",
                      "nameLocation": "5703:1:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 58953,
                      "src": "5695:9:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 58947,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5695:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 58950,
                  "initialValue": {
                    "id": 58949,
                    "name": "__self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 58898,
                    "src": "5707:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5695:18:77"
                },
                {
                  "AST": {
                    "nativeSrc": "5775:437:77",
                    "nodeType": "YulBlock",
                    "src": "5775:437:77",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "6079:123:77",
                          "nodeType": "YulBlock",
                          "src": "6079:123:77",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6104:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "6104:4:77",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6110:10:77",
                                    "nodeType": "YulLiteral",
                                    "src": "6110:10:77",
                                    "type": "",
                                    "value": "0x9f03a026"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "6097:6:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "6097:6:77"
                                },
                                "nativeSrc": "6097:24:77",
                                "nodeType": "YulFunctionCall",
                                "src": "6097:24:77"
                              },
                              "nativeSrc": "6097:24:77",
                              "nodeType": "YulExpressionStatement",
                              "src": "6097:24:77"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6177:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "6177:4:77",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6183:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "6183:4:77",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "6170:6:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "6170:6:77"
                                },
                                "nativeSrc": "6170:18:77",
                                "nodeType": "YulFunctionCall",
                                "src": "6170:18:77"
                              },
                              "nativeSrc": "6170:18:77",
                              "nodeType": "YulExpressionStatement",
                              "src": "6170:18:77"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "s",
                              "nativeSrc": "6065:1:77",
                              "nodeType": "YulIdentifier",
                              "src": "6065:1:77"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "6068:7:77",
                                "nodeType": "YulIdentifier",
                                "src": "6068:7:77"
                              },
                              "nativeSrc": "6068:9:77",
                              "nodeType": "YulFunctionCall",
                              "src": "6068:9:77"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "6062:2:77",
                            "nodeType": "YulIdentifier",
                            "src": "6062:2:77"
                          },
                          "nativeSrc": "6062:16:77",
                          "nodeType": "YulFunctionCall",
                          "src": "6062:16:77"
                        },
                        "nativeSrc": "6059:143:77",
                        "nodeType": "YulIf",
                        "src": "6059:143:77"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58948,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6065:1:77",
                      "valueSize": 1
                    }
                  ],
                  "id": 58951,
                  "nodeType": "InlineAssembly",
                  "src": "5766:446:77"
                },
                {
                  "id": 58952,
                  "nodeType": "PlaceholderStatement",
                  "src": "6221:1:77"
                }
              ]
            },
            "documentation": {
              "id": 58945,
              "nodeType": "StructuredDocumentation",
              "src": "5593:66:77",
              "text": "@dev Requires that the execution is performed through a proxy."
            },
            "name": "onlyProxy",
            "nameLocation": "5673:9:77",
            "parameters": {
              "id": 58946,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5682:2:77"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58964,
            "nodeType": "ModifierDefinition",
            "src": "6356:306:77",
            "nodes": [],
            "body": {
              "id": 58963,
              "nodeType": "Block",
              "src": "6380:282:77",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    58958
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 58958,
                      "mutability": "mutable",
                      "name": "s",
                      "nameLocation": "6398:1:77",
                      "nodeType": "VariableDeclaration",
                      "scope": 58963,
                      "src": "6390:9:77",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 58957,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6390:7:77",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 58960,
                  "initialValue": {
                    "id": 58959,
                    "name": "__self",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 58898,
                    "src": "6402:6:77",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6390:18:77"
                },
                {
                  "AST": {
                    "nativeSrc": "6470:175:77",
                    "nodeType": "YulBlock",
                    "src": "6470:175:77",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "6512:123:77",
                          "nodeType": "YulBlock",
                          "src": "6512:123:77",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6537:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "6537:4:77",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6543:10:77",
                                    "nodeType": "YulLiteral",
                                    "src": "6543:10:77",
                                    "type": "",
                                    "value": "0x9f03a026"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "6530:6:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "6530:6:77"
                                },
                                "nativeSrc": "6530:24:77",
                                "nodeType": "YulFunctionCall",
                                "src": "6530:24:77"
                              },
                              "nativeSrc": "6530:24:77",
                              "nodeType": "YulExpressionStatement",
                              "src": "6530:24:77"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6610:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "6610:4:77",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6616:4:77",
                                    "nodeType": "YulLiteral",
                                    "src": "6616:4:77",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "6603:6:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "6603:6:77"
                                },
                                "nativeSrc": "6603:18:77",
                                "nodeType": "YulFunctionCall",
                                "src": "6603:18:77"
                              },
                              "nativeSrc": "6603:18:77",
                              "nodeType": "YulExpressionStatement",
                              "src": "6603:18:77"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "s",
                                  "nativeSrc": "6497:1:77",
                                  "nodeType": "YulIdentifier",
                                  "src": "6497:1:77"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "address",
                                    "nativeSrc": "6500:7:77",
                                    "nodeType": "YulIdentifier",
                                    "src": "6500:7:77"
                                  },
                                  "nativeSrc": "6500:9:77",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6500:9:77"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "6494:2:77",
                                "nodeType": "YulIdentifier",
                                "src": "6494:2:77"
                              },
                              "nativeSrc": "6494:16:77",
                              "nodeType": "YulFunctionCall",
                              "src": "6494:16:77"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "6487:6:77",
                            "nodeType": "YulIdentifier",
                            "src": "6487:6:77"
                          },
                          "nativeSrc": "6487:24:77",
                          "nodeType": "YulFunctionCall",
                          "src": "6487:24:77"
                        },
                        "nativeSrc": "6484:151:77",
                        "nodeType": "YulIf",
                        "src": "6484:151:77"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58958,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6497:1:77",
                      "valueSize": 1
                    }
                  ],
                  "id": 58961,
                  "nodeType": "InlineAssembly",
                  "src": "6461:184:77"
                },
                {
                  "id": 58962,
                  "nodeType": "PlaceholderStatement",
                  "src": "6654:1:77"
                }
              ]
            },
            "documentation": {
              "id": 58955,
              "nodeType": "StructuredDocumentation",
              "src": "6235:116:77",
              "text": "@dev Requires that the execution is NOT performed via delegatecall.\n This is the opposite of `onlyProxy`."
            },
            "name": "notDelegated",
            "nameLocation": "6365:12:77",
            "parameters": {
              "id": 58956,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6377:2:77"
            },
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "UUPSUpgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 58879,
          "nodeType": "StructuredDocumentation",
          "src": "57:578:77",
          "text": "@notice UUPS proxy mixin.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/utils/UUPSUpgradeable.sol)\n @author Modified from OpenZeppelin\n (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/UUPSUpgradeable.sol)\n Note:\n - This implementation is intended to be used with ERC1967 proxies.\n See: `LibClone.deployERC1967` and related functions.\n - This implementation is NOT compatible with legacy OpenZeppelin proxies\n which do not store the implementation at `_ERC1967_IMPLEMENTATION_SLOT`."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          58965
        ],
        "name": "UUPSUpgradeable",
        "nameLocation": "653:15:77",
        "scope": 58966,
        "usedErrors": [
          58882,
          58885
        ],
        "usedEvents": [
          58903
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 77
} as const;