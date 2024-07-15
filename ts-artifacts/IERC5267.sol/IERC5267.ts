export const IERC5267 = {
  "abi": [
    {
      "type": "function",
      "name": "eip712Domain",
      "inputs": [],
      "outputs": [
        {
          "name": "fields",
          "type": "bytes1",
          "internalType": "bytes1"
        },
        {
          "name": "name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "version",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "chainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "verifyingContract",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "extensions",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "EIP712DomainChanged",
      "inputs": [],
      "anonymous": false
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
    "eip712Domain()": "84b0196e"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[],\"name\":\"EIP712DomainChanged\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"eip712Domain\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"fields\",\"type\":\"bytes1\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"version\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"verifyingContract\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256[]\",\"name\":\"extensions\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"EIP712DomainChanged()\":{\"details\":\"MAY be emitted to signal that the domain could have changed.\"}},\"kind\":\"dev\",\"methods\":{\"eip712Domain()\":{\"details\":\"returns the fields and values that describe the domain separator used by this contract for EIP-712 signature.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":\"IERC5267\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "event",
          "name": "EIP712DomainChanged",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "eip712Domain",
          "outputs": [
            {
              "internalType": "bytes1",
              "name": "fields",
              "type": "bytes1"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "version",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "verifyingContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256[]",
              "name": "extensions",
              "type": "uint256[]"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "eip712Domain()": {
            "details": "returns the fields and values that describe the domain separator used by this contract for EIP-712 signature."
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
        "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol": "IERC5267"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol": {
        "keccak256": "0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92",
        "urls": [
          "bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a",
          "dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol",
    "id": 49225,
    "exportedSymbols": {
      "IERC5267": [
        49224
      ]
    },
    "nodeType": "SourceUnit",
    "src": "107:632:36",
    "nodes": [
      {
        "id": 49201,
        "nodeType": "PragmaDirective",
        "src": "107:24:36",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49224,
        "nodeType": "ContractDefinition",
        "src": "133:605:36",
        "nodes": [
          {
            "id": 49204,
            "nodeType": "EventDefinition",
            "src": "247:28:36",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 49202,
              "nodeType": "StructuredDocumentation",
              "src": "158:84:36",
              "text": " @dev MAY be emitted to signal that the domain could have changed."
            },
            "eventSelector": "0a6387c9ea3628b88a633bb4f3b151770f70085117a15f9bf3787cda53f13d31",
            "name": "EIP712DomainChanged",
            "nameLocation": "253:19:36",
            "parameters": {
              "id": 49203,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "272:2:36"
            }
          },
          {
            "id": 49223,
            "nodeType": "FunctionDefinition",
            "src": "426:310:36",
            "nodes": [],
            "documentation": {
              "id": 49205,
              "nodeType": "StructuredDocumentation",
              "src": "281:140:36",
              "text": " @dev returns the fields and values that describe the domain separator used by this contract for EIP-712\n signature."
            },
            "functionSelector": "84b0196e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "eip712Domain",
            "nameLocation": "435:12:36",
            "parameters": {
              "id": 49206,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "447:2:36"
            },
            "returnParameters": {
              "id": 49222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49208,
                  "mutability": "mutable",
                  "name": "fields",
                  "nameLocation": "517:6:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 49223,
                  "src": "510:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes1",
                    "typeString": "bytes1"
                  },
                  "typeName": {
                    "id": 49207,
                    "name": "bytes1",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:6:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49210,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "551:4:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 49223,
                  "src": "537:18:36",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 49209,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:6:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49212,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "583:7:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 49223,
                  "src": "569:21:36",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 49211,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "569:6:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49214,
                  "mutability": "mutable",
                  "name": "chainId",
                  "nameLocation": "612:7:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 49223,
                  "src": "604:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49213,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "604:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49216,
                  "mutability": "mutable",
                  "name": "verifyingContract",
                  "nameLocation": "641:17:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 49223,
                  "src": "633:25:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49215,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:7:36",
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
                  "id": 49218,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "680:4:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 49223,
                  "src": "672:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49217,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "672:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49221,
                  "mutability": "mutable",
                  "name": "extensions",
                  "nameLocation": "715:10:36",
                  "nodeType": "VariableDeclaration",
                  "scope": 49223,
                  "src": "698:27:36",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49219,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "698:7:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 49220,
                    "nodeType": "ArrayTypeName",
                    "src": "698:9:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "496:239:36"
            },
            "scope": 49224,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC5267",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          49224
        ],
        "name": "IERC5267",
        "nameLocation": "143:8:36",
        "scope": 49225,
        "usedErrors": [],
        "usedEvents": [
          49204
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 36
} as const;