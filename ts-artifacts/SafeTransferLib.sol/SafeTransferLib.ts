export const SafeTransferLib = {
  "abi": [
    {
      "type": "error",
      "name": "ApproveFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ETHTransferFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Permit2AmountOverflow",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Permit2Failed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TransferFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TransferFromFailed",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220a4a16f5311781aba2f4b7b3c470ca864efc1ab8badb3734ffafba00173aeba7764736f6c63430008190033",
    "sourceMap": "701:25671:76:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x600080fdfea2646970667358221220a4a16f5311781aba2f4b7b3c470ca864efc1ab8badb3734ffafba00173aeba7764736f6c63430008190033",
    "sourceMap": "701:25671:76:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ApproveFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ETHTransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Permit2AmountOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Permit2Failed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFromFailed\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/utils/SafeTransferLib.sol)Modified from Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)Permit2 operations from (https://github.com/Uniswap/permit2/blob/main/src/libraries/Permit2Lib.sol)\",\"details\":\"Note: - For ETH transfers, please use `forceSafeTransferETH` for DoS protection. - For ERC20s, this implementation won't check that a token has code,   responsibility is delegated to the caller.\",\"errors\":{\"ApproveFailed()\":[{\"details\":\"The ERC20 `approve` has failed.\"}],\"ETHTransferFailed()\":[{\"details\":\"The ETH transfer has failed.\"}],\"Permit2AmountOverflow()\":[{\"details\":\"The Permit2 amount must be less than `2**160 - 1`.\"}],\"Permit2Failed()\":[{\"details\":\"The Permit2 operation has failed.\"}],\"TransferFailed()\":[{\"details\":\"The ERC20 `transfer` has failed.\"}],\"TransferFromFailed()\":[{\"details\":\"The ERC20 `transferFrom` has failed.\"}]},\"kind\":\"dev\",\"methods\":{},\"stateVariables\":{\"DAI_DOMAIN_SEPARATOR\":{\"details\":\"The unique EIP-712 domain domain separator for the DAI token contract.\"},\"GAS_STIPEND_NO_GRIEF\":{\"details\":\"Suggested gas stipend for contract receiving ETH to perform a few storage reads and writes, but low enough to prevent griefing.\"},\"GAS_STIPEND_NO_STORAGE_WRITES\":{\"details\":\"Suggested gas stipend for contract receiving ETH that disallows any storage writes.\"},\"PERMIT2\":{\"details\":\"The canonical Permit2 address. [Github](https://github.com/Uniswap/permit2) [Etherscan](https://etherscan.io/address/0x000000000022D473030F116dDEE9F6B43aC78BA3)\"},\"WETH9\":{\"details\":\"The address for the WETH9 contract on Ethereum mainnet.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe ETH and ERC20 transfer library that gracefully handles missing return values.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/utils/SafeTransferLib.sol\":\"SafeTransferLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xa2cde6f683e83848ef2939c2cc72a94627e64d2877079522ddee82d4c8c21666\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://768ae374ca043fcae00246186aa558357c5949b527a05cf5001cd40458ab5dd1\",\"dweb:/ipfs/QmfM3hgxUTrMS21a1Pm3TKHc7mB8rQkCq8DPHGbwGdXPpr\"]}},\"version\":1}",
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
          "name": "ApproveFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ETHTransferFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Permit2AmountOverflow"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Permit2Failed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TransferFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TransferFromFailed"
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
        "node_modules/solady/src/utils/SafeTransferLib.sol": "SafeTransferLib"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/solady/src/utils/SafeTransferLib.sol": {
        "keccak256": "0xa2cde6f683e83848ef2939c2cc72a94627e64d2877079522ddee82d4c8c21666",
        "urls": [
          "bzz-raw://768ae374ca043fcae00246186aa558357c5949b527a05cf5001cd40458ab5dd1",
          "dweb:/ipfs/QmfM3hgxUTrMS21a1Pm3TKHc7mB8rQkCq8DPHGbwGdXPpr"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/utils/SafeTransferLib.sol",
    "id": 58877,
    "exportedSymbols": {
      "SafeTransferLib": [
        58876
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:26341:76",
    "nodes": [
      {
        "id": 58544,
        "nodeType": "PragmaDirective",
        "src": "32:23:76",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 58876,
        "nodeType": "ContractDefinition",
        "src": "701:25671:76",
        "nodes": [
          {
            "id": 58548,
            "nodeType": "ErrorDefinition",
            "src": "1056:26:76",
            "nodes": [],
            "documentation": {
              "id": 58546,
              "nodeType": "StructuredDocumentation",
              "src": "1014:37:76",
              "text": "@dev The ETH transfer has failed."
            },
            "errorSelector": "b12d13eb",
            "name": "ETHTransferFailed",
            "nameLocation": "1062:17:76",
            "parameters": {
              "id": 58547,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1079:2:76"
            }
          },
          {
            "id": 58551,
            "nodeType": "ErrorDefinition",
            "src": "1138:27:76",
            "nodes": [],
            "documentation": {
              "id": 58549,
              "nodeType": "StructuredDocumentation",
              "src": "1088:45:76",
              "text": "@dev The ERC20 `transferFrom` has failed."
            },
            "errorSelector": "7939f424",
            "name": "TransferFromFailed",
            "nameLocation": "1144:18:76",
            "parameters": {
              "id": 58550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1162:2:76"
            }
          },
          {
            "id": 58554,
            "nodeType": "ErrorDefinition",
            "src": "1217:23:76",
            "nodes": [],
            "documentation": {
              "id": 58552,
              "nodeType": "StructuredDocumentation",
              "src": "1171:41:76",
              "text": "@dev The ERC20 `transfer` has failed."
            },
            "errorSelector": "90b8ec18",
            "name": "TransferFailed",
            "nameLocation": "1223:14:76",
            "parameters": {
              "id": 58553,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1237:2:76"
            }
          },
          {
            "id": 58557,
            "nodeType": "ErrorDefinition",
            "src": "1291:22:76",
            "nodes": [],
            "documentation": {
              "id": 58555,
              "nodeType": "StructuredDocumentation",
              "src": "1246:40:76",
              "text": "@dev The ERC20 `approve` has failed."
            },
            "errorSelector": "3e3f8f73",
            "name": "ApproveFailed",
            "nameLocation": "1297:13:76",
            "parameters": {
              "id": 58556,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1310:2:76"
            }
          },
          {
            "id": 58560,
            "nodeType": "ErrorDefinition",
            "src": "1366:22:76",
            "nodes": [],
            "documentation": {
              "id": 58558,
              "nodeType": "StructuredDocumentation",
              "src": "1319:42:76",
              "text": "@dev The Permit2 operation has failed."
            },
            "errorSelector": "6b836e6b",
            "name": "Permit2Failed",
            "nameLocation": "1372:13:76",
            "parameters": {
              "id": 58559,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1385:2:76"
            }
          },
          {
            "id": 58563,
            "nodeType": "ErrorDefinition",
            "src": "1458:30:76",
            "nodes": [],
            "documentation": {
              "id": 58561,
              "nodeType": "StructuredDocumentation",
              "src": "1394:59:76",
              "text": "@dev The Permit2 amount must be less than `2**160 - 1`."
            },
            "errorSelector": "8757f0fd",
            "name": "Permit2AmountOverflow",
            "nameLocation": "1464:21:76",
            "parameters": {
              "id": 58562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1485:2:76"
            }
          },
          {
            "id": 58567,
            "nodeType": "VariableDeclaration",
            "src": "1874:62:76",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 58564,
              "nodeType": "StructuredDocumentation",
              "src": "1777:92:76",
              "text": "@dev Suggested gas stipend for contract receiving ETH that disallows any storage writes."
            },
            "mutability": "constant",
            "name": "GAS_STIPEND_NO_STORAGE_WRITES",
            "nameLocation": "1900:29:76",
            "scope": 58876,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 58565,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1874:7:76",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "32333030",
              "id": 58566,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1932:4:76",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2300_by_1",
                "typeString": "int_const 2300"
              },
              "value": "2300"
            },
            "visibility": "internal"
          },
          {
            "id": 58571,
            "nodeType": "VariableDeclaration",
            "src": "2092:55:76",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 58568,
              "nodeType": "StructuredDocumentation",
              "src": "1943:144:76",
              "text": "@dev Suggested gas stipend for contract receiving ETH to perform a few\n storage reads and writes, but low enough to prevent griefing."
            },
            "mutability": "constant",
            "name": "GAS_STIPEND_NO_GRIEF",
            "nameLocation": "2118:20:76",
            "scope": 58876,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 58569,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2092:7:76",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313030303030",
              "id": 58570,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2141:6:76",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000_by_1",
                "typeString": "int_const 100000"
              },
              "value": "100000"
            },
            "visibility": "internal"
          },
          {
            "id": 58575,
            "nodeType": "VariableDeclaration",
            "src": "2238:123:76",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 58572,
              "nodeType": "StructuredDocumentation",
              "src": "2154:79:76",
              "text": "@dev The unique EIP-712 domain domain separator for the DAI token contract."
            },
            "mutability": "constant",
            "name": "DAI_DOMAIN_SEPARATOR",
            "nameLocation": "2264:20:76",
            "scope": 58876,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 58573,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2238:7:76",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307864626238636634326531656362303238626533663364626339323265316438373862393633663431316463333838636564353031363031633630663763366637",
              "id": 58574,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2295:66:76",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_99383044164297460920199564169379472118763403594000230800569066591923778078455_by_1",
                "typeString": "int_const 9938...(69 digits omitted)...8455"
              },
              "value": "0xdbb8cf42e1ecb028be3f3dbc922e1d878b963f411dc388ced501601c60f7c6f7"
            },
            "visibility": "internal"
          },
          {
            "id": 58579,
            "nodeType": "VariableDeclaration",
            "src": "2437:76:76",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 58576,
              "nodeType": "StructuredDocumentation",
              "src": "2368:64:76",
              "text": "@dev The address for the WETH9 contract on Ethereum mainnet."
            },
            "mutability": "constant",
            "name": "WETH9",
            "nameLocation": "2463:5:76",
            "scope": 58876,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 58577,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2437:7:76",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307843303261614133396232323346453844304130653543344632376541443930383343373536436332",
              "id": 58578,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2471:42:76",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
            },
            "visibility": "internal"
          },
          {
            "id": 58583,
            "nodeType": "VariableDeclaration",
            "src": "2710:78:76",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 58580,
              "nodeType": "StructuredDocumentation",
              "src": "2520:185:76",
              "text": "@dev The canonical Permit2 address.\n [Github](https://github.com/Uniswap/permit2)\n [Etherscan](https://etherscan.io/address/0x000000000022D473030F116dDEE9F6B43aC78BA3)"
            },
            "mutability": "constant",
            "name": "PERMIT2",
            "nameLocation": "2736:7:76",
            "scope": 58876,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 58581,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2710:7:76",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307830303030303030303030323244343733303330463131366444454539463642343361433738424133",
              "id": 58582,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2746:42:76",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0x000000000022D473030F116dDEE9F6B43aC78BA3"
            },
            "visibility": "internal"
          },
          {
            "id": 58593,
            "nodeType": "FunctionDefinition",
            "src": "4031:342:76",
            "nodes": [],
            "body": {
              "id": 58592,
              "nodeType": "Block",
              "src": "4093:280:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4155:212:76",
                    "nodeType": "YulBlock",
                    "src": "4155:212:76",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "4240:117:76",
                          "nodeType": "YulBlock",
                          "src": "4240:117:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4265:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "4265:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4271:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "4271:10:76",
                                    "type": "",
                                    "value": "0xb12d13eb"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "4258:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "4258:6:76"
                                },
                                "nativeSrc": "4258:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "4258:24:76"
                              },
                              "nativeSrc": "4258:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "4258:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4332:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "4332:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4338:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "4338:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "4325:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "4325:6:76"
                                },
                                "nativeSrc": "4325:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "4325:18:76"
                              },
                              "nativeSrc": "4325:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "4325:18:76"
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
                                    "nativeSrc": "4184:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "4184:3:76"
                                  },
                                  "nativeSrc": "4184:5:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4184:5:76"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "4191:2:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "4191:2:76"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "4195:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "4195:6:76"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "4203:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "4203:8:76"
                                  },
                                  "nativeSrc": "4203:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4203:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4215:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "4215:4:76",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "4221:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "4221:8:76"
                                  },
                                  "nativeSrc": "4221:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4221:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4233:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "4233:4:76",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "4179:4:76",
                                "nodeType": "YulIdentifier",
                                "src": "4179:4:76"
                              },
                              "nativeSrc": "4179:59:76",
                              "nodeType": "YulFunctionCall",
                              "src": "4179:59:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "4172:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "4172:6:76"
                          },
                          "nativeSrc": "4172:67:76",
                          "nodeType": "YulFunctionCall",
                          "src": "4172:67:76"
                        },
                        "nativeSrc": "4169:188:76",
                        "nodeType": "YulIf",
                        "src": "4169:188:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58588,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4195:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58586,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4191:2:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58591,
                  "nodeType": "InlineAssembly",
                  "src": "4146:221:76"
                }
              ]
            },
            "documentation": {
              "id": 58584,
              "nodeType": "StructuredDocumentation",
              "src": "3981:45:76",
              "text": "@dev Sends `amount` (in wei) ETH to `to`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferETH",
            "nameLocation": "4040:15:76",
            "parameters": {
              "id": 58589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58586,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4064:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58593,
                  "src": "4056:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58585,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4056:7:76",
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
                  "id": 58588,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4076:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58593,
                  "src": "4068:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58587,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4068:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4055:28:76"
            },
            "returnParameters": {
              "id": 58590,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4093:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58601,
            "nodeType": "FunctionDefinition",
            "src": "4443:406:76",
            "nodes": [],
            "body": {
              "id": 58600,
              "nodeType": "Block",
              "src": "4492:357:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4554:289:76",
                    "nodeType": "YulBlock",
                    "src": "4554:289:76",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "4716:117:76",
                          "nodeType": "YulBlock",
                          "src": "4716:117:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4741:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "4741:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4747:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "4747:10:76",
                                    "type": "",
                                    "value": "0xb12d13eb"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "4734:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "4734:6:76"
                                },
                                "nativeSrc": "4734:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "4734:24:76"
                              },
                              "nativeSrc": "4734:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "4734:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4808:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "4808:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4814:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "4814:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "4801:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "4801:6:76"
                                },
                                "nativeSrc": "4801:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "4801:18:76"
                              },
                              "nativeSrc": "4801:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "4801:18:76"
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
                                    "nativeSrc": "4653:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "4653:3:76"
                                  },
                                  "nativeSrc": "4653:5:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4653:5:76"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "4660:2:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "4660:2:76"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "selfbalance",
                                    "nativeSrc": "4664:11:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "4664:11:76"
                                  },
                                  "nativeSrc": "4664:13:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4664:13:76"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "4679:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "4679:8:76"
                                  },
                                  "nativeSrc": "4679:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4679:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4691:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "4691:4:76",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "4697:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "4697:8:76"
                                  },
                                  "nativeSrc": "4697:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4697:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4709:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "4709:4:76",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "4648:4:76",
                                "nodeType": "YulIdentifier",
                                "src": "4648:4:76"
                              },
                              "nativeSrc": "4648:66:76",
                              "nodeType": "YulFunctionCall",
                              "src": "4648:66:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "4641:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "4641:6:76"
                          },
                          "nativeSrc": "4641:74:76",
                          "nodeType": "YulFunctionCall",
                          "src": "4641:74:76"
                        },
                        "nativeSrc": "4638:195:76",
                        "nodeType": "YulIf",
                        "src": "4638:195:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58596,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4660:2:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58599,
                  "nodeType": "InlineAssembly",
                  "src": "4545:298:76"
                }
              ]
            },
            "documentation": {
              "id": 58594,
              "nodeType": "StructuredDocumentation",
              "src": "4379:59:76",
              "text": "@dev Sends all the ETH in the current contract to `to`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferAllETH",
            "nameLocation": "4452:18:76",
            "parameters": {
              "id": 58597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58596,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4479:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58601,
                  "src": "4471:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58595,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4471:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4470:12:76"
            },
            "returnParameters": {
              "id": 58598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4492:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58613,
            "nodeType": "FunctionDefinition",
            "src": "4932:731:76",
            "nodes": [],
            "body": {
              "id": 58612,
              "nodeType": "Block",
              "src": "5019:644:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "5081:576:76",
                    "nodeType": "YulBlock",
                    "src": "5081:576:76",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "5124:117:76",
                          "nodeType": "YulBlock",
                          "src": "5124:117:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5149:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "5149:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5155:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "5155:10:76",
                                    "type": "",
                                    "value": "0xb12d13eb"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "5142:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5142:6:76"
                                },
                                "nativeSrc": "5142:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "5142:24:76"
                              },
                              "nativeSrc": "5142:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "5142:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5216:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "5216:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5222:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "5222:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "5209:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5209:6:76"
                                },
                                "nativeSrc": "5209:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "5209:18:76"
                              },
                              "nativeSrc": "5209:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "5209:18:76"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "selfbalance",
                                "nativeSrc": "5101:11:76",
                                "nodeType": "YulIdentifier",
                                "src": "5101:11:76"
                              },
                              "nativeSrc": "5101:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "5101:13:76"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "5116:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "5116:6:76"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nativeSrc": "5098:2:76",
                            "nodeType": "YulIdentifier",
                            "src": "5098:2:76"
                          },
                          "nativeSrc": "5098:25:76",
                          "nodeType": "YulFunctionCall",
                          "src": "5098:25:76"
                        },
                        "nativeSrc": "5095:146:76",
                        "nodeType": "YulIf",
                        "src": "5095:146:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "5330:317:76",
                          "nodeType": "YulBlock",
                          "src": "5330:317:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5355:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "5355:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "to",
                                    "nativeSrc": "5361:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "5361:2:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "5348:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5348:6:76"
                                },
                                "nativeSrc": "5348:16:76",
                                "nodeType": "YulFunctionCall",
                                "src": "5348:16:76"
                              },
                              "nativeSrc": "5348:16:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "5348:16:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5428:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "5428:4:76",
                                    "type": "",
                                    "value": "0x0b"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5434:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "5434:4:76",
                                    "type": "",
                                    "value": "0x73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "5420:7:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5420:7:76"
                                },
                                "nativeSrc": "5420:19:76",
                                "nodeType": "YulFunctionCall",
                                "src": "5420:19:76"
                              },
                              "nativeSrc": "5420:19:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "5420:19:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5484:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "5484:4:76",
                                    "type": "",
                                    "value": "0x20"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5490:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "5490:4:76",
                                    "type": "",
                                    "value": "0xff"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "5476:7:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5476:7:76"
                                },
                                "nativeSrc": "5476:19:76",
                                "nodeType": "YulFunctionCall",
                                "src": "5476:19:76"
                              },
                              "nativeSrc": "5476:19:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "5476:19:76"
                            },
                            {
                              "body": {
                                "nativeSrc": "5576:34:76",
                                "nodeType": "YulBlock",
                                "src": "5576:34:76",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "5585:8:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "5585:8:76"
                                          },
                                          "nativeSrc": "5585:10:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "5585:10:76"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "5597:8:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "5597:8:76"
                                          },
                                          "nativeSrc": "5597:10:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "5597:10:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "5578:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "5578:6:76"
                                      },
                                      "nativeSrc": "5578:30:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5578:30:76"
                                    },
                                    "nativeSrc": "5578:30:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5578:30:76"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "amount",
                                        "nativeSrc": "5555:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "5555:6:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5563:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "5563:4:76",
                                        "type": "",
                                        "value": "0x0b"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5569:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "5569:4:76",
                                        "type": "",
                                        "value": "0x16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create",
                                      "nativeSrc": "5548:6:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "5548:6:76"
                                    },
                                    "nativeSrc": "5548:26:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5548:26:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "5541:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5541:6:76"
                                },
                                "nativeSrc": "5541:34:76",
                                "nodeType": "YulFunctionCall",
                                "src": "5541:34:76"
                              },
                              "nativeSrc": "5538:72:76",
                              "nodeType": "YulIf",
                              "src": "5538:72:76"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "gasStipend",
                                  "nativeSrc": "5269:10:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5269:10:76"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "5281:2:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5281:2:76"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "5285:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5285:6:76"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "5293:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "5293:8:76"
                                  },
                                  "nativeSrc": "5293:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5293:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5305:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "5305:4:76",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "5311:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "5311:8:76"
                                  },
                                  "nativeSrc": "5311:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5311:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5323:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "5323:4:76",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "5264:4:76",
                                "nodeType": "YulIdentifier",
                                "src": "5264:4:76"
                              },
                              "nativeSrc": "5264:64:76",
                              "nodeType": "YulFunctionCall",
                              "src": "5264:64:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "5257:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "5257:6:76"
                          },
                          "nativeSrc": "5257:72:76",
                          "nodeType": "YulFunctionCall",
                          "src": "5257:72:76"
                        },
                        "nativeSrc": "5254:393:76",
                        "nodeType": "YulIf",
                        "src": "5254:393:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58606,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5116:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58606,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5285:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58606,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5555:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58608,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5269:10:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58604,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5281:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58604,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5361:2:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58611,
                  "nodeType": "InlineAssembly",
                  "src": "5072:585:76"
                }
              ]
            },
            "documentation": {
              "id": 58602,
              "nodeType": "StructuredDocumentation",
              "src": "4855:72:76",
              "text": "@dev Force sends `amount` (in wei) ETH to `to`, with a `gasStipend`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceSafeTransferETH",
            "nameLocation": "4941:20:76",
            "parameters": {
              "id": 58609,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58604,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4970:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58613,
                  "src": "4962:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58603,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4962:7:76",
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
                  "id": 58606,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4982:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58613,
                  "src": "4974:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58605,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4974:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58608,
                  "mutability": "mutable",
                  "name": "gasStipend",
                  "nameLocation": "4998:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58613,
                  "src": "4990:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58607,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4990:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4961:48:76"
            },
            "returnParameters": {
              "id": 58610,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5019:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58623,
            "nodeType": "FunctionDefinition",
            "src": "5760:573:76",
            "nodes": [],
            "body": {
              "id": 58622,
              "nodeType": "Block",
              "src": "5834:499:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "5896:431:76",
                    "nodeType": "YulBlock",
                    "src": "5896:431:76",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "5993:324:76",
                          "nodeType": "YulBlock",
                          "src": "5993:324:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6018:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6018:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "to",
                                    "nativeSrc": "6024:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "6024:2:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "6011:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6011:6:76"
                                },
                                "nativeSrc": "6011:16:76",
                                "nodeType": "YulFunctionCall",
                                "src": "6011:16:76"
                              },
                              "nativeSrc": "6011:16:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "6011:16:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6091:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6091:4:76",
                                    "type": "",
                                    "value": "0x0b"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6097:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6097:4:76",
                                    "type": "",
                                    "value": "0x73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "6083:7:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6083:7:76"
                                },
                                "nativeSrc": "6083:19:76",
                                "nodeType": "YulFunctionCall",
                                "src": "6083:19:76"
                              },
                              "nativeSrc": "6083:19:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "6083:19:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6147:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6147:4:76",
                                    "type": "",
                                    "value": "0x20"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6153:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6153:4:76",
                                    "type": "",
                                    "value": "0xff"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "6139:7:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6139:7:76"
                                },
                                "nativeSrc": "6139:19:76",
                                "nodeType": "YulFunctionCall",
                                "src": "6139:19:76"
                              },
                              "nativeSrc": "6139:19:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "6139:19:76"
                            },
                            {
                              "body": {
                                "nativeSrc": "6246:34:76",
                                "nodeType": "YulBlock",
                                "src": "6246:34:76",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "6255:8:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "6255:8:76"
                                          },
                                          "nativeSrc": "6255:10:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "6255:10:76"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "6267:8:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "6267:8:76"
                                          },
                                          "nativeSrc": "6267:10:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "6267:10:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "6248:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "6248:6:76"
                                      },
                                      "nativeSrc": "6248:30:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "6248:30:76"
                                    },
                                    "nativeSrc": "6248:30:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6248:30:76"
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
                                          "name": "selfbalance",
                                          "nativeSrc": "6218:11:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "6218:11:76"
                                        },
                                        "nativeSrc": "6218:13:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "6218:13:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6233:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "6233:4:76",
                                        "type": "",
                                        "value": "0x0b"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6239:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "6239:4:76",
                                        "type": "",
                                        "value": "0x16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create",
                                      "nativeSrc": "6211:6:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "6211:6:76"
                                    },
                                    "nativeSrc": "6211:33:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6211:33:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "6204:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6204:6:76"
                                },
                                "nativeSrc": "6204:41:76",
                                "nodeType": "YulFunctionCall",
                                "src": "6204:41:76"
                              },
                              "nativeSrc": "6201:79:76",
                              "nodeType": "YulIf",
                              "src": "6201:79:76"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "gasStipend",
                                  "nativeSrc": "5925:10:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5925:10:76"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "5937:2:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "5937:2:76"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "selfbalance",
                                    "nativeSrc": "5941:11:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "5941:11:76"
                                  },
                                  "nativeSrc": "5941:13:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5941:13:76"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "5956:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "5956:8:76"
                                  },
                                  "nativeSrc": "5956:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5956:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5968:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "5968:4:76",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "5974:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "5974:8:76"
                                  },
                                  "nativeSrc": "5974:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5974:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5986:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "5986:4:76",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "5920:4:76",
                                "nodeType": "YulIdentifier",
                                "src": "5920:4:76"
                              },
                              "nativeSrc": "5920:71:76",
                              "nodeType": "YulFunctionCall",
                              "src": "5920:71:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "5913:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "5913:6:76"
                          },
                          "nativeSrc": "5913:79:76",
                          "nodeType": "YulFunctionCall",
                          "src": "5913:79:76"
                        },
                        "nativeSrc": "5910:407:76",
                        "nodeType": "YulIf",
                        "src": "5910:407:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58618,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5925:10:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58616,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5937:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58616,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6024:2:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58621,
                  "nodeType": "InlineAssembly",
                  "src": "5887:440:76"
                }
              ]
            },
            "documentation": {
              "id": 58614,
              "nodeType": "StructuredDocumentation",
              "src": "5669:86:76",
              "text": "@dev Force sends all the ETH in the current contract to `to`, with a `gasStipend`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceSafeTransferAllETH",
            "nameLocation": "5769:23:76",
            "parameters": {
              "id": 58619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58616,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5801:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58623,
                  "src": "5793:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58615,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5793:7:76",
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
                  "id": 58618,
                  "mutability": "mutable",
                  "name": "gasStipend",
                  "nameLocation": "5813:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58623,
                  "src": "5805:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58617,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5805:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5792:32:76"
            },
            "returnParameters": {
              "id": 58620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5834:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58633,
            "nodeType": "FunctionDefinition",
            "src": "6424:721:76",
            "nodes": [],
            "body": {
              "id": 58632,
              "nodeType": "Block",
              "src": "6491:654:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "6553:586:76",
                    "nodeType": "YulBlock",
                    "src": "6553:586:76",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "6596:117:76",
                          "nodeType": "YulBlock",
                          "src": "6596:117:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6621:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6621:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6627:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6627:10:76",
                                    "type": "",
                                    "value": "0xb12d13eb"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "6614:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6614:6:76"
                                },
                                "nativeSrc": "6614:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "6614:24:76"
                              },
                              "nativeSrc": "6614:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "6614:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6688:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6688:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6694:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6694:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "6681:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6681:6:76"
                                },
                                "nativeSrc": "6681:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "6681:18:76"
                              },
                              "nativeSrc": "6681:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "6681:18:76"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "selfbalance",
                                "nativeSrc": "6573:11:76",
                                "nodeType": "YulIdentifier",
                                "src": "6573:11:76"
                              },
                              "nativeSrc": "6573:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "6573:13:76"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "6588:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "6588:6:76"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nativeSrc": "6570:2:76",
                            "nodeType": "YulIdentifier",
                            "src": "6570:2:76"
                          },
                          "nativeSrc": "6570:25:76",
                          "nodeType": "YulFunctionCall",
                          "src": "6570:25:76"
                        },
                        "nativeSrc": "6567:146:76",
                        "nodeType": "YulIf",
                        "src": "6567:146:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "6812:317:76",
                          "nodeType": "YulBlock",
                          "src": "6812:317:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6837:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6837:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "to",
                                    "nativeSrc": "6843:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "6843:2:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "6830:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6830:6:76"
                                },
                                "nativeSrc": "6830:16:76",
                                "nodeType": "YulFunctionCall",
                                "src": "6830:16:76"
                              },
                              "nativeSrc": "6830:16:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "6830:16:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6910:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6910:4:76",
                                    "type": "",
                                    "value": "0x0b"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6916:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6916:4:76",
                                    "type": "",
                                    "value": "0x73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "6902:7:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6902:7:76"
                                },
                                "nativeSrc": "6902:19:76",
                                "nodeType": "YulFunctionCall",
                                "src": "6902:19:76"
                              },
                              "nativeSrc": "6902:19:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "6902:19:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6966:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6966:4:76",
                                    "type": "",
                                    "value": "0x20"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6972:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "6972:4:76",
                                    "type": "",
                                    "value": "0xff"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "6958:7:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6958:7:76"
                                },
                                "nativeSrc": "6958:19:76",
                                "nodeType": "YulFunctionCall",
                                "src": "6958:19:76"
                              },
                              "nativeSrc": "6958:19:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "6958:19:76"
                            },
                            {
                              "body": {
                                "nativeSrc": "7058:34:76",
                                "nodeType": "YulBlock",
                                "src": "7058:34:76",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "7067:8:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "7067:8:76"
                                          },
                                          "nativeSrc": "7067:10:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "7067:10:76"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "7079:8:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "7079:8:76"
                                          },
                                          "nativeSrc": "7079:10:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "7079:10:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "7060:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "7060:6:76"
                                      },
                                      "nativeSrc": "7060:30:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "7060:30:76"
                                    },
                                    "nativeSrc": "7060:30:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7060:30:76"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "amount",
                                        "nativeSrc": "7037:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "7037:6:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7045:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "7045:4:76",
                                        "type": "",
                                        "value": "0x0b"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7051:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "7051:4:76",
                                        "type": "",
                                        "value": "0x16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create",
                                      "nativeSrc": "7030:6:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "7030:6:76"
                                    },
                                    "nativeSrc": "7030:26:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "7030:26:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "7023:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "7023:6:76"
                                },
                                "nativeSrc": "7023:34:76",
                                "nodeType": "YulFunctionCall",
                                "src": "7023:34:76"
                              },
                              "nativeSrc": "7020:72:76",
                              "nodeType": "YulIf",
                              "src": "7020:72:76"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "GAS_STIPEND_NO_GRIEF",
                                  "nativeSrc": "6741:20:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6741:20:76"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "6763:2:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6763:2:76"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "6767:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "6767:6:76"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "6775:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "6775:8:76"
                                  },
                                  "nativeSrc": "6775:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6775:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6787:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "6787:4:76",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "6793:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "6793:8:76"
                                  },
                                  "nativeSrc": "6793:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6793:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6805:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "6805:4:76",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "6736:4:76",
                                "nodeType": "YulIdentifier",
                                "src": "6736:4:76"
                              },
                              "nativeSrc": "6736:74:76",
                              "nodeType": "YulFunctionCall",
                              "src": "6736:74:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "6729:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "6729:6:76"
                          },
                          "nativeSrc": "6729:82:76",
                          "nodeType": "YulFunctionCall",
                          "src": "6729:82:76"
                        },
                        "nativeSrc": "6726:403:76",
                        "nodeType": "YulIf",
                        "src": "6726:403:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58571,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6741:20:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58628,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6588:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58628,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6767:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58628,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7037:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58626,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6763:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58626,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6843:2:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58631,
                  "nodeType": "InlineAssembly",
                  "src": "6544:595:76"
                }
              ]
            },
            "documentation": {
              "id": 58624,
              "nodeType": "StructuredDocumentation",
              "src": "6339:80:76",
              "text": "@dev Force sends `amount` (in wei) ETH to `to`, with `GAS_STIPEND_NO_GRIEF`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceSafeTransferETH",
            "nameLocation": "6433:20:76",
            "parameters": {
              "id": 58629,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58626,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6462:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58633,
                  "src": "6454:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58625,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6454:7:76",
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
                  "id": 58628,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "6474:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58633,
                  "src": "6466:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58627,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6466:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6453:28:76"
            },
            "returnParameters": {
              "id": 58630,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6491:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58641,
            "nodeType": "FunctionDefinition",
            "src": "7250:606:76",
            "nodes": [],
            "body": {
              "id": 58640,
              "nodeType": "Block",
              "src": "7304:552:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "7366:484:76",
                    "nodeType": "YulBlock",
                    "src": "7366:484:76",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "7516:324:76",
                          "nodeType": "YulBlock",
                          "src": "7516:324:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7541:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "7541:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "to",
                                    "nativeSrc": "7547:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "7547:2:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "7534:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "7534:6:76"
                                },
                                "nativeSrc": "7534:16:76",
                                "nodeType": "YulFunctionCall",
                                "src": "7534:16:76"
                              },
                              "nativeSrc": "7534:16:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "7534:16:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7614:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "7614:4:76",
                                    "type": "",
                                    "value": "0x0b"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7620:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "7620:4:76",
                                    "type": "",
                                    "value": "0x73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "7606:7:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "7606:7:76"
                                },
                                "nativeSrc": "7606:19:76",
                                "nodeType": "YulFunctionCall",
                                "src": "7606:19:76"
                              },
                              "nativeSrc": "7606:19:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "7606:19:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7670:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "7670:4:76",
                                    "type": "",
                                    "value": "0x20"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7676:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "7676:4:76",
                                    "type": "",
                                    "value": "0xff"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "7662:7:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "7662:7:76"
                                },
                                "nativeSrc": "7662:19:76",
                                "nodeType": "YulFunctionCall",
                                "src": "7662:19:76"
                              },
                              "nativeSrc": "7662:19:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "7662:19:76"
                            },
                            {
                              "body": {
                                "nativeSrc": "7769:34:76",
                                "nodeType": "YulBlock",
                                "src": "7769:34:76",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "7778:8:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "7778:8:76"
                                          },
                                          "nativeSrc": "7778:10:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "7778:10:76"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "7790:8:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "7790:8:76"
                                          },
                                          "nativeSrc": "7790:10:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "7790:10:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "7771:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "7771:6:76"
                                      },
                                      "nativeSrc": "7771:30:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "7771:30:76"
                                    },
                                    "nativeSrc": "7771:30:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7771:30:76"
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
                                          "name": "selfbalance",
                                          "nativeSrc": "7741:11:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "7741:11:76"
                                        },
                                        "nativeSrc": "7741:13:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "7741:13:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7756:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "7756:4:76",
                                        "type": "",
                                        "value": "0x0b"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7762:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "7762:4:76",
                                        "type": "",
                                        "value": "0x16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create",
                                      "nativeSrc": "7734:6:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "7734:6:76"
                                    },
                                    "nativeSrc": "7734:33:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "7734:33:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "7727:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "7727:6:76"
                                },
                                "nativeSrc": "7727:41:76",
                                "nodeType": "YulFunctionCall",
                                "src": "7727:41:76"
                              },
                              "nativeSrc": "7724:79:76",
                              "nodeType": "YulIf",
                              "src": "7724:79:76"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "GAS_STIPEND_NO_GRIEF",
                                  "nativeSrc": "7438:20:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "7438:20:76"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "7460:2:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "7460:2:76"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "selfbalance",
                                    "nativeSrc": "7464:11:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "7464:11:76"
                                  },
                                  "nativeSrc": "7464:13:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "7464:13:76"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "7479:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "7479:8:76"
                                  },
                                  "nativeSrc": "7479:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "7479:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "7491:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "7491:4:76",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "7497:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "7497:8:76"
                                  },
                                  "nativeSrc": "7497:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "7497:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "7509:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "7509:4:76",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "7433:4:76",
                                "nodeType": "YulIdentifier",
                                "src": "7433:4:76"
                              },
                              "nativeSrc": "7433:81:76",
                              "nodeType": "YulFunctionCall",
                              "src": "7433:81:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "7426:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "7426:6:76"
                          },
                          "nativeSrc": "7426:89:76",
                          "nodeType": "YulFunctionCall",
                          "src": "7426:89:76"
                        },
                        "nativeSrc": "7423:417:76",
                        "nodeType": "YulIf",
                        "src": "7423:417:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58571,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7438:20:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58636,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7460:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58636,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7547:2:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58639,
                  "nodeType": "InlineAssembly",
                  "src": "7357:493:76"
                }
              ]
            },
            "documentation": {
              "id": 58634,
              "nodeType": "StructuredDocumentation",
              "src": "7151:94:76",
              "text": "@dev Force sends all the ETH in the current contract to `to`, with `GAS_STIPEND_NO_GRIEF`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceSafeTransferAllETH",
            "nameLocation": "7259:23:76",
            "parameters": {
              "id": 58637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58636,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "7291:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58641,
                  "src": "7283:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58635,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7283:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7282:12:76"
            },
            "returnParameters": {
              "id": 58638,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7304:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58655,
            "nodeType": "FunctionDefinition",
            "src": "7933:295:76",
            "nodes": [],
            "body": {
              "id": 58654,
              "nodeType": "Block",
              "src": "8061:167:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "8123:99:76",
                    "nodeType": "YulBlock",
                    "src": "8123:99:76",
                    "statements": [
                      {
                        "nativeSrc": "8137:75:76",
                        "nodeType": "YulAssignment",
                        "src": "8137:75:76",
                        "value": {
                          "arguments": [
                            {
                              "name": "gasStipend",
                              "nativeSrc": "8153:10:76",
                              "nodeType": "YulIdentifier",
                              "src": "8153:10:76"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "8165:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "8165:2:76"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "8169:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "8169:6:76"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "8177:8:76",
                                "nodeType": "YulIdentifier",
                                "src": "8177:8:76"
                              },
                              "nativeSrc": "8177:10:76",
                              "nodeType": "YulFunctionCall",
                              "src": "8177:10:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8189:4:76",
                              "nodeType": "YulLiteral",
                              "src": "8189:4:76",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "8195:8:76",
                                "nodeType": "YulIdentifier",
                                "src": "8195:8:76"
                              },
                              "nativeSrc": "8195:10:76",
                              "nodeType": "YulFunctionCall",
                              "src": "8195:10:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8207:4:76",
                              "nodeType": "YulLiteral",
                              "src": "8207:4:76",
                              "type": "",
                              "value": "0x00"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "8148:4:76",
                            "nodeType": "YulIdentifier",
                            "src": "8148:4:76"
                          },
                          "nativeSrc": "8148:64:76",
                          "nodeType": "YulFunctionCall",
                          "src": "8148:64:76"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nativeSrc": "8137:7:76",
                            "nodeType": "YulIdentifier",
                            "src": "8137:7:76"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58646,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8169:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58648,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8153:10:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58651,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8137:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58644,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8165:2:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58653,
                  "nodeType": "InlineAssembly",
                  "src": "8114:108:76"
                }
              ]
            },
            "documentation": {
              "id": 58642,
              "nodeType": "StructuredDocumentation",
              "src": "7862:66:76",
              "text": "@dev Sends `amount` (in wei) ETH to `to`, with a `gasStipend`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "trySafeTransferETH",
            "nameLocation": "7942:18:76",
            "parameters": {
              "id": 58649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58644,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "7969:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58655,
                  "src": "7961:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58643,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7961:7:76",
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
                  "id": 58646,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "7981:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58655,
                  "src": "7973:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58645,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7973:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58648,
                  "mutability": "mutable",
                  "name": "gasStipend",
                  "nameLocation": "7997:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58655,
                  "src": "7989:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58647,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7989:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7960:48:76"
            },
            "returnParameters": {
              "id": 58652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58651,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "8048:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58655,
                  "src": "8043:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 58650,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8043:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8042:14:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58667,
            "nodeType": "FunctionDefinition",
            "src": "8319:289:76",
            "nodes": [],
            "body": {
              "id": 58666,
              "nodeType": "Block",
              "src": "8434:174:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "8496:106:76",
                    "nodeType": "YulBlock",
                    "src": "8496:106:76",
                    "statements": [
                      {
                        "nativeSrc": "8510:82:76",
                        "nodeType": "YulAssignment",
                        "src": "8510:82:76",
                        "value": {
                          "arguments": [
                            {
                              "name": "gasStipend",
                              "nativeSrc": "8526:10:76",
                              "nodeType": "YulIdentifier",
                              "src": "8526:10:76"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "8538:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "8538:2:76"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "selfbalance",
                                "nativeSrc": "8542:11:76",
                                "nodeType": "YulIdentifier",
                                "src": "8542:11:76"
                              },
                              "nativeSrc": "8542:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "8542:13:76"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "8557:8:76",
                                "nodeType": "YulIdentifier",
                                "src": "8557:8:76"
                              },
                              "nativeSrc": "8557:10:76",
                              "nodeType": "YulFunctionCall",
                              "src": "8557:10:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8569:4:76",
                              "nodeType": "YulLiteral",
                              "src": "8569:4:76",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "8575:8:76",
                                "nodeType": "YulIdentifier",
                                "src": "8575:8:76"
                              },
                              "nativeSrc": "8575:10:76",
                              "nodeType": "YulFunctionCall",
                              "src": "8575:10:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8587:4:76",
                              "nodeType": "YulLiteral",
                              "src": "8587:4:76",
                              "type": "",
                              "value": "0x00"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "8521:4:76",
                            "nodeType": "YulIdentifier",
                            "src": "8521:4:76"
                          },
                          "nativeSrc": "8521:71:76",
                          "nodeType": "YulFunctionCall",
                          "src": "8521:71:76"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nativeSrc": "8510:7:76",
                            "nodeType": "YulIdentifier",
                            "src": "8510:7:76"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58660,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8526:10:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58663,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8510:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58658,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8538:2:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58665,
                  "nodeType": "InlineAssembly",
                  "src": "8487:115:76"
                }
              ]
            },
            "documentation": {
              "id": 58656,
              "nodeType": "StructuredDocumentation",
              "src": "8234:80:76",
              "text": "@dev Sends all the ETH in the current contract to `to`, with a `gasStipend`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "trySafeTransferAllETH",
            "nameLocation": "8328:21:76",
            "parameters": {
              "id": 58661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58658,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "8358:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58667,
                  "src": "8350:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8350:7:76",
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
                  "id": 58660,
                  "mutability": "mutable",
                  "name": "gasStipend",
                  "nameLocation": "8370:10:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58667,
                  "src": "8362:18:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58659,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8362:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8349:32:76"
            },
            "returnParameters": {
              "id": 58664,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58663,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "8421:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58667,
                  "src": "8416:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 58662,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8416:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8415:14:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58681,
            "nodeType": "FunctionDefinition",
            "src": "9109:1139:76",
            "nodes": [],
            "body": {
              "id": 58680,
              "nodeType": "Block",
              "src": "9201:1047:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "9263:979:76",
                    "nodeType": "YulBlock",
                    "src": "9263:979:76",
                    "statements": [
                      {
                        "nativeSrc": "9277:20:76",
                        "nodeType": "YulVariableDeclaration",
                        "src": "9277:20:76",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9292:4:76",
                              "nodeType": "YulLiteral",
                              "src": "9292:4:76",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "9286:5:76",
                            "nodeType": "YulIdentifier",
                            "src": "9286:5:76"
                          },
                          "nativeSrc": "9286:11:76",
                          "nodeType": "YulFunctionCall",
                          "src": "9286:11:76"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "9281:1:76",
                            "nodeType": "YulTypedName",
                            "src": "9281:1:76",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9351:4:76",
                              "nodeType": "YulLiteral",
                              "src": "9351:4:76",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "9357:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "9357:6:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9344:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "9344:6:76"
                          },
                          "nativeSrc": "9344:20:76",
                          "nodeType": "YulFunctionCall",
                          "src": "9344:20:76"
                        },
                        "nativeSrc": "9344:20:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "9344:20:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9416:4:76",
                              "nodeType": "YulLiteral",
                              "src": "9416:4:76",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "9422:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "9422:2:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9409:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "9409:6:76"
                          },
                          "nativeSrc": "9409:16:76",
                          "nodeType": "YulFunctionCall",
                          "src": "9409:16:76"
                        },
                        "nativeSrc": "9409:16:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "9409:16:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9473:4:76",
                              "nodeType": "YulLiteral",
                              "src": "9473:4:76",
                              "type": "",
                              "value": "0x2c"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "9483:2:76",
                                  "nodeType": "YulLiteral",
                                  "src": "9483:2:76",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from",
                                  "nativeSrc": "9487:4:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "9487:4:76"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "9479:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "9479:3:76"
                              },
                              "nativeSrc": "9479:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "9479:13:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9466:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "9466:6:76"
                          },
                          "nativeSrc": "9466:27:76",
                          "nodeType": "YulFunctionCall",
                          "src": "9466:27:76"
                        },
                        "nativeSrc": "9466:27:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "9466:27:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9543:4:76",
                              "nodeType": "YulLiteral",
                              "src": "9543:4:76",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9549:34:76",
                              "nodeType": "YulLiteral",
                              "src": "9549:34:76",
                              "type": "",
                              "value": "0x23b872dd000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9536:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "9536:6:76"
                          },
                          "nativeSrc": "9536:48:76",
                          "nodeType": "YulFunctionCall",
                          "src": "9536:48:76"
                        },
                        "nativeSrc": "9536:48:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "9536:48:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "9988:118:76",
                          "nodeType": "YulBlock",
                          "src": "9988:118:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10013:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "10013:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10019:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "10019:10:76",
                                    "type": "",
                                    "value": "0x7939f424"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "10006:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "10006:6:76"
                                },
                                "nativeSrc": "10006:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "10006:24:76"
                              },
                              "nativeSrc": "10006:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "10006:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10081:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "10081:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10087:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "10087:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "10074:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "10074:6:76"
                                },
                                "nativeSrc": "10074:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "10074:18:76"
                              },
                              "nativeSrc": "10074:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "10074:18:76"
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
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nativeSrc": "9826:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "9826:4:76",
                                              "type": "",
                                              "value": "0x00"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "9820:5:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "9820:5:76"
                                          },
                                          "nativeSrc": "9820:11:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "9820:11:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "9833:1:76",
                                          "nodeType": "YulLiteral",
                                          "src": "9833:1:76",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nativeSrc": "9817:2:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "9817:2:76"
                                      },
                                      "nativeSrc": "9817:18:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "9817:18:76"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nativeSrc": "9844:14:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "9844:14:76"
                                          },
                                          "nativeSrc": "9844:16:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "9844:16:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nativeSrc": "9837:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "9837:6:76"
                                      },
                                      "nativeSrc": "9837:24:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "9837:24:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "or",
                                    "nativeSrc": "9814:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "9814:2:76"
                                  },
                                  "nativeSrc": "9814:48:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9814:48:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "9915:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "9915:3:76"
                                      },
                                      "nativeSrc": "9915:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "9915:5:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "9922:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "9922:5:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "9929:1:76",
                                      "nodeType": "YulLiteral",
                                      "src": "9929:1:76",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "9932:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "9932:4:76",
                                      "type": "",
                                      "value": "0x1c"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "9938:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "9938:4:76",
                                      "type": "",
                                      "value": "0x64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "9944:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "9944:4:76",
                                      "type": "",
                                      "value": "0x00"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "9950:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "9950:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "call",
                                    "nativeSrc": "9910:4:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "9910:4:76"
                                  },
                                  "nativeSrc": "9910:45:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9910:45:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "9729:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "9729:3:76"
                              },
                              "nativeSrc": "9729:244:76",
                              "nodeType": "YulFunctionCall",
                              "src": "9729:244:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "9705:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "9705:6:76"
                          },
                          "nativeSrc": "9705:282:76",
                          "nodeType": "YulFunctionCall",
                          "src": "9705:282:76"
                        },
                        "nativeSrc": "9702:404:76",
                        "nodeType": "YulIf",
                        "src": "9702:404:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10126:4:76",
                              "nodeType": "YulLiteral",
                              "src": "10126:4:76",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10132:1:76",
                              "nodeType": "YulLiteral",
                              "src": "10132:1:76",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10119:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "10119:6:76"
                          },
                          "nativeSrc": "10119:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "10119:15:76"
                        },
                        "nativeSrc": "10119:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "10119:15:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10188:4:76",
                              "nodeType": "YulLiteral",
                              "src": "10188:4:76",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "m",
                              "nativeSrc": "10194:1:76",
                              "nodeType": "YulIdentifier",
                              "src": "10194:1:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10181:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "10181:6:76"
                          },
                          "nativeSrc": "10181:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "10181:15:76"
                        },
                        "nativeSrc": "10181:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "10181:15:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58676,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9357:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58672,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9487:4:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58674,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9422:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58670,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9922:5:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58679,
                  "nodeType": "InlineAssembly",
                  "src": "9254:988:76"
                }
              ]
            },
            "documentation": {
              "id": 58668,
              "nodeType": "StructuredDocumentation",
              "src": "8897:207:76",
              "text": "@dev Sends `amount` of ERC20 `token` from `from` to `to`.\n Reverts upon failure.\n The `from` account must have at least `amount` approved for\n the current contract to manage."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "9118:16:76",
            "parameters": {
              "id": 58677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58670,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "9143:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58681,
                  "src": "9135:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58669,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9135:7:76",
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
                  "id": 58672,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "9158:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58681,
                  "src": "9150:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58671,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9150:7:76",
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
                  "id": 58674,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "9172:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58681,
                  "src": "9164:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58673,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9164:7:76",
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
                  "id": 58676,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "9184:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58681,
                  "src": "9176:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9176:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9134:57:76"
            },
            "returnParameters": {
              "id": 58678,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9201:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58697,
            "nodeType": "FunctionDefinition",
            "src": "10428:991:76",
            "nodes": [],
            "body": {
              "id": 58696,
              "nodeType": "Block",
              "src": "10566:853:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "10628:785:76",
                    "nodeType": "YulBlock",
                    "src": "10628:785:76",
                    "statements": [
                      {
                        "nativeSrc": "10642:20:76",
                        "nodeType": "YulVariableDeclaration",
                        "src": "10642:20:76",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10657:4:76",
                              "nodeType": "YulLiteral",
                              "src": "10657:4:76",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "10651:5:76",
                            "nodeType": "YulIdentifier",
                            "src": "10651:5:76"
                          },
                          "nativeSrc": "10651:11:76",
                          "nodeType": "YulFunctionCall",
                          "src": "10651:11:76"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "10646:1:76",
                            "nodeType": "YulTypedName",
                            "src": "10646:1:76",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10716:4:76",
                              "nodeType": "YulLiteral",
                              "src": "10716:4:76",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "10722:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "10722:6:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10709:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "10709:6:76"
                          },
                          "nativeSrc": "10709:20:76",
                          "nodeType": "YulFunctionCall",
                          "src": "10709:20:76"
                        },
                        "nativeSrc": "10709:20:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "10709:20:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10781:4:76",
                              "nodeType": "YulLiteral",
                              "src": "10781:4:76",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "10787:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "10787:2:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10774:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "10774:6:76"
                          },
                          "nativeSrc": "10774:16:76",
                          "nodeType": "YulFunctionCall",
                          "src": "10774:16:76"
                        },
                        "nativeSrc": "10774:16:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "10774:16:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10838:4:76",
                              "nodeType": "YulLiteral",
                              "src": "10838:4:76",
                              "type": "",
                              "value": "0x2c"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "10848:2:76",
                                  "nodeType": "YulLiteral",
                                  "src": "10848:2:76",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from",
                                  "nativeSrc": "10852:4:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "10852:4:76"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "10844:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "10844:3:76"
                              },
                              "nativeSrc": "10844:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "10844:13:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10831:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "10831:6:76"
                          },
                          "nativeSrc": "10831:27:76",
                          "nodeType": "YulFunctionCall",
                          "src": "10831:27:76"
                        },
                        "nativeSrc": "10831:27:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "10831:27:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10908:4:76",
                              "nodeType": "YulLiteral",
                              "src": "10908:4:76",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10914:34:76",
                              "nodeType": "YulLiteral",
                              "src": "10914:34:76",
                              "type": "",
                              "value": "0x23b872dd000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10901:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "10901:6:76"
                          },
                          "nativeSrc": "10901:48:76",
                          "nodeType": "YulFunctionCall",
                          "src": "10901:48:76"
                        },
                        "nativeSrc": "10901:48:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "10901:48:76"
                      },
                      {
                        "nativeSrc": "11006:271:76",
                        "nodeType": "YulAssignment",
                        "src": "11006:271:76",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "11130:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "11130:4:76",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "11124:5:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "11124:5:76"
                                      },
                                      "nativeSrc": "11124:11:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "11124:11:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "11137:1:76",
                                      "nodeType": "YulLiteral",
                                      "src": "11137:1:76",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "11121:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "11121:2:76"
                                  },
                                  "nativeSrc": "11121:18:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "11121:18:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "11148:14:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "11148:14:76"
                                      },
                                      "nativeSrc": "11148:16:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "11148:16:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nativeSrc": "11141:6:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "11141:6:76"
                                  },
                                  "nativeSrc": "11141:24:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "11141:24:76"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "11118:2:76",
                                "nodeType": "YulIdentifier",
                                "src": "11118:2:76"
                              },
                              "nativeSrc": "11118:48:76",
                              "nodeType": "YulFunctionCall",
                              "src": "11118:48:76"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nativeSrc": "11219:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "11219:3:76"
                                  },
                                  "nativeSrc": "11219:5:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "11219:5:76"
                                },
                                {
                                  "name": "token",
                                  "nativeSrc": "11226:5:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "11226:5:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "11233:1:76",
                                  "nodeType": "YulLiteral",
                                  "src": "11233:1:76",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "11236:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "11236:4:76",
                                  "type": "",
                                  "value": "0x1c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "11242:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "11242:4:76",
                                  "type": "",
                                  "value": "0x64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "11248:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "11248:4:76",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "11254:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "11254:4:76",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "11214:4:76",
                                "nodeType": "YulIdentifier",
                                "src": "11214:4:76"
                              },
                              "nativeSrc": "11214:45:76",
                              "nodeType": "YulFunctionCall",
                              "src": "11214:45:76"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "11033:3:76",
                            "nodeType": "YulIdentifier",
                            "src": "11033:3:76"
                          },
                          "nativeSrc": "11033:244:76",
                          "nodeType": "YulFunctionCall",
                          "src": "11033:244:76"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nativeSrc": "11006:7:76",
                            "nodeType": "YulIdentifier",
                            "src": "11006:7:76"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11297:4:76",
                              "nodeType": "YulLiteral",
                              "src": "11297:4:76",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11303:1:76",
                              "nodeType": "YulLiteral",
                              "src": "11303:1:76",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11290:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "11290:6:76"
                          },
                          "nativeSrc": "11290:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "11290:15:76"
                        },
                        "nativeSrc": "11290:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "11290:15:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11359:4:76",
                              "nodeType": "YulLiteral",
                              "src": "11359:4:76",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "m",
                              "nativeSrc": "11365:1:76",
                              "nodeType": "YulIdentifier",
                              "src": "11365:1:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11352:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "11352:6:76"
                          },
                          "nativeSrc": "11352:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "11352:15:76"
                        },
                        "nativeSrc": "11352:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "11352:15:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58690,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10722:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58686,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10852:4:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58693,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11006:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58688,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10787:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58684,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11226:5:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58695,
                  "nodeType": "InlineAssembly",
                  "src": "10619:794:76"
                }
              ]
            },
            "documentation": {
              "id": 58682,
              "nodeType": "StructuredDocumentation",
              "src": "10254:169:76",
              "text": "@dev Sends `amount` of ERC20 `token` from `from` to `to`.\n The `from` account must have at least `amount` approved for the current contract to manage."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "trySafeTransferFrom",
            "nameLocation": "10437:19:76",
            "parameters": {
              "id": 58691,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58684,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "10465:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58697,
                  "src": "10457:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58683,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10457:7:76",
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
                  "id": 58686,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "10480:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58697,
                  "src": "10472:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58685,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10472:7:76",
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
                  "id": 58688,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "10494:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58697,
                  "src": "10486:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58687,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10486:7:76",
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
                  "id": 58690,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "10506:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58697,
                  "src": "10498:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58689,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10498:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10456:57:76"
            },
            "returnParameters": {
              "id": 58694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58693,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "10553:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58697,
                  "src": "10548:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 58692,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10548:4:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10547:14:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58711,
            "nodeType": "FunctionDefinition",
            "src": "11627:1723:76",
            "nodes": [],
            "body": {
              "id": 58710,
              "nodeType": "Block",
              "src": "11751:1599:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "11813:1531:76",
                    "nodeType": "YulBlock",
                    "src": "11813:1531:76",
                    "statements": [
                      {
                        "nativeSrc": "11827:20:76",
                        "nodeType": "YulVariableDeclaration",
                        "src": "11827:20:76",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11842:4:76",
                              "nodeType": "YulLiteral",
                              "src": "11842:4:76",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "11836:5:76",
                            "nodeType": "YulIdentifier",
                            "src": "11836:5:76"
                          },
                          "nativeSrc": "11836:11:76",
                          "nodeType": "YulFunctionCall",
                          "src": "11836:11:76"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "11831:1:76",
                            "nodeType": "YulTypedName",
                            "src": "11831:1:76",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11901:4:76",
                              "nodeType": "YulLiteral",
                              "src": "11901:4:76",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "11907:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "11907:2:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11894:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "11894:6:76"
                          },
                          "nativeSrc": "11894:16:76",
                          "nodeType": "YulFunctionCall",
                          "src": "11894:16:76"
                        },
                        "nativeSrc": "11894:16:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "11894:16:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11958:4:76",
                              "nodeType": "YulLiteral",
                              "src": "11958:4:76",
                              "type": "",
                              "value": "0x2c"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "11968:2:76",
                                  "nodeType": "YulLiteral",
                                  "src": "11968:2:76",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from",
                                  "nativeSrc": "11972:4:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "11972:4:76"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "11964:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "11964:3:76"
                              },
                              "nativeSrc": "11964:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "11964:13:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11951:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "11951:6:76"
                          },
                          "nativeSrc": "11951:27:76",
                          "nodeType": "YulFunctionCall",
                          "src": "11951:27:76"
                        },
                        "nativeSrc": "11951:27:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "11951:27:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "12028:4:76",
                              "nodeType": "YulLiteral",
                              "src": "12028:4:76",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12034:34:76",
                              "nodeType": "YulLiteral",
                              "src": "12034:34:76",
                              "type": "",
                              "value": "0x70a08231000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "12021:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "12021:6:76"
                          },
                          "nativeSrc": "12021:48:76",
                          "nodeType": "YulFunctionCall",
                          "src": "12021:48:76"
                        },
                        "nativeSrc": "12021:48:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "12021:48:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "12436:118:76",
                          "nodeType": "YulBlock",
                          "src": "12436:118:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "12461:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "12461:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "12467:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "12467:10:76",
                                    "type": "",
                                    "value": "0x7939f424"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "12454:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "12454:6:76"
                                },
                                "nativeSrc": "12454:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "12454:24:76"
                              },
                              "nativeSrc": "12454:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "12454:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "12529:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "12529:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "12535:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "12535:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "12522:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "12522:6:76"
                                },
                                "nativeSrc": "12522:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "12522:18:76"
                              },
                              "nativeSrc": "12522:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "12522:18:76"
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
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "12279:14:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "12279:14:76"
                                      },
                                      "nativeSrc": "12279:16:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "12279:16:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12297:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "12297:4:76",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "12276:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "12276:2:76"
                                  },
                                  "nativeSrc": "12276:26:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "12276:26:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "12366:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "12366:3:76"
                                      },
                                      "nativeSrc": "12366:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "12366:5:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "12373:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "12373:5:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12380:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "12380:4:76",
                                      "type": "",
                                      "value": "0x1c"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12386:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "12386:4:76",
                                      "type": "",
                                      "value": "0x24"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12392:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "12392:4:76",
                                      "type": "",
                                      "value": "0x60"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12398:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "12398:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "staticcall",
                                    "nativeSrc": "12355:10:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "12355:10:76"
                                  },
                                  "nativeSrc": "12355:48:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "12355:48:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "12191:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "12191:3:76"
                              },
                              "nativeSrc": "12191:230:76",
                              "nodeType": "YulFunctionCall",
                              "src": "12191:230:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "12167:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "12167:6:76"
                          },
                          "nativeSrc": "12167:268:76",
                          "nodeType": "YulFunctionCall",
                          "src": "12167:268:76"
                        },
                        "nativeSrc": "12164:390:76",
                        "nodeType": "YulIf",
                        "src": "12164:390:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "12574:4:76",
                              "nodeType": "YulLiteral",
                              "src": "12574:4:76",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12580:10:76",
                              "nodeType": "YulLiteral",
                              "src": "12580:10:76",
                              "type": "",
                              "value": "0x23b872dd"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "12567:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "12567:6:76"
                          },
                          "nativeSrc": "12567:24:76",
                          "nodeType": "YulFunctionCall",
                          "src": "12567:24:76"
                        },
                        "nativeSrc": "12567:24:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "12567:24:76"
                      },
                      {
                        "nativeSrc": "12648:21:76",
                        "nodeType": "YulAssignment",
                        "src": "12648:21:76",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "12664:4:76",
                              "nodeType": "YulLiteral",
                              "src": "12664:4:76",
                              "type": "",
                              "value": "0x60"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "12658:5:76",
                            "nodeType": "YulIdentifier",
                            "src": "12658:5:76"
                          },
                          "nativeSrc": "12658:11:76",
                          "nodeType": "YulFunctionCall",
                          "src": "12658:11:76"
                        },
                        "variableNames": [
                          {
                            "name": "amount",
                            "nativeSrc": "12648:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "12648:6:76"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "13090:118:76",
                          "nodeType": "YulBlock",
                          "src": "13090:118:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "13115:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "13115:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "13121:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "13121:10:76",
                                    "type": "",
                                    "value": "0x7939f424"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "13108:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "13108:6:76"
                                },
                                "nativeSrc": "13108:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "13108:24:76"
                              },
                              "nativeSrc": "13108:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "13108:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "13183:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "13183:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "13189:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "13189:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "13176:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "13176:6:76"
                                },
                                "nativeSrc": "13176:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "13176:18:76"
                              },
                              "nativeSrc": "13176:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "13176:18:76"
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
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nativeSrc": "12928:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "12928:4:76",
                                              "type": "",
                                              "value": "0x00"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "12922:5:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "12922:5:76"
                                          },
                                          "nativeSrc": "12922:11:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "12922:11:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "12935:1:76",
                                          "nodeType": "YulLiteral",
                                          "src": "12935:1:76",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nativeSrc": "12919:2:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "12919:2:76"
                                      },
                                      "nativeSrc": "12919:18:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "12919:18:76"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nativeSrc": "12946:14:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "12946:14:76"
                                          },
                                          "nativeSrc": "12946:16:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "12946:16:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nativeSrc": "12939:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "12939:6:76"
                                      },
                                      "nativeSrc": "12939:24:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "12939:24:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "or",
                                    "nativeSrc": "12916:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "12916:2:76"
                                  },
                                  "nativeSrc": "12916:48:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "12916:48:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "13017:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "13017:3:76"
                                      },
                                      "nativeSrc": "13017:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "13017:5:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "13024:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "13024:5:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "13031:1:76",
                                      "nodeType": "YulLiteral",
                                      "src": "13031:1:76",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "13034:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "13034:4:76",
                                      "type": "",
                                      "value": "0x1c"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "13040:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "13040:4:76",
                                      "type": "",
                                      "value": "0x64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "13046:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "13046:4:76",
                                      "type": "",
                                      "value": "0x00"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "13052:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "13052:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "call",
                                    "nativeSrc": "13012:4:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "13012:4:76"
                                  },
                                  "nativeSrc": "13012:45:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "13012:45:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "12831:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "12831:3:76"
                              },
                              "nativeSrc": "12831:244:76",
                              "nodeType": "YulFunctionCall",
                              "src": "12831:244:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "12807:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "12807:6:76"
                          },
                          "nativeSrc": "12807:282:76",
                          "nodeType": "YulFunctionCall",
                          "src": "12807:282:76"
                        },
                        "nativeSrc": "12804:404:76",
                        "nodeType": "YulIf",
                        "src": "12804:404:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13228:4:76",
                              "nodeType": "YulLiteral",
                              "src": "13228:4:76",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13234:1:76",
                              "nodeType": "YulLiteral",
                              "src": "13234:1:76",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13221:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "13221:6:76"
                          },
                          "nativeSrc": "13221:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "13221:15:76"
                        },
                        "nativeSrc": "13221:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "13221:15:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13290:4:76",
                              "nodeType": "YulLiteral",
                              "src": "13290:4:76",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "m",
                              "nativeSrc": "13296:1:76",
                              "nodeType": "YulIdentifier",
                              "src": "13296:1:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13283:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "13283:6:76"
                          },
                          "nativeSrc": "13283:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "13283:15:76"
                        },
                        "nativeSrc": "13283:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "13283:15:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58707,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12648:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58702,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11972:4:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58704,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11907:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58700,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12373:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58700,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13024:5:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58709,
                  "nodeType": "InlineAssembly",
                  "src": "11804:1540:76"
                }
              ]
            },
            "documentation": {
              "id": 58698,
              "nodeType": "StructuredDocumentation",
              "src": "11425:197:76",
              "text": "@dev Sends all of ERC20 `token` from `from` to `to`.\n Reverts upon failure.\n The `from` account must have their entire balance approved for the current contract to manage."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferAllFrom",
            "nameLocation": "11636:19:76",
            "parameters": {
              "id": 58705,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58700,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "11664:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58711,
                  "src": "11656:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58699,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11656:7:76",
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
                  "id": 58702,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "11679:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58711,
                  "src": "11671:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11671:7:76",
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
                  "id": 58704,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "11693:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58711,
                  "src": "11685:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58703,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11685:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11655:41:76"
            },
            "returnParameters": {
              "id": 58708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58707,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "11739:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58711,
                  "src": "11731:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58706,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11731:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11730:16:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58723,
            "nodeType": "FunctionDefinition",
            "src": "13466:939:76",
            "nodes": [],
            "body": {
              "id": 58722,
              "nodeType": "Block",
              "src": "13540:865:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "13602:797:76",
                    "nodeType": "YulBlock",
                    "src": "13602:797:76",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13623:4:76",
                              "nodeType": "YulLiteral",
                              "src": "13623:4:76",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "13629:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "13629:2:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13616:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "13616:6:76"
                          },
                          "nativeSrc": "13616:16:76",
                          "nodeType": "YulFunctionCall",
                          "src": "13616:16:76"
                        },
                        "nativeSrc": "13616:16:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "13616:16:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13680:4:76",
                              "nodeType": "YulLiteral",
                              "src": "13680:4:76",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "13686:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "13686:6:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13673:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "13673:6:76"
                          },
                          "nativeSrc": "13673:20:76",
                          "nodeType": "YulFunctionCall",
                          "src": "13673:20:76"
                        },
                        "nativeSrc": "13673:20:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "13673:20:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13745:4:76",
                              "nodeType": "YulLiteral",
                              "src": "13745:4:76",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13751:34:76",
                              "nodeType": "YulLiteral",
                              "src": "13751:34:76",
                              "type": "",
                              "value": "0xa9059cbb000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13738:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "13738:6:76"
                          },
                          "nativeSrc": "13738:48:76",
                          "nodeType": "YulFunctionCall",
                          "src": "13738:48:76"
                        },
                        "nativeSrc": "13738:48:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "13738:48:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "14178:114:76",
                          "nodeType": "YulBlock",
                          "src": "14178:114:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "14203:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "14203:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "14209:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "14209:10:76",
                                    "type": "",
                                    "value": "0x90b8ec18"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "14196:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "14196:6:76"
                                },
                                "nativeSrc": "14196:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "14196:24:76"
                              },
                              "nativeSrc": "14196:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "14196:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "14267:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "14267:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "14273:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "14273:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "14260:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "14260:6:76"
                                },
                                "nativeSrc": "14260:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "14260:18:76"
                              },
                              "nativeSrc": "14260:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "14260:18:76"
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
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nativeSrc": "14016:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "14016:4:76",
                                              "type": "",
                                              "value": "0x00"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "14010:5:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "14010:5:76"
                                          },
                                          "nativeSrc": "14010:11:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "14010:11:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "14023:1:76",
                                          "nodeType": "YulLiteral",
                                          "src": "14023:1:76",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nativeSrc": "14007:2:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "14007:2:76"
                                      },
                                      "nativeSrc": "14007:18:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "14007:18:76"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nativeSrc": "14034:14:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "14034:14:76"
                                          },
                                          "nativeSrc": "14034:16:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "14034:16:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nativeSrc": "14027:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "14027:6:76"
                                      },
                                      "nativeSrc": "14027:24:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "14027:24:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "or",
                                    "nativeSrc": "14004:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "14004:2:76"
                                  },
                                  "nativeSrc": "14004:48:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "14004:48:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "14105:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "14105:3:76"
                                      },
                                      "nativeSrc": "14105:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "14105:5:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "14112:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "14112:5:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14119:1:76",
                                      "nodeType": "YulLiteral",
                                      "src": "14119:1:76",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14122:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "14122:4:76",
                                      "type": "",
                                      "value": "0x10"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14128:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "14128:4:76",
                                      "type": "",
                                      "value": "0x44"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14134:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "14134:4:76",
                                      "type": "",
                                      "value": "0x00"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14140:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "14140:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "call",
                                    "nativeSrc": "14100:4:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "14100:4:76"
                                  },
                                  "nativeSrc": "14100:45:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "14100:45:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "13919:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "13919:3:76"
                              },
                              "nativeSrc": "13919:244:76",
                              "nodeType": "YulFunctionCall",
                              "src": "13919:244:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "13895:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "13895:6:76"
                          },
                          "nativeSrc": "13895:282:76",
                          "nodeType": "YulFunctionCall",
                          "src": "13895:282:76"
                        },
                        "nativeSrc": "13892:400:76",
                        "nodeType": "YulIf",
                        "src": "13892:400:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14312:4:76",
                              "nodeType": "YulLiteral",
                              "src": "14312:4:76",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "14318:1:76",
                              "nodeType": "YulLiteral",
                              "src": "14318:1:76",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14305:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "14305:6:76"
                          },
                          "nativeSrc": "14305:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "14305:15:76"
                        },
                        "nativeSrc": "14305:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "14305:15:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58718,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13686:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58716,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13629:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58714,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14112:5:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58721,
                  "nodeType": "InlineAssembly",
                  "src": "13593:806:76"
                }
              ]
            },
            "documentation": {
              "id": 58712,
              "nodeType": "StructuredDocumentation",
              "src": "13356:105:76",
              "text": "@dev Sends `amount` of ERC20 `token` from the current contract to `to`.\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransfer",
            "nameLocation": "13475:12:76",
            "parameters": {
              "id": 58719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58714,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "13496:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58723,
                  "src": "13488:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58713,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13488:7:76",
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
                  "id": 58716,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "13511:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58723,
                  "src": "13503:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13503:7:76",
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
                  "id": 58718,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "13523:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58723,
                  "src": "13515:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58717,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13515:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13487:43:76"
            },
            "returnParameters": {
              "id": 58720,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13540:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58735,
            "nodeType": "FunctionDefinition",
            "src": "14516:1612:76",
            "nodes": [],
            "body": {
              "id": 58734,
              "nodeType": "Block",
              "src": "14602:1526:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "14664:1458:76",
                    "nodeType": "YulBlock",
                    "src": "14664:1458:76",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14685:4:76",
                              "nodeType": "YulLiteral",
                              "src": "14685:4:76",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "14691:10:76",
                              "nodeType": "YulLiteral",
                              "src": "14691:10:76",
                              "type": "",
                              "value": "0x70a08231"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14678:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "14678:6:76"
                          },
                          "nativeSrc": "14678:24:76",
                          "nodeType": "YulFunctionCall",
                          "src": "14678:24:76"
                        },
                        "nativeSrc": "14678:24:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "14678:24:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14778:4:76",
                              "nodeType": "YulLiteral",
                              "src": "14778:4:76",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "14784:7:76",
                                "nodeType": "YulIdentifier",
                                "src": "14784:7:76"
                              },
                              "nativeSrc": "14784:9:76",
                              "nodeType": "YulFunctionCall",
                              "src": "14784:9:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14771:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "14771:6:76"
                          },
                          "nativeSrc": "14771:23:76",
                          "nodeType": "YulFunctionCall",
                          "src": "14771:23:76"
                        },
                        "nativeSrc": "14771:23:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "14771:23:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "15182:114:76",
                          "nodeType": "YulBlock",
                          "src": "15182:114:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15207:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "15207:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15213:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "15213:10:76",
                                    "type": "",
                                    "value": "0x90b8ec18"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "15200:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "15200:6:76"
                                },
                                "nativeSrc": "15200:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "15200:24:76"
                              },
                              "nativeSrc": "15200:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "15200:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15271:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "15271:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15277:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "15277:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "15264:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "15264:6:76"
                                },
                                "nativeSrc": "15264:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "15264:18:76"
                              },
                              "nativeSrc": "15264:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "15264:18:76"
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
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "15025:14:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "15025:14:76"
                                      },
                                      "nativeSrc": "15025:16:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "15025:16:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15043:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15043:4:76",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "15022:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "15022:2:76"
                                  },
                                  "nativeSrc": "15022:26:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "15022:26:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "15112:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "15112:3:76"
                                      },
                                      "nativeSrc": "15112:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "15112:5:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "15119:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "15119:5:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15126:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15126:4:76",
                                      "type": "",
                                      "value": "0x1c"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15132:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15132:4:76",
                                      "type": "",
                                      "value": "0x24"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15138:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15138:4:76",
                                      "type": "",
                                      "value": "0x34"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15144:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15144:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "staticcall",
                                    "nativeSrc": "15101:10:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "15101:10:76"
                                  },
                                  "nativeSrc": "15101:48:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "15101:48:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "14937:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "14937:3:76"
                              },
                              "nativeSrc": "14937:230:76",
                              "nodeType": "YulFunctionCall",
                              "src": "14937:230:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "14913:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "14913:6:76"
                          },
                          "nativeSrc": "14913:268:76",
                          "nodeType": "YulFunctionCall",
                          "src": "14913:268:76"
                        },
                        "nativeSrc": "14910:386:76",
                        "nodeType": "YulIf",
                        "src": "14910:386:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15316:4:76",
                              "nodeType": "YulLiteral",
                              "src": "15316:4:76",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "15322:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "15322:2:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15309:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "15309:6:76"
                          },
                          "nativeSrc": "15309:16:76",
                          "nodeType": "YulFunctionCall",
                          "src": "15309:16:76"
                        },
                        "nativeSrc": "15309:16:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "15309:16:76"
                      },
                      {
                        "nativeSrc": "15366:21:76",
                        "nodeType": "YulAssignment",
                        "src": "15366:21:76",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15382:4:76",
                              "nodeType": "YulLiteral",
                              "src": "15382:4:76",
                              "type": "",
                              "value": "0x34"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "15376:5:76",
                            "nodeType": "YulIdentifier",
                            "src": "15376:5:76"
                          },
                          "nativeSrc": "15376:11:76",
                          "nodeType": "YulFunctionCall",
                          "src": "15376:11:76"
                        },
                        "variableNames": [
                          {
                            "name": "amount",
                            "nativeSrc": "15366:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "15366:6:76"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15468:4:76",
                              "nodeType": "YulLiteral",
                              "src": "15468:4:76",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15474:34:76",
                              "nodeType": "YulLiteral",
                              "src": "15474:34:76",
                              "type": "",
                              "value": "0xa9059cbb000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15461:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "15461:6:76"
                          },
                          "nativeSrc": "15461:48:76",
                          "nodeType": "YulFunctionCall",
                          "src": "15461:48:76"
                        },
                        "nativeSrc": "15461:48:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "15461:48:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "15901:114:76",
                          "nodeType": "YulBlock",
                          "src": "15901:114:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15926:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "15926:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15932:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "15932:10:76",
                                    "type": "",
                                    "value": "0x90b8ec18"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "15919:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "15919:6:76"
                                },
                                "nativeSrc": "15919:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "15919:24:76"
                              },
                              "nativeSrc": "15919:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "15919:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15990:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "15990:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15996:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "15996:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "15983:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "15983:6:76"
                                },
                                "nativeSrc": "15983:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "15983:18:76"
                              },
                              "nativeSrc": "15983:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "15983:18:76"
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
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nativeSrc": "15739:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "15739:4:76",
                                              "type": "",
                                              "value": "0x00"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "15733:5:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "15733:5:76"
                                          },
                                          "nativeSrc": "15733:11:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "15733:11:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "15746:1:76",
                                          "nodeType": "YulLiteral",
                                          "src": "15746:1:76",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nativeSrc": "15730:2:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "15730:2:76"
                                      },
                                      "nativeSrc": "15730:18:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "15730:18:76"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nativeSrc": "15757:14:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "15757:14:76"
                                          },
                                          "nativeSrc": "15757:16:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "15757:16:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nativeSrc": "15750:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "15750:6:76"
                                      },
                                      "nativeSrc": "15750:24:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "15750:24:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "or",
                                    "nativeSrc": "15727:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "15727:2:76"
                                  },
                                  "nativeSrc": "15727:48:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "15727:48:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "15828:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "15828:3:76"
                                      },
                                      "nativeSrc": "15828:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "15828:5:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "15835:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "15835:5:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15842:1:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15842:1:76",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15845:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15845:4:76",
                                      "type": "",
                                      "value": "0x10"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15851:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15851:4:76",
                                      "type": "",
                                      "value": "0x44"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15857:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15857:4:76",
                                      "type": "",
                                      "value": "0x00"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15863:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "15863:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "call",
                                    "nativeSrc": "15823:4:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "15823:4:76"
                                  },
                                  "nativeSrc": "15823:45:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "15823:45:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "15642:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "15642:3:76"
                              },
                              "nativeSrc": "15642:244:76",
                              "nodeType": "YulFunctionCall",
                              "src": "15642:244:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "15618:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "15618:6:76"
                          },
                          "nativeSrc": "15618:282:76",
                          "nodeType": "YulFunctionCall",
                          "src": "15618:282:76"
                        },
                        "nativeSrc": "15615:400:76",
                        "nodeType": "YulIf",
                        "src": "15615:400:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16035:4:76",
                              "nodeType": "YulLiteral",
                              "src": "16035:4:76",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16041:1:76",
                              "nodeType": "YulLiteral",
                              "src": "16041:1:76",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16028:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "16028:6:76"
                          },
                          "nativeSrc": "16028:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "16028:15:76"
                        },
                        "nativeSrc": "16028:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "16028:15:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58731,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15366:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58728,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15322:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58726,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15119:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58726,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15835:5:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58733,
                  "nodeType": "InlineAssembly",
                  "src": "14655:1467:76"
                }
              ]
            },
            "documentation": {
              "id": 58724,
              "nodeType": "StructuredDocumentation",
              "src": "14411:100:76",
              "text": "@dev Sends all of ERC20 `token` from the current contract to `to`.\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferAll",
            "nameLocation": "14525:15:76",
            "parameters": {
              "id": 58729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58726,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "14549:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58735,
                  "src": "14541:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58725,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14541:7:76",
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
                  "id": 58728,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "14564:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58735,
                  "src": "14556:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58727,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14556:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14540:27:76"
            },
            "returnParameters": {
              "id": 58732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58731,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "14594:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58735,
                  "src": "14586:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14586:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14585:16:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58747,
            "nodeType": "FunctionDefinition",
            "src": "16262:936:76",
            "nodes": [],
            "body": {
              "id": 58746,
              "nodeType": "Block",
              "src": "16335:863:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "16397:795:76",
                    "nodeType": "YulBlock",
                    "src": "16397:795:76",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16418:4:76",
                              "nodeType": "YulLiteral",
                              "src": "16418:4:76",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "16424:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "16424:2:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16411:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "16411:6:76"
                          },
                          "nativeSrc": "16411:16:76",
                          "nodeType": "YulFunctionCall",
                          "src": "16411:16:76"
                        },
                        "nativeSrc": "16411:16:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "16411:16:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16475:4:76",
                              "nodeType": "YulLiteral",
                              "src": "16475:4:76",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "16481:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "16481:6:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16468:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "16468:6:76"
                          },
                          "nativeSrc": "16468:20:76",
                          "nodeType": "YulFunctionCall",
                          "src": "16468:20:76"
                        },
                        "nativeSrc": "16468:20:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "16468:20:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16540:4:76",
                              "nodeType": "YulLiteral",
                              "src": "16540:4:76",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16546:34:76",
                              "nodeType": "YulLiteral",
                              "src": "16546:34:76",
                              "type": "",
                              "value": "0x095ea7b3000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16533:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "16533:6:76"
                          },
                          "nativeSrc": "16533:48:76",
                          "nodeType": "YulFunctionCall",
                          "src": "16533:48:76"
                        },
                        "nativeSrc": "16533:48:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "16533:48:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "16972:113:76",
                          "nodeType": "YulBlock",
                          "src": "16972:113:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "16997:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "16997:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "17003:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "17003:10:76",
                                    "type": "",
                                    "value": "0x3e3f8f73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "16990:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "16990:6:76"
                                },
                                "nativeSrc": "16990:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "16990:24:76"
                              },
                              "nativeSrc": "16990:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "16990:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "17060:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "17060:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "17066:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "17066:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "17053:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "17053:6:76"
                                },
                                "nativeSrc": "17053:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "17053:18:76"
                              },
                              "nativeSrc": "17053:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "17053:18:76"
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
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nativeSrc": "16810:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "16810:4:76",
                                              "type": "",
                                              "value": "0x00"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "16804:5:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "16804:5:76"
                                          },
                                          "nativeSrc": "16804:11:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "16804:11:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "16817:1:76",
                                          "nodeType": "YulLiteral",
                                          "src": "16817:1:76",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nativeSrc": "16801:2:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "16801:2:76"
                                      },
                                      "nativeSrc": "16801:18:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "16801:18:76"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nativeSrc": "16828:14:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "16828:14:76"
                                          },
                                          "nativeSrc": "16828:16:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "16828:16:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nativeSrc": "16821:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "16821:6:76"
                                      },
                                      "nativeSrc": "16821:24:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "16821:24:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "or",
                                    "nativeSrc": "16798:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "16798:2:76"
                                  },
                                  "nativeSrc": "16798:48:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "16798:48:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "16899:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "16899:3:76"
                                      },
                                      "nativeSrc": "16899:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "16899:5:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "16906:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "16906:5:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "16913:1:76",
                                      "nodeType": "YulLiteral",
                                      "src": "16913:1:76",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "16916:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "16916:4:76",
                                      "type": "",
                                      "value": "0x10"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "16922:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "16922:4:76",
                                      "type": "",
                                      "value": "0x44"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "16928:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "16928:4:76",
                                      "type": "",
                                      "value": "0x00"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "16934:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "16934:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "call",
                                    "nativeSrc": "16894:4:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "16894:4:76"
                                  },
                                  "nativeSrc": "16894:45:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "16894:45:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "16713:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "16713:3:76"
                              },
                              "nativeSrc": "16713:244:76",
                              "nodeType": "YulFunctionCall",
                              "src": "16713:244:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "16689:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "16689:6:76"
                          },
                          "nativeSrc": "16689:282:76",
                          "nodeType": "YulFunctionCall",
                          "src": "16689:282:76"
                        },
                        "nativeSrc": "16686:399:76",
                        "nodeType": "YulIf",
                        "src": "16686:399:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "17105:4:76",
                              "nodeType": "YulLiteral",
                              "src": "17105:4:76",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17111:1:76",
                              "nodeType": "YulLiteral",
                              "src": "17111:1:76",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17098:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "17098:6:76"
                          },
                          "nativeSrc": "17098:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "17098:15:76"
                        },
                        "nativeSrc": "17098:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "17098:15:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58742,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16481:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58740,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16424:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58738,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16906:5:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58745,
                  "nodeType": "InlineAssembly",
                  "src": "16388:804:76"
                }
              ]
            },
            "documentation": {
              "id": 58736,
              "nodeType": "StructuredDocumentation",
              "src": "16134:123:76",
              "text": "@dev Sets `amount` of ERC20 `token` for `to` to manage on behalf of the current contract.\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeApprove",
            "nameLocation": "16271:11:76",
            "parameters": {
              "id": 58743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58738,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "16291:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58747,
                  "src": "16283:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58737,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16283:7:76",
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
                  "id": 58740,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "16306:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58747,
                  "src": "16298:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58739,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16298:7:76",
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
                  "id": 58742,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "16318:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58747,
                  "src": "16310:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16310:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16282:43:76"
            },
            "returnParameters": {
              "id": 58744,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "16335:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58759,
            "nodeType": "FunctionDefinition",
            "src": "17509:1624:76",
            "nodes": [],
            "body": {
              "id": 58758,
              "nodeType": "Block",
              "src": "17591:1542:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "17653:1474:76",
                    "nodeType": "YulBlock",
                    "src": "17653:1474:76",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "17674:4:76",
                              "nodeType": "YulLiteral",
                              "src": "17674:4:76",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "17680:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "17680:2:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17667:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "17667:6:76"
                          },
                          "nativeSrc": "17667:16:76",
                          "nodeType": "YulFunctionCall",
                          "src": "17667:16:76"
                        },
                        "nativeSrc": "17667:16:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "17667:16:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "17731:4:76",
                              "nodeType": "YulLiteral",
                              "src": "17731:4:76",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "17737:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "17737:6:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17724:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "17724:6:76"
                          },
                          "nativeSrc": "17724:20:76",
                          "nodeType": "YulFunctionCall",
                          "src": "17724:20:76"
                        },
                        "nativeSrc": "17724:20:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "17724:20:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "17796:4:76",
                              "nodeType": "YulLiteral",
                              "src": "17796:4:76",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17802:34:76",
                              "nodeType": "YulLiteral",
                              "src": "17802:34:76",
                              "type": "",
                              "value": "0x095ea7b3000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17789:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "17789:6:76"
                          },
                          "nativeSrc": "17789:48:76",
                          "nodeType": "YulFunctionCall",
                          "src": "17789:48:76"
                        },
                        "nativeSrc": "17789:48:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "17789:48:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "18227:793:76",
                          "nodeType": "YulBlock",
                          "src": "18227:793:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "18252:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "18252:4:76",
                                    "type": "",
                                    "value": "0x34"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "18258:1:76",
                                    "nodeType": "YulLiteral",
                                    "src": "18258:1:76",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "18245:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "18245:6:76"
                                },
                                "nativeSrc": "18245:15:76",
                                "nodeType": "YulFunctionCall",
                                "src": "18245:15:76"
                              },
                              "nativeSrc": "18245:15:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "18245:15:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "18313:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "18313:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "18319:34:76",
                                    "nodeType": "YulLiteral",
                                    "src": "18319:34:76",
                                    "type": "",
                                    "value": "0x095ea7b3000000000000000000000000"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "18306:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "18306:6:76"
                                },
                                "nativeSrc": "18306:48:76",
                                "nodeType": "YulFunctionCall",
                                "src": "18306:48:76"
                              },
                              "nativeSrc": "18306:48:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "18306:48:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "gas",
                                          "nativeSrc": "18411:3:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "18411:3:76"
                                        },
                                        "nativeSrc": "18411:5:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "18411:5:76"
                                      },
                                      {
                                        "name": "token",
                                        "nativeSrc": "18418:5:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "18418:5:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "18425:1:76",
                                        "nodeType": "YulLiteral",
                                        "src": "18425:1:76",
                                        "type": "",
                                        "value": "0"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "18428:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "18428:4:76",
                                        "type": "",
                                        "value": "0x10"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "18434:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "18434:4:76",
                                        "type": "",
                                        "value": "0x44"
                                      },
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "codesize",
                                          "nativeSrc": "18440:8:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "18440:8:76"
                                        },
                                        "nativeSrc": "18440:10:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "18440:10:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "18452:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "18452:4:76",
                                        "type": "",
                                        "value": "0x00"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "call",
                                      "nativeSrc": "18406:4:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "18406:4:76"
                                    },
                                    "nativeSrc": "18406:51:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "18406:51:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "pop",
                                  "nativeSrc": "18402:3:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "18402:3:76"
                                },
                                "nativeSrc": "18402:56:76",
                                "nodeType": "YulFunctionCall",
                                "src": "18402:56:76"
                              },
                              "nativeSrc": "18402:56:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "18402:56:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "18505:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "18505:4:76",
                                    "type": "",
                                    "value": "0x34"
                                  },
                                  {
                                    "name": "amount",
                                    "nativeSrc": "18511:6:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "18511:6:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "18498:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "18498:6:76"
                                },
                                "nativeSrc": "18498:20:76",
                                "nodeType": "YulFunctionCall",
                                "src": "18498:20:76"
                              },
                              "nativeSrc": "18498:20:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "18498:20:76"
                            },
                            {
                              "body": {
                                "nativeSrc": "18881:125:76",
                                "nodeType": "YulBlock",
                                "src": "18881:125:76",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18910:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "18910:4:76",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18916:10:76",
                                          "nodeType": "YulLiteral",
                                          "src": "18916:10:76",
                                          "type": "",
                                          "value": "0x3e3f8f73"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "18903:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "18903:6:76"
                                      },
                                      "nativeSrc": "18903:24:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "18903:24:76"
                                    },
                                    "nativeSrc": "18903:24:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "18903:24:76"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18977:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "18977:4:76",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18983:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "18983:4:76",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "18970:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "18970:6:76"
                                      },
                                      "nativeSrc": "18970:18:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "18970:18:76"
                                    },
                                    "nativeSrc": "18970:18:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "18970:18:76"
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
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nativeSrc": "18707:4:76",
                                                    "nodeType": "YulLiteral",
                                                    "src": "18707:4:76",
                                                    "type": "",
                                                    "value": "0x00"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "mload",
                                                  "nativeSrc": "18701:5:76",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "18701:5:76"
                                                },
                                                "nativeSrc": "18701:11:76",
                                                "nodeType": "YulFunctionCall",
                                                "src": "18701:11:76"
                                              },
                                              {
                                                "kind": "number",
                                                "nativeSrc": "18714:1:76",
                                                "nodeType": "YulLiteral",
                                                "src": "18714:1:76",
                                                "type": "",
                                                "value": "1"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "eq",
                                              "nativeSrc": "18698:2:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "18698:2:76"
                                            },
                                            "nativeSrc": "18698:18:76",
                                            "nodeType": "YulFunctionCall",
                                            "src": "18698:18:76"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [],
                                                "functionName": {
                                                  "name": "returndatasize",
                                                  "nativeSrc": "18725:14:76",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "18725:14:76"
                                                },
                                                "nativeSrc": "18725:16:76",
                                                "nodeType": "YulFunctionCall",
                                                "src": "18725:16:76"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "18718:6:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "18718:6:76"
                                            },
                                            "nativeSrc": "18718:24:76",
                                            "nodeType": "YulFunctionCall",
                                            "src": "18718:24:76"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "or",
                                          "nativeSrc": "18695:2:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "18695:2:76"
                                        },
                                        "nativeSrc": "18695:48:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "18695:48:76"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [],
                                            "functionName": {
                                              "name": "gas",
                                              "nativeSrc": "18800:3:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "18800:3:76"
                                            },
                                            "nativeSrc": "18800:5:76",
                                            "nodeType": "YulFunctionCall",
                                            "src": "18800:5:76"
                                          },
                                          {
                                            "name": "token",
                                            "nativeSrc": "18807:5:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "18807:5:76"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "18814:1:76",
                                            "nodeType": "YulLiteral",
                                            "src": "18814:1:76",
                                            "type": "",
                                            "value": "0"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "18817:4:76",
                                            "nodeType": "YulLiteral",
                                            "src": "18817:4:76",
                                            "type": "",
                                            "value": "0x10"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "18823:4:76",
                                            "nodeType": "YulLiteral",
                                            "src": "18823:4:76",
                                            "type": "",
                                            "value": "0x44"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "18829:4:76",
                                            "nodeType": "YulLiteral",
                                            "src": "18829:4:76",
                                            "type": "",
                                            "value": "0x00"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "18835:4:76",
                                            "nodeType": "YulLiteral",
                                            "src": "18835:4:76",
                                            "type": "",
                                            "value": "0x20"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "call",
                                          "nativeSrc": "18795:4:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "18795:4:76"
                                        },
                                        "nativeSrc": "18795:45:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "18795:45:76"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "18666:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "18666:3:76"
                                    },
                                    "nativeSrc": "18666:196:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "18666:196:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "18638:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "18638:6:76"
                                },
                                "nativeSrc": "18638:242:76",
                                "nodeType": "YulFunctionCall",
                                "src": "18638:242:76"
                              },
                              "nativeSrc": "18635:371:76",
                              "nodeType": "YulIf",
                              "src": "18635:371:76"
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
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nativeSrc": "18065:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "18065:4:76",
                                              "type": "",
                                              "value": "0x00"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "18059:5:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "18059:5:76"
                                          },
                                          "nativeSrc": "18059:11:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "18059:11:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18072:1:76",
                                          "nodeType": "YulLiteral",
                                          "src": "18072:1:76",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "eq",
                                        "nativeSrc": "18056:2:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "18056:2:76"
                                      },
                                      "nativeSrc": "18056:18:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "18056:18:76"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "returndatasize",
                                            "nativeSrc": "18083:14:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "18083:14:76"
                                          },
                                          "nativeSrc": "18083:16:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "18083:16:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nativeSrc": "18076:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "18076:6:76"
                                      },
                                      "nativeSrc": "18076:24:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "18076:24:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "or",
                                    "nativeSrc": "18053:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "18053:2:76"
                                  },
                                  "nativeSrc": "18053:48:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "18053:48:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "18154:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "18154:3:76"
                                      },
                                      "nativeSrc": "18154:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "18154:5:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "18161:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "18161:5:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "18168:1:76",
                                      "nodeType": "YulLiteral",
                                      "src": "18168:1:76",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "18171:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "18171:4:76",
                                      "type": "",
                                      "value": "0x10"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "18177:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "18177:4:76",
                                      "type": "",
                                      "value": "0x44"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "18183:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "18183:4:76",
                                      "type": "",
                                      "value": "0x00"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "18189:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "18189:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "call",
                                    "nativeSrc": "18149:4:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "18149:4:76"
                                  },
                                  "nativeSrc": "18149:45:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "18149:45:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "17968:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "17968:3:76"
                              },
                              "nativeSrc": "17968:244:76",
                              "nodeType": "YulFunctionCall",
                              "src": "17968:244:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "17944:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "17944:6:76"
                          },
                          "nativeSrc": "17944:282:76",
                          "nodeType": "YulFunctionCall",
                          "src": "17944:282:76"
                        },
                        "nativeSrc": "17941:1079:76",
                        "nodeType": "YulIf",
                        "src": "17941:1079:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "19040:4:76",
                              "nodeType": "YulLiteral",
                              "src": "19040:4:76",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "19046:1:76",
                              "nodeType": "YulLiteral",
                              "src": "19046:1:76",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "19033:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "19033:6:76"
                          },
                          "nativeSrc": "19033:15:76",
                          "nodeType": "YulFunctionCall",
                          "src": "19033:15:76"
                        },
                        "nativeSrc": "19033:15:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "19033:15:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58754,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17737:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58754,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18511:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58752,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17680:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58750,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18161:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58750,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18418:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58750,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18807:5:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58757,
                  "nodeType": "InlineAssembly",
                  "src": "17644:1483:76"
                }
              ]
            },
            "documentation": {
              "id": 58748,
              "nodeType": "StructuredDocumentation",
              "src": "17204:300:76",
              "text": "@dev Sets `amount` of ERC20 `token` for `to` to manage on behalf of the current contract.\n If the initial attempt to approve fails, attempts to reset the approved amount to zero,\n then retries the approval again (some tokens, e.g. USDT, requires this).\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeApproveWithRetry",
            "nameLocation": "17518:20:76",
            "parameters": {
              "id": 58755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58750,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "17547:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58759,
                  "src": "17539:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58749,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17539:7:76",
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
                  "id": 58752,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "17562:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58759,
                  "src": "17554:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58751,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17554:7:76",
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
                  "id": 58754,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "17574:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58759,
                  "src": "17566:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58753,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17566:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17538:43:76"
            },
            "returnParameters": {
              "id": 58756,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "17591:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58771,
            "nodeType": "FunctionDefinition",
            "src": "19260:739:76",
            "nodes": [],
            "body": {
              "id": 58770,
              "nodeType": "Block",
              "src": "19350:649:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "19412:581:76",
                    "nodeType": "YulBlock",
                    "src": "19412:581:76",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "19433:4:76",
                              "nodeType": "YulLiteral",
                              "src": "19433:4:76",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "account",
                              "nativeSrc": "19439:7:76",
                              "nodeType": "YulIdentifier",
                              "src": "19439:7:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "19426:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "19426:6:76"
                          },
                          "nativeSrc": "19426:21:76",
                          "nodeType": "YulFunctionCall",
                          "src": "19426:21:76"
                        },
                        "nativeSrc": "19426:21:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "19426:21:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "19500:4:76",
                              "nodeType": "YulLiteral",
                              "src": "19500:4:76",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "19506:34:76",
                              "nodeType": "YulLiteral",
                              "src": "19506:34:76",
                              "type": "",
                              "value": "0x70a08231000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "19493:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "19493:6:76"
                          },
                          "nativeSrc": "19493:48:76",
                          "nodeType": "YulFunctionCall",
                          "src": "19493:48:76"
                        },
                        "nativeSrc": "19493:48:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "19493:48:76"
                      },
                      {
                        "nativeSrc": "19579:404:76",
                        "nodeType": "YulAssignment",
                        "src": "19579:404:76",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "19696:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "19696:4:76",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nativeSrc": "19690:5:76",
                                "nodeType": "YulIdentifier",
                                "src": "19690:5:76"
                              },
                              "nativeSrc": "19690:11:76",
                              "nodeType": "YulFunctionCall",
                              "src": "19690:11:76"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "19815:14:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "19815:14:76"
                                      },
                                      "nativeSrc": "19815:16:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "19815:16:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19833:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "19833:4:76",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "19812:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "19812:2:76"
                                  },
                                  "nativeSrc": "19812:26:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "19812:26:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "19906:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "19906:3:76"
                                      },
                                      "nativeSrc": "19906:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "19906:5:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "19913:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "19913:5:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19920:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "19920:4:76",
                                      "type": "",
                                      "value": "0x10"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19926:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "19926:4:76",
                                      "type": "",
                                      "value": "0x24"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19932:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "19932:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19938:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "19938:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "staticcall",
                                    "nativeSrc": "19895:10:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "19895:10:76"
                                  },
                                  "nativeSrc": "19895:48:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "19895:48:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "19723:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "19723:3:76"
                              },
                              "nativeSrc": "19723:242:76",
                              "nodeType": "YulFunctionCall",
                              "src": "19723:242:76"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nativeSrc": "19605:3:76",
                            "nodeType": "YulIdentifier",
                            "src": "19605:3:76"
                          },
                          "nativeSrc": "19605:378:76",
                          "nodeType": "YulFunctionCall",
                          "src": "19605:378:76"
                        },
                        "variableNames": [
                          {
                            "name": "amount",
                            "nativeSrc": "19579:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "19579:6:76"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58764,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "19439:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58767,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "19579:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58762,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "19913:5:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58769,
                  "nodeType": "InlineAssembly",
                  "src": "19403:590:76"
                }
              ]
            },
            "documentation": {
              "id": 58760,
              "nodeType": "StructuredDocumentation",
              "src": "19139:116:76",
              "text": "@dev Returns the amount of ERC20 `token` owned by `account`.\n Returns zero if the `token` does not exist."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "19269:9:76",
            "parameters": {
              "id": 58765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58762,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "19287:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58771,
                  "src": "19279:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58761,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "19279:7:76",
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
                  "id": 58764,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "19302:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58771,
                  "src": "19294:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58763,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "19294:7:76",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19278:32:76"
            },
            "returnParameters": {
              "id": 58768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58767,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "19342:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58771,
                  "src": "19334:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19334:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19333:16:76"
            },
            "scope": 58876,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58800,
            "nodeType": "FunctionDefinition",
            "src": "20289:229:76",
            "nodes": [],
            "body": {
              "id": 58799,
              "nodeType": "Block",
              "src": "20382:136:76",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 58789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "20396:45:76",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 58784,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58774,
                          "src": "20417:5:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 58785,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58776,
                          "src": "20424:4:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 58786,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58778,
                          "src": "20430:2:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 58787,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58780,
                          "src": "20434:6:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
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
                          }
                        ],
                        "id": 58783,
                        "name": "trySafeTransferFrom",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58697,
                        "src": "20397:19:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,address,uint256) returns (bool)"
                        }
                      },
                      "id": 58788,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20397:44:76",
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
                  "id": 58798,
                  "nodeType": "IfStatement",
                  "src": "20392:120:76",
                  "trueBody": {
                    "id": 58797,
                    "nodeType": "Block",
                    "src": "20443:69:76",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 58791,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58774,
                              "src": "20477:5:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 58792,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58776,
                              "src": "20484:4:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 58793,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58778,
                              "src": "20490:2:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 58794,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58780,
                              "src": "20494:6:76",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                              }
                            ],
                            "id": 58790,
                            "name": "permit2TransferFrom",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 58814,
                            "src": "20457:19:76",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,address,uint256)"
                            }
                          },
                          "id": 58795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20457:44:76",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 58796,
                        "nodeType": "ExpressionStatement",
                        "src": "20457:44:76"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 58772,
              "nodeType": "StructuredDocumentation",
              "src": "20005:279:76",
              "text": "@dev Sends `amount` of ERC20 `token` from `from` to `to`.\n If the initial attempt fails, try to use Permit2 to transfer the token.\n Reverts upon failure.\n The `from` account must have at least `amount` approved for the current contract to manage."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom2",
            "nameLocation": "20298:17:76",
            "parameters": {
              "id": 58781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58774,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "20324:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58800,
                  "src": "20316:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58773,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20316:7:76",
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
                  "id": 58776,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "20339:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58800,
                  "src": "20331:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58775,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20331:7:76",
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
                  "id": 58778,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "20353:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58800,
                  "src": "20345:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58777,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20345:7:76",
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
                  "id": 58780,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "20365:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58800,
                  "src": "20357:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58779,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20357:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20315:57:76"
            },
            "returnParameters": {
              "id": 58782,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20382:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58814,
            "nodeType": "FunctionDefinition",
            "src": "20632:877:76",
            "nodes": [],
            "body": {
              "id": 58813,
              "nodeType": "Block",
              "src": "20739:770:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "20801:702:76",
                    "nodeType": "YulBlock",
                    "src": "20801:702:76",
                    "statements": [
                      {
                        "nativeSrc": "20815:20:76",
                        "nodeType": "YulVariableDeclaration",
                        "src": "20815:20:76",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "20830:4:76",
                              "nodeType": "YulLiteral",
                              "src": "20830:4:76",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "20824:5:76",
                            "nodeType": "YulIdentifier",
                            "src": "20824:5:76"
                          },
                          "nativeSrc": "20824:11:76",
                          "nodeType": "YulFunctionCall",
                          "src": "20824:11:76"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "20819:1:76",
                            "nodeType": "YulTypedName",
                            "src": "20819:1:76",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "20859:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "20859:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "20862:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "20862:4:76",
                                  "type": "",
                                  "value": "0x74"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "20855:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "20855:3:76"
                              },
                              "nativeSrc": "20855:12:76",
                              "nodeType": "YulFunctionCall",
                              "src": "20855:12:76"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "20873:2:76",
                                  "nodeType": "YulLiteral",
                                  "src": "20873:2:76",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "20881:2:76",
                                      "nodeType": "YulLiteral",
                                      "src": "20881:2:76",
                                      "type": "",
                                      "value": "96"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "20885:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "20885:5:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "20877:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "20877:3:76"
                                  },
                                  "nativeSrc": "20877:14:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "20877:14:76"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "20869:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "20869:3:76"
                              },
                              "nativeSrc": "20869:23:76",
                              "nodeType": "YulFunctionCall",
                              "src": "20869:23:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20848:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "20848:6:76"
                          },
                          "nativeSrc": "20848:45:76",
                          "nodeType": "YulFunctionCall",
                          "src": "20848:45:76"
                        },
                        "nativeSrc": "20848:45:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "20848:45:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "20917:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "20917:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "20920:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "20920:4:76",
                                  "type": "",
                                  "value": "0x54"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "20913:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "20913:3:76"
                              },
                              "nativeSrc": "20913:12:76",
                              "nodeType": "YulFunctionCall",
                              "src": "20913:12:76"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "20927:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "20927:6:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20906:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "20906:6:76"
                          },
                          "nativeSrc": "20906:28:76",
                          "nodeType": "YulFunctionCall",
                          "src": "20906:28:76"
                        },
                        "nativeSrc": "20906:28:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "20906:28:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "20958:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "20958:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "20961:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "20961:4:76",
                                  "type": "",
                                  "value": "0x34"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "20954:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "20954:3:76"
                              },
                              "nativeSrc": "20954:12:76",
                              "nodeType": "YulFunctionCall",
                              "src": "20954:12:76"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "20968:2:76",
                              "nodeType": "YulIdentifier",
                              "src": "20968:2:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20947:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "20947:6:76"
                          },
                          "nativeSrc": "20947:24:76",
                          "nodeType": "YulFunctionCall",
                          "src": "20947:24:76"
                        },
                        "nativeSrc": "20947:24:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "20947:24:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "20995:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "20995:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "20998:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "20998:4:76",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "20991:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "20991:3:76"
                              },
                              "nativeSrc": "20991:12:76",
                              "nodeType": "YulFunctionCall",
                              "src": "20991:12:76"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "21009:2:76",
                                  "nodeType": "YulLiteral",
                                  "src": "21009:2:76",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from",
                                  "nativeSrc": "21013:4:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "21013:4:76"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "21005:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "21005:3:76"
                              },
                              "nativeSrc": "21005:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "21005:13:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20984:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "20984:6:76"
                          },
                          "nativeSrc": "20984:35:76",
                          "nodeType": "YulFunctionCall",
                          "src": "20984:35:76"
                        },
                        "nativeSrc": "20984:35:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "20984:35:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "21103:1:76",
                              "nodeType": "YulIdentifier",
                              "src": "21103:1:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "21106:34:76",
                              "nodeType": "YulLiteral",
                              "src": "21106:34:76",
                              "type": "",
                              "value": "0x36c78516000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "21096:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "21096:6:76"
                          },
                          "nativeSrc": "21096:45:76",
                          "nodeType": "YulFunctionCall",
                          "src": "21096:45:76"
                        },
                        "nativeSrc": "21096:45:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "21096:45:76"
                      },
                      {
                        "nativeSrc": "21154:47:76",
                        "nodeType": "YulVariableDeclaration",
                        "src": "21154:47:76",
                        "value": {
                          "arguments": [
                            {
                              "name": "PERMIT2",
                              "nativeSrc": "21167:7:76",
                              "nodeType": "YulIdentifier",
                              "src": "21167:7:76"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "21187:3:76",
                                      "nodeType": "YulLiteral",
                                      "src": "21187:3:76",
                                      "type": "",
                                      "value": "160"
                                    },
                                    {
                                      "name": "amount",
                                      "nativeSrc": "21192:6:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "21192:6:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nativeSrc": "21183:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "21183:3:76"
                                  },
                                  "nativeSrc": "21183:16:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "21183:16:76"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "21176:6:76",
                                "nodeType": "YulIdentifier",
                                "src": "21176:6:76"
                              },
                              "nativeSrc": "21176:24:76",
                              "nodeType": "YulFunctionCall",
                              "src": "21176:24:76"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nativeSrc": "21163:3:76",
                            "nodeType": "YulIdentifier",
                            "src": "21163:3:76"
                          },
                          "nativeSrc": "21163:38:76",
                          "nodeType": "YulFunctionCall",
                          "src": "21163:38:76"
                        },
                        "variables": [
                          {
                            "name": "p",
                            "nativeSrc": "21158:1:76",
                            "nodeType": "YulTypedName",
                            "src": "21158:1:76",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "21314:179:76",
                          "nodeType": "YulBlock",
                          "src": "21314:179:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21339:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "21339:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21345:18:76",
                                    "nodeType": "YulLiteral",
                                    "src": "21345:18:76",
                                    "type": "",
                                    "value": "0x7939f4248757f0fd"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "21332:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "21332:6:76"
                                },
                                "nativeSrc": "21332:32:76",
                                "nodeType": "YulFunctionCall",
                                "src": "21332:32:76"
                              },
                              "nativeSrc": "21332:32:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "21332:32:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "21448:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "21448:4:76",
                                        "type": "",
                                        "value": "0x18"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "21458:1:76",
                                            "nodeType": "YulLiteral",
                                            "src": "21458:1:76",
                                            "type": "",
                                            "value": "2"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "p",
                                                "nativeSrc": "21468:1:76",
                                                "nodeType": "YulIdentifier",
                                                "src": "21468:1:76"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "21461:6:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "21461:6:76"
                                            },
                                            "nativeSrc": "21461:9:76",
                                            "nodeType": "YulFunctionCall",
                                            "src": "21461:9:76"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "21454:3:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "21454:3:76"
                                        },
                                        "nativeSrc": "21454:17:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "21454:17:76"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "21444:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "21444:3:76"
                                    },
                                    "nativeSrc": "21444:28:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "21444:28:76"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21474:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "21474:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "21437:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "21437:6:76"
                                },
                                "nativeSrc": "21437:42:76",
                                "nodeType": "YulFunctionCall",
                                "src": "21437:42:76"
                              },
                              "nativeSrc": "21437:42:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "21437:42:76"
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
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "21233:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "21233:3:76"
                                      },
                                      "nativeSrc": "21233:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "21233:5:76"
                                    },
                                    {
                                      "name": "p",
                                      "nativeSrc": "21240:1:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "21240:1:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "21243:1:76",
                                      "nodeType": "YulLiteral",
                                      "src": "21243:1:76",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "21250:1:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "21250:1:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "21253:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "21253:4:76",
                                          "type": "",
                                          "value": "0x10"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "21246:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "21246:3:76"
                                      },
                                      "nativeSrc": "21246:12:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "21246:12:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "21260:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "21260:4:76",
                                      "type": "",
                                      "value": "0x84"
                                    },
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "codesize",
                                        "nativeSrc": "21266:8:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "21266:8:76"
                                      },
                                      "nativeSrc": "21266:10:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "21266:10:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "21278:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "21278:4:76",
                                      "type": "",
                                      "value": "0x00"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "call",
                                    "nativeSrc": "21228:4:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "21228:4:76"
                                  },
                                  "nativeSrc": "21228:55:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "21228:55:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "p",
                                      "nativeSrc": "21297:1:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "21297:1:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extcodesize",
                                    "nativeSrc": "21285:11:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "21285:11:76"
                                  },
                                  "nativeSrc": "21285:14:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "21285:14:76"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nativeSrc": "21224:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "21224:3:76"
                              },
                              "nativeSrc": "21224:76:76",
                              "nodeType": "YulFunctionCall",
                              "src": "21224:76:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "21217:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "21217:6:76"
                          },
                          "nativeSrc": "21217:84:76",
                          "nodeType": "YulFunctionCall",
                          "src": "21217:84:76"
                        },
                        "nativeSrc": "21214:279:76",
                        "nodeType": "YulIf",
                        "src": "21214:279:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58583,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21167:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58809,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20927:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58809,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21192:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58805,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21013:4:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58807,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20968:2:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58803,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20885:5:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58812,
                  "nodeType": "InlineAssembly",
                  "src": "20792:711:76"
                }
              ]
            },
            "documentation": {
              "id": 58801,
              "nodeType": "StructuredDocumentation",
              "src": "20524:103:76",
              "text": "@dev Sends `amount` of ERC20 `token` from `from` to `to` via Permit2.\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "permit2TransferFrom",
            "nameLocation": "20641:19:76",
            "parameters": {
              "id": 58810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58803,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "20669:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58814,
                  "src": "20661:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58802,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20661:7:76",
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
                  "id": 58805,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "20684:4:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58814,
                  "src": "20676:12:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58804,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20676:7:76",
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
                  "id": 58807,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "20698:2:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58814,
                  "src": "20690:10:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58806,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20690:7:76",
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
                  "id": 58809,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "20710:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58814,
                  "src": "20702:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20702:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20660:57:76"
            },
            "returnParameters": {
              "id": 58811,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20739:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58853,
            "nodeType": "FunctionDefinition",
            "src": "21730:2397:76",
            "nodes": [],
            "body": {
              "id": 58852,
              "nodeType": "Block",
              "src": "21938:2189:76",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    58835
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 58835,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "21953:7:76",
                      "nodeType": "VariableDeclaration",
                      "scope": 58852,
                      "src": "21948:12:76",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 58834,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "21948:4:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 58836,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "21948:12:76"
                },
                {
                  "AST": {
                    "nativeSrc": "22022:2012:76",
                    "nodeType": "YulBlock",
                    "src": "22022:2012:76",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "22073:1951:76",
                          "nodeType": "YulBlock",
                          "src": "22073:1951:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "22098:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "22098:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "22104:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "22104:10:76",
                                    "type": "",
                                    "value": "0x3644e515"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "22091:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "22091:6:76"
                                },
                                "nativeSrc": "22091:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "22091:24:76"
                              },
                              "nativeSrc": "22091:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "22091:24:76"
                            },
                            {
                              "body": {
                                "nativeSrc": "22661:9:76",
                                "nodeType": "YulBlock",
                                "src": "22661:9:76",
                                "statements": [
                                  {
                                    "nativeSrc": "22663:5:76",
                                    "nodeType": "YulBreak",
                                    "src": "22663:5:76"
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
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nativeSrc": "22293:4:76",
                                                    "nodeType": "YulLiteral",
                                                    "src": "22293:4:76",
                                                    "type": "",
                                                    "value": "0x00"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "mload",
                                                  "nativeSrc": "22287:5:76",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "22287:5:76"
                                                },
                                                "nativeSrc": "22287:11:76",
                                                "nodeType": "YulFunctionCall",
                                                "src": "22287:11:76"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "22280:6:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "22280:6:76"
                                            },
                                            "nativeSrc": "22280:19:76",
                                            "nodeType": "YulFunctionCall",
                                            "src": "22280:19:76"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [],
                                                "functionName": {
                                                  "name": "returndatasize",
                                                  "nativeSrc": "22304:14:76",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "22304:14:76"
                                                },
                                                "nativeSrc": "22304:16:76",
                                                "nodeType": "YulFunctionCall",
                                                "src": "22304:16:76"
                                              },
                                              {
                                                "kind": "number",
                                                "nativeSrc": "22322:4:76",
                                                "nodeType": "YulLiteral",
                                                "src": "22322:4:76",
                                                "type": "",
                                                "value": "0x20"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "eq",
                                              "nativeSrc": "22301:2:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "22301:2:76"
                                            },
                                            "nativeSrc": "22301:26:76",
                                            "nodeType": "YulFunctionCall",
                                            "src": "22301:26:76"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "lt",
                                          "nativeSrc": "22277:2:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "22277:2:76"
                                        },
                                        "nativeSrc": "22277:51:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "22277:51:76"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22584:4:76",
                                            "nodeType": "YulLiteral",
                                            "src": "22584:4:76",
                                            "type": "",
                                            "value": "5000"
                                          },
                                          {
                                            "name": "token",
                                            "nativeSrc": "22590:5:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "22590:5:76"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22597:4:76",
                                            "nodeType": "YulLiteral",
                                            "src": "22597:4:76",
                                            "type": "",
                                            "value": "0x1c"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22603:4:76",
                                            "nodeType": "YulLiteral",
                                            "src": "22603:4:76",
                                            "type": "",
                                            "value": "0x04"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22609:4:76",
                                            "nodeType": "YulLiteral",
                                            "src": "22609:4:76",
                                            "type": "",
                                            "value": "0x00"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22615:4:76",
                                            "nodeType": "YulLiteral",
                                            "src": "22615:4:76",
                                            "type": "",
                                            "value": "0x20"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "staticcall",
                                          "nativeSrc": "22573:10:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "22573:10:76"
                                        },
                                        "nativeSrc": "22573:47:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "22573:47:76"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "22188:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "22188:3:76"
                                    },
                                    "nativeSrc": "22188:454:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22188:454:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "22160:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "22160:6:76"
                                },
                                "nativeSrc": "22160:500:76",
                                "nodeType": "YulFunctionCall",
                                "src": "22160:500:76"
                              },
                              "nativeSrc": "22157:513:76",
                              "nodeType": "YulIf",
                              "src": "22157:513:76"
                            },
                            {
                              "nativeSrc": "22687:20:76",
                              "nodeType": "YulVariableDeclaration",
                              "src": "22687:20:76",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "22702:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "22702:4:76",
                                    "type": "",
                                    "value": "0x40"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "22696:5:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "22696:5:76"
                                },
                                "nativeSrc": "22696:11:76",
                                "nodeType": "YulFunctionCall",
                                "src": "22696:11:76"
                              },
                              "variables": [
                                {
                                  "name": "m",
                                  "nativeSrc": "22691:1:76",
                                  "nodeType": "YulTypedName",
                                  "src": "22691:1:76",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "22735:1:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "22735:1:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22738:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "22738:4:76",
                                        "type": "",
                                        "value": "0x34"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "22731:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "22731:3:76"
                                    },
                                    "nativeSrc": "22731:12:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22731:12:76"
                                  },
                                  {
                                    "name": "spender",
                                    "nativeSrc": "22745:7:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "22745:7:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "22724:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "22724:6:76"
                                },
                                "nativeSrc": "22724:29:76",
                                "nodeType": "YulFunctionCall",
                                "src": "22724:29:76"
                              },
                              "nativeSrc": "22724:29:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "22724:29:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "22781:1:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "22781:1:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22784:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "22784:4:76",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "22777:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "22777:3:76"
                                    },
                                    "nativeSrc": "22777:12:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22777:12:76"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22795:2:76",
                                        "nodeType": "YulLiteral",
                                        "src": "22795:2:76",
                                        "type": "",
                                        "value": "96"
                                      },
                                      {
                                        "name": "owner",
                                        "nativeSrc": "22799:5:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "22799:5:76"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "22791:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "22791:3:76"
                                    },
                                    "nativeSrc": "22791:14:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22791:14:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "22770:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "22770:6:76"
                                },
                                "nativeSrc": "22770:36:76",
                                "nodeType": "YulFunctionCall",
                                "src": "22770:36:76"
                              },
                              "nativeSrc": "22770:36:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "22770:36:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "22834:1:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "22834:1:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22837:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "22837:4:76",
                                        "type": "",
                                        "value": "0x74"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "22830:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "22830:3:76"
                                    },
                                    "nativeSrc": "22830:12:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22830:12:76"
                                  },
                                  {
                                    "name": "deadline",
                                    "nativeSrc": "22844:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "22844:8:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "22823:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "22823:6:76"
                                },
                                "nativeSrc": "22823:30:76",
                                "nodeType": "YulFunctionCall",
                                "src": "22823:30:76"
                              },
                              "nativeSrc": "22823:30:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "22823:30:76"
                            },
                            {
                              "body": {
                                "nativeSrc": "22911:726:76",
                                "nodeType": "YulBlock",
                                "src": "22911:726:76",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "22940:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "22940:4:76",
                                          "type": "",
                                          "value": "0x14"
                                        },
                                        {
                                          "name": "owner",
                                          "nativeSrc": "22946:5:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "22946:5:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "22933:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "22933:6:76"
                                      },
                                      "nativeSrc": "22933:19:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "22933:19:76"
                                    },
                                    "nativeSrc": "22933:19:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "22933:19:76"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "22980:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "22980:4:76",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "22986:34:76",
                                          "nodeType": "YulLiteral",
                                          "src": "22986:34:76",
                                          "type": "",
                                          "value": "0x7ecebe00000000000000000000000000"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "22973:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "22973:6:76"
                                      },
                                      "nativeSrc": "22973:48:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "22973:48:76"
                                    },
                                    "nativeSrc": "22973:48:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "22973:48:76"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "23075:1:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "23075:1:76"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23078:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "23078:4:76",
                                              "type": "",
                                              "value": "0x94"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "23071:3:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "23071:3:76"
                                          },
                                          "nativeSrc": "23071:12:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23071:12:76"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [],
                                              "functionName": {
                                                "name": "gas",
                                                "nativeSrc": "23096:3:76",
                                                "nodeType": "YulIdentifier",
                                                "src": "23096:3:76"
                                              },
                                              "nativeSrc": "23096:5:76",
                                              "nodeType": "YulFunctionCall",
                                              "src": "23096:5:76"
                                            },
                                            {
                                              "name": "token",
                                              "nativeSrc": "23103:5:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "23103:5:76"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23110:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "23110:4:76",
                                              "type": "",
                                              "value": "0x10"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23116:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "23116:4:76",
                                              "type": "",
                                              "value": "0x24"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "m",
                                                  "nativeSrc": "23126:1:76",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "23126:1:76"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nativeSrc": "23129:4:76",
                                                  "nodeType": "YulLiteral",
                                                  "src": "23129:4:76",
                                                  "type": "",
                                                  "value": "0x54"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nativeSrc": "23122:3:76",
                                                "nodeType": "YulIdentifier",
                                                "src": "23122:3:76"
                                              },
                                              "nativeSrc": "23122:12:76",
                                              "nodeType": "YulFunctionCall",
                                              "src": "23122:12:76"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23136:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "23136:4:76",
                                              "type": "",
                                              "value": "0x20"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "staticcall",
                                            "nativeSrc": "23085:10:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "23085:10:76"
                                          },
                                          "nativeSrc": "23085:56:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23085:56:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23064:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23064:6:76"
                                      },
                                      "nativeSrc": "23064:78:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23064:78:76"
                                    },
                                    "nativeSrc": "23064:78:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23064:78:76"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "23170:1:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "23170:1:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23173:34:76",
                                          "nodeType": "YulLiteral",
                                          "src": "23173:34:76",
                                          "type": "",
                                          "value": "0x8fcbaf0c000000000000000000000000"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23163:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23163:6:76"
                                      },
                                      "nativeSrc": "23163:45:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23163:45:76"
                                    },
                                    "nativeSrc": "23163:45:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23163:45:76"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "23390:1:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "23390:1:76"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23393:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "23393:4:76",
                                              "type": "",
                                              "value": "0xb4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "23386:3:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "23386:3:76"
                                          },
                                          "nativeSrc": "23386:12:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23386:12:76"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23404:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "23404:4:76",
                                              "type": "",
                                              "value": "0xff"
                                            },
                                            {
                                              "name": "v",
                                              "nativeSrc": "23410:1:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "23410:1:76"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "and",
                                            "nativeSrc": "23400:3:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "23400:3:76"
                                          },
                                          "nativeSrc": "23400:12:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23400:12:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23379:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23379:6:76"
                                      },
                                      "nativeSrc": "23379:34:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23379:34:76"
                                    },
                                    "nativeSrc": "23379:34:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23379:34:76"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "23445:1:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "23445:1:76"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23448:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "23448:4:76",
                                              "type": "",
                                              "value": "0xd4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "23441:3:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "23441:3:76"
                                          },
                                          "nativeSrc": "23441:12:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23441:12:76"
                                        },
                                        {
                                          "name": "r",
                                          "nativeSrc": "23455:1:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "23455:1:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23434:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23434:6:76"
                                      },
                                      "nativeSrc": "23434:23:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23434:23:76"
                                    },
                                    "nativeSrc": "23434:23:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23434:23:76"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "23489:1:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "23489:1:76"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23492:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "23492:4:76",
                                              "type": "",
                                              "value": "0xf4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "23485:3:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "23485:3:76"
                                          },
                                          "nativeSrc": "23485:12:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23485:12:76"
                                        },
                                        {
                                          "name": "s",
                                          "nativeSrc": "23499:1:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "23499:1:76"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23478:6:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23478:6:76"
                                      },
                                      "nativeSrc": "23478:23:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23478:23:76"
                                    },
                                    "nativeSrc": "23478:23:76",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23478:23:76"
                                  },
                                  {
                                    "nativeSrc": "23522:71:76",
                                    "nodeType": "YulAssignment",
                                    "src": "23522:71:76",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "gas",
                                            "nativeSrc": "23538:3:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "23538:3:76"
                                          },
                                          "nativeSrc": "23538:5:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23538:5:76"
                                        },
                                        {
                                          "name": "token",
                                          "nativeSrc": "23545:5:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "23545:5:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23552:1:76",
                                          "nodeType": "YulLiteral",
                                          "src": "23552:1:76",
                                          "type": "",
                                          "value": "0"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "23559:1:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "23559:1:76"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23562:4:76",
                                              "nodeType": "YulLiteral",
                                              "src": "23562:4:76",
                                              "type": "",
                                              "value": "0x10"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "23555:3:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "23555:3:76"
                                          },
                                          "nativeSrc": "23555:12:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23555:12:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23569:5:76",
                                          "nodeType": "YulLiteral",
                                          "src": "23569:5:76",
                                          "type": "",
                                          "value": "0x104"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "23576:8:76",
                                            "nodeType": "YulIdentifier",
                                            "src": "23576:8:76"
                                          },
                                          "nativeSrc": "23576:10:76",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23576:10:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23588:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "23588:4:76",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "call",
                                        "nativeSrc": "23533:4:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23533:4:76"
                                      },
                                      "nativeSrc": "23533:60:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23533:60:76"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "success",
                                        "nativeSrc": "23522:7:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23522:7:76"
                                      }
                                    ]
                                  },
                                  {
                                    "nativeSrc": "23614:5:76",
                                    "nodeType": "YulBreak",
                                    "src": "23614:5:76"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22882:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "22882:4:76",
                                        "type": "",
                                        "value": "0x00"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nativeSrc": "22876:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "22876:5:76"
                                    },
                                    "nativeSrc": "22876:11:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22876:11:76"
                                  },
                                  {
                                    "name": "DAI_DOMAIN_SEPARATOR",
                                    "nativeSrc": "22889:20:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "22889:20:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "eq",
                                  "nativeSrc": "22873:2:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "22873:2:76"
                                },
                                "nativeSrc": "22873:37:76",
                                "nodeType": "YulFunctionCall",
                                "src": "22873:37:76"
                              },
                              "nativeSrc": "22870:767:76",
                              "nodeType": "YulIf",
                              "src": "22870:767:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "m",
                                    "nativeSrc": "23661:1:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "23661:1:76"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "23664:34:76",
                                    "nodeType": "YulLiteral",
                                    "src": "23664:34:76",
                                    "type": "",
                                    "value": "0xd505accf000000000000000000000000"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23654:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "23654:6:76"
                                },
                                "nativeSrc": "23654:45:76",
                                "nodeType": "YulFunctionCall",
                                "src": "23654:45:76"
                              },
                              "nativeSrc": "23654:45:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "23654:45:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23753:1:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23753:1:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23756:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "23756:4:76",
                                        "type": "",
                                        "value": "0x54"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23749:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "23749:3:76"
                                    },
                                    "nativeSrc": "23749:12:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23749:12:76"
                                  },
                                  {
                                    "name": "amount",
                                    "nativeSrc": "23763:6:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "23763:6:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23742:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "23742:6:76"
                                },
                                "nativeSrc": "23742:28:76",
                                "nodeType": "YulFunctionCall",
                                "src": "23742:28:76"
                              },
                              "nativeSrc": "23742:28:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "23742:28:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23798:1:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23798:1:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23801:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "23801:4:76",
                                        "type": "",
                                        "value": "0x94"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23794:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "23794:3:76"
                                    },
                                    "nativeSrc": "23794:12:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23794:12:76"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23812:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "23812:4:76",
                                        "type": "",
                                        "value": "0xff"
                                      },
                                      {
                                        "name": "v",
                                        "nativeSrc": "23818:1:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23818:1:76"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "23808:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "23808:3:76"
                                    },
                                    "nativeSrc": "23808:12:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23808:12:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23787:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "23787:6:76"
                                },
                                "nativeSrc": "23787:34:76",
                                "nodeType": "YulFunctionCall",
                                "src": "23787:34:76"
                              },
                              "nativeSrc": "23787:34:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "23787:34:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23849:1:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23849:1:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23852:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "23852:4:76",
                                        "type": "",
                                        "value": "0xb4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23845:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "23845:3:76"
                                    },
                                    "nativeSrc": "23845:12:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23845:12:76"
                                  },
                                  {
                                    "name": "r",
                                    "nativeSrc": "23859:1:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "23859:1:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23838:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "23838:6:76"
                                },
                                "nativeSrc": "23838:23:76",
                                "nodeType": "YulFunctionCall",
                                "src": "23838:23:76"
                              },
                              "nativeSrc": "23838:23:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "23838:23:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23889:1:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23889:1:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23892:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "23892:4:76",
                                        "type": "",
                                        "value": "0xd4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23885:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "23885:3:76"
                                    },
                                    "nativeSrc": "23885:12:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23885:12:76"
                                  },
                                  {
                                    "name": "s",
                                    "nativeSrc": "23899:1:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "23899:1:76"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23878:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "23878:6:76"
                                },
                                "nativeSrc": "23878:23:76",
                                "nodeType": "YulFunctionCall",
                                "src": "23878:23:76"
                              },
                              "nativeSrc": "23878:23:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "23878:23:76"
                            },
                            {
                              "nativeSrc": "23918:70:76",
                              "nodeType": "YulAssignment",
                              "src": "23918:70:76",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "gas",
                                      "nativeSrc": "23934:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "23934:3:76"
                                    },
                                    "nativeSrc": "23934:5:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23934:5:76"
                                  },
                                  {
                                    "name": "token",
                                    "nativeSrc": "23941:5:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "23941:5:76"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "23948:1:76",
                                    "nodeType": "YulLiteral",
                                    "src": "23948:1:76",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23955:1:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "23955:1:76"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23958:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "23958:4:76",
                                        "type": "",
                                        "value": "0x10"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23951:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "23951:3:76"
                                    },
                                    "nativeSrc": "23951:12:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23951:12:76"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "23965:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "23965:4:76",
                                    "type": "",
                                    "value": "0xe4"
                                  },
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "codesize",
                                      "nativeSrc": "23971:8:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "23971:8:76"
                                    },
                                    "nativeSrc": "23971:10:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23971:10:76"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "23983:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "23983:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  }
                                ],
                                "functionName": {
                                  "name": "call",
                                  "nativeSrc": "23929:4:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "23929:4:76"
                                },
                                "nativeSrc": "23929:59:76",
                                "nodeType": "YulFunctionCall",
                                "src": "23929:59:76"
                              },
                              "variableNames": [
                                {
                                  "name": "success",
                                  "nativeSrc": "23918:7:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "23918:7:76"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "24005:5:76",
                              "nodeType": "YulBreak",
                              "src": "24005:5:76"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22047:2:76",
                              "nodeType": "YulLiteral",
                              "src": "22047:2:76",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "token",
                                  "nativeSrc": "22055:5:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "22055:5:76"
                                },
                                {
                                  "name": "WETH9",
                                  "nativeSrc": "22062:5:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "22062:5:76"
                                }
                              ],
                              "functionName": {
                                "name": "xor",
                                "nativeSrc": "22051:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "22051:3:76"
                              },
                              "nativeSrc": "22051:17:76",
                              "nodeType": "YulFunctionCall",
                              "src": "22051:17:76"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nativeSrc": "22043:3:76",
                            "nodeType": "YulIdentifier",
                            "src": "22043:3:76"
                          },
                          "nativeSrc": "22043:26:76",
                          "nodeType": "YulFunctionCall",
                          "src": "22043:26:76"
                        },
                        "nativeSrc": "22036:1988:76",
                        "nodeType": "YulForLoop",
                        "post": {
                          "nativeSrc": "22070:2:76",
                          "nodeType": "YulBlock",
                          "src": "22070:2:76",
                          "statements": []
                        },
                        "pre": {
                          "nativeSrc": "22040:2:76",
                          "nodeType": "YulBlock",
                          "src": "22040:2:76",
                          "statements": []
                        },
                        "src": "22036:1988:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58575,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22889:20:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58579,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22062:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58823,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23763:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58825,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22844:8:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58819,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22799:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58819,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22946:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58829,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23455:1:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58829,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23859:1:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58831,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23499:1:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58831,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23899:1:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58821,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22745:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58835,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23522:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58835,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23918:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58817,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22055:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58817,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22590:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58817,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23103:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58817,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23545:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58817,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23941:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58827,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23410:1:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58827,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23818:1:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58837,
                  "nodeType": "InlineAssembly",
                  "src": "22013:2021:76"
                },
                {
                  "condition": {
                    "id": 58839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "24047:8:76",
                    "subExpression": {
                      "id": 58838,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58835,
                      "src": "24048:7:76",
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
                  "id": 58851,
                  "nodeType": "IfStatement",
                  "src": "24043:77:76",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 58841,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58817,
                          "src": "24071:5:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 58842,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58819,
                          "src": "24078:5:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 58843,
                          "name": "spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58821,
                          "src": "24085:7:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 58844,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58823,
                          "src": "24094:6:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 58845,
                          "name": "deadline",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58825,
                          "src": "24102:8:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 58846,
                          "name": "v",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58827,
                          "src": "24112:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        {
                          "id": 58847,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58829,
                          "src": "24115:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 58848,
                          "name": "s",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 58831,
                          "src": "24118:1:76",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
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
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
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
                        "id": 58840,
                        "name": "simplePermit2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58875,
                        "src": "24057:13:76",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                          "typeString": "function (address,address,address,uint256,uint256,uint8,bytes32,bytes32)"
                        }
                      },
                      "id": 58849,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24057:63:76",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 58850,
                    "nodeType": "ExpressionStatement",
                    "src": "24057:63:76"
                  }
                }
              ]
            },
            "documentation": {
              "id": 58815,
              "nodeType": "StructuredDocumentation",
              "src": "21515:210:76",
              "text": "@dev Permit a user to spend a given amount of\n another user's tokens via native EIP-2612 permit if possible, falling\n back to Permit2 if native permit fails or is not implemented on the token."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "permit2",
            "nameLocation": "21739:7:76",
            "parameters": {
              "id": 58832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58817,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "21764:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58853,
                  "src": "21756:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "21756:7:76",
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
                  "id": 58819,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "21787:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58853,
                  "src": "21779:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58818,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "21779:7:76",
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
                  "id": 58821,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "21810:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58853,
                  "src": "21802:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58820,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "21802:7:76",
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
                  "id": 58823,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "21835:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58853,
                  "src": "21827:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21827:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58825,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "21859:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58853,
                  "src": "21851:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21851:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58827,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "21883:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58853,
                  "src": "21877:7:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 58826,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "21877:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58829,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "21902:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58853,
                  "src": "21894:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58828,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "21894:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58831,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "21921:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58853,
                  "src": "21913:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58830,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "21913:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21746:182:76"
            },
            "returnParameters": {
              "id": 58833,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21938:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 58875,
            "nodeType": "FunctionDefinition",
            "src": "24185:2185:76",
            "nodes": [],
            "body": {
              "id": 58874,
              "nodeType": "Block",
              "src": "24399:1971:76",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "24461:1903:76",
                    "nodeType": "YulBlock",
                    "src": "24461:1903:76",
                    "statements": [
                      {
                        "nativeSrc": "24475:20:76",
                        "nodeType": "YulVariableDeclaration",
                        "src": "24475:20:76",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "24490:4:76",
                              "nodeType": "YulLiteral",
                              "src": "24490:4:76",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "24484:5:76",
                            "nodeType": "YulIdentifier",
                            "src": "24484:5:76"
                          },
                          "nativeSrc": "24484:11:76",
                          "nodeType": "YulFunctionCall",
                          "src": "24484:11:76"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "24479:1:76",
                            "nodeType": "YulTypedName",
                            "src": "24479:1:76",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "24515:1:76",
                              "nodeType": "YulIdentifier",
                              "src": "24515:1:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "24518:10:76",
                              "nodeType": "YulLiteral",
                              "src": "24518:10:76",
                              "type": "",
                              "value": "0x927da105"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "24508:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "24508:6:76"
                          },
                          "nativeSrc": "24508:21:76",
                          "nodeType": "YulFunctionCall",
                          "src": "24508:21:76"
                        },
                        "nativeSrc": "24508:21:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "24508:21:76"
                      },
                      {
                        "nativeSrc": "24583:318:76",
                        "nodeType": "YulBlock",
                        "src": "24583:318:76",
                        "statements": [
                          {
                            "nativeSrc": "24601:34:76",
                            "nodeType": "YulVariableDeclaration",
                            "src": "24601:34:76",
                            "value": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "24624:2:76",
                                  "nodeType": "YulLiteral",
                                  "src": "24624:2:76",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24632:1:76",
                                      "nodeType": "YulLiteral",
                                      "src": "24632:1:76",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nativeSrc": "24628:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24628:3:76"
                                  },
                                  "nativeSrc": "24628:6:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24628:6:76"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "24620:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "24620:3:76"
                              },
                              "nativeSrc": "24620:15:76",
                              "nodeType": "YulFunctionCall",
                              "src": "24620:15:76"
                            },
                            "variables": [
                              {
                                "name": "addressMask",
                                "nativeSrc": "24605:11:76",
                                "nodeType": "YulTypedName",
                                "src": "24605:11:76",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "m",
                                      "nativeSrc": "24663:1:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24663:1:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24666:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "24666:4:76",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "24659:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24659:3:76"
                                  },
                                  "nativeSrc": "24659:12:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24659:12:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "addressMask",
                                      "nativeSrc": "24677:11:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24677:11:76"
                                    },
                                    {
                                      "name": "owner",
                                      "nativeSrc": "24690:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24690:5:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nativeSrc": "24673:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24673:3:76"
                                  },
                                  "nativeSrc": "24673:23:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24673:23:76"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "24652:6:76",
                                "nodeType": "YulIdentifier",
                                "src": "24652:6:76"
                              },
                              "nativeSrc": "24652:45:76",
                              "nodeType": "YulFunctionCall",
                              "src": "24652:45:76"
                            },
                            "nativeSrc": "24652:45:76",
                            "nodeType": "YulExpressionStatement",
                            "src": "24652:45:76"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "m",
                                      "nativeSrc": "24725:1:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24725:1:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24728:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "24728:4:76",
                                      "type": "",
                                      "value": "0x40"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "24721:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24721:3:76"
                                  },
                                  "nativeSrc": "24721:12:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24721:12:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "addressMask",
                                      "nativeSrc": "24739:11:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24739:11:76"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "24752:5:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24752:5:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nativeSrc": "24735:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24735:3:76"
                                  },
                                  "nativeSrc": "24735:23:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24735:23:76"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "24714:6:76",
                                "nodeType": "YulIdentifier",
                                "src": "24714:6:76"
                              },
                              "nativeSrc": "24714:45:76",
                              "nodeType": "YulFunctionCall",
                              "src": "24714:45:76"
                            },
                            "nativeSrc": "24714:45:76",
                            "nodeType": "YulExpressionStatement",
                            "src": "24714:45:76"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "m",
                                      "nativeSrc": "24787:1:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24787:1:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24790:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "24790:4:76",
                                      "type": "",
                                      "value": "0x60"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "24783:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24783:3:76"
                                  },
                                  "nativeSrc": "24783:12:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24783:12:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "addressMask",
                                      "nativeSrc": "24801:11:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24801:11:76"
                                    },
                                    {
                                      "name": "spender",
                                      "nativeSrc": "24814:7:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24814:7:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nativeSrc": "24797:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24797:3:76"
                                  },
                                  "nativeSrc": "24797:25:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24797:25:76"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "24776:6:76",
                                "nodeType": "YulIdentifier",
                                "src": "24776:6:76"
                              },
                              "nativeSrc": "24776:47:76",
                              "nodeType": "YulFunctionCall",
                              "src": "24776:47:76"
                            },
                            "nativeSrc": "24776:47:76",
                            "nodeType": "YulExpressionStatement",
                            "src": "24776:47:76"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "m",
                                      "nativeSrc": "24851:1:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24851:1:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24854:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "24854:4:76",
                                      "type": "",
                                      "value": "0xc0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "24847:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24847:3:76"
                                  },
                                  "nativeSrc": "24847:12:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24847:12:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "addressMask",
                                      "nativeSrc": "24865:11:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24865:11:76"
                                    },
                                    {
                                      "name": "spender",
                                      "nativeSrc": "24878:7:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24878:7:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nativeSrc": "24861:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24861:3:76"
                                  },
                                  "nativeSrc": "24861:25:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24861:25:76"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "24840:6:76",
                                "nodeType": "YulIdentifier",
                                "src": "24840:6:76"
                              },
                              "nativeSrc": "24840:47:76",
                              "nodeType": "YulFunctionCall",
                              "src": "24840:47:76"
                            },
                            "nativeSrc": "24840:47:76",
                            "nodeType": "YulExpressionStatement",
                            "src": "24840:47:76"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "24914:47:76",
                        "nodeType": "YulVariableDeclaration",
                        "src": "24914:47:76",
                        "value": {
                          "arguments": [
                            {
                              "name": "PERMIT2",
                              "nativeSrc": "24927:7:76",
                              "nodeType": "YulIdentifier",
                              "src": "24927:7:76"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24947:3:76",
                                      "nodeType": "YulLiteral",
                                      "src": "24947:3:76",
                                      "type": "",
                                      "value": "160"
                                    },
                                    {
                                      "name": "amount",
                                      "nativeSrc": "24952:6:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "24952:6:76"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nativeSrc": "24943:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "24943:3:76"
                                  },
                                  "nativeSrc": "24943:16:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24943:16:76"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "24936:6:76",
                                "nodeType": "YulIdentifier",
                                "src": "24936:6:76"
                              },
                              "nativeSrc": "24936:24:76",
                              "nodeType": "YulFunctionCall",
                              "src": "24936:24:76"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nativeSrc": "24923:3:76",
                            "nodeType": "YulIdentifier",
                            "src": "24923:3:76"
                          },
                          "nativeSrc": "24923:38:76",
                          "nodeType": "YulFunctionCall",
                          "src": "24923:38:76"
                        },
                        "variables": [
                          {
                            "name": "p",
                            "nativeSrc": "24918:1:76",
                            "nodeType": "YulTypedName",
                            "src": "24918:1:76",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "25280:174:76",
                          "nodeType": "YulBlock",
                          "src": "25280:174:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "25305:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "25305:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "25311:18:76",
                                    "nodeType": "YulLiteral",
                                    "src": "25311:18:76",
                                    "type": "",
                                    "value": "0x6b836e6b8757f0fd"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "25298:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "25298:6:76"
                                },
                                "nativeSrc": "25298:32:76",
                                "nodeType": "YulFunctionCall",
                                "src": "25298:32:76"
                              },
                              "nativeSrc": "25298:32:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "25298:32:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "25409:4:76",
                                        "nodeType": "YulLiteral",
                                        "src": "25409:4:76",
                                        "type": "",
                                        "value": "0x18"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "25419:1:76",
                                            "nodeType": "YulLiteral",
                                            "src": "25419:1:76",
                                            "type": "",
                                            "value": "2"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "p",
                                                "nativeSrc": "25429:1:76",
                                                "nodeType": "YulIdentifier",
                                                "src": "25429:1:76"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "25422:6:76",
                                              "nodeType": "YulIdentifier",
                                              "src": "25422:6:76"
                                            },
                                            "nativeSrc": "25422:9:76",
                                            "nodeType": "YulFunctionCall",
                                            "src": "25422:9:76"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "25415:3:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "25415:3:76"
                                        },
                                        "nativeSrc": "25415:17:76",
                                        "nodeType": "YulFunctionCall",
                                        "src": "25415:17:76"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "25405:3:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "25405:3:76"
                                    },
                                    "nativeSrc": "25405:28:76",
                                    "nodeType": "YulFunctionCall",
                                    "src": "25405:28:76"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "25435:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "25435:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "25398:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "25398:6:76"
                                },
                                "nativeSrc": "25398:42:76",
                                "nodeType": "YulFunctionCall",
                                "src": "25398:42:76"
                              },
                              "nativeSrc": "25398:42:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "25398:42:76"
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
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "25089:14:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "25089:14:76"
                                      },
                                      "nativeSrc": "25089:16:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "25089:16:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "25107:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "25107:4:76",
                                      "type": "",
                                      "value": "0x5f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "25086:2:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "25086:2:76"
                                  },
                                  "nativeSrc": "25086:26:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "25086:26:76"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "25198:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "25198:3:76"
                                      },
                                      "nativeSrc": "25198:5:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "25198:5:76"
                                    },
                                    {
                                      "name": "p",
                                      "nativeSrc": "25205:1:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "25205:1:76"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "25212:1:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "25212:1:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "25215:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "25215:4:76",
                                          "type": "",
                                          "value": "0x1c"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "25208:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "25208:3:76"
                                      },
                                      "nativeSrc": "25208:12:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "25208:12:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "25222:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "25222:4:76",
                                      "type": "",
                                      "value": "0x64"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "25232:1:76",
                                          "nodeType": "YulIdentifier",
                                          "src": "25232:1:76"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "25235:4:76",
                                          "nodeType": "YulLiteral",
                                          "src": "25235:4:76",
                                          "type": "",
                                          "value": "0x60"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "25228:3:76",
                                        "nodeType": "YulIdentifier",
                                        "src": "25228:3:76"
                                      },
                                      "nativeSrc": "25228:12:76",
                                      "nodeType": "YulFunctionCall",
                                      "src": "25228:12:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "25242:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "25242:4:76",
                                      "type": "",
                                      "value": "0x60"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "staticcall",
                                    "nativeSrc": "25187:10:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "25187:10:76"
                                  },
                                  "nativeSrc": "25187:60:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "25187:60:76"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "25001:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "25001:3:76"
                              },
                              "nativeSrc": "25001:264:76",
                              "nodeType": "YulFunctionCall",
                              "src": "25001:264:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "24977:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "24977:6:76"
                          },
                          "nativeSrc": "24977:302:76",
                          "nodeType": "YulFunctionCall",
                          "src": "24977:302:76"
                        },
                        "nativeSrc": "24974:480:76",
                        "nodeType": "YulIf",
                        "src": "24974:480:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "25474:1:76",
                              "nodeType": "YulIdentifier",
                              "src": "25474:1:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "25477:10:76",
                              "nodeType": "YulLiteral",
                              "src": "25477:10:76",
                              "type": "",
                              "value": "0x2b67b570"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25467:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "25467:6:76"
                          },
                          "nativeSrc": "25467:21:76",
                          "nodeType": "YulFunctionCall",
                          "src": "25467:21:76"
                        },
                        "nativeSrc": "25467:21:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "25467:21:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25659:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "25659:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25662:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "25662:4:76",
                                  "type": "",
                                  "value": "0x60"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25655:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "25655:3:76"
                              },
                              "nativeSrc": "25655:12:76",
                              "nodeType": "YulFunctionCall",
                              "src": "25655:12:76"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "25669:6:76",
                              "nodeType": "YulIdentifier",
                              "src": "25669:6:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25648:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "25648:6:76"
                          },
                          "nativeSrc": "25648:28:76",
                          "nodeType": "YulFunctionCall",
                          "src": "25648:28:76"
                        },
                        "nativeSrc": "25648:28:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "25648:28:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25700:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "25700:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25703:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "25703:4:76",
                                  "type": "",
                                  "value": "0x80"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25696:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "25696:3:76"
                              },
                              "nativeSrc": "25696:12:76",
                              "nodeType": "YulFunctionCall",
                              "src": "25696:12:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "25710:14:76",
                              "nodeType": "YulLiteral",
                              "src": "25710:14:76",
                              "type": "",
                              "value": "0xffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25689:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "25689:6:76"
                          },
                          "nativeSrc": "25689:36:76",
                          "nodeType": "YulFunctionCall",
                          "src": "25689:36:76"
                        },
                        "nativeSrc": "25689:36:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "25689:36:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25893:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "25893:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25896:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "25896:4:76",
                                  "type": "",
                                  "value": "0xe0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25889:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "25889:3:76"
                              },
                              "nativeSrc": "25889:12:76",
                              "nodeType": "YulFunctionCall",
                              "src": "25889:12:76"
                            },
                            {
                              "name": "deadline",
                              "nativeSrc": "25903:8:76",
                              "nodeType": "YulIdentifier",
                              "src": "25903:8:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25882:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "25882:6:76"
                          },
                          "nativeSrc": "25882:30:76",
                          "nodeType": "YulFunctionCall",
                          "src": "25882:30:76"
                        },
                        "nativeSrc": "25882:30:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "25882:30:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25936:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "25936:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25939:5:76",
                                  "nodeType": "YulLiteral",
                                  "src": "25939:5:76",
                                  "type": "",
                                  "value": "0x100"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25932:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "25932:3:76"
                              },
                              "nativeSrc": "25932:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "25932:13:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "25947:5:76",
                              "nodeType": "YulLiteral",
                              "src": "25947:5:76",
                              "type": "",
                              "value": "0x100"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25925:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "25925:6:76"
                          },
                          "nativeSrc": "25925:28:76",
                          "nodeType": "YulFunctionCall",
                          "src": "25925:28:76"
                        },
                        "nativeSrc": "25925:28:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "25925:28:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "26000:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "26000:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "26003:5:76",
                                  "nodeType": "YulLiteral",
                                  "src": "26003:5:76",
                                  "type": "",
                                  "value": "0x120"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25996:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "25996:3:76"
                              },
                              "nativeSrc": "25996:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "25996:13:76"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "26011:4:76",
                              "nodeType": "YulLiteral",
                              "src": "26011:4:76",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25989:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "25989:6:76"
                          },
                          "nativeSrc": "25989:27:76",
                          "nodeType": "YulFunctionCall",
                          "src": "25989:27:76"
                        },
                        "nativeSrc": "25989:27:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "25989:27:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "26063:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "26063:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "26066:5:76",
                                  "nodeType": "YulLiteral",
                                  "src": "26066:5:76",
                                  "type": "",
                                  "value": "0x140"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "26059:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "26059:3:76"
                              },
                              "nativeSrc": "26059:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "26059:13:76"
                            },
                            {
                              "name": "r",
                              "nativeSrc": "26074:1:76",
                              "nodeType": "YulIdentifier",
                              "src": "26074:1:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "26052:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "26052:6:76"
                          },
                          "nativeSrc": "26052:24:76",
                          "nodeType": "YulFunctionCall",
                          "src": "26052:24:76"
                        },
                        "nativeSrc": "26052:24:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "26052:24:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "26100:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "26100:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "26103:5:76",
                                  "nodeType": "YulLiteral",
                                  "src": "26103:5:76",
                                  "type": "",
                                  "value": "0x160"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "26096:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "26096:3:76"
                              },
                              "nativeSrc": "26096:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "26096:13:76"
                            },
                            {
                              "name": "s",
                              "nativeSrc": "26111:1:76",
                              "nodeType": "YulIdentifier",
                              "src": "26111:1:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "26089:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "26089:6:76"
                          },
                          "nativeSrc": "26089:24:76",
                          "nodeType": "YulFunctionCall",
                          "src": "26089:24:76"
                        },
                        "nativeSrc": "26089:24:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "26089:24:76"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "26137:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "26137:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "26140:5:76",
                                  "nodeType": "YulLiteral",
                                  "src": "26140:5:76",
                                  "type": "",
                                  "value": "0x180"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "26133:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "26133:3:76"
                              },
                              "nativeSrc": "26133:13:76",
                              "nodeType": "YulFunctionCall",
                              "src": "26133:13:76"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "26152:3:76",
                                  "nodeType": "YulLiteral",
                                  "src": "26152:3:76",
                                  "type": "",
                                  "value": "248"
                                },
                                {
                                  "name": "v",
                                  "nativeSrc": "26157:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "26157:1:76"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "26148:3:76",
                                "nodeType": "YulIdentifier",
                                "src": "26148:3:76"
                              },
                              "nativeSrc": "26148:11:76",
                              "nodeType": "YulFunctionCall",
                              "src": "26148:11:76"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "26126:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "26126:6:76"
                          },
                          "nativeSrc": "26126:34:76",
                          "nodeType": "YulFunctionCall",
                          "src": "26126:34:76"
                        },
                        "nativeSrc": "26126:34:76",
                        "nodeType": "YulExpressionStatement",
                        "src": "26126:34:76"
                      },
                      {
                        "body": {
                          "nativeSrc": "26241:113:76",
                          "nodeType": "YulBlock",
                          "src": "26241:113:76",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "26266:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "26266:4:76",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "26272:10:76",
                                    "nodeType": "YulLiteral",
                                    "src": "26272:10:76",
                                    "type": "",
                                    "value": "0x6b836e6b"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "26259:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "26259:6:76"
                                },
                                "nativeSrc": "26259:24:76",
                                "nodeType": "YulFunctionCall",
                                "src": "26259:24:76"
                              },
                              "nativeSrc": "26259:24:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "26259:24:76"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "26329:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "26329:4:76",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "26335:4:76",
                                    "nodeType": "YulLiteral",
                                    "src": "26335:4:76",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "26322:6:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "26322:6:76"
                                },
                                "nativeSrc": "26322:18:76",
                                "nodeType": "YulFunctionCall",
                                "src": "26322:18:76"
                              },
                              "nativeSrc": "26322:18:76",
                              "nodeType": "YulExpressionStatement",
                              "src": "26322:18:76"
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
                                    "nativeSrc": "26188:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "26188:3:76"
                                  },
                                  "nativeSrc": "26188:5:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "26188:5:76"
                                },
                                {
                                  "name": "p",
                                  "nativeSrc": "26195:1:76",
                                  "nodeType": "YulIdentifier",
                                  "src": "26195:1:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "26198:1:76",
                                  "nodeType": "YulLiteral",
                                  "src": "26198:1:76",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "m",
                                      "nativeSrc": "26205:1:76",
                                      "nodeType": "YulIdentifier",
                                      "src": "26205:1:76"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "26208:4:76",
                                      "nodeType": "YulLiteral",
                                      "src": "26208:4:76",
                                      "type": "",
                                      "value": "0x1c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "26201:3:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "26201:3:76"
                                  },
                                  "nativeSrc": "26201:12:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "26201:12:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "26215:5:76",
                                  "nodeType": "YulLiteral",
                                  "src": "26215:5:76",
                                  "type": "",
                                  "value": "0x184"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "26222:8:76",
                                    "nodeType": "YulIdentifier",
                                    "src": "26222:8:76"
                                  },
                                  "nativeSrc": "26222:10:76",
                                  "nodeType": "YulFunctionCall",
                                  "src": "26222:10:76"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "26234:4:76",
                                  "nodeType": "YulLiteral",
                                  "src": "26234:4:76",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "26183:4:76",
                                "nodeType": "YulIdentifier",
                                "src": "26183:4:76"
                              },
                              "nativeSrc": "26183:56:76",
                              "nodeType": "YulFunctionCall",
                              "src": "26183:56:76"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "26176:6:76",
                            "nodeType": "YulIdentifier",
                            "src": "26176:6:76"
                          },
                          "nativeSrc": "26176:64:76",
                          "nodeType": "YulFunctionCall",
                          "src": "26176:64:76"
                        },
                        "nativeSrc": "26173:181:76",
                        "nodeType": "YulIf",
                        "src": "26173:181:76"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 58583,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24927:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58862,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24952:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58862,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "25669:6:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58864,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "25903:8:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58858,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24690:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58868,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "26074:1:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58870,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "26111:1:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58860,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24814:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58860,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24878:7:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58856,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24752:5:76",
                      "valueSize": 1
                    },
                    {
                      "declaration": 58866,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "26157:1:76",
                      "valueSize": 1
                    }
                  ],
                  "id": 58873,
                  "nodeType": "InlineAssembly",
                  "src": "24452:1912:76"
                }
              ]
            },
            "documentation": {
              "id": 58854,
              "nodeType": "StructuredDocumentation",
              "src": "24133:47:76",
              "text": "@dev Simple permit on the Permit2 contract."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "simplePermit2",
            "nameLocation": "24194:13:76",
            "parameters": {
              "id": 58871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58856,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "24225:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58875,
                  "src": "24217:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58855,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24217:7:76",
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
                  "id": 58858,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "24248:5:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58875,
                  "src": "24240:13:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58857,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24240:7:76",
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
                  "id": 58860,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "24271:7:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58875,
                  "src": "24263:15:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24263:7:76",
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
                  "id": 58862,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "24296:6:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58875,
                  "src": "24288:14:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58861,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24288:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58864,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "24320:8:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58875,
                  "src": "24312:16:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58863,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24312:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58866,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "24344:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58875,
                  "src": "24338:7:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 58865,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "24338:5:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58868,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "24363:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58875,
                  "src": "24355:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58867,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "24355:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 58870,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "24382:1:76",
                  "nodeType": "VariableDeclaration",
                  "scope": 58875,
                  "src": "24374:9:76",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 58869,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "24374:7:76",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24207:182:76"
            },
            "returnParameters": {
              "id": 58872,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24399:0:76"
            },
            "scope": 58876,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SafeTransferLib",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 58545,
          "nodeType": "StructuredDocumentation",
          "src": "57:644:76",
          "text": "@notice Safe ETH and ERC20 transfer library that gracefully handles missing return values.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/utils/SafeTransferLib.sol)\n @author Modified from Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\n @author Permit2 operations from (https://github.com/Uniswap/permit2/blob/main/src/libraries/Permit2Lib.sol)\n @dev Note:\n - For ETH transfers, please use `forceSafeTransferETH` for DoS protection.\n - For ERC20s, this implementation won't check that a token has code,\n   responsibility is delegated to the caller."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          58876
        ],
        "name": "SafeTransferLib",
        "nameLocation": "709:15:76",
        "scope": 58877,
        "usedErrors": [
          58548,
          58551,
          58554,
          58557,
          58560,
          58563
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 76
} as const;