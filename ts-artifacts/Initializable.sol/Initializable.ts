export const Initializable = {
  "abi": [
    {
      "type": "event",
      "name": "Initialized",
      "inputs": [
        {
          "name": "version",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "InvalidInitialization",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotInitializing",
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
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"}],\"devdoc\":{\"custom:oz-upgrades-unsafe-allow\":\"constructor constructor() {     _disableInitializers(); } ``` ====\",\"details\":\"This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer function so it can only be called once. The {initializer} modifier provided by this contract will have this effect. The initialization functions use a version number. Once a version number is used, it is consumed and cannot be reused. This mechanism prevents re-execution of each \\\"step\\\" but allows the creation of new initialization steps in case an upgrade adds a module that needs to be initialized. For example: [.hljs-theme-light.nopadding] ```solidity contract MyToken is ERC20Upgradeable {     function initialize() initializer public {         __ERC20_init(\\\"MyToken\\\", \\\"MTK\\\");     } } contract MyTokenV2 is MyToken, ERC20PermitUpgradeable {     function initializeV2() reinitializer(2) public {         __ERC20Permit_init(\\\"MyToken\\\");     } } ``` TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}. CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure that all initializers are idempotent. This is not verified automatically as constructors are by Solidity. [CAUTION] ==== Avoid leaving a contract uninitialized. An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation contract, which may impact the proxy. To prevent the implementation contract from being used, you should invoke the {_disableInitializers} function in the constructor to automatically lock it when it is deployed: [.hljs-theme-light.nopadding] ```\",\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":\"Initializable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]}},\"version\":1}",
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
          "name": "InvalidInitialization"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotInitializing"
        },
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "version",
              "type": "uint64",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Initialized",
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
        "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol": "Initializable"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol": {
        "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
        "urls": [
          "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
          "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
    "id": 46878,
    "exportedSymbols": {
      "Initializable": [
        46877
      ]
    },
    "nodeType": "SourceUnit",
    "src": "113:8797:24",
    "nodes": [
      {
        "id": 46625,
        "nodeType": "PragmaDirective",
        "src": "113:24:24",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 46877,
        "nodeType": "ContractDefinition",
        "src": "2349:6560:24",
        "nodes": [
          {
            "id": 46634,
            "nodeType": "StructDefinition",
            "src": "2685:290:24",
            "nodes": [],
            "canonicalName": "Initializable.InitializableStorage",
            "documentation": {
              "id": 46627,
              "nodeType": "StructuredDocumentation",
              "src": "2387:293:24",
              "text": " @dev Storage of the initializable contract.\n It's implemented on a custom ERC-7201 namespace to reduce the risk of storage collisions\n when using with upgradeable contracts.\n @custom:storage-location erc7201:openzeppelin.storage.Initializable"
            },
            "members": [
              {
                "constant": false,
                "id": 46630,
                "mutability": "mutable",
                "name": "_initialized",
                "nameLocation": "2820:12:24",
                "nodeType": "VariableDeclaration",
                "scope": 46634,
                "src": "2813:19:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                },
                "typeName": {
                  "id": 46629,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "2813:6:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 46633,
                "mutability": "mutable",
                "name": "_initializing",
                "nameLocation": "2955:13:24",
                "nodeType": "VariableDeclaration",
                "scope": 46634,
                "src": "2950:18:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 46632,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "2950:4:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "InitializableStorage",
            "nameLocation": "2692:20:24",
            "scope": 46877,
            "visibility": "public"
          },
          {
            "id": 46637,
            "nodeType": "VariableDeclaration",
            "src": "3098:115:24",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INITIALIZABLE_STORAGE",
            "nameLocation": "3123:21:24",
            "scope": 46877,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 46635,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "3098:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307866306335376531363834306466303430663135303838646332663831666533393163333932336265633733653233613936363265666339633232396336613030",
              "id": 46636,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3147:66:24",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_108904022758810753673719992590105913556127789646572562039383141376366747609600_by_1",
                "typeString": "int_const 1089...(70 digits omitted)...9600"
              },
              "value": "0xf0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00"
            },
            "visibility": "private"
          },
          {
            "id": 46640,
            "nodeType": "ErrorDefinition",
            "src": "3285:30:24",
            "nodes": [],
            "documentation": {
              "id": 46638,
              "nodeType": "StructuredDocumentation",
              "src": "3220:60:24",
              "text": " @dev The contract is already initialized."
            },
            "errorSelector": "f92ee8a9",
            "name": "InvalidInitialization",
            "nameLocation": "3291:21:24",
            "parameters": {
              "id": 46639,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3312:2:24"
            }
          },
          {
            "id": 46643,
            "nodeType": "ErrorDefinition",
            "src": "3383:24:24",
            "nodes": [],
            "documentation": {
              "id": 46641,
              "nodeType": "StructuredDocumentation",
              "src": "3321:57:24",
              "text": " @dev The contract is not initializing."
            },
            "errorSelector": "d7e6bcf8",
            "name": "NotInitializing",
            "nameLocation": "3389:15:24",
            "parameters": {
              "id": 46642,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3404:2:24"
            }
          },
          {
            "id": 46648,
            "nodeType": "EventDefinition",
            "src": "3508:34:24",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 46644,
              "nodeType": "StructuredDocumentation",
              "src": "3413:90:24",
              "text": " @dev Triggered when the contract has been initialized or reinitialized."
            },
            "eventSelector": "c7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2",
            "name": "Initialized",
            "nameLocation": "3514:11:24",
            "parameters": {
              "id": 46647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46646,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "3533:7:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 46648,
                  "src": "3526:14:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 46645,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "3526:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3525:16:24"
            }
          },
          {
            "id": 46731,
            "nodeType": "ModifierDefinition",
            "src": "4069:1104:24",
            "nodes": [],
            "body": {
              "id": 46730,
              "nodeType": "Block",
              "src": "4092:1081:24",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    46653
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46653,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "4187:1:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 46730,
                      "src": "4158:30:24",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage"
                      },
                      "typeName": {
                        "id": 46652,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 46651,
                          "name": "InitializableStorage",
                          "nameLocations": [
                            "4158:20:24"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46634,
                          "src": "4158:20:24"
                        },
                        "referencedDeclaration": 46634,
                        "src": "4158:20:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46656,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 46654,
                      "name": "_getInitializableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46876,
                      "src": "4191:24:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$46634_storage_ptr_$",
                        "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                      }
                    },
                    "id": 46655,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4191:26:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                      "typeString": "struct Initializable.InitializableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4158:59:24"
                },
                {
                  "assignments": [
                    46658
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46658,
                      "mutability": "mutable",
                      "name": "isTopLevelCall",
                      "nameLocation": "4284:14:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 46730,
                      "src": "4279:19:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 46657,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4279:4:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46662,
                  "initialValue": {
                    "id": 46661,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4301:16:24",
                    "subExpression": {
                      "expression": {
                        "id": 46659,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46653,
                        "src": "4302:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 46660,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4304:13:24",
                      "memberName": "_initializing",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46633,
                      "src": "4302:15:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4279:38:24"
                },
                {
                  "assignments": [
                    46664
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46664,
                      "mutability": "mutable",
                      "name": "initialized",
                      "nameLocation": "4334:11:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 46730,
                      "src": "4327:18:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "typeName": {
                        "id": 46663,
                        "name": "uint64",
                        "nodeType": "ElementaryTypeName",
                        "src": "4327:6:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46667,
                  "initialValue": {
                    "expression": {
                      "id": 46665,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46653,
                      "src": "4348:1:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage storage pointer"
                      }
                    },
                    "id": 46666,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4350:12:24",
                    "memberName": "_initialized",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 46630,
                    "src": "4348:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4327:35:24"
                },
                {
                  "assignments": [
                    46669
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46669,
                      "mutability": "mutable",
                      "name": "initialSetup",
                      "nameLocation": "4711:12:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 46730,
                      "src": "4706:17:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 46668,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4706:4:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46675,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 46674,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 46672,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 46670,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46664,
                        "src": "4726:11:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 46671,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4741:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4726:16:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 46673,
                      "name": "isTopLevelCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46658,
                      "src": "4746:14:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4726:34:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4706:54:24"
                },
                {
                  "assignments": [
                    46677
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46677,
                      "mutability": "mutable",
                      "name": "construction",
                      "nameLocation": "4775:12:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 46730,
                      "src": "4770:17:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 46676,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4770:4:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46690,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 46689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 46680,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 46678,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46664,
                        "src": "4790:11:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 46679,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4805:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "4790:16:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 46688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 46683,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4818:4:24",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Initializable_$46877",
                                  "typeString": "contract Initializable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Initializable_$46877",
                                  "typeString": "contract Initializable"
                                }
                              ],
                              "id": 46682,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4810:7:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 46681,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4810:7:24",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 46684,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4810:13:24",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 46685,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4824:4:24",
                          "memberName": "code",
                          "nodeType": "MemberAccess",
                          "src": "4810:18:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 46686,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4829:6:24",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "4810:25:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 46687,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4839:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4810:30:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4790:50:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4770:70:24"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 46695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 46692,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "4855:13:24",
                      "subExpression": {
                        "id": 46691,
                        "name": "initialSetup",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46669,
                        "src": "4856:12:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 46694,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "4872:13:24",
                      "subExpression": {
                        "id": 46693,
                        "name": "construction",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46677,
                        "src": "4873:12:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4855:30:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46700,
                  "nodeType": "IfStatement",
                  "src": "4851:91:24",
                  "trueBody": {
                    "id": 46699,
                    "nodeType": "Block",
                    "src": "4887:55:24",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 46696,
                            "name": "InvalidInitialization",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46640,
                            "src": "4908:21:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 46697,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4908:23:24",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 46698,
                        "nodeType": "RevertStatement",
                        "src": "4901:30:24"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 46705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 46701,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46653,
                        "src": "4951:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 46703,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4953:12:24",
                      "memberName": "_initialized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46630,
                      "src": "4951:14:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "31",
                      "id": 46704,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4968:1:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "4951:18:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 46706,
                  "nodeType": "ExpressionStatement",
                  "src": "4951:18:24"
                },
                {
                  "condition": {
                    "id": 46707,
                    "name": "isTopLevelCall",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 46658,
                    "src": "4983:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46715,
                  "nodeType": "IfStatement",
                  "src": "4979:67:24",
                  "trueBody": {
                    "id": 46714,
                    "nodeType": "Block",
                    "src": "4999:47:24",
                    "statements": [
                      {
                        "expression": {
                          "id": 46712,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 46708,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46653,
                              "src": "5013:1:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                                "typeString": "struct Initializable.InitializableStorage storage pointer"
                              }
                            },
                            "id": 46710,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "5015:13:24",
                            "memberName": "_initializing",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 46633,
                            "src": "5013:15:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 46711,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5031:4:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "5013:22:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 46713,
                        "nodeType": "ExpressionStatement",
                        "src": "5013:22:24"
                      }
                    ]
                  }
                },
                {
                  "id": 46716,
                  "nodeType": "PlaceholderStatement",
                  "src": "5055:1:24"
                },
                {
                  "condition": {
                    "id": 46717,
                    "name": "isTopLevelCall",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 46658,
                    "src": "5070:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46729,
                  "nodeType": "IfStatement",
                  "src": "5066:101:24",
                  "trueBody": {
                    "id": 46728,
                    "nodeType": "Block",
                    "src": "5086:81:24",
                    "statements": [
                      {
                        "expression": {
                          "id": 46722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 46718,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46653,
                              "src": "5100:1:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                                "typeString": "struct Initializable.InitializableStorage storage pointer"
                              }
                            },
                            "id": 46720,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "5102:13:24",
                            "memberName": "_initializing",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 46633,
                            "src": "5100:15:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "66616c7365",
                            "id": 46721,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5118:5:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "5100:23:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 46723,
                        "nodeType": "ExpressionStatement",
                        "src": "5100:23:24"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "31",
                              "id": 46725,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5154:1:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              }
                            ],
                            "id": 46724,
                            "name": "Initialized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46648,
                            "src": "5142:11:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint64_$returns$__$",
                              "typeString": "function (uint64)"
                            }
                          },
                          "id": 46726,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5142:14:24",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 46727,
                        "nodeType": "EmitStatement",
                        "src": "5137:19:24"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 46649,
              "nodeType": "StructuredDocumentation",
              "src": "3548:516:24",
              "text": " @dev A modifier that defines a protected initializer function that can be invoked at most once. In its scope,\n `onlyInitializing` functions can be used to initialize parent contracts.\n Similar to `reinitializer(1)`, except that in the context of a constructor an `initializer` may be invoked any\n number of times. This behavior in the constructor can be useful during testing and is not expected to be used in\n production.\n Emits an {Initialized} event."
            },
            "name": "initializer",
            "nameLocation": "4078:11:24",
            "parameters": {
              "id": 46650,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4089:2:24"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46778,
            "nodeType": "ModifierDefinition",
            "src": "6252:431:24",
            "nodes": [],
            "body": {
              "id": 46777,
              "nodeType": "Block",
              "src": "6291:392:24",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    46738
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46738,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6386:1:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 46777,
                      "src": "6357:30:24",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage"
                      },
                      "typeName": {
                        "id": 46737,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 46736,
                          "name": "InitializableStorage",
                          "nameLocations": [
                            "6357:20:24"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46634,
                          "src": "6357:20:24"
                        },
                        "referencedDeclaration": 46634,
                        "src": "6357:20:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46741,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 46739,
                      "name": "_getInitializableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46876,
                      "src": "6390:24:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$46634_storage_ptr_$",
                        "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                      }
                    },
                    "id": 46740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6390:26:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                      "typeString": "struct Initializable.InitializableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6357:59:24"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 46748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 46742,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46738,
                        "src": "6431:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 46743,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6433:13:24",
                      "memberName": "_initializing",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46633,
                      "src": "6431:15:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 46747,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 46744,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46738,
                          "src": "6450:1:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                            "typeString": "struct Initializable.InitializableStorage storage pointer"
                          }
                        },
                        "id": 46745,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6452:12:24",
                        "memberName": "_initialized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 46630,
                        "src": "6450:14:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "id": 46746,
                        "name": "version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46734,
                        "src": "6468:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "src": "6450:25:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6431:44:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46753,
                  "nodeType": "IfStatement",
                  "src": "6427:105:24",
                  "trueBody": {
                    "id": 46752,
                    "nodeType": "Block",
                    "src": "6477:55:24",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 46749,
                            "name": "InvalidInitialization",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46640,
                            "src": "6498:21:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 46750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6498:23:24",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 46751,
                        "nodeType": "RevertStatement",
                        "src": "6491:30:24"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 46758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 46754,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46738,
                        "src": "6541:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 46756,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6543:12:24",
                      "memberName": "_initialized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46630,
                      "src": "6541:14:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 46757,
                      "name": "version",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46734,
                      "src": "6558:7:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "6541:24:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 46759,
                  "nodeType": "ExpressionStatement",
                  "src": "6541:24:24"
                },
                {
                  "expression": {
                    "id": 46764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 46760,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46738,
                        "src": "6575:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 46762,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6577:13:24",
                      "memberName": "_initializing",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46633,
                      "src": "6575:15:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 46763,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6593:4:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6575:22:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46765,
                  "nodeType": "ExpressionStatement",
                  "src": "6575:22:24"
                },
                {
                  "id": 46766,
                  "nodeType": "PlaceholderStatement",
                  "src": "6607:1:24"
                },
                {
                  "expression": {
                    "id": 46771,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 46767,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46738,
                        "src": "6618:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 46769,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6620:13:24",
                      "memberName": "_initializing",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46633,
                      "src": "6618:15:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 46770,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6636:5:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "6618:23:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46772,
                  "nodeType": "ExpressionStatement",
                  "src": "6618:23:24"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 46774,
                        "name": "version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46734,
                        "src": "6668:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      ],
                      "id": 46773,
                      "name": "Initialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46648,
                      "src": "6656:11:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint64_$returns$__$",
                        "typeString": "function (uint64)"
                      }
                    },
                    "id": 46775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6656:20:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 46776,
                  "nodeType": "EmitStatement",
                  "src": "6651:25:24"
                }
              ]
            },
            "documentation": {
              "id": 46732,
              "nodeType": "StructuredDocumentation",
              "src": "5179:1068:24",
              "text": " @dev A modifier that defines a protected reinitializer function that can be invoked at most once, and only if the\n contract hasn't been initialized to a greater version before. In its scope, `onlyInitializing` functions can be\n used to initialize parent contracts.\n A reinitializer may be used after the original initialization step. This is essential to configure modules that\n are added through upgrades and that require initialization.\n When `version` is 1, this modifier is similar to `initializer`, except that functions marked with `reinitializer`\n cannot be nested. If one is invoked in the context of another, execution will revert.\n Note that versions can jump in increments greater than 1; this implies that if multiple reinitializers coexist in\n a contract, executing them in the right order is up to the developer or operator.\n WARNING: Setting the version to 2**64 - 1 will prevent any future reinitialization.\n Emits an {Initialized} event."
            },
            "name": "reinitializer",
            "nameLocation": "6261:13:24",
            "parameters": {
              "id": 46735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46734,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "6282:7:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 46778,
                  "src": "6275:14:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 46733,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "6275:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6274:16:24"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46786,
            "nodeType": "ModifierDefinition",
            "src": "6893:76:24",
            "nodes": [],
            "body": {
              "id": 46785,
              "nodeType": "Block",
              "src": "6921:48:24",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 46781,
                      "name": "_checkInitializing",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46799,
                      "src": "6931:18:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 46782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6931:20:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 46783,
                  "nodeType": "ExpressionStatement",
                  "src": "6931:20:24"
                },
                {
                  "id": 46784,
                  "nodeType": "PlaceholderStatement",
                  "src": "6961:1:24"
                }
              ]
            },
            "documentation": {
              "id": 46779,
              "nodeType": "StructuredDocumentation",
              "src": "6689:199:24",
              "text": " @dev Modifier to protect an initialization function so that it can only be invoked by functions with the\n {initializer} and {reinitializer} modifiers, directly or indirectly."
            },
            "name": "onlyInitializing",
            "nameLocation": "6902:16:24",
            "parameters": {
              "id": 46780,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6918:2:24"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46799,
            "nodeType": "FunctionDefinition",
            "src": "7084:141:24",
            "nodes": [],
            "body": {
              "id": 46798,
              "nodeType": "Block",
              "src": "7136:89:24",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 46792,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7150:18:24",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 46790,
                        "name": "_isInitializing",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46867,
                        "src": "7151:15:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 46791,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7151:17:24",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46797,
                  "nodeType": "IfStatement",
                  "src": "7146:73:24",
                  "trueBody": {
                    "id": 46796,
                    "nodeType": "Block",
                    "src": "7170:49:24",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 46793,
                            "name": "NotInitializing",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46643,
                            "src": "7191:15:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 46794,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7191:17:24",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 46795,
                        "nodeType": "RevertStatement",
                        "src": "7184:24:24"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 46787,
              "nodeType": "StructuredDocumentation",
              "src": "6975:104:24",
              "text": " @dev Reverts if the contract is not in an initializing state. See {onlyInitializing}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkInitializing",
            "nameLocation": "7093:18:24",
            "parameters": {
              "id": 46788,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7111:2:24"
            },
            "returnParameters": {
              "id": 46789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7136:0:24"
            },
            "scope": 46877,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 46845,
            "nodeType": "FunctionDefinition",
            "src": "7711:422:24",
            "nodes": [],
            "body": {
              "id": 46844,
              "nodeType": "Block",
              "src": "7760:373:24",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    46805
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46805,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "7855:1:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 46844,
                      "src": "7826:30:24",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage"
                      },
                      "typeName": {
                        "id": 46804,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 46803,
                          "name": "InitializableStorage",
                          "nameLocations": [
                            "7826:20:24"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46634,
                          "src": "7826:20:24"
                        },
                        "referencedDeclaration": 46634,
                        "src": "7826:20:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46808,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 46806,
                      "name": "_getInitializableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46876,
                      "src": "7859:24:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$46634_storage_ptr_$",
                        "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                      }
                    },
                    "id": 46807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7859:26:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                      "typeString": "struct Initializable.InitializableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7826:59:24"
                },
                {
                  "condition": {
                    "expression": {
                      "id": 46809,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46805,
                      "src": "7900:1:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage storage pointer"
                      }
                    },
                    "id": 46810,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7902:13:24",
                    "memberName": "_initializing",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 46633,
                    "src": "7900:15:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46815,
                  "nodeType": "IfStatement",
                  "src": "7896:76:24",
                  "trueBody": {
                    "id": 46814,
                    "nodeType": "Block",
                    "src": "7917:55:24",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 46811,
                            "name": "InvalidInitialization",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46640,
                            "src": "7938:21:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 46812,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7938:23:24",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 46813,
                        "nodeType": "RevertStatement",
                        "src": "7931:30:24"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    },
                    "id": 46823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 46816,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46805,
                        "src": "7985:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 46817,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7987:12:24",
                      "memberName": "_initialized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46630,
                      "src": "7985:14:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 46820,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8008:6:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": {
                              "id": 46819,
                              "name": "uint64",
                              "nodeType": "ElementaryTypeName",
                              "src": "8008:6:24",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            }
                          ],
                          "id": 46818,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "8003:4:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 46821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8003:12:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint64",
                          "typeString": "type(uint64)"
                        }
                      },
                      "id": 46822,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "8016:3:24",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "8003:16:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "7985:34:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46843,
                  "nodeType": "IfStatement",
                  "src": "7981:146:24",
                  "trueBody": {
                    "id": 46842,
                    "nodeType": "Block",
                    "src": "8021:106:24",
                    "statements": [
                      {
                        "expression": {
                          "id": 46832,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 46824,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46805,
                              "src": "8035:1:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                                "typeString": "struct Initializable.InitializableStorage storage pointer"
                              }
                            },
                            "id": 46826,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "8037:12:24",
                            "memberName": "_initialized",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 46630,
                            "src": "8035:14:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 46829,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8057:6:24",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint64_$",
                                    "typeString": "type(uint64)"
                                  },
                                  "typeName": {
                                    "id": 46828,
                                    "name": "uint64",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8057:6:24",
                                    "typeDescriptions": {}
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_type$_t_uint64_$",
                                    "typeString": "type(uint64)"
                                  }
                                ],
                                "id": 46827,
                                "name": "type",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -27,
                                "src": "8052:4:24",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 46830,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8052:12:24",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_meta_type_t_uint64",
                                "typeString": "type(uint64)"
                              }
                            },
                            "id": 46831,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "8065:3:24",
                            "memberName": "max",
                            "nodeType": "MemberAccess",
                            "src": "8052:16:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "src": "8035:33:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "id": 46833,
                        "nodeType": "ExpressionStatement",
                        "src": "8035:33:24"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 46837,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "8104:6:24",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint64_$",
                                      "typeString": "type(uint64)"
                                    },
                                    "typeName": {
                                      "id": 46836,
                                      "name": "uint64",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "8104:6:24",
                                      "typeDescriptions": {}
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_type$_t_uint64_$",
                                      "typeString": "type(uint64)"
                                    }
                                  ],
                                  "id": 46835,
                                  "name": "type",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -27,
                                  "src": "8099:4:24",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 46838,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8099:12:24",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_meta_type_t_uint64",
                                  "typeString": "type(uint64)"
                                }
                              },
                              "id": 46839,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "8112:3:24",
                              "memberName": "max",
                              "nodeType": "MemberAccess",
                              "src": "8099:16:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            ],
                            "id": 46834,
                            "name": "Initialized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46648,
                            "src": "8087:11:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint64_$returns$__$",
                              "typeString": "function (uint64)"
                            }
                          },
                          "id": 46840,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8087:29:24",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 46841,
                        "nodeType": "EmitStatement",
                        "src": "8082:34:24"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 46800,
              "nodeType": "StructuredDocumentation",
              "src": "7231:475:24",
              "text": " @dev Locks the contract, preventing any future reinitialization. This cannot be part of an initializer call.\n Calling this in the constructor of a contract will prevent that contract from being initialized or reinitialized\n to any version. It is recommended to use this to lock implementation contracts that are designed to be called\n through proxies.\n Emits an {Initialized} event the first time it is successfully executed."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_disableInitializers",
            "nameLocation": "7720:20:24",
            "parameters": {
              "id": 46801,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7740:2:24"
            },
            "returnParameters": {
              "id": 46802,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7760:0:24"
            },
            "scope": 46877,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 46856,
            "nodeType": "FunctionDefinition",
            "src": "8243:128:24",
            "nodes": [],
            "body": {
              "id": 46855,
              "nodeType": "Block",
              "src": "8308:63:24",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 46851,
                        "name": "_getInitializableStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46876,
                        "src": "8325:24:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$46634_storage_ptr_$",
                          "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                        }
                      },
                      "id": 46852,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8325:26:24",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage storage pointer"
                      }
                    },
                    "id": 46853,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "8352:12:24",
                    "memberName": "_initialized",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 46630,
                    "src": "8325:39:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "functionReturnParameters": 46850,
                  "id": 46854,
                  "nodeType": "Return",
                  "src": "8318:46:24"
                }
              ]
            },
            "documentation": {
              "id": 46846,
              "nodeType": "StructuredDocumentation",
              "src": "8139:99:24",
              "text": " @dev Returns the highest version that has been initialized. See {reinitializer}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getInitializedVersion",
            "nameLocation": "8252:22:24",
            "parameters": {
              "id": 46847,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8274:2:24"
            },
            "returnParameters": {
              "id": 46850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46849,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46856,
                  "src": "8300:6:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 46848,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "8300:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8299:8:24"
            },
            "scope": 46877,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46867,
            "nodeType": "FunctionDefinition",
            "src": "8487:120:24",
            "nodes": [],
            "body": {
              "id": 46866,
              "nodeType": "Block",
              "src": "8543:64:24",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 46862,
                        "name": "_getInitializableStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46876,
                        "src": "8560:24:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$46634_storage_ptr_$",
                          "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                        }
                      },
                      "id": 46863,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8560:26:24",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage storage pointer"
                      }
                    },
                    "id": 46864,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "8587:13:24",
                    "memberName": "_initializing",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 46633,
                    "src": "8560:40:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 46861,
                  "id": 46865,
                  "nodeType": "Return",
                  "src": "8553:47:24"
                }
              ]
            },
            "documentation": {
              "id": 46857,
              "nodeType": "StructuredDocumentation",
              "src": "8377:105:24",
              "text": " @dev Returns `true` if the contract is currently initializing. See {onlyInitializing}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isInitializing",
            "nameLocation": "8496:15:24",
            "parameters": {
              "id": 46858,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8511:2:24"
            },
            "returnParameters": {
              "id": 46861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46860,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46867,
                  "src": "8537:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 46859,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8537:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8536:6:24"
            },
            "scope": 46877,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46876,
            "nodeType": "FunctionDefinition",
            "src": "8737:170:24",
            "nodes": [],
            "body": {
              "id": 46875,
              "nodeType": "Block",
              "src": "8827:80:24",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "8846:55:24",
                    "nodeType": "YulBlock",
                    "src": "8846:55:24",
                    "statements": [
                      {
                        "nativeSrc": "8860:31:24",
                        "nodeType": "YulAssignment",
                        "src": "8860:31:24",
                        "value": {
                          "name": "INITIALIZABLE_STORAGE",
                          "nativeSrc": "8870:21:24",
                          "nodeType": "YulIdentifier",
                          "src": "8870:21:24"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "8860:6:24",
                            "nodeType": "YulIdentifier",
                            "src": "8860:6:24"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 46872,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "8860:6:24",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 46637,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8870:21:24",
                      "valueSize": 1
                    }
                  ],
                  "id": 46874,
                  "nodeType": "InlineAssembly",
                  "src": "8837:64:24"
                }
              ]
            },
            "documentation": {
              "id": 46868,
              "nodeType": "StructuredDocumentation",
              "src": "8613:67:24",
              "text": " @dev Returns a pointer to the storage namespace."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getInitializableStorage",
            "nameLocation": "8746:24:24",
            "parameters": {
              "id": 46869,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8770:2:24"
            },
            "returnParameters": {
              "id": 46873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46872,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "8824:1:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 46876,
                  "src": "8795:30:24",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                    "typeString": "struct Initializable.InitializableStorage"
                  },
                  "typeName": {
                    "id": 46871,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 46870,
                      "name": "InitializableStorage",
                      "nameLocations": [
                        "8795:20:24"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 46634,
                      "src": "8795:20:24"
                    },
                    "referencedDeclaration": 46634,
                    "src": "8795:20:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_InitializableStorage_$46634_storage_ptr",
                      "typeString": "struct Initializable.InitializableStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8794:32:24"
            },
            "scope": 46877,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "Initializable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 46626,
          "nodeType": "StructuredDocumentation",
          "src": "139:2209:24",
          "text": " @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\n behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an\n external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\n function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\n The initialization functions use a version number. Once a version number is used, it is consumed and cannot be\n reused. This mechanism prevents re-execution of each \"step\" but allows the creation of new initialization steps in\n case an upgrade adds a module that needs to be initialized.\n For example:\n [.hljs-theme-light.nopadding]\n ```solidity\n contract MyToken is ERC20Upgradeable {\n     function initialize() initializer public {\n         __ERC20_init(\"MyToken\", \"MTK\");\n     }\n }\n contract MyTokenV2 is MyToken, ERC20PermitUpgradeable {\n     function initializeV2() reinitializer(2) public {\n         __ERC20Permit_init(\"MyToken\");\n     }\n }\n ```\n TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\n possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\n CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\n that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\n [CAUTION]\n ====\n Avoid leaving a contract uninitialized.\n An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\n contract, which may impact the proxy. To prevent the implementation contract from being used, you should invoke\n the {_disableInitializers} function in the constructor to automatically lock it when it is deployed:\n [.hljs-theme-light.nopadding]\n ```\n /// @custom:oz-upgrades-unsafe-allow constructor\n constructor() {\n     _disableInitializers();\n }\n ```\n ===="
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          46877
        ],
        "name": "Initializable",
        "nameLocation": "2367:13:24",
        "scope": 46878,
        "usedErrors": [
          46640,
          46643
        ],
        "usedEvents": [
          46648
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 24
} as const;