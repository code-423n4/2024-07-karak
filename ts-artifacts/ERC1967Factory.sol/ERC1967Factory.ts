export const ERC1967Factory = {
  "abi": [
    {
      "type": "function",
      "name": "adminOf",
      "inputs": [
        {
          "name": "proxy",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "admin",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "changeAdmin",
      "inputs": [
        {
          "name": "proxy",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "admin",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "deploy",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "admin",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "proxy",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "deployAndCall",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "admin",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "proxy",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "deployDeterministic",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "admin",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "proxy",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "deployDeterministicAndCall",
      "inputs": [
        {
          "name": "implementation",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "admin",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "proxy",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "initCodeHash",
      "inputs": [],
      "outputs": [
        {
          "name": "result",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "predictDeterministicAddress",
      "inputs": [
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "predicted",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "upgrade",
      "inputs": [
        {
          "name": "proxy",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "implementation",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "upgradeAndCall",
      "inputs": [
        {
          "name": "proxy",
          "type": "address",
          "internalType": "address"
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
      "name": "AdminChanged",
      "inputs": [
        {
          "name": "proxy",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "admin",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Deployed",
      "inputs": [
        {
          "name": "proxy",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "implementation",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "admin",
          "type": "address",
          "indexed": true,
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
          "name": "proxy",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
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
      "name": "DeploymentFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "SaltDoesNotStartWithCaller",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Unauthorized",
      "inputs": []
    },
    {
      "type": "error",
      "name": "UpgradeFailed",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x608080604052346015576109ef908161001b8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081631acfd02a146100ba575080632abbef15146100b55780633729f922146100b05780634314f120146100ab5780635414dff0146100a6578063545e7c61146100a15780639623609d1461009c57806399a88ec414610097578063a97b90d5146100925763db4c545e1461008d57600080fd5b610837565b61071e565b610675565b6105c7565b6104f0565b610474565b6103b3565b6101e6565b61018b565b3461013d5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013d576100f1610140565b6100f9610168565b908060601b33815403610130578290557f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f8380a380f35b6382b4290084526004601cfd5b80fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361016357565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361016357565b346101635760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101635760206101c4610140565b60601b5473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b60607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016357610218610140565b610220610168565b90604435918260601c803314901517156102fa5761023c61087e565b9160009360886013850186f59283156102ed5784604082848394527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602082015234875af1156102d157827fc95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082602095848360601b5580a473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b833d156102e0573d81803e3d90fd5b633011642590526004601cfd5b633011642585526004601cfd5b632f6348366000526004601cfd5b9181601f840112156101635782359167ffffffffffffffff8311610163576020838186019501011161016357565b60607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8201126101635773ffffffffffffffffffffffffffffffffffffffff9160043583811681036101635792602435908116810361016357916044359067ffffffffffffffff8211610163576103af91600401610308565b9091565b6103bc36610336565b926103c892919261087e565b60009460886013830187f094851561046757918187939284938684527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602085015260408401376040019034875af1156102d157827fc95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082602095848360601b5580a473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b633011642587526004601cfd5b346101635760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016357608860136104af61087e565b012060ff6000536035523060601b60015260043560155260206055600020600060355273ffffffffffffffffffffffffffffffffffffffff60405191168152f35b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016357610522610140565b61052a610168565b61053261087e565b9060009260886013840185f09283156102ed5784604082848394527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602082015234875af1156102d157827fc95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082602095848360601b5580a473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b6105d036610336565b929092338260601b54036106675780604051948486527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602087015260408601376000809481926040019034855af11561064b577f5d611f318680d00598bb735d61bacf0c514c6b50e1e5ad30040a4df2b12791c78380a380f35b823d1561065a573d81803e3d90fd5b6355299b4990526004601cfd5b6382b429006000526004601cfd5b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610163576106a7610140565b6106af610168565b338260601b54036106675760409182518281527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602082015260008094819234855af11561064b577f5d611f318680d00598bb735d61bacf0c514c6b50e1e5ad30040a4df2b12791c78380a380f35b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016357610750610140565b610758610168565b906044359160643567ffffffffffffffff81116101635761077d903690600401610308565b8460609492941c803314901517156102fa5761079761087e565b9060009560886013840188f594851561046757918187939284938684527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602085015260408401376040019034875af1156102d157827fc95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082602095848360601b5580a473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b346101635760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101635760206088601361087461087e565b0120604051908152f35b604051903060701c1561092257666052573d6000fd607b8301527f3d356020355560408036111560525736038060403d373d3d355af43d6000803e60748301527f3735a920a3ca505d382bbc545af43d6000803e6052573d6000fd5b3d6000f35b60548301527f14605757363d3d37363d7f360894a13ba1a3210667c828492db98dca3e2076cc60348301523060148301526c607f3d8160093d39f33d3d33738252565b66604c573d6000fd60758301527f3d3560203555604080361115604c5736038060403d373d3d355af43d6000803e606e8301527f3735a920a3ca505d382bbc545af43d6000803e604c573d6000fd5b3d6000f35b604e8301527f14605157363d3d37363d7f360894a13ba1a3210667c828492db98dca3e2076cc602e83015230600e8301526c60793d8160093d39f33d3d336d825256fea2646970667358221220329f569a3f6e94af2599e07345362e1c8ddb2bb12b41aa7d445db42c39564a9b64736f6c63430008190033",
    "sourceMap": "304:25100:73:-:0;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436101561001257600080fd5b6000803560e01c9081631acfd02a146100ba575080632abbef15146100b55780633729f922146100b05780634314f120146100ab5780635414dff0146100a6578063545e7c61146100a15780639623609d1461009c57806399a88ec414610097578063a97b90d5146100925763db4c545e1461008d57600080fd5b610837565b61071e565b610675565b6105c7565b6104f0565b610474565b6103b3565b6101e6565b61018b565b3461013d5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013d576100f1610140565b6100f9610168565b908060601b33815403610130578290557f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f8380a380f35b6382b4290084526004601cfd5b80fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361016357565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361016357565b346101635760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101635760206101c4610140565b60601b5473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b60607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016357610218610140565b610220610168565b90604435918260601c803314901517156102fa5761023c61087e565b9160009360886013850186f59283156102ed5784604082848394527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602082015234875af1156102d157827fc95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082602095848360601b5580a473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b833d156102e0573d81803e3d90fd5b633011642590526004601cfd5b633011642585526004601cfd5b632f6348366000526004601cfd5b9181601f840112156101635782359167ffffffffffffffff8311610163576020838186019501011161016357565b60607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8201126101635773ffffffffffffffffffffffffffffffffffffffff9160043583811681036101635792602435908116810361016357916044359067ffffffffffffffff8211610163576103af91600401610308565b9091565b6103bc36610336565b926103c892919261087e565b60009460886013830187f094851561046757918187939284938684527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602085015260408401376040019034875af1156102d157827fc95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082602095848360601b5580a473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b633011642587526004601cfd5b346101635760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016357608860136104af61087e565b012060ff6000536035523060601b60015260043560155260206055600020600060355273ffffffffffffffffffffffffffffffffffffffff60405191168152f35b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016357610522610140565b61052a610168565b61053261087e565b9060009260886013840185f09283156102ed5784604082848394527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602082015234875af1156102d157827fc95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082602095848360601b5580a473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b6105d036610336565b929092338260601b54036106675780604051948486527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602087015260408601376000809481926040019034855af11561064b577f5d611f318680d00598bb735d61bacf0c514c6b50e1e5ad30040a4df2b12791c78380a380f35b823d1561065a573d81803e3d90fd5b6355299b4990526004601cfd5b6382b429006000526004601cfd5b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610163576106a7610140565b6106af610168565b338260601b54036106675760409182518281527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602082015260008094819234855af11561064b577f5d611f318680d00598bb735d61bacf0c514c6b50e1e5ad30040a4df2b12791c78380a380f35b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016357610750610140565b610758610168565b906044359160643567ffffffffffffffff81116101635761077d903690600401610308565b8460609492941c803314901517156102fa5761079761087e565b9060009560886013840188f594851561046757918187939284938684527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc602085015260408401376040019034875af1156102d157827fc95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082602095848360601b5580a473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b346101635760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101635760206088601361087461087e565b0120604051908152f35b604051903060701c1561092257666052573d6000fd607b8301527f3d356020355560408036111560525736038060403d373d3d355af43d6000803e60748301527f3735a920a3ca505d382bbc545af43d6000803e6052573d6000fd5b3d6000f35b60548301527f14605757363d3d37363d7f360894a13ba1a3210667c828492db98dca3e2076cc60348301523060148301526c607f3d8160093d39f33d3d33738252565b66604c573d6000fd60758301527f3d3560203555604080361115604c5736038060403d373d3d355af43d6000803e606e8301527f3735a920a3ca505d382bbc545af43d6000803e604c573d6000fd5b3d6000f35b604e8301527f14605157363d3d37363d7f360894a13ba1a3210667c828492db98dca3e2076cc602e83015230600e8301526c60793d8160093d39f33d3d336d825256fea2646970667358221220329f569a3f6e94af2599e07345362e1c8ddb2bb12b41aa7d445db42c39564a9b64736f6c63430008190033",
    "sourceMap": "304:25100:73:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;:::i;:::-;4103:454;;;;;;;;;;;;;;;;;304:25100;;4103:454;;;;304:25100;4103:454;;304:25100;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;:::i;:::-;3834:63;;;304:25100;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::i;:::-;;;;8692:306;;304:25100;8692:306;;;;;;;;;;9374:11;;:::i;:::-;-1:-1:-1;;9395:1476:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;304:25100;9395:1476;;;;304:25100;9395:1476;304:25100;;;;;;9395:1476;;;;;;;;;;;;;;;;;;;;;;;;;;;8692:306;;-1:-1:-1;8692:306:73;;;;304:25100;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;:::i;:::-;9374:11;;;;;;:::i;:::-;-1:-1:-1;9395:1476:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;304:25100;9395:1476;304:25100;;;;;;9395:1476;;;;;;;304:25100;;;;;;;;;;;11975:72;;11954:11;;:::i;:::-;11975:72;;11091:643;-1:-1:-1;11091:643:73;;;;;;;;304:25100;;11091:643;;304:25100;11091:643;-1:-1:-1;11091:643:73;-1:-1:-1;11091:643:73;;304:25100;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::i;:::-;9374:11;;:::i;:::-;-1:-1:-1;;9395:1476:73;;;;;;;;;;;;;304:25100;9395:1476;;;;;;;;;;;;;;;;;;;;;;;;;;;;304:25100;;;;;;;;;;;;:::i;:::-;5473:1217;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;304:25100;;5473:1217;;;;;;;;;;;;;;;;;;;;;;;;;;;304:25100;;;;;;;;;;:::i;:::-;;;:::i;:::-;5473:1217;;;;;;;;304:25100;5473:1217;;;;;;;;;;;25347:49;5473:1217;;;;;;;;;;;;;;;304:25100;;;;;;;;;;;;:::i;:::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;8692:306;;;;;;;;;;;;;;;9374:11;;:::i;:::-;-1:-1:-1;;9395:1476:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8692:306;9395:1476;;;;304:25100;9395:1476;304:25100;;;;;;;;;;;;;;;;;;11975:72;;11954:11;;:::i;:::-;11975:72;;304:25100;;;;;;12154:12764;12219:12693;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12154:12764::o;12219:12693::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12154:12764::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "adminOf(address)": "2abbef15",
    "changeAdmin(address,address)": "1acfd02a",
    "deploy(address,address)": "545e7c61",
    "deployAndCall(address,address,bytes)": "4314f120",
    "deployDeterministic(address,address,bytes32)": "3729f922",
    "deployDeterministicAndCall(address,address,bytes32,bytes)": "a97b90d5",
    "initCodeHash()": "db4c545e",
    "predictDeterministicAddress(bytes32)": "5414dff0",
    "upgrade(address,address)": "99a88ec4",
    "upgradeAndCall(address,address,bytes)": "9623609d"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SaltDoesNotStartWithCaller\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpgradeFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"}],\"name\":\"adminOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"changeAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"deployAndCall\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"}],\"name\":\"deployDeterministic\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"deployDeterministicAndCall\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"result\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"}],\"name\":\"predictDeterministicAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"predicted\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"upgrade\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"proxy\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/utils/ERC1967Factory.sol)jtriley-eth (https://github.com/jtriley-eth/minimum-viable-proxy)\",\"errors\":{\"DeploymentFailed()\":[{\"details\":\"The proxy deployment failed.\"}],\"SaltDoesNotStartWithCaller()\":[{\"details\":\"The salt does not start with the caller.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}],\"UpgradeFailed()\":[{\"details\":\"The upgrade failed.\"}]},\"events\":{\"AdminChanged(address,address)\":{\"details\":\"The admin of a proxy contract has been changed.\"},\"Deployed(address,address,address)\":{\"details\":\"A proxy has been deployed.\"},\"Upgraded(address,address)\":{\"details\":\"The implementation for a proxy has been upgraded.\"}},\"kind\":\"dev\",\"methods\":{\"adminOf(address)\":{\"details\":\"Returns the admin of the proxy.\"},\"changeAdmin(address,address)\":{\"details\":\"Sets the admin of the proxy. The caller of this function must be the admin of the proxy on this factory.\"},\"deploy(address,address)\":{\"details\":\"Deploys a proxy for `implementation`, with `admin`, and returns its address. The value passed into this function will be forwarded to the proxy.\"},\"deployAndCall(address,address,bytes)\":{\"details\":\"Deploys a proxy for `implementation`, with `admin`, and returns its address. The value passed into this function will be forwarded to the proxy. Then, calls the proxy with abi encoded `data`.\"},\"deployDeterministic(address,address,bytes32)\":{\"details\":\"Deploys a proxy for `implementation`, with `admin`, `salt`, and returns its deterministic address. The value passed into this function will be forwarded to the proxy.\"},\"deployDeterministicAndCall(address,address,bytes32,bytes)\":{\"details\":\"Deploys a proxy for `implementation`, with `admin`, `salt`, and returns its deterministic address. The value passed into this function will be forwarded to the proxy. Then, calls the proxy with abi encoded `data`.\"},\"initCodeHash()\":{\"details\":\"Returns the initialization code hash of the proxy. Used for mining vanity addresses with create2crunch.\"},\"predictDeterministicAddress(bytes32)\":{\"details\":\"Returns the address of the proxy deployed with `salt`.\"},\"upgrade(address,address)\":{\"details\":\"Upgrades the proxy to point to `implementation`. The caller of this function must be the admin of the proxy on this factory.\"},\"upgradeAndCall(address,address,bytes)\":{\"details\":\"Upgrades the proxy to point to `implementation`. Then, calls the proxy with abi encoded `data`. The caller of this function must be the admin of the proxy on this factory.\"}},\"stateVariables\":{\"_ADMIN_CHANGED_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"AdminChanged(address,address)\\\"))`.\"},\"_DEPLOYED_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"Deployed(address,address,address)\\\"))`.\"},\"_DEPLOYMENT_FAILED_ERROR_SELECTOR\":{\"details\":\"`bytes4(keccak256(bytes(\\\"DeploymentFailed()\\\")))`.\"},\"_IMPLEMENTATION_SLOT\":{\"details\":\"The ERC-1967 storage slot for the implementation in the proxy. `uint256(keccak256(\\\"eip1967.proxy.implementation\\\")) - 1`.\"},\"_SALT_DOES_NOT_START_WITH_CALLER_ERROR_SELECTOR\":{\"details\":\"`bytes4(keccak256(bytes(\\\"SaltDoesNotStartWithCaller()\\\")))`.\"},\"_UNAUTHORIZED_ERROR_SELECTOR\":{\"details\":\"`bytes4(keccak256(bytes(\\\"Unauthorized()\\\")))`.\"},\"_UPGRADED_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"Upgraded(address,address)\\\"))`.\"},\"_UPGRADE_FAILED_ERROR_SELECTOR\":{\"details\":\"`bytes4(keccak256(bytes(\\\"UpgradeFailed()\\\")))`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Factory for deploying and managing ERC1967 proxy contracts.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/utils/ERC1967Factory.sol\":\"ERC1967Factory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/utils/ERC1967Factory.sol\":{\"keccak256\":\"0xffc6d7d03b7aee472e9cbf99f38493fad9438770d60fc637b5ef2dbb31b02403\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://533c1905bf8f5a6c5bf420cc4e3e788b22f96c47c07a8d3efe21201fab4f5541\",\"dweb:/ipfs/QmTpaCQLi8Cv2awEE4j7cgoaV71qPQhMyo3ggPJY8uEKjt\"]}},\"version\":1}",
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
          "name": "DeploymentFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "SaltDoesNotStartWithCaller"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UpgradeFailed"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "proxy",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "admin",
              "type": "address",
              "indexed": true
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
              "name": "proxy",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "admin",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Deployed",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "proxy",
              "type": "address",
              "indexed": true
            },
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
          "inputs": [
            {
              "internalType": "address",
              "name": "proxy",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "adminOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "admin",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "proxy",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "admin",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "changeAdmin"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "admin",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "deploy",
          "outputs": [
            {
              "internalType": "address",
              "name": "proxy",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "admin",
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
          "name": "deployAndCall",
          "outputs": [
            {
              "internalType": "address",
              "name": "proxy",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "admin",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "deployDeterministic",
          "outputs": [
            {
              "internalType": "address",
              "name": "proxy",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "admin",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "deployDeterministicAndCall",
          "outputs": [
            {
              "internalType": "address",
              "name": "proxy",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "initCodeHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "result",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "predictDeterministicAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "predicted",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "proxy",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "upgrade"
        },
        {
          "inputs": [
            {
              "internalType": "address",
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
          "adminOf(address)": {
            "details": "Returns the admin of the proxy."
          },
          "changeAdmin(address,address)": {
            "details": "Sets the admin of the proxy. The caller of this function must be the admin of the proxy on this factory."
          },
          "deploy(address,address)": {
            "details": "Deploys a proxy for `implementation`, with `admin`, and returns its address. The value passed into this function will be forwarded to the proxy."
          },
          "deployAndCall(address,address,bytes)": {
            "details": "Deploys a proxy for `implementation`, with `admin`, and returns its address. The value passed into this function will be forwarded to the proxy. Then, calls the proxy with abi encoded `data`."
          },
          "deployDeterministic(address,address,bytes32)": {
            "details": "Deploys a proxy for `implementation`, with `admin`, `salt`, and returns its deterministic address. The value passed into this function will be forwarded to the proxy."
          },
          "deployDeterministicAndCall(address,address,bytes32,bytes)": {
            "details": "Deploys a proxy for `implementation`, with `admin`, `salt`, and returns its deterministic address. The value passed into this function will be forwarded to the proxy. Then, calls the proxy with abi encoded `data`."
          },
          "initCodeHash()": {
            "details": "Returns the initialization code hash of the proxy. Used for mining vanity addresses with create2crunch."
          },
          "predictDeterministicAddress(bytes32)": {
            "details": "Returns the address of the proxy deployed with `salt`."
          },
          "upgrade(address,address)": {
            "details": "Upgrades the proxy to point to `implementation`. The caller of this function must be the admin of the proxy on this factory."
          },
          "upgradeAndCall(address,address,bytes)": {
            "details": "Upgrades the proxy to point to `implementation`. Then, calls the proxy with abi encoded `data`. The caller of this function must be the admin of the proxy on this factory."
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
        "node_modules/solady/src/utils/ERC1967Factory.sol": "ERC1967Factory"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/solady/src/utils/ERC1967Factory.sol": {
        "keccak256": "0xffc6d7d03b7aee472e9cbf99f38493fad9438770d60fc637b5ef2dbb31b02403",
        "urls": [
          "bzz-raw://533c1905bf8f5a6c5bf420cc4e3e788b22f96c47c07a8d3efe21201fab4f5541",
          "dweb:/ipfs/QmTpaCQLi8Cv2awEE4j7cgoaV71qPQhMyo3ggPJY8uEKjt"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/utils/ERC1967Factory.sol",
    "id": 57201,
    "exportedSymbols": {
      "ERC1967Factory": [
        57200
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:25373:73",
    "nodes": [
      {
        "id": 56921,
        "nodeType": "PragmaDirective",
        "src": "32:23:73",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 57200,
        "nodeType": "ContractDefinition",
        "src": "304:25100:73",
        "nodes": [
          {
            "id": 56925,
            "nodeType": "ErrorDefinition",
            "src": "681:21:73",
            "nodes": [],
            "documentation": {
              "id": 56923,
              "nodeType": "StructuredDocumentation",
              "src": "617:59:73",
              "text": "@dev The caller is not authorized to call the function."
            },
            "errorSelector": "82b42900",
            "name": "Unauthorized",
            "nameLocation": "687:12:73",
            "parameters": {
              "id": 56924,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "699:2:73"
            }
          },
          {
            "id": 56928,
            "nodeType": "ErrorDefinition",
            "src": "750:25:73",
            "nodes": [],
            "documentation": {
              "id": 56926,
              "nodeType": "StructuredDocumentation",
              "src": "708:37:73",
              "text": "@dev The proxy deployment failed."
            },
            "errorSelector": "30116425",
            "name": "DeploymentFailed",
            "nameLocation": "756:16:73",
            "parameters": {
              "id": 56927,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "772:2:73"
            }
          },
          {
            "id": 56931,
            "nodeType": "ErrorDefinition",
            "src": "814:22:73",
            "nodes": [],
            "documentation": {
              "id": 56929,
              "nodeType": "StructuredDocumentation",
              "src": "781:28:73",
              "text": "@dev The upgrade failed."
            },
            "errorSelector": "55299b49",
            "name": "UpgradeFailed",
            "nameLocation": "820:13:73",
            "parameters": {
              "id": 56930,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "833:2:73"
            }
          },
          {
            "id": 56934,
            "nodeType": "ErrorDefinition",
            "src": "896:35:73",
            "nodes": [],
            "documentation": {
              "id": 56932,
              "nodeType": "StructuredDocumentation",
              "src": "842:49:73",
              "text": "@dev The salt does not start with the caller."
            },
            "errorSelector": "2f634836",
            "name": "SaltDoesNotStartWithCaller",
            "nameLocation": "902:26:73",
            "parameters": {
              "id": 56933,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "928:2:73"
            }
          },
          {
            "id": 56938,
            "nodeType": "VariableDeclaration",
            "src": "996:67:73",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56935,
              "nodeType": "StructuredDocumentation",
              "src": "937:54:73",
              "text": "@dev `bytes4(keccak256(bytes(\"Unauthorized()\")))`."
            },
            "mutability": "constant",
            "name": "_UNAUTHORIZED_ERROR_SELECTOR",
            "nameLocation": "1022:28:73",
            "scope": 57200,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56936,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "996:7:73",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783832623432393030",
              "id": 56937,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1053:10:73",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2192845056_by_1",
                "typeString": "int_const 2192845056"
              },
              "value": "0x82b42900"
            },
            "visibility": "internal"
          },
          {
            "id": 56942,
            "nodeType": "VariableDeclaration",
            "src": "1133:72:73",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56939,
              "nodeType": "StructuredDocumentation",
              "src": "1070:58:73",
              "text": "@dev `bytes4(keccak256(bytes(\"DeploymentFailed()\")))`."
            },
            "mutability": "constant",
            "name": "_DEPLOYMENT_FAILED_ERROR_SELECTOR",
            "nameLocation": "1159:33:73",
            "scope": 57200,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56940,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1133:7:73",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783330313136343235",
              "id": 56941,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1195:10:73",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_806446117_by_1",
                "typeString": "int_const 806446117"
              },
              "value": "0x30116425"
            },
            "visibility": "internal"
          },
          {
            "id": 56946,
            "nodeType": "VariableDeclaration",
            "src": "1272:69:73",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56943,
              "nodeType": "StructuredDocumentation",
              "src": "1212:55:73",
              "text": "@dev `bytes4(keccak256(bytes(\"UpgradeFailed()\")))`."
            },
            "mutability": "constant",
            "name": "_UPGRADE_FAILED_ERROR_SELECTOR",
            "nameLocation": "1298:30:73",
            "scope": 57200,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56944,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1272:7:73",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783535323939623439",
              "id": 56945,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1331:10:73",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1428790089_by_1",
                "typeString": "int_const 1428790089"
              },
              "value": "0x55299b49"
            },
            "visibility": "internal"
          },
          {
            "id": 56950,
            "nodeType": "VariableDeclaration",
            "src": "1421:86:73",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56947,
              "nodeType": "StructuredDocumentation",
              "src": "1348:68:73",
              "text": "@dev `bytes4(keccak256(bytes(\"SaltDoesNotStartWithCaller()\")))`."
            },
            "mutability": "constant",
            "name": "_SALT_DOES_NOT_START_WITH_CALLER_ERROR_SELECTOR",
            "nameLocation": "1447:47:73",
            "scope": 57200,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56948,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1421:7:73",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783266363334383336",
              "id": 56949,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1497:10:73",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_795035702_by_1",
                "typeString": "int_const 795035702"
              },
              "value": "0x2f634836"
            },
            "visibility": "internal"
          },
          {
            "id": 56957,
            "nodeType": "EventDefinition",
            "src": "1858:65:73",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 56951,
              "nodeType": "StructuredDocumentation",
              "src": "1797:56:73",
              "text": "@dev The admin of a proxy contract has been changed."
            },
            "eventSelector": "7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f",
            "name": "AdminChanged",
            "nameLocation": "1864:12:73",
            "parameters": {
              "id": 56956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56953,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "1893:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 56957,
                  "src": "1877:21:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56952,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1877:7:73",
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
                  "id": 56955,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "1916:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 56957,
                  "src": "1900:21:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56954,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1900:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1876:46:73"
            }
          },
          {
            "id": 56964,
            "nodeType": "EventDefinition",
            "src": "1992:70:73",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 56958,
              "nodeType": "StructuredDocumentation",
              "src": "1929:58:73",
              "text": "@dev The implementation for a proxy has been upgraded."
            },
            "eventSelector": "5d611f318680d00598bb735d61bacf0c514c6b50e1e5ad30040a4df2b12791c7",
            "name": "Upgraded",
            "nameLocation": "1998:8:73",
            "parameters": {
              "id": 56963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56960,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "2023:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 56964,
                  "src": "2007:21:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56959,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2007:7:73",
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
                  "id": 56962,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "2046:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 56964,
                  "src": "2030:30:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56961,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2030:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2006:55:73"
            }
          },
          {
            "id": 56973,
            "nodeType": "EventDefinition",
            "src": "2108:93:73",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 56965,
              "nodeType": "StructuredDocumentation",
              "src": "2068:35:73",
              "text": "@dev A proxy has been deployed."
            },
            "eventSelector": "c95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082",
            "name": "Deployed",
            "nameLocation": "2114:8:73",
            "parameters": {
              "id": 56972,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56967,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "2139:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 56973,
                  "src": "2123:21:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56966,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:73",
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
                  "id": 56969,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "2162:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 56973,
                  "src": "2146:30:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56968,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2146:7:73",
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
                  "id": 56971,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "2194:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 56973,
                  "src": "2178:21:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56970,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2178:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2122:78:73"
            }
          },
          {
            "id": 56977,
            "nodeType": "VariableDeclaration",
            "src": "2273:133:73",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56974,
              "nodeType": "StructuredDocumentation",
              "src": "2207:61:73",
              "text": "@dev `keccak256(bytes(\"AdminChanged(address,address)\"))`."
            },
            "mutability": "constant",
            "name": "_ADMIN_CHANGED_EVENT_SIGNATURE",
            "nameLocation": "2299:30:73",
            "scope": 57200,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56975,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2273:7:73",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307837653634346437393432326631376330316534383934623566346635383864333331656266613238363533643432616538333264633539653338633937393866",
              "id": 56976,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2340:66:73",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_57168638331561637060830620937878871246875502369269713186874178039217247582607_by_1",
                "typeString": "int_const 5716...(69 digits omitted)...2607"
              },
              "value": "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f"
            },
            "visibility": "internal"
          },
          {
            "id": 56981,
            "nodeType": "VariableDeclaration",
            "src": "2475:128:73",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56978,
              "nodeType": "StructuredDocumentation",
              "src": "2413:57:73",
              "text": "@dev `keccak256(bytes(\"Upgraded(address,address)\"))`."
            },
            "mutability": "constant",
            "name": "_UPGRADED_EVENT_SIGNATURE",
            "nameLocation": "2501:25:73",
            "scope": 57200,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56979,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2475:7:73",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307835643631316633313836383064303035393862623733356436316261636630633531346336623530653165356164333030343061346466326231323739316337",
              "id": 56980,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2537:66:73",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_42236694372866252104212126689261133396281684898517545219612633272862953148871_by_1",
                "typeString": "int_const 4223...(69 digits omitted)...8871"
              },
              "value": "0x5d611f318680d00598bb735d61bacf0c514c6b50e1e5ad30040a4df2b12791c7"
            },
            "visibility": "internal"
          },
          {
            "id": 56985,
            "nodeType": "VariableDeclaration",
            "src": "2680:128:73",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56982,
              "nodeType": "StructuredDocumentation",
              "src": "2610:65:73",
              "text": "@dev `keccak256(bytes(\"Deployed(address,address,address)\"))`."
            },
            "mutability": "constant",
            "name": "_DEPLOYED_EVENT_SIGNATURE",
            "nameLocation": "2706:25:73",
            "scope": 57200,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56983,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2680:7:73",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307863393539333561363664313565306461356534313261636130616432376165383931643230623266623931636633393934623661336266326238313738303832",
              "id": 56984,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2742:66:73",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_91072502233397386930897886708439230157581363101522260003772868463460485660802_by_1",
                "typeString": "int_const 9107...(69 digits omitted)...0802"
              },
              "value": "0xc95935a66d15e0da5e412aca0ad27ae891d20b2fb91cf3994b6a3bf2b8178082"
            },
            "visibility": "internal"
          },
          {
            "id": 56989,
            "nodeType": "VariableDeclaration",
            "src": "3298:123:73",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 56986,
              "nodeType": "StructuredDocumentation",
              "src": "3156:137:73",
              "text": "@dev The ERC-1967 storage slot for the implementation in the proxy.\n `uint256(keccak256(\"eip1967.proxy.implementation\")) - 1`."
            },
            "mutability": "constant",
            "name": "_IMPLEMENTATION_SLOT",
            "nameLocation": "3324:20:73",
            "scope": 57200,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 56987,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3298:7:73",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307833363038393461313362613161333231303636376338323834393264623938646361336532303736636333373335613932306133636135303564333832626263",
              "id": 56988,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3355:66:73",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_24440054405305269366569402256811496959409073762505157381672968839269610695612_by_1",
                "typeString": "int_const 2444...(69 digits omitted)...5612"
              },
              "value": "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
            },
            "visibility": "internal"
          },
          {
            "id": 56999,
            "nodeType": "FunctionDefinition",
            "src": "3756:147:73",
            "nodes": [],
            "body": {
              "id": 56998,
              "nodeType": "Block",
              "src": "3824:79:73",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3843:54:73",
                    "nodeType": "YulBlock",
                    "src": "3843:54:73",
                    "statements": [
                      {
                        "nativeSrc": "3857:30:73",
                        "nodeType": "YulAssignment",
                        "src": "3857:30:73",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "3876:2:73",
                                  "nodeType": "YulLiteral",
                                  "src": "3876:2:73",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "proxy",
                                  "nativeSrc": "3880:5:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "3880:5:73"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "3872:3:73",
                                "nodeType": "YulIdentifier",
                                "src": "3872:3:73"
                              },
                              "nativeSrc": "3872:14:73",
                              "nodeType": "YulFunctionCall",
                              "src": "3872:14:73"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "3866:5:73",
                            "nodeType": "YulIdentifier",
                            "src": "3866:5:73"
                          },
                          "nativeSrc": "3866:21:73",
                          "nodeType": "YulFunctionCall",
                          "src": "3866:21:73"
                        },
                        "variableNames": [
                          {
                            "name": "admin",
                            "nativeSrc": "3857:5:73",
                            "nodeType": "YulIdentifier",
                            "src": "3857:5:73"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56995,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3857:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56992,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3880:5:73",
                      "valueSize": 1
                    }
                  ],
                  "id": 56997,
                  "nodeType": "InlineAssembly",
                  "src": "3834:63:73"
                }
              ]
            },
            "documentation": {
              "id": 56990,
              "nodeType": "StructuredDocumentation",
              "src": "3711:40:73",
              "text": "@dev Returns the admin of the proxy."
            },
            "functionSelector": "2abbef15",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "adminOf",
            "nameLocation": "3765:7:73",
            "parameters": {
              "id": 56993,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56992,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "3781:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 56999,
                  "src": "3773:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56991,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3773:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3772:15:73"
            },
            "returnParameters": {
              "id": 56996,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56995,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "3817:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 56999,
                  "src": "3809:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56994,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3809:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3808:15:73"
            },
            "scope": 57200,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57009,
            "nodeType": "FunctionDefinition",
            "src": "4035:528:73",
            "nodes": [],
            "body": {
              "id": 57008,
              "nodeType": "Block",
              "src": "4093:470:73",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4112:445:73",
                    "nodeType": "YulBlock",
                    "src": "4112:445:73",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "4235:109:73",
                          "nodeType": "YulBlock",
                          "src": "4235:109:73",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4260:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "4260:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "_UNAUTHORIZED_ERROR_SELECTOR",
                                    "nativeSrc": "4266:28:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "4266:28:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "4253:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "4253:6:73"
                                },
                                "nativeSrc": "4253:42:73",
                                "nodeType": "YulFunctionCall",
                                "src": "4253:42:73"
                              },
                              "nativeSrc": "4253:42:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "4253:42:73"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4319:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "4319:4:73",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4325:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "4325:4:73",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "4312:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "4312:6:73"
                                },
                                "nativeSrc": "4312:18:73",
                                "nodeType": "YulFunctionCall",
                                "src": "4312:18:73"
                              },
                              "nativeSrc": "4312:18:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "4312:18:73"
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
                                          "kind": "number",
                                          "nativeSrc": "4211:2:73",
                                          "nodeType": "YulLiteral",
                                          "src": "4211:2:73",
                                          "type": "",
                                          "value": "96"
                                        },
                                        {
                                          "name": "proxy",
                                          "nativeSrc": "4215:5:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "4215:5:73"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nativeSrc": "4207:3:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "4207:3:73"
                                      },
                                      "nativeSrc": "4207:14:73",
                                      "nodeType": "YulFunctionCall",
                                      "src": "4207:14:73"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "4201:5:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "4201:5:73"
                                  },
                                  "nativeSrc": "4201:21:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4201:21:73"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "caller",
                                    "nativeSrc": "4224:6:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "4224:6:73"
                                  },
                                  "nativeSrc": "4224:8:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4224:8:73"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "4198:2:73",
                                "nodeType": "YulIdentifier",
                                "src": "4198:2:73"
                              },
                              "nativeSrc": "4198:35:73",
                              "nodeType": "YulFunctionCall",
                              "src": "4198:35:73"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "4191:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "4191:6:73"
                          },
                          "nativeSrc": "4191:43:73",
                          "nodeType": "YulFunctionCall",
                          "src": "4191:43:73"
                        },
                        "nativeSrc": "4188:156:73",
                        "nodeType": "YulIf",
                        "src": "4188:156:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "4414:2:73",
                                  "nodeType": "YulLiteral",
                                  "src": "4414:2:73",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "proxy",
                                  "nativeSrc": "4418:5:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "4418:5:73"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "4410:3:73",
                                "nodeType": "YulIdentifier",
                                "src": "4410:3:73"
                              },
                              "nativeSrc": "4410:14:73",
                              "nodeType": "YulFunctionCall",
                              "src": "4410:14:73"
                            },
                            {
                              "name": "admin",
                              "nativeSrc": "4426:5:73",
                              "nodeType": "YulIdentifier",
                              "src": "4426:5:73"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "4403:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "4403:6:73"
                          },
                          "nativeSrc": "4403:29:73",
                          "nodeType": "YulFunctionCall",
                          "src": "4403:29:73"
                        },
                        "nativeSrc": "4403:29:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "4403:29:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4496:1:73",
                              "nodeType": "YulLiteral",
                              "src": "4496:1:73",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4499:1:73",
                              "nodeType": "YulLiteral",
                              "src": "4499:1:73",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "name": "_ADMIN_CHANGED_EVENT_SIGNATURE",
                              "nativeSrc": "4502:30:73",
                              "nodeType": "YulIdentifier",
                              "src": "4502:30:73"
                            },
                            {
                              "name": "proxy",
                              "nativeSrc": "4534:5:73",
                              "nodeType": "YulIdentifier",
                              "src": "4534:5:73"
                            },
                            {
                              "name": "admin",
                              "nativeSrc": "4541:5:73",
                              "nodeType": "YulIdentifier",
                              "src": "4541:5:73"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "4491:4:73",
                            "nodeType": "YulIdentifier",
                            "src": "4491:4:73"
                          },
                          "nativeSrc": "4491:56:73",
                          "nodeType": "YulFunctionCall",
                          "src": "4491:56:73"
                        },
                        "nativeSrc": "4491:56:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "4491:56:73"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56977,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4502:30:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56938,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4266:28:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57004,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4426:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57004,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4541:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57002,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4215:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57002,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4418:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57002,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4534:5:73",
                      "valueSize": 1
                    }
                  ],
                  "id": 57007,
                  "nodeType": "InlineAssembly",
                  "src": "4103:454:73"
                }
              ]
            },
            "documentation": {
              "id": 57000,
              "nodeType": "StructuredDocumentation",
              "src": "3909:121:73",
              "text": "@dev Sets the admin of the proxy.\n The caller of this function must be the admin of the proxy on this factory."
            },
            "functionSelector": "1acfd02a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "changeAdmin",
            "nameLocation": "4044:11:73",
            "parameters": {
              "id": 57005,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57002,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "4064:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57009,
                  "src": "4056:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57001,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4056:7:73",
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
                  "id": 57004,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "4079:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57009,
                  "src": "4071:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57003,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4071:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4055:30:73"
            },
            "returnParameters": {
              "id": 57006,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4093:0:73"
            },
            "scope": 57200,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57025,
            "nodeType": "FunctionDefinition",
            "src": "4998:139:73",
            "nodes": [],
            "body": {
              "id": 57024,
              "nodeType": "Block",
              "src": "5069:68:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 57018,
                        "name": "proxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57012,
                        "src": "5094:5:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 57019,
                        "name": "implementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57014,
                        "src": "5101:14:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 57020,
                          "name": "_emptyData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57199,
                          "src": "5117:10:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bytes_calldata_ptr_$",
                            "typeString": "function () pure returns (bytes calldata)"
                          }
                        },
                        "id": 57021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5117:12:73",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
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
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "id": 57017,
                      "name": "upgradeAndCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57037,
                      "src": "5079:14:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_bytes_calldata_ptr_$returns$__$",
                        "typeString": "function (address,address,bytes calldata)"
                      }
                    },
                    "id": 57022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5079:51:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57023,
                  "nodeType": "ExpressionStatement",
                  "src": "5079:51:73"
                }
              ]
            },
            "documentation": {
              "id": 57010,
              "nodeType": "StructuredDocumentation",
              "src": "4852:141:73",
              "text": "@dev Upgrades the proxy to point to `implementation`.\n The caller of this function must be the admin of the proxy on this factory."
            },
            "functionSelector": "99a88ec4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upgrade",
            "nameLocation": "5007:7:73",
            "parameters": {
              "id": 57015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57012,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "5023:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57025,
                  "src": "5015:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57011,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5015:7:73",
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
                  "id": 57014,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "5038:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57025,
                  "src": "5030:22:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57013,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5030:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5014:39:73"
            },
            "returnParameters": {
              "id": 57016,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5069:0:73"
            },
            "scope": 57200,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57037,
            "nodeType": "FunctionDefinition",
            "src": "5344:1352:73",
            "nodes": [],
            "body": {
              "id": 57036,
              "nodeType": "Block",
              "src": "5463:1233:73",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "5482:1208:73",
                    "nodeType": "YulBlock",
                    "src": "5482:1208:73",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "5605:109:73",
                          "nodeType": "YulBlock",
                          "src": "5605:109:73",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5630:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "5630:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "_UNAUTHORIZED_ERROR_SELECTOR",
                                    "nativeSrc": "5636:28:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "5636:28:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "5623:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "5623:6:73"
                                },
                                "nativeSrc": "5623:42:73",
                                "nodeType": "YulFunctionCall",
                                "src": "5623:42:73"
                              },
                              "nativeSrc": "5623:42:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "5623:42:73"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5689:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "5689:4:73",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5695:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "5695:4:73",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "5682:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "5682:6:73"
                                },
                                "nativeSrc": "5682:18:73",
                                "nodeType": "YulFunctionCall",
                                "src": "5682:18:73"
                              },
                              "nativeSrc": "5682:18:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "5682:18:73"
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
                                          "kind": "number",
                                          "nativeSrc": "5581:2:73",
                                          "nodeType": "YulLiteral",
                                          "src": "5581:2:73",
                                          "type": "",
                                          "value": "96"
                                        },
                                        {
                                          "name": "proxy",
                                          "nativeSrc": "5585:5:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "5585:5:73"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nativeSrc": "5577:3:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "5577:3:73"
                                      },
                                      "nativeSrc": "5577:14:73",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5577:14:73"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "5571:5:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "5571:5:73"
                                  },
                                  "nativeSrc": "5571:21:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5571:21:73"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "caller",
                                    "nativeSrc": "5594:6:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "5594:6:73"
                                  },
                                  "nativeSrc": "5594:8:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5594:8:73"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "5568:2:73",
                                "nodeType": "YulIdentifier",
                                "src": "5568:2:73"
                              },
                              "nativeSrc": "5568:35:73",
                              "nodeType": "YulFunctionCall",
                              "src": "5568:35:73"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "5561:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "5561:6:73"
                          },
                          "nativeSrc": "5561:43:73",
                          "nodeType": "YulFunctionCall",
                          "src": "5561:43:73"
                        },
                        "nativeSrc": "5558:156:73",
                        "nodeType": "YulIf",
                        "src": "5558:156:73"
                      },
                      {
                        "nativeSrc": "5784:20:73",
                        "nodeType": "YulVariableDeclaration",
                        "src": "5784:20:73",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "5799:4:73",
                              "nodeType": "YulLiteral",
                              "src": "5799:4:73",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "5793:5:73",
                            "nodeType": "YulIdentifier",
                            "src": "5793:5:73"
                          },
                          "nativeSrc": "5793:11:73",
                          "nodeType": "YulFunctionCall",
                          "src": "5793:11:73"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "5788:1:73",
                            "nodeType": "YulTypedName",
                            "src": "5788:1:73",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "5824:1:73",
                              "nodeType": "YulIdentifier",
                              "src": "5824:1:73"
                            },
                            {
                              "name": "implementation",
                              "nativeSrc": "5827:14:73",
                              "nodeType": "YulIdentifier",
                              "src": "5827:14:73"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5817:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "5817:6:73"
                          },
                          "nativeSrc": "5817:25:73",
                          "nodeType": "YulFunctionCall",
                          "src": "5817:25:73"
                        },
                        "nativeSrc": "5817:25:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "5817:25:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "5866:1:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "5866:1:73"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5869:4:73",
                                  "nodeType": "YulLiteral",
                                  "src": "5869:4:73",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "5862:3:73",
                                "nodeType": "YulIdentifier",
                                "src": "5862:3:73"
                              },
                              "nativeSrc": "5862:12:73",
                              "nodeType": "YulFunctionCall",
                              "src": "5862:12:73"
                            },
                            {
                              "name": "_IMPLEMENTATION_SLOT",
                              "nativeSrc": "5876:20:73",
                              "nodeType": "YulIdentifier",
                              "src": "5876:20:73"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5855:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "5855:6:73"
                          },
                          "nativeSrc": "5855:42:73",
                          "nodeType": "YulFunctionCall",
                          "src": "5855:42:73"
                        },
                        "nativeSrc": "5855:42:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "5855:42:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "5927:1:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "5927:1:73"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5930:4:73",
                                  "nodeType": "YulLiteral",
                                  "src": "5930:4:73",
                                  "type": "",
                                  "value": "0x40"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "5923:3:73",
                                "nodeType": "YulIdentifier",
                                "src": "5923:3:73"
                              },
                              "nativeSrc": "5923:12:73",
                              "nodeType": "YulFunctionCall",
                              "src": "5923:12:73"
                            },
                            {
                              "name": "data.offset",
                              "nativeSrc": "5937:11:73",
                              "nodeType": "YulIdentifier",
                              "src": "5937:11:73"
                            },
                            {
                              "name": "data.length",
                              "nativeSrc": "5950:11:73",
                              "nodeType": "YulIdentifier",
                              "src": "5950:11:73"
                            }
                          ],
                          "functionName": {
                            "name": "calldatacopy",
                            "nativeSrc": "5910:12:73",
                            "nodeType": "YulIdentifier",
                            "src": "5910:12:73"
                          },
                          "nativeSrc": "5910:52:73",
                          "nodeType": "YulFunctionCall",
                          "src": "5910:52:73"
                        },
                        "nativeSrc": "5910:52:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "5910:52:73"
                      },
                      {
                        "body": {
                          "nativeSrc": "6121:444:73",
                          "nodeType": "YulBlock",
                          "src": "6121:444:73",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "6260:123:73",
                                "nodeType": "YulBlock",
                                "src": "6260:123:73",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6289:4:73",
                                          "nodeType": "YulLiteral",
                                          "src": "6289:4:73",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "name": "_UPGRADE_FAILED_ERROR_SELECTOR",
                                          "nativeSrc": "6295:30:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "6295:30:73"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "6282:6:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "6282:6:73"
                                      },
                                      "nativeSrc": "6282:44:73",
                                      "nodeType": "YulFunctionCall",
                                      "src": "6282:44:73"
                                    },
                                    "nativeSrc": "6282:44:73",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6282:44:73"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6354:4:73",
                                          "nodeType": "YulLiteral",
                                          "src": "6354:4:73",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "6360:4:73",
                                          "nodeType": "YulLiteral",
                                          "src": "6360:4:73",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "6347:6:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "6347:6:73"
                                      },
                                      "nativeSrc": "6347:18:73",
                                      "nodeType": "YulFunctionCall",
                                      "src": "6347:18:73"
                                    },
                                    "nativeSrc": "6347:18:73",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6347:18:73"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "returndatasize",
                                      "nativeSrc": "6242:14:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "6242:14:73"
                                    },
                                    "nativeSrc": "6242:16:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6242:16:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "6235:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "6235:6:73"
                                },
                                "nativeSrc": "6235:24:73",
                                "nodeType": "YulFunctionCall",
                                "src": "6235:24:73"
                              },
                              "nativeSrc": "6232:151:73",
                              "nodeType": "YulIf",
                              "src": "6232:151:73"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6475:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "6475:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6481:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "6481:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "returndatasize",
                                      "nativeSrc": "6487:14:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "6487:14:73"
                                    },
                                    "nativeSrc": "6487:16:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6487:16:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "returndatacopy",
                                  "nativeSrc": "6460:14:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "6460:14:73"
                                },
                                "nativeSrc": "6460:44:73",
                                "nodeType": "YulFunctionCall",
                                "src": "6460:44:73"
                              },
                              "nativeSrc": "6460:44:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "6460:44:73"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6528:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "6528:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "returndatasize",
                                      "nativeSrc": "6534:14:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "6534:14:73"
                                    },
                                    "nativeSrc": "6534:16:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6534:16:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "6521:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "6521:6:73"
                                },
                                "nativeSrc": "6521:30:73",
                                "nodeType": "YulFunctionCall",
                                "src": "6521:30:73"
                              },
                              "nativeSrc": "6521:30:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "6521:30:73"
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
                                    "nativeSrc": "6054:3:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "6054:3:73"
                                  },
                                  "nativeSrc": "6054:5:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6054:5:73"
                                },
                                {
                                  "name": "proxy",
                                  "nativeSrc": "6061:5:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "6061:5:73"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "callvalue",
                                    "nativeSrc": "6068:9:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "6068:9:73"
                                  },
                                  "nativeSrc": "6068:11:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6068:11:73"
                                },
                                {
                                  "name": "m",
                                  "nativeSrc": "6081:1:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "6081:1:73"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "6088:4:73",
                                      "nodeType": "YulLiteral",
                                      "src": "6088:4:73",
                                      "type": "",
                                      "value": "0x40"
                                    },
                                    {
                                      "name": "data.length",
                                      "nativeSrc": "6094:11:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "6094:11:73"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "6084:3:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "6084:3:73"
                                  },
                                  "nativeSrc": "6084:22:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6084:22:73"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6108:4:73",
                                  "nodeType": "YulLiteral",
                                  "src": "6108:4:73",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6114:4:73",
                                  "nodeType": "YulLiteral",
                                  "src": "6114:4:73",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "6049:4:73",
                                "nodeType": "YulIdentifier",
                                "src": "6049:4:73"
                              },
                              "nativeSrc": "6049:70:73",
                              "nodeType": "YulFunctionCall",
                              "src": "6049:70:73"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "6042:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "6042:6:73"
                          },
                          "nativeSrc": "6042:78:73",
                          "nodeType": "YulFunctionCall",
                          "src": "6042:78:73"
                        },
                        "nativeSrc": "6039:526:73",
                        "nodeType": "YulIf",
                        "src": "6039:526:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6625:1:73",
                              "nodeType": "YulLiteral",
                              "src": "6625:1:73",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6628:1:73",
                              "nodeType": "YulLiteral",
                              "src": "6628:1:73",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "name": "_UPGRADED_EVENT_SIGNATURE",
                              "nativeSrc": "6631:25:73",
                              "nodeType": "YulIdentifier",
                              "src": "6631:25:73"
                            },
                            {
                              "name": "proxy",
                              "nativeSrc": "6658:5:73",
                              "nodeType": "YulIdentifier",
                              "src": "6658:5:73"
                            },
                            {
                              "name": "implementation",
                              "nativeSrc": "6665:14:73",
                              "nodeType": "YulIdentifier",
                              "src": "6665:14:73"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "6620:4:73",
                            "nodeType": "YulIdentifier",
                            "src": "6620:4:73"
                          },
                          "nativeSrc": "6620:60:73",
                          "nodeType": "YulFunctionCall",
                          "src": "6620:60:73"
                        },
                        "nativeSrc": "6620:60:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "6620:60:73"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56989,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5876:20:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56938,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5636:28:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56981,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6631:25:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56946,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6295:30:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57032,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5950:11:73",
                      "suffix": "length",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57032,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6094:11:73",
                      "suffix": "length",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57032,
                      "isOffset": true,
                      "isSlot": false,
                      "src": "5937:11:73",
                      "suffix": "offset",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57030,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5827:14:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57030,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6665:14:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57028,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5585:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57028,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6061:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57028,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6658:5:73",
                      "valueSize": 1
                    }
                  ],
                  "id": 57035,
                  "nodeType": "InlineAssembly",
                  "src": "5473:1217:73"
                }
              ]
            },
            "documentation": {
              "id": 57026,
              "nodeType": "StructuredDocumentation",
              "src": "5143:196:73",
              "text": "@dev Upgrades the proxy to point to `implementation`.\n Then, calls the proxy with abi encoded `data`.\n The caller of this function must be the admin of the proxy on this factory."
            },
            "functionSelector": "9623609d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upgradeAndCall",
            "nameLocation": "5353:14:73",
            "parameters": {
              "id": 57033,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57028,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "5376:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57037,
                  "src": "5368:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57027,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5368:7:73",
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
                  "id": 57030,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "5391:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57037,
                  "src": "5383:22:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57029,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5383:7:73",
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
                  "id": 57032,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "5422:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57037,
                  "src": "5407:19:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 57031,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5407:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5367:60:73"
            },
            "returnParameters": {
              "id": 57034,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5463:0:73"
            },
            "scope": 57200,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57057,
            "nodeType": "FunctionDefinition",
            "src": "7159:169:73",
            "nodes": [],
            "body": {
              "id": 57056,
              "nodeType": "Block",
              "src": "7253:75:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 57054,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 57047,
                      "name": "proxy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57045,
                      "src": "7263:5:73",
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
                          "id": 57049,
                          "name": "implementation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57040,
                          "src": "7285:14:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 57050,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57042,
                          "src": "7301:5:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 57051,
                            "name": "_emptyData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57199,
                            "src": "7308:10:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$__$returns$_t_bytes_calldata_ptr_$",
                              "typeString": "function () pure returns (bytes calldata)"
                            }
                          },
                          "id": 57052,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7308:12:73",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
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
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
                          }
                        ],
                        "id": 57048,
                        "name": "deployAndCall",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57083,
                        "src": "7271:13:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_bytes_calldata_ptr_$returns$_t_address_$",
                          "typeString": "function (address,address,bytes calldata) returns (address)"
                        }
                      },
                      "id": 57053,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7271:50:73",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7263:58:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 57055,
                  "nodeType": "ExpressionStatement",
                  "src": "7263:58:73"
                }
              ]
            },
            "documentation": {
              "id": 57038,
              "nodeType": "StructuredDocumentation",
              "src": "6985:169:73",
              "text": "@dev Deploys a proxy for `implementation`, with `admin`,\n and returns its address.\n The value passed into this function will be forwarded to the proxy."
            },
            "functionSelector": "545e7c61",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deploy",
            "nameLocation": "7168:6:73",
            "parameters": {
              "id": 57043,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57040,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "7183:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57057,
                  "src": "7175:22:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57039,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7175:7:73",
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
                  "id": 57042,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "7207:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57057,
                  "src": "7199:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57041,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7199:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7174:39:73"
            },
            "returnParameters": {
              "id": 57046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57045,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "7246:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57057,
                  "src": "7238:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57044,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7238:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7237:15:73"
            },
            "scope": 57200,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57083,
            "nodeType": "FunctionDefinition",
            "src": "7563:230:73",
            "nodes": [],
            "body": {
              "id": 57082,
              "nodeType": "Block",
              "src": "7713:80:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 57080,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 57069,
                      "name": "proxy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57067,
                      "src": "7723:5:73",
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
                          "id": 57071,
                          "name": "implementation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57060,
                          "src": "7739:14:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 57072,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57062,
                          "src": "7755:5:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 57075,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7770:1:73",
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
                            "id": 57074,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7762:7:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": {
                              "id": 57073,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "7762:7:73",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 57076,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7762:10:73",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 57077,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7774:5:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "id": 57078,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57064,
                          "src": "7781:4:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
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
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
                          }
                        ],
                        "id": 57070,
                        "name": "_deploy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57155,
                        "src": "7731:7:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_bytes32_$_t_bool_$_t_bytes_calldata_ptr_$returns$_t_address_$",
                          "typeString": "function (address,address,bytes32,bool,bytes calldata) returns (address)"
                        }
                      },
                      "id": 57079,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7731:55:73",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7723:63:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 57081,
                  "nodeType": "ExpressionStatement",
                  "src": "7723:63:73"
                }
              ]
            },
            "documentation": {
              "id": 57058,
              "nodeType": "StructuredDocumentation",
              "src": "7334:224:73",
              "text": "@dev Deploys a proxy for `implementation`, with `admin`,\n and returns its address.\n The value passed into this function will be forwarded to the proxy.\n Then, calls the proxy with abi encoded `data`."
            },
            "functionSelector": "4314f120",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deployAndCall",
            "nameLocation": "7572:13:73",
            "parameters": {
              "id": 57065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57060,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "7594:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57083,
                  "src": "7586:22:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57059,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7586:7:73",
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
                  "id": 57062,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "7618:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57083,
                  "src": "7610:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7610:7:73",
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
                  "id": 57064,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "7640:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57083,
                  "src": "7625:19:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 57063,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7625:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7585:60:73"
            },
            "returnParameters": {
              "id": 57068,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57067,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "7702:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57083,
                  "src": "7694:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57066,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7694:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7693:15:73"
            },
            "scope": 57200,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57106,
            "nodeType": "FunctionDefinition",
            "src": "7995:243:73",
            "nodes": [],
            "body": {
              "id": 57105,
              "nodeType": "Block",
              "src": "8144:94:73",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 57103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 57095,
                      "name": "proxy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57093,
                      "src": "8154:5:73",
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
                          "id": 57097,
                          "name": "implementation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57086,
                          "src": "8189:14:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 57098,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57088,
                          "src": "8205:5:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 57099,
                          "name": "salt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57090,
                          "src": "8212:4:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 57100,
                            "name": "_emptyData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57199,
                            "src": "8218:10:73",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$__$returns$_t_bytes_calldata_ptr_$",
                              "typeString": "function () pure returns (bytes calldata)"
                            }
                          },
                          "id": 57101,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8218:12:73",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
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
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
                          }
                        ],
                        "id": 57096,
                        "name": "deployDeterministicAndCall",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57132,
                        "src": "8162:26:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_bytes32_$_t_bytes_calldata_ptr_$returns$_t_address_$",
                          "typeString": "function (address,address,bytes32,bytes calldata) returns (address)"
                        }
                      },
                      "id": 57102,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8162:69:73",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8154:77:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 57104,
                  "nodeType": "ExpressionStatement",
                  "src": "8154:77:73"
                }
              ]
            },
            "documentation": {
              "id": 57084,
              "nodeType": "StructuredDocumentation",
              "src": "7799:191:73",
              "text": "@dev Deploys a proxy for `implementation`, with `admin`, `salt`,\n and returns its deterministic address.\n The value passed into this function will be forwarded to the proxy."
            },
            "functionSelector": "3729f922",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deployDeterministic",
            "nameLocation": "8004:19:73",
            "parameters": {
              "id": 57091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57086,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "8032:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57106,
                  "src": "8024:22:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57085,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8024:7:73",
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
                  "id": 57088,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "8056:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57106,
                  "src": "8048:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57087,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8048:7:73",
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
                  "id": 57090,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "8071:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57106,
                  "src": "8063:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57089,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8063:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8023:53:73"
            },
            "returnParameters": {
              "id": 57094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57093,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "8133:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57106,
                  "src": "8125:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57092,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8125:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8124:15:73"
            },
            "scope": 57200,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57132,
            "nodeType": "FunctionDefinition",
            "src": "8495:575:73",
            "nodes": [],
            "body": {
              "id": 57131,
              "nodeType": "Block",
              "src": "8682:388:73",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "8701:297:73",
                    "nodeType": "YulBlock",
                    "src": "8701:297:73",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "8860:128:73",
                          "nodeType": "YulBlock",
                          "src": "8860:128:73",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8885:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "8885:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "_SALT_DOES_NOT_START_WITH_CALLER_ERROR_SELECTOR",
                                    "nativeSrc": "8891:47:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "8891:47:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "8878:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "8878:6:73"
                                },
                                "nativeSrc": "8878:61:73",
                                "nodeType": "YulFunctionCall",
                                "src": "8878:61:73"
                              },
                              "nativeSrc": "8878:61:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "8878:61:73"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8963:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "8963:4:73",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8969:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "8969:4:73",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "8956:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "8956:6:73"
                                },
                                "nativeSrc": "8956:18:73",
                                "nodeType": "YulFunctionCall",
                                "src": "8956:18:73"
                              },
                              "nativeSrc": "8956:18:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "8956:18:73"
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
                                          "kind": "number",
                                          "nativeSrc": "8818:2:73",
                                          "nodeType": "YulLiteral",
                                          "src": "8818:2:73",
                                          "type": "",
                                          "value": "96"
                                        },
                                        {
                                          "name": "salt",
                                          "nativeSrc": "8822:4:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "8822:4:73"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shr",
                                        "nativeSrc": "8814:3:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "8814:3:73"
                                      },
                                      "nativeSrc": "8814:13:73",
                                      "nodeType": "YulFunctionCall",
                                      "src": "8814:13:73"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nativeSrc": "8807:6:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "8807:6:73"
                                  },
                                  "nativeSrc": "8807:21:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "8807:21:73"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "caller",
                                        "nativeSrc": "8833:6:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "8833:6:73"
                                      },
                                      "nativeSrc": "8833:8:73",
                                      "nodeType": "YulFunctionCall",
                                      "src": "8833:8:73"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "8847:2:73",
                                          "nodeType": "YulLiteral",
                                          "src": "8847:2:73",
                                          "type": "",
                                          "value": "96"
                                        },
                                        {
                                          "name": "salt",
                                          "nativeSrc": "8851:4:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "8851:4:73"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shr",
                                        "nativeSrc": "8843:3:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "8843:3:73"
                                      },
                                      "nativeSrc": "8843:13:73",
                                      "nodeType": "YulFunctionCall",
                                      "src": "8843:13:73"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "8830:2:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "8830:2:73"
                                  },
                                  "nativeSrc": "8830:27:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "8830:27:73"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "8804:2:73",
                                "nodeType": "YulIdentifier",
                                "src": "8804:2:73"
                              },
                              "nativeSrc": "8804:54:73",
                              "nodeType": "YulFunctionCall",
                              "src": "8804:54:73"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "8797:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "8797:6:73"
                          },
                          "nativeSrc": "8797:62:73",
                          "nodeType": "YulFunctionCall",
                          "src": "8797:62:73"
                        },
                        "nativeSrc": "8794:194:73",
                        "nodeType": "YulIf",
                        "src": "8794:194:73"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56950,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8891:47:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8822:4:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57113,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8851:4:73",
                      "valueSize": 1
                    }
                  ],
                  "id": 57120,
                  "nodeType": "InlineAssembly",
                  "src": "8692:306:73"
                },
                {
                  "expression": {
                    "id": 57129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 57121,
                      "name": "proxy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57118,
                      "src": "9007:5:73",
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
                          "id": 57123,
                          "name": "implementation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57109,
                          "src": "9023:14:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 57124,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57111,
                          "src": "9039:5:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 57125,
                          "name": "salt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57113,
                          "src": "9046:4:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "hexValue": "74727565",
                          "id": 57126,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9052:4:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "id": 57127,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57115,
                          "src": "9058:4:73",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
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
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
                          }
                        ],
                        "id": 57122,
                        "name": "_deploy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57155,
                        "src": "9015:7:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_bytes32_$_t_bool_$_t_bytes_calldata_ptr_$returns$_t_address_$",
                          "typeString": "function (address,address,bytes32,bool,bytes calldata) returns (address)"
                        }
                      },
                      "id": 57128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9015:48:73",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9007:56:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 57130,
                  "nodeType": "ExpressionStatement",
                  "src": "9007:56:73"
                }
              ]
            },
            "documentation": {
              "id": 57107,
              "nodeType": "StructuredDocumentation",
              "src": "8244:246:73",
              "text": "@dev Deploys a proxy for `implementation`, with `admin`, `salt`,\n and returns its deterministic address.\n The value passed into this function will be forwarded to the proxy.\n Then, calls the proxy with abi encoded `data`."
            },
            "functionSelector": "a97b90d5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deployDeterministicAndCall",
            "nameLocation": "8504:26:73",
            "parameters": {
              "id": 57116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57109,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "8548:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57132,
                  "src": "8540:22:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57108,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8540:7:73",
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
                  "id": 57111,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "8580:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57132,
                  "src": "8572:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57110,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8572:7:73",
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
                  "id": 57113,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "8603:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57132,
                  "src": "8595:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57112,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8595:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57115,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8632:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57132,
                  "src": "8617:19:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 57114,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8617:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8530:112:73"
            },
            "returnParameters": {
              "id": 57119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57118,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "8675:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57132,
                  "src": "8667:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57117,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8667:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8666:15:73"
            },
            "scope": 57200,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57155,
            "nodeType": "FunctionDefinition",
            "src": "9168:1709:73",
            "nodes": [],
            "body": {
              "id": 57154,
              "nodeType": "Block",
              "src": "9352:1525:73",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    57149
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 57149,
                      "mutability": "mutable",
                      "name": "m",
                      "nameLocation": "9370:1:73",
                      "nodeType": "VariableDeclaration",
                      "scope": 57154,
                      "src": "9362:9:73",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 57148,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9362:7:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 57152,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 57150,
                      "name": "_initCode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57191,
                      "src": "9374:9:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                        "typeString": "function () view returns (bytes32)"
                      }
                    },
                    "id": 57151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9374:11:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9362:23:73"
                },
                {
                  "AST": {
                    "nativeSrc": "9404:1467:73",
                    "nodeType": "YulBlock",
                    "src": "9404:1467:73",
                    "statements": [
                      {
                        "cases": [
                          {
                            "body": {
                              "nativeSrc": "9485:42:73",
                              "nodeType": "YulBlock",
                              "src": "9485:42:73",
                              "statements": [
                                {
                                  "nativeSrc": "9487:38:73",
                                  "nodeType": "YulAssignment",
                                  "src": "9487:38:73",
                                  "value": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "9503:1:73",
                                        "nodeType": "YulLiteral",
                                        "src": "9503:1:73",
                                        "type": "",
                                        "value": "0"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "9510:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "9510:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "9513:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "9513:4:73",
                                            "type": "",
                                            "value": "0x13"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "9506:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "9506:3:73"
                                        },
                                        "nativeSrc": "9506:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "9506:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "9520:4:73",
                                        "nodeType": "YulLiteral",
                                        "src": "9520:4:73",
                                        "type": "",
                                        "value": "0x88"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create",
                                      "nativeSrc": "9496:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "9496:6:73"
                                    },
                                    "nativeSrc": "9496:29:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "9496:29:73"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "proxy",
                                      "nativeSrc": "9487:5:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "9487:5:73"
                                    }
                                  ]
                                }
                              ]
                            },
                            "nativeSrc": "9478:49:73",
                            "nodeType": "YulCase",
                            "src": "9478:49:73",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "9483:1:73",
                              "nodeType": "YulLiteral",
                              "src": "9483:1:73",
                              "type": "",
                              "value": "0"
                            }
                          },
                          {
                            "body": {
                              "nativeSrc": "9548:49:73",
                              "nodeType": "YulBlock",
                              "src": "9548:49:73",
                              "statements": [
                                {
                                  "nativeSrc": "9550:45:73",
                                  "nodeType": "YulAssignment",
                                  "src": "9550:45:73",
                                  "value": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "9567:1:73",
                                        "nodeType": "YulLiteral",
                                        "src": "9567:1:73",
                                        "type": "",
                                        "value": "0"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "9574:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "9574:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "9577:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "9577:4:73",
                                            "type": "",
                                            "value": "0x13"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "9570:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "9570:3:73"
                                        },
                                        "nativeSrc": "9570:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "9570:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "9584:4:73",
                                        "nodeType": "YulLiteral",
                                        "src": "9584:4:73",
                                        "type": "",
                                        "value": "0x88"
                                      },
                                      {
                                        "name": "salt",
                                        "nativeSrc": "9590:4:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "9590:4:73"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create2",
                                      "nativeSrc": "9559:7:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "9559:7:73"
                                    },
                                    "nativeSrc": "9559:36:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "9559:36:73"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "proxy",
                                      "nativeSrc": "9550:5:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "9550:5:73"
                                    }
                                  ]
                                }
                              ]
                            },
                            "nativeSrc": "9540:57:73",
                            "nodeType": "YulCase",
                            "src": "9540:57:73",
                            "value": "default"
                          }
                        ],
                        "expression": {
                          "name": "useSalt",
                          "nativeSrc": "9458:7:73",
                          "nodeType": "YulIdentifier",
                          "src": "9458:7:73"
                        },
                        "nativeSrc": "9451:146:73",
                        "nodeType": "YulSwitch",
                        "src": "9451:146:73"
                      },
                      {
                        "body": {
                          "nativeSrc": "9672:114:73",
                          "nodeType": "YulBlock",
                          "src": "9672:114:73",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "9697:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "9697:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "_DEPLOYMENT_FAILED_ERROR_SELECTOR",
                                    "nativeSrc": "9703:33:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "9703:33:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "9690:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "9690:6:73"
                                },
                                "nativeSrc": "9690:47:73",
                                "nodeType": "YulFunctionCall",
                                "src": "9690:47:73"
                              },
                              "nativeSrc": "9690:47:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "9690:47:73"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "9761:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "9761:4:73",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "9767:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "9767:4:73",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "9754:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "9754:6:73"
                                },
                                "nativeSrc": "9754:18:73",
                                "nodeType": "YulFunctionCall",
                                "src": "9754:18:73"
                              },
                              "nativeSrc": "9754:18:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "9754:18:73"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "proxy",
                              "nativeSrc": "9665:5:73",
                              "nodeType": "YulIdentifier",
                              "src": "9665:5:73"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "9658:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "9658:6:73"
                          },
                          "nativeSrc": "9658:13:73",
                          "nodeType": "YulFunctionCall",
                          "src": "9658:13:73"
                        },
                        "nativeSrc": "9655:131:73",
                        "nodeType": "YulIf",
                        "src": "9655:131:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "9882:1:73",
                              "nodeType": "YulIdentifier",
                              "src": "9882:1:73"
                            },
                            {
                              "name": "implementation",
                              "nativeSrc": "9885:14:73",
                              "nodeType": "YulIdentifier",
                              "src": "9885:14:73"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9875:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "9875:6:73"
                          },
                          "nativeSrc": "9875:25:73",
                          "nodeType": "YulFunctionCall",
                          "src": "9875:25:73"
                        },
                        "nativeSrc": "9875:25:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "9875:25:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "9924:1:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "9924:1:73"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "9927:4:73",
                                  "nodeType": "YulLiteral",
                                  "src": "9927:4:73",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "9920:3:73",
                                "nodeType": "YulIdentifier",
                                "src": "9920:3:73"
                              },
                              "nativeSrc": "9920:12:73",
                              "nodeType": "YulFunctionCall",
                              "src": "9920:12:73"
                            },
                            {
                              "name": "_IMPLEMENTATION_SLOT",
                              "nativeSrc": "9934:20:73",
                              "nodeType": "YulIdentifier",
                              "src": "9934:20:73"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9913:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "9913:6:73"
                          },
                          "nativeSrc": "9913:42:73",
                          "nodeType": "YulFunctionCall",
                          "src": "9913:42:73"
                        },
                        "nativeSrc": "9913:42:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "9913:42:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "9985:1:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "9985:1:73"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "9988:4:73",
                                  "nodeType": "YulLiteral",
                                  "src": "9988:4:73",
                                  "type": "",
                                  "value": "0x40"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "9981:3:73",
                                "nodeType": "YulIdentifier",
                                "src": "9981:3:73"
                              },
                              "nativeSrc": "9981:12:73",
                              "nodeType": "YulFunctionCall",
                              "src": "9981:12:73"
                            },
                            {
                              "name": "data.offset",
                              "nativeSrc": "9995:11:73",
                              "nodeType": "YulIdentifier",
                              "src": "9995:11:73"
                            },
                            {
                              "name": "data.length",
                              "nativeSrc": "10008:11:73",
                              "nodeType": "YulIdentifier",
                              "src": "10008:11:73"
                            }
                          ],
                          "functionName": {
                            "name": "calldatacopy",
                            "nativeSrc": "9968:12:73",
                            "nodeType": "YulIdentifier",
                            "src": "9968:12:73"
                          },
                          "nativeSrc": "9968:52:73",
                          "nodeType": "YulFunctionCall",
                          "src": "9968:52:73"
                        },
                        "nativeSrc": "9968:52:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "9968:52:73"
                      },
                      {
                        "body": {
                          "nativeSrc": "10199:450:73",
                          "nodeType": "YulBlock",
                          "src": "10199:450:73",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "10341:126:73",
                                "nodeType": "YulBlock",
                                "src": "10341:126:73",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "10370:4:73",
                                          "nodeType": "YulLiteral",
                                          "src": "10370:4:73",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "name": "_DEPLOYMENT_FAILED_ERROR_SELECTOR",
                                          "nativeSrc": "10376:33:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "10376:33:73"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "10363:6:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "10363:6:73"
                                      },
                                      "nativeSrc": "10363:47:73",
                                      "nodeType": "YulFunctionCall",
                                      "src": "10363:47:73"
                                    },
                                    "nativeSrc": "10363:47:73",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "10363:47:73"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "10438:4:73",
                                          "nodeType": "YulLiteral",
                                          "src": "10438:4:73",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "10444:4:73",
                                          "nodeType": "YulLiteral",
                                          "src": "10444:4:73",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "10431:6:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "10431:6:73"
                                      },
                                      "nativeSrc": "10431:18:73",
                                      "nodeType": "YulFunctionCall",
                                      "src": "10431:18:73"
                                    },
                                    "nativeSrc": "10431:18:73",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "10431:18:73"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "returndatasize",
                                      "nativeSrc": "10323:14:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "10323:14:73"
                                    },
                                    "nativeSrc": "10323:16:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "10323:16:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "10316:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "10316:6:73"
                                },
                                "nativeSrc": "10316:24:73",
                                "nodeType": "YulFunctionCall",
                                "src": "10316:24:73"
                              },
                              "nativeSrc": "10313:154:73",
                              "nodeType": "YulIf",
                              "src": "10313:154:73"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10559:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "10559:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10565:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "10565:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "returndatasize",
                                      "nativeSrc": "10571:14:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "10571:14:73"
                                    },
                                    "nativeSrc": "10571:16:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "10571:16:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "returndatacopy",
                                  "nativeSrc": "10544:14:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "10544:14:73"
                                },
                                "nativeSrc": "10544:44:73",
                                "nodeType": "YulFunctionCall",
                                "src": "10544:44:73"
                              },
                              "nativeSrc": "10544:44:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "10544:44:73"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "10612:4:73",
                                    "nodeType": "YulLiteral",
                                    "src": "10612:4:73",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "returndatasize",
                                      "nativeSrc": "10618:14:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "10618:14:73"
                                    },
                                    "nativeSrc": "10618:16:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "10618:16:73"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "10605:6:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "10605:6:73"
                                },
                                "nativeSrc": "10605:30:73",
                                "nodeType": "YulFunctionCall",
                                "src": "10605:30:73"
                              },
                              "nativeSrc": "10605:30:73",
                              "nodeType": "YulExpressionStatement",
                              "src": "10605:30:73"
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
                                    "nativeSrc": "10132:3:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "10132:3:73"
                                  },
                                  "nativeSrc": "10132:5:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "10132:5:73"
                                },
                                {
                                  "name": "proxy",
                                  "nativeSrc": "10139:5:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "10139:5:73"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "callvalue",
                                    "nativeSrc": "10146:9:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "10146:9:73"
                                  },
                                  "nativeSrc": "10146:11:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "10146:11:73"
                                },
                                {
                                  "name": "m",
                                  "nativeSrc": "10159:1:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "10159:1:73"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "10166:4:73",
                                      "nodeType": "YulLiteral",
                                      "src": "10166:4:73",
                                      "type": "",
                                      "value": "0x40"
                                    },
                                    {
                                      "name": "data.length",
                                      "nativeSrc": "10172:11:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "10172:11:73"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "10162:3:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "10162:3:73"
                                  },
                                  "nativeSrc": "10162:22:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "10162:22:73"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "10186:4:73",
                                  "nodeType": "YulLiteral",
                                  "src": "10186:4:73",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "10192:4:73",
                                  "nodeType": "YulLiteral",
                                  "src": "10192:4:73",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "10127:4:73",
                                "nodeType": "YulIdentifier",
                                "src": "10127:4:73"
                              },
                              "nativeSrc": "10127:70:73",
                              "nodeType": "YulFunctionCall",
                              "src": "10127:70:73"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "10120:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "10120:6:73"
                          },
                          "nativeSrc": "10120:78:73",
                          "nodeType": "YulFunctionCall",
                          "src": "10120:78:73"
                        },
                        "nativeSrc": "10117:532:73",
                        "nodeType": "YulIf",
                        "src": "10117:532:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "10720:2:73",
                                  "nodeType": "YulLiteral",
                                  "src": "10720:2:73",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "proxy",
                                  "nativeSrc": "10724:5:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "10724:5:73"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "10716:3:73",
                                "nodeType": "YulIdentifier",
                                "src": "10716:3:73"
                              },
                              "nativeSrc": "10716:14:73",
                              "nodeType": "YulFunctionCall",
                              "src": "10716:14:73"
                            },
                            {
                              "name": "admin",
                              "nativeSrc": "10732:5:73",
                              "nodeType": "YulIdentifier",
                              "src": "10732:5:73"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "10709:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "10709:6:73"
                          },
                          "nativeSrc": "10709:29:73",
                          "nodeType": "YulFunctionCall",
                          "src": "10709:29:73"
                        },
                        "nativeSrc": "10709:29:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "10709:29:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10799:1:73",
                              "nodeType": "YulLiteral",
                              "src": "10799:1:73",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10802:1:73",
                              "nodeType": "YulLiteral",
                              "src": "10802:1:73",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "name": "_DEPLOYED_EVENT_SIGNATURE",
                              "nativeSrc": "10805:25:73",
                              "nodeType": "YulIdentifier",
                              "src": "10805:25:73"
                            },
                            {
                              "name": "proxy",
                              "nativeSrc": "10832:5:73",
                              "nodeType": "YulIdentifier",
                              "src": "10832:5:73"
                            },
                            {
                              "name": "implementation",
                              "nativeSrc": "10839:14:73",
                              "nodeType": "YulIdentifier",
                              "src": "10839:14:73"
                            },
                            {
                              "name": "admin",
                              "nativeSrc": "10855:5:73",
                              "nodeType": "YulIdentifier",
                              "src": "10855:5:73"
                            }
                          ],
                          "functionName": {
                            "name": "log4",
                            "nativeSrc": "10794:4:73",
                            "nodeType": "YulIdentifier",
                            "src": "10794:4:73"
                          },
                          "nativeSrc": "10794:67:73",
                          "nodeType": "YulFunctionCall",
                          "src": "10794:67:73"
                        },
                        "nativeSrc": "10794:67:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "10794:67:73"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 56985,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10805:25:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56942,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10376:33:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56942,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9703:33:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56989,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9934:20:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57137,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10732:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57137,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10855:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57143,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10008:11:73",
                      "suffix": "length",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57143,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10172:11:73",
                      "suffix": "length",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57143,
                      "isOffset": true,
                      "isSlot": false,
                      "src": "9995:11:73",
                      "suffix": "offset",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57135,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10839:14:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57135,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9885:14:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57149,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10159:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57149,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9510:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57149,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9574:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57149,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9882:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57149,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9924:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57149,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9985:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57146,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10139:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57146,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10724:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57146,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10832:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57146,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9487:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57146,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9550:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57146,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9665:5:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57139,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9590:4:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57141,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9458:7:73",
                      "valueSize": 1
                    }
                  ],
                  "id": 57153,
                  "nodeType": "InlineAssembly",
                  "src": "9395:1476:73"
                }
              ]
            },
            "documentation": {
              "id": 57133,
              "nodeType": "StructuredDocumentation",
              "src": "9076:87:73",
              "text": "@dev Deploys the proxy, with optionality to deploy deterministically with a `salt`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deploy",
            "nameLocation": "9177:7:73",
            "parameters": {
              "id": 57144,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57135,
                  "mutability": "mutable",
                  "name": "implementation",
                  "nameLocation": "9202:14:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57155,
                  "src": "9194:22:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9194:7:73",
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
                  "id": 57137,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "9234:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57155,
                  "src": "9226:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57136,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9226:7:73",
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
                  "id": 57139,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "9257:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57155,
                  "src": "9249:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57138,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9249:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57141,
                  "mutability": "mutable",
                  "name": "useSalt",
                  "nameLocation": "9276:7:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57155,
                  "src": "9271:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 57140,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9271:4:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 57143,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "9308:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57155,
                  "src": "9293:19:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 57142,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "9293:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9184:134:73"
            },
            "returnParameters": {
              "id": 57147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57146,
                  "mutability": "mutable",
                  "name": "proxy",
                  "nameLocation": "9345:5:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57155,
                  "src": "9337:13:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57145,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9337:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9336:15:73"
            },
            "scope": 57200,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 57170,
            "nodeType": "FunctionDefinition",
            "src": "10951:789:73",
            "nodes": [],
            "body": {
              "id": 57169,
              "nodeType": "Block",
              "src": "11042:698:73",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    57164
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 57164,
                      "mutability": "mutable",
                      "name": "hash",
                      "nameLocation": "11060:4:73",
                      "nodeType": "VariableDeclaration",
                      "scope": 57169,
                      "src": "11052:12:73",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 57163,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "11052:7:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 57167,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 57165,
                      "name": "initCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57183,
                      "src": "11067:12:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                        "typeString": "function () view returns (bytes32)"
                      }
                    },
                    "id": 57166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11067:14:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11052:29:73"
                },
                {
                  "AST": {
                    "nativeSrc": "11100:634:73",
                    "nodeType": "YulBlock",
                    "src": "11100:634:73",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11174:4:73",
                              "nodeType": "YulLiteral",
                              "src": "11174:4:73",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11180:4:73",
                              "nodeType": "YulLiteral",
                              "src": "11180:4:73",
                              "type": "",
                              "value": "0xff"
                            }
                          ],
                          "functionName": {
                            "name": "mstore8",
                            "nativeSrc": "11166:7:73",
                            "nodeType": "YulIdentifier",
                            "src": "11166:7:73"
                          },
                          "nativeSrc": "11166:19:73",
                          "nodeType": "YulFunctionCall",
                          "src": "11166:19:73"
                        },
                        "nativeSrc": "11166:19:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "11166:19:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11226:4:73",
                              "nodeType": "YulLiteral",
                              "src": "11226:4:73",
                              "type": "",
                              "value": "0x35"
                            },
                            {
                              "name": "hash",
                              "nativeSrc": "11232:4:73",
                              "nodeType": "YulIdentifier",
                              "src": "11232:4:73"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11219:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "11219:6:73"
                          },
                          "nativeSrc": "11219:18:73",
                          "nodeType": "YulFunctionCall",
                          "src": "11219:18:73"
                        },
                        "nativeSrc": "11219:18:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "11219:18:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11257:4:73",
                              "nodeType": "YulLiteral",
                              "src": "11257:4:73",
                              "type": "",
                              "value": "0x01"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "11267:2:73",
                                  "nodeType": "YulLiteral",
                                  "src": "11267:2:73",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "address",
                                    "nativeSrc": "11271:7:73",
                                    "nodeType": "YulIdentifier",
                                    "src": "11271:7:73"
                                  },
                                  "nativeSrc": "11271:9:73",
                                  "nodeType": "YulFunctionCall",
                                  "src": "11271:9:73"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "11263:3:73",
                                "nodeType": "YulIdentifier",
                                "src": "11263:3:73"
                              },
                              "nativeSrc": "11263:18:73",
                              "nodeType": "YulFunctionCall",
                              "src": "11263:18:73"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11250:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "11250:6:73"
                          },
                          "nativeSrc": "11250:32:73",
                          "nodeType": "YulFunctionCall",
                          "src": "11250:32:73"
                        },
                        "nativeSrc": "11250:32:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "11250:32:73"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11302:4:73",
                              "nodeType": "YulLiteral",
                              "src": "11302:4:73",
                              "type": "",
                              "value": "0x15"
                            },
                            {
                              "name": "salt",
                              "nativeSrc": "11308:4:73",
                              "nodeType": "YulIdentifier",
                              "src": "11308:4:73"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11295:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "11295:6:73"
                          },
                          "nativeSrc": "11295:18:73",
                          "nodeType": "YulFunctionCall",
                          "src": "11295:18:73"
                        },
                        "nativeSrc": "11295:18:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "11295:18:73"
                      },
                      {
                        "nativeSrc": "11576:34:73",
                        "nodeType": "YulAssignment",
                        "src": "11576:34:73",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11599:4:73",
                              "nodeType": "YulLiteral",
                              "src": "11599:4:73",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11605:4:73",
                              "nodeType": "YulLiteral",
                              "src": "11605:4:73",
                              "type": "",
                              "value": "0x55"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "11589:9:73",
                            "nodeType": "YulIdentifier",
                            "src": "11589:9:73"
                          },
                          "nativeSrc": "11589:21:73",
                          "nodeType": "YulFunctionCall",
                          "src": "11589:21:73"
                        },
                        "variableNames": [
                          {
                            "name": "predicted",
                            "nativeSrc": "11576:9:73",
                            "nodeType": "YulIdentifier",
                            "src": "11576:9:73"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11716:4:73",
                              "nodeType": "YulLiteral",
                              "src": "11716:4:73",
                              "type": "",
                              "value": "0x35"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11722:1:73",
                              "nodeType": "YulLiteral",
                              "src": "11722:1:73",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11709:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "11709:6:73"
                          },
                          "nativeSrc": "11709:15:73",
                          "nodeType": "YulFunctionCall",
                          "src": "11709:15:73"
                        },
                        "nativeSrc": "11709:15:73",
                        "nodeType": "YulExpressionStatement",
                        "src": "11709:15:73"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 57164,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11232:4:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57161,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11576:9:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57158,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11308:4:73",
                      "valueSize": 1
                    }
                  ],
                  "id": 57168,
                  "nodeType": "InlineAssembly",
                  "src": "11091:643:73"
                }
              ]
            },
            "documentation": {
              "id": 57156,
              "nodeType": "StructuredDocumentation",
              "src": "10883:63:73",
              "text": "@dev Returns the address of the proxy deployed with `salt`."
            },
            "functionSelector": "5414dff0",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "predictDeterministicAddress",
            "nameLocation": "10960:27:73",
            "parameters": {
              "id": 57159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57158,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "10996:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57170,
                  "src": "10988:12:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57157,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10988:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10987:14:73"
            },
            "returnParameters": {
              "id": 57162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57161,
                  "mutability": "mutable",
                  "name": "predicted",
                  "nameLocation": "11031:9:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57170,
                  "src": "11023:17:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 57160,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11023:7:73",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11022:19:73"
            },
            "scope": 57200,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57183,
            "nodeType": "FunctionDefinition",
            "src": "11871:182:73",
            "nodes": [],
            "body": {
              "id": 57182,
              "nodeType": "Block",
              "src": "11932:121:73",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    57177
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 57177,
                      "mutability": "mutable",
                      "name": "m",
                      "nameLocation": "11950:1:73",
                      "nodeType": "VariableDeclaration",
                      "scope": 57182,
                      "src": "11942:9:73",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 57176,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "11942:7:73",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 57180,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 57178,
                      "name": "_initCode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57191,
                      "src": "11954:9:73",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                        "typeString": "function () view returns (bytes32)"
                      }
                    },
                    "id": 57179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11954:11:73",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11942:23:73"
                },
                {
                  "AST": {
                    "nativeSrc": "11984:63:73",
                    "nodeType": "YulBlock",
                    "src": "11984:63:73",
                    "statements": [
                      {
                        "nativeSrc": "11998:39:73",
                        "nodeType": "YulAssignment",
                        "src": "11998:39:73",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "12022:1:73",
                                  "nodeType": "YulIdentifier",
                                  "src": "12022:1:73"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "12025:4:73",
                                  "nodeType": "YulLiteral",
                                  "src": "12025:4:73",
                                  "type": "",
                                  "value": "0x13"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "12018:3:73",
                                "nodeType": "YulIdentifier",
                                "src": "12018:3:73"
                              },
                              "nativeSrc": "12018:12:73",
                              "nodeType": "YulFunctionCall",
                              "src": "12018:12:73"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12032:4:73",
                              "nodeType": "YulLiteral",
                              "src": "12032:4:73",
                              "type": "",
                              "value": "0x88"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "12008:9:73",
                            "nodeType": "YulIdentifier",
                            "src": "12008:9:73"
                          },
                          "nativeSrc": "12008:29:73",
                          "nodeType": "YulFunctionCall",
                          "src": "12008:29:73"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "11998:6:73",
                            "nodeType": "YulIdentifier",
                            "src": "11998:6:73"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 57177,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12022:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57174,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11998:6:73",
                      "valueSize": 1
                    }
                  ],
                  "id": 57181,
                  "nodeType": "InlineAssembly",
                  "src": "11975:72:73"
                }
              ]
            },
            "documentation": {
              "id": 57171,
              "nodeType": "StructuredDocumentation",
              "src": "11746:120:73",
              "text": "@dev Returns the initialization code hash of the proxy.\n Used for mining vanity addresses with create2crunch."
            },
            "functionSelector": "db4c545e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initCodeHash",
            "nameLocation": "11880:12:73",
            "parameters": {
              "id": 57172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11892:2:73"
            },
            "returnParameters": {
              "id": 57175,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57174,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "11924:6:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57183,
                  "src": "11916:14:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57173,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11916:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11915:16:73"
            },
            "scope": 57200,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 57191,
            "nodeType": "FunctionDefinition",
            "src": "12154:12764:73",
            "nodes": [],
            "body": {
              "id": 57190,
              "nodeType": "Block",
              "src": "12209:12709:73",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "12228:12684:73",
                    "nodeType": "YulBlock",
                    "src": "12228:12684:73",
                    "statements": [
                      {
                        "nativeSrc": "23596:16:73",
                        "nodeType": "YulAssignment",
                        "src": "23596:16:73",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "23607:4:73",
                              "nodeType": "YulLiteral",
                              "src": "23607:4:73",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "23601:5:73",
                            "nodeType": "YulIdentifier",
                            "src": "23601:5:73"
                          },
                          "nativeSrc": "23601:11:73",
                          "nodeType": "YulFunctionCall",
                          "src": "23601:11:73"
                        },
                        "variableNames": [
                          {
                            "name": "m",
                            "nativeSrc": "23596:1:73",
                            "nodeType": "YulIdentifier",
                            "src": "23596:1:73"
                          }
                        ]
                      },
                      {
                        "cases": [
                          {
                            "body": {
                              "nativeSrc": "23710:607:73",
                              "nodeType": "YulBlock",
                              "src": "23710:607:73",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "23819:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "23819:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "23822:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "23822:4:73",
                                            "type": "",
                                            "value": "0x75"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "23815:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "23815:3:73"
                                        },
                                        "nativeSrc": "23815:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "23815:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23829:16:73",
                                        "nodeType": "YulLiteral",
                                        "src": "23829:16:73",
                                        "type": "",
                                        "value": "0x604c573d6000fd"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "23808:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "23808:6:73"
                                    },
                                    "nativeSrc": "23808:38:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23808:38:73"
                                  },
                                  "nativeSrc": "23808:38:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "23808:38:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "23879:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "23879:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "23882:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "23882:4:73",
                                            "type": "",
                                            "value": "0x6e"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "23875:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "23875:3:73"
                                        },
                                        "nativeSrc": "23875:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "23875:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23889:66:73",
                                        "nodeType": "YulLiteral",
                                        "src": "23889:66:73",
                                        "type": "",
                                        "value": "0x3d3560203555604080361115604c5736038060403d373d3d355af43d6000803e"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "23868:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "23868:6:73"
                                    },
                                    "nativeSrc": "23868:88:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23868:88:73"
                                  },
                                  "nativeSrc": "23868:88:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "23868:88:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "23990:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "23990:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "23993:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "23993:4:73",
                                            "type": "",
                                            "value": "0x4e"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "23986:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "23986:3:73"
                                        },
                                        "nativeSrc": "23986:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "23986:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "24000:66:73",
                                        "nodeType": "YulLiteral",
                                        "src": "24000:66:73",
                                        "type": "",
                                        "value": "0x3735a920a3ca505d382bbc545af43d6000803e604c573d6000fd5b3d6000f35b"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "23979:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "23979:6:73"
                                    },
                                    "nativeSrc": "23979:88:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23979:88:73"
                                  },
                                  "nativeSrc": "23979:88:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "23979:88:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "24101:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "24101:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "24104:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "24104:4:73",
                                            "type": "",
                                            "value": "0x2e"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "24097:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "24097:3:73"
                                        },
                                        "nativeSrc": "24097:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "24097:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "24111:66:73",
                                        "nodeType": "YulLiteral",
                                        "src": "24111:66:73",
                                        "type": "",
                                        "value": "0x14605157363d3d37363d7f360894a13ba1a3210667c828492db98dca3e2076cc"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "24090:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "24090:6:73"
                                    },
                                    "nativeSrc": "24090:88:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "24090:88:73"
                                  },
                                  "nativeSrc": "24090:88:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "24090:88:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "24212:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "24212:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "24215:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "24215:4:73",
                                            "type": "",
                                            "value": "0x0e"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "24208:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "24208:3:73"
                                        },
                                        "nativeSrc": "24208:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "24208:12:73"
                                      },
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "address",
                                          "nativeSrc": "24222:7:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "24222:7:73"
                                        },
                                        "nativeSrc": "24222:9:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "24222:9:73"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "24201:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "24201:6:73"
                                    },
                                    "nativeSrc": "24201:31:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "24201:31:73"
                                  },
                                  "nativeSrc": "24201:31:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "24201:31:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "24262:1:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "24262:1:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "24265:28:73",
                                        "nodeType": "YulLiteral",
                                        "src": "24265:28:73",
                                        "type": "",
                                        "value": "0x60793d8160093d39f33d3d336d"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "24255:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "24255:6:73"
                                    },
                                    "nativeSrc": "24255:39:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "24255:39:73"
                                  },
                                  "nativeSrc": "24255:39:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "24255:39:73"
                                }
                              ]
                            },
                            "nativeSrc": "23703:614:73",
                            "nodeType": "YulCase",
                            "src": "23703:614:73",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "23708:1:73",
                              "nodeType": "YulLiteral",
                              "src": "23708:1:73",
                              "type": "",
                              "value": "0"
                            }
                          },
                          {
                            "body": {
                              "nativeSrc": "24338:527:73",
                              "nodeType": "YulBlock",
                              "src": "24338:527:73",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "24367:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "24367:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "24370:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "24370:4:73",
                                            "type": "",
                                            "value": "0x7b"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "24363:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "24363:3:73"
                                        },
                                        "nativeSrc": "24363:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "24363:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "24377:16:73",
                                        "nodeType": "YulLiteral",
                                        "src": "24377:16:73",
                                        "type": "",
                                        "value": "0x6052573d6000fd"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "24356:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "24356:6:73"
                                    },
                                    "nativeSrc": "24356:38:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "24356:38:73"
                                  },
                                  "nativeSrc": "24356:38:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "24356:38:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "24427:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "24427:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "24430:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "24430:4:73",
                                            "type": "",
                                            "value": "0x74"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "24423:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "24423:3:73"
                                        },
                                        "nativeSrc": "24423:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "24423:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "24437:66:73",
                                        "nodeType": "YulLiteral",
                                        "src": "24437:66:73",
                                        "type": "",
                                        "value": "0x3d356020355560408036111560525736038060403d373d3d355af43d6000803e"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "24416:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "24416:6:73"
                                    },
                                    "nativeSrc": "24416:88:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "24416:88:73"
                                  },
                                  "nativeSrc": "24416:88:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "24416:88:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "24538:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "24538:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "24541:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "24541:4:73",
                                            "type": "",
                                            "value": "0x54"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "24534:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "24534:3:73"
                                        },
                                        "nativeSrc": "24534:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "24534:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "24548:66:73",
                                        "nodeType": "YulLiteral",
                                        "src": "24548:66:73",
                                        "type": "",
                                        "value": "0x3735a920a3ca505d382bbc545af43d6000803e6052573d6000fd5b3d6000f35b"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "24527:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "24527:6:73"
                                    },
                                    "nativeSrc": "24527:88:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "24527:88:73"
                                  },
                                  "nativeSrc": "24527:88:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "24527:88:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "24649:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "24649:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "24652:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "24652:4:73",
                                            "type": "",
                                            "value": "0x34"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "24645:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "24645:3:73"
                                        },
                                        "nativeSrc": "24645:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "24645:12:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "24659:66:73",
                                        "nodeType": "YulLiteral",
                                        "src": "24659:66:73",
                                        "type": "",
                                        "value": "0x14605757363d3d37363d7f360894a13ba1a3210667c828492db98dca3e2076cc"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "24638:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "24638:6:73"
                                    },
                                    "nativeSrc": "24638:88:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "24638:88:73"
                                  },
                                  "nativeSrc": "24638:88:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "24638:88:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "m",
                                            "nativeSrc": "24760:1:73",
                                            "nodeType": "YulIdentifier",
                                            "src": "24760:1:73"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "24763:4:73",
                                            "nodeType": "YulLiteral",
                                            "src": "24763:4:73",
                                            "type": "",
                                            "value": "0x14"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "24756:3:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "24756:3:73"
                                        },
                                        "nativeSrc": "24756:12:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "24756:12:73"
                                      },
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "address",
                                          "nativeSrc": "24770:7:73",
                                          "nodeType": "YulIdentifier",
                                          "src": "24770:7:73"
                                        },
                                        "nativeSrc": "24770:9:73",
                                        "nodeType": "YulFunctionCall",
                                        "src": "24770:9:73"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "24749:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "24749:6:73"
                                    },
                                    "nativeSrc": "24749:31:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "24749:31:73"
                                  },
                                  "nativeSrc": "24749:31:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "24749:31:73"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "24810:1:73",
                                        "nodeType": "YulIdentifier",
                                        "src": "24810:1:73"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "24813:28:73",
                                        "nodeType": "YulLiteral",
                                        "src": "24813:28:73",
                                        "type": "",
                                        "value": "0x607f3d8160093d39f33d3d3373"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore",
                                      "nativeSrc": "24803:6:73",
                                      "nodeType": "YulIdentifier",
                                      "src": "24803:6:73"
                                    },
                                    "nativeSrc": "24803:39:73",
                                    "nodeType": "YulFunctionCall",
                                    "src": "24803:39:73"
                                  },
                                  "nativeSrc": "24803:39:73",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "24803:39:73"
                                }
                              ]
                            },
                            "nativeSrc": "24330:535:73",
                            "nodeType": "YulCase",
                            "src": "24330:535:73",
                            "value": "default"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "23675:3:73",
                              "nodeType": "YulLiteral",
                              "src": "23675:3:73",
                              "type": "",
                              "value": "112"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "23680:7:73",
                                "nodeType": "YulIdentifier",
                                "src": "23680:7:73"
                              },
                              "nativeSrc": "23680:9:73",
                              "nodeType": "YulFunctionCall",
                              "src": "23680:9:73"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "23671:3:73",
                            "nodeType": "YulIdentifier",
                            "src": "23671:3:73"
                          },
                          "nativeSrc": "23671:19:73",
                          "nodeType": "YulFunctionCall",
                          "src": "23671:19:73"
                        },
                        "nativeSrc": "23664:1201:73",
                        "nodeType": "YulSwitch",
                        "src": "23664:1201:73"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23596:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23819:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23879:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23990:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24101:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24212:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24262:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24367:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24427:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24538:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24649:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24760:1:73",
                      "valueSize": 1
                    },
                    {
                      "declaration": 57187,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24810:1:73",
                      "valueSize": 1
                    }
                  ],
                  "id": 57189,
                  "nodeType": "InlineAssembly",
                  "src": "12219:12693:73"
                }
              ]
            },
            "documentation": {
              "id": 57184,
              "nodeType": "StructuredDocumentation",
              "src": "12059:90:73",
              "text": "@dev Returns a pointer to the initialization code of a proxy created via this factory."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_initCode",
            "nameLocation": "12163:9:73",
            "parameters": {
              "id": 57185,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12172:2:73"
            },
            "returnParameters": {
              "id": 57188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57187,
                  "mutability": "mutable",
                  "name": "m",
                  "nameLocation": "12206:1:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57191,
                  "src": "12198:9:73",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 57186,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12198:7:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12197:11:73"
            },
            "scope": 57200,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 57199,
            "nodeType": "FunctionDefinition",
            "src": "25271:131:73",
            "nodes": [],
            "body": {
              "id": 57198,
              "nodeType": "Block",
              "src": "25337:65:73",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "25356:40:73",
                    "nodeType": "YulBlock",
                    "src": "25356:40:73",
                    "statements": [
                      {
                        "nativeSrc": "25370:16:73",
                        "nodeType": "YulAssignment",
                        "src": "25370:16:73",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "25385:1:73",
                          "nodeType": "YulLiteral",
                          "src": "25385:1:73",
                          "type": "",
                          "value": "0"
                        },
                        "variableNames": [
                          {
                            "name": "data.length",
                            "nativeSrc": "25370:11:73",
                            "nodeType": "YulIdentifier",
                            "src": "25370:11:73"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 57195,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "25370:11:73",
                      "suffix": "length",
                      "valueSize": 1
                    }
                  ],
                  "id": 57197,
                  "nodeType": "InlineAssembly",
                  "src": "25347:49:73"
                }
              ]
            },
            "documentation": {
              "id": 57192,
              "nodeType": "StructuredDocumentation",
              "src": "25207:59:73",
              "text": "@dev Helper function to return an empty bytes calldata."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_emptyData",
            "nameLocation": "25280:10:73",
            "parameters": {
              "id": 57193,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25290:2:73"
            },
            "returnParameters": {
              "id": 57196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57195,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "25331:4:73",
                  "nodeType": "VariableDeclaration",
                  "scope": 57199,
                  "src": "25316:19:73",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 57194,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "25316:5:73",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25315:21:73"
            },
            "scope": 57200,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "ERC1967Factory",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 56922,
          "nodeType": "StructuredDocumentation",
          "src": "57:247:73",
          "text": "@notice Factory for deploying and managing ERC1967 proxy contracts.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/utils/ERC1967Factory.sol)\n @author jtriley-eth (https://github.com/jtriley-eth/minimum-viable-proxy)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          57200
        ],
        "name": "ERC1967Factory",
        "nameLocation": "313:14:73",
        "scope": 57201,
        "usedErrors": [
          56925,
          56928,
          56931,
          56934
        ],
        "usedEvents": [
          56957,
          56964,
          56973
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 73
} as const;