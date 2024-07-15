export const ERC1967Proxy = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "fallback",
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
      "name": "AddressEmptyCode",
      "inputs": [
        {
          "name": "target",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC1967InvalidImplementation",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC1967NonPayable",
      "inputs": []
    },
    {
      "type": "error",
      "name": "FailedInnerCall",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60806040526102de8038038061001481610194565b92833981019060408183031261018f5780516001600160a01b03811680820361018f5760208381015190936001600160401b03821161018f570184601f8201121561018f5780519061006d610068836101cf565b610194565b9582875285838301011161018f57849060005b83811061017b57505060009186010152813b15610163577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b03191682179055604051907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28351156101455750600080848461012c96519101845af4903d1561013c573d61011c610068826101cf565b908152600081943d92013e6101ea565b505b6040516090908161024e8239f35b606092506101ea565b9250505034610154575061012e565b63b398979f60e01b8152600490fd5b60249060405190634c9c8ce360e01b82526004820152fd5b818101830151888201840152869201610080565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176101b957604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116101b957601f01601f191660200190565b9061021157508051156101ff57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580610244575b610222575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561021a56fe608060405273ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e156056573d90f35b3d90fdfea26469706673582212204c54f3366c42055893fc819ac2966d3ebc4ab0a33db68d9f4228da3e3fdb82d664736f6c63430008190033",
    "sourceMap": "599:1116:39:-:0;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;599:1116:39;;;;;;;;;;;;;;-1:-1:-1;;;;;599:1116:39;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;;;-1:-1:-1;599:1116:39;;;;;;;;-1:-1:-1;599:1116:39;;;;;2263:29:40;;:34;2259:119;;1327:66;;;-1:-1:-1;;;;;;1327:66:40;;;;;599:1116:39;;;2922:27:40;-1:-1:-1;;2922:27:40;599:1116:39;;2964:15:40;:11;;4255:25:55;-1:-1:-1;4255:25:55;;;4297:55;4255:25;;599:1116:39;;4255:25:55;;;;599:1116:39;;;;;;;;;:::i;:::-;;;;-1:-1:-1;599:1116:39;;;;;;4297:55:55;:::i;:::-;;2960:148:40;599:1116:39;;;;;;;;;;;;-1:-1:-1;4297:55:55;:::i;2960:148:40:-;6648:9;;;;;6644:70;;2960:148;;;6644:70;-1:-1:-1;;;6684:19:40;;;;;2259:119;599:1116:39;;;;2320:47:40;;;;;;;;;599:1116:39;2320:47:40;599:1116:39;;;;;;;;;;;;;;;;;;;-1:-1:-1;599:1116:39;;;;;;;;;-1:-1:-1;;599:1116:39;;;-1:-1:-1;;;;;599:1116:39;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;599:1116:39;;;;;;-1:-1:-1;;599:1116:39;;;;:::o;4625:582:55:-;;4797:8;;-1:-1:-1;599:1116:39;;5874:21:55;:17;;6046:142;;;;;;5870:383;599:1116:39;;-1:-1:-1;;;6225:17:55;;;;;4793:408;599:1116:39;;5045:22:55;:49;;;4793:408;5041:119;;5173:17;;:::o;5041:119::-;599:1116:39;;-1:-1:-1;;;5121:24:55;;-1:-1:-1;;;;;599:1116:39;;;5121:24:55;;;599:1116:39;;;5121:24:55;5045:49;5071:18;;;:23;5045:49;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405273ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e156056573d90f35b3d90fdfea26469706673582212204c54f3366c42055893fc819ac2966d3ebc4ab0a33db68d9f4228da3e3fdb82d664736f6c63430008190033",
    "sourceMap": "599:1116:39:-:0;;;1327:66:40;;;;-1:-1:-1;1019:819:41;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidImplementation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC1967NonPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"}],\"devdoc\":{\"details\":\"This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an implementation address that can be changed. This address is stored in storage in the location specified by https://eips.ethereum.org/EIPS/eip-1967[EIP1967], so that it doesn't conflict with the storage layout of the implementation behind the proxy.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"ERC1967InvalidImplementation(address)\":[{\"details\":\"The `implementation` of the proxy is invalid.\"}],\"ERC1967NonPayable()\":[{\"details\":\"An upgrade function sees `msg.value > 0` that may be lost.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}]},\"events\":{\"Upgraded(address)\":{\"details\":\"Emitted when the implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes the upgradeable proxy with an initial implementation specified by `implementation`. If `_data` is nonempty, it's used as data in a delegate call to `implementation`. This will typically be an encoded function call, and allows initializing the storage of the proxy like a Solidity constructor. Requirements: - If `data` is empty, `msg.value` must be zero.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol\":\"ERC1967Proxy\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol\":{\"keccak256\":\"0xbfb6695731de677140fbf76c772ab08c4233a122fb51ac28ac120fc49bbbc4ec\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://68f8fded7cc318efa15874b7c6a983fe17a4a955d72d240353a9a4ca1e1b824c\",\"dweb:/ipfs/QmdcmBL9Qo4Tk3Dby4wFYabGyot9JNeLPxpSXZUgUm92BV\"]},\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a\",\"dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE\"]},\"node_modules/@openzeppelin/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]}},\"version\":1}",
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
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
            }
          ],
          "stateMutability": "payable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "AddressEmptyCode"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC1967InvalidImplementation"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ERC1967NonPayable"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FailedInnerCall"
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
          "stateMutability": "payable",
          "type": "fallback"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "details": "Initializes the upgradeable proxy with an initial implementation specified by `implementation`. If `_data` is nonempty, it's used as data in a delegate call to `implementation`. This will typically be an encoded function call, and allows initializing the storage of the proxy like a Solidity constructor. Requirements: - If `data` is empty, `msg.value` must be zero."
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
        "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol": "ERC1967Proxy"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol": {
        "keccak256": "0xbfb6695731de677140fbf76c772ab08c4233a122fb51ac28ac120fc49bbbc4ec",
        "urls": [
          "bzz-raw://68f8fded7cc318efa15874b7c6a983fe17a4a955d72d240353a9a4ca1e1b824c",
          "dweb:/ipfs/QmdcmBL9Qo4Tk3Dby4wFYabGyot9JNeLPxpSXZUgUm92BV"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol": {
        "keccak256": "0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65",
        "urls": [
          "bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a",
          "dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/Proxy.sol": {
        "keccak256": "0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd",
        "urls": [
          "bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac",
          "dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol": {
        "keccak256": "0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c",
        "urls": [
          "bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa",
          "dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Address.sol": {
        "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
        "urls": [
          "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
          "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol",
    "id": 49485,
    "exportedSymbols": {
      "ERC1967Proxy": [
        49484
      ],
      "ERC1967Utils": [
        49787
      ],
      "Proxy": [
        49823
      ]
    },
    "nodeType": "SourceUnit",
    "src": "114:1602:39",
    "nodes": [
      {
        "id": 49448,
        "nodeType": "PragmaDirective",
        "src": "114:24:39",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49450,
        "nodeType": "ImportDirective",
        "src": "140:35:39",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/Proxy.sol",
        "file": "../Proxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49485,
        "sourceUnit": 49824,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49449,
              "name": "Proxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49823,
              "src": "148:5:39",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49452,
        "nodeType": "ImportDirective",
        "src": "176:48:39",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol",
        "file": "./ERC1967Utils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49485,
        "sourceUnit": 49788,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49451,
              "name": "ERC1967Utils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49787,
              "src": "184:12:39",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49484,
        "nodeType": "ContractDefinition",
        "src": "599:1116:39",
        "nodes": [
          {
            "id": 49471,
            "nodeType": "FunctionDefinition",
            "src": "1080:133:39",
            "nodes": [],
            "body": {
              "id": 49470,
              "nodeType": "Block",
              "src": "1144:69:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49466,
                        "name": "implementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49458,
                        "src": "1184:14:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 49467,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49460,
                        "src": "1200:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 49463,
                        "name": "ERC1967Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49787,
                        "src": "1154:12:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC1967Utils_$49787_$",
                          "typeString": "type(library ERC1967Utils)"
                        }
                      },
                      "id": 49465,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1167:16:39",
                      "memberName": "upgradeToAndCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 49606,
                      "src": "1154:29:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,bytes memory)"
                      }
                    },
                    "id": 49468,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1154:52:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49469,
                  "nodeType": "ExpressionStatement",
                  "src": "1154:52:39"
                }
              ]
            },
            "documentation": {
              "id": 49456,
              "nodeType": "StructuredDocumentation",
              "src": "636:439:39",
              "text": " @dev Initializes the upgradeable proxy with an initial implementation specified by `implementation`.\n If `_data` is nonempty, it's used as data in a delegate call to `implementation`. This will typically be an\n encoded function call, and allows initializing the storage of the proxy like a Solidity constructor.\n Requirements:\n - If `data` is empty, `msg.value` must be zero."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 49461,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49458,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "1100:14:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 49471,
                  "src": "1092:22:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1092:7:39",
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
                  "id": 49460,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "1129:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 49471,
                  "src": "1116:18:39",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 49459,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1116:5:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1091:44:39"
            },
            "returnParameters": {
              "id": 49462,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1144:0:39"
            },
            "scope": 49484,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 49483,
            "nodeType": "FunctionDefinition",
            "src": "1581:132:39",
            "nodes": [],
            "body": {
              "id": 49482,
              "nodeType": "Block",
              "src": "1657:56:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 49478,
                        "name": "ERC1967Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49787,
                        "src": "1674:12:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC1967Utils_$49787_$",
                          "typeString": "type(library ERC1967Utils)"
                        }
                      },
                      "id": 49479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1687:17:39",
                      "memberName": "getImplementation",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 49545,
                      "src": "1674:30:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 49480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1674:32:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 49477,
                  "id": 49481,
                  "nodeType": "Return",
                  "src": "1667:39:39"
                }
              ]
            },
            "baseFunctions": [
              49804
            ],
            "documentation": {
              "id": 49472,
              "nodeType": "StructuredDocumentation",
              "src": "1219:357:39",
              "text": " @dev Returns the current implementation address.\n TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using\n the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\n `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_implementation",
            "nameLocation": "1590:15:39",
            "overrides": {
              "id": 49474,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1630:8:39"
            },
            "parameters": {
              "id": 49473,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1605:2:39"
            },
            "returnParameters": {
              "id": 49477,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49476,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49483,
                  "src": "1648:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49475,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1648:7:39",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1647:9:39"
            },
            "scope": 49484,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 49454,
              "name": "Proxy",
              "nameLocations": [
                "624:5:39"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 49823,
              "src": "624:5:39"
            },
            "id": 49455,
            "nodeType": "InheritanceSpecifier",
            "src": "624:5:39"
          }
        ],
        "canonicalName": "ERC1967Proxy",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 49453,
          "nodeType": "StructuredDocumentation",
          "src": "226:372:39",
          "text": " @dev This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an\n implementation address that can be changed. This address is stored in storage in the location specified by\n https://eips.ethereum.org/EIPS/eip-1967[EIP1967], so that it doesn't conflict with the storage layout of the\n implementation behind the proxy."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          49484,
          49823
        ],
        "name": "ERC1967Proxy",
        "nameLocation": "608:12:39",
        "scope": 49485,
        "usedErrors": [
          49519,
          49532,
          51064,
          51067
        ],
        "usedEvents": [
          49498
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 39
} as const;