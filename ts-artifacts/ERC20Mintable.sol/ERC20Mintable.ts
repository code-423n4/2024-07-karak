export const ERC20Mintable = {
  "abi": [
    {
      "type": "function",
      "name": "DOMAIN_SEPARATOR",
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
      "name": "allowance",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "result",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "result",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "burn",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "initialize",
      "inputs": [
        {
          "name": "name_",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "symbol_",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "decimals_",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
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
      "name": "nonces",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "result",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "permit",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "deadline",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "v",
          "type": "uint8",
          "internalType": "uint8"
        },
        {
          "name": "r",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "s",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "symbol",
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
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "name": "result",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AddressZero",
      "inputs": []
    },
    {
      "type": "error",
      "name": "AllowanceOverflow",
      "inputs": []
    },
    {
      "type": "error",
      "name": "AllowanceUnderflow",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InsufficientAllowance",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InsufficientBalance",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidPermit",
      "inputs": []
    },
    {
      "type": "error",
      "name": "PermitExpired",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TotalSupplyOverflow",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60808060405234601557610fae908161001b8239f35b600080fdfe6040608081526004908136101561001557600080fd5b600091823560e01c90816306fdde0314610c86578163095ea7b314610c1c5781631624f6c61461080f57816318160ddd146107e857816323b872dd146106fc578163313ce567146106da5781633644e5151461065257816340c10f191461058157816370a082311461054d5781637ecebe001461051957816395d89b41146104185781639dc29fac1461034e578163a9059cbb146102c0578163d505accf14610108575063dd62ed3e146100c857600080fd5b346101045780600319360112610104576020916100e3610d11565b906100ec610d39565b8452637f5e9f20600c52526034600c20549051908152f35b5080fd5b8383346101045760e060031936011261010457610123610d11565b61012b610d39565b60443590606435916084359460ff861686036102bc57610149610e94565b9384516020809601208142116102b05782519760c073ffffffffffffffffffffffffffffffffffffffff809916988997169965383775081901600e52878c5288600c2094855480957f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f84528b84019081528d8985017fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68152606086019c8d469052608087019330855260a08820602e527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c988525252898b525260a082015220604e526042602c208a5260ff16865260a435835260c435606052858060808b60015afa90873d51036102a4577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259798999a5001905586777f5e9f2000000000000000000000000000000000000000001790526034602c2055a380f35b8a63ddafbaef8b52601cfd5b89631a15a3cc8a52601cfd5b8680fd5b82843461034b578160031936011261034b576102da610d11565b602435916387a211a2600c5233815260209485600c2090815490818611610340575084900390555282600c208181540190558252600c5160601c337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8480a35160018152f35b63f4d678b88452601cfd5b80fd5b838334610104578060031936011261010457610368610d11565b6024359073ffffffffffffffffffffffffffffffffffffffff81169283156103f057506387a211a2600c5283526020600c208054948583116103e557508184950390556805345cdf77eb68f44c81815403905582527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602083a380f35b63f4d678b88552601cfd5b8590517f9fabe1c1000000000000000000000000000000000000000000000000000000008152fd5b82843461034b578060031936011261034b5781519080600180549061043c82610e41565b80865292602092600181169081156104ce5750600114610476575b610472868861046882890383610d5c565b5191829182610cab565b0390f35b9350600184527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8385106104bb575050505081016020016104688261047286610457565b805486860184015293820193810161049e565b610472989650879450602093506104689592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b820101929486610457565b50503461010457602060031936011261010457602091610537610d11565b906338377508600c525281600c20549051908152f35b5050346101045760206003193601126101045760209161056b610d11565b906387a211a2600c525281600c20549051908152f35b90503461064e578160031936011261064e5761059b610d11565b906024359273ffffffffffffffffffffffffffffffffffffffff83161561062857506805345cdf77eb68f44c80549184830192831061061d5750556387a211a2600c5282526020600c20818154019055602052600c5160601c817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a380f35b63e5cfe9578652601cfd5b517f9fabe1c1000000000000000000000000000000000000000000000000000000008152fd5b8280fd5b50503461010457816003193601126101045760209060a0610671610e94565b8381519101208251907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8252848201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc683820152466060820152306080820152209051908152f35b50503461010457816003193601126101045760209060ff600254169051908152f35b83833461010457606060031936011261010457610717610d11565b61071f610d39565b6044358260601b91602095338752600c93637f5e9f2081178552603485208054600181016107c5575b50506387a211a21784528684208054988985116107ba57508373ffffffffffffffffffffffffffffffffffffffff969798990390555285822081815401905585525160601c91167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8480a35160018152f35b63f4d678b88352601cfd5b8086116107dc5785900390556387a211a28a610748565b8a6313be252b8552601cfd5b5050346101045781600319360112610104576020906805345cdf77eb68f44c549051908152f35b833461034b57606060031936011261034b5767ffffffffffffffff91803583811161064e576108419036908301610dcc565b92602435818111610c18576108599036908401610dcc565b906044359260ff8416809403610c14578551828111610be8578061087d8754610e41565b97601f98898111610b7d575b50602090898311600114610ac2578892610ab7575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161785555b8251918211610a8b57506001916108e78354610e41565b868111610a29575b506020958211600114610971579484958293949592610966575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82841b9260031b1c19161790555b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00600254161760025580f35b015190508580610909565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08216958386527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf691865b888110610a1357508385969798106109dc575b505050811b01905561093a565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690558580806109cf565b81830151845592850192602092830192016109bc565b8386527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf68780850160051c82019260208610610a82575b0160051c019084905b828110610a775750506108ef565b878155018490610a69565b92508192610a60565b8460416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b01519050888061089e565b8880527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016895b818110610b655750908460019594939210610b2e575b505050811b0185556108d0565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055888080610b21565b92936020600181928786015181550195019301610b0b565b9091508780527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5638980850160051c82019260208610610bdf575b9085949392910160051c01905b818110610bd15750610889565b898155849350600101610bc4565b92508192610bb7565b6024866041847f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8480fd5b8380fd5b505034610104578060031936011261010457602091610c39610d11565b602435908452637f5e9f20600c52338252806034600c20558152602c5160601c907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b50503461010457816003193601126101045761047290610ca4610e94565b9051918291825b60208082528251818301819052939260005b858110610cfd575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b818101830151848201604001528201610cbd565b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610d3457565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff82168203610d3457565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610d9d57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f82011215610d345780359067ffffffffffffffff8211610d9d5760405192610e1f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610d5c565b82845260208383010111610d3457816000926020809301838601378301015290565b90600182811c92168015610e8a575b6020831014610e5b57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691610e50565b6040519060008260005491610ea883610e41565b80835292602090600190818116908115610f355750600114610ed5575b5050610ed392500383610d5c565b565b915092600080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563936000925b828410610f1d5750610ed39450505081016020013880610ec5565b85548885018301529485019487945092810192610f02565b905060209350610ed39592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201013880610ec556fea2646970667358221220b5ac2e856ca7ea9828106139ae9a97b8755ff6f5a7a0df7bbdef610bf1d5d1ff64736f6c63430008190033",
    "sourceMap": "65:1073:104:-:0;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6040608081526004908136101561001557600080fd5b600091823560e01c90816306fdde0314610c86578163095ea7b314610c1c5781631624f6c61461080f57816318160ddd146107e857816323b872dd146106fc578163313ce567146106da5781633644e5151461065257816340c10f191461058157816370a082311461054d5781637ecebe001461051957816395d89b41146104185781639dc29fac1461034e578163a9059cbb146102c0578163d505accf14610108575063dd62ed3e146100c857600080fd5b346101045780600319360112610104576020916100e3610d11565b906100ec610d39565b8452637f5e9f20600c52526034600c20549051908152f35b5080fd5b8383346101045760e060031936011261010457610123610d11565b61012b610d39565b60443590606435916084359460ff861686036102bc57610149610e94565b9384516020809601208142116102b05782519760c073ffffffffffffffffffffffffffffffffffffffff809916988997169965383775081901600e52878c5288600c2094855480957f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f84528b84019081528d8985017fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68152606086019c8d469052608087019330855260a08820602e527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c988525252898b525260a082015220604e526042602c208a5260ff16865260a435835260c435606052858060808b60015afa90873d51036102a4577f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259798999a5001905586777f5e9f2000000000000000000000000000000000000000001790526034602c2055a380f35b8a63ddafbaef8b52601cfd5b89631a15a3cc8a52601cfd5b8680fd5b82843461034b578160031936011261034b576102da610d11565b602435916387a211a2600c5233815260209485600c2090815490818611610340575084900390555282600c208181540190558252600c5160601c337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8480a35160018152f35b63f4d678b88452601cfd5b80fd5b838334610104578060031936011261010457610368610d11565b6024359073ffffffffffffffffffffffffffffffffffffffff81169283156103f057506387a211a2600c5283526020600c208054948583116103e557508184950390556805345cdf77eb68f44c81815403905582527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602083a380f35b63f4d678b88552601cfd5b8590517f9fabe1c1000000000000000000000000000000000000000000000000000000008152fd5b82843461034b578060031936011261034b5781519080600180549061043c82610e41565b80865292602092600181169081156104ce5750600114610476575b610472868861046882890383610d5c565b5191829182610cab565b0390f35b9350600184527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8385106104bb575050505081016020016104688261047286610457565b805486860184015293820193810161049e565b610472989650879450602093506104689592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b820101929486610457565b50503461010457602060031936011261010457602091610537610d11565b906338377508600c525281600c20549051908152f35b5050346101045760206003193601126101045760209161056b610d11565b906387a211a2600c525281600c20549051908152f35b90503461064e578160031936011261064e5761059b610d11565b906024359273ffffffffffffffffffffffffffffffffffffffff83161561062857506805345cdf77eb68f44c80549184830192831061061d5750556387a211a2600c5282526020600c20818154019055602052600c5160601c817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a380f35b63e5cfe9578652601cfd5b517f9fabe1c1000000000000000000000000000000000000000000000000000000008152fd5b8280fd5b50503461010457816003193601126101045760209060a0610671610e94565b8381519101208251907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8252848201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc683820152466060820152306080820152209051908152f35b50503461010457816003193601126101045760209060ff600254169051908152f35b83833461010457606060031936011261010457610717610d11565b61071f610d39565b6044358260601b91602095338752600c93637f5e9f2081178552603485208054600181016107c5575b50506387a211a21784528684208054988985116107ba57508373ffffffffffffffffffffffffffffffffffffffff969798990390555285822081815401905585525160601c91167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8480a35160018152f35b63f4d678b88352601cfd5b8086116107dc5785900390556387a211a28a610748565b8a6313be252b8552601cfd5b5050346101045781600319360112610104576020906805345cdf77eb68f44c549051908152f35b833461034b57606060031936011261034b5767ffffffffffffffff91803583811161064e576108419036908301610dcc565b92602435818111610c18576108599036908401610dcc565b906044359260ff8416809403610c14578551828111610be8578061087d8754610e41565b97601f98898111610b7d575b50602090898311600114610ac2578892610ab7575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161785555b8251918211610a8b57506001916108e78354610e41565b868111610a29575b506020958211600114610971579484958293949592610966575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82841b9260031b1c19161790555b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00600254161760025580f35b015190508580610909565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08216958386527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf691865b888110610a1357508385969798106109dc575b505050811b01905561093a565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690558580806109cf565b81830151845592850192602092830192016109bc565b8386527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf68780850160051c82019260208610610a82575b0160051c019084905b828110610a775750506108ef565b878155018490610a69565b92508192610a60565b8460416024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b01519050888061089e565b8880527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016895b818110610b655750908460019594939210610b2e575b505050811b0185556108d0565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055888080610b21565b92936020600181928786015181550195019301610b0b565b9091508780527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5638980850160051c82019260208610610bdf575b9085949392910160051c01905b818110610bd15750610889565b898155849350600101610bc4565b92508192610bb7565b6024866041847f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8480fd5b8380fd5b505034610104578060031936011261010457602091610c39610d11565b602435908452637f5e9f20600c52338252806034600c20558152602c5160601c907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b50503461010457816003193601126101045761047290610ca4610e94565b9051918291825b60208082528251818301819052939260005b858110610cfd575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b818101830151848201604001528201610cbd565b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610d3457565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff82168203610d3457565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610d9d57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f82011215610d345780359067ffffffffffffffff8211610d9d5760405192610e1f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610d5c565b82845260208383010111610d3457816000926020809301838601378301015290565b90600182811c92168015610e8a575b6020831014610e5b57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691610e50565b6040519060008260005491610ea883610e41565b80835292602090600190818116908115610f355750600114610ed5575b5050610ed392500383610d5c565b565b915092600080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563936000925b828410610f1d5750610ed39450505081016020013880610ec5565b85548885018301529485019487945092810192610f02565b905060209350610ed39592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201013880610ec556fea2646970667358221220b5ac2e856ca7ea9828106139ae9a97b8755ff6f5a7a0df7bbdef610bf1d5d1ff64736f6c63430008190033",
    "sourceMap": "65:1073:104:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;;;:::i;:::-;;;;:::i;:::-;7114:184:71;;;;;;;;;;65:1073:104;;;;;;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;:::i;:::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;13704:24:71;13781:2752;;;;;;;;65:1073:104;13781:2752:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;65:1073:104;13781:2752:71;;;;;;;65:1073:104;13781:2752:71;;;;;;65:1073:104;13781:2752:71;;;;;;;;;;;;;65:1073:104;13781:2752:71;;;;;;;;;;;65:1073:104;13781:2752:71;;;65:1073:104;;13781:2752:71;;65:1073:104;;;13781:2752:71;;;65:1073:104;13781:2752:71;65:1073:104;13781:2752:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;65:1073:104;;13781:2752:71;;;;;;;;;;;;;;65:1073:104;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;:::i;:::-;;;8378:1143:71;;;;;;;65:1073:104;8378:1143:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;65:1073:104;;;;;8378:1143:71;;;;;;65:1073:104;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;:::i;:::-;;;;;;;597:18;;;593:44;;19466:887:71;;;;;;65:1073:104;19466:887:71;;;;;;;;;;;;;;;;;;;;;;;;;;;65:1073:104;19466:887:71;;65:1073:104;;19466:887:71;;;;;;593:44:104;65:1073;;;624:13;;;;65:1073;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;;;945:7;;65:1073;;;;;:::i;:::-;;;;;;;945:7;65:1073;;;945:7;;;;65:1073;;;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;945:7;65:1073;;;;;;;;;-1:-1:-1;;;;65:1073:104;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;;;:::i;:::-;12929:205:71;;;;;;;;;65:1073:104;;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;;;:::i;:::-;6680:148:71;;;;;;;;;65:1073:104;;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;:::i;:::-;;;;;;;;444:16;440:42;;17884:946:71;;;;;;;;;;;;;;;;;;;;65:1073:104;17884:946:71;;;;;;;;65:1073:104;17884:946:71;;;;;;;65:1073:104;17884:946:71;;65:1073:104;;17884:946:71;;;;;;440:42:104;65:1073;469:13;;;;65:1073;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;16961:346:71;65:1073:104;;:::i;:::-;;;;;;16884:24:71;16961:346;;;;;;;;;;;;;;;;;;;;;;;;;;65:1073:104;;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;;1094:9;65:1073;;;;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;:::i;:::-;;;:::i;:::-;;;10164:1922:71;65:1073:104;10164:1922:71;65:1073:104;;10164:1922:71;;;;;;;;;;;;;;;;65:1073:104;10164:1922:71;;;;65:1073:104;10164:1922:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;65:1073:104;10164:1922:71;;;;;;;65:1073:104;;;;;10164:1922:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;65:1073:104;;;;;;;-1:-1:-1;;65:1073:104;;;;;;6408:68:71;;;65:1073:104;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;310:17;;65:1073;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;337:21;65:1073;;;337:21;65:1073;;;;;;;-1:-1:-1;65:1073:104;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;65:1073:104;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;65:1073:104;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;;;:::i;:::-;;;7568:413:71;;;;;;;;;;;;;;;;;;;;;;;;;;65:1073:104;;;;;;;;;;;;-1:-1:-1;;65:1073:104;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;65:1073:104;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;65:1073:104;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:::o;:::-;;;;;;;;;;;;;;;;;-1:-1:-1;65:1073:104;;-1:-1:-1;;;65:1073:104;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;65:1073:104;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "burn(address,uint256)": "9dc29fac",
    "decimals()": "313ce567",
    "initialize(string,string,uint8)": "1624f6c6",
    "mint(address,uint256)": "40c10f19",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AddressZero\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"AllowanceOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"AllowanceUnderflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPermit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PermitExpired\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TotalSupplyOverflow\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"result\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name_\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol_\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"decimals_\",\"type\":\"uint8\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AllowanceOverflow()\":[{\"details\":\"The allowance has overflowed.\"}],\"AllowanceUnderflow()\":[{\"details\":\"The allowance has underflowed.\"}],\"InsufficientAllowance()\":[{\"details\":\"Insufficient allowance.\"}],\"InsufficientBalance()\":[{\"details\":\"Insufficient balance.\"}],\"InvalidPermit()\":[{\"details\":\"The permit is invalid.\"}],\"PermitExpired()\":[{\"details\":\"The permit has expired.\"}],\"TotalSupplyOverflow()\":[{\"details\":\"The total supply has overflowed.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `amount` tokens is approved by `owner` to be used by `spender`.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `amount` tokens is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"details\":\"Returns the EIP-712 domain separator for the EIP-2612 permit.\"},\"allowance(address,address)\":{\"details\":\"Returns the amount of tokens that `spender` can spend on behalf of `owner`.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Emits a {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `owner`.\"},\"decimals()\":{\"details\":\"Returns the decimals places of the token.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"nonces(address)\":{\"details\":\"Returns the current nonce for `owner`. This value is used to compute the signature for EIP-2612 permit.\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"details\":\"Sets `value` as the allowance of `spender` over the tokens of `owner`, authorized by a signed approval by `owner`. Emits a {Approval} event.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Transfer `amount` tokens from the caller to `to`. Requirements: - `from` must at least have `amount`. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `amount` tokens from `from` to `to`. Note: Does not update the allowance if it is the maximum uint256 value. Requirements: - `from` must at least have `amount`. - The caller must have at least `amount` of allowance to transfer the tokens of `from`. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/ERC20Mintable.sol\":\"ERC20Mintable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/tokens/ERC20.sol\":{\"keccak256\":\"0xb4a3f9ba8a05107f7370de42cff57f3ad26dafd438712c11531a5892de2f59e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f0a9ca06e3cf6dea1f9a4c5599581573b7d81cd64dc3afb582f325ccf5fdd6dc\",\"dweb:/ipfs/Qmb9r5dDceNF4W8S5u6i85RsNTgE5XG9HbTXkyS25ad3C6\"]},\"test/utils/ERC20Mintable.sol\":{\"keccak256\":\"0xf77976b3a86d96c9c643ac4920d0112a1ac3a15f9846f59ecd8ee12793ef58aa\",\"urls\":[\"bzz-raw://6cbee04c7720fc097c3282f825a4c24f63e74982b77ba832d7bd20db51b136fc\",\"dweb:/ipfs/QmPgYLbAWK1HnotHS98o4ouJ8xgWoqfRaReF4mByBHha5t\"]}},\"version\":1}",
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
          "name": "AddressZero"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "AllowanceOverflow"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "AllowanceUnderflow"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InsufficientAllowance"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InsufficientBalance"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPermit"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "PermitExpired"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TotalSupplyOverflow"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DOMAIN_SEPARATOR",
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
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "burn"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name_",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol_",
              "type": "string"
            },
            {
              "internalType": "uint8",
              "name": "decimals_",
              "type": "uint8"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "initialize"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mint"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "permit"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
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
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "DOMAIN_SEPARATOR()": {
            "details": "Returns the EIP-712 domain separator for the EIP-2612 permit."
          },
          "allowance(address,address)": {
            "details": "Returns the amount of tokens that `spender` can spend on behalf of `owner`."
          },
          "approve(address,uint256)": {
            "details": "Sets `amount` as the allowance of `spender` over the caller's tokens. Emits a {Approval} event."
          },
          "balanceOf(address)": {
            "details": "Returns the amount of tokens owned by `owner`."
          },
          "decimals()": {
            "details": "Returns the decimals places of the token."
          },
          "name()": {
            "details": "Returns the name of the token."
          },
          "nonces(address)": {
            "details": "Returns the current nonce for `owner`. This value is used to compute the signature for EIP-2612 permit."
          },
          "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
            "details": "Sets `value` as the allowance of `spender` over the tokens of `owner`, authorized by a signed approval by `owner`. Emits a {Approval} event."
          },
          "symbol()": {
            "details": "Returns the symbol of the token."
          },
          "totalSupply()": {
            "details": "Returns the amount of tokens in existence."
          },
          "transfer(address,uint256)": {
            "details": "Transfer `amount` tokens from the caller to `to`. Requirements: - `from` must at least have `amount`. Emits a {Transfer} event."
          },
          "transferFrom(address,address,uint256)": {
            "details": "Transfers `amount` tokens from `from` to `to`. Note: Does not update the allowance if it is the maximum uint256 value. Requirements: - `from` must at least have `amount`. - The caller must have at least `amount` of allowance to transfer the tokens of `from`. Emits a {Transfer} event."
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
        "test/utils/ERC20Mintable.sol": "ERC20Mintable"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/solady/src/tokens/ERC20.sol": {
        "keccak256": "0xb4a3f9ba8a05107f7370de42cff57f3ad26dafd438712c11531a5892de2f59e0",
        "urls": [
          "bzz-raw://f0a9ca06e3cf6dea1f9a4c5599581573b7d81cd64dc3afb582f325ccf5fdd6dc",
          "dweb:/ipfs/Qmb9r5dDceNF4W8S5u6i85RsNTgE5XG9HbTXkyS25ad3C6"
        ],
        "license": "MIT"
      },
      "test/utils/ERC20Mintable.sol": {
        "keccak256": "0xf77976b3a86d96c9c643ac4920d0112a1ac3a15f9846f59ecd8ee12793ef58aa",
        "urls": [
          "bzz-raw://6cbee04c7720fc097c3282f825a4c24f63e74982b77ba832d7bd20db51b136fc",
          "dweb:/ipfs/QmPgYLbAWK1HnotHS98o4ouJ8xgWoqfRaReF4mByBHha5t"
        ],
        "license": null
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/utils/ERC20Mintable.sol",
    "id": 71270,
    "exportedSymbols": {
      "ERC20": [
        56069
      ],
      "ERC20Mintable": [
        71269
      ]
    },
    "nodeType": "SourceUnit",
    "src": "0:1139:104",
    "nodes": [
      {
        "id": 71159,
        "nodeType": "PragmaDirective",
        "src": "0:24:104",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".17"
        ]
      },
      {
        "id": 71160,
        "nodeType": "ImportDirective",
        "src": "26:37:104",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/tokens/ERC20.sol",
        "file": "solady/src/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 71270,
        "sourceUnit": 56070,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 71269,
        "nodeType": "ContractDefinition",
        "src": "65:1073:104",
        "nodes": [
          {
            "id": 71164,
            "nodeType": "VariableDeclaration",
            "src": "103:20:104",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_name",
            "nameLocation": "118:5:104",
            "scope": 71269,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 71163,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "103:6:104",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 71166,
            "nodeType": "VariableDeclaration",
            "src": "129:22:104",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_symbol",
            "nameLocation": "144:7:104",
            "scope": 71269,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 71165,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "129:6:104",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 71168,
            "nodeType": "VariableDeclaration",
            "src": "157:23:104",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_decimals",
            "nameLocation": "171:9:104",
            "scope": 71269,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 71167,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "157:5:104",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "visibility": "private"
          },
          {
            "id": 71190,
            "nodeType": "FunctionDefinition",
            "src": "187:178:104",
            "nodes": [],
            "body": {
              "id": 71189,
              "nodeType": "Block",
              "src": "277:88:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 71179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 71177,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71164,
                      "src": "287:5:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 71178,
                      "name": "name_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71170,
                      "src": "295:5:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "287:13:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 71180,
                  "nodeType": "ExpressionStatement",
                  "src": "287:13:104"
                },
                {
                  "expression": {
                    "id": 71183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 71181,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71166,
                      "src": "310:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 71182,
                      "name": "symbol_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71172,
                      "src": "320:7:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "310:17:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 71184,
                  "nodeType": "ExpressionStatement",
                  "src": "310:17:104"
                },
                {
                  "expression": {
                    "id": 71187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 71185,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71168,
                      "src": "337:9:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 71186,
                      "name": "decimals_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71174,
                      "src": "349:9:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "337:21:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 71188,
                  "nodeType": "ExpressionStatement",
                  "src": "337:21:104"
                }
              ]
            },
            "functionSelector": "1624f6c6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initialize",
            "nameLocation": "196:10:104",
            "parameters": {
              "id": 71175,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71170,
                  "mutability": "mutable",
                  "name": "name_",
                  "nameLocation": "221:5:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 71190,
                  "src": "207:19:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 71169,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "207:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 71172,
                  "mutability": "mutable",
                  "name": "symbol_",
                  "nameLocation": "242:7:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 71190,
                  "src": "228:21:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 71171,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 71174,
                  "mutability": "mutable",
                  "name": "decimals_",
                  "nameLocation": "257:9:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 71190,
                  "src": "251:15:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 71173,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "206:61:104"
            },
            "returnParameters": {
              "id": 71176,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "277:0:104"
            },
            "scope": 71269,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 71213,
            "nodeType": "FunctionDefinition",
            "src": "371:145:104",
            "nodes": [],
            "body": {
              "id": 71212,
              "nodeType": "Block",
              "src": "430:86:104",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 71202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 71197,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71192,
                      "src": "444:2:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 71200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "458:1:104",
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
                        "id": 71199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "450:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 71198,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "450:7:104",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 71201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "450:10:104",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "444:16:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 71206,
                  "nodeType": "IfStatement",
                  "src": "440:42:104",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 71203,
                        "name": "AddressZero",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71268,
                        "src": "469:11:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 71204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "469:13:104",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 71205,
                    "nodeType": "RevertStatement",
                    "src": "462:20:104"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 71208,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71192,
                        "src": "498:2:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 71209,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71194,
                        "src": "502:6:104",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 71207,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55970,
                      "src": "492:5:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 71210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "492:17:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 71211,
                  "nodeType": "ExpressionStatement",
                  "src": "492:17:104"
                }
              ]
            },
            "functionSelector": "40c10f19",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "380:4:104",
            "parameters": {
              "id": 71195,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71192,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "393:2:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 71213,
                  "src": "385:10:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 71191,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:104",
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
                  "id": 71194,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "405:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 71213,
                  "src": "397:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71193,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "384:28:104"
            },
            "returnParameters": {
              "id": 71196,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "430:0:104"
            },
            "scope": 71269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 71236,
            "nodeType": "FunctionDefinition",
            "src": "522:151:104",
            "nodes": [],
            "body": {
              "id": 71235,
              "nodeType": "Block",
              "src": "583:90:104",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 71225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 71220,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71215,
                      "src": "597:4:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 71223,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "613:1:104",
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
                        "id": 71222,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "605:7:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 71221,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "605:7:104",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 71224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "605:10:104",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "597:18:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 71229,
                  "nodeType": "IfStatement",
                  "src": "593:44:104",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 71226,
                        "name": "AddressZero",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71268,
                        "src": "624:11:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 71227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "624:13:104",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 71228,
                    "nodeType": "RevertStatement",
                    "src": "617:20:104"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 71231,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71215,
                        "src": "653:4:104",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 71232,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71217,
                        "src": "659:6:104",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 71230,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55998,
                      "src": "647:5:104",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 71233,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "647:19:104",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 71234,
                  "nodeType": "ExpressionStatement",
                  "src": "647:19:104"
                }
              ]
            },
            "functionSelector": "9dc29fac",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burn",
            "nameLocation": "531:4:104",
            "parameters": {
              "id": 71218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71215,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "544:4:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 71236,
                  "src": "536:12:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 71214,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "536:7:104",
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
                  "id": 71217,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "558:6:104",
                  "nodeType": "VariableDeclaration",
                  "scope": 71236,
                  "src": "550:14:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "550:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "535:30:104"
            },
            "returnParameters": {
              "id": 71219,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "583:0:104"
            },
            "scope": 71269,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 71246,
            "nodeType": "FunctionDefinition",
            "src": "723:90:104",
            "nodes": [],
            "body": {
              "id": 71245,
              "nodeType": "Block",
              "src": "784:29:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 71243,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 71164,
                    "src": "801:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 71242,
                  "id": 71244,
                  "nodeType": "Return",
                  "src": "794:12:104"
                }
              ]
            },
            "baseFunctions": [
              55738
            ],
            "documentation": {
              "id": 71237,
              "nodeType": "StructuredDocumentation",
              "src": "679:39:104",
              "text": "@dev Returns the name of the token."
            },
            "functionSelector": "06fdde03",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "732:4:104",
            "overrides": {
              "id": 71239,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "751:8:104"
            },
            "parameters": {
              "id": 71238,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "736:2:104"
            },
            "returnParameters": {
              "id": 71242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71241,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 71246,
                  "src": "769:13:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 71240,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "768:15:104"
            },
            "scope": 71269,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 71256,
            "nodeType": "FunctionDefinition",
            "src": "865:94:104",
            "nodes": [],
            "body": {
              "id": 71255,
              "nodeType": "Block",
              "src": "928:31:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 71253,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 71166,
                    "src": "945:7:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 71252,
                  "id": 71254,
                  "nodeType": "Return",
                  "src": "938:14:104"
                }
              ]
            },
            "baseFunctions": [
              55744
            ],
            "documentation": {
              "id": 71247,
              "nodeType": "StructuredDocumentation",
              "src": "819:41:104",
              "text": "@dev Returns the symbol of the token."
            },
            "functionSelector": "95d89b41",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "874:6:104",
            "overrides": {
              "id": 71249,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "895:8:104"
            },
            "parameters": {
              "id": 71248,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "880:2:104"
            },
            "returnParameters": {
              "id": 71252,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71251,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 71256,
                  "src": "913:13:104",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 71250,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "913:6:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "912:15:104"
            },
            "scope": 71269,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 71266,
            "nodeType": "FunctionDefinition",
            "src": "1020:90:104",
            "nodes": [],
            "body": {
              "id": 71265,
              "nodeType": "Block",
              "src": "1077:33:104",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 71263,
                    "name": "_decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 71168,
                    "src": "1094:9:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 71262,
                  "id": 71264,
                  "nodeType": "Return",
                  "src": "1087:16:104"
                }
              ]
            },
            "baseFunctions": [
              55753
            ],
            "documentation": {
              "id": 71257,
              "nodeType": "StructuredDocumentation",
              "src": "965:50:104",
              "text": "@dev Returns the decimals places of the token."
            },
            "functionSelector": "313ce567",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "1029:8:104",
            "overrides": {
              "id": 71259,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1052:8:104"
            },
            "parameters": {
              "id": 71258,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1037:2:104"
            },
            "returnParameters": {
              "id": 71262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71261,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 71266,
                  "src": "1070:5:104",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 71260,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1070:5:104",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1069:7:104"
            },
            "scope": 71269,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 71268,
            "nodeType": "ErrorDefinition",
            "src": "1116:20:104",
            "nodes": [],
            "errorSelector": "9fabe1c1",
            "name": "AddressZero",
            "nameLocation": "1122:11:104",
            "parameters": {
              "id": 71267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1133:2:104"
            }
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 71161,
              "name": "ERC20",
              "nameLocations": [
                "91:5:104"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 56069,
              "src": "91:5:104"
            },
            "id": 71162,
            "nodeType": "InheritanceSpecifier",
            "src": "91:5:104"
          }
        ],
        "canonicalName": "ERC20Mintable",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          71269,
          56069
        ],
        "name": "ERC20Mintable",
        "nameLocation": "74:13:104",
        "scope": 71270,
        "usedErrors": [
          55656,
          55659,
          55662,
          55665,
          55668,
          55671,
          55674,
          71268
        ],
        "usedEvents": [
          55683,
          55692
        ]
      }
    ]
  },
  "id": 104
} as const;