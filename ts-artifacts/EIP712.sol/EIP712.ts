export const EIP712 = {
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
      "type": "error",
      "name": "InvalidShortString",
      "inputs": []
    },
    {
      "type": "error",
      "name": "StringTooLong",
      "inputs": [
        {
          "name": "str",
          "type": "string",
          "internalType": "string"
        }
      ]
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidShortString\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"str\",\"type\":\"string\"}],\"name\":\"StringTooLong\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"EIP712DomainChanged\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"eip712Domain\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"fields\",\"type\":\"bytes1\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"version\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"verifyingContract\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256[]\",\"name\":\"extensions\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"custom:oz-upgrades-unsafe-allow\":\"state-variable-immutable\",\"details\":\"https://eips.ethereum.org/EIPS/eip-712[EIP 712] is a standard for hashing and signing of typed structured data. The encoding scheme specified in the EIP requires a domain separator and a hash of the typed structured data, whose encoding is very generic and therefore its implementation in Solidity is not feasible, thus this contract does not implement the encoding itself. Protocols need to implement the type-specific encoding they need in order to produce the hash of their typed data using a combination of `abi.encode` and `keccak256`. This contract implements the EIP 712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA ({_hashTypedDataV4}). The implementation of the domain separator was designed to be as efficient as possible while still properly updating the chain id to protect against replay attacks on an eventual fork of the chain. NOTE: This contract implements the version of the encoding known as \\\"v4\\\", as implemented by the JSON RPC method https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask]. NOTE: In the upgradeable version of this contract, the cached values will correspond to the address, and the domain separator of the implementation contract. This will cause the {_domainSeparatorV4} function to always rebuild the separator from the immutable values, which is cheaper than accessing a cached version in cold storage.\",\"events\":{\"EIP712DomainChanged()\":{\"details\":\"MAY be emitted to signal that the domain could have changed.\"}},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes the domain separator and parameter caches. The meaning of `name` and `version` is specified in https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator[EIP 712]: - `name`: the user readable name of the signing domain, i.e. the name of the DApp or the protocol. - `version`: the current major version of the signing domain. NOTE: These parameters cannot be changed except through a xref:learn::upgrading-smart-contracts.adoc[smart contract upgrade].\"},\"eip712Domain()\":{\"details\":\"See {IERC-5267}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/EIP712.sol\":\"EIP712\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]},\"node_modules/@openzeppelin/contracts/utils/ShortStrings.sol\":{\"keccak256\":\"0x18a7171df639a934592915a520ecb97c5bbc9675a1105607aac8a94e72bf62c6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7478e1f13da69a2867ccd883001d836b75620362e743f196376d63ed0c422a1c\",\"dweb:/ipfs/QmWywcQ9TNfwtoqAxbn25d8C5VrV12PrPS9UjtGe6pL2BA\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/EIP712.sol\":{\"keccak256\":\"0x999f705a027ed6dc2d4e0df2cc4a509852c6bfd11de1c8161bf88832d0503fd0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0798def67258d9a3cc20b2b4da7ebf351a5cefe0abfdd665d2d81f8e32f89b21\",\"dweb:/ipfs/QmPEvJosnPfzHNjKvCv2D3891mA2Ww8eUwkqrxBjuYdHCt\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol\":{\"keccak256\":\"0xba333517a3add42cd35fe877656fc3dfcc9de53baa4f3aabbd6d12a92e4ea435\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ceacff44c0fdc81e48e0e0b1db87a2076d3c1fb497341de077bf1da9f6b406c\",\"dweb:/ipfs/QmRUo1muMRAewxrKQ7TkXUtknyRoR57AyEkoPpiuZQ8FzX\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875\",\"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc\",\"dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT\"]}},\"version\":1}",
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
          "name": "InvalidShortString"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "str",
              "type": "string"
            }
          ],
          "type": "error",
          "name": "StringTooLong"
        },
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
          "constructor": {
            "details": "Initializes the domain separator and parameter caches. The meaning of `name` and `version` is specified in https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator[EIP 712]: - `name`: the user readable name of the signing domain, i.e. the name of the DApp or the protocol. - `version`: the current major version of the signing domain. NOTE: These parameters cannot be changed except through a xref:learn::upgrading-smart-contracts.adoc[smart contract upgrade]."
          },
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
        "node_modules/@openzeppelin/contracts/utils/cryptography/EIP712.sol": "EIP712"
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
      },
      "node_modules/@openzeppelin/contracts/utils/ShortStrings.sol": {
        "keccak256": "0x18a7171df639a934592915a520ecb97c5bbc9675a1105607aac8a94e72bf62c6",
        "urls": [
          "bzz-raw://7478e1f13da69a2867ccd883001d836b75620362e743f196376d63ed0c422a1c",
          "dweb:/ipfs/QmWywcQ9TNfwtoqAxbn25d8C5VrV12PrPS9UjtGe6pL2BA"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol": {
        "keccak256": "0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418",
        "urls": [
          "bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c",
          "dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR"
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
      "node_modules/@openzeppelin/contracts/utils/cryptography/EIP712.sol": {
        "keccak256": "0x999f705a027ed6dc2d4e0df2cc4a509852c6bfd11de1c8161bf88832d0503fd0",
        "urls": [
          "bzz-raw://0798def67258d9a3cc20b2b4da7ebf351a5cefe0abfdd665d2d81f8e32f89b21",
          "dweb:/ipfs/QmPEvJosnPfzHNjKvCv2D3891mA2Ww8eUwkqrxBjuYdHCt"
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
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/EIP712.sol",
    "id": 52560,
    "exportedSymbols": {
      "EIP712": [
        52559
      ],
      "IERC5267": [
        49224
      ],
      "MessageHashUtils": [
        52633
      ],
      "ShortString": [
        51408
      ],
      "ShortStrings": [
        51619
      ]
    },
    "nodeType": "SourceUnit",
    "src": "113:6498:62",
    "nodes": [
      {
        "id": 52334,
        "nodeType": "PragmaDirective",
        "src": "113:24:62",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 52336,
        "nodeType": "ImportDirective",
        "src": "139:56:62",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol",
        "file": "./MessageHashUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 52560,
        "sourceUnit": 52634,
        "symbolAliases": [
          {
            "foreign": {
              "id": 52335,
              "name": "MessageHashUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52633,
              "src": "147:16:62",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 52339,
        "nodeType": "ImportDirective",
        "src": "196:62:62",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/ShortStrings.sol",
        "file": "../ShortStrings.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 52560,
        "sourceUnit": 51620,
        "symbolAliases": [
          {
            "foreign": {
              "id": 52337,
              "name": "ShortStrings",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51619,
              "src": "204:12:62",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 52338,
              "name": "ShortString",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51408,
              "src": "218:11:62",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 52341,
        "nodeType": "ImportDirective",
        "src": "259:55:62",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol",
        "file": "../../interfaces/IERC5267.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 52560,
        "sourceUnit": 49225,
        "symbolAliases": [
          {
            "foreign": {
              "id": 52340,
              "name": "IERC5267",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49224,
              "src": "267:8:62",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 52559,
        "nodeType": "ContractDefinition",
        "src": "1960:4650:62",
        "nodes": [
          {
            "id": 52346,
            "nodeType": "UsingForDirective",
            "src": "2003:25:62",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 52345,
              "name": "ShortStrings",
              "nameLocations": [
                "2009:12:62"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 51619,
              "src": "2009:12:62"
            }
          },
          {
            "id": 52351,
            "nodeType": "VariableDeclaration",
            "src": "2034:140:62",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TYPE_HASH",
            "nameLocation": "2059:9:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 52347,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2034:7:62",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                  "id": 52349,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "2089:84:62",
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
                "id": 52348,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "2079:9:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 52350,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "2079:95:62",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52353,
            "nodeType": "VariableDeclaration",
            "src": "2373:48:62",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_cachedDomainSeparator",
            "nameLocation": "2399:22:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 52352,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2373:7:62",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52355,
            "nodeType": "VariableDeclaration",
            "src": "2427:40:62",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_cachedChainId",
            "nameLocation": "2453:14:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 52354,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2427:7:62",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52357,
            "nodeType": "VariableDeclaration",
            "src": "2473:37:62",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_cachedThis",
            "nameLocation": "2499:11:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 52356,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2473:7:62",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52359,
            "nodeType": "VariableDeclaration",
            "src": "2517:37:62",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_hashedName",
            "nameLocation": "2543:11:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 52358,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2517:7:62",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52361,
            "nodeType": "VariableDeclaration",
            "src": "2560:40:62",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_hashedVersion",
            "nameLocation": "2586:14:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 52360,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2560:7:62",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52364,
            "nodeType": "VariableDeclaration",
            "src": "2607:35:62",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_name",
            "nameLocation": "2637:5:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
              "typeString": "ShortString"
            },
            "typeName": {
              "id": 52363,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 52362,
                "name": "ShortString",
                "nameLocations": [
                  "2607:11:62"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 51408,
                "src": "2607:11:62"
              },
              "referencedDeclaration": 51408,
              "src": "2607:11:62",
              "typeDescriptions": {
                "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                "typeString": "ShortString"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52367,
            "nodeType": "VariableDeclaration",
            "src": "2648:38:62",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_version",
            "nameLocation": "2678:8:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
              "typeString": "ShortString"
            },
            "typeName": {
              "id": 52366,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 52365,
                "name": "ShortString",
                "nameLocations": [
                  "2648:11:62"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 51408,
                "src": "2648:11:62"
              },
              "referencedDeclaration": 51408,
              "src": "2648:11:62",
              "typeDescriptions": {
                "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                "typeString": "ShortString"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52369,
            "nodeType": "VariableDeclaration",
            "src": "2692:28:62",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_nameFallback",
            "nameLocation": "2707:13:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 52368,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "2692:6:62",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52371,
            "nodeType": "VariableDeclaration",
            "src": "2726:31:62",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_versionFallback",
            "nameLocation": "2741:16:62",
            "scope": 52559,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 52370,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "2726:6:62",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 52429,
            "nodeType": "FunctionDefinition",
            "src": "3328:431:62",
            "nodes": [],
            "body": {
              "id": 52428,
              "nodeType": "Block",
              "src": "3383:376:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 52384,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 52379,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52364,
                      "src": "3393:5:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                        "typeString": "ShortString"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 52382,
                          "name": "_nameFallback",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52369,
                          "src": "3432:13:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        ],
                        "expression": {
                          "id": 52380,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52374,
                          "src": "3401:4:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 52381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3406:25:62",
                        "memberName": "toShortStringWithFallback",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 51560,
                        "src": "3401:30:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_storage_ptr_$returns$_t_userDefinedValueType$_ShortString_$51408_$attached_to$_t_string_memory_ptr_$",
                          "typeString": "function (string memory,string storage pointer) returns (ShortString)"
                        }
                      },
                      "id": 52383,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3401:45:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                        "typeString": "ShortString"
                      }
                    },
                    "src": "3393:53:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                      "typeString": "ShortString"
                    }
                  },
                  "id": 52385,
                  "nodeType": "ExpressionStatement",
                  "src": "3393:53:62"
                },
                {
                  "expression": {
                    "id": 52391,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 52386,
                      "name": "_version",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52367,
                      "src": "3456:8:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                        "typeString": "ShortString"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 52389,
                          "name": "_versionFallback",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52371,
                          "src": "3501:16:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        ],
                        "expression": {
                          "id": 52387,
                          "name": "version",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52376,
                          "src": "3467:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 52388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3475:25:62",
                        "memberName": "toShortStringWithFallback",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 51560,
                        "src": "3467:33:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_storage_ptr_$returns$_t_userDefinedValueType$_ShortString_$51408_$attached_to$_t_string_memory_ptr_$",
                          "typeString": "function (string memory,string storage pointer) returns (ShortString)"
                        }
                      },
                      "id": 52390,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3467:51:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                        "typeString": "ShortString"
                      }
                    },
                    "src": "3456:62:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                      "typeString": "ShortString"
                    }
                  },
                  "id": 52392,
                  "nodeType": "ExpressionStatement",
                  "src": "3456:62:62"
                },
                {
                  "expression": {
                    "id": 52400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 52393,
                      "name": "_hashedName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52359,
                      "src": "3528:11:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 52397,
                              "name": "name",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52374,
                              "src": "3558:4:62",
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
                            "id": 52396,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3552:5:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 52395,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "3552:5:62",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 52398,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3552:11:62",
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
                        "id": 52394,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3542:9:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 52399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3542:22:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "3528:36:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 52401,
                  "nodeType": "ExpressionStatement",
                  "src": "3528:36:62"
                },
                {
                  "expression": {
                    "id": 52409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 52402,
                      "name": "_hashedVersion",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52361,
                      "src": "3574:14:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 52406,
                              "name": "version",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 52376,
                              "src": "3607:7:62",
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
                            "id": 52405,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3601:5:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 52404,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "3601:5:62",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 52407,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3601:14:62",
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
                        "id": 52403,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "3591:9:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 52408,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3591:25:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "3574:42:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 52410,
                  "nodeType": "ExpressionStatement",
                  "src": "3574:42:62"
                },
                {
                  "expression": {
                    "id": 52414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 52411,
                      "name": "_cachedChainId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52355,
                      "src": "3627:14:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 52412,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "3644:5:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 52413,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3650:7:62",
                      "memberName": "chainid",
                      "nodeType": "MemberAccess",
                      "src": "3644:13:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3627:30:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 52415,
                  "nodeType": "ExpressionStatement",
                  "src": "3627:30:62"
                },
                {
                  "expression": {
                    "id": 52419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 52416,
                      "name": "_cachedDomainSeparator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52353,
                      "src": "3667:22:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 52417,
                        "name": "_buildDomainSeparator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52476,
                        "src": "3692:21:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                          "typeString": "function () view returns (bytes32)"
                        }
                      },
                      "id": 52418,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3692:23:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "3667:48:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 52420,
                  "nodeType": "ExpressionStatement",
                  "src": "3667:48:62"
                },
                {
                  "expression": {
                    "id": 52426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 52421,
                      "name": "_cachedThis",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52357,
                      "src": "3725:11:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 52424,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "3747:4:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_EIP712_$52559",
                            "typeString": "contract EIP712"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_EIP712_$52559",
                            "typeString": "contract EIP712"
                          }
                        ],
                        "id": 52423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3739:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 52422,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3739:7:62",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 52425,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3739:13:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3725:27:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 52427,
                  "nodeType": "ExpressionStatement",
                  "src": "3725:27:62"
                }
              ]
            },
            "documentation": {
              "id": 52372,
              "nodeType": "StructuredDocumentation",
              "src": "2764:559:62",
              "text": " @dev Initializes the domain separator and parameter caches.\n The meaning of `name` and `version` is specified in\n https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator[EIP 712]:\n - `name`: the user readable name of the signing domain, i.e. the name of the DApp or the protocol.\n - `version`: the current major version of the signing domain.\n NOTE: These parameters cannot be changed except through a xref:learn::upgrading-smart-contracts.adoc[smart\n contract upgrade]."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 52377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52374,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3354:4:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52429,
                  "src": "3340:18:62",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52373,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3340:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52376,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "3374:7:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52429,
                  "src": "3360:21:62",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52375,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3360:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3339:43:62"
            },
            "returnParameters": {
              "id": 52378,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3383:0:62"
            },
            "scope": 52559,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52455,
            "nodeType": "FunctionDefinition",
            "src": "3845:262:62",
            "nodes": [],
            "body": {
              "id": 52454,
              "nodeType": "Block",
              "src": "3907:200:62",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 52445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 52440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 52437,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3929:4:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_EIP712_$52559",
                              "typeString": "contract EIP712"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_EIP712_$52559",
                              "typeString": "contract EIP712"
                            }
                          ],
                          "id": 52436,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3921:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 52435,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3921:7:62",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52438,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3921:13:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 52439,
                        "name": "_cachedThis",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52357,
                        "src": "3938:11:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3921:28:62",
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
                      "id": 52444,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 52441,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "3953:5:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 52442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3959:7:62",
                        "memberName": "chainid",
                        "nodeType": "MemberAccess",
                        "src": "3953:13:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 52443,
                        "name": "_cachedChainId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52355,
                        "src": "3970:14:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3953:31:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3921:63:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 52452,
                    "nodeType": "Block",
                    "src": "4046:55:62",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 52449,
                            "name": "_buildDomainSeparator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52476,
                            "src": "4067:21:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                              "typeString": "function () view returns (bytes32)"
                            }
                          },
                          "id": 52450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4067:23:62",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "functionReturnParameters": 52434,
                        "id": 52451,
                        "nodeType": "Return",
                        "src": "4060:30:62"
                      }
                    ]
                  },
                  "id": 52453,
                  "nodeType": "IfStatement",
                  "src": "3917:184:62",
                  "trueBody": {
                    "id": 52448,
                    "nodeType": "Block",
                    "src": "3986:54:62",
                    "statements": [
                      {
                        "expression": {
                          "id": 52446,
                          "name": "_cachedDomainSeparator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52353,
                          "src": "4007:22:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "functionReturnParameters": 52434,
                        "id": 52447,
                        "nodeType": "Return",
                        "src": "4000:29:62"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 52430,
              "nodeType": "StructuredDocumentation",
              "src": "3765:75:62",
              "text": " @dev Returns the domain separator for the current chain."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_domainSeparatorV4",
            "nameLocation": "3854:18:62",
            "parameters": {
              "id": 52431,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3872:2:62"
            },
            "returnParameters": {
              "id": 52434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52433,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52455,
                  "src": "3898:7:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52432,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3898:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3897:9:62"
            },
            "scope": 52559,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52476,
            "nodeType": "FunctionDefinition",
            "src": "4113:179:62",
            "nodes": [],
            "body": {
              "id": 52475,
              "nodeType": "Block",
              "src": "4177:115:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 52463,
                            "name": "TYPE_HASH",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52351,
                            "src": "4215:9:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 52464,
                            "name": "_hashedName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52359,
                            "src": "4226:11:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 52465,
                            "name": "_hashedVersion",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52361,
                            "src": "4239:14:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "expression": {
                              "id": 52466,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "4255:5:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 52467,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4261:7:62",
                            "memberName": "chainid",
                            "nodeType": "MemberAccess",
                            "src": "4255:13:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 52470,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4278:4:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_EIP712_$52559",
                                  "typeString": "contract EIP712"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_EIP712_$52559",
                                  "typeString": "contract EIP712"
                                }
                              ],
                              "id": 52469,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4270:7:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 52468,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4270:7:62",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 52471,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4270:13:62",
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
                            "id": 52461,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4204:3:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 52462,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4208:6:62",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "4204:10:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 52472,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4204:80:62",
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
                      "id": 52460,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "4194:9:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 52473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4194:91:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 52459,
                  "id": 52474,
                  "nodeType": "Return",
                  "src": "4187:98:62"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_buildDomainSeparator",
            "nameLocation": "4122:21:62",
            "parameters": {
              "id": 52456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4143:2:62"
            },
            "returnParameters": {
              "id": 52459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52458,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52476,
                  "src": "4168:7:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52457,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4168:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4167:9:62"
            },
            "scope": 52559,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 52492,
            "nodeType": "FunctionDefinition",
            "src": "4917:176:62",
            "nodes": [],
            "body": {
              "id": 52491,
              "nodeType": "Block",
              "src": "5003:90:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 52486,
                          "name": "_domainSeparatorV4",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52455,
                          "src": "5053:18:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                            "typeString": "function () view returns (bytes32)"
                          }
                        },
                        "id": 52487,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5053:20:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 52488,
                        "name": "structHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52479,
                        "src": "5075:10:62",
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
                        "id": 52484,
                        "name": "MessageHashUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52633,
                        "src": "5020:16:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_MessageHashUtils_$52633_$",
                          "typeString": "type(library MessageHashUtils)"
                        }
                      },
                      "id": 52485,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5037:15:62",
                      "memberName": "toTypedDataHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 52632,
                      "src": "5020:32:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes32) pure returns (bytes32)"
                      }
                    },
                    "id": 52489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5020:66:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 52483,
                  "id": 52490,
                  "nodeType": "Return",
                  "src": "5013:73:62"
                }
              ]
            },
            "documentation": {
              "id": 52477,
              "nodeType": "StructuredDocumentation",
              "src": "4298:614:62",
              "text": " @dev Given an already https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct[hashed struct], this\n function returns the hash of the fully encoded EIP712 message for this domain.\n This hash can be used together with {ECDSA-recover} to obtain the signer of a message. For example:\n ```solidity\n bytes32 digest = _hashTypedDataV4(keccak256(abi.encode(\n     keccak256(\"Mail(address to,string contents)\"),\n     mailTo,\n     keccak256(bytes(mailContents))\n )));\n address signer = ECDSA.recover(digest, signature);\n ```"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_hashTypedDataV4",
            "nameLocation": "4926:16:62",
            "parameters": {
              "id": 52480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52479,
                  "mutability": "mutable",
                  "name": "structHash",
                  "nameLocation": "4951:10:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52492,
                  "src": "4943:18:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52478,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4943:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4942:20:62"
            },
            "returnParameters": {
              "id": 52483,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52482,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52492,
                  "src": "4994:7:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52481,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4994:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4993:9:62"
            },
            "scope": 52559,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 52534,
            "nodeType": "FunctionDefinition",
            "src": "5144:557:62",
            "nodes": [],
            "body": {
              "id": 52533,
              "nodeType": "Block",
              "src": "5472:229:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "hexValue": "0f",
                        "id": 52511,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "hexString",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5503:7:62",
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
                          "id": 52512,
                          "name": "_EIP712Name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52546,
                          "src": "5533:11:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                            "typeString": "function () view returns (string memory)"
                          }
                        },
                        "id": 52513,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5533:13:62",
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
                          "id": 52514,
                          "name": "_EIP712Version",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52558,
                          "src": "5560:14:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                            "typeString": "function () view returns (string memory)"
                          }
                        },
                        "id": 52515,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5560:16:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "expression": {
                          "id": 52516,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "5590:5:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 52517,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5596:7:62",
                        "memberName": "chainid",
                        "nodeType": "MemberAccess",
                        "src": "5590:13:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 52520,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "5625:4:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_EIP712_$52559",
                              "typeString": "contract EIP712"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_EIP712_$52559",
                              "typeString": "contract EIP712"
                            }
                          ],
                          "id": 52519,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5617:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 52518,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5617:7:62",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52521,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5617:13:62",
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
                            "id": 52524,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5652:1:62",
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
                          "id": 52523,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5644:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 52522,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "5644:7:62",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 52525,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5644:10:62",
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
                            "id": 52529,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5682:1:62",
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
                          "id": 52528,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "5668:13:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (uint256[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 52526,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5672:7:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 52527,
                            "nodeType": "ArrayTypeName",
                            "src": "5672:9:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                              "typeString": "uint256[]"
                            }
                          }
                        },
                        "id": 52530,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5668:16:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      }
                    ],
                    "id": 52531,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5489:205:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_stringliteral_3d725c5ee53025f027da36bea8d3af3b6a3e9d2d1542d47c162631de48e66c1c_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$_t_address_$_t_bytes32_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(literal_string hex\"0f\",string memory,string memory,uint256,address,bytes32,uint256[] memory)"
                    }
                  },
                  "functionReturnParameters": 52510,
                  "id": 52532,
                  "nodeType": "Return",
                  "src": "5482:212:62"
                }
              ]
            },
            "baseFunctions": [
              49223
            ],
            "documentation": {
              "id": 52493,
              "nodeType": "StructuredDocumentation",
              "src": "5099:40:62",
              "text": " @dev See {IERC-5267}."
            },
            "functionSelector": "84b0196e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "eip712Domain",
            "nameLocation": "5153:12:62",
            "parameters": {
              "id": 52494,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5165:2:62"
            },
            "returnParameters": {
              "id": 52510,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52496,
                  "mutability": "mutable",
                  "name": "fields",
                  "nameLocation": "5249:6:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52534,
                  "src": "5242:13:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes1",
                    "typeString": "bytes1"
                  },
                  "typeName": {
                    "id": 52495,
                    "name": "bytes1",
                    "nodeType": "ElementaryTypeName",
                    "src": "5242:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52498,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5283:4:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52534,
                  "src": "5269:18:62",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52497,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5269:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52500,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "5315:7:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52534,
                  "src": "5301:21:62",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52499,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5301:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52502,
                  "mutability": "mutable",
                  "name": "chainId",
                  "nameLocation": "5344:7:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52534,
                  "src": "5336:15:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52501,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5336:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52504,
                  "mutability": "mutable",
                  "name": "verifyingContract",
                  "nameLocation": "5373:17:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52534,
                  "src": "5365:25:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 52503,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5365:7:62",
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
                  "id": 52506,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "5412:4:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52534,
                  "src": "5404:12:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 52505,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5404:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52509,
                  "mutability": "mutable",
                  "name": "extensions",
                  "nameLocation": "5447:10:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 52534,
                  "src": "5430:27:62",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 52507,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5430:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 52508,
                    "nodeType": "ArrayTypeName",
                    "src": "5430:9:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5228:239:62"
            },
            "scope": 52559,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 52546,
            "nodeType": "FunctionDefinition",
            "src": "6021:126:62",
            "nodes": [],
            "body": {
              "id": 52545,
              "nodeType": "Block",
              "src": "6082:65:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 52542,
                        "name": "_nameFallback",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52369,
                        "src": "6126:13:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      ],
                      "expression": {
                        "id": 52540,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52364,
                        "src": "6099:5:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                          "typeString": "ShortString"
                        }
                      },
                      "id": 52541,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6105:20:62",
                      "memberName": "toStringWithFallback",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 51587,
                      "src": "6099:26:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_userDefinedValueType$_ShortString_$51408_$_t_string_storage_ptr_$returns$_t_string_memory_ptr_$attached_to$_t_userDefinedValueType$_ShortString_$51408_$",
                        "typeString": "function (ShortString,string storage pointer) pure returns (string memory)"
                      }
                    },
                    "id": 52543,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6099:41:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 52539,
                  "id": 52544,
                  "nodeType": "Return",
                  "src": "6092:48:62"
                }
              ]
            },
            "documentation": {
              "id": 52535,
              "nodeType": "StructuredDocumentation",
              "src": "5707:256:62",
              "text": " @dev The name parameter for the EIP712 domain.\n NOTE: By default this function reads _name which is an immutable value.\n It only reads from storage if necessary (in case the value is too large to fit in a ShortString)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712Name",
            "nameLocation": "6030:11:62",
            "parameters": {
              "id": 52536,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6041:2:62"
            },
            "returnParameters": {
              "id": 52539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52538,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52546,
                  "src": "6067:13:62",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52537,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6067:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6066:15:62"
            },
            "scope": 52559,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 52558,
            "nodeType": "FunctionDefinition",
            "src": "6473:135:62",
            "nodes": [],
            "body": {
              "id": 52557,
              "nodeType": "Block",
              "src": "6537:71:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 52554,
                        "name": "_versionFallback",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52371,
                        "src": "6584:16:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      ],
                      "expression": {
                        "id": 52552,
                        "name": "_version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52367,
                        "src": "6554:8:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_userDefinedValueType$_ShortString_$51408",
                          "typeString": "ShortString"
                        }
                      },
                      "id": 52553,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6563:20:62",
                      "memberName": "toStringWithFallback",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 51587,
                      "src": "6554:29:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_userDefinedValueType$_ShortString_$51408_$_t_string_storage_ptr_$returns$_t_string_memory_ptr_$attached_to$_t_userDefinedValueType$_ShortString_$51408_$",
                        "typeString": "function (ShortString,string storage pointer) pure returns (string memory)"
                      }
                    },
                    "id": 52555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6554:47:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 52551,
                  "id": 52556,
                  "nodeType": "Return",
                  "src": "6547:54:62"
                }
              ]
            },
            "documentation": {
              "id": 52547,
              "nodeType": "StructuredDocumentation",
              "src": "6153:262:62",
              "text": " @dev The version parameter for the EIP712 domain.\n NOTE: By default this function reads _version which is an immutable value.\n It only reads from storage if necessary (in case the value is too large to fit in a ShortString)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712Version",
            "nameLocation": "6482:14:62",
            "parameters": {
              "id": 52548,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6496:2:62"
            },
            "returnParameters": {
              "id": 52551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52550,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 52558,
                  "src": "6522:13:62",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52549,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6522:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6521:15:62"
            },
            "scope": 52559,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 52343,
              "name": "IERC5267",
              "nameLocations": [
                "1988:8:62"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 49224,
              "src": "1988:8:62"
            },
            "id": 52344,
            "nodeType": "InheritanceSpecifier",
            "src": "1988:8:62"
          }
        ],
        "canonicalName": "EIP712",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 52342,
          "nodeType": "StructuredDocumentation",
          "src": "316:1643:62",
          "text": " @dev https://eips.ethereum.org/EIPS/eip-712[EIP 712] is a standard for hashing and signing of typed structured data.\n The encoding scheme specified in the EIP requires a domain separator and a hash of the typed structured data, whose\n encoding is very generic and therefore its implementation in Solidity is not feasible, thus this contract\n does not implement the encoding itself. Protocols need to implement the type-specific encoding they need in order to\n produce the hash of their typed data using a combination of `abi.encode` and `keccak256`.\n This contract implements the EIP 712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding\n scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA\n ({_hashTypedDataV4}).\n The implementation of the domain separator was designed to be as efficient as possible while still properly updating\n the chain id to protect against replay attacks on an eventual fork of the chain.\n NOTE: This contract implements the version of the encoding known as \"v4\", as implemented by the JSON RPC method\n https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask].\n NOTE: In the upgradeable version of this contract, the cached values will correspond to the address, and the domain\n separator of the implementation contract. This will cause the {_domainSeparatorV4} function to always rebuild the\n separator from the immutable values, which is cheaper than accessing a cached version in cold storage.\n @custom:oz-upgrades-unsafe-allow state-variable-immutable"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          52559,
          49224
        ],
        "name": "EIP712",
        "nameLocation": "1978:6:62",
        "scope": 52560,
        "usedErrors": [
          51416,
          51418
        ],
        "usedEvents": [
          49204
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 62
} as const;