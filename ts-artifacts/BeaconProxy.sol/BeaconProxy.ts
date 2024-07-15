export const BeaconProxy = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "beacon",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "data",
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
      "name": "BeaconUpgraded",
      "inputs": [
        {
          "name": "beacon",
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
      "name": "ERC1967InvalidBeacon",
      "inputs": [
        {
          "name": "beacon",
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
    "object": "0x60a060409080825261053b803803809161001982856102ae565b8339810182828203126101e95761002f826102e7565b60208084015191939091906001600160401b0382116101e9570182601f820112156101e957805190610060826102fb565b9361006d875195866102ae565b8285528383830101116101e957829060005b83811061029a57505060009184010152823b1561027a577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b038581169182179092558551635c60da1b60e01b8082529194928482600481895afa91821561026f57600092610238575b50813b1561021f5750508551847f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e600080a282511561020057508290600487518096819382525afa9283156101f5576000936101b3575b5091600080848461019096519101845af4903d156101aa573d610174816102fb565b90610181885192836102ae565b8152600081943d92013e610316565b505b608052516101c1908161037a82396080518160450152f35b60609250610316565b92508183813d83116101ee575b6101ca81836102ae565b810103126101e9576000806101e1610190956102e7565b945050610152565b600080fd5b503d6101c0565b85513d6000823e3d90fd5b9350505050346102105750610192565b63b398979f60e01b8152600490fd5b8751634c9c8ce360e01b81529116600482015260249150fd5b9091508481813d8311610268575b61025081836102ae565b810103126101e957610261906102e7565b90386100fb565b503d610246565b88513d6000823e3d90fd5b8351631933b43b60e21b81526001600160a01b0384166004820152602490fd5b81810183015186820184015284920161007f565b601f909101601f19168101906001600160401b038211908210176102d157604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101e957565b6001600160401b0381116102d157601f01601f191660200190565b9061033d575080511561032b57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580610370575b61034e575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561034656fe6080806040527f5c60da1b00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561010e5760009161007c575b5061016c565b905060203d602011610107575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f82011682019180831067ffffffffffffffff8411176100d8576100d2926040520161011a565b38610076565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b503d610089565b6040513d6000823e3d90fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060209101126101675760805173ffffffffffffffffffffffffffffffffffffffff811681036101675790565b600080fd5b6000808092368280378136915af43d82803e15610187573d90f35b3d90fdfea26469706673582212204ea8a93ed4a489c4ae3d4436fbc79e58c8bd9adac3a31162b112995e6264899d64736f6c63430008190033",
    "sourceMap": "1115:1194:42:-:0;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;-1:-1:-1;;;;;1115:1194:42;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;-1:-1:-1;1115:1194:42;;;;;;;;-1:-1:-1;1115:1194:42;;;;;5175:21:40;;:26;5171:95;;4781:66;;;-1:-1:-1;;;;;;4781:66:40;-1:-1:-1;;;;;1115:1194:42;;;4781:66:40;;;;;;1115:1194:42;;-1:-1:-1;;;5375:35:40;;;1115:1194:42;;;5375:35:40;1115:1194:42;5375:35:40;1115:1194:42;;5375:35:40;;;;;;;-1:-1:-1;5375:35:40;;;1115:1194:42;5424:32:40;;;:37;5420:125;;1115:1194:42;;;;6201:25:40;;-1:-1:-1;6201:25:40;;1115:1194:42;;6241:15:40;:11;;1115:1194:42;;;5375:35:40;1115:1194:42;;6301:35:40;;;;;;;;;;;;;-1:-1:-1;6301:35:40;;;6237:166;4255:25:55;;-1:-1:-1;4255:25:55;;;4297:55;4255:25;;1115:1194:42;;4255:25:55;;;;1115:1194:42;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;-1:-1:-1;1115:1194:42;;;;;;4297:55:55;:::i;:::-;;6237:166:40;1896:16:42;;1115:1194;;;;;;;1896:16;1115:1194;;;;;;;;;-1:-1:-1;4297:55:55;:::i;6301:35:40:-;;;;;;;;;;;;;;;;:::i;:::-;;;1115:1194:42;;;;-1:-1:-1;1115:1194:42;;4297:55:55;1115:1194:42;;:::i;:::-;6301:35:40;;;;;1115:1194:42;-1:-1:-1;1115:1194:42;;6301:35:40;;;;;;1115:1194:42;;;-1:-1:-1;1115:1194:42;;;;;6237:166:40;6648:9;;;;;;6644:70;;6237:166;;;6644:70;-1:-1:-1;;;6684:19:40;;5375:35;;6684:19;5420:125;1115:1194:42;;-1:-1:-1;;;5484:50:40;;1115:1194:42;;5375:35:40;5484:50;;1115:1194:42;;;-1:-1:-1;5484:50:40;5375:35;;;;;;;;;;;;;;;;;:::i;:::-;;;1115:1194:42;;;;;;;:::i;:::-;5375:35:40;;;;;;;;;;1115:1194:42;;;-1:-1:-1;1115:1194:42;;;;;5171:95:40;1115:1194:42;;-1:-1:-1;;;5224:31:40;;-1:-1:-1;;;;;1115:1194:42;;5224:31:40;;;1115:1194:42;;;5224:31:40;1115:1194:42;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1115:1194:42;;;;-1:-1:-1;;;;;1115:1194:42;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;-1:-1:-1;;;;;1115:1194:42;;;;;;:::o;:::-;-1:-1:-1;;;;;1115:1194:42;;;;;;-1:-1:-1;;1115:1194:42;;;;:::o;4625:582:55:-;;4797:8;;-1:-1:-1;1115:1194:42;;5874:21:55;:17;;6046:142;;;;;;5870:383;1115:1194:42;;-1:-1:-1;;;6225:17:55;;;;;4793:408;1115:1194:42;;5045:22:55;:49;;;4793:408;5041:119;;5173:17;;:::o;5041:119::-;1115:1194:42;;-1:-1:-1;;;5121:24:55;;-1:-1:-1;;;;;1115:1194:42;;;5121:24:55;;;1115:1194:42;;;5121:24:55;5045:49;5071:18;;;:23;5045:49;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080806040527f5c60da1b00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561010e5760009161007c575b5061016c565b905060203d602011610107575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f82011682019180831067ffffffffffffffff8411176100d8576100d2926040520161011a565b38610076565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b503d610089565b6040513d6000823e3d90fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060209101126101675760805173ffffffffffffffffffffffffffffffffffffffff811681036101675790565b600080fd5b6000808092368280378136915af43d82803e15610187573d90f35b3d90fdfea26469706673582212204ea8a93ed4a489c4ae3d4436fbc79e58c8bd9adac3a31162b112995e6264899d64736f6c63430008190033",
    "sourceMap": "1115:1194:42:-:0;;;;;2115:38;;;2293:7;2115:38;2293:7;1115:1194;2293:7;1115:1194;2115:38;;;;;;;-1:-1:-1;2115:38:42;;;-1:-1:-1;2381:17:41;;:::i;2115:38:42:-;;;;;;;;;;1115:1194;;;;;;;;;;;;;;;;;2115:38;1115:1194;;;2115:38;;:::i;:::-;;;;1115:1194;;-1:-1:-1;1115:1194:42;;2115:38;1115:1194;;-1:-1:-1;1115:1194:42;2115:38;;;;;;1115:1194;;;-1:-1:-1;1115:1194:42;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;-1:-1:-1;1115:1194:42;;949:895:41;1019:819;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {},
    "immutableReferences": {
      "49836": [
        {
          "start": 69,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"beacon\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"beacon\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidBeacon\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidImplementation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC1967NonPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"beacon\",\"type\":\"address\"}],\"name\":\"BeaconUpgraded\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"}],\"devdoc\":{\"details\":\"This contract implements a proxy that gets the implementation address for each call from an {UpgradeableBeacon}. The beacon address can only be set once during construction, and cannot be changed afterwards. It is stored in an immutable variable to avoid unnecessary storage reads, and also in the beacon storage slot specified by https://eips.ethereum.org/EIPS/eip-1967[EIP1967] so that it can be accessed externally. CAUTION: Since the beacon address can never be changed, you must ensure that you either control the beacon, or trust the beacon to not upgrade the implementation maliciously. IMPORTANT: Do not use the implementation logic to modify the beacon storage slot. Doing so would leave the proxy in an inconsistent state where the beacon storage slot does not match the beacon address.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"ERC1967InvalidBeacon(address)\":[{\"details\":\"The `beacon` of the proxy is invalid.\"}],\"ERC1967InvalidImplementation(address)\":[{\"details\":\"The `implementation` of the proxy is invalid.\"}],\"ERC1967NonPayable()\":[{\"details\":\"An upgrade function sees `msg.value > 0` that may be lost.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}]},\"events\":{\"BeaconUpgraded(address)\":{\"details\":\"Emitted when the beacon is changed.\"}},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes the proxy with `beacon`. If `data` is nonempty, it's used as data in a delegate call to the implementation returned by the beacon. This will typically be an encoded function call, and allows initializing the storage of the proxy like a Solidity constructor. Requirements: - `beacon` must be a contract with the interface {IBeacon}. - If `data` is empty, `msg.value` must be zero.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol\":\"BeaconProxy\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a\",\"dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE\"]},\"node_modules/@openzeppelin/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x387ebdcb365b8e620f26645d2b34a161cd39eedfb0219e8baff55630c5ae113c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://744ea187c195e31cb9201e63ca291fca9e623747f54f0ba390b366a6213b8964\",\"dweb:/ipfs/Qmc547qfV4sz65DC9B4okx1HvgxwUzJR7zTfKKbTzL3UQT\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]}},\"version\":1}",
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
              "name": "beacon",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
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
              "name": "beacon",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC1967InvalidBeacon"
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
              "name": "beacon",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "BeaconUpgraded",
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
            "details": "Initializes the proxy with `beacon`. If `data` is nonempty, it's used as data in a delegate call to the implementation returned by the beacon. This will typically be an encoded function call, and allows initializing the storage of the proxy like a Solidity constructor. Requirements: - `beacon` must be a contract with the interface {IBeacon}. - If `data` is empty, `msg.value` must be zero."
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
        "node_modules/@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol": "BeaconProxy"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
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
      "node_modules/@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol": {
        "keccak256": "0x387ebdcb365b8e620f26645d2b34a161cd39eedfb0219e8baff55630c5ae113c",
        "urls": [
          "bzz-raw://744ea187c195e31cb9201e63ca291fca9e623747f54f0ba390b366a6213b8964",
          "dweb:/ipfs/Qmc547qfV4sz65DC9B4okx1HvgxwUzJR7zTfKKbTzL3UQT"
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
    "absolutePath": "node_modules/@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
    "id": 49882,
    "exportedSymbols": {
      "BeaconProxy": [
        49881
      ],
      "ERC1967Utils": [
        49787
      ],
      "IBeacon": [
        49891
      ],
      "Proxy": [
        49823
      ]
    },
    "nodeType": "SourceUnit",
    "src": "112:2198:42",
    "nodes": [
      {
        "id": 49825,
        "nodeType": "PragmaDirective",
        "src": "112:24:42",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49827,
        "nodeType": "ImportDirective",
        "src": "138:38:42",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol",
        "file": "./IBeacon.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49882,
        "sourceUnit": 49892,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49826,
              "name": "IBeacon",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49891,
              "src": "146:7:42",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49829,
        "nodeType": "ImportDirective",
        "src": "177:35:42",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/Proxy.sol",
        "file": "../Proxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49882,
        "sourceUnit": 49824,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49828,
              "name": "Proxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49823,
              "src": "185:5:42",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49831,
        "nodeType": "ImportDirective",
        "src": "213:57:42",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol",
        "file": "../ERC1967/ERC1967Utils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49882,
        "sourceUnit": 49788,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49830,
              "name": "ERC1967Utils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49787,
              "src": "221:12:42",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49881,
        "nodeType": "ContractDefinition",
        "src": "1115:1194:42",
        "nodes": [
          {
            "id": 49836,
            "nodeType": "VariableDeclaration",
            "src": "1249:33:42",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_beacon",
            "nameLocation": "1275:7:42",
            "scope": 49881,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 49835,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1249:7:42",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "id": 49856,
            "nodeType": "FunctionDefinition",
            "src": "1772:147:42",
            "nodes": [],
            "body": {
              "id": 49855,
              "nodeType": "Block",
              "src": "1827:92:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49847,
                        "name": "beacon",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49839,
                        "src": "1873:6:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 49848,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49841,
                        "src": "1881:4:42",
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
                        "id": 49844,
                        "name": "ERC1967Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49787,
                        "src": "1837:12:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC1967Utils_$49787_$",
                          "typeString": "type(library ERC1967Utils)"
                        }
                      },
                      "id": 49846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1850:22:42",
                      "memberName": "upgradeBeaconToAndCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 49772,
                      "src": "1837:35:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,bytes memory)"
                      }
                    },
                    "id": 49849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1837:49:42",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49850,
                  "nodeType": "ExpressionStatement",
                  "src": "1837:49:42"
                },
                {
                  "expression": {
                    "id": 49853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49851,
                      "name": "_beacon",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49836,
                      "src": "1896:7:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 49852,
                      "name": "beacon",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49839,
                      "src": "1906:6:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1896:16:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49854,
                  "nodeType": "ExpressionStatement",
                  "src": "1896:16:42"
                }
              ]
            },
            "documentation": {
              "id": 49837,
              "nodeType": "StructuredDocumentation",
              "src": "1289:478:42",
              "text": " @dev Initializes the proxy with `beacon`.\n If `data` is nonempty, it's used as data in a delegate call to the implementation returned by the beacon. This\n will typically be an encoded function call, and allows initializing the storage of the proxy like a Solidity\n constructor.\n Requirements:\n - `beacon` must be a contract with the interface {IBeacon}.\n - If `data` is empty, `msg.value` must be zero."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 49842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49839,
                  "mutability": "mutable",
                  "name": "beacon",
                  "nameLocation": "1792:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 49856,
                  "src": "1784:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49838,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1784:7:42",
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
                  "id": 49841,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1813:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 49856,
                  "src": "1800:17:42",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 49840,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1800:5:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1783:35:42"
            },
            "returnParameters": {
              "id": 49843,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1827:0:42"
            },
            "scope": 49881,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 49871,
            "nodeType": "FunctionDefinition",
            "src": "2022:138:42",
            "nodes": [],
            "body": {
              "id": 49870,
              "nodeType": "Block",
              "src": "2098:62:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 49864,
                              "name": "_getBeacon",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49880,
                              "src": "2123:10:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                "typeString": "function () view returns (address)"
                              }
                            },
                            "id": 49865,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2123:12:42",
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
                          "id": 49863,
                          "name": "IBeacon",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49891,
                          "src": "2115:7:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IBeacon_$49891_$",
                            "typeString": "type(contract IBeacon)"
                          }
                        },
                        "id": 49866,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2115:21:42",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IBeacon_$49891",
                          "typeString": "contract IBeacon"
                        }
                      },
                      "id": 49867,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2137:14:42",
                      "memberName": "implementation",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 49890,
                      "src": "2115:36:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                        "typeString": "function () view external returns (address)"
                      }
                    },
                    "id": 49868,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2115:38:42",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 49862,
                  "id": 49869,
                  "nodeType": "Return",
                  "src": "2108:45:42"
                }
              ]
            },
            "baseFunctions": [
              49804
            ],
            "documentation": {
              "id": 49857,
              "nodeType": "StructuredDocumentation",
              "src": "1925:92:42",
              "text": " @dev Returns the current implementation address of the associated beacon."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_implementation",
            "nameLocation": "2031:15:42",
            "overrides": {
              "id": 49859,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2071:8:42"
            },
            "parameters": {
              "id": 49858,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2046:2:42"
            },
            "returnParameters": {
              "id": 49862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49861,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49871,
                  "src": "2089:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49860,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2089:7:42",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2088:9:42"
            },
            "scope": 49881,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 49880,
            "nodeType": "FunctionDefinition",
            "src": "2214:93:42",
            "nodes": [],
            "body": {
              "id": 49879,
              "nodeType": "Block",
              "src": "2276:31:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49877,
                    "name": "_beacon",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 49836,
                    "src": "2293:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 49876,
                  "id": 49878,
                  "nodeType": "Return",
                  "src": "2286:14:42"
                }
              ]
            },
            "documentation": {
              "id": 49872,
              "nodeType": "StructuredDocumentation",
              "src": "2166:43:42",
              "text": " @dev Returns the beacon."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getBeacon",
            "nameLocation": "2223:10:42",
            "parameters": {
              "id": 49873,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2233:2:42"
            },
            "returnParameters": {
              "id": 49876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49875,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49880,
                  "src": "2267:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49874,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2267:7:42",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2266:9:42"
            },
            "scope": 49881,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 49833,
              "name": "Proxy",
              "nameLocations": [
                "1139:5:42"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 49823,
              "src": "1139:5:42"
            },
            "id": 49834,
            "nodeType": "InheritanceSpecifier",
            "src": "1139:5:42"
          }
        ],
        "canonicalName": "BeaconProxy",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 49832,
          "nodeType": "StructuredDocumentation",
          "src": "272:842:42",
          "text": " @dev This contract implements a proxy that gets the implementation address for each call from an {UpgradeableBeacon}.\n The beacon address can only be set once during construction, and cannot be changed afterwards. It is stored in an\n immutable variable to avoid unnecessary storage reads, and also in the beacon storage slot specified by\n https://eips.ethereum.org/EIPS/eip-1967[EIP1967] so that it can be accessed externally.\n CAUTION: Since the beacon address can never be changed, you must ensure that you either control the beacon, or trust\n the beacon to not upgrade the implementation maliciously.\n IMPORTANT: Do not use the implementation logic to modify the beacon storage slot. Doing so would leave the proxy in\n an inconsistent state where the beacon storage slot does not match the beacon address."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          49881,
          49823
        ],
        "name": "BeaconProxy",
        "nameLocation": "1124:11:42",
        "scope": 49882,
        "usedErrors": [
          49519,
          49529,
          49532,
          51064,
          51067
        ],
        "usedEvents": [
          49510
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 42
} as const;