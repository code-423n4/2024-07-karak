export const TransparentUpgradeableProxy = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_logic",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "initialOwner",
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
      "name": "AdminChanged",
      "inputs": [
        {
          "name": "previousAdmin",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "newAdmin",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
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
      "name": "ERC1967InvalidAdmin",
      "inputs": [
        {
          "name": "admin",
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
    },
    {
      "type": "error",
      "name": "ProxyDeniedAdminAccess",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x604060a08152610e778038038061001581610283565b92833981019060608183031261027e5761002e816102a8565b60209161003c8382016102a8565b8582015190916001600160401b03919082821161027e570185601f8201121561027e5780519061007361006e836102bc565b610283565b9682885286838301011161027e57859060005b83811061026a57505060009187010152823b1561024a577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b038581166001600160a01b0319928316811790935588519097919591927fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a282511561022d5750600080838861014395519101845af43d15610225573d9161013461006e846102bc565b9283523d60008985013e6102d7565b505b8551916106a3918284019081118482101761020f5786849287946107d485391681520301906000f0801561020457831691826080527f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f857fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103958587549483519286168352820152a182156101ec571617905551610499908161033b823960805181601c0152f35b8451633173bdd160e11b815260006004820152602490fd5b84513d6000823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b6060916102d7565b9150503461023b5750610145565b63b398979f60e01b8152600490fd5b8551634c9c8ce360e01b81526001600160a01b0384166004820152602490fd5b818101830151898201840152879201610086565b600080fd5b6040519190601f01601f191682016001600160401b0381118382101761020f57604052565b51906001600160a01b038216820361027e57565b6001600160401b03811161020f57601f01601f191660200190565b906102fe57508051156102ec57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580610331575b61030f575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561030756fe608060405273ffffffffffffffffffffffffffffffffffffffff337f00000000000000000000000000000000000000000000000000000000000000008216036100c1576000357fffffffff00000000000000000000000000000000000000000000000000000000167f4f1ef28600000000000000000000000000000000000000000000000000000000146100b75760046040517fd2b576ec000000000000000000000000000000000000000000000000000000008152fd5b6100bf6101b5565b005b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e156100ff573d90f35b3d90fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f604051930116820182811067ffffffffffffffff82111761017657604052565b610103565b67ffffffffffffffff811161017657601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b366004116102695760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102695760043573ffffffffffffffffffffffffffffffffffffffff8116809103610269576024359067ffffffffffffffff821161026957366023830112156102695781600401359061023d6102388361017b565b610132565b9180835236602482860101116102695760208160009260246102679701838701378401015261026e565b565b600080fd5b90813b156103415773ffffffffffffffffffffffffffffffffffffffff82167f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc817fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a280511561030e5761030b91610388565b50565b50503461031757565b60046040517fb398979f000000000000000000000000000000000000000000000000000000008152fd5b60248273ffffffffffffffffffffffffffffffffffffffff604051917f4c9c8ce3000000000000000000000000000000000000000000000000000000008352166004820152fd5b6000806103bc93602081519101845af43d156103bf573d916103ac6102388461017b565b9283523d6000602085013e6103c3565b90565b6060915b9061040257508051156103d857805190602001fd5b60046040517f1425ea42000000000000000000000000000000000000000000000000000000008152fd5b8151158061045a575b610413575090565b60249073ffffffffffffffffffffffffffffffffffffffff604051917f9996b315000000000000000000000000000000000000000000000000000000008352166004820152fd5b50803b1561040b56fea26469706673582212208a07f44b7d3365d31d4b5bc257bd7f2f55e40d18988e52ac71687d02ee1d77e664736f6c6343000819003360803460b657601f6106a338819003918201601f19168301916001600160401b0383118484101760bb5780849260209460405283398101031260b657516001600160a01b03908181169081900360b6578015609d57600080546001600160a01b03198116831782556040519316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a36105d190816100d28239f35b604051631e4fbdf760e01b815260006004820152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260048036101561001457600080fd5b600091823560e01c8063715018a6146104505780638da5cb5b146103fb5780639623609d14610207578063ad3cb1cc146101455763f2fde38b1461005757600080fd5b346101415760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101415781359173ffffffffffffffffffffffffffffffffffffffff9182841680940361013c576100b161054a565b831561010d575050600054827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b908460249251917f1e4fbdf7000000000000000000000000000000000000000000000000000000008352820152fd5b600080fd5b8280fd5b50823461020457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610204575080519080820182811067ffffffffffffffff8211176101d6576101d293508152600582527f352e302e300000000000000000000000000000000000000000000000000000006020830152519182916020835260208301906104ec565b0390f35b6041847f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b80fd5b5060607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014157813573ffffffffffffffffffffffffffffffffffffffff928382168092036103995760249182359485168095036103f75760443567ffffffffffffffff918282116103f357366023830112156103f357818401358381116103c8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092875193603f81601f850116011684018481108682111761039d57885281845289939291903682820189011161039957818592896020930183870137840101526102f661054a565b803b156101415761033f9787518099819482937f4f1ef286000000000000000000000000000000000000000000000000000000008452898401528a8a84015260448301906104ec565b039134905af1801561038f57610353578580f35b84116103655750505238808080808580f35b604185917f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b84513d88823e3d90fd5b8480fd5b878b6041897f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b85896041877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8780fd5b8580fd5b83823461044c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261044c5773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b5080fd5b833461020457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102045761048761054a565b8073ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b919082519283825260005b8481106105365750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016104f7565b73ffffffffffffffffffffffffffffffffffffffff60005416330361056b57565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fdfea2646970667358221220eee44d4e930f2915099ac3c27d0381aee821725ae560b4e3686040f789c9159664736f6c63430008190033",
    "sourceMap": "4145:2226:45:-:0;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;;;;4145:2226:45;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;;;-1:-1:-1;4145:2226:45;;;;;;;;-1:-1:-1;4145:2226:45;;;;;2263:29:40;;:34;2259:119;;1327:66;4145:2226:45;;-1:-1:-1;;;;;4145:2226:45;;;-1:-1:-1;;;;;;4145:2226:45;;;;;;;;;;;;;;;;2922:27:40;-1:-1:-1;;2922:27:40;4145:2226:45;;2964:15:40;:11;;4255:25:55;-1:-1:-1;4255:25:55;;;4297:55;4255:25;;4145:2226:45;;4255:25:55;;;4145:2226:45;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;4145:2226:45;;;;4297:55:55;:::i;:::-;;2960:148:40;4145:2226:45;;;5121:28;;;;;;;;;;;;;;;;;;;;;;4145:2226;;;5121:28;;;-1:-1:-1;5121:28:45;;;;;4145:2226;;5104:46;;;;4394:34:40;3374:66;;;;;;4145:2226:45;;;;;;;;;;;4394:34:40;4053:22;;4049:91;;4145:2226:45;;;;;;;;;;;5104:46;4145:2226;;;;;;4049:91:40;4145:2226:45;;-1:-1:-1;;;4098:31:40;;-1:-1:-1;4098:31:40;;;4145:2226:45;;;4098:31:40;5121:28:45;4145:2226;;;-1:-1:-1;4145:2226:45;;;;;5121:28;4145:2226;;;-1:-1:-1;4145:2226:45;;;;;-1:-1:-1;4145:2226:45;;;;4297:55:55;:::i;2960:148:40:-;6648:9;;;;6644:70;;2960:148;;;6644:70;-1:-1:-1;;;6684:19:40;;;;;2259:119;4145:2226:45;;-1:-1:-1;;;2320:47:40;;-1:-1:-1;;;;;4145:2226:45;;2320:47:40;;;4145:2226:45;;;2320:47:40;4145:2226:45;;;;;;;;;;;;;;;;;;;-1:-1:-1;4145:2226:45;;;;;;;;;-1:-1:-1;;4145:2226:45;;;-1:-1:-1;;;;;4145:2226:45;;;;;;;;;;:::o;:::-;;;-1:-1:-1;;;;;4145:2226:45;;;;;;:::o;:::-;-1:-1:-1;;;;;4145:2226:45;;;;;;-1:-1:-1;;4145:2226:45;;;;:::o;4625:582:55:-;;4797:8;;-1:-1:-1;4145:2226:45;;5874:21:55;:17;;6046:142;;;;;;5870:383;4145:2226:45;;-1:-1:-1;;;6225:17:55;;;;;4793:408;4145:2226:45;;5045:22:55;:49;;;4793:408;5041:119;;5173:17;;:::o;5041:119::-;4145:2226:45;;-1:-1:-1;;;5121:24:55;;-1:-1:-1;;;;;4145:2226:45;;;5121:24:55;;;4145:2226:45;;;5121:24:55;5045:49;5071:18;;;:23;5045:49;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405273ffffffffffffffffffffffffffffffffffffffff337f00000000000000000000000000000000000000000000000000000000000000008216036100c1576000357fffffffff00000000000000000000000000000000000000000000000000000000167f4f1ef28600000000000000000000000000000000000000000000000000000000146100b75760046040517fd2b576ec000000000000000000000000000000000000000000000000000000008152fd5b6100bf6101b5565b005b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e156100ff573d90f35b3d90fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f604051930116820182811067ffffffffffffffff82111761017657604052565b610103565b67ffffffffffffffff811161017657601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b366004116102695760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102695760043573ffffffffffffffffffffffffffffffffffffffff8116809103610269576024359067ffffffffffffffff821161026957366023830112156102695781600401359061023d6102388361017b565b610132565b9180835236602482860101116102695760208160009260246102679701838701378401015261026e565b565b600080fd5b90813b156103415773ffffffffffffffffffffffffffffffffffffffff82167f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc817fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a280511561030e5761030b91610388565b50565b50503461031757565b60046040517fb398979f000000000000000000000000000000000000000000000000000000008152fd5b60248273ffffffffffffffffffffffffffffffffffffffff604051917f4c9c8ce3000000000000000000000000000000000000000000000000000000008352166004820152fd5b6000806103bc93602081519101845af43d156103bf573d916103ac6102388461017b565b9283523d6000602085013e6103c3565b90565b6060915b9061040257508051156103d857805190602001fd5b60046040517f1425ea42000000000000000000000000000000000000000000000000000000008152fd5b8151158061045a575b610413575090565b60249073ffffffffffffffffffffffffffffffffffffffff604051917f9996b315000000000000000000000000000000000000000000000000000000008352166004820152fd5b50803b1561040b56fea26469706673582212208a07f44b7d3365d31d4b5bc257bd7f2f55e40d18988e52ac71687d02ee1d77e664736f6c63430008190033",
    "sourceMap": "4145:2226:45:-:0;;;;5642:10;5426:6;4145:2226;;5642:27;4145:2226;;5689:7;;;;5700:54;5689:65;5700:54;;5781:24;4145:2226;;5781:24;;;;5685:201;;;:::i;:::-;4145:2226;5638:306;1327:66:40;;4145:2226:45;-1:-1:-1;1019:819:41;;;;;;;;;;;;;;;;;;;;;;;;;;4145:2226:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;:::i;:::-;;;;;;;;;;;;;:::o;6152:217::-;6267:8;6276:1;4145:2226;;;;;6267:8;4145:2226;;;;6276:1;4145:2226;;;;;;;;;;;;;;;;;6267:8;4145:2226;;;;;;;;6276:1;4145:2226;;;;;;;:::i;:::-;;:::i;:::-;;;;;6267:8;4145:2226;;;;;;;;;;6267:8;4145:2226;;6357:4;4145:2226;;;;;;;;;;6357:4;:::i;:::-;6152:217::o;4145:2226::-;6267:8;4145:2226;;2779:335:40;;2263:29;;:34;2259:119;;4145:2226:45;;;1327:66:40;4145:2226:45;;;;;;;;2922:27:40;2296:1;2922:27;;4145:2226:45;;2964:15:40;:11;;2995:53;;;:::i;:::-;;2779:335::o;2960:148::-;6648:9;;;6644:70;;2779:335::o;6644:70::-;6684:19;4145:2226:45;;6684:19:40;;;;2259:119;4145:2226:45;;;;;2320:47:40;;;;4145:2226:45;2320:47:40;;;4145:2226:45;2320:47:40;4106:253:55;4255:25;4106:253;4297:55;4106:253;4255:25;;;;;;;;4145:2226:45;;;;;;;;;;:::i;:::-;;;;;4255:25:55;;4145:2226:45;;;4297:55:55;:::i;:::-;4106:253;:::o;4145:2226:45:-;;;4625:582:55;;4797:8;;-1:-1:-1;4145:2226:45;;5874:21:55;:17;;6046:142;;;;;;5870:383;6225:17;4145:2226:45;;6225:17:55;;;;4793:408;4145:2226:45;;5045:22:55;:49;;;4793:408;5041:119;;5173:17;;:::o;5041:119::-;4145:2226:45;;;;;5121:24:55;;;;4145:2226:45;5121:24:55;;;4145:2226:45;5121:24:55;5045:49;5071:18;;;:23;5045:49;",
    "linkReferences": {},
    "immutableReferences": {
      "49965": [
        {
          "start": 28,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_logic\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"initialOwner\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidAdmin\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"ERC1967InvalidImplementation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC1967NonPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ProxyDeniedAdminAccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousAdmin\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"}],\"devdoc\":{\"details\":\"This contract implements a proxy that is upgradeable through an associated {ProxyAdmin} instance. To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector clashing], which can potentially be used in an attack, this contract uses the https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two things that go hand in hand: 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if that call matches the {ITransparentUpgradeableProxy-upgradeToAndCall} function exposed by the proxy itself. 2. If the admin calls the proxy, it can call the `upgradeToAndCall` function but any other call won't be forwarded to the implementation. If the admin tries to call a function on the implementation it will fail with an error indicating the proxy admin cannot fallback to the target implementation. These properties mean that the admin account can only be used for upgrading the proxy, so it's best if it's a dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to call a function from the proxy implementation. For this reason, the proxy deploys an instance of {ProxyAdmin} and allows upgrades only if they come through it. You should think of the `ProxyAdmin` instance as the administrative interface of the proxy, including the ability to change who can trigger upgrades by transferring ownership. NOTE: The real interface of this proxy is that defined in `ITransparentUpgradeableProxy`. This contract does not inherit from that interface, and instead `upgradeToAndCall` is implicitly implemented using a custom dispatch mechanism in `_fallback`. Consequently, the compiler will not produce an ABI for this contract. This is necessary to fully implement transparency without decoding reverts caused by selector clashes between the proxy and the implementation. NOTE: This proxy does not inherit from {Context} deliberately. The {ProxyAdmin} of this contract won't send a meta-transaction in any way, and any other meta-transaction setup should be made in the implementation contract. IMPORTANT: This contract avoids unnecessary storage reads by setting the admin only during construction as an immutable variable, preventing any changes thereafter. However, the admin slot defined in ERC-1967 can still be overwritten by the implementation logic pointed to by this proxy. In such cases, the contract may end up in an undesirable state where the admin slot is different from the actual admin. WARNING: It is not recommended to extend this contract to add additional external functions. If you do so, the compiler will not check that there are no selector conflicts, due to the note above. A selector clash between any new function and the functions declared in {ITransparentUpgradeableProxy} will be resolved in favor of the new one. This could render the `upgradeToAndCall` function inaccessible, preventing upgradeability and compromising transparency.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"ERC1967InvalidAdmin(address)\":[{\"details\":\"The `admin` of the proxy is invalid.\"}],\"ERC1967InvalidImplementation(address)\":[{\"details\":\"The `implementation` of the proxy is invalid.\"}],\"ERC1967NonPayable()\":[{\"details\":\"An upgrade function sees `msg.value > 0` that may be lost.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ProxyDeniedAdminAccess()\":[{\"details\":\"The proxy caller is the current admin, and can't fallback to the proxy target.\"}]},\"events\":{\"AdminChanged(address,address)\":{\"details\":\"Emitted when the admin account has changed.\"},\"Upgraded(address)\":{\"details\":\"Emitted when the implementation is upgraded.\"}},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"details\":\"Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`, backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in {ERC1967Proxy-constructor}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol\":\"TransparentUpgradeableProxy\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC1967.sol\":{\"keccak256\":\"0xb25a4f11fa80c702bf5cd85adec90e6f6f507f32f4a8e6f5dbc31e8c10029486\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6917f8a323e7811f041aecd4d9fd6e92455a6fba38a797ac6f6e208c7912b79d\",\"dweb:/ipfs/QmShuYv55wYHGi4EFkDB8QfF7ZCHoKk2efyz3AWY1ExSq7\"]},\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol\":{\"keccak256\":\"0xbfb6695731de677140fbf76c772ab08c4233a122fb51ac28ac120fc49bbbc4ec\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://68f8fded7cc318efa15874b7c6a983fe17a4a955d72d240353a9a4ca1e1b824c\",\"dweb:/ipfs/QmdcmBL9Qo4Tk3Dby4wFYabGyot9JNeLPxpSXZUgUm92BV\"]},\"node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06a78f9b3ee3e6d0eb4e4cd635ba49960bea34cac1db8c0a27c75f2319f1fd65\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://547d21aa17f4f3f1a1a7edf7167beff8dd9496a0348d5588f15cc8a4b29d052a\",\"dweb:/ipfs/QmT16JtRQSWNpLo9W23jr6CzaMuTAcQcjJJcdRd8HLJ6cE\"]},\"node_modules/@openzeppelin/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"node_modules/@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"node_modules/@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol\":{\"keccak256\":\"0x371c3467dccfbb2ac03b0edb4fadaacb9ad382772cee7850a3e73f39a56d102c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3574f1cc3ff2cb985a1385949bd3c76888e8dcf59e6a770ccb15c79b145b39bb\",\"dweb:/ipfs/QmXZDrFibUAMqjoRrpKxV3ma5RR9YfJXZyMrLWJ3bix9gi\"]},\"node_modules/@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol\":{\"keccak256\":\"0xbc9babed4d136e6cc1e74354aa66538a234f3808645fbe30463b4a7b7d8ca789\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://75fd9323b206da2a87924fca2ca996dbd04ae0963f79f66fb8a0ef94bf283a3d\",\"dweb:/ipfs/QmYSoLcvpq8gRo8doLP4nnB43UAT1D3KvfFJRDSD2y4nYu\"]},\"node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]}},\"version\":1}",
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
              "name": "_logic",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "initialOwner",
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
              "name": "admin",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC1967InvalidAdmin"
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
          "inputs": [],
          "type": "error",
          "name": "ProxyDeniedAdminAccess"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "previousAdmin",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "newAdmin",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "AdminChanged",
          "anonymous": false
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
            "details": "Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`, backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in {ERC1967Proxy-constructor}."
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
        "node_modules/@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol": "TransparentUpgradeableProxy"
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
    "absolutePath": "node_modules/@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol",
    "id": 50075,
    "exportedSymbols": {
      "ERC1967Proxy": [
        49484
      ],
      "ERC1967Utils": [
        49787
      ],
      "IERC1967": [
        49025
      ],
      "ITransparentUpgradeableProxy": [
        49960
      ],
      "ProxyAdmin": [
        49939
      ],
      "TransparentUpgradeableProxy": [
        50074
      ]
    },
    "nodeType": "SourceUnit",
    "src": "133:6239:45",
    "nodes": [
      {
        "id": 49941,
        "nodeType": "PragmaDirective",
        "src": "133:24:45",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 49943,
        "nodeType": "ImportDirective",
        "src": "159:57:45",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol",
        "file": "../ERC1967/ERC1967Utils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50075,
        "sourceUnit": 49788,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49942,
              "name": "ERC1967Utils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49787,
              "src": "167:12:45",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49945,
        "nodeType": "ImportDirective",
        "src": "217:57:45",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol",
        "file": "../ERC1967/ERC1967Proxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50075,
        "sourceUnit": 49485,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49944,
              "name": "ERC1967Proxy",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49484,
              "src": "225:12:45",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49947,
        "nodeType": "ImportDirective",
        "src": "275:55:45",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC1967.sol",
        "file": "../../interfaces/IERC1967.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50075,
        "sourceUnit": 49026,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49946,
              "name": "IERC1967",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49025,
              "src": "283:8:45",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49949,
        "nodeType": "ImportDirective",
        "src": "331:44:45",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol",
        "file": "./ProxyAdmin.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50075,
        "sourceUnit": 49940,
        "symbolAliases": [
          {
            "foreign": {
              "id": 49948,
              "name": "ProxyAdmin",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49939,
              "src": "339:10:45",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 49960,
        "nodeType": "ContractDefinition",
        "src": "823:127:45",
        "nodes": [
          {
            "id": 49959,
            "nodeType": "FunctionDefinition",
            "src": "880:68:45",
            "nodes": [],
            "functionSelector": "4f1ef286",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "upgradeToAndCall",
            "nameLocation": "889:16:45",
            "parameters": {
              "id": 49957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49954,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49959,
                  "src": "906:7:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49953,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "906:7:45",
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
                  "id": 49956,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 49959,
                  "src": "915:14:45",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 49955,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "915:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "905:25:45"
            },
            "returnParameters": {
              "id": 49958,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "947:0:45"
            },
            "scope": 49960,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 49951,
              "name": "IERC1967",
              "nameLocations": [
                "865:8:45"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 49025,
              "src": "865:8:45"
            },
            "id": 49952,
            "nodeType": "InheritanceSpecifier",
            "src": "865:8:45"
          }
        ],
        "canonicalName": "ITransparentUpgradeableProxy",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 49950,
          "nodeType": "StructuredDocumentation",
          "src": "377:445:45",
          "text": " @dev Interface for {TransparentUpgradeableProxy}. In order to implement transparency, {TransparentUpgradeableProxy}\n does not implement this interface directly, and its upgradeability mechanism is implemented by an internal dispatch\n mechanism. The compiler is unaware that these functions are implemented by {TransparentUpgradeableProxy} and will not\n include them in the ABI so this interface must be used to interact with it."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          49960,
          49025
        ],
        "name": "ITransparentUpgradeableProxy",
        "nameLocation": "833:28:45",
        "scope": 50075,
        "usedErrors": [],
        "usedEvents": [
          49012,
          49019,
          49024
        ]
      },
      {
        "id": 50074,
        "nodeType": "ContractDefinition",
        "src": "4145:2226:45",
        "nodes": [
          {
            "id": 49965,
            "nodeType": "VariableDeclaration",
            "src": "4539:32:45",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_admin",
            "nameLocation": "4565:6:45",
            "scope": 50074,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 49964,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "4539:7:45",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "id": 49968,
            "nodeType": "ErrorDefinition",
            "src": "4685:31:45",
            "nodes": [],
            "documentation": {
              "id": 49966,
              "nodeType": "StructuredDocumentation",
              "src": "4578:102:45",
              "text": " @dev The proxy caller is the current admin, and can't fallback to the proxy target."
            },
            "errorSelector": "d2b576ec",
            "name": "ProxyDeniedAdminAccess",
            "nameLocation": "4691:22:45",
            "parameters": {
              "id": 49967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4713:2:45"
            }
          },
          {
            "id": 50001,
            "nodeType": "FunctionDefinition",
            "src": "4988:296:45",
            "nodes": [],
            "body": {
              "id": 50000,
              "nodeType": "Block",
              "src": "5094:190:45",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 49991,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 49982,
                      "name": "_admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49965,
                      "src": "5104:6:45",
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
                          "arguments": [
                            {
                              "id": 49988,
                              "name": "initialOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49973,
                              "src": "5136:12:45",
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
                            "id": 49987,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "NewExpression",
                            "src": "5121:14:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_creation_nonpayable$_t_address_$returns$_t_contract$_ProxyAdmin_$49939_$",
                              "typeString": "function (address) returns (contract ProxyAdmin)"
                            },
                            "typeName": {
                              "id": 49986,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 49985,
                                "name": "ProxyAdmin",
                                "nameLocations": [
                                  "5125:10:45"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 49939,
                                "src": "5125:10:45"
                              },
                              "referencedDeclaration": 49939,
                              "src": "5125:10:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ProxyAdmin_$49939",
                                "typeString": "contract ProxyAdmin"
                              }
                            }
                          },
                          "id": 49989,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5121:28:45",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ProxyAdmin_$49939",
                            "typeString": "contract ProxyAdmin"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_ProxyAdmin_$49939",
                            "typeString": "contract ProxyAdmin"
                          }
                        ],
                        "id": 49984,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5113:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 49983,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5113:7:45",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 49990,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5113:37:45",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5104:46:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49992,
                  "nodeType": "ExpressionStatement",
                  "src": "5104:46:45"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 49996,
                          "name": "_proxyAdmin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50010,
                          "src": "5263:11:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_address_$",
                            "typeString": "function () returns (address)"
                          }
                        },
                        "id": 49997,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5263:13:45",
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
                      "expression": {
                        "id": 49993,
                        "name": "ERC1967Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49787,
                        "src": "5238:12:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC1967Utils_$49787_$",
                          "typeString": "type(library ERC1967Utils)"
                        }
                      },
                      "id": 49995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5251:11:45",
                      "memberName": "changeAdmin",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 49671,
                      "src": "5238:24:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 49998,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5238:39:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49999,
                  "nodeType": "ExpressionStatement",
                  "src": "5238:39:45"
                }
              ]
            },
            "documentation": {
              "id": 49969,
              "nodeType": "StructuredDocumentation",
              "src": "4722:261:45",
              "text": " @dev Initializes an upgradeable proxy managed by an instance of a {ProxyAdmin} with an `initialOwner`,\n backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in\n {ERC1967Proxy-constructor}."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 49978,
                    "name": "_logic",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 49971,
                    "src": "5079:6:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 49979,
                    "name": "_data",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 49975,
                    "src": "5087:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  }
                ],
                "id": 49980,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 49977,
                  "name": "ERC1967Proxy",
                  "nameLocations": [
                    "5066:12:45"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 49484,
                  "src": "5066:12:45"
                },
                "nodeType": "ModifierInvocation",
                "src": "5066:27:45"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 49976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49971,
                  "mutability": "mutable",
                  "name": "_logic",
                  "nameLocation": "5008:6:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 50001,
                  "src": "5000:14:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49970,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5000:7:45",
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
                  "id": 49973,
                  "mutability": "mutable",
                  "name": "initialOwner",
                  "nameLocation": "5024:12:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 50001,
                  "src": "5016:20:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 49972,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5016:7:45",
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
                  "id": 49975,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "5051:5:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 50001,
                  "src": "5038:18:45",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 49974,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5038:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4999:58:45"
            },
            "returnParameters": {
              "id": 49981,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5094:0:45"
            },
            "scope": 50074,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 50010,
            "nodeType": "FunctionDefinition",
            "src": "5351:88:45",
            "nodes": [],
            "body": {
              "id": 50009,
              "nodeType": "Block",
              "src": "5409:30:45",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 50007,
                    "name": "_admin",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 49965,
                    "src": "5426:6:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 50006,
                  "id": 50008,
                  "nodeType": "Return",
                  "src": "5419:13:45"
                }
              ]
            },
            "documentation": {
              "id": 50002,
              "nodeType": "StructuredDocumentation",
              "src": "5290:56:45",
              "text": " @dev Returns the admin of this proxy."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_proxyAdmin",
            "nameLocation": "5360:11:45",
            "parameters": {
              "id": 50003,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5371:2:45"
            },
            "returnParameters": {
              "id": 50006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50005,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50010,
                  "src": "5400:7:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50004,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5400:7:45",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5399:9:45"
            },
            "scope": 50074,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 50044,
            "nodeType": "FunctionDefinition",
            "src": "5581:369:45",
            "nodes": [],
            "body": {
              "id": 50043,
              "nodeType": "Block",
              "src": "5628:322:45",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 50019,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 50015,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "5642:3:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 50016,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5646:6:45",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "5642:10:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 50017,
                        "name": "_proxyAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50010,
                        "src": "5656:11:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_address_$",
                          "typeString": "function () returns (address)"
                        }
                      },
                      "id": 50018,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5656:13:45",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5642:27:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 50041,
                    "nodeType": "Block",
                    "src": "5902:42:45",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 50036,
                              "name": "super",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -25,
                              "src": "5916:5:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_super$_TransparentUpgradeableProxy_$50074_$",
                                "typeString": "type(contract super TransparentUpgradeableProxy)"
                              }
                            },
                            "id": 50038,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5922:9:45",
                            "memberName": "_fallback",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 49814,
                            "src": "5916:15:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                              "typeString": "function ()"
                            }
                          },
                          "id": 50039,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5916:17:45",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 50040,
                        "nodeType": "ExpressionStatement",
                        "src": "5916:17:45"
                      }
                    ]
                  },
                  "id": 50042,
                  "nodeType": "IfStatement",
                  "src": "5638:306:45",
                  "trueBody": {
                    "id": 50035,
                    "nodeType": "Block",
                    "src": "5671:225:45",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 50025,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 50020,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "5689:3:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 50021,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5693:3:45",
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "src": "5689:7:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "expression": {
                              "expression": {
                                "id": 50022,
                                "name": "ITransparentUpgradeableProxy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 49960,
                                "src": "5700:28:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ITransparentUpgradeableProxy_$49960_$",
                                  "typeString": "type(contract ITransparentUpgradeableProxy)"
                                }
                              },
                              "id": 50023,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "5729:16:45",
                              "memberName": "upgradeToAndCall",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 49959,
                              "src": "5700:45:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_declaration_payable$_t_address_$_t_bytes_calldata_ptr_$returns$__$",
                                "typeString": "function ITransparentUpgradeableProxy.upgradeToAndCall(address,bytes calldata) payable"
                              }
                            },
                            "id": 50024,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "5746:8:45",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "5700:54:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "5689:65:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 50033,
                          "nodeType": "Block",
                          "src": "5826:60:45",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 50030,
                                  "name": "_dispatchUpgradeToAndCall",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50073,
                                  "src": "5844:25:45",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                    "typeString": "function ()"
                                  }
                                },
                                "id": 50031,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5844:27:45",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 50032,
                              "nodeType": "ExpressionStatement",
                              "src": "5844:27:45"
                            }
                          ]
                        },
                        "id": 50034,
                        "nodeType": "IfStatement",
                        "src": "5685:201:45",
                        "trueBody": {
                          "id": 50029,
                          "nodeType": "Block",
                          "src": "5756:64:45",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 50026,
                                  "name": "ProxyDeniedAdminAccess",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 49968,
                                  "src": "5781:22:45",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 50027,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5781:24:45",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 50028,
                              "nodeType": "RevertStatement",
                              "src": "5774:31:45"
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              49814
            ],
            "documentation": {
              "id": 50011,
              "nodeType": "StructuredDocumentation",
              "src": "5445:131:45",
              "text": " @dev If caller is the admin process the call internally, otherwise transparently fallback to the proxy behavior."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_fallback",
            "nameLocation": "5590:9:45",
            "overrides": {
              "id": 50013,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5619:8:45"
            },
            "parameters": {
              "id": 50012,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5599:2:45"
            },
            "returnParameters": {
              "id": 50014,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5628:0:45"
            },
            "scope": 50074,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 50073,
            "nodeType": "FunctionDefinition",
            "src": "6152:217:45",
            "nodes": [],
            "body": {
              "id": 50072,
              "nodeType": "Block",
              "src": "6197:172:45",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    50049,
                    50051
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50049,
                      "mutability": "mutable",
                      "name": "newImplementation",
                      "nameLocation": "6216:17:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 50072,
                      "src": "6208:25:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 50048,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6208:7:45",
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
                      "id": 50051,
                      "mutability": "mutable",
                      "name": "data",
                      "nameLocation": "6248:4:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 50072,
                      "src": "6235:17:45",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 50050,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "6235:5:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50064,
                  "initialValue": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "expression": {
                            "id": 50054,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "6267:3:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50055,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6271:4:45",
                          "memberName": "data",
                          "nodeType": "MemberAccess",
                          "src": "6267:8:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
                          }
                        },
                        "id": 50057,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexRangeAccess",
                        "src": "6267:12:45",
                        "startExpression": {
                          "hexValue": "34",
                          "id": 50056,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6276:1:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4_by_1",
                            "typeString": "int_const 4"
                          },
                          "value": "4"
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr_slice",
                          "typeString": "bytes calldata slice"
                        }
                      },
                      {
                        "components": [
                          {
                            "id": 50059,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6282:7:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 50058,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6282:7:45",
                              "typeDescriptions": {}
                            }
                          },
                          {
                            "id": 50061,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6291:5:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 50060,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "6291:5:45",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "id": 50062,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6281:16:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_type$_t_address_$_$_t_type$_t_bytes_storage_ptr_$_$",
                          "typeString": "tuple(type(address),type(bytes storage pointer))"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr_slice",
                          "typeString": "bytes calldata slice"
                        },
                        {
                          "typeIdentifier": "t_tuple$_t_type$_t_address_$_$_t_type$_t_bytes_storage_ptr_$_$",
                          "typeString": "tuple(type(address),type(bytes storage pointer))"
                        }
                      ],
                      "expression": {
                        "id": 50052,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "6256:3:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 50053,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6260:6:45",
                      "memberName": "decode",
                      "nodeType": "MemberAccess",
                      "src": "6256:10:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 50063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6256:42:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_payable_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(address payable,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6207:91:45"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50068,
                        "name": "newImplementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50049,
                        "src": "6338:17:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50069,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50051,
                        "src": "6357:4:45",
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
                        "id": 50065,
                        "name": "ERC1967Utils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49787,
                        "src": "6308:12:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC1967Utils_$49787_$",
                          "typeString": "type(library ERC1967Utils)"
                        }
                      },
                      "id": 50067,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6321:16:45",
                      "memberName": "upgradeToAndCall",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 49606,
                      "src": "6308:29:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,bytes memory)"
                      }
                    },
                    "id": 50070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6308:54:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50071,
                  "nodeType": "ExpressionStatement",
                  "src": "6308:54:45"
                }
              ]
            },
            "documentation": {
              "id": 50045,
              "nodeType": "StructuredDocumentation",
              "src": "5956:191:45",
              "text": " @dev Upgrade the implementation of the proxy. See {ERC1967Utils-upgradeToAndCall}.\n Requirements:\n - If `data` is empty, `msg.value` must be zero."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_dispatchUpgradeToAndCall",
            "nameLocation": "6161:25:45",
            "parameters": {
              "id": 50046,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6186:2:45"
            },
            "returnParameters": {
              "id": 50047,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6197:0:45"
            },
            "scope": 50074,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 49962,
              "name": "ERC1967Proxy",
              "nameLocations": [
                "4185:12:45"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 49484,
              "src": "4185:12:45"
            },
            "id": 49963,
            "nodeType": "InheritanceSpecifier",
            "src": "4185:12:45"
          }
        ],
        "canonicalName": "TransparentUpgradeableProxy",
        "contractDependencies": [
          49939
        ],
        "contractKind": "contract",
        "documentation": {
          "id": 49961,
          "nodeType": "StructuredDocumentation",
          "src": "952:3192:45",
          "text": " @dev This contract implements a proxy that is upgradeable through an associated {ProxyAdmin} instance.\n To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector\n clashing], which can potentially be used in an attack, this contract uses the\n https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two\n things that go hand in hand:\n 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if\n that call matches the {ITransparentUpgradeableProxy-upgradeToAndCall} function exposed by the proxy itself.\n 2. If the admin calls the proxy, it can call the `upgradeToAndCall` function but any other call won't be forwarded to\n the implementation. If the admin tries to call a function on the implementation it will fail with an error indicating\n the proxy admin cannot fallback to the target implementation.\n These properties mean that the admin account can only be used for upgrading the proxy, so it's best if it's a\n dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to\n call a function from the proxy implementation. For this reason, the proxy deploys an instance of {ProxyAdmin} and\n allows upgrades only if they come through it. You should think of the `ProxyAdmin` instance as the administrative\n interface of the proxy, including the ability to change who can trigger upgrades by transferring ownership.\n NOTE: The real interface of this proxy is that defined in `ITransparentUpgradeableProxy`. This contract does not\n inherit from that interface, and instead `upgradeToAndCall` is implicitly implemented using a custom dispatch\n mechanism in `_fallback`. Consequently, the compiler will not produce an ABI for this contract. This is necessary to\n fully implement transparency without decoding reverts caused by selector clashes between the proxy and the\n implementation.\n NOTE: This proxy does not inherit from {Context} deliberately. The {ProxyAdmin} of this contract won't send a\n meta-transaction in any way, and any other meta-transaction setup should be made in the implementation contract.\n IMPORTANT: This contract avoids unnecessary storage reads by setting the admin only during construction as an\n immutable variable, preventing any changes thereafter. However, the admin slot defined in ERC-1967 can still be\n overwritten by the implementation logic pointed to by this proxy. In such cases, the contract may end up in an\n undesirable state where the admin slot is different from the actual admin.\n WARNING: It is not recommended to extend this contract to add additional external functions. If you do so, the\n compiler will not check that there are no selector conflicts, due to the note above. A selector clash between any new\n function and the functions declared in {ITransparentUpgradeableProxy} will be resolved in favor of the new one. This\n could render the `upgradeToAndCall` function inaccessible, preventing upgradeability and compromising transparency."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          50074,
          49484,
          49823
        ],
        "name": "TransparentUpgradeableProxy",
        "nameLocation": "4154:27:45",
        "scope": 50075,
        "usedErrors": [
          49519,
          49524,
          49532,
          49968,
          51064,
          51067
        ],
        "usedEvents": [
          49498,
          49505
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 45
} as const;