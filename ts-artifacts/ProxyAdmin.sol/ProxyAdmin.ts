export const ProxyAdmin = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "initialOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "UPGRADE_INTERFACE_VERSION",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
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
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "upgradeAndCall",
      "inputs": [
        {
          "name": "proxy",
          "type": "address",
          "internalType": "contract ITransparentUpgradeableProxy"
        },
        {
          "name": "implementation",
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
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x60803460b657601f6106a338819003918201601f19168301916001600160401b0383118484101760bb5780849260209460405283398101031260b657516001600160a01b03908181169081900360b6578015609d57600080546001600160a01b03198116831782556040519316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a36105d190816100d28239f35b604051631e4fbdf760e01b815260006004820152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260048036101561001457600080fd5b600091823560e01c8063715018a6146104505780638da5cb5b146103fb5780639623609d14610207578063ad3cb1cc146101455763f2fde38b1461005757600080fd5b346101415760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101415781359173ffffffffffffffffffffffffffffffffffffffff9182841680940361013c576100b161054a565b831561010d575050600054827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b908460249251917f1e4fbdf7000000000000000000000000000000000000000000000000000000008352820152fd5b600080fd5b8280fd5b50823461020457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610204575080519080820182811067ffffffffffffffff8211176101d6576101d293508152600582527f352e302e300000000000000000000000000000000000000000000000000000006020830152519182916020835260208301906104ec565b0390f35b6041847f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b80fd5b5060607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014157813573ffffffffffffffffffffffffffffffffffffffff928382168092036103995760249182359485168095036103f75760443567ffffffffffffffff918282116103f357366023830112156103f357818401358381116103c8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092875193603f81601f850116011684018481108682111761039d57885281845289939291903682820189011161039957818592896020930183870137840101526102f661054a565b803b156101415761033f9787518099819482937f4f1ef286000000000000000000000000000000000000000000000000000000008452898401528a8a84015260448301906104ec565b039134905af1801561038f57610353578580f35b84116103655750505238808080808580f35b604185917f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b84513d88823e3d90fd5b8480fd5b878b6041897f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b85896041877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8780fd5b8580fd5b83823461044c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261044c5773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b5080fd5b833461020457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102045761048761054a565b8073ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b919082519283825260005b8481106105365750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016104f7565b73ffffffffffffffffffffffffffffffffffffffff60005416330361056b57565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fdfea2646970667358221220eee44d4e930f2915099ac3c27d0381aee821725ae560b4e3686040f789c9159664736f6c63430008190033",
    "sourceMap": "502:1442:44:-:0;;;;;;;;;;;;;-1:-1:-1;;502:1442:44;;;;-1:-1:-1;;;;;502:1442:44;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;502:1442:44;;;;;;;;;;1273:26:30;;1269:95;;-1:-1:-1;502:1442:44;;-1:-1:-1;;;;;;502:1442:44;;;;;;;;;;;3052:40:30;;-1:-1:-1;3052:40:30;502:1442:44;;;;;;;1269:95:30;502:1442:44;;-1:-1:-1;;;1322:31:30;;-1:-1:-1;1322:31:30;;;502:1442:44;;;1322:31:30;502:1442:44;-1:-1:-1;502:1442:44;;;;;;-1:-1:-1;502:1442:44;;;;;-1:-1:-1;502:1442:44",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60406080815260048036101561001457600080fd5b600091823560e01c8063715018a6146104505780638da5cb5b146103fb5780639623609d14610207578063ad3cb1cc146101455763f2fde38b1461005757600080fd5b346101415760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101415781359173ffffffffffffffffffffffffffffffffffffffff9182841680940361013c576100b161054a565b831561010d575050600054827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b908460249251917f1e4fbdf7000000000000000000000000000000000000000000000000000000008352820152fd5b600080fd5b8280fd5b50823461020457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610204575080519080820182811067ffffffffffffffff8211176101d6576101d293508152600582527f352e302e300000000000000000000000000000000000000000000000000000006020830152519182916020835260208301906104ec565b0390f35b6041847f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b80fd5b5060607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014157813573ffffffffffffffffffffffffffffffffffffffff928382168092036103995760249182359485168095036103f75760443567ffffffffffffffff918282116103f357366023830112156103f357818401358381116103c8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092875193603f81601f850116011684018481108682111761039d57885281845289939291903682820189011161039957818592896020930183870137840101526102f661054a565b803b156101415761033f9787518099819482937f4f1ef286000000000000000000000000000000000000000000000000000000008452898401528a8a84015260448301906104ec565b039134905af1801561038f57610353578580f35b84116103655750505238808080808580f35b604185917f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b84513d88823e3d90fd5b8480fd5b878b6041897f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b85896041877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8780fd5b8580fd5b83823461044c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261044c5773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b5080fd5b833461020457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102045761048761054a565b8073ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b919082519283825260005b8481106105365750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016104f7565b73ffffffffffffffffffffffffffffffffffffffff60005416330361056b57565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fdfea2646970667358221220eee44d4e930f2915099ac3c27d0381aee821725ae560b4e3686040f789c9159664736f6c63430008190033",
    "sourceMap": "502:1442:44:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:62:30;;:::i;:::-;2627:22;;2623:91;;502:1442:44;;;;;;;;;;;;3052:40:30;502:1442:44;3052:40:30;;502:1442:44;;2623:91:30;502:1442:44;;;;;2672:31:30;;;;;;502:1442:44;2672:31:30;502:1442:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:62:30;;:::i;:::-;1873::44;;;;;502:1442;;;;1873:62;;;;;;502:1442;1873:62;;;;;502:1442;;;;;;;;;;;:::i;:::-;1873:62;1903:9;;1873:62;;;;;;;;;502:1442;;;1873:62;502:1442;;;;;;;1873:62;;;;;502:1442;;;;;;;;;;;;1873:62;502:1442;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:62:30;;:::i;:::-;502:1442:44;;;;;;;;;;3052:40:30;;;;502:1442:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;1796:162:30;502:1442:44;1710:6:30;502:1442:44;;735:10:56;1855:23:30;1851:101;;1796:162::o;1851:101::-;502:1442:44;;;1901:40:30;;;735:10:56;1901:40:30;;;502:1442:44;1901:40:30",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "UPGRADE_INTERFACE_VERSION()": "ad3cb1cc",
    "owner()": "8da5cb5b",
    "renounceOwnership()": "715018a6",
    "transferOwnership(address)": "f2fde38b",
    "upgradeAndCall(address,address,bytes)": "9623609d"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"initialOwner\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"UPGRADE_INTERFACE_VERSION\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract ITransparentUpgradeableProxy\",\"name\":\"proxy\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.\",\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Sets the initial owner who can perform upgrades.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"upgradeAndCall(address,address,bytes)\":{\"details\":\"Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}. Requirements: - This contract must be the admin of `proxy`. - If `data` is empty, `msg.value` must be zero.\"}},\"stateVariables\":{\"UPGRADE_INTERFACE_VERSION\":{\"details\":\"The version of the upgrade interface of the contract. If this getter is missing, both `upgrade(address)` and `upgradeAndCall(address,bytes)` are present, and `upgradeTo` must be used if no function should be called, while `upgradeAndCall` will invoke the `receive` function if the second argument is the empty byte string. If the getter returns `\\\"5.0.0\\\"`, only `upgradeAndCall(address,bytes)` is present, and the second argument must be the empty byte string if no function should be called, making it impossible to invoke the `receive` function during an upgrade.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol\":\"ProxyAdmin\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC1967.sol\":{\"keccak256\":\"0xb25a4f11fa80c702bf5cd85adec90e6f6f507f32f4a8e6f5dbc31e8c10029486\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6917f8a323e7811f041aecd4d9fd6e92455a6fba38a797ac6f6e208c7912b79d\",\"dweb:/ipfs/QmShuYv55wYHGi4EFkDB8QfF7ZCHoKk2efyz3AWY1ExSq7\"]},\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol\":{\"keccak256\":\"0xbfb6695731de677140fbf76c772ab08c4233a122fb51ac28ac120fc49bbbc4ec\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://68f8fded7cc318efa15874b7c6a983fe17a4a955d72d240353a9a4ca1e1b824c\",\"dweb:/ipfs/QmdcmBL9Qo4Tk3Dby4wFYabGyot9JNeLPxpSXZUgUm92BV\"]},\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a\",\"dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE\"]},\"node_modules/@openzeppelin/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"node_modules/@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol\":{\"keccak256\":\"0x371c3467dccfbb2ac03b0edb4fadaacb9ad382772cee7850a3e73f39a56d102c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3574f1cc3ff2cb985a1385949bd3c76888e8dcf59e6a770ccb15c79b145b39bb\",\"dweb:/ipfs/QmXZDrFibUAMqjoRrpKxV3ma5RR9YfJXZyMrLWJ3bix9gi\"]},\"node_modules/@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol\":{\"keccak256\":\"0xbc9babed4d136e6cc1e74354aa66538a234f3808645fbe30463b4a7b7d8ca789\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://75fd9323b206da2a87924fca2ca996dbd04ae0963f79f66fb8a0ef94bf283a3d\",\"dweb:/ipfs/QmYSoLcvpq8gRo8doLP4nnB43UAT1D3KvfFJRDSD2y4nYu\"]},\"node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]}},\"version\":1}",
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
              "name": "initialOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableInvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableUnauthorizedAccount"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "previousOwner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "UPGRADE_INTERFACE_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
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
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "contract ITransparentUpgradeableProxy",
              "name": "proxy",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "implementation",
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
          "name": "upgradeAndCall"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "details": "Sets the initial owner who can perform upgrades."
          },
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
          },
          "upgradeAndCall(address,address,bytes)": {
            "details": "Upgrades `proxy` to `implementation` and calls a function on the new implementation. See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}. Requirements: - This contract must be the admin of `proxy`. - If `data` is empty, `msg.value` must be zero."
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
        "node_modules/@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol": "ProxyAdmin"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/access/Ownable.sol": {
        "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
        "urls": [
          "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
          "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/interfaces/IERC1967.sol": {
        "keccak256": "0xb25a4f11fa80c702bf5cd85adec90e6f6f507f32f4a8e6f5dbc31e8c10029486",
        "urls": [
          "bzz-raw://6917f8a323e7811f041aecd4d9fd6e92455a6fba38a797ac6f6e208c7912b79d",
          "dweb:/ipfs/QmShuYv55wYHGi4EFkDB8QfF7ZCHoKk2efyz3AWY1ExSq7"
        ],
        "license": "MIT"
      },
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
      "node_modules/@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol": {
        "keccak256": "0x371c3467dccfbb2ac03b0edb4fadaacb9ad382772cee7850a3e73f39a56d102c",
        "urls": [
          "bzz-raw://3574f1cc3ff2cb985a1385949bd3c76888e8dcf59e6a770ccb15c79b145b39bb",
          "dweb:/ipfs/QmXZDrFibUAMqjoRrpKxV3ma5RR9YfJXZyMrLWJ3bix9gi"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol": {
        "keccak256": "0xbc9babed4d136e6cc1e74354aa66538a234f3808645fbe30463b4a7b7d8ca789",
        "urls": [
          "bzz-raw://75fd9323b206da2a87924fca2ca996dbd04ae0963f79f66fb8a0ef94bf283a3d",
          "dweb:/ipfs/QmYSoLcvpq8gRo8doLP4nnB43UAT1D3KvfFJRDSD2y4nYu"
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
      "node_modules/@openzeppelin/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
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
    "absolutePath": "node_modules/@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol",
    "id": 49940,
    "exportedSymbols": {
      "ITransparentUpgradeableProxy": [
        49960
      ],
      "Ownable": [
        47970
      ],
      "ProxyAdmin": [
        49939
      ]
    },
    "nodeType": "SourceUnit",
    "src": "116:1829:44",
    "nodes": [
      {
        "id": 49893,
        "nodeType": "PragmaDirective",
        "src": "116:24:44",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49895,
        "nodeType": "ImportDirective",
        "src": "142:79:44",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol",
        "file": "./TransparentUpgradeableProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49940,
        "sourceUnit": 50075,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49894,
              "name": "ITransparentUpgradeableProxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49960,
              "src": "150:28:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49897,
        "nodeType": "ImportDirective",
        "src": "222:49:44",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/access/Ownable.sol",
        "file": "../../access/Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 49940,
        "sourceUnit": 47971,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49896,
              "name": "Ownable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 47970,
              "src": "230:7:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49939,
        "nodeType": "ContractDefinition",
        "src": "502:1442:44",
        "nodes": [
          {
            "id": 49904,
            "nodeType": "VariableDeclaration",
            "src": "1167:58:44",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 49901,
              "nodeType": "StructuredDocumentation",
              "src": "539:623:44",
              "text": " @dev The version of the upgrade interface of the contract. If this getter is missing, both `upgrade(address)`\n and `upgradeAndCall(address,bytes)` are present, and `upgradeTo` must be used if no function should be called,\n while `upgradeAndCall` will invoke the `receive` function if the second argument is the empty byte string.\n If the getter returns `\"5.0.0\"`, only `upgradeAndCall(address,bytes)` is present, and the second argument must\n be the empty byte string if no function should be called, making it impossible to invoke the `receive` function\n during an upgrade."
            },
            "functionSelector": "ad3cb1cc",
            "mutability": "constant",
            "name": "UPGRADE_INTERFACE_VERSION",
            "nameLocation": "1190:25:44",
            "scope": 49939,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 49902,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1167:6:44",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "352e302e30",
              "id": 49903,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1218:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_2ade050ecfcf8ae20ae1d10a23573f9d7e0bad85e74a2cf8338a65401e64558c",
                "typeString": "literal_string \"5.0.0\""
              },
              "value": "5.0.0"
            },
            "visibility": "public"
          },
          {
            "id": 49914,
            "nodeType": "FunctionDefinition",
            "src": "1309:58:44",
            "nodes": [],
            "body": {
              "id": 49913,
              "nodeType": "Block",
              "src": "1365:2:44",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 49905,
              "nodeType": "StructuredDocumentation",
              "src": "1232:72:44",
              "text": " @dev Sets the initial owner who can perform upgrades."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 49910,
                    "name": "initialOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 49907,
                    "src": "1351:12:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 49911,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 49909,
                  "name": "Ownable",
                  "nameLocations": [
                    "1343:7:44"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47970,
                  "src": "1343:7:44"
                },
                "nodeType": "ModifierInvocation",
                "src": "1343:21:44"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 49908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49907,
                  "mutability": "mutable",
                  "name": "initialOwner",
                  "nameLocation": "1329:12:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 49914,
                  "src": "1321:20:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49906,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1321:7:44",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1320:22:44"
            },
            "returnParameters": {
              "id": 49912,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1365:0:44"
            },
            "scope": 49939,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 49938,
            "nodeType": "FunctionDefinition",
            "src": "1697:245:44",
            "nodes": [],
            "body": {
              "id": 49937,
              "nodeType": "Block",
              "src": "1863:79:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 49933,
                        "name": "implementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49920,
                        "src": "1914:14:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 49934,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49922,
                        "src": "1930:4:44",
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
                          "id": 49927,
                          "name": "proxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 49918,
                          "src": "1873:5:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ITransparentUpgradeableProxy_$49960",
                            "typeString": "contract ITransparentUpgradeableProxy"
                          }
                        },
                        "id": 49929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1879:16:44",
                        "memberName": "upgradeToAndCall",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 49959,
                        "src": "1873:22:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                          "typeString": "function (address,bytes memory) payable external"
                        }
                      },
                      "id": 49932,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "expression": {
                            "id": 49930,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1903:3:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 49931,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1907:5:44",
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "1903:9:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "1873:40:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_address_$_t_bytes_memory_ptr_$returns$__$value",
                        "typeString": "function (address,bytes memory) payable external"
                      }
                    },
                    "id": 49935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1873:62:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49936,
                  "nodeType": "ExpressionStatement",
                  "src": "1873:62:44"
                }
              ]
            },
            "documentation": {
              "id": 49915,
              "nodeType": "StructuredDocumentation",
              "src": "1373:319:44",
              "text": " @dev Upgrades `proxy` to `implementation` and calls a function on the new implementation.\n See {TransparentUpgradeableProxy-_dispatchUpgradeToAndCall}.\n Requirements:\n - This contract must be the admin of `proxy`.\n - If `data` is empty, `msg.value` must be zero."
            },
            "functionSelector": "9623609d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 49925,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 49924,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1853:9:44"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47881,
                  "src": "1853:9:44"
                },
                "nodeType": "ModifierInvocation",
                "src": "1853:9:44"
              }
            ],
            "name": "upgradeAndCall",
            "nameLocation": "1706:14:44",
            "parameters": {
              "id": 49923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49918,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "1759:5:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 49938,
                  "src": "1730:34:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ITransparentUpgradeableProxy_$49960",
                    "typeString": "contract ITransparentUpgradeableProxy"
                  },
                  "typeName": {
                    "id": 49917,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 49916,
                      "name": "ITransparentUpgradeableProxy",
                      "nameLocations": [
                        "1730:28:44"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 49960,
                      "src": "1730:28:44"
                    },
                    "referencedDeclaration": 49960,
                    "src": "1730:28:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ITransparentUpgradeableProxy_$49960",
                      "typeString": "contract ITransparentUpgradeableProxy"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49920,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "1782:14:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 49938,
                  "src": "1774:22:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49919,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1774:7:44",
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
                  "id": 49922,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1819:4:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 49938,
                  "src": "1806:17:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 49921,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1806:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1720:109:44"
            },
            "returnParameters": {
              "id": 49926,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1863:0:44"
            },
            "scope": 49939,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 49899,
              "name": "Ownable",
              "nameLocations": [
                "525:7:44"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 47970,
              "src": "525:7:44"
            },
            "id": 49900,
            "nodeType": "InheritanceSpecifier",
            "src": "525:7:44"
          }
        ],
        "canonicalName": "ProxyAdmin",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 49898,
          "nodeType": "StructuredDocumentation",
          "src": "273:228:44",
          "text": " @dev This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an\n explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          49939,
          47970,
          51334
        ],
        "name": "ProxyAdmin",
        "nameLocation": "511:10:44",
        "scope": 49940,
        "usedErrors": [
          47836,
          47841
        ],
        "usedEvents": [
          47847
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 44
} as const;