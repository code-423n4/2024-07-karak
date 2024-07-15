export const EIP712Upgradeable = {
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
    },
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
  "methodIdentifiers": {
    "eip712Domain()": "84b0196e"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"EIP712DomainChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"eip712Domain\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"fields\",\"type\":\"bytes1\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"version\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"verifyingContract\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256[]\",\"name\":\"extensions\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"https://eips.ethereum.org/EIPS/eip-712[EIP 712] is a standard for hashing and signing of typed structured data. The encoding scheme specified in the EIP requires a domain separator and a hash of the typed structured data, whose encoding is very generic and therefore its implementation in Solidity is not feasible, thus this contract does not implement the encoding itself. Protocols need to implement the type-specific encoding they need in order to produce the hash of their typed data using a combination of `abi.encode` and `keccak256`. This contract implements the EIP 712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA ({_hashTypedDataV4}). The implementation of the domain separator was designed to be as efficient as possible while still properly updating the chain id to protect against replay attacks on an eventual fork of the chain. NOTE: This contract implements the version of the encoding known as \\\"v4\\\", as implemented by the JSON RPC method https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask]. NOTE: In the upgradeable version of this contract, the cached values will correspond to the address, and the domain separator of the implementation contract. This will cause the {_domainSeparatorV4} function to always rebuild the separator from the immutable values, which is cheaper than accessing a cached version in cold storage.\",\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"EIP712DomainChanged()\":{\"details\":\"MAY be emitted to signal that the domain could have changed.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{\"eip712Domain()\":{\"details\":\"See {IERC-5267}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":\"EIP712Upgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":{\"keccak256\":\"0x85462422a22578744581e012e9aa0a391958cb360288b0b63f29bf0431d70327\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2bc529e2b9b28da5d26da451058250d85afcaa3c5083ee273ac68fa6bf956b78\",\"dweb:/ipfs/Qmd3Aq59ztmoVmHigsaR4YjkXWKERVpjfQ4a2PHk7Ke6Rx\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol\":{\"keccak256\":\"0xba333517a3add42cd35fe877656fc3dfcc9de53baa4f3aabbd6d12a92e4ea435\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ceacff44c0fdc81e48e0e0b1db87a2076d3c1fb497341de077bf1da9f6b406c\",\"dweb:/ipfs/QmRUo1muMRAewxrKQ7TkXUtknyRoR57AyEkoPpiuZQ8FzX\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875\",\"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc\",\"dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT\"]}},\"version\":1}",
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
          "inputs": [],
          "type": "event",
          "name": "EIP712DomainChanged",
          "anonymous": false
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
            "details": "See {IERC-5267}."
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
        "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol": "EIP712Upgradeable"
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
      },
      "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol": {
        "keccak256": "0x85462422a22578744581e012e9aa0a391958cb360288b0b63f29bf0431d70327",
        "urls": [
          "bzz-raw://2bc529e2b9b28da5d26da451058250d85afcaa3c5083ee273ac68fa6bf956b78",
          "dweb:/ipfs/Qmd3Aq59ztmoVmHigsaR4YjkXWKERVpjfQ4a2PHk7Ke6Rx"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol": {
        "keccak256": "0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92",
        "urls": [
          "bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a",
          "dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Strings.sol": {
        "keccak256": "0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792",
        "urls": [
          "bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453",
          "dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol": {
        "keccak256": "0xba333517a3add42cd35fe877656fc3dfcc9de53baa4f3aabbd6d12a92e4ea435",
        "urls": [
          "bzz-raw://2ceacff44c0fdc81e48e0e0b1db87a2076d3c1fb497341de077bf1da9f6b406c",
          "dweb:/ipfs/QmRUo1muMRAewxrKQ7TkXUtknyRoR57AyEkoPpiuZQ8FzX"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/Math.sol": {
        "keccak256": "0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d",
        "urls": [
          "bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875",
          "dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72",
        "urls": [
          "bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc",
          "dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol",
    "id": 47444,
    "exportedSymbols": {
      "EIP712Upgradeable": [
        47443
      ],
      "IERC5267": [
        49224
      ],
      "Initializable": [
        46877
      ],
      "MessageHashUtils": [
        52633
      ]
    },
    "nodeType": "SourceUnit",
    "src": "113:8579:27",
    "nodes": [
      {
        "id": 47101,
        "nodeType": "PragmaDirective",
        "src": "113:24:27",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 47103,
        "nodeType": "ImportDirective",
        "src": "139:97:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol",
        "file": "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 47444,
        "sourceUnit": 52634,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47102,
              "name": "MessageHashUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52633,
              "src": "147:16:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47105,
        "nodeType": "ImportDirective",
        "src": "237:73:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol",
        "file": "@openzeppelin/contracts/interfaces/IERC5267.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 47444,
        "sourceUnit": 49225,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47104,
              "name": "IERC5267",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49224,
              "src": "245:8:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47107,
        "nodeType": "ImportDirective",
        "src": "311:66:27",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 47444,
        "sourceUnit": 46878,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47106,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46877,
              "src": "319:13:27",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47443,
        "nodeType": "ContractDefinition",
        "src": "1959:6732:27",
        "nodes": [
          {
            "id": 47117,
            "nodeType": "VariableDeclaration",
            "src": "2028:140:27",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TYPE_HASH",
            "nameLocation": "2053:9:27",
            "scope": 47443,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 47113,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2028:7:27",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                  "id": 47115,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "2083:84:27",
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
                "id": 47114,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "2073:9:27",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 47116,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "2073:95:27",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "private"
          },
          {
            "id": 47129,
            "nodeType": "StructDefinition",
            "src": "2244:238:27",
            "nodes": [],
            "canonicalName": "EIP712Upgradeable.EIP712Storage",
            "documentation": {
              "id": 47118,
              "nodeType": "StructuredDocumentation",
              "src": "2175:64:27",
              "text": "@custom:storage-location erc7201:openzeppelin.storage.EIP712"
            },
            "members": [
              {
                "constant": false,
                "id": 47121,
                "mutability": "mutable",
                "name": "_hashedName",
                "nameLocation": "2332:11:27",
                "nodeType": "VariableDeclaration",
                "scope": 47129,
                "src": "2324:19:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 47120,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2324:7:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 47124,
                "mutability": "mutable",
                "name": "_hashedVersion",
                "nameLocation": "2413:14:27",
                "nodeType": "VariableDeclaration",
                "scope": 47129,
                "src": "2405:22:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 47123,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2405:7:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 47126,
                "mutability": "mutable",
                "name": "_name",
                "nameLocation": "2445:5:27",
                "nodeType": "VariableDeclaration",
                "scope": 47129,
                "src": "2438:12:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 47125,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2438:6:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 47128,
                "mutability": "mutable",
                "name": "_version",
                "nameLocation": "2467:8:27",
                "nodeType": "VariableDeclaration",
                "scope": 47129,
                "src": "2460:15:27",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 47127,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2460:6:27",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "EIP712Storage",
            "nameLocation": "2251:13:27",
            "scope": 47443,
            "visibility": "public"
          },
          {
            "id": 47132,
            "nodeType": "VariableDeclaration",
            "src": "2598:115:27",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EIP712StorageLocation",
            "nameLocation": "2623:21:27",
            "scope": 47443,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 47130,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2598:7:27",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307861313661343664393432363163373531376363386666383966363163306365393335393865336338343938303130313164656536343961366135353764313030",
              "id": 47131,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2647:66:27",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_73010143390315934406010559831118728393600729754696197287367516085911467577600_by_1",
                "typeString": "int_const 7301...(69 digits omitted)...7600"
              },
              "value": "0xa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d100"
            },
            "visibility": "private"
          },
          {
            "id": 47140,
            "nodeType": "FunctionDefinition",
            "src": "2720:156:27",
            "nodes": [],
            "body": {
              "id": 47139,
              "nodeType": "Block",
              "src": "2796:80:27",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2815:55:27",
                    "nodeType": "YulBlock",
                    "src": "2815:55:27",
                    "statements": [
                      {
                        "nativeSrc": "2829:31:27",
                        "nodeType": "YulAssignment",
                        "src": "2829:31:27",
                        "value": {
                          "name": "EIP712StorageLocation",
                          "nativeSrc": "2839:21:27",
                          "nodeType": "YulIdentifier",
                          "src": "2839:21:27"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "2829:6:27",
                            "nodeType": "YulIdentifier",
                            "src": "2829:6:27"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 47136,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2829:6:27",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 47132,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2839:21:27",
                      "valueSize": 1
                    }
                  ],
                  "id": 47138,
                  "nodeType": "InlineAssembly",
                  "src": "2806:64:27"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getEIP712Storage",
            "nameLocation": "2729:17:27",
            "parameters": {
              "id": 47133,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2746:2:27"
            },
            "returnParameters": {
              "id": 47137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47136,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "2793:1:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47140,
                  "src": "2771:23:27",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                    "typeString": "struct EIP712Upgradeable.EIP712Storage"
                  },
                  "typeName": {
                    "id": 47135,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 47134,
                      "name": "EIP712Storage",
                      "nameLocations": [
                        "2771:13:27"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47129,
                      "src": "2771:13:27"
                    },
                    "referencedDeclaration": 47129,
                    "src": "2771:13:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2770:25:27"
            },
            "scope": 47443,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 47156,
            "nodeType": "FunctionDefinition",
            "src": "3446:147:27",
            "nodes": [],
            "body": {
              "id": 47155,
              "nodeType": "Block",
              "src": "3538:55:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 47151,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47143,
                        "src": "3572:4:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 47152,
                        "name": "version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47145,
                        "src": "3578:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 47150,
                      "name": "__EIP712_init_unchained",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47196,
                      "src": "3548:23:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 47153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3548:38:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47154,
                  "nodeType": "ExpressionStatement",
                  "src": "3548:38:27"
                }
              ]
            },
            "documentation": {
              "id": 47141,
              "nodeType": "StructuredDocumentation",
              "src": "2882:559:27",
              "text": " @dev Initializes the domain separator and parameter caches.\n The meaning of `name` and `version` is specified in\n https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator[EIP 712]:\n - `name`: the user readable name of the signing domain, i.e. the name of the DApp or the protocol.\n - `version`: the current major version of the signing domain.\n NOTE: These parameters cannot be changed except through a xref:learn::upgrading-smart-contracts.adoc[smart\n contract upgrade]."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 47148,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 47147,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "3521:16:27"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46786,
                  "src": "3521:16:27"
                },
                "nodeType": "ModifierInvocation",
                "src": "3521:16:27"
              }
            ],
            "name": "__EIP712_init",
            "nameLocation": "3455:13:27",
            "parameters": {
              "id": 47146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47143,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3483:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47156,
                  "src": "3469:18:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47142,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3469:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47145,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "3503:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47156,
                  "src": "3489:21:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47144,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3489:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3468:43:27"
            },
            "returnParameters": {
              "id": 47149,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3538:0:27"
            },
            "scope": 47443,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47196,
            "nodeType": "FunctionDefinition",
            "src": "3599:330:27",
            "nodes": [],
            "body": {
              "id": 47195,
              "nodeType": "Block",
              "src": "3701:228:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47167
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47167,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3733:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 47195,
                      "src": "3711:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 47166,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 47165,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "3711:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47129,
                          "src": "3711:13:27"
                        },
                        "referencedDeclaration": 47129,
                        "src": "3711:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47170,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47168,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47140,
                      "src": "3737:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$47129_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 47169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3737:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3711:45:27"
                },
                {
                  "expression": {
                    "id": 47175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 47171,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47167,
                        "src": "3766:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 47173,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3768:5:27",
                      "memberName": "_name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47126,
                      "src": "3766:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 47174,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47158,
                      "src": "3776:4:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3766:14:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 47176,
                  "nodeType": "ExpressionStatement",
                  "src": "3766:14:27"
                },
                {
                  "expression": {
                    "id": 47181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 47177,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47167,
                        "src": "3790:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 47179,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3792:8:27",
                      "memberName": "_version",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47128,
                      "src": "3790:10:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 47180,
                      "name": "version",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47160,
                      "src": "3803:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3790:20:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 47182,
                  "nodeType": "ExpressionStatement",
                  "src": "3790:20:27"
                },
                {
                  "expression": {
                    "id": 47187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 47183,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47167,
                        "src": "3875:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 47185,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3877:11:27",
                      "memberName": "_hashedName",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47121,
                      "src": "3875:13:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 47186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3891:1:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3875:17:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 47188,
                  "nodeType": "ExpressionStatement",
                  "src": "3875:17:27"
                },
                {
                  "expression": {
                    "id": 47193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 47189,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47167,
                        "src": "3902:1:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 47191,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3904:14:27",
                      "memberName": "_hashedVersion",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47124,
                      "src": "3902:16:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 47192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3921:1:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3902:20:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 47194,
                  "nodeType": "ExpressionStatement",
                  "src": "3902:20:27"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 47163,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 47162,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "3684:16:27"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46786,
                  "src": "3684:16:27"
                },
                "nodeType": "ModifierInvocation",
                "src": "3684:16:27"
              }
            ],
            "name": "__EIP712_init_unchained",
            "nameLocation": "3608:23:27",
            "parameters": {
              "id": 47161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47158,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3646:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47196,
                  "src": "3632:18:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47157,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3632:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47160,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "3666:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47196,
                  "src": "3652:21:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47159,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3652:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3631:43:27"
            },
            "returnParameters": {
              "id": 47164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3701:0:27"
            },
            "scope": 47443,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47206,
            "nodeType": "FunctionDefinition",
            "src": "4015:109:27",
            "nodes": [],
            "body": {
              "id": 47205,
              "nodeType": "Block",
              "src": "4077:47:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47202,
                      "name": "_buildDomainSeparator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47229,
                      "src": "4094:21:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                        "typeString": "function () view returns (bytes32)"
                      }
                    },
                    "id": 47203,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4094:23:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 47201,
                  "id": 47204,
                  "nodeType": "Return",
                  "src": "4087:30:27"
                }
              ]
            },
            "documentation": {
              "id": 47197,
              "nodeType": "StructuredDocumentation",
              "src": "3935:75:27",
              "text": " @dev Returns the domain separator for the current chain."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_domainSeparatorV4",
            "nameLocation": "4024:18:27",
            "parameters": {
              "id": 47198,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4042:2:27"
            },
            "returnParameters": {
              "id": 47201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47200,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47206,
                  "src": "4068:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47199,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4068:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4067:9:27"
            },
            "scope": 47443,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47229,
            "nodeType": "FunctionDefinition",
            "src": "4130:191:27",
            "nodes": [],
            "body": {
              "id": 47228,
              "nodeType": "Block",
              "src": "4194:127:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 47214,
                            "name": "TYPE_HASH",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47117,
                            "src": "4232:9:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 47215,
                              "name": "_EIP712NameHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47390,
                              "src": "4243:15:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                "typeString": "function () view returns (bytes32)"
                              }
                            },
                            "id": 47216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4243:17:27",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 47217,
                              "name": "_EIP712VersionHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47442,
                              "src": "4262:18:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                "typeString": "function () view returns (bytes32)"
                              }
                            },
                            "id": 47218,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4262:20:27",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "expression": {
                              "id": 47219,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "4284:5:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 47220,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4290:7:27",
                            "memberName": "chainid",
                            "nodeType": "MemberAccess",
                            "src": "4284:13:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 47223,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4307:4:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_EIP712Upgradeable_$47443",
                                  "typeString": "contract EIP712Upgradeable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_EIP712Upgradeable_$47443",
                                  "typeString": "contract EIP712Upgradeable"
                                }
                              ],
                              "id": 47222,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4299:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 47221,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4299:7:27",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 47224,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4299:13:27",
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
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 47212,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4221:3:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 47213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4225:6:27",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "4221:10:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 47225,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4221:92:27",
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
                      "id": 47211,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "4211:9:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 47226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4211:103:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 47210,
                  "id": 47227,
                  "nodeType": "Return",
                  "src": "4204:110:27"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_buildDomainSeparator",
            "nameLocation": "4139:21:27",
            "parameters": {
              "id": 47207,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4160:2:27"
            },
            "returnParameters": {
              "id": 47210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47209,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47229,
                  "src": "4185:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47208,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4185:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4184:9:27"
            },
            "scope": 47443,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 47245,
            "nodeType": "FunctionDefinition",
            "src": "4946:176:27",
            "nodes": [],
            "body": {
              "id": 47244,
              "nodeType": "Block",
              "src": "5032:90:27",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 47239,
                          "name": "_domainSeparatorV4",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47206,
                          "src": "5082:18:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                            "typeString": "function () view returns (bytes32)"
                          }
                        },
                        "id": 47240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5082:20:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 47241,
                        "name": "structHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47232,
                        "src": "5104:10:27",
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
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "id": 47237,
                        "name": "MessageHashUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52633,
                        "src": "5049:16:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_MessageHashUtils_$52633_$",
                          "typeString": "type(library MessageHashUtils)"
                        }
                      },
                      "id": 47238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5066:15:27",
                      "memberName": "toTypedDataHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 52632,
                      "src": "5049:32:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes32) pure returns (bytes32)"
                      }
                    },
                    "id": 47242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5049:66:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 47236,
                  "id": 47243,
                  "nodeType": "Return",
                  "src": "5042:73:27"
                }
              ]
            },
            "documentation": {
              "id": 47230,
              "nodeType": "StructuredDocumentation",
              "src": "4327:614:27",
              "text": " @dev Given an already https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct[hashed struct], this\n function returns the hash of the fully encoded EIP712 message for this domain.\n This hash can be used together with {ECDSA-recover} to obtain the signer of a message. For example:\n ```solidity\n bytes32 digest = _hashTypedDataV4(keccak256(abi.encode(\n     keccak256(\"Mail(address to,string contents)\"),\n     mailTo,\n     keccak256(bytes(mailContents))\n )));\n address signer = ECDSA.recover(digest, signature);\n ```"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_hashTypedDataV4",
            "nameLocation": "4955:16:27",
            "parameters": {
              "id": 47233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47232,
                  "mutability": "mutable",
                  "name": "structHash",
                  "nameLocation": "4980:10:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47245,
                  "src": "4972:18:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47231,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4972:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4971:20:27"
            },
            "returnParameters": {
              "id": 47236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47235,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47245,
                  "src": "5023:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47234,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5023:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5022:9:27"
            },
            "scope": 47443,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47306,
            "nodeType": "FunctionDefinition",
            "src": "5173:903:27",
            "nodes": [],
            "body": {
              "id": 47305,
              "nodeType": "Block",
              "src": "5501:575:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47266
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47266,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "5533:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 47305,
                      "src": "5511:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 47265,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 47264,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "5511:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47129,
                          "src": "5511:13:27"
                        },
                        "referencedDeclaration": 47129,
                        "src": "5511:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47269,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47267,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47140,
                      "src": "5537:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$47129_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 47268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5537:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5511:45:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 47279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 47274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 47271,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47266,
                              "src": "5777:1:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                                "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                              }
                            },
                            "id": 47272,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5779:11:27",
                            "memberName": "_hashedName",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 47121,
                            "src": "5777:13:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 47273,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5794:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5777:18:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 47278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 47275,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47266,
                              "src": "5799:1:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                                "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                              }
                            },
                            "id": 47276,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5801:14:27",
                            "memberName": "_hashedVersion",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 47124,
                            "src": "5799:16:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 47277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5819:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5799:21:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5777:43:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4549503731323a20556e696e697469616c697a6564",
                        "id": 47280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5822:23:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2e5045ff73280aa8e8acd8c82710f23812497f87f7f576e2220a2ddd0d45eade",
                          "typeString": "literal_string \"EIP712: Uninitialized\""
                        },
                        "value": "EIP712: Uninitialized"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2e5045ff73280aa8e8acd8c82710f23812497f87f7f576e2220a2ddd0d45eade",
                          "typeString": "literal_string \"EIP712: Uninitialized\""
                        }
                      ],
                      "id": 47270,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5769:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 47281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5769:77:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47282,
                  "nodeType": "ExpressionStatement",
                  "src": "5769:77:27"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "hexValue": "0f",
                        "id": 47283,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "hexString",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5878:7:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3d725c5ee53025f027da36bea8d3af3b6a3e9d2d1542d47c162631de48e66c1c",
                          "typeString": "literal_string hex\"0f\""
                        },
                        "value": "\u000f"
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 47284,
                          "name": "_EIP712Name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47322,
                          "src": "5908:11:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                            "typeString": "function () view returns (string memory)"
                          }
                        },
                        "id": 47285,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5908:13:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 47286,
                          "name": "_EIP712Version",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47338,
                          "src": "5935:14:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                            "typeString": "function () view returns (string memory)"
                          }
                        },
                        "id": 47287,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5935:16:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "expression": {
                          "id": 47288,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "5965:5:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 47289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5971:7:27",
                        "memberName": "chainid",
                        "nodeType": "MemberAccess",
                        "src": "5965:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 47292,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "6000:4:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_EIP712Upgradeable_$47443",
                              "typeString": "contract EIP712Upgradeable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_EIP712Upgradeable_$47443",
                              "typeString": "contract EIP712Upgradeable"
                            }
                          ],
                          "id": 47291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5992:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 47290,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5992:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 47293,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5992:13:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 47296,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6027:1:27",
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
                          "id": 47295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6019:7:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 47294,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "6019:7:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 47297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6019:10:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 47301,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6057:1:27",
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
                          "id": 47300,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6043:13:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (uint256[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 47298,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6047:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 47299,
                            "nodeType": "ArrayTypeName",
                            "src": "6047:9:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                              "typeString": "uint256[]"
                            }
                          }
                        },
                        "id": 47302,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6043:16:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      }
                    ],
                    "id": 47303,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5864:205:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_stringliteral_3d725c5ee53025f027da36bea8d3af3b6a3e9d2d1542d47c162631de48e66c1c_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$_t_address_$_t_bytes32_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(literal_string hex\"0f\",string memory,string memory,uint256,address,bytes32,uint256[] memory)"
                    }
                  },
                  "functionReturnParameters": 47263,
                  "id": 47304,
                  "nodeType": "Return",
                  "src": "5857:212:27"
                }
              ]
            },
            "baseFunctions": [
              49223
            ],
            "documentation": {
              "id": 47246,
              "nodeType": "StructuredDocumentation",
              "src": "5128:40:27",
              "text": " @dev See {IERC-5267}."
            },
            "functionSelector": "84b0196e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "eip712Domain",
            "nameLocation": "5182:12:27",
            "parameters": {
              "id": 47247,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5194:2:27"
            },
            "returnParameters": {
              "id": 47263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47249,
                  "mutability": "mutable",
                  "name": "fields",
                  "nameLocation": "5278:6:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47306,
                  "src": "5271:13:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes1",
                    "typeString": "bytes1"
                  },
                  "typeName": {
                    "id": 47248,
                    "name": "bytes1",
                    "nodeType": "ElementaryTypeName",
                    "src": "5271:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47251,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5312:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47306,
                  "src": "5298:18:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47250,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5298:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47253,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "5344:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47306,
                  "src": "5330:21:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47252,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5330:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47255,
                  "mutability": "mutable",
                  "name": "chainId",
                  "nameLocation": "5373:7:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47306,
                  "src": "5365:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 47254,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5365:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47257,
                  "mutability": "mutable",
                  "name": "verifyingContract",
                  "nameLocation": "5402:17:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47306,
                  "src": "5394:25:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47256,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5394:7:27",
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
                  "id": 47259,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "5441:4:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47306,
                  "src": "5433:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47258,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5433:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47262,
                  "mutability": "mutable",
                  "name": "extensions",
                  "nameLocation": "5476:10:27",
                  "nodeType": "VariableDeclaration",
                  "scope": 47306,
                  "src": "5459:27:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 47260,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5459:7:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 47261,
                    "nodeType": "ArrayTypeName",
                    "src": "5459:9:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5257:239:27"
            },
            "scope": 47443,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47322,
            "nodeType": "FunctionDefinition",
            "src": "6300:155:27",
            "nodes": [],
            "body": {
              "id": 47321,
              "nodeType": "Block",
              "src": "6369:86:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47314
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47314,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6401:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 47321,
                      "src": "6379:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 47313,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 47312,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "6379:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47129,
                          "src": "6379:13:27"
                        },
                        "referencedDeclaration": 47129,
                        "src": "6379:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47317,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47315,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47140,
                      "src": "6405:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$47129_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 47316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6405:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6379:45:27"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 47318,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47314,
                      "src": "6441:1:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                      }
                    },
                    "id": 47319,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "6443:5:27",
                    "memberName": "_name",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 47126,
                    "src": "6441:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 47311,
                  "id": 47320,
                  "nodeType": "Return",
                  "src": "6434:14:27"
                }
              ]
            },
            "documentation": {
              "id": 47307,
              "nodeType": "StructuredDocumentation",
              "src": "6082:213:27",
              "text": " @dev The name parameter for the EIP712 domain.\n NOTE: This function reads from storage by default, but can be redefined to return a constant value if gas costs\n are a concern."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712Name",
            "nameLocation": "6309:11:27",
            "parameters": {
              "id": 47308,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6320:2:27"
            },
            "returnParameters": {
              "id": 47311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47310,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47322,
                  "src": "6354:13:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47309,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6354:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6353:15:27"
            },
            "scope": 47443,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47338,
            "nodeType": "FunctionDefinition",
            "src": "6682:161:27",
            "nodes": [],
            "body": {
              "id": 47337,
              "nodeType": "Block",
              "src": "6754:89:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47330
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47330,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6786:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 47337,
                      "src": "6764:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 47329,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 47328,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "6764:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47129,
                          "src": "6764:13:27"
                        },
                        "referencedDeclaration": 47129,
                        "src": "6764:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47333,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47331,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47140,
                      "src": "6790:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$47129_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 47332,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6790:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6764:45:27"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 47334,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47330,
                      "src": "6826:1:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                      }
                    },
                    "id": 47335,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "6828:8:27",
                    "memberName": "_version",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 47128,
                    "src": "6826:10:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 47327,
                  "id": 47336,
                  "nodeType": "Return",
                  "src": "6819:17:27"
                }
              ]
            },
            "documentation": {
              "id": 47323,
              "nodeType": "StructuredDocumentation",
              "src": "6461:216:27",
              "text": " @dev The version parameter for the EIP712 domain.\n NOTE: This function reads from storage by default, but can be redefined to return a constant value if gas costs\n are a concern."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712Version",
            "nameLocation": "6691:14:27",
            "parameters": {
              "id": 47324,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6705:2:27"
            },
            "returnParameters": {
              "id": 47327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47326,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47338,
                  "src": "6739:13:27",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47325,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6739:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6738:15:27"
            },
            "scope": 47443,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47390,
            "nodeType": "FunctionDefinition",
            "src": "7058:687:27",
            "nodes": [],
            "body": {
              "id": 47389,
              "nodeType": "Block",
              "src": "7117:628:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47346
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47346,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "7149:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 47389,
                      "src": "7127:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 47345,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 47344,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "7127:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47129,
                          "src": "7127:13:27"
                        },
                        "referencedDeclaration": 47129,
                        "src": "7127:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47349,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47347,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47140,
                      "src": "7153:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$47129_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 47348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7153:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7127:45:27"
                },
                {
                  "assignments": [
                    47351
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47351,
                      "mutability": "mutable",
                      "name": "name",
                      "nameLocation": "7196:4:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 47389,
                      "src": "7182:18:27",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 47350,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "7182:6:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47354,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47352,
                      "name": "_EIP712Name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47322,
                      "src": "7203:11:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 47353,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7203:13:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7182:34:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 47361,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 47357,
                            "name": "name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47351,
                            "src": "7236:4:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 47356,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7230:5:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 47355,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "7230:5:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 47358,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7230:11:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 47359,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7242:6:27",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "7230:18:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 47360,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7251:1:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7230:22:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 47387,
                    "nodeType": "Block",
                    "src": "7314:425:27",
                    "statements": [
                      {
                        "assignments": [
                          47371
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 47371,
                            "mutability": "mutable",
                            "name": "hashedName",
                            "nameLocation": "7559:10:27",
                            "nodeType": "VariableDeclaration",
                            "scope": 47387,
                            "src": "7551:18:27",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 47370,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "7551:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 47374,
                        "initialValue": {
                          "expression": {
                            "id": 47372,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47346,
                            "src": "7572:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                              "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                            }
                          },
                          "id": 47373,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7574:11:27",
                          "memberName": "_hashedName",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 47121,
                          "src": "7572:13:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7551:34:27"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 47377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 47375,
                            "name": "hashedName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47371,
                            "src": "7603:10:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 47376,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7617:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "7603:15:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 47385,
                          "nodeType": "Block",
                          "src": "7676:53:27",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "",
                                    "id": 47382,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "7711:2:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                      "typeString": "literal_string \"\""
                                    },
                                    "value": ""
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                      "typeString": "literal_string \"\""
                                    }
                                  ],
                                  "id": 47381,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -8,
                                  "src": "7701:9:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                  }
                                },
                                "id": 47383,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7701:13:27",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 47343,
                              "id": 47384,
                              "nodeType": "Return",
                              "src": "7694:20:27"
                            }
                          ]
                        },
                        "id": 47386,
                        "nodeType": "IfStatement",
                        "src": "7599:130:27",
                        "trueBody": {
                          "id": 47380,
                          "nodeType": "Block",
                          "src": "7620:50:27",
                          "statements": [
                            {
                              "expression": {
                                "id": 47378,
                                "name": "hashedName",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47371,
                                "src": "7645:10:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 47343,
                              "id": 47379,
                              "nodeType": "Return",
                              "src": "7638:17:27"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 47388,
                  "nodeType": "IfStatement",
                  "src": "7226:513:27",
                  "trueBody": {
                    "id": 47369,
                    "nodeType": "Block",
                    "src": "7254:54:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 47365,
                                  "name": "name",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47351,
                                  "src": "7291:4:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 47364,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7285:5:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 47363,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7285:5:27",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 47366,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7285:11:27",
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
                            "id": 47362,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "7275:9:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 47367,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7275:22:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "functionReturnParameters": 47343,
                        "id": 47368,
                        "nodeType": "Return",
                        "src": "7268:29:27"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47339,
              "nodeType": "StructuredDocumentation",
              "src": "6849:204:27",
              "text": " @dev The hash of the name parameter for the EIP712 domain.\n NOTE: In previous versions this function was virtual. In this version you should override `_EIP712Name` instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712NameHash",
            "nameLocation": "7067:15:27",
            "parameters": {
              "id": 47340,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7082:2:27"
            },
            "returnParameters": {
              "id": 47343,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47342,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47390,
                  "src": "7108:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47341,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7108:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7107:9:27"
            },
            "scope": 47443,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47442,
            "nodeType": "FunctionDefinition",
            "src": "7966:723:27",
            "nodes": [],
            "body": {
              "id": 47441,
              "nodeType": "Block",
              "src": "8028:661:27",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47398
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47398,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "8060:1:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 47441,
                      "src": "8038:23:27",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 47397,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 47396,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "8038:13:27"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47129,
                          "src": "8038:13:27"
                        },
                        "referencedDeclaration": 47129,
                        "src": "8038:13:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47401,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47399,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47140,
                      "src": "8064:17:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$47129_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 47400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8064:19:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8038:45:27"
                },
                {
                  "assignments": [
                    47403
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47403,
                      "mutability": "mutable",
                      "name": "version",
                      "nameLocation": "8107:7:27",
                      "nodeType": "VariableDeclaration",
                      "scope": 47441,
                      "src": "8093:21:27",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 47402,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "8093:6:27",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47406,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 47404,
                      "name": "_EIP712Version",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47338,
                      "src": "8117:14:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 47405,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8117:16:27",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8093:40:27"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 47413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 47409,
                            "name": "version",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47403,
                            "src": "8153:7:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 47408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8147:5:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 47407,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "8147:5:27",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 47410,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8147:14:27",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 47411,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8162:6:27",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "8147:21:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 47412,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8171:1:27",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8147:25:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 47439,
                    "nodeType": "Block",
                    "src": "8237:446:27",
                    "statements": [
                      {
                        "assignments": [
                          47423
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 47423,
                            "mutability": "mutable",
                            "name": "hashedVersion",
                            "nameLocation": "8491:13:27",
                            "nodeType": "VariableDeclaration",
                            "scope": 47439,
                            "src": "8483:21:27",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 47422,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "8483:7:27",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 47426,
                        "initialValue": {
                          "expression": {
                            "id": 47424,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47398,
                            "src": "8507:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_EIP712Storage_$47129_storage_ptr",
                              "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                            }
                          },
                          "id": 47425,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8509:14:27",
                          "memberName": "_hashedVersion",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 47124,
                          "src": "8507:16:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8483:40:27"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 47429,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 47427,
                            "name": "hashedVersion",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47423,
                            "src": "8541:13:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 47428,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8558:1:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "8541:18:27",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 47437,
                          "nodeType": "Block",
                          "src": "8620:53:27",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "",
                                    "id": 47434,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "8655:2:27",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                      "typeString": "literal_string \"\""
                                    },
                                    "value": ""
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                      "typeString": "literal_string \"\""
                                    }
                                  ],
                                  "id": 47433,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -8,
                                  "src": "8645:9:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                  }
                                },
                                "id": 47435,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8645:13:27",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 47395,
                              "id": 47436,
                              "nodeType": "Return",
                              "src": "8638:20:27"
                            }
                          ]
                        },
                        "id": 47438,
                        "nodeType": "IfStatement",
                        "src": "8537:136:27",
                        "trueBody": {
                          "id": 47432,
                          "nodeType": "Block",
                          "src": "8561:53:27",
                          "statements": [
                            {
                              "expression": {
                                "id": 47430,
                                "name": "hashedVersion",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47423,
                                "src": "8586:13:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 47395,
                              "id": 47431,
                              "nodeType": "Return",
                              "src": "8579:20:27"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 47440,
                  "nodeType": "IfStatement",
                  "src": "8143:540:27",
                  "trueBody": {
                    "id": 47421,
                    "nodeType": "Block",
                    "src": "8174:57:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 47417,
                                  "name": "version",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47403,
                                  "src": "8211:7:27",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 47416,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "8205:5:27",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 47415,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "8205:5:27",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 47418,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8205:14:27",
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
                            "id": 47414,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "8195:9:27",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 47419,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8195:25:27",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "functionReturnParameters": 47395,
                        "id": 47420,
                        "nodeType": "Return",
                        "src": "8188:32:27"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47391,
              "nodeType": "StructuredDocumentation",
              "src": "7751:210:27",
              "text": " @dev The hash of the version parameter for the EIP712 domain.\n NOTE: In previous versions this function was virtual. In this version you should override `_EIP712Version` instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712VersionHash",
            "nameLocation": "7975:18:27",
            "parameters": {
              "id": 47392,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7993:2:27"
            },
            "returnParameters": {
              "id": 47395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47394,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47442,
                  "src": "8019:7:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47393,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8019:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8018:9:27"
            },
            "scope": 47443,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 47109,
              "name": "Initializable",
              "nameLocations": [
                "1998:13:27"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46877,
              "src": "1998:13:27"
            },
            "id": 47110,
            "nodeType": "InheritanceSpecifier",
            "src": "1998:13:27"
          },
          {
            "baseName": {
              "id": 47111,
              "name": "IERC5267",
              "nameLocations": [
                "2013:8:27"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 49224,
              "src": "2013:8:27"
            },
            "id": 47112,
            "nodeType": "InheritanceSpecifier",
            "src": "2013:8:27"
          }
        ],
        "canonicalName": "EIP712Upgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 47108,
          "nodeType": "StructuredDocumentation",
          "src": "379:1579:27",
          "text": " @dev https://eips.ethereum.org/EIPS/eip-712[EIP 712] is a standard for hashing and signing of typed structured data.\n The encoding scheme specified in the EIP requires a domain separator and a hash of the typed structured data, whose\n encoding is very generic and therefore its implementation in Solidity is not feasible, thus this contract\n does not implement the encoding itself. Protocols need to implement the type-specific encoding they need in order to\n produce the hash of their typed data using a combination of `abi.encode` and `keccak256`.\n This contract implements the EIP 712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding\n scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA\n ({_hashTypedDataV4}).\n The implementation of the domain separator was designed to be as efficient as possible while still properly updating\n the chain id to protect against replay attacks on an eventual fork of the chain.\n NOTE: This contract implements the version of the encoding known as \"v4\", as implemented by the JSON RPC method\n https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask].\n NOTE: In the upgradeable version of this contract, the cached values will correspond to the address, and the domain\n separator of the implementation contract. This will cause the {_domainSeparatorV4} function to always rebuild the\n separator from the immutable values, which is cheaper than accessing a cached version in cold storage."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          47443,
          49224,
          46877
        ],
        "name": "EIP712Upgradeable",
        "nameLocation": "1977:17:27",
        "scope": 47444,
        "usedErrors": [
          46640,
          46643
        ],
        "usedEvents": [
          46648,
          49204
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 27
} as const;