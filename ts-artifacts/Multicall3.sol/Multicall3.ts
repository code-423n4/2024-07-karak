export const Multicall3 = {
  "abi": [
    {
      "type": "function",
      "name": "aggregate",
      "inputs": [
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Call[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "returnData",
          "type": "bytes[]",
          "internalType": "bytes[]"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "aggregate3",
      "inputs": [
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Call3[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "allowFailure",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "aggregate3Value",
      "inputs": [
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Call3Value[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "allowFailure",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "value",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "blockAndAggregate",
      "inputs": [
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Call[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "blockHash",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "getBasefee",
      "inputs": [],
      "outputs": [
        {
          "name": "basefee",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBlockHash",
      "inputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "blockHash",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBlockNumber",
      "inputs": [],
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getChainId",
      "inputs": [],
      "outputs": [
        {
          "name": "chainid",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCurrentBlockCoinbase",
      "inputs": [],
      "outputs": [
        {
          "name": "coinbase",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCurrentBlockDifficulty",
      "inputs": [],
      "outputs": [
        {
          "name": "difficulty",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCurrentBlockGasLimit",
      "inputs": [],
      "outputs": [
        {
          "name": "gaslimit",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCurrentBlockTimestamp",
      "inputs": [],
      "outputs": [
        {
          "name": "timestamp",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getEthBalance",
      "inputs": [
        {
          "name": "addr",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "balance",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getLastBlockHash",
      "inputs": [],
      "outputs": [
        {
          "name": "blockHash",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tryAggregate",
      "inputs": [
        {
          "name": "requireSuccess",
          "type": "bool",
          "internalType": "bool"
        },
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Call[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "tryBlockAndAggregate",
      "inputs": [
        {
          "name": "requireSuccess",
          "type": "bool",
          "internalType": "bool"
        },
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Call[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "blockHash",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct Multicall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601557610ce8908161001b8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80630f28c97d14610117578063174dea7114610112578063252dba421461010d57806327e86d6e146101085780633408e47014610103578063399542e9146100fe5780633e64a696146100f957806342cbb15c146100f45780634d2301cc146100ef57806372425d9d146100ea57806382ad56cb146100e557806386d516e8146100e0578063a8b0574e146100db578063bce38bd7146100d6578063c3077fa9146100d15763ee82ac5e146100cc57600080fd5b610858565b6107be565b61079b565b610780565b610765565b61067b565b610660565b610638565b6105ff565b6105e4565b6105c0565b610550565b610512565b610433565b610297565b34610132576000600319360112610132576020604051428152f35b600080fd5b9181601f840112156101325782359167ffffffffffffffff8311610132576020808501948460051b01011161013257565b6020600319820112610132576004359067ffffffffffffffff82116101325761019391600401610137565b9091565b919082519283825260005b8481106101e15750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016101a2565b908082519081815260208091019281808460051b8301019501936000915b8483106102235750505050505090565b9091929394958480610273837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086600196030187528a518360409180511515845201519181858201520190610197565b9801930193019194939290610213565b9060206102949281815201906101f5565b90565b6102a036610168565b60006102ab82610906565b9160005b8181106102d5576102d1846102c5853414610ad2565b60405191829182610283565b0390f35b6102df81856109b6565b516102eb8284886109cf565b600080604061031f818501358099019861030486610a0f565b926103126060880188610a19565b9390915180948193610a6a565b03925af19161032c610a78565b90610341602094859384840152829015159052565b51910135171561035457506001016102af565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b906040820190825260206040602084015283518092526060830192602060608460051b8301019501936000915b8483106103e75750505050505090565b9091929394958480610423837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa086600196030187528a51610197565b98019301930191949392906103d7565b61043c36610168565b9061044e610449836108ee565b6108a5565b918083527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061047c826108ee565b0160005b81811061050157505060005b8181106104a257604051806102d18643836103aa565b806104fb6000806104b66001958789610b37565b816104ce6104c383610a0f565b926020810190610a19565b91906104df60405180948193610a6a565b03925af16104eb610a78565b6104f584896109b6565b52610b77565b0161048c565b806060602080938801015201610480565b346101325760006003193601126101325760206040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4301408152f35b34610132576000600319360112610132576020604051468152f35b90604060031983011261013257600435801515810361013257916024359067ffffffffffffffff82116101325761019391600401610137565b61029493926060928252602082015281604082015201906101f5565b6102d16105d56105cf3661056b565b91610c1c565b604051918291434043846105a4565b34610132576000600319360112610132576020604051488152f35b34610132576000600319360112610132576020604051438152f35b73ffffffffffffffffffffffffffffffffffffffff81160361013257565b346101325760206003193601126101325760206004356106578161061a565b31604051908152f35b34610132576000600319360112610132576020604051448152f35b61068436610168565b61068d81610906565b9060005b8181106106a657604051806102d18582610283565b6106b081846109b6565b516106bc828487610bdc565b6000806106c883610a0f565b6106da82604061031281880188610a19565b03925af1916106e7610a78565b906106fc602094859384840152829015159052565b51910135171561070f5750600101610691565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b34610132576000600319360112610132576020604051458152f35b34610132576000600319360112610132576020604051418152f35b6102d16107aa6105cf3661056b565b6040519182916020835260208301906101f5565b6107c736610168565b6107d081610906565b9160005b8281106107ed57604051806102d18643804090846105a4565b806108526107fd600193876109b6565b51610809838787610b37565b60008082356108178161061a565b8161082760209586810190610a19565b9190826040519384928337810182815203925af190610844610a78565b908301521515809152610b77565b016107d4565b34610132576020600319360112610132576020604051600435408152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f604051930116820182811067ffffffffffffffff8211176108e957604052565b610876565b67ffffffffffffffff81116108e95760051b60200190565b90610913610449836108ee565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061094182946108ee565b016000805b8281106109535750505050565b604090815182810181811067ffffffffffffffff8211176108e9576020935283815282606081830152828701015201610946565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80518210156109ca5760209160051b010190565b610987565b91908110156109ca5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8181360301821215610132570190565b356102948161061a565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610132570180359067ffffffffffffffff82116101325760200191813603831361013257565b908092918237016000815290565b3d15610acd573d9067ffffffffffffffff82116108e957610ac060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f850116016108a5565b9182523d6000602084013e565b606090565b15610ad957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4d756c746963616c6c333a2076616c7565206d69736d617463680000000000006044820152fd5b91908110156109ca5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc181360301821215610132570190565b15610b7e57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4d756c746963616c6c333a2063616c6c206661696c65640000000000000000006044820152fd5b91908110156109ca5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa181360301821215610132570190565b929190610c2882610906565b9360005b838110610c395750505050565b80610c46600192886109b6565b5183610c53838888610b37565b6000808235610c618161061a565b81610c7160209586810190610a19565b9190826040519384928337810182815203925af190610c8e610a78565b908401521515809252610ca3575b5001610c2c565b610cac90610b77565b38610c9c56fea2646970667358221220db6619f1c87ff93861b8765a6544f7269665111541902706721946cd6d2e682f64736f6c63430008190033",
    "sourceMap": "503:9107:80:-:0;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436101561001257600080fd5b60003560e01c80630f28c97d14610117578063174dea7114610112578063252dba421461010d57806327e86d6e146101085780633408e47014610103578063399542e9146100fe5780633e64a696146100f957806342cbb15c146100f45780634d2301cc146100ef57806372425d9d146100ea57806382ad56cb146100e557806386d516e8146100e0578063a8b0574e146100db578063bce38bd7146100d6578063c3077fa9146100d15763ee82ac5e146100cc57600080fd5b610858565b6107be565b61079b565b610780565b610765565b61067b565b610660565b610638565b6105ff565b6105e4565b6105c0565b610550565b610512565b610433565b610297565b34610132576000600319360112610132576020604051428152f35b600080fd5b9181601f840112156101325782359167ffffffffffffffff8311610132576020808501948460051b01011161013257565b6020600319820112610132576004359067ffffffffffffffff82116101325761019391600401610137565b9091565b919082519283825260005b8481106101e15750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016101a2565b908082519081815260208091019281808460051b8301019501936000915b8483106102235750505050505090565b9091929394958480610273837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086600196030187528a518360409180511515845201519181858201520190610197565b9801930193019194939290610213565b9060206102949281815201906101f5565b90565b6102a036610168565b60006102ab82610906565b9160005b8181106102d5576102d1846102c5853414610ad2565b60405191829182610283565b0390f35b6102df81856109b6565b516102eb8284886109cf565b600080604061031f818501358099019861030486610a0f565b926103126060880188610a19565b9390915180948193610a6a565b03925af19161032c610a78565b90610341602094859384840152829015159052565b51910135171561035457506001016102af565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b906040820190825260206040602084015283518092526060830192602060608460051b8301019501936000915b8483106103e75750505050505090565b9091929394958480610423837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa086600196030187528a51610197565b98019301930191949392906103d7565b61043c36610168565b9061044e610449836108ee565b6108a5565b918083527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061047c826108ee565b0160005b81811061050157505060005b8181106104a257604051806102d18643836103aa565b806104fb6000806104b66001958789610b37565b816104ce6104c383610a0f565b926020810190610a19565b91906104df60405180948193610a6a565b03925af16104eb610a78565b6104f584896109b6565b52610b77565b0161048c565b806060602080938801015201610480565b346101325760006003193601126101325760206040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4301408152f35b34610132576000600319360112610132576020604051468152f35b90604060031983011261013257600435801515810361013257916024359067ffffffffffffffff82116101325761019391600401610137565b61029493926060928252602082015281604082015201906101f5565b6102d16105d56105cf3661056b565b91610c1c565b604051918291434043846105a4565b34610132576000600319360112610132576020604051488152f35b34610132576000600319360112610132576020604051438152f35b73ffffffffffffffffffffffffffffffffffffffff81160361013257565b346101325760206003193601126101325760206004356106578161061a565b31604051908152f35b34610132576000600319360112610132576020604051448152f35b61068436610168565b61068d81610906565b9060005b8181106106a657604051806102d18582610283565b6106b081846109b6565b516106bc828487610bdc565b6000806106c883610a0f565b6106da82604061031281880188610a19565b03925af1916106e7610a78565b906106fc602094859384840152829015159052565b51910135171561070f5750600101610691565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b34610132576000600319360112610132576020604051458152f35b34610132576000600319360112610132576020604051418152f35b6102d16107aa6105cf3661056b565b6040519182916020835260208301906101f5565b6107c736610168565b6107d081610906565b9160005b8281106107ed57604051806102d18643804090846105a4565b806108526107fd600193876109b6565b51610809838787610b37565b60008082356108178161061a565b8161082760209586810190610a19565b9190826040519384928337810182815203925af190610844610a78565b908301521515809152610b77565b016107d4565b34610132576020600319360112610132576020604051600435408152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f604051930116820182811067ffffffffffffffff8211176108e957604052565b610876565b67ffffffffffffffff81116108e95760051b60200190565b90610913610449836108ee565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061094182946108ee565b016000805b8281106109535750505050565b604090815182810181811067ffffffffffffffff8211176108e9576020935283815282606081830152828701015201610946565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80518210156109ca5760209160051b010190565b610987565b91908110156109ca5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8181360301821215610132570190565b356102948161061a565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610132570180359067ffffffffffffffff82116101325760200191813603831361013257565b908092918237016000815290565b3d15610acd573d9067ffffffffffffffff82116108e957610ac060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f850116016108a5565b9182523d6000602084013e565b606090565b15610ad957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4d756c746963616c6c333a2076616c7565206d69736d617463680000000000006044820152fd5b91908110156109ca5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc181360301821215610132570190565b15610b7e57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4d756c746963616c6c333a2063616c6c206661696c65640000000000000000006044820152fd5b91908110156109ca5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa181360301821215610132570190565b929190610c2882610906565b9360005b838110610c395750505050565b80610c46600192886109b6565b5183610c53838888610b37565b6000808235610c618161061a565b81610c7160209586810190610a19565b9190826040519384928337810182815203925af190610c8e610a78565b908401521515809252610ca3575b5001610c2c565b610cac90610b77565b38610c9c56fea2646970667358221220db6619f1c87ff93861b8765a6544f7269665111541902706721946cd6d2e682f64736f6c63430008190033",
    "sourceMap": "503:9107:80:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;:::i;:::-;;;;;-1:-1:-1;;503:9107:80;;;;;;;;8795:15;503:9107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;-1:-1:-1;;503:9107:80;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;-1:-1:-1;503:9107:80;;;;;;;;;;;-1:-1:-1;503:9107:80;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;503:9107:80;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;:::i;:::-;-1:-1:-1;5972:20:80;;;:::i;:::-;6042:13;-1:-1:-1;6057:10:80;;;;;;503:9107;7668:9;7660:66;7668:9;;:27;7660:66;:::i;:::-;6178:11;503:9107;;;;;;:::i;:::-;;;;6042:13;6107;;;;:::i;:::-;;6142:8;;;;;:::i;:::-;-1:-1:-1;6178:11:80;;503:9107;6178:11;;;503:9107;;;;6465:12;;;;:::i;:::-;6495:14;;;;;;;:::i;:::-;503:9107;;;;;;;;;:::i;:::-;6465:45;;;;;;;:::i;:::-;6444:17;6427:83;6444:17;;;;;;;6427:83;;503:9107;;;;;;6427:83;6524:1017;;;;;;;;503:9107;;;6042:13;;6524:1017;;-1:-1:-1;6524:1017:80;503:9107;6524:1017;;;;;;;;-1:-1:-1;6524:1017:80;503:9107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;-1:-1:-1;503:9107:80;;;;;;1441:13;;-1:-1:-1;1456:10:80;;;;;;503:9107;;;;;1305:12;503:9107;;:::i;1441:13::-;1516:8;1610:43;-1:-1:-1;1516:8:80;;503:9107;1516:8;;;;:::i;:::-;1565:11;1582:13;1565:11;;;:::i;:::-;1582:13;503:9107;1582:13;;;;:::i;:::-;503:9107;;;;;;;;;;:::i;:::-;1565:31;;;;;;:::i;:::-;1538:58;;;;:::i;:::-;;1610:43;:::i;:::-;503:9107;1441:13;;503:9107;;;;;;;;;;;;;;;;;;-1:-1:-1;;503:9107:80;;;;;;;;;9185:12;503:9107;9175:27;503:9107;;;;;;;;-1:-1:-1;;503:9107:80;;;;;;;;9588:13;503:9107;;;;;;-1:-1:-1;;503:9107:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3203:35;503:9107;;;:::i;:::-;3203:35;;:::i;:::-;503:9107;;3123:12;;;;3157:23;3123:12;503:9107;;:::i;:::-;;;;;-1:-1:-1;;503:9107:80;;;;;;;;9445:13;503:9107;;;;;;;;-1:-1:-1;;503:9107:80;;;;;;;;8122:12;503:9107;;;;;;;;;;:::o;:::-;;;;;-1:-1:-1;;503:9107:80;;;;;;;;;;;:::i;:::-;8979:12;503:9107;;;;;;;;;;;-1:-1:-1;;503:9107:80;;;;;;;;8458:16;503:9107;;;;;;;:::i;:::-;4198:20;;;:::i;:::-;4263:13;-1:-1:-1;4278:10:80;;;;;;4441:14;503:9107;;;;;;:::i;4263:13::-;4328;;;;:::i;:::-;;4363:8;;;;;:::i;:::-;-1:-1:-1;4423:12:80;;;;:::i;:::-;503:9107;4441:14;;;;;;;;:::i;503:9107::-;4423:33;;;;;;;:::i;:::-;4402:17;4385:71;4402:17;;;;;;;4385:71;;503:9107;;;;;;4385:71;4470:1017;;;;;;;;503:9107;;;4263:13;;4470:1017;;-1:-1:-1;4470:1017:80;503:9107;4470:1017;;;;;;;;-1:-1:-1;4470:1017:80;503:9107;;;;;-1:-1:-1;;503:9107:80;;;;;;;;8626:14;503:9107;;;;;;;;-1:-1:-1;;503:9107:80;;;;;;;;8285:14;503:9107;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;;;;:::i;:::-;2166:20;;;:::i;:::-;2229:13;-1:-1:-1;2244:10:80;;;;;;503:9107;;;;;3123:12;3157:23;;;503:9107;;:::i;2229:13::-;2294;2453:50;2294:13;3839:4;2294:13;;;:::i;:::-;;2328:8;;;;;:::i;:::-;-1:-1:-1;503:9107:80;;;;;;:::i;:::-;2405:13;;;;;;;;;:::i;:::-;503:9107;;;;;;;;;;;;;;;2388:31;;;;;;;:::i;:::-;2367:17;;;2350:69;503:9107;;;;;2453:50;:::i;:::-;503:9107;2229:13;;503:9107;;;;;-1:-1:-1;;503:9107:80;;;;;;;;;;7954:22;503:9107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;:::i;:::-;;;;;;;;;;;:::o;:::-;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;-1:-1:-1;;503:9107:80;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;503:9107:80;;;;:::o;:::-;;;:::o;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1986:565::-;;;;2166:20;;;:::i;:::-;2229:13;-1:-1:-1;2244:10:80;;;;;;1986:565;;;;:::o;2229:13::-;2294;;503:9107;2294:13;;;:::i;:::-;;2328:8;;;;;;:::i;:::-;-1:-1:-1;503:9107:80;;;;;;:::i;:::-;2405:13;;;;;;;;;:::i;:::-;503:9107;;;;;;;;;;;;;;;2388:31;;;;;;;:::i;:::-;2367:17;;;2350:69;503:9107;;;;;2433:70;;2229:13;503:9107;;2229:13;;2433:70;2453:50;;;:::i;:::-;2433:70;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "aggregate((address,bytes)[])": "252dba42",
    "aggregate3((address,bool,bytes)[])": "82ad56cb",
    "aggregate3Value((address,bool,uint256,bytes)[])": "174dea71",
    "blockAndAggregate((address,bytes)[])": "c3077fa9",
    "getBasefee()": "3e64a696",
    "getBlockHash(uint256)": "ee82ac5e",
    "getBlockNumber()": "42cbb15c",
    "getChainId()": "3408e470",
    "getCurrentBlockCoinbase()": "a8b0574e",
    "getCurrentBlockDifficulty()": "72425d9d",
    "getCurrentBlockGasLimit()": "86d516e8",
    "getCurrentBlockTimestamp()": "0f28c97d",
    "getEthBalance(address)": "4d2301cc",
    "getLastBlockHash()": "27e86d6e",
    "tryAggregate(bool,(address,bytes)[])": "bce38bd7",
    "tryBlockAndAggregate(bool,(address,bytes)[])": "399542e9"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes[]\",\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Call3[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Call3Value[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3Value\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"blockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBasefee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"basefee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBlockNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"chainid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"coinbase\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"difficulty\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryAggregate\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryBlockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct Multicall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Michael Elliot <mike@makerdao.com>Joshua Levine <joshua@makerdao.com>Nick Johnson <arachnid@notdot.net>Andreas Bigger <andreas@nascent.xyz>Matt Solomon <matt@mattsolomon.dev>\",\"details\":\"Multicall & Multicall2 backwards-compatibleAggregate methods are marked `payable` to save 24 gas per call\",\"kind\":\"dev\",\"methods\":{\"aggregate((address,bytes)[])\":{\"params\":{\"calls\":\"An array of Call structs\"},\"returns\":{\"blockNumber\":\"The block number where the calls were executed\",\"returnData\":\"An array of bytes containing the responses\"}},\"aggregate3((address,bool,bytes)[])\":{\"params\":{\"calls\":\"An array of Call3 structs\"},\"returns\":{\"returnData\":\"An array of Result structs\"}},\"aggregate3Value((address,bool,uint256,bytes)[])\":{\"params\":{\"calls\":\"An array of Call3Value structs\"},\"returns\":{\"returnData\":\"An array of Result structs\"}},\"blockAndAggregate((address,bytes)[])\":{\"params\":{\"calls\":\"An array of Call structs\"},\"returns\":{\"blockHash\":\"The hash of the block where the calls were executed\",\"blockNumber\":\"The block number where the calls were executed\",\"returnData\":\"An array of Result structs\"}},\"getBlockHash(uint256)\":{\"params\":{\"blockNumber\":\"The block number\"}},\"tryAggregate(bool,(address,bytes)[])\":{\"params\":{\"calls\":\"An array of Call structs\",\"requireSuccess\":\"If true, require all calls to succeed\"},\"returns\":{\"returnData\":\"An array of Result structs\"}},\"tryBlockAndAggregate(bool,(address,bytes)[])\":{\"params\":{\"calls\":\"An array of Call structs\"},\"returns\":{\"blockHash\":\"The hash of the block where the calls were executed\",\"blockNumber\":\"The block number where the calls were executed\",\"returnData\":\"An array of Result structs\"}}},\"title\":\"Multicall3\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"aggregate((address,bytes)[])\":{\"notice\":\"Backwards-compatible call aggregation with Multicall\"},\"aggregate3((address,bool,bytes)[])\":{\"notice\":\"Aggregate calls, ensuring each returns success if required\"},\"aggregate3Value((address,bool,uint256,bytes)[])\":{\"notice\":\"Aggregate calls with a msg valueReverts if msg.value is less than the sum of the call values\"},\"blockAndAggregate((address,bytes)[])\":{\"notice\":\"Backwards-compatible with Multicall2Aggregate calls and allow failures using tryAggregate\"},\"getBasefee()\":{\"notice\":\"Gets the base fee of the given blockCan revert if the BASEFEE opcode is not implemented by the given chain\"},\"getBlockHash(uint256)\":{\"notice\":\"Returns the block hash for the given block number\"},\"getBlockNumber()\":{\"notice\":\"Returns the block number\"},\"getChainId()\":{\"notice\":\"Returns the chain id\"},\"getCurrentBlockCoinbase()\":{\"notice\":\"Returns the block coinbase\"},\"getCurrentBlockDifficulty()\":{\"notice\":\"Returns the block difficulty\"},\"getCurrentBlockGasLimit()\":{\"notice\":\"Returns the block gas limit\"},\"getCurrentBlockTimestamp()\":{\"notice\":\"Returns the block timestamp\"},\"getEthBalance(address)\":{\"notice\":\"Returns the (ETH) balance of a given address\"},\"getLastBlockHash()\":{\"notice\":\"Returns the block hash of the last block\"},\"tryAggregate(bool,(address,bytes)[])\":{\"notice\":\"Backwards-compatible with Multicall2Aggregate calls without requiring success\"},\"tryBlockAndAggregate(bool,(address,bytes)[])\":{\"notice\":\"Backwards-compatible with Multicall2Aggregate calls and allow failures using tryAggregate\"}},\"notice\":\"Aggregate results from multiple function calls\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/Multicall3.sol\":\"Multicall3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"test/utils/Multicall3.sol\":{\"keccak256\":\"0xe4310bc77827e3607cbe451d14d280f26f7f86b9e65c5b659df166a4a0687df9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://94d151d1ff38638cf9a4e93a1a891e443220e64bfd6a550ba11fb8244ee8736a\",\"dweb:/ipfs/QmaCJRNhDkJKgv24vgnRW5kTcHriXUuWGN8akNHxBWePBv\"]}},\"version\":1}",
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
              "internalType": "struct Multicall3.Call[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "aggregate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            },
            {
              "internalType": "bytes[]",
              "name": "returnData",
              "type": "bytes[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct Multicall3.Call3[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "allowFailure",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "aggregate3",
          "outputs": [
            {
              "internalType": "struct Multicall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct Multicall3.Call3Value[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "allowFailure",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "aggregate3Value",
          "outputs": [
            {
              "internalType": "struct Multicall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct Multicall3.Call[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "blockAndAggregate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "blockHash",
              "type": "bytes32"
            },
            {
              "internalType": "struct Multicall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getBasefee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "basefee",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getBlockHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "blockHash",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getBlockNumber",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getChainId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "chainid",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getCurrentBlockCoinbase",
          "outputs": [
            {
              "internalType": "address",
              "name": "coinbase",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getCurrentBlockDifficulty",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "difficulty",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getCurrentBlockGasLimit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "gaslimit",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getCurrentBlockTimestamp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getEthBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getLastBlockHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "blockHash",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "requireSuccess",
              "type": "bool"
            },
            {
              "internalType": "struct Multicall3.Call[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "tryAggregate",
          "outputs": [
            {
              "internalType": "struct Multicall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "requireSuccess",
              "type": "bool"
            },
            {
              "internalType": "struct Multicall3.Call[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "tryBlockAndAggregate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "blockHash",
              "type": "bytes32"
            },
            {
              "internalType": "struct Multicall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "aggregate((address,bytes)[])": {
            "params": {
              "calls": "An array of Call structs"
            },
            "returns": {
              "blockNumber": "The block number where the calls were executed",
              "returnData": "An array of bytes containing the responses"
            }
          },
          "aggregate3((address,bool,bytes)[])": {
            "params": {
              "calls": "An array of Call3 structs"
            },
            "returns": {
              "returnData": "An array of Result structs"
            }
          },
          "aggregate3Value((address,bool,uint256,bytes)[])": {
            "params": {
              "calls": "An array of Call3Value structs"
            },
            "returns": {
              "returnData": "An array of Result structs"
            }
          },
          "blockAndAggregate((address,bytes)[])": {
            "params": {
              "calls": "An array of Call structs"
            },
            "returns": {
              "blockHash": "The hash of the block where the calls were executed",
              "blockNumber": "The block number where the calls were executed",
              "returnData": "An array of Result structs"
            }
          },
          "getBlockHash(uint256)": {
            "params": {
              "blockNumber": "The block number"
            }
          },
          "tryAggregate(bool,(address,bytes)[])": {
            "params": {
              "calls": "An array of Call structs",
              "requireSuccess": "If true, require all calls to succeed"
            },
            "returns": {
              "returnData": "An array of Result structs"
            }
          },
          "tryBlockAndAggregate(bool,(address,bytes)[])": {
            "params": {
              "calls": "An array of Call structs"
            },
            "returns": {
              "blockHash": "The hash of the block where the calls were executed",
              "blockNumber": "The block number where the calls were executed",
              "returnData": "An array of Result structs"
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "aggregate((address,bytes)[])": {
            "notice": "Backwards-compatible call aggregation with Multicall"
          },
          "aggregate3((address,bool,bytes)[])": {
            "notice": "Aggregate calls, ensuring each returns success if required"
          },
          "aggregate3Value((address,bool,uint256,bytes)[])": {
            "notice": "Aggregate calls with a msg valueReverts if msg.value is less than the sum of the call values"
          },
          "blockAndAggregate((address,bytes)[])": {
            "notice": "Backwards-compatible with Multicall2Aggregate calls and allow failures using tryAggregate"
          },
          "getBasefee()": {
            "notice": "Gets the base fee of the given blockCan revert if the BASEFEE opcode is not implemented by the given chain"
          },
          "getBlockHash(uint256)": {
            "notice": "Returns the block hash for the given block number"
          },
          "getBlockNumber()": {
            "notice": "Returns the block number"
          },
          "getChainId()": {
            "notice": "Returns the chain id"
          },
          "getCurrentBlockCoinbase()": {
            "notice": "Returns the block coinbase"
          },
          "getCurrentBlockDifficulty()": {
            "notice": "Returns the block difficulty"
          },
          "getCurrentBlockGasLimit()": {
            "notice": "Returns the block gas limit"
          },
          "getCurrentBlockTimestamp()": {
            "notice": "Returns the block timestamp"
          },
          "getEthBalance(address)": {
            "notice": "Returns the (ETH) balance of a given address"
          },
          "getLastBlockHash()": {
            "notice": "Returns the block hash of the last block"
          },
          "tryAggregate(bool,(address,bytes)[])": {
            "notice": "Backwards-compatible with Multicall2Aggregate calls without requiring success"
          },
          "tryBlockAndAggregate(bool,(address,bytes)[])": {
            "notice": "Backwards-compatible with Multicall2Aggregate calls and allow failures using tryAggregate"
          }
        },
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
        "test/utils/Multicall3.sol": "Multicall3"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "test/utils/Multicall3.sol": {
        "keccak256": "0xe4310bc77827e3607cbe451d14d280f26f7f86b9e65c5b659df166a4a0687df9",
        "urls": [
          "bzz-raw://94d151d1ff38638cf9a4e93a1a891e443220e64bfd6a550ba11fb8244ee8736a",
          "dweb:/ipfs/QmaCJRNhDkJKgv24vgnRW5kTcHriXUuWGN8akNHxBWePBv"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "id": 80
} as const;