export const Proxy = {
  "abi": [
    {
      "type": "fallback",
      "stateMutability": "payable"
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"stateMutability\":\"payable\",\"type\":\"fallback\"}],\"devdoc\":{\"details\":\"This abstract contract provides a fallback function that delegates all calls to another contract using the EVM instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to be specified by overriding the virtual {_implementation} function. Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a different contract through the {_delegate} function. The success and return data of the delegated call will be returned back to the caller of the proxy.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/proxy/Proxy.sol\":\"Proxy\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "fallback"
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
        "node_modules/@openzeppelin/contracts/proxy/Proxy.sol": "Proxy"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/proxy/Proxy.sol": {
        "keccak256": "0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd",
        "urls": [
          "bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac",
          "dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/proxy/Proxy.sol",
    "id": 49824,
    "exportedSymbols": {
      "Proxy": [
        49823
      ]
    },
    "nodeType": "SourceUnit",
    "src": "99:2571:41",
    "nodes": [
      {
        "id": 49789,
        "nodeType": "PragmaDirective",
        "src": "99:24:41",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49823,
        "nodeType": "ContractDefinition",
        "src": "724:1945:41",
        "nodes": [
          {
            "id": 49798,
            "nodeType": "FunctionDefinition",
            "src": "949:895:41",
            "nodes": [],
            "body": {
              "id": 49797,
              "nodeType": "Block",
              "src": "1009:835:41",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1028:810:41",
                    "nodeType": "YulBlock",
                    "src": "1028:810:41",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1281:1:41",
                              "nodeType": "YulLiteral",
                              "src": "1281:1:41",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1284:1:41",
                              "nodeType": "YulLiteral",
                              "src": "1284:1:41",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "calldatasize",
                                "nativeSrc": "1287:12:41",
                                "nodeType": "YulIdentifier",
                                "src": "1287:12:41"
                              },
                              "nativeSrc": "1287:14:41",
                              "nodeType": "YulFunctionCall",
                              "src": "1287:14:41"
                            }
                          ],
                          "functionName": {
                            "name": "calldatacopy",
                            "nativeSrc": "1268:12:41",
                            "nodeType": "YulIdentifier",
                            "src": "1268:12:41"
                          },
                          "nativeSrc": "1268:34:41",
                          "nodeType": "YulFunctionCall",
                          "src": "1268:34:41"
                        },
                        "nativeSrc": "1268:34:41",
                        "nodeType": "YulExpressionStatement",
                        "src": "1268:34:41"
                      },
                      {
                        "nativeSrc": "1429:74:41",
                        "nodeType": "YulVariableDeclaration",
                        "src": "1429:74:41",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nativeSrc": "1456:3:41",
                                "nodeType": "YulIdentifier",
                                "src": "1456:3:41"
                              },
                              "nativeSrc": "1456:5:41",
                              "nodeType": "YulFunctionCall",
                              "src": "1456:5:41"
                            },
                            {
                              "name": "implementation",
                              "nativeSrc": "1463:14:41",
                              "nodeType": "YulIdentifier",
                              "src": "1463:14:41"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1479:1:41",
                              "nodeType": "YulLiteral",
                              "src": "1479:1:41",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "calldatasize",
                                "nativeSrc": "1482:12:41",
                                "nodeType": "YulIdentifier",
                                "src": "1482:12:41"
                              },
                              "nativeSrc": "1482:14:41",
                              "nodeType": "YulFunctionCall",
                              "src": "1482:14:41"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1498:1:41",
                              "nodeType": "YulLiteral",
                              "src": "1498:1:41",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1501:1:41",
                              "nodeType": "YulLiteral",
                              "src": "1501:1:41",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "delegatecall",
                            "nativeSrc": "1443:12:41",
                            "nodeType": "YulIdentifier",
                            "src": "1443:12:41"
                          },
                          "nativeSrc": "1443:60:41",
                          "nodeType": "YulFunctionCall",
                          "src": "1443:60:41"
                        },
                        "variables": [
                          {
                            "name": "result",
                            "nativeSrc": "1433:6:41",
                            "nodeType": "YulTypedName",
                            "src": "1433:6:41",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1571:1:41",
                              "nodeType": "YulLiteral",
                              "src": "1571:1:41",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1574:1:41",
                              "nodeType": "YulLiteral",
                              "src": "1574:1:41",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "returndatasize",
                                "nativeSrc": "1577:14:41",
                                "nodeType": "YulIdentifier",
                                "src": "1577:14:41"
                              },
                              "nativeSrc": "1577:16:41",
                              "nodeType": "YulFunctionCall",
                              "src": "1577:16:41"
                            }
                          ],
                          "functionName": {
                            "name": "returndatacopy",
                            "nativeSrc": "1556:14:41",
                            "nodeType": "YulIdentifier",
                            "src": "1556:14:41"
                          },
                          "nativeSrc": "1556:38:41",
                          "nodeType": "YulFunctionCall",
                          "src": "1556:38:41"
                        },
                        "nativeSrc": "1556:38:41",
                        "nodeType": "YulExpressionStatement",
                        "src": "1556:38:41"
                      },
                      {
                        "cases": [
                          {
                            "body": {
                              "nativeSrc": "1689:59:41",
                              "nodeType": "YulBlock",
                              "src": "1689:59:41",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1714:1:41",
                                        "nodeType": "YulLiteral",
                                        "src": "1714:1:41",
                                        "type": "",
                                        "value": "0"
                                      },
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "returndatasize",
                                          "nativeSrc": "1717:14:41",
                                          "nodeType": "YulIdentifier",
                                          "src": "1717:14:41"
                                        },
                                        "nativeSrc": "1717:16:41",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1717:16:41"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "revert",
                                      "nativeSrc": "1707:6:41",
                                      "nodeType": "YulIdentifier",
                                      "src": "1707:6:41"
                                    },
                                    "nativeSrc": "1707:27:41",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1707:27:41"
                                  },
                                  "nativeSrc": "1707:27:41",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "1707:27:41"
                                }
                              ]
                            },
                            "nativeSrc": "1682:66:41",
                            "nodeType": "YulCase",
                            "src": "1682:66:41",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "1687:1:41",
                              "nodeType": "YulLiteral",
                              "src": "1687:1:41",
                              "type": "",
                              "value": "0"
                            }
                          },
                          {
                            "body": {
                              "nativeSrc": "1769:59:41",
                              "nodeType": "YulBlock",
                              "src": "1769:59:41",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "1794:1:41",
                                        "nodeType": "YulLiteral",
                                        "src": "1794:1:41",
                                        "type": "",
                                        "value": "0"
                                      },
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "returndatasize",
                                          "nativeSrc": "1797:14:41",
                                          "nodeType": "YulIdentifier",
                                          "src": "1797:14:41"
                                        },
                                        "nativeSrc": "1797:16:41",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1797:16:41"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "return",
                                      "nativeSrc": "1787:6:41",
                                      "nodeType": "YulIdentifier",
                                      "src": "1787:6:41"
                                    },
                                    "nativeSrc": "1787:27:41",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1787:27:41"
                                  },
                                  "nativeSrc": "1787:27:41",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "1787:27:41"
                                }
                              ]
                            },
                            "nativeSrc": "1761:67:41",
                            "nodeType": "YulCase",
                            "src": "1761:67:41",
                            "value": "default"
                          }
                        ],
                        "expression": {
                          "name": "result",
                          "nativeSrc": "1615:6:41",
                          "nodeType": "YulIdentifier",
                          "src": "1615:6:41"
                        },
                        "nativeSrc": "1608:220:41",
                        "nodeType": "YulSwitch",
                        "src": "1608:220:41"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 49793,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1463:14:41",
                      "valueSize": 1
                    }
                  ],
                  "id": 49796,
                  "nodeType": "InlineAssembly",
                  "src": "1019:819:41"
                }
              ]
            },
            "documentation": {
              "id": 49791,
              "nodeType": "StructuredDocumentation",
              "src": "754:190:41",
              "text": " @dev Delegates the current call to `implementation`.\n This function does not return to its internal call site, it will return directly to the external caller."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_delegate",
            "nameLocation": "958:9:41",
            "parameters": {
              "id": 49794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49793,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "976:14:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 49798,
                  "src": "968:22:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49792,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "968:7:41",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "967:24:41"
            },
            "returnParameters": {
              "id": 49795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1009:0:41"
            },
            "scope": 49823,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 49804,
            "nodeType": "FunctionDefinition",
            "src": "2028:67:41",
            "nodes": [],
            "documentation": {
              "id": 49799,
              "nodeType": "StructuredDocumentation",
              "src": "1850:173:41",
              "text": " @dev This is a virtual function that should be overridden so it returns the address to which the fallback\n function and {_fallback} should delegate."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_implementation",
            "nameLocation": "2037:15:41",
            "parameters": {
              "id": 49800,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2052:2:41"
            },
            "returnParameters": {
              "id": 49803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49802,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49804,
                  "src": "2086:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49801,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2086:7:41",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2085:9:41"
            },
            "scope": 49823,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 49814,
            "nodeType": "FunctionDefinition",
            "src": "2323:83:41",
            "nodes": [],
            "body": {
              "id": 49813,
              "nodeType": "Block",
              "src": "2361:45:41",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 49809,
                          "name": "_implementation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49804,
                          "src": "2381:15:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 49810,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2381:17:41",
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
                      "id": 49808,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49798,
                      "src": "2371:9:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 49811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2371:28:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49812,
                  "nodeType": "ExpressionStatement",
                  "src": "2371:28:41"
                }
              ]
            },
            "documentation": {
              "id": 49805,
              "nodeType": "StructuredDocumentation",
              "src": "2101:217:41",
              "text": " @dev Delegates the current call to the address returned by `_implementation()`.\n This function does not return to its internal call site, it will return directly to the external caller."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_fallback",
            "nameLocation": "2332:9:41",
            "parameters": {
              "id": 49806,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2341:2:41"
            },
            "returnParameters": {
              "id": 49807,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2361:0:41"
            },
            "scope": 49823,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 49822,
            "nodeType": "FunctionDefinition",
            "src": "2603:64:41",
            "nodes": [],
            "body": {
              "id": 49821,
              "nodeType": "Block",
              "src": "2639:28:41",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 49818,
                      "name": "_fallback",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49814,
                      "src": "2649:9:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 49819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2649:11:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49820,
                  "nodeType": "ExpressionStatement",
                  "src": "2649:11:41"
                }
              ]
            },
            "documentation": {
              "id": 49815,
              "nodeType": "StructuredDocumentation",
              "src": "2412:186:41",
              "text": " @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other\n function in the contract matches the call data."
            },
            "implemented": true,
            "kind": "fallback",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 49816,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2611:2:41"
            },
            "returnParameters": {
              "id": 49817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2639:0:41"
            },
            "scope": 49823,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "external"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "Proxy",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 49790,
          "nodeType": "StructuredDocumentation",
          "src": "125:598:41",
          "text": " @dev This abstract contract provides a fallback function that delegates all calls to another contract using the EVM\n instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to\n be specified by overriding the virtual {_implementation} function.\n Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a\n different contract through the {_delegate} function.\n The success and return data of the delegated call will be returned back to the caller of the proxy."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          49823
        ],
        "name": "Proxy",
        "nameLocation": "742:5:41",
        "scope": 49824,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 41
} as const;