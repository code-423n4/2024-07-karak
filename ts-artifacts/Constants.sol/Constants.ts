export const Constants = {
  "abi": [
    {
      "type": "function",
      "name": "DEFAULT_VAULT_IMPLEMENTATION_FLAG",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "MANAGER_ROLE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "MAX_VAULTS_PER_STAKER",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "MAX_WITHDRAWAL_DELAY",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "SIGNED_DEPOSIT_TYPEHASH",
      "inputs": [],
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
    "object": "0x608080604052346019576101bc908161001f823930815050f35b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c90816378d1f88f1461014e57508063940a201e1461011a578063a238f9df146100e3578063e4af8b221461008f5763ec87621c1461005857600080fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261008c57602060405160018152f35b80fd5b50807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261008c5760206040517ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab38152f35b50807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261008c57602060405162278d008152f35b50807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261008c576020604051818152f35b9050817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101825780600160209252f35b5080fdfea264697066735822122059ff3990cdfa0749fe0dcbeb79efaf3e7c8cb3f656a141942e122b76543d0dca64736f6c63430008190033",
    "sourceMap": "141:607:89:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608080604052600436101561001357600080fd5b600090813560e01c90816378d1f88f1461014e57508063940a201e1461011a578063a238f9df146100e3578063e4af8b221461008f5763ec87621c1461005857600080fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261008c57602060405160018152f35b80fd5b50807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261008c5760206040517ff7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab38152f35b50807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261008c57602060405162278d008152f35b50807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261008c576020604051818152f35b9050817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101825780600160209252f35b5080fdfea264697066735822122059ff3990cdfa0749fe0dcbeb79efaf3e7c8cb3f656a141942e122b76543d0dca64736f6c63430008190033",
    "sourceMap": "141:607:89:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;272:2;141:607;272:2;;;141:607;;;;;;;;;;;;;;;;;;;;;;;739:6;141:607;;;;;;;;;;;;;;;;;;339:83;141:607;;;;;;;;;;;;;;;212:7;141:607;;;;;;;;;;;;272:2;141:607;;;;;;;;;;;;;;;;;642:1;141:607;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "DEFAULT_VAULT_IMPLEMENTATION_FLAG()": "78d1f88f",
    "MANAGER_ROLE()": "ec87621c",
    "MAX_VAULTS_PER_STAKER()": "940a201e",
    "MAX_WITHDRAWAL_DELAY()": "a238f9df",
    "SIGNED_DEPOSIT_TYPEHASH()": "e4af8b22"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DEFAULT_VAULT_IMPLEMENTATION_FLAG\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MANAGER_ROLE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MAX_VAULTS_PER_STAKER\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MAX_WITHDRAWAL_DELAY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"SIGNED_DEPOSIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/interfaces/Constants.sol\":\"Constants\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/auth/OwnableRoles.sol\":{\"keccak256\":\"0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c\",\"dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L\"]},\"src/interfaces/Constants.sol\":{\"keccak256\":\"0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c\",\"dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG\"]}},\"version\":1}",
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
          "name": "DEFAULT_VAULT_IMPLEMENTATION_FLAG",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "MANAGER_ROLE",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "MAX_VAULTS_PER_STAKER",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "MAX_WITHDRAWAL_DELAY",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "SIGNED_DEPOSIT_TYPEHASH",
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
        "src/interfaces/Constants.sol": "Constants"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/solady/src/auth/Ownable.sol": {
        "keccak256": "0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3",
        "urls": [
          "bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3",
          "dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs"
        ],
        "license": "MIT"
      },
      "node_modules/solady/src/auth/OwnableRoles.sol": {
        "keccak256": "0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3",
        "urls": [
          "bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c",
          "dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L"
        ],
        "license": "MIT"
      },
      "src/interfaces/Constants.sol": {
        "keccak256": "0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86",
        "urls": [
          "bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c",
          "dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG"
        ],
        "license": "SEE LICENSE IN LICENSE"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/interfaces/Constants.sol",
    "id": 62946,
    "exportedSymbols": {
      "Constants": [
        62945
      ],
      "OwnableRoles": [
        55650
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:698:89",
    "nodes": [
      {
        "id": 62915,
        "nodeType": "PragmaDirective",
        "src": "51:24:89",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 62917,
        "nodeType": "ImportDirective",
        "src": "77:62:89",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/auth/OwnableRoles.sol",
        "file": "solady/src/auth/OwnableRoles.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62946,
        "sourceUnit": 55651,
        "symbolAliases": [
          {
            "foreign": {
              "id": 62916,
              "name": "OwnableRoles",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 55650,
              "src": "85:12:89",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 62945,
        "nodeType": "ContractDefinition",
        "src": "141:607:89",
        "nodes": [
          {
            "id": 62920,
            "nodeType": "VariableDeclaration",
            "src": "165:54:89",
            "nodes": [],
            "constant": true,
            "functionSelector": "a238f9df",
            "mutability": "constant",
            "name": "MAX_WITHDRAWAL_DELAY",
            "nameLocation": "189:20:89",
            "scope": 62945,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 62918,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "165:7:89",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "3330",
              "id": 62919,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "212:7:89",
              "subdenomination": "days",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2592000_by_1",
                "typeString": "int_const 2592000"
              },
              "value": "30"
            },
            "visibility": "public"
          },
          {
            "id": 62923,
            "nodeType": "VariableDeclaration",
            "src": "226:48:89",
            "nodes": [],
            "constant": true,
            "functionSelector": "940a201e",
            "mutability": "constant",
            "name": "MAX_VAULTS_PER_STAKER",
            "nameLocation": "248:21:89",
            "scope": 62945,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 62921,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "226:5:89",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "hexValue": "3332",
              "id": 62922,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "272:2:89",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_32_by_1",
                "typeString": "int_const 32"
              },
              "value": "32"
            },
            "visibility": "public"
          },
          {
            "id": 62928,
            "nodeType": "VariableDeclaration",
            "src": "281:141:89",
            "nodes": [],
            "constant": true,
            "functionSelector": "e4af8b22",
            "mutability": "constant",
            "name": "SIGNED_DEPOSIT_TYPEHASH",
            "nameLocation": "305:23:89",
            "scope": 62945,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 62924,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "281:7:89",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4465706f7369742861646472657373207661756c742c2075696e7432353620646561646c696e652c2075696e743235362076616c75652c2075696e74323536206e6f6e636529",
                  "id": 62926,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "349:72:89",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_f7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab3",
                    "typeString": "literal_string \"Deposit(address vault, uint256 deadline, uint256 value, uint256 nonce)\""
                  },
                  "value": "Deposit(address vault, uint256 deadline, uint256 value, uint256 nonce)"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_f7d5860bd677b455837d8b4f96d79ad32c342df09f9b647712ca68174b68bab3",
                    "typeString": "literal_string \"Deposit(address vault, uint256 deadline, uint256 value, uint256 nonce)\""
                  }
                ],
                "id": 62925,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "339:9:89",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 62927,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "339:83:89",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62933,
            "nodeType": "VariableDeclaration",
            "src": "429:138:89",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "DOMAIN_TYPEHASH",
            "nameLocation": "446:15:89",
            "scope": 62945,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 62929,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "429:7:89",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                  "id": 62931,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "482:84:89",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                    "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                  },
                  "value": "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                    "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                  }
                ],
                "id": 62930,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "472:9:89",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 62932,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "472:95:89",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 62939,
            "nodeType": "VariableDeclaration",
            "src": "574:70:89",
            "nodes": [],
            "constant": true,
            "functionSelector": "78d1f88f",
            "mutability": "constant",
            "name": "DEFAULT_VAULT_IMPLEMENTATION_FLAG",
            "nameLocation": "598:33:89",
            "scope": 62945,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 62934,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "574:7:89",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "31",
                  "id": 62937,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "642:1:89",
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
                "id": 62936,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "634:7:89",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_address_$",
                  "typeString": "type(address)"
                },
                "typeName": {
                  "id": 62935,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "634:7:89",
                  "typeDescriptions": {}
                }
              },
              "id": 62938,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "634:10:89",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62944,
            "nodeType": "VariableDeclaration",
            "src": "700:45:89",
            "nodes": [],
            "constant": true,
            "functionSelector": "ec87621c",
            "mutability": "constant",
            "name": "MANAGER_ROLE",
            "nameLocation": "724:12:89",
            "scope": 62945,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 62940,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "700:7:89",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "id": 62943,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "31",
                "id": 62941,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "739:1:89",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "hexValue": "30",
                "id": 62942,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "744:1:89",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "src": "739:6:89",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              }
            },
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Constants",
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          62945
        ],
        "name": "Constants",
        "nameLocation": "149:9:89",
        "scope": 62946,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 89
} as const;