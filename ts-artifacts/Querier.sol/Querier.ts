export const Querier = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_vaultSupervisor",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "_delegationSupervisor",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "cancelOwnershipHandover",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "completeOwnershipHandover",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "delegationSupervisor",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IDelegationSupervisor"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getDeposits",
      "inputs": [
        {
          "name": "stakers",
          "type": "address[]",
          "internalType": "address[]"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct IQuerier.DepositResult[]",
          "components": [
            {
              "name": "user",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "vaults",
              "type": "address[]",
              "internalType": "contract IVault[]"
            },
            {
              "name": "tokens",
              "type": "address[]",
              "internalType": "contract IERC20[]"
            },
            {
              "name": "assets",
              "type": "uint256[]",
              "internalType": "uint256[]"
            },
            {
              "name": "shares",
              "type": "uint256[]",
              "internalType": "uint256[]"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getWithdraws",
      "inputs": [
        {
          "name": "staker",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "allWithdrawals",
          "type": "tuple[]",
          "internalType": "struct Withdraw.QueuedWithdrawal[]",
          "components": [
            {
              "name": "staker",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "delegatedTo",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "nonce",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "start",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "request",
              "type": "tuple",
              "internalType": "struct Withdraw.WithdrawRequest",
              "components": [
                {
                  "name": "vaults",
                  "type": "address[]",
                  "internalType": "contract IVault[]"
                },
                {
                  "name": "shares",
                  "type": "uint256[]",
                  "internalType": "uint256[]"
                },
                {
                  "name": "withdrawer",
                  "type": "address",
                  "internalType": "address"
                }
              ]
            }
          ]
        },
        {
          "name": "isWithdrawPending",
          "type": "bool[]",
          "internalType": "bool[]"
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
          "name": "result",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownershipHandoverExpiresAt",
      "inputs": [
        {
          "name": "pendingOwner",
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
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "requestOwnershipHandover",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "setDelegationSupervisor",
      "inputs": [
        {
          "name": "_delegationSupervisor",
          "type": "address",
          "internalType": "contract IDelegationSupervisor"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setVaultSupervisor",
      "inputs": [
        {
          "name": "_vaultSupervisor",
          "type": "address",
          "internalType": "contract IVaultSupervisor"
        }
      ],
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
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "vaultSupervisor",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IVaultSupervisor"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "OwnershipHandoverCanceled",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipHandoverRequested",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "oldOwner",
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
      "name": "AlreadyInitialized",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NewOwnerIsZeroAddress",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NoHandoverRequest",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Unauthorized",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x60803460b557601f61121f38819003918201601f19168301916001600160401b0383118484101760ba57808492604094855283398101031260b557604b602060458360d0565b920160d0565b33638b78c6d819553360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3600080546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560405161113b90816100e48239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820360b55756fe6080604052600436101561001257600080fd5b60003560e01c80632569296214610d8357806354d1f13d14610d3b578063715018a614610cda5780637235200e14610ca65780637362851714610c3e5780638da5cb5b14610beb578063b9c7f52e14610752578063df6704481461071e578063e85062b91461028a578063f04e283e146101e0578063f2fde38b1461014b578063fabeab93146100e35763fee81cf4146100ab57600080fd5b346100de5760206003193601126100de576100c4610dcf565b63389a75e1600c52600052602080600c2054604051908152f35b600080fd5b346100de5760206003193601126100de5760043573ffffffffffffffffffffffffffffffffffffffff81168091036100de5761011d6110cd565b7fffffffffffffffffffffffff00000000000000000000000000000000000000006000541617600055600080f35b60206003193601126100de5761015f610dcf565b6101676110cd565b8060601b156101d25773ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b637448fbae6000526004601cfd5b60206003193601126100de576101f4610dcf565b6101fc6110cd565b63389a75e1600c52806000526020600c20908154421161027c57600073ffffffffffffffffffffffffffffffffffffffff9255167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b636f5e88186000526004601cfd5b346100de5760206003193601126100de5760043567ffffffffffffffff81116100de57366023820112156100de5780600401356102c681610f72565b916102d46040519384610f31565b8183526024602084019260051b820101903682116100de57602401915b8183106106f1578351847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061033e61032884610f72565b936103366040519586610f31565b808552610f72565b0160005b8181106106bb57505060009073ffffffffffffffffffffffffffffffffffffffff60005416915b81518110156105865773ffffffffffffffffffffffffffffffffffffffff610391828461108a565b511690604051917f94f649dd0000000000000000000000000000000000000000000000000000000083526004830152600082602481875afa801561057a57600090600080600092610442575b6001955073ffffffffffffffffffffffffffffffffffffffff610400868961108a565b5116936040519461041086610f15565b85526020850152604084015260608301526080820152610430828761108a565b5261043b818661108a565b5001610369565b505050503d806000843e6104568184610f31565b60808382810103126100de57825167ffffffffffffffff81116100de5761048290828501908501610fab565b9060208401519167ffffffffffffffff83116100de57818501601f8487010112156100de5782850151926104b584610f72565b936104c36040519586610f31565b8085526020850184880160208360051b858b010101116100de57602083890101905b60208360051b858b010101821061054d5750505050604085015167ffffffffffffffff81116100de5761051d90838701908701611029565b9160608601519567ffffffffffffffff87116100de576001966105439282019101611029565b90929190916103dd565b815173ffffffffffffffffffffffffffffffffffffffff811681036100de578152602091820191016104e5565b6040513d6000823e3d90fd5b836040518091602082016020835281518091526040830190602060408260051b8601019301916000905b8282106105bf57505050500390f35b91939092947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0908203018252845161062060a073ffffffffffffffffffffffffffffffffffffffff8351168452602083015190806020860152840190610df2565b6040820151908381036040850152602080835192838152019201906000905b80821061068d5750505061067d60019360209361066a85946060808401519085830390860152610e3c565b9160808092015191818403910152610e3c565b96019201920185949391926105b0565b90919260208060019273ffffffffffffffffffffffffffffffffffffffff875116815201940192019061063f565b6020906040516106ca81610f15565b60008152606080848301528060408301528080830152608082015282828701015201610342565b823573ffffffffffffffffffffffffffffffffffffffff811681036100de578152602092830192016102f1565b346100de5760006003193601126100de57602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b346100de5760206003193601126100de5761076b610dcf565b600180546040517f8c47555900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152919216600082602481845afa91821561057a576000926109c9575b5091815191816107f56107df85610f72565b946107ed6040519687610f31565b808652610f72565b947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06020860196013687376000915b6108e4575b505060405192604084016040855282518091526060850190602060608260051b8801019401916000905b828210610897575050505060209084830382860152519182815201939060005b8181106108805784860385f35b825115158652602095860195909201918301610873565b90919294956020806108d3897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08c869e9c030186528951610e70565b970192019201909291979597610853565b82959395518210156109c15781602061090061093b948661108a565b51604051809581927f4618c9740000000000000000000000000000000000000000000000000000000083528460048401526024830190610e70565b0381855afa801561057a578793600091610981575b508391901561096f5781610964828961108a565b525b01919395610824565b600061097b828961108a565b52610966565b919350506020813d6020116109b9575b8161099e60209383610f31565b810103126100de575180151581036100de5786929083610950565b3d9150610991565b949294610829565b9091503d90816000823e6109dd8282610f31565b60208183810103126100de5780519167ffffffffffffffff83116100de57808201601f8484010112156100de578282015190610a1882610f72565b93610a266040519586610f31565b828552602085019082850160208560051b8388010101116100de57602081860101915b60208560051b83880101018310610a675750505050505090836107cd565b825167ffffffffffffffff81116100de57828701019060a0907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090828285898c010301126100de5760405192610abc84610f15565b610ac860208601610f8a565b8452610ad660408601610f8a565b602085015260608501516040850152608085015160608501528401519167ffffffffffffffff83116100de57606090838601898c010301126100de576040519283606081011067ffffffffffffffff606086011117610bbc57606084016040526020838601015167ffffffffffffffff81116100de57610b609060208a8d01918689010101610fab565b8452604083860101519367ffffffffffffffff85116100de57610ba5606060209795889796610b9a8f988a8f819b01918585010101611029565b888601520101610f8a565b604082015260808201528152019301929050610a49565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b346100de5760006003193601126100de5760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b346100de5760206003193601126100de5760043573ffffffffffffffffffffffffffffffffffffffff81168091036100de57610c786110cd565b7fffffffffffffffffffffffff00000000000000000000000000000000000000006001541617600155600080f35b346100de5760006003193601126100de57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b60006003193601126100de57610cee6110cd565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a355005b60006003193601126100de5763389a75e1600c523360005260006020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92600080a2005b60006003193601126100de5763389a75e1600c52336000526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d600080a2005b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100de57565b90815180825260208080930193019160005b828110610e12575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101610e04565b90815180825260208080930193019160005b828110610e5c575050505090565b835185529381019392810192600101610e4e565b9060e0608073ffffffffffffffffffffffffffffffffffffffff93848151168452846020820151166020850152604081015160408501526060810151606085015201519260a060808401526040610f0b610ed78651606060a0880152610100870190610df2565b60208701517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608783030160c0880152610e3c565b9401511691015290565b60a0810190811067ffffffffffffffff821117610bbc57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610bbc57604052565b67ffffffffffffffff8111610bbc5760051b60200190565b519073ffffffffffffffffffffffffffffffffffffffff821682036100de57565b9080601f830112156100de57815190602091610fc681610f72565b93610fd46040519586610f31565b81855260208086019260051b8201019283116100de57602001905b828210610ffd575050505090565b815173ffffffffffffffffffffffffffffffffffffffff811681036100de578152908301908301610fef565b9080601f830112156100de5781519060209161104481610f72565b936110526040519586610f31565b81855260208086019260051b8201019283116100de57602001905b82821061107b575050505090565b8151815290830190830161106d565b805182101561109e5760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275433036110f757565b6382b429006000526004601cfdfea2646970667358221220b4f460a2dd433dbc0a5e3b78dded0eb69b50622e1c621b55ebe8003724a25b3364736f6c63430008190033",
    "sourceMap": "246:2070:82:-:0;;;;;;;;;;;;;-1:-1:-1;;246:2070:82;;;;-1:-1:-1;;;;;246:2070:82;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::i;:::-;539:10;5710:347:69;;;539:10:82;-1:-1:-1;5710:347:69;;;;-1:-1:-1;246:2070:82;;-1:-1:-1;;;;;246:2070:82;;;-1:-1:-1;;;;;;246:2070:82;;;;;;;-1:-1:-1;246:2070:82;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;246:2070:82;;;;;;-1:-1:-1;246:2070:82;;;;;-1:-1:-1;246:2070:82;;;;-1:-1:-1;;;;;246:2070:82;;;;;;:::o",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436101561001257600080fd5b60003560e01c80632569296214610d8357806354d1f13d14610d3b578063715018a614610cda5780637235200e14610ca65780637362851714610c3e5780638da5cb5b14610beb578063b9c7f52e14610752578063df6704481461071e578063e85062b91461028a578063f04e283e146101e0578063f2fde38b1461014b578063fabeab93146100e35763fee81cf4146100ab57600080fd5b346100de5760206003193601126100de576100c4610dcf565b63389a75e1600c52600052602080600c2054604051908152f35b600080fd5b346100de5760206003193601126100de5760043573ffffffffffffffffffffffffffffffffffffffff81168091036100de5761011d6110cd565b7fffffffffffffffffffffffff00000000000000000000000000000000000000006000541617600055600080f35b60206003193601126100de5761015f610dcf565b6101676110cd565b8060601b156101d25773ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b637448fbae6000526004601cfd5b60206003193601126100de576101f4610dcf565b6101fc6110cd565b63389a75e1600c52806000526020600c20908154421161027c57600073ffffffffffffffffffffffffffffffffffffffff9255167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a355005b636f5e88186000526004601cfd5b346100de5760206003193601126100de5760043567ffffffffffffffff81116100de57366023820112156100de5780600401356102c681610f72565b916102d46040519384610f31565b8183526024602084019260051b820101903682116100de57602401915b8183106106f1578351847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061033e61032884610f72565b936103366040519586610f31565b808552610f72565b0160005b8181106106bb57505060009073ffffffffffffffffffffffffffffffffffffffff60005416915b81518110156105865773ffffffffffffffffffffffffffffffffffffffff610391828461108a565b511690604051917f94f649dd0000000000000000000000000000000000000000000000000000000083526004830152600082602481875afa801561057a57600090600080600092610442575b6001955073ffffffffffffffffffffffffffffffffffffffff610400868961108a565b5116936040519461041086610f15565b85526020850152604084015260608301526080820152610430828761108a565b5261043b818661108a565b5001610369565b505050503d806000843e6104568184610f31565b60808382810103126100de57825167ffffffffffffffff81116100de5761048290828501908501610fab565b9060208401519167ffffffffffffffff83116100de57818501601f8487010112156100de5782850151926104b584610f72565b936104c36040519586610f31565b8085526020850184880160208360051b858b010101116100de57602083890101905b60208360051b858b010101821061054d5750505050604085015167ffffffffffffffff81116100de5761051d90838701908701611029565b9160608601519567ffffffffffffffff87116100de576001966105439282019101611029565b90929190916103dd565b815173ffffffffffffffffffffffffffffffffffffffff811681036100de578152602091820191016104e5565b6040513d6000823e3d90fd5b836040518091602082016020835281518091526040830190602060408260051b8601019301916000905b8282106105bf57505050500390f35b91939092947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0908203018252845161062060a073ffffffffffffffffffffffffffffffffffffffff8351168452602083015190806020860152840190610df2565b6040820151908381036040850152602080835192838152019201906000905b80821061068d5750505061067d60019360209361066a85946060808401519085830390860152610e3c565b9160808092015191818403910152610e3c565b96019201920185949391926105b0565b90919260208060019273ffffffffffffffffffffffffffffffffffffffff875116815201940192019061063f565b6020906040516106ca81610f15565b60008152606080848301528060408301528080830152608082015282828701015201610342565b823573ffffffffffffffffffffffffffffffffffffffff811681036100de578152602092830192016102f1565b346100de5760006003193601126100de57602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b346100de5760206003193601126100de5761076b610dcf565b600180546040517f8c47555900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152919216600082602481845afa91821561057a576000926109c9575b5091815191816107f56107df85610f72565b946107ed6040519687610f31565b808652610f72565b947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06020860196013687376000915b6108e4575b505060405192604084016040855282518091526060850190602060608260051b8801019401916000905b828210610897575050505060209084830382860152519182815201939060005b8181106108805784860385f35b825115158652602095860195909201918301610873565b90919294956020806108d3897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08c869e9c030186528951610e70565b970192019201909291979597610853565b82959395518210156109c15781602061090061093b948661108a565b51604051809581927f4618c9740000000000000000000000000000000000000000000000000000000083528460048401526024830190610e70565b0381855afa801561057a578793600091610981575b508391901561096f5781610964828961108a565b525b01919395610824565b600061097b828961108a565b52610966565b919350506020813d6020116109b9575b8161099e60209383610f31565b810103126100de575180151581036100de5786929083610950565b3d9150610991565b949294610829565b9091503d90816000823e6109dd8282610f31565b60208183810103126100de5780519167ffffffffffffffff83116100de57808201601f8484010112156100de578282015190610a1882610f72565b93610a266040519586610f31565b828552602085019082850160208560051b8388010101116100de57602081860101915b60208560051b83880101018310610a675750505050505090836107cd565b825167ffffffffffffffff81116100de57828701019060a0907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090828285898c010301126100de5760405192610abc84610f15565b610ac860208601610f8a565b8452610ad660408601610f8a565b602085015260608501516040850152608085015160608501528401519167ffffffffffffffff83116100de57606090838601898c010301126100de576040519283606081011067ffffffffffffffff606086011117610bbc57606084016040526020838601015167ffffffffffffffff81116100de57610b609060208a8d01918689010101610fab565b8452604083860101519367ffffffffffffffff85116100de57610ba5606060209795889796610b9a8f988a8f819b01918585010101611029565b888601520101610f8a565b604082015260808201528152019301929050610a49565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b346100de5760006003193601126100de5760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275473ffffffffffffffffffffffffffffffffffffffff60405191168152f35b346100de5760206003193601126100de5760043573ffffffffffffffffffffffffffffffffffffffff81168091036100de57610c786110cd565b7fffffffffffffffffffffffff00000000000000000000000000000000000000006001541617600155600080f35b346100de5760006003193601126100de57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b60006003193601126100de57610cee6110cd565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a355005b60006003193601126100de5763389a75e1600c523360005260006020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c92600080a2005b60006003193601126100de5763389a75e1600c52336000526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d600080a2005b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100de57565b90815180825260208080930193019160005b828110610e12575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101610e04565b90815180825260208080930193019160005b828110610e5c575050505090565b835185529381019392810192600101610e4e565b9060e0608073ffffffffffffffffffffffffffffffffffffffff93848151168452846020820151166020850152604081015160408501526060810151606085015201519260a060808401526040610f0b610ed78651606060a0880152610100870190610df2565b60208701517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608783030160c0880152610e3c565b9401511691015290565b60a0810190811067ffffffffffffffff821117610bbc57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610bbc57604052565b67ffffffffffffffff8111610bbc5760051b60200190565b519073ffffffffffffffffffffffffffffffffffffffff821682036100de57565b9080601f830112156100de57815190602091610fc681610f72565b93610fd46040519586610f31565b81855260208086019260051b8201019283116100de57602001905b828210610ffd575050505090565b815173ffffffffffffffffffffffffffffffffffffffff811681036100de578152908301908301610fef565b9080601f830112156100de5781519060209161104481610f72565b936110526040519586610f31565b81855260208086019260051b8201019283116100de57602001905b82821061107b575050505090565b8151815290830190830161106d565b805182101561109e5760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739275433036110f757565b6382b429006000526004601cfdfea2646970667358221220b4f460a2dd433dbc0a5e3b78dded0eb69b50622e1c621b55ebe8003724a25b3364736f6c63430008190033",
    "sourceMap": "246:2070:82:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;246:2070:82;;;;;;;:::i;:::-;11885:237:69;;;246:2070:82;11885:237:69;246:2070:82;11885:237:69;;;;246:2070:82;;;;;;;;;;;;;;;-1:-1:-1;;246:2070:82;;;;;;;;;;;;;;;12478:70:69;;:::i;:::-;246:2070:82;;;;;;;;;;;;-1:-1:-1;;246:2070:82;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;8479:183;;;;;;6813:405;;;;;;;246:2070:82;6813:405:69;;;246:2070:82;8479:183:69;;246:2070:82;8479:183:69;246:2070:82;8479:183:69;;246:2070:82;;-1:-1:-1;;246:2070:82;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;10506:526;;;;246:2070:82;10506:526:69;246:2070:82;10506:526:69;;;;;;;;;246:2070:82;6813:405:69;10506:526;;6813:405;;;;;;246:2070:82;6813:405:69;;;246:2070:82;10506:526:69;;246:2070:82;10506:526:69;246:2070:82;10506:526:69;;246:2070:82;;;;;-1:-1:-1;;246:2070:82;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;1240:13;;246:2070;;;;;;1235:376;1275:3;246:2070;;1255:18;;;;;246:2070;1503:10;;;;:::i;:::-;246:2070;;;;;1475:39;246:2070;1475:39;;246:2070;1475:39;;246:2070;;1475:39;246:2070;1475:39;;;;;;;;246:2070;;;;;1475:39;;;1275:3;246:2070;1556:10;;246:2070;1556:10;;;;:::i;:::-;246:2070;;;;;;;;;:::i;:::-;;;;1542:57;;246:2070;;1542:57;;246:2070;;1542:57;;246:2070;;1542:57;;246:2070;1528:72;;;;:::i;:::-;;;;;;:::i;:::-;;246:2070;1240:13;;1475:39;;;;;;;246:2070;1475:39;;;;;;:::i;:::-;246:2070;1475:39;;;;246:2070;;;;;;;;;;;;1475:39;;;;246:2070;;;;:::i;:::-;;;;;;;;;;;;1475:39;;;246:2070;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;1475:39;;;246:2070;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1475:39;;;;246:2070;;;;:::i;:::-;;;;;;;;;;;;;1475:39;246:2070;1475:39;;;246:2070;;;:::i;:::-;1475:39;;;;;;;246:2070;;;;;;;;;;;;;;;;;;;;1475:39;246:2070;;;;;;;;;1255:18;;246:2070;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;246:2070:82;;;;;;;335:49;246:2070;;;;;;;;;;;;;-1:-1:-1;;246:2070:82;;;;;;;:::i;:::-;1847:20;246:2070;;;;;1847:51;;246:2070;;;;;1847:51;;246:2070;1847:20;;246:2070;-1:-1:-1;246:2070:82;;;;1847:51;;;;;;;246:2070;1847:51;;;246:2070;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;1972:336;1847:20;;;1972:336;246:2070;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;2019:3;246:2070;;;;;1992:25;;;;;2084:17;246:2070;2084:17;246:2070;2084:17;;;:::i;:::-;;246:2070;;2119:50;;;;246:2070;2119:50;;;246:2070;2119:50;;246:2070;;;;;;:::i;:::-;2119:50;;;;;;;;;;;246:2070;2119:50;;;2019:3;-1:-1:-1;2115:183:82;;;;;;2189:27;;;;;:::i;:::-;246:2070;2115:183;246:2070;1977:13;;;;;2115:183;246:2070;2255:28;;;;:::i;:::-;246:2070;2115:183;;2119:50;;;;;246:2070;2119:50;;246:2070;2119:50;;;;;;246:2070;2119:50;;;:::i;:::-;;;246:2070;;;;;;;;;;;;2119:50;;;;;;;;;-1:-1:-1;2119:50:82;;1992:25;;;;;;1847:51;;;;;;;246:2070;1847:51;;;;;;:::i;:::-;246:2070;1847:51;;;;246:2070;;;;;;;;;;;;1847:51;;;246:2070;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;1847:51;;;;246:2070;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1847:51;;;;;;;;;;246:2070;;;;;;;;;;;;;;;;1847:51;;;;;;;246:2070;;;;;;;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1847:51;;;246:2070;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1847:51;246:2070;1847:51;;;246:2070;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;1847:51;;;;;246:2070;1847:51;;;;;;;246:2070;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;246:2070:82;;;;;;11523:61:69;;246:2070:82;;;;;;;;;;;;;-1:-1:-1;;246:2070:82;;;;;;;;;;;;;;;12478:70:69;;:::i;:::-;246:2070:82;948:44;246:2070;;;948:44;246:2070;;;;;;;;;-1:-1:-1;;246:2070:82;;;;;;;;;;;;;;;;;;-1:-1:-1;;246:2070:82;;;;;12478:70:69;;:::i;:::-;246:2070:82;6813:405:69;;;;;;;;;246:2070:82;;;-1:-1:-1;;246:2070:82;;;;;9831:339:69;;;;246:2070:82;9831:339:69;246:2070:82;9831:339:69;;;;;;246:2070:82;9831:339:69;;246:2070:82;;;-1:-1:-1;;246:2070:82;;;;;9239:383:69;;;;246:2070:82;9239:383:69;7972:9;9132:15;246:2070:82;9239:383:69;;;;;;246:2070:82;9239:383:69;;246:2070:82;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;-1:-1:-1;246:2070:82;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;246:2070:82;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;7292:355:69;7390:251;;;;;;7292:355::o;7390:251::-;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "cancelOwnershipHandover()": "54d1f13d",
    "completeOwnershipHandover(address)": "f04e283e",
    "delegationSupervisor()": "df670448",
    "getDeposits(address[])": "e85062b9",
    "getWithdraws(address)": "b9c7f52e",
    "owner()": "8da5cb5b",
    "ownershipHandoverExpiresAt(address)": "fee81cf4",
    "renounceOwnership()": "715018a6",
    "requestOwnershipHandover()": "25692962",
    "setDelegationSupervisor(address)": "73628517",
    "setVaultSupervisor(address)": "fabeab93",
    "transferOwnership(address)": "f2fde38b",
    "vaultSupervisor()": "7235200e"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_vaultSupervisor\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_delegationSupervisor\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NewOwnerIsZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoHandoverRequest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"cancelOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"completeOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"delegationSupervisor\",\"outputs\":[{\"internalType\":\"contract IDelegationSupervisor\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"stakers\",\"type\":\"address[]\"}],\"name\":\"getDeposits\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"contract IERC20[]\",\"name\":\"tokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"assets\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"}],\"internalType\":\"struct IQuerier.DepositResult[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"}],\"name\":\"getWithdraws\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"staker\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatedTo\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"shares\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"withdrawer\",\"type\":\"address\"}],\"internalType\":\"struct Withdraw.WithdrawRequest\",\"name\":\"request\",\"type\":\"tuple\"}],\"internalType\":\"struct Withdraw.QueuedWithdrawal[]\",\"name\":\"allWithdrawals\",\"type\":\"tuple[]\"},{\"internalType\":\"bool[]\",\"name\":\"isWithdrawPending\",\"type\":\"bool[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"result\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"ownershipHandoverExpiresAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"requestOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IDelegationSupervisor\",\"name\":\"_delegationSupervisor\",\"type\":\"address\"}],\"name\":\"setDelegationSupervisor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVaultSupervisor\",\"name\":\"_vaultSupervisor\",\"type\":\"address\"}],\"name\":\"setVaultSupervisor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vaultSupervisor\",\"outputs\":[{\"internalType\":\"contract IVaultSupervisor\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AlreadyInitialized()\":[{\"details\":\"Cannot double-initialize.\"}],\"NewOwnerIsZeroAddress()\":[{\"details\":\"The `newOwner` cannot be the zero address.\"}],\"NoHandoverRequest()\":[{\"details\":\"The `pendingOwner` does not have a valid handover request.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}]},\"events\":{\"OwnershipHandoverCanceled(address)\":{\"details\":\"The ownership handover to `pendingOwner` has been canceled.\"},\"OwnershipHandoverRequested(address)\":{\"details\":\"An ownership handover to `pendingOwner` has been requested.\"},\"OwnershipTransferred(address,address)\":{\"details\":\"The ownership is transferred from `oldOwner` to `newOwner`. This event is intentionally kept the same as OpenZeppelin's Ownable to be compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173), despite it not being as lightweight as a single argument event.\"}},\"kind\":\"dev\",\"methods\":{\"cancelOwnershipHandover()\":{\"details\":\"Cancels the two-step ownership handover to the caller, if any.\"},\"completeOwnershipHandover(address)\":{\"details\":\"Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`.\"},\"owner()\":{\"details\":\"Returns the owner of the contract.\"},\"ownershipHandoverExpiresAt(address)\":{\"details\":\"Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`.\"},\"renounceOwnership()\":{\"details\":\"Allows the owner to renounce their ownership.\"},\"requestOwnershipHandover()\":{\"details\":\"Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default.\"},\"transferOwnership(address)\":{\"details\":\"Allows the owner to transfer the ownership to `newOwner`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Querier.sol\":\"Querier\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba\",\"dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/auth/OwnableRoles.sol\":{\"keccak256\":\"0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c\",\"dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L\"]},\"src/Querier.sol\":{\"keccak256\":\"0xe70e1c45bea7c9a72096737c291fe4a06ac5bdd3114813f8ae3be08f63ec9953\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://994d88a9b9224734b98652f52d6304839e651e252a6d584dd1dbbd0de4d0e5fb\",\"dweb:/ipfs/QmX6iw4KSJrdnpX3nu4AW7oxNvX4z2p11f47ChRyHZTqyw\"]},\"src/entities/DelegationSupervisorLib.sol\":{\"keccak256\":\"0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1\",\"dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45\"]},\"src/entities/Staker.sol\":{\"keccak256\":\"0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f\",\"dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr\"]},\"src/entities/Withdraw.sol\":{\"keccak256\":\"0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653\",\"dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY\"]},\"src/interfaces/Constants.sol\":{\"keccak256\":\"0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c\",\"dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG\"]},\"src/interfaces/Errors.sol\":{\"keccak256\":\"0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915\",\"dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2\"]},\"src/interfaces/Events.sol\":{\"keccak256\":\"0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21\",\"dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56\"]},\"src/interfaces/IDelegationSupervisor.sol\":{\"keccak256\":\"0xb8da7e569a591dad5f2c05a3f8596708d8dd8e0530549d8c70751e0fc766d48a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://7559e6868c3f10f87d987f7a9b6761a037c9a7479752df25370ad692ed067f79\",\"dweb:/ipfs/QmQGqtokMNt3tZ5GhVT6upq3wxGJo6VgGyHCdoAzuxE4Eh\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IQuerier.sol\":{\"keccak256\":\"0x9c704385e92c18132bb6e027d6673c893f61464b735c5f4109a2e104186fa026\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://90a589bc01a5f55f2fc11e6014e8cf38a4d5c98165d8a9e9cfb7ead3d79df8c1\",\"dweb:/ipfs/Qmd8LVzd6o7rHZf4cqfKmYQWScxDfgWvvhxscfg6oSg8vZ\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
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
              "name": "_vaultSupervisor",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_delegationSupervisor",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "AlreadyInitialized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NewOwnerIsZeroAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NoHandoverRequest"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipHandoverCanceled",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipHandoverRequested",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "oldOwner",
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
          "stateMutability": "payable",
          "type": "function",
          "name": "cancelOwnershipHandover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "completeOwnershipHandover"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "delegationSupervisor",
          "outputs": [
            {
              "internalType": "contract IDelegationSupervisor",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "stakers",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getDeposits",
          "outputs": [
            {
              "internalType": "struct IQuerier.DepositResult[]",
              "name": "",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "contract IVault[]",
                  "name": "vaults",
                  "type": "address[]"
                },
                {
                  "internalType": "contract IERC20[]",
                  "name": "tokens",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "assets",
                  "type": "uint256[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "shares",
                  "type": "uint256[]"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "staker",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getWithdraws",
          "outputs": [
            {
              "internalType": "struct Withdraw.QueuedWithdrawal[]",
              "name": "allWithdrawals",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "staker",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "delegatedTo",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "start",
                  "type": "uint256"
                },
                {
                  "internalType": "struct Withdraw.WithdrawRequest",
                  "name": "request",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "contract IVault[]",
                      "name": "vaults",
                      "type": "address[]"
                    },
                    {
                      "internalType": "uint256[]",
                      "name": "shares",
                      "type": "uint256[]"
                    },
                    {
                      "internalType": "address",
                      "name": "withdrawer",
                      "type": "address"
                    }
                  ]
                }
              ]
            },
            {
              "internalType": "bool[]",
              "name": "isWithdrawPending",
              "type": "bool[]"
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
              "name": "result",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownershipHandoverExpiresAt",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "function",
          "name": "requestOwnershipHandover"
        },
        {
          "inputs": [
            {
              "internalType": "contract IDelegationSupervisor",
              "name": "_delegationSupervisor",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setDelegationSupervisor"
        },
        {
          "inputs": [
            {
              "internalType": "contract IVaultSupervisor",
              "name": "_vaultSupervisor",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setVaultSupervisor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "transferOwnership"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "vaultSupervisor",
          "outputs": [
            {
              "internalType": "contract IVaultSupervisor",
              "name": "",
              "type": "address"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "cancelOwnershipHandover()": {
            "details": "Cancels the two-step ownership handover to the caller, if any."
          },
          "completeOwnershipHandover(address)": {
            "details": "Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`."
          },
          "owner()": {
            "details": "Returns the owner of the contract."
          },
          "ownershipHandoverExpiresAt(address)": {
            "details": "Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`."
          },
          "renounceOwnership()": {
            "details": "Allows the owner to renounce their ownership."
          },
          "requestOwnershipHandover()": {
            "details": "Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default."
          },
          "transferOwnership(address)": {
            "details": "Allows the owner to transfer the ownership to `newOwner`."
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
        "src/Querier.sol": "Querier"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC20.sol": {
        "keccak256": "0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c",
        "urls": [
          "bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba",
          "dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol": {
        "keccak256": "0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d",
        "urls": [
          "bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205",
          "dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
        "urls": [
          "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
          "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
        "urls": [
          "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
          "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
        ],
        "license": "MIT"
      },
      "node_modules/solady/src/auth/Ownable.sol": {
        "keccak256": "0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3",
        "urls": [
          "bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3",
          "dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs"
        ],
        "license": "MIT"
      },
      "node_modules/solady/src/auth/OwnableRoles.sol": {
        "keccak256": "0xd797b6f74f6421d77d74cda55d494470495264ab100cff82a71ff2297d4870e3",
        "urls": [
          "bzz-raw://b7504f97d8d3a908802f40fabbb4dcfcbf8e008b627be57f14ee84b67e0d9f3c",
          "dweb:/ipfs/QmXYrdhsYTGDqBdSvvyXQNVpZRAPYXdCcERG8DDPXZY67L"
        ],
        "license": "MIT"
      },
      "src/Querier.sol": {
        "keccak256": "0xe70e1c45bea7c9a72096737c291fe4a06ac5bdd3114813f8ae3be08f63ec9953",
        "urls": [
          "bzz-raw://994d88a9b9224734b98652f52d6304839e651e252a6d584dd1dbbd0de4d0e5fb",
          "dweb:/ipfs/QmX6iw4KSJrdnpX3nu4AW7oxNvX4z2p11f47ChRyHZTqyw"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/DelegationSupervisorLib.sol": {
        "keccak256": "0x0b074d4ed506f132dda6acf8e772938d059853efc1e54b34c3cbe13d614ea8bc",
        "urls": [
          "bzz-raw://0d4f2d25d05e613df6a6a22b0f6f248789ccc65b83fae1a259467b1f8e270ca1",
          "dweb:/ipfs/QmQ1PuU7uQT478kmFxDbhFQ99JGzawcaXF8BinfDNstH45"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/Staker.sol": {
        "keccak256": "0x70ab4650ddbced33877459678e9bf4377a2bb750d7714bddd246db2c5ff3aa33",
        "urls": [
          "bzz-raw://8bb3ba6635084ae89caaaf8dfb56cb59fb4f763c6476d881bb23ecb4ea64152f",
          "dweb:/ipfs/QmV6izusrXNe8zooBGQr66uLPBJm4FEhqWxoeXCKSjP3Fr"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/Withdraw.sol": {
        "keccak256": "0x45cb9ca95bfdfd8f7487f0fa3ca63a935095a1457e190227c604fade537d48fc",
        "urls": [
          "bzz-raw://ae7be25129db5fc569434fadf14b2956e528752093742a67f11204b7fb95f653",
          "dweb:/ipfs/QmPWA6GXUVXGG7nXbD3ZeUVJEic8qJx2qPFF9TQmfE9TaY"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/Constants.sol": {
        "keccak256": "0xe512638dbd72087e9bdd2fb16daf593f83882337acb82af7b5785e8528eefc86",
        "urls": [
          "bzz-raw://0cae573a7d191fc338f074467adcd8f2459ed198daa5ff0d7fe0b9e6105cea3c",
          "dweb:/ipfs/QmNscmqkJx8hwJLQT4AFFeuZfb1nSs2rJqiGabeDRsQ7QG"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/Errors.sol": {
        "keccak256": "0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27",
        "urls": [
          "bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915",
          "dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/Events.sol": {
        "keccak256": "0xb4a274351135ca65243ee03df2744078f88ddc51202e2725c630b5d6b737c178",
        "urls": [
          "bzz-raw://e5b0b02fade0999acb6ac45c26042fa94ed586ff74220501f5995adf37de5d21",
          "dweb:/ipfs/QmVWdntfvbsiK1FYXw9pKeuuP1FBhknhhZpV9JxrVZTr56"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IDelegationSupervisor.sol": {
        "keccak256": "0xb8da7e569a591dad5f2c05a3f8596708d8dd8e0530549d8c70751e0fc766d48a",
        "urls": [
          "bzz-raw://7559e6868c3f10f87d987f7a9b6761a037c9a7479752df25370ad692ed067f79",
          "dweb:/ipfs/QmQGqtokMNt3tZ5GhVT6upq3wxGJo6VgGyHCdoAzuxE4Eh"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/ILimiter.sol": {
        "keccak256": "0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc",
        "urls": [
          "bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892",
          "dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IQuerier.sol": {
        "keccak256": "0x9c704385e92c18132bb6e027d6673c893f61464b735c5f4109a2e104186fa026",
        "urls": [
          "bzz-raw://90a589bc01a5f55f2fc11e6014e8cf38a4d5c98165d8a9e9cfb7ead3d79df8c1",
          "dweb:/ipfs/Qmd8LVzd6o7rHZf4cqfKmYQWScxDfgWvvhxscfg6oSg8vZ"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IVault.sol": {
        "keccak256": "0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436",
        "urls": [
          "bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693",
          "dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IVaultSupervisor.sol": {
        "keccak256": "0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a",
        "urls": [
          "bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4",
          "dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt"
        ],
        "license": "SEE LICENSE IN LICENSE"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/Querier.sol",
    "id": 60802,
    "exportedSymbols": {
      "ArrayLengthsNotEqual": [
        62991
      ],
      "Constants": [
        62945
      ],
      "CrossedDepositLimit": [
        63001
      ],
      "DelegationSupervisorLib": [
        62416
      ],
      "ExpiredSign": [
        62997
      ],
      "FinishedWithdrawal": [
        63031
      ],
      "IDelegationSupervisor": [
        63097
      ],
      "IERC20": [
        50790
      ],
      "IERC4626": [
        49199
      ],
      "ILimiter": [
        63120
      ],
      "IQuerier": [
        63180
      ],
      "IVault": [
        63271
      ],
      "IVaultSupervisor": [
        63404
      ],
      "InvalidInput": [
        62949
      ],
      "InvalidSignature": [
        62999
      ],
      "InvalidVaultAdminFunction": [
        62979
      ],
      "InvalidWithdrawalDelay": [
        62951
      ],
      "MaxStakerVault": [
        62967
      ],
      "MinWithdrawDelayNotPassed": [
        62961
      ],
      "NewVault": [
        63035
      ],
      "NoElementsInArray": [
        62989
      ],
      "NotDelegationSupervisor": [
        62971
      ],
      "NotEnoughShares": [
        62977
      ],
      "NotInitialized": [
        62981
      ],
      "NotPreviousNorCurrentDelegationSupervisor": [
        62973
      ],
      "NotStaker": [
        62957
      ],
      "NotSupervisor": [
        62985
      ],
      "NotVaultSupervisor": [
        62955
      ],
      "Ownable": [
        54123
      ],
      "OwnableRoles": [
        55650
      ],
      "PermitFailed": [
        62995
      ],
      "Querier": [
        60801
      ],
      "RoleNotGranted": [
        62983
      ],
      "Staker": [
        62431
      ],
      "StartedWithdrawal": [
        63017
      ],
      "TokenNotEnabled": [
        62987
      ],
      "UnsupportedAsset": [
        63003
      ],
      "VaultNotAChildVault": [
        62969
      ],
      "VaultNotFound": [
        62975
      ],
      "Withdraw": [
        62913
      ],
      "WithdrawAlreadyCompleted": [
        62959
      ],
      "WithdrawerNotCaller": [
        62963
      ],
      "ZeroAddress": [
        62953
      ],
      "ZeroAmount": [
        62993
      ],
      "ZeroShares": [
        62965
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:2266:82",
    "nodes": [
      {
        "id": 60574,
        "nodeType": "PragmaDirective",
        "src": "51:24:82",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 60575,
        "nodeType": "ImportDirective",
        "src": "77:37:82",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/auth/Ownable.sol",
        "file": "solady/src/auth/Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60802,
        "sourceUnit": 54124,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60576,
        "nodeType": "ImportDirective",
        "src": "116:43:82",
        "nodes": [],
        "absolutePath": "src/interfaces/IVaultSupervisor.sol",
        "file": "./interfaces/IVaultSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60802,
        "sourceUnit": 63405,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60577,
        "nodeType": "ImportDirective",
        "src": "160:48:82",
        "nodes": [],
        "absolutePath": "src/interfaces/IDelegationSupervisor.sol",
        "file": "./interfaces/IDelegationSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60802,
        "sourceUnit": 63098,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60578,
        "nodeType": "ImportDirective",
        "src": "209:35:82",
        "nodes": [],
        "absolutePath": "src/interfaces/IQuerier.sol",
        "file": "./interfaces/IQuerier.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60802,
        "sourceUnit": 63181,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60801,
        "nodeType": "ContractDefinition",
        "src": "246:2070:82",
        "nodes": [
          {
            "id": 60585,
            "nodeType": "VariableDeclaration",
            "src": "290:39:82",
            "nodes": [],
            "constant": false,
            "functionSelector": "7235200e",
            "mutability": "mutable",
            "name": "vaultSupervisor",
            "nameLocation": "314:15:82",
            "scope": 60801,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
              "typeString": "contract IVaultSupervisor"
            },
            "typeName": {
              "id": 60584,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 60583,
                "name": "IVaultSupervisor",
                "nameLocations": [
                  "290:16:82"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 63404,
                "src": "290:16:82"
              },
              "referencedDeclaration": 63404,
              "src": "290:16:82",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                "typeString": "contract IVaultSupervisor"
              }
            },
            "visibility": "public"
          },
          {
            "id": 60588,
            "nodeType": "VariableDeclaration",
            "src": "335:49:82",
            "nodes": [],
            "constant": false,
            "functionSelector": "df670448",
            "mutability": "mutable",
            "name": "delegationSupervisor",
            "nameLocation": "364:20:82",
            "scope": 60801,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
              "typeString": "contract IDelegationSupervisor"
            },
            "typeName": {
              "id": 60587,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 60586,
                "name": "IDelegationSupervisor",
                "nameLocations": [
                  "335:21:82"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 63097,
                "src": "335:21:82"
              },
              "referencedDeclaration": 63097,
              "src": "335:21:82",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                "typeString": "contract IDelegationSupervisor"
              }
            },
            "visibility": "public"
          },
          {
            "id": 60613,
            "nodeType": "FunctionDefinition",
            "src": "443:253:82",
            "nodes": [],
            "body": {
              "id": 60612,
              "nodeType": "Block",
              "src": "512:184:82",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 60596,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "539:3:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 60597,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "543:6:82",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "539:10:82",
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
                      "id": 60595,
                      "name": "_initializeOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54002,
                      "src": "522:16:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 60598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "522:28:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60599,
                  "nodeType": "ExpressionStatement",
                  "src": "522:28:82"
                },
                {
                  "expression": {
                    "id": 60604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60600,
                      "name": "vaultSupervisor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60585,
                      "src": "560:15:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                        "typeString": "contract IVaultSupervisor"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 60602,
                          "name": "_vaultSupervisor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60590,
                          "src": "595:16:82",
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
                        "id": 60601,
                        "name": "IVaultSupervisor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63404,
                        "src": "578:16:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IVaultSupervisor_$63404_$",
                          "typeString": "type(contract IVaultSupervisor)"
                        }
                      },
                      "id": 60603,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "578:34:82",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                        "typeString": "contract IVaultSupervisor"
                      }
                    },
                    "src": "560:52:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                      "typeString": "contract IVaultSupervisor"
                    }
                  },
                  "id": 60605,
                  "nodeType": "ExpressionStatement",
                  "src": "560:52:82"
                },
                {
                  "expression": {
                    "id": 60610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60606,
                      "name": "delegationSupervisor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60588,
                      "src": "622:20:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                        "typeString": "contract IDelegationSupervisor"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 60608,
                          "name": "_delegationSupervisor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60592,
                          "src": "667:21:82",
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
                        "id": 60607,
                        "name": "IDelegationSupervisor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63097,
                        "src": "645:21:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IDelegationSupervisor_$63097_$",
                          "typeString": "type(contract IDelegationSupervisor)"
                        }
                      },
                      "id": 60609,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "645:44:82",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                        "typeString": "contract IDelegationSupervisor"
                      }
                    },
                    "src": "622:67:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                      "typeString": "contract IDelegationSupervisor"
                    }
                  },
                  "id": 60611,
                  "nodeType": "ExpressionStatement",
                  "src": "622:67:82"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 60593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60590,
                  "mutability": "mutable",
                  "name": "_vaultSupervisor",
                  "nameLocation": "463:16:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 60613,
                  "src": "455:24:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60589,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "455:7:82",
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
                  "id": 60592,
                  "mutability": "mutable",
                  "name": "_delegationSupervisor",
                  "nameLocation": "489:21:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 60613,
                  "src": "481:29:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60591,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "481:7:82",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "454:57:82"
            },
            "returnParameters": {
              "id": 60594,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "512:0:82"
            },
            "scope": 60801,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 60626,
            "nodeType": "FunctionDefinition",
            "src": "702:133:82",
            "nodes": [],
            "body": {
              "id": 60625,
              "nodeType": "Block",
              "src": "784:51:82",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 60623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60621,
                      "name": "vaultSupervisor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60585,
                      "src": "794:15:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                        "typeString": "contract IVaultSupervisor"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60622,
                      "name": "_vaultSupervisor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60616,
                      "src": "812:16:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                        "typeString": "contract IVaultSupervisor"
                      }
                    },
                    "src": "794:34:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                      "typeString": "contract IVaultSupervisor"
                    }
                  },
                  "id": 60624,
                  "nodeType": "ExpressionStatement",
                  "src": "794:34:82"
                }
              ]
            },
            "baseFunctions": [
              63151
            ],
            "functionSelector": "fabeab93",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 60619,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60618,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "774:9:82"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "774:9:82"
                },
                "nodeType": "ModifierInvocation",
                "src": "774:9:82"
              }
            ],
            "name": "setVaultSupervisor",
            "nameLocation": "711:18:82",
            "parameters": {
              "id": 60617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60616,
                  "mutability": "mutable",
                  "name": "_vaultSupervisor",
                  "nameLocation": "747:16:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 60626,
                  "src": "730:33:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                    "typeString": "contract IVaultSupervisor"
                  },
                  "typeName": {
                    "id": 60615,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60614,
                      "name": "IVaultSupervisor",
                      "nameLocations": [
                        "730:16:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63404,
                      "src": "730:16:82"
                    },
                    "referencedDeclaration": 63404,
                    "src": "730:16:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                      "typeString": "contract IVaultSupervisor"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "729:35:82"
            },
            "returnParameters": {
              "id": 60620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "784:0:82"
            },
            "scope": 60801,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60639,
            "nodeType": "FunctionDefinition",
            "src": "841:158:82",
            "nodes": [],
            "body": {
              "id": 60638,
              "nodeType": "Block",
              "src": "938:61:82",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 60636,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60634,
                      "name": "delegationSupervisor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60588,
                      "src": "948:20:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                        "typeString": "contract IDelegationSupervisor"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60635,
                      "name": "_delegationSupervisor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60629,
                      "src": "971:21:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                        "typeString": "contract IDelegationSupervisor"
                      }
                    },
                    "src": "948:44:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                      "typeString": "contract IDelegationSupervisor"
                    }
                  },
                  "id": 60637,
                  "nodeType": "ExpressionStatement",
                  "src": "948:44:82"
                }
              ]
            },
            "baseFunctions": [
              63157
            ],
            "functionSelector": "73628517",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 60632,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60631,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "928:9:82"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "928:9:82"
                },
                "nodeType": "ModifierInvocation",
                "src": "928:9:82"
              }
            ],
            "name": "setDelegationSupervisor",
            "nameLocation": "850:23:82",
            "parameters": {
              "id": 60630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60629,
                  "mutability": "mutable",
                  "name": "_delegationSupervisor",
                  "nameLocation": "896:21:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 60639,
                  "src": "874:43:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                    "typeString": "contract IDelegationSupervisor"
                  },
                  "typeName": {
                    "id": 60628,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60627,
                      "name": "IDelegationSupervisor",
                      "nameLocations": [
                        "874:21:82"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63097,
                      "src": "874:21:82"
                    },
                    "referencedDeclaration": 63097,
                    "src": "874:21:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                      "typeString": "contract IDelegationSupervisor"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "873:45:82"
            },
            "returnParameters": {
              "id": 60633,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "938:0:82"
            },
            "scope": 60801,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60730,
            "nodeType": "FunctionDefinition",
            "src": "1053:588:82",
            "nodes": [],
            "body": {
              "id": 60729,
              "nodeType": "Block",
              "src": "1147:494:82",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60653
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60653,
                      "mutability": "mutable",
                      "name": "results",
                      "nameLocation": "1180:7:82",
                      "nodeType": "VariableDeclaration",
                      "scope": 60729,
                      "src": "1157:30:82",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct IQuerier.DepositResult[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 60651,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 60650,
                            "name": "DepositResult",
                            "nameLocations": [
                              "1157:13:82"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 63145,
                            "src": "1157:13:82"
                          },
                          "referencedDeclaration": 63145,
                          "src": "1157:13:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DepositResult_$63145_storage_ptr",
                            "typeString": "struct IQuerier.DepositResult"
                          }
                        },
                        "id": 60652,
                        "nodeType": "ArrayTypeName",
                        "src": "1157:15:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_storage_$dyn_storage_ptr",
                          "typeString": "struct IQuerier.DepositResult[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60661,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 60658,
                          "name": "stakers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60642,
                          "src": "1210:7:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 60659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1218:6:82",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "1210:14:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 60657,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "1190:19:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_DepositResult_$63145_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (struct IQuerier.DepositResult memory[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 60655,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 60654,
                            "name": "DepositResult",
                            "nameLocations": [
                              "1194:13:82"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 63145,
                            "src": "1194:13:82"
                          },
                          "referencedDeclaration": 63145,
                          "src": "1194:13:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DepositResult_$63145_storage_ptr",
                            "typeString": "struct IQuerier.DepositResult"
                          }
                        },
                        "id": 60656,
                        "nodeType": "ArrayTypeName",
                        "src": "1194:15:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_storage_$dyn_storage_ptr",
                          "typeString": "struct IQuerier.DepositResult[]"
                        }
                      }
                    },
                    "id": 60660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1190:35:82",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct IQuerier.DepositResult memory[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1157:68:82"
                },
                {
                  "body": {
                    "id": 60725,
                    "nodeType": "Block",
                    "src": "1280:331:82",
                    "statements": [
                      {
                        "assignments": [
                          60677
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 60677,
                            "mutability": "mutable",
                            "name": "vaults",
                            "nameLocation": "1310:6:82",
                            "nodeType": "VariableDeclaration",
                            "scope": 60725,
                            "src": "1294:22:82",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                              "typeString": "contract IVault[]"
                            },
                            "typeName": {
                              "baseType": {
                                "id": 60675,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                  "id": 60674,
                                  "name": "IVault",
                                  "nameLocations": [
                                    "1294:6:82"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 63271,
                                  "src": "1294:6:82"
                                },
                                "referencedDeclaration": 63271,
                                "src": "1294:6:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IVault_$63271",
                                  "typeString": "contract IVault"
                                }
                              },
                              "id": 60676,
                              "nodeType": "ArrayTypeName",
                              "src": "1294:8:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                                "typeString": "contract IVault[]"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 60678,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1294:22:82"
                      },
                      {
                        "assignments": [
                          60683
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 60683,
                            "mutability": "mutable",
                            "name": "tokens",
                            "nameLocation": "1346:6:82",
                            "nodeType": "VariableDeclaration",
                            "scope": 60725,
                            "src": "1330:22:82",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                              "typeString": "contract IERC20[]"
                            },
                            "typeName": {
                              "baseType": {
                                "id": 60681,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                  "id": 60680,
                                  "name": "IERC20",
                                  "nameLocations": [
                                    "1330:6:82"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 50790,
                                  "src": "1330:6:82"
                                },
                                "referencedDeclaration": 50790,
                                "src": "1330:6:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$50790",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 60682,
                              "nodeType": "ArrayTypeName",
                              "src": "1330:8:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_storage_ptr",
                                "typeString": "contract IERC20[]"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 60684,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1330:22:82"
                      },
                      {
                        "assignments": [
                          60689
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 60689,
                            "mutability": "mutable",
                            "name": "assets",
                            "nameLocation": "1383:6:82",
                            "nodeType": "VariableDeclaration",
                            "scope": 60725,
                            "src": "1366:23:82",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[]"
                            },
                            "typeName": {
                              "baseType": {
                                "id": 60687,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1366:7:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 60688,
                              "nodeType": "ArrayTypeName",
                              "src": "1366:9:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                "typeString": "uint256[]"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 60690,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1366:23:82"
                      },
                      {
                        "assignments": [
                          60695
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 60695,
                            "mutability": "mutable",
                            "name": "shares",
                            "nameLocation": "1420:6:82",
                            "nodeType": "VariableDeclaration",
                            "scope": 60725,
                            "src": "1403:23:82",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[]"
                            },
                            "typeName": {
                              "baseType": {
                                "id": 60693,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1403:7:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 60694,
                              "nodeType": "ArrayTypeName",
                              "src": "1403:9:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                "typeString": "uint256[]"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 60696,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1403:23:82"
                      },
                      {
                        "expression": {
                          "id": 60708,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "components": [
                              {
                                "id": 60697,
                                "name": "vaults",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60677,
                                "src": "1441:6:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                                  "typeString": "contract IVault[] memory"
                                }
                              },
                              {
                                "id": 60698,
                                "name": "tokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60683,
                                "src": "1449:6:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                                  "typeString": "contract IERC20[] memory"
                                }
                              },
                              {
                                "id": 60699,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60689,
                                "src": "1457:6:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              {
                                "id": 60700,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60695,
                                "src": "1465:6:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              }
                            ],
                            "id": 60701,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "1440:32:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr_$_t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "tuple(contract IVault[] memory,contract IERC20[] memory,uint256[] memory,uint256[] memory)"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "baseExpression": {
                                  "id": 60704,
                                  "name": "stakers",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60642,
                                  "src": "1503:7:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                    "typeString": "address[] memory"
                                  }
                                },
                                "id": 60706,
                                "indexExpression": {
                                  "id": 60705,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60663,
                                  "src": "1511:1:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1503:10:82",
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
                                "id": 60702,
                                "name": "vaultSupervisor",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60585,
                                "src": "1475:15:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IVaultSupervisor_$63404",
                                  "typeString": "contract IVaultSupervisor"
                                }
                              },
                              "id": 60703,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1491:11:82",
                              "memberName": "getDeposits",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 63303,
                              "src": "1475:27:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr_$_t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                "typeString": "function (address) view external returns (contract IVault[] memory,contract IERC20[] memory,uint256[] memory,uint256[] memory)"
                              }
                            },
                            "id": 60707,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1475:39:82",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr_$_t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "tuple(contract IVault[] memory,contract IERC20[] memory,uint256[] memory,uint256[] memory)"
                            }
                          },
                          "src": "1440:74:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 60709,
                        "nodeType": "ExpressionStatement",
                        "src": "1440:74:82"
                      },
                      {
                        "expression": {
                          "id": 60723,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 60710,
                              "name": "results",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60653,
                              "src": "1528:7:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_memory_ptr_$dyn_memory_ptr",
                                "typeString": "struct IQuerier.DepositResult memory[] memory"
                              }
                            },
                            "id": 60712,
                            "indexExpression": {
                              "id": 60711,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60663,
                              "src": "1536:1:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1528:10:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_DepositResult_$63145_memory_ptr",
                              "typeString": "struct IQuerier.DepositResult memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "components": [
                              {
                                "arguments": [
                                  {
                                    "baseExpression": {
                                      "id": 60714,
                                      "name": "stakers",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60642,
                                      "src": "1556:7:82",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                      }
                                    },
                                    "id": 60716,
                                    "indexExpression": {
                                      "id": 60715,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60663,
                                      "src": "1564:1:82",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1556:10:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 60717,
                                    "name": "vaults",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60677,
                                    "src": "1568:6:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                                      "typeString": "contract IVault[] memory"
                                    }
                                  },
                                  {
                                    "id": 60718,
                                    "name": "tokens",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60683,
                                    "src": "1576:6:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                                      "typeString": "contract IERC20[] memory"
                                    }
                                  },
                                  {
                                    "id": 60719,
                                    "name": "assets",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60689,
                                    "src": "1584:6:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  {
                                    "id": 60720,
                                    "name": "shares",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60695,
                                    "src": "1592:6:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
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
                                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                                      "typeString": "contract IVault[] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_contract$_IERC20_$50790_$dyn_memory_ptr",
                                      "typeString": "contract IERC20[] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  ],
                                  "id": 60713,
                                  "name": "DepositResult",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63145,
                                  "src": "1542:13:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_struct$_DepositResult_$63145_storage_ptr_$",
                                    "typeString": "type(struct IQuerier.DepositResult storage pointer)"
                                  }
                                },
                                "id": 60721,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "structConstructorCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1542:57:82",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_DepositResult_$63145_memory_ptr",
                                  "typeString": "struct IQuerier.DepositResult memory"
                                }
                              }
                            ],
                            "id": 60722,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1541:59:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_DepositResult_$63145_memory_ptr",
                              "typeString": "struct IQuerier.DepositResult memory"
                            }
                          },
                          "src": "1528:72:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DepositResult_$63145_memory_ptr",
                            "typeString": "struct IQuerier.DepositResult memory"
                          }
                        },
                        "id": 60724,
                        "nodeType": "ExpressionStatement",
                        "src": "1528:72:82"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60666,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60663,
                      "src": "1255:1:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 60667,
                        "name": "stakers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60642,
                        "src": "1259:7:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 60668,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1267:6:82",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1259:14:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1255:18:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60726,
                  "initializationExpression": {
                    "assignments": [
                      60663
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 60663,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "1248:1:82",
                        "nodeType": "VariableDeclaration",
                        "scope": 60726,
                        "src": "1240:9:82",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 60662,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1240:7:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 60665,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 60664,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1252:1:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1240:13:82"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 60671,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1275:3:82",
                      "subExpression": {
                        "id": 60670,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60663,
                        "src": "1275:1:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 60672,
                    "nodeType": "ExpressionStatement",
                    "src": "1275:3:82"
                  },
                  "nodeType": "ForStatement",
                  "src": "1235:376:82"
                },
                {
                  "expression": {
                    "id": 60727,
                    "name": "results",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60653,
                    "src": "1627:7:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct IQuerier.DepositResult memory[] memory"
                    }
                  },
                  "functionReturnParameters": 60648,
                  "id": 60728,
                  "nodeType": "Return",
                  "src": "1620:14:82"
                }
              ]
            },
            "baseFunctions": [
              63167
            ],
            "functionSelector": "e85062b9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDeposits",
            "nameLocation": "1062:11:82",
            "parameters": {
              "id": 60643,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60642,
                  "mutability": "mutable",
                  "name": "stakers",
                  "nameLocation": "1091:7:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 60730,
                  "src": "1074:24:82",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60640,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1074:7:82",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 60641,
                    "nodeType": "ArrayTypeName",
                    "src": "1074:9:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1073:26:82"
            },
            "returnParameters": {
              "id": 60648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60647,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60730,
                  "src": "1123:22:82",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IQuerier.DepositResult[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60645,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 60644,
                        "name": "DepositResult",
                        "nameLocations": [
                          "1123:13:82"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63145,
                        "src": "1123:13:82"
                      },
                      "referencedDeclaration": 63145,
                      "src": "1123:13:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DepositResult_$63145_storage_ptr",
                        "typeString": "struct IQuerier.DepositResult"
                      }
                    },
                    "id": 60646,
                    "nodeType": "ArrayTypeName",
                    "src": "1123:15:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DepositResult_$63145_storage_$dyn_storage_ptr",
                      "typeString": "struct IQuerier.DepositResult[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1122:24:82"
            },
            "scope": 60801,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60800,
            "nodeType": "FunctionDefinition",
            "src": "1647:667:82",
            "nodes": [],
            "body": {
              "id": 60799,
              "nodeType": "Block",
              "src": "1820:494:82",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 60747,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60742,
                      "name": "allWithdrawals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60737,
                      "src": "1830:14:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 60745,
                          "name": "staker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60732,
                          "src": "1891:6:82",
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
                          "id": 60743,
                          "name": "delegationSupervisor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60588,
                          "src": "1847:20:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                            "typeString": "contract IDelegationSupervisor"
                          }
                        },
                        "id": 60744,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1868:22:82",
                        "memberName": "fetchQueuedWithdrawals",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63088,
                        "src": "1847:43:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr_$",
                          "typeString": "function (address) view external returns (struct Withdraw.QueuedWithdrawal memory[] memory)"
                        }
                      },
                      "id": 60746,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1847:51:82",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                      }
                    },
                    "src": "1830:68:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                    }
                  },
                  "id": 60748,
                  "nodeType": "ExpressionStatement",
                  "src": "1830:68:82"
                },
                {
                  "expression": {
                    "id": 60756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60749,
                      "name": "isWithdrawPending",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60740,
                      "src": "1908:17:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                        "typeString": "bool[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 60753,
                            "name": "allWithdrawals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60737,
                            "src": "1939:14:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                              "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                            }
                          },
                          "id": 60754,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1954:6:82",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "1939:21:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 60752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "1928:10:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bool_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (bool[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 60750,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "1932:4:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 60751,
                          "nodeType": "ArrayTypeName",
                          "src": "1932:6:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                            "typeString": "bool[]"
                          }
                        }
                      },
                      "id": 60755,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1928:33:82",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                        "typeString": "bool[] memory"
                      }
                    },
                    "src": "1908:53:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                      "typeString": "bool[] memory"
                    }
                  },
                  "id": 60757,
                  "nodeType": "ExpressionStatement",
                  "src": "1908:53:82"
                },
                {
                  "body": {
                    "id": 60797,
                    "nodeType": "Block",
                    "src": "2024:284:82",
                    "statements": [
                      {
                        "assignments": [
                          60773
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 60773,
                            "mutability": "mutable",
                            "name": "withdrawal",
                            "nameLocation": "2071:10:82",
                            "nodeType": "VariableDeclaration",
                            "scope": 60797,
                            "src": "2038:43:82",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                              "typeString": "struct Withdraw.QueuedWithdrawal"
                            },
                            "typeName": {
                              "id": 60772,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 60771,
                                "name": "Withdraw.QueuedWithdrawal",
                                "nameLocations": [
                                  "2038:8:82",
                                  "2047:16:82"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 62732,
                                "src": "2038:25:82"
                              },
                              "referencedDeclaration": 62732,
                              "src": "2038:25:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                                "typeString": "struct Withdraw.QueuedWithdrawal"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 60777,
                        "initialValue": {
                          "baseExpression": {
                            "id": 60774,
                            "name": "allWithdrawals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60737,
                            "src": "2084:14:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                              "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                            }
                          },
                          "id": 60776,
                          "indexExpression": {
                            "id": 60775,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60759,
                            "src": "2099:1:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2084:17:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                            "typeString": "struct Withdraw.QueuedWithdrawal memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2038:63:82"
                      },
                      {
                        "condition": {
                          "arguments": [
                            {
                              "id": 60780,
                              "name": "withdrawal",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60773,
                              "src": "2158:10:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                                "typeString": "struct Withdraw.QueuedWithdrawal memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_memory_ptr",
                                "typeString": "struct Withdraw.QueuedWithdrawal memory"
                              }
                            ],
                            "expression": {
                              "id": 60778,
                              "name": "delegationSupervisor",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60588,
                              "src": "2119:20:82",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IDelegationSupervisor_$63097",
                                "typeString": "contract IDelegationSupervisor"
                              }
                            },
                            "id": 60779,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2140:17:82",
                            "memberName": "isWithdrawPending",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 63096,
                            "src": "2119:38:82",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$returns$_t_bool_$",
                              "typeString": "function (struct Withdraw.QueuedWithdrawal memory) view external returns (bool)"
                            }
                          },
                          "id": 60781,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2119:50:82",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 60795,
                          "nodeType": "Block",
                          "src": "2237:61:82",
                          "statements": [
                            {
                              "expression": {
                                "id": 60793,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 60789,
                                    "name": "isWithdrawPending",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60740,
                                    "src": "2255:17:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                      "typeString": "bool[] memory"
                                    }
                                  },
                                  "id": 60791,
                                  "indexExpression": {
                                    "id": 60790,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60759,
                                    "src": "2273:1:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2255:20:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "hexValue": "66616c7365",
                                  "id": 60792,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2278:5:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "false"
                                },
                                "src": "2255:28:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 60794,
                              "nodeType": "ExpressionStatement",
                              "src": "2255:28:82"
                            }
                          ]
                        },
                        "id": 60796,
                        "nodeType": "IfStatement",
                        "src": "2115:183:82",
                        "trueBody": {
                          "id": 60788,
                          "nodeType": "Block",
                          "src": "2171:60:82",
                          "statements": [
                            {
                              "expression": {
                                "id": 60786,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 60782,
                                    "name": "isWithdrawPending",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60740,
                                    "src": "2189:17:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                      "typeString": "bool[] memory"
                                    }
                                  },
                                  "id": 60784,
                                  "indexExpression": {
                                    "id": 60783,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 60759,
                                    "src": "2207:1:82",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2189:20:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "hexValue": "74727565",
                                  "id": 60785,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2212:4:82",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "true"
                                },
                                "src": "2189:27:82",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 60787,
                              "nodeType": "ExpressionStatement",
                              "src": "2189:27:82"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60765,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60762,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60759,
                      "src": "1992:1:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 60763,
                        "name": "allWithdrawals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60737,
                        "src": "1996:14:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct Withdraw.QueuedWithdrawal memory[] memory"
                        }
                      },
                      "id": 60764,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2011:6:82",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1996:21:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1992:25:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60798,
                  "initializationExpression": {
                    "assignments": [
                      60759
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 60759,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "1985:1:82",
                        "nodeType": "VariableDeclaration",
                        "scope": 60798,
                        "src": "1977:9:82",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 60758,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1977:7:82",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 60761,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 60760,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1989:1:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1977:13:82"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 60767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2019:3:82",
                      "subExpression": {
                        "id": 60766,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60759,
                        "src": "2019:1:82",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 60768,
                    "nodeType": "ExpressionStatement",
                    "src": "2019:3:82"
                  },
                  "nodeType": "ForStatement",
                  "src": "1972:336:82"
                }
              ]
            },
            "baseFunctions": [
              63179
            ],
            "functionSelector": "b9c7f52e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getWithdraws",
            "nameLocation": "1656:12:82",
            "parameters": {
              "id": 60733,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60732,
                  "mutability": "mutable",
                  "name": "staker",
                  "nameLocation": "1677:6:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 60800,
                  "src": "1669:14:82",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60731,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1669:7:82",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1668:16:82"
            },
            "returnParameters": {
              "id": 60741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60737,
                  "mutability": "mutable",
                  "name": "allWithdrawals",
                  "nameLocation": "1767:14:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 60800,
                  "src": "1732:49:82",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Withdraw.QueuedWithdrawal[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60735,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 60734,
                        "name": "Withdraw.QueuedWithdrawal",
                        "nameLocations": [
                          "1732:8:82",
                          "1741:16:82"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 62732,
                        "src": "1732:25:82"
                      },
                      "referencedDeclaration": 62732,
                      "src": "1732:25:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_QueuedWithdrawal_$62732_storage_ptr",
                        "typeString": "struct Withdraw.QueuedWithdrawal"
                      }
                    },
                    "id": 60736,
                    "nodeType": "ArrayTypeName",
                    "src": "1732:27:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_QueuedWithdrawal_$62732_storage_$dyn_storage_ptr",
                      "typeString": "struct Withdraw.QueuedWithdrawal[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60740,
                  "mutability": "mutable",
                  "name": "isWithdrawPending",
                  "nameLocation": "1797:17:82",
                  "nodeType": "VariableDeclaration",
                  "scope": 60800,
                  "src": "1783:31:82",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60738,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1783:4:82",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 60739,
                    "nodeType": "ArrayTypeName",
                    "src": "1783:6:82",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1731:84:82"
            },
            "scope": 60801,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 60579,
              "name": "IQuerier",
              "nameLocations": [
                "266:8:82"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63180,
              "src": "266:8:82"
            },
            "id": 60580,
            "nodeType": "InheritanceSpecifier",
            "src": "266:8:82"
          },
          {
            "baseName": {
              "id": 60581,
              "name": "Ownable",
              "nameLocations": [
                "276:7:82"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 54123,
              "src": "276:7:82"
            },
            "id": 60582,
            "nodeType": "InheritanceSpecifier",
            "src": "276:7:82"
          }
        ],
        "canonicalName": "Querier",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          60801,
          54123,
          63180
        ],
        "name": "Querier",
        "nameLocation": "255:7:82",
        "scope": 60802,
        "usedErrors": [
          53935,
          53938,
          53941,
          53944
        ],
        "usedEvents": [
          53951,
          53956,
          53961
        ]
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 82
} as const;