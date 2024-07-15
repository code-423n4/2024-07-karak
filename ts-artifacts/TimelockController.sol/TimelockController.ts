export const TimelockController = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "minDelay",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "proposers",
          "type": "address[]",
          "internalType": "address[]"
        },
        {
          "name": "executors",
          "type": "address[]",
          "internalType": "address[]"
        },
        {
          "name": "admin",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "receive",
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "CANCELLER_ROLE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "EXECUTOR_ROLE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "PROPOSER_ROLE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "cancel",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "execute",
      "inputs": [
        {
          "name": "target",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "payload",
          "type": "bytes",
          "internalType": "bytes"
        },
        {
          "name": "predecessor",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "executeBatch",
      "inputs": [
        {
          "name": "targets",
          "type": "address[]",
          "internalType": "address[]"
        },
        {
          "name": "values",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "payloads",
          "type": "bytes[]",
          "internalType": "bytes[]"
        },
        {
          "name": "predecessor",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "getMinDelay",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getOperationState",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "enum TimelockController.OperationState"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleAdmin",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTimestamp",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grantRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hashOperation",
      "inputs": [
        {
          "name": "target",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        },
        {
          "name": "predecessor",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "hashOperationBatch",
      "inputs": [
        {
          "name": "targets",
          "type": "address[]",
          "internalType": "address[]"
        },
        {
          "name": "values",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "payloads",
          "type": "bytes[]",
          "internalType": "bytes[]"
        },
        {
          "name": "predecessor",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "isOperation",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isOperationDone",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isOperationPending",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isOperationReady",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "onERC1155BatchReceived",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onERC1155Received",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onERC721Received",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "renounceRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "callerConfirmation",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "revokeRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "schedule",
      "inputs": [
        {
          "name": "target",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        },
        {
          "name": "predecessor",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "delay",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "scheduleBatch",
      "inputs": [
        {
          "name": "targets",
          "type": "address[]",
          "internalType": "address[]"
        },
        {
          "name": "values",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "payloads",
          "type": "bytes[]",
          "internalType": "bytes[]"
        },
        {
          "name": "predecessor",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "delay",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "updateDelay",
      "inputs": [
        {
          "name": "newDelay",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "CallExecuted",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "index",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "target",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "data",
          "type": "bytes",
          "indexed": false,
          "internalType": "bytes"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "CallSalt",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "CallScheduled",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "index",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "target",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "data",
          "type": "bytes",
          "indexed": false,
          "internalType": "bytes"
        },
        {
          "name": "predecessor",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        },
        {
          "name": "delay",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Cancelled",
      "inputs": [
        {
          "name": "id",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "MinDelayChange",
      "inputs": [
        {
          "name": "oldDuration",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "newDuration",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleAdminChanged",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "previousAdminRole",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "newAdminRole",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleGranted",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "sender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleRevoked",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "sender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AccessControlBadConfirmation",
      "inputs": []
    },
    {
      "type": "error",
      "name": "AccessControlUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "neededRole",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
    },
    {
      "type": "error",
      "name": "FailedInnerCall",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TimelockInsufficientDelay",
      "inputs": [
        {
          "name": "delay",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "minDelay",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "TimelockInvalidOperationLength",
      "inputs": [
        {
          "name": "targets",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "payloads",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "values",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "TimelockUnauthorizedCaller",
      "inputs": [
        {
          "name": "caller",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "TimelockUnexecutedPredecessor",
      "inputs": [
        {
          "name": "predecessorId",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
    },
    {
      "type": "error",
      "name": "TimelockUnexpectedOperationState",
      "inputs": [
        {
          "name": "operationId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "expectedStates",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x60806040523461015157611e948038038061001981610156565b92833981019060808183031261015157805160208201516001600160401b0390818111610151578461004c9185016101a5565b9360408401519182116101515761006a6060916100719386016101a5565b9301610191565b9061007b30610239565b506001600160a01b0391808316610141575b5060005b84518110156100cf57806100b2846100ab6001948961020f565b51166102b7565b506100c8846100c1838961020f565b5116610357565b5001610091565b50925060005b82518110156100fd57806100f6836100ef6001948761020f565b51166103f2565b50016100d5565b7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d560408580600255815190600082526020820152a16040516119e6908161048e8239f35b61014a90610239565b503861008d565b600080fd5b6040519190601f01601f191682016001600160401b0381118382101761017b57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361015157565b81601f82011215610151578051916020916001600160401b03841161017b578360051b9083806101d6818501610156565b809781520192820101928311610151578301905b8282106101f8575050505090565b83809161020484610191565b8152019101906101ea565b80518210156102235760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b031660008181527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604081205490919060ff166102b357818052816020526040822081835260205260408220600160ff198254161790553391600080516020611e748339815191528180a4600190565b5090565b6001600160a01b031660008181527f3412d5605ac6cd444957cedb533e5dacad6378b4bc819ebe3652188a665066d560205260408120549091907fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc19060ff1661035257808352826020526040832082845260205260408320600160ff19825416179055600080516020611e74833981519152339380a4600190565b505090565b6001600160a01b031660008181527fc3ad33e20b0c56a223ad5104fff154aa010f8715b9c981fd38fdc60a4d1a52fb60205260408120549091907ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7839060ff1661035257808352826020526040832082845260205260408320600160ff19825416179055600080516020611e74833981519152339380a4600190565b6001600160a01b031660008181527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d706960205260408120549091907fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff1661035257808352826020526040832082845260205260408320600160ff19825416179055600080516020611e74833981519152339380a460019056fe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c90816301d5062a14610cb557816301ffc9a714610bde57816307bd026514610ba357838263134008d314610ae75750816313bc9f2014610ac7578163150b7a0214610a58578163248a9ca314610a2e5781632ab0f52914610a0e5781632f2ff15d146109e457816331d50750146109c457816336568abe14610958578163584b153e1461092f57816364d62353146108aa5781637958004c1461084e5781638065657f1461082c5781638f2a0bb0146106755781638f61f4f51461063a57816391d14854146105e8578163a217fddf146105cd578163b08e51c014610592578163b1c5f42714610566578163bc197c81146104c6578163c4d252f5146103c5578163d45c44351461039d578163d547741f14610358578163e38335e5146101f2578163f23a6e6114610180575063f27a0c9203610011573461017c578160031936011261017c576020906002549051908152f35b5080fd5b8284346101ef5760a06003193601126101ef5761019b610d94565b506101a4610dbc565b506084359067ffffffffffffffff82116101ef57506020926101c891369101610f13565b50517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b80fd5b90506101fd36610f8b565b9098949591939296977fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638b528a602052858b208b805260205260ff868c2054161561034a575b838314801590610340575b6102fc575061026661026d918a868a878b888f61132a565b9889611715565b885b81811061028357896102808a611802565b80f35b80808a7fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a6102f36102db8f988c6102d4828e6102ce8f60019f6102c991859161126a565b6112a9565b9761126a565b35956112ca565b906102e8828287876117ad565b8d51948594856110d9565b0390a30161026f565b85517fffb032110000000000000000000000000000000000000000000000000000000081529081019283526020830185905260408301849052918291506060010390fd5b508483141561024e565b61035333611664565b610243565b919050346103995780600319360112610399576103959135610390600161037d610dbc565b93838752866020528620015433906116d6565b6118cc565b5080f35b8280fd5b9050346103995760206003193601126103995760209282913581526001845220549051908152f35b91905034610399576020600319360112610399578135917ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7838085528460205282852033865260205260ff838620541615610492575061042383611184565b1561045d5750829082825260016020528120557fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb708280a280f35b8260449251917f5ead8eb500000000000000000000000000000000000000000000000000000000835282015260066024820152fd5b60449251917fe2517d3f00000000000000000000000000000000000000000000000000000000835233908301526024820152fd5b8284346101ef5760a06003193601126101ef576104e1610d94565b506104ea610dbc565b5067ffffffffffffffff9060443582811161017c5761050c9036908601610fed565b5060643582811161017c576105249036908601610fed565b506084359182116101ef575060209261053f91369101610f13565b50517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b50503461017c5760209061058b61057c36610f8b565b9695909594919493929361132a565b9051908152f35b50503461017c578160031936011261017c57602090517ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7838152f35b50503461017c578160031936011261017c5751908152602090f35b9050346103995781600319360112610399578160209360ff92610609610dbc565b9035825281865273ffffffffffffffffffffffffffffffffffffffff83832091168252855220541690519015158152f35b50503461017c578160031936011261017c57602090517fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc18152f35b919050346103995760c06003193601126103995767ffffffffffffffff908235828111610828576106a99036908501610f5a565b93602435848111610824576106c19036908301610f5a565b94604435908111610820576106d99036908401610f5a565b606493919335906084359760a435936106f1336115bb565b818b14801590610816575b6107d2575061071289848489858f8b908e61132a565b9961071d858c6114ea565b8a8c5b8a838210610766578e838e8381610735578380f35b7f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03879160209151908152a28180808380f35b6001927f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b6107c78f8c88978f92898f8f8f6107b5916107af6102c98680946107bc9961126a565b9a61126a565b35986112ca565b915196879687611093565b0390a3018b90610720565b88517fffb032110000000000000000000000000000000000000000000000000000000081529081018b81526020810184905260408101929092529081906060010390fd5b50828b14156106fc565b8780fd5b8680fd5b8480fd5b50503461017c5760209061058b61084236610e0d565b949390939291926111e9565b83833461017c57602060031936011261017c5761086b83356111ad565b9051918382101561087e57602083838152f35b806021857f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b919050346103995760206003193601126103995781359130330361090057507f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5906002548151908152836020820152a160025580f35b60249151907fe2850c590000000000000000000000000000000000000000000000000000000082523390820152fd5b8284346101ef5760206003193601126101ef575061094f60209235611184565b90519015158152f35b83833461017c578060031936011261017c57610972610dbc565b903373ffffffffffffffffffffffffffffffffffffffff83160361099c57506103959192356118cc565b8390517f6697b232000000000000000000000000000000000000000000000000000000008152fd5b8284346101ef5760206003193601126101ef575061094f6020923561116d565b919050346103995780600319360112610399576103959135610a09600161037d610dbc565b611822565b8284346101ef5760206003193601126101ef575061094f60209235611155565b90503461039957602060031936011261039957816020936001923581528085522001549051908152f35b8284346101ef5760806003193601126101ef57610a73610d94565b50610a7c610dbc565b506064359067ffffffffffffffff82116101ef5750602092610aa091369101610f13565b50517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b8284346101ef5760206003193601126101ef575061094f6020923561110e565b610280610b7782610b8d7fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58610b6e89610b1f36610e0d565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638b9a9697939598929a528a602052828b208b805260205260ff838c20541615610b95575b8985858a8a6111e9565b998a9889611715565b610b83838388886117ad565b51948594856110d9565b0390a3611802565b610b9e33611664565b610b64565b50503461017c578160031936011261017c57602090517fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638152f35b9050346103995760206003193601126103995735907fffffffff00000000000000000000000000000000000000000000000000000000821680920361039957602092507f4e2312e0000000000000000000000000000000000000000000000000000000008214918215610c55575b50519015158152f35b9091507f7965db0b000000000000000000000000000000000000000000000000000000008114908115610c8b575b509038610c4c565b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501438610c83565b919050346103995760c060031936011261039957610cd1610d94565b908360243560443567ffffffffffffffff8111610399577f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca95610d1691369101610ddf565b95909160643595610d576084359760a43590610d31336115bb565b610d3f8a828d8a89896111e9565b9a8b97610d4c848a6114ea565b8a5196879687611093565b0390a381610d63578380f35b7f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03879160209151908152a23880808380f35b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610db757565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff82168203610db757565b9181601f84011215610db75782359167ffffffffffffffff8311610db75760208381860195010111610db757565b60a0600319820112610db75760043573ffffffffffffffffffffffffffffffffffffffff81168103610db75791602435916044359067ffffffffffffffff8211610db757610e5d91600401610ddf565b90916064359060843590565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610eaa57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8111610eaa57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f82011215610db757803590610f2a82610ed9565b92610f386040519485610e69565b82845260208383010111610db757816000926020809301838601378301015290565b9181601f84011215610db75782359167ffffffffffffffff8311610db7576020808501948460051b010111610db757565b9060a0600319830112610db75767ffffffffffffffff600435818111610db75783610fb891600401610f5a565b93909392602435838111610db75782610fd391600401610f5a565b93909392604435918211610db757610e5d91600401610f5a565b81601f82011215610db75780359160209167ffffffffffffffff8411610eaa578360051b906040519461102285840187610e69565b85528380860192820101928311610db7578301905b828210611045575050505090565b81358152908301908301611037565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0938186528686013760008582860101520116010190565b9290936110cf9273ffffffffffffffffffffffffffffffffffffffff60809699989799168552602085015260a0604085015260a0840191611054565b9460608201520152565b61110b949273ffffffffffffffffffffffffffffffffffffffff60609316825260208201528160408201520191611054565b90565b611117906111ad565b60048110156111265760021490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b61115e906111ad565b60048110156111265760031490565b611176906111ad565b600481101561112657151590565b61118d906111ad565b600481101561112657600181149081156111a5575090565b600291501490565b600052600160205260406000205480156000146111ca5750600090565b600181036111d85750600390565b4210156111e457600190565b600290565b9461122d6112649495929360405196879573ffffffffffffffffffffffffffffffffffffffff602088019a168a52604087015260a0606087015260c0860191611054565b91608084015260a0830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610e69565b51902090565b919081101561127a5760051b0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b3573ffffffffffffffffffffffffffffffffffffffff81168103610db75790565b919081101561127a5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610db757019081359167ffffffffffffffff8311610db7576020018236038113610db7579190565b969294909695919560405196602091828901998060c08b0160a08d525260e08a01919060005b8181106114b4575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe097888a83030160408b01528082527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8111610db7579089969495939897929160051b80928a830137019380888601878703606089015252604085019460408260051b82010195836000925b84841061140e575050505050506112649550608084015260a083015203908101835282610e69565b91939698509193989994967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc082820301845289357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811215610db757830186810191903567ffffffffffffffff8111610db7578036038313610db75761149d88928392600195611054565b9b0194019401918b98969394919a9997959a6113e6565b90919283359073ffffffffffffffffffffffffffffffffffffffff8216809203610db75790815285019285019190600101611350565b906114f48261116d565b6115835760025480821061154c575042019081421161151d576000526001602052604060002055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60449250604051917f5433660900000000000000000000000000000000000000000000000000000000835260048301526024820152fd5b604482604051907f5ead8eb5000000000000000000000000000000000000000000000000000000008252600482015260016024820152fd5b73ffffffffffffffffffffffffffffffffffffffff1660008181527f3412d5605ac6cd444957cedb533e5dacad6378b4bc819ebe3652188a665066d560205260409020547fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc19060ff161561162d575050565b60449250604051917fe2517d3f00000000000000000000000000000000000000000000000000000000835260048301526024820152fd5b73ffffffffffffffffffffffffffffffffffffffff1660008181527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d706960205260409020547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff161561162d575050565b80600052600060205273ffffffffffffffffffffffffffffffffffffffff60406000209216918260005260205260ff604060002054161561162d575050565b61171e8161110e565b15611775575080151580611765575b6117345750565b602490604051907f90a9a6180000000000000000000000000000000000000000000000000000000082526004820152fd5b5061176f81611155565b1561172d565b604490604051907f5ead8eb5000000000000000000000000000000000000000000000000000000008252600482015260046024820152fd5b6117f793600093928493826040519384928337810185815203925af13d156117fa573d906117da82610ed9565b916117e86040519384610e69565b82523d6000602084013e61196d565b50565b60609061196d565b61180b8161110e565b156117755760005260016020526001604060002055565b906000918083528260205273ffffffffffffffffffffffffffffffffffffffff6040842092169182845260205260ff604084205416156000146118c75780835282602052604083208284526020526040832060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d339380a4600190565b505090565b906000918083528260205273ffffffffffffffffffffffffffffffffffffffff6040842092169182845260205260ff6040842054166000146118c7578083528260205260408320828452602052604083207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4600190565b9091906119ae575080511561198457805190602001fd5b60046040517f1425ea42000000000000000000000000000000000000000000000000000000008152fd5b56fea2646970667358221220020c0f4ca4a5ee86218a8c45520f4f9b02657aac2db1e991a2c7238ac94f454f64736f6c634300081900332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
    "sourceMap": "1084:15205:31:-:0;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1084:15205:31;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::i;:::-;4429:4;4390:45;4429:4;4390:45;:::i;:::-;-1:-1:-1;;;;;;1084:15205:31;;;;4472:87;;-1:-1:-1;4619:13:31;-1:-1:-1;4656:3:31;2232:4:28;;4634:20:31;;;;;4701:12;4675:39;4701:12;;1084:15205;4701:12;;;:::i;:::-;1204:26;1084:15205;4675:39;:::i;:::-;;4728:40;4755:12;;;;;:::i;:::-;1204:26;1084:15205;4728:40;:::i;:::-;;2232:4:28;4619:13:31;;4634:20;;;;-1:-1:-1;4861:3:31;2232:4:28;;4839:20:31;;;;;4906:12;4880:39;4906:12;;1084:15205;4906:12;;;:::i;:::-;1204:26;1084:15205;4880:39;:::i;:::-;;2232:4:28;4824:13:31;;4839:20;4975:27;1084:15205;4839:20;1276:26;4940:20;1276:26;1084:15205;;1276:26;-1:-1:-1;1276:26:31;;1084:15205;1276:26;;;4975:27;1084:15205;;;;;;;;;4472:87;4511:37;;;:::i;:::-;;4472:87;;;1084:15205;-1:-1:-1;1084:15205:31;;;;;;;;;-1:-1:-1;;1084:15205:31;;;-1:-1:-1;;;;;1084:15205:31;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;-1:-1:-1;;;;;1084:15205:31;;;;;;:::o;:::-;;;;;;;;;;;;;;-1:-1:-1;;;;;1084:15205:31;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;:::i;:::-;;;;;;;;;1204:26;2232:4:28;;1204:26:31;;;;;;;;;;;;:::o;:::-;1084:15205;;;1204:26;;;;;;;;6179:316:28;-1:-1:-1;;;;;1084:15205:31;2232:4:28;1084:15205:31;;;;;;;;;;2232:4:28;;1084:15205:31;;;;;;;;;;;;;;;;;;;;;;6347:4:28;1084:15205:31;;;;;;;;735:10:56;6370:40:28;-1:-1:-1;;;;;;;;;;;6370:40:28;;;6347:4;6424:11;:::o;6272:217::-;6466:12;;:::o;6179:316::-;-1:-1:-1;;;;;1084:15205:31;2954:6:28;1084:15205:31;;;;;;;;;;2954:6:28;;1084:15205:31;1204:26;;1084:15205;;;;;;;;;;;;;;;;;;;;;6347:4:28;1084:15205:31;;;;;;;;-1:-1:-1;;;;;;;;;;;735:10:56;6370:40:28;;;6347:4;6424:11;:::o;6272:217::-;6466:12;;;:::o;6179:316::-;-1:-1:-1;;;;;1084:15205:31;2954:6:28;1084:15205:31;;;;;;;;;;2954:6:28;;1084:15205:31;1349:27;;1084:15205;;;;;;;;;;;;;;;;;;;;;6347:4:28;1084:15205:31;;;;;;;;-1:-1:-1;;;;;;;;;;;735:10:56;6370:40:28;;;6347:4;6424:11;:::o;6179:316::-;-1:-1:-1;;;;;1084:15205:31;2954:6:28;1084:15205:31;;;;;;;;;;2954:6:28;;1084:15205:31;1276:26;;1084:15205;;;;;;;;;;;;;;;;;;;;;6347:4:28;1084:15205:31;;;;;;;;-1:-1:-1;;;;;;;;;;;735:10:56;6370:40:28;;;6347:4;6424:11;:::o",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c90816301d5062a14610cb557816301ffc9a714610bde57816307bd026514610ba357838263134008d314610ae75750816313bc9f2014610ac7578163150b7a0214610a58578163248a9ca314610a2e5781632ab0f52914610a0e5781632f2ff15d146109e457816331d50750146109c457816336568abe14610958578163584b153e1461092f57816364d62353146108aa5781637958004c1461084e5781638065657f1461082c5781638f2a0bb0146106755781638f61f4f51461063a57816391d14854146105e8578163a217fddf146105cd578163b08e51c014610592578163b1c5f42714610566578163bc197c81146104c6578163c4d252f5146103c5578163d45c44351461039d578163d547741f14610358578163e38335e5146101f2578163f23a6e6114610180575063f27a0c9203610011573461017c578160031936011261017c576020906002549051908152f35b5080fd5b8284346101ef5760a06003193601126101ef5761019b610d94565b506101a4610dbc565b506084359067ffffffffffffffff82116101ef57506020926101c891369101610f13565b50517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b80fd5b90506101fd36610f8b565b9098949591939296977fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638b528a602052858b208b805260205260ff868c2054161561034a575b838314801590610340575b6102fc575061026661026d918a868a878b888f61132a565b9889611715565b885b81811061028357896102808a611802565b80f35b80808a7fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a6102f36102db8f988c6102d4828e6102ce8f60019f6102c991859161126a565b6112a9565b9761126a565b35956112ca565b906102e8828287876117ad565b8d51948594856110d9565b0390a30161026f565b85517fffb032110000000000000000000000000000000000000000000000000000000081529081019283526020830185905260408301849052918291506060010390fd5b508483141561024e565b61035333611664565b610243565b919050346103995780600319360112610399576103959135610390600161037d610dbc565b93838752866020528620015433906116d6565b6118cc565b5080f35b8280fd5b9050346103995760206003193601126103995760209282913581526001845220549051908152f35b91905034610399576020600319360112610399578135917ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7838085528460205282852033865260205260ff838620541615610492575061042383611184565b1561045d5750829082825260016020528120557fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb708280a280f35b8260449251917f5ead8eb500000000000000000000000000000000000000000000000000000000835282015260066024820152fd5b60449251917fe2517d3f00000000000000000000000000000000000000000000000000000000835233908301526024820152fd5b8284346101ef5760a06003193601126101ef576104e1610d94565b506104ea610dbc565b5067ffffffffffffffff9060443582811161017c5761050c9036908601610fed565b5060643582811161017c576105249036908601610fed565b506084359182116101ef575060209261053f91369101610f13565b50517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b50503461017c5760209061058b61057c36610f8b565b9695909594919493929361132a565b9051908152f35b50503461017c578160031936011261017c57602090517ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7838152f35b50503461017c578160031936011261017c5751908152602090f35b9050346103995781600319360112610399578160209360ff92610609610dbc565b9035825281865273ffffffffffffffffffffffffffffffffffffffff83832091168252855220541690519015158152f35b50503461017c578160031936011261017c57602090517fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc18152f35b919050346103995760c06003193601126103995767ffffffffffffffff908235828111610828576106a99036908501610f5a565b93602435848111610824576106c19036908301610f5a565b94604435908111610820576106d99036908401610f5a565b606493919335906084359760a435936106f1336115bb565b818b14801590610816575b6107d2575061071289848489858f8b908e61132a565b9961071d858c6114ea565b8a8c5b8a838210610766578e838e8381610735578380f35b7f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03879160209151908152a28180808380f35b6001927f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b6107c78f8c88978f92898f8f8f6107b5916107af6102c98680946107bc9961126a565b9a61126a565b35986112ca565b915196879687611093565b0390a3018b90610720565b88517fffb032110000000000000000000000000000000000000000000000000000000081529081018b81526020810184905260408101929092529081906060010390fd5b50828b14156106fc565b8780fd5b8680fd5b8480fd5b50503461017c5760209061058b61084236610e0d565b949390939291926111e9565b83833461017c57602060031936011261017c5761086b83356111ad565b9051918382101561087e57602083838152f35b806021857f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b919050346103995760206003193601126103995781359130330361090057507f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5906002548151908152836020820152a160025580f35b60249151907fe2850c590000000000000000000000000000000000000000000000000000000082523390820152fd5b8284346101ef5760206003193601126101ef575061094f60209235611184565b90519015158152f35b83833461017c578060031936011261017c57610972610dbc565b903373ffffffffffffffffffffffffffffffffffffffff83160361099c57506103959192356118cc565b8390517f6697b232000000000000000000000000000000000000000000000000000000008152fd5b8284346101ef5760206003193601126101ef575061094f6020923561116d565b919050346103995780600319360112610399576103959135610a09600161037d610dbc565b611822565b8284346101ef5760206003193601126101ef575061094f60209235611155565b90503461039957602060031936011261039957816020936001923581528085522001549051908152f35b8284346101ef5760806003193601126101ef57610a73610d94565b50610a7c610dbc565b506064359067ffffffffffffffff82116101ef5750602092610aa091369101610f13565b50517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b8284346101ef5760206003193601126101ef575061094f6020923561110e565b610280610b7782610b8d7fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58610b6e89610b1f36610e0d565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638b9a9697939598929a528a602052828b208b805260205260ff838c20541615610b95575b8985858a8a6111e9565b998a9889611715565b610b83838388886117ad565b51948594856110d9565b0390a3611802565b610b9e33611664565b610b64565b50503461017c578160031936011261017c57602090517fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638152f35b9050346103995760206003193601126103995735907fffffffff00000000000000000000000000000000000000000000000000000000821680920361039957602092507f4e2312e0000000000000000000000000000000000000000000000000000000008214918215610c55575b50519015158152f35b9091507f7965db0b000000000000000000000000000000000000000000000000000000008114908115610c8b575b509038610c4c565b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501438610c83565b919050346103995760c060031936011261039957610cd1610d94565b908360243560443567ffffffffffffffff8111610399577f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca95610d1691369101610ddf565b95909160643595610d576084359760a43590610d31336115bb565b610d3f8a828d8a89896111e9565b9a8b97610d4c848a6114ea565b8a5196879687611093565b0390a381610d63578380f35b7f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03879160209151908152a23880808380f35b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610db757565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff82168203610db757565b9181601f84011215610db75782359167ffffffffffffffff8311610db75760208381860195010111610db757565b60a0600319820112610db75760043573ffffffffffffffffffffffffffffffffffffffff81168103610db75791602435916044359067ffffffffffffffff8211610db757610e5d91600401610ddf565b90916064359060843590565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610eaa57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8111610eaa57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f82011215610db757803590610f2a82610ed9565b92610f386040519485610e69565b82845260208383010111610db757816000926020809301838601378301015290565b9181601f84011215610db75782359167ffffffffffffffff8311610db7576020808501948460051b010111610db757565b9060a0600319830112610db75767ffffffffffffffff600435818111610db75783610fb891600401610f5a565b93909392602435838111610db75782610fd391600401610f5a565b93909392604435918211610db757610e5d91600401610f5a565b81601f82011215610db75780359160209167ffffffffffffffff8411610eaa578360051b906040519461102285840187610e69565b85528380860192820101928311610db7578301905b828210611045575050505090565b81358152908301908301611037565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0938186528686013760008582860101520116010190565b9290936110cf9273ffffffffffffffffffffffffffffffffffffffff60809699989799168552602085015260a0604085015260a0840191611054565b9460608201520152565b61110b949273ffffffffffffffffffffffffffffffffffffffff60609316825260208201528160408201520191611054565b90565b611117906111ad565b60048110156111265760021490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b61115e906111ad565b60048110156111265760031490565b611176906111ad565b600481101561112657151590565b61118d906111ad565b600481101561112657600181149081156111a5575090565b600291501490565b600052600160205260406000205480156000146111ca5750600090565b600181036111d85750600390565b4210156111e457600190565b600290565b9461122d6112649495929360405196879573ffffffffffffffffffffffffffffffffffffffff602088019a168a52604087015260a0606087015260c0860191611054565b91608084015260a0830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610e69565b51902090565b919081101561127a5760051b0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b3573ffffffffffffffffffffffffffffffffffffffff81168103610db75790565b919081101561127a5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610db757019081359167ffffffffffffffff8311610db7576020018236038113610db7579190565b969294909695919560405196602091828901998060c08b0160a08d525260e08a01919060005b8181106114b4575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe097888a83030160408b01528082527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8111610db7579089969495939897929160051b80928a830137019380888601878703606089015252604085019460408260051b82010195836000925b84841061140e575050505050506112649550608084015260a083015203908101835282610e69565b91939698509193989994967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc082820301845289357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811215610db757830186810191903567ffffffffffffffff8111610db7578036038313610db75761149d88928392600195611054565b9b0194019401918b98969394919a9997959a6113e6565b90919283359073ffffffffffffffffffffffffffffffffffffffff8216809203610db75790815285019285019190600101611350565b906114f48261116d565b6115835760025480821061154c575042019081421161151d576000526001602052604060002055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60449250604051917f5433660900000000000000000000000000000000000000000000000000000000835260048301526024820152fd5b604482604051907f5ead8eb5000000000000000000000000000000000000000000000000000000008252600482015260016024820152fd5b73ffffffffffffffffffffffffffffffffffffffff1660008181527f3412d5605ac6cd444957cedb533e5dacad6378b4bc819ebe3652188a665066d560205260409020547fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc19060ff161561162d575050565b60449250604051917fe2517d3f00000000000000000000000000000000000000000000000000000000835260048301526024820152fd5b73ffffffffffffffffffffffffffffffffffffffff1660008181527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d706960205260409020547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff161561162d575050565b80600052600060205273ffffffffffffffffffffffffffffffffffffffff60406000209216918260005260205260ff604060002054161561162d575050565b61171e8161110e565b15611775575080151580611765575b6117345750565b602490604051907f90a9a6180000000000000000000000000000000000000000000000000000000082526004820152fd5b5061176f81611155565b1561172d565b604490604051907f5ead8eb5000000000000000000000000000000000000000000000000000000008252600482015260046024820152fd5b6117f793600093928493826040519384928337810185815203925af13d156117fa573d906117da82610ed9565b916117e86040519384610e69565b82523d6000602084013e61196d565b50565b60609061196d565b61180b8161110e565b156117755760005260016020526001604060002055565b906000918083528260205273ffffffffffffffffffffffffffffffffffffffff6040842092169182845260205260ff604084205416156000146118c75780835282602052604083208284526020526040832060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d339380a4600190565b505090565b906000918083528260205273ffffffffffffffffffffffffffffffffffffffff6040842092169182845260205260ff6040842054166000146118c7578083528260205260408320828452602052604083207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4600190565b9091906119ae575080511561198457805190602001fd5b60046040517f1425ea42000000000000000000000000000000000000000000000000000000008152fd5b56fea2646970667358221220020c0f4ca4a5ee86218a8c45520f4f9b02657aac2db1e991a2c7238ac94f454f64736f6c63430008190033",
    "sourceMap": "1084:15205:31:-:0;;;;;;;;;;;;-1:-1:-1;1084:15205:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;8005:9;1084:15205;;;;;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;:::i;:::-;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;1276:26;1084:15205;;;;;;;;;;;;;;;;;;;5347:26;5343:87;;1084:15205;13389:31;;;;;:68;;;1084:15205;13385:184;;13592:64;;13683:11;13592:64;;;;;;;;;:::i;:::-;13683:11;;;:::i;:::-;13710:13;13725:18;;;;;;14019:2;;;;:::i;:::-;1084:15205;;13745:3;13781:10;;;13945:43;13781:10;;13945:43;13869:11;13781:10;;;13821:9;13781:10;;;;1084:15205;13781:10;;;;;;:::i;:::-;;:::i;:::-;13821:9;;:::i;:::-;1084:15205;13869:11;;:::i;:::-;13918:7;;;;;;;:::i;:::-;1084:15205;;13945:43;;;;;:::i;:::-;;;;1084:15205;13710:13;;13385:184;1084:15205;;13480:78;;;;;;1084:15205;;;;;;;;;;;;;;;;;;-1:-1:-1;1084:15205:31;;13480:78;;;13389:68;13424:33;;;;;13389:68;;5343:87;5406:12;735:10:56;5406:12:31;:::i;:::-;5343:87;;1084:15205;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;4747:26:28;1084:15205:31;;3282:12:28;1084:15205:31;;;:::i;:::-;;;;;;;;;;3901:22:28;1084:15205:31;735:10:56;3282:12:28;;:::i;:::-;4747:26;:::i;:::-;;1084:15205:31;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;1349:27;;1084:15205;;;;;;;;;735:10:56;1084:15205:31;;;;;;;;;;3519:23:28;3515:108;;11400:22:31;;;;:::i;:::-;11399:23;11395:230;;1084:15205;;;;;;;;;;;;11672:13;;;;1084:15205;;11395:230;1084:15205;;;;11445:169;;;;;;1084:15205;11515:85;1084:15205;;;;11445:169;3515:108:28;1084:15205:31;;;3565:47:28;;;;735:10:56;3565:47:28;;;1084:15205:31;;;;;3565:47:28;1084:15205:31;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;:::i;:::-;;;;:::i;:::-;-1:-1:-1;1084:15205:31;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;1349:27;1084:15205;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;1204:26;1084:15205;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;735:10:56;3282:12:28;735:10:56;3282:12:28;:::i;:::-;10130:31:31;;;;;:68;;;1084:15205;10126:184;;10333:64;;;;;;;;;;;;:::i;:::-;10421:5;;;;;:::i;:::-;10442:13;;10457:18;;;;;;;10601;;;;;10597:72;;1084:15205;;;10597:72;10640:18;1084:15205;;;;;;;10640:18;10597:72;;;1084:15205;;;10477:3;1084:15205;10522:10;10501:76;10522:10;;10501:76;10522:10;;;;;;;;;;10534:9;10522:10;;;;;;10545:11;10522:10;;:::i;:::-;10534:9;;:::i;:::-;1084:15205;10545:11;;:::i;:::-;1084:15205;;10501:76;;;;;:::i;:::-;;;;1084:15205;10442:13;;;;10126:184;1084:15205;;10221:78;;;;;;1084:15205;;;;;;;;;;;;;;;;;;;;;13480:78;;;10130:68;10165:33;;;;;10130:68;;1084:15205;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;15612:4;;735:10:56;15594:23:31;15590:95;;1084:15205;15699:35;1084:15205;15714:9;1084:15205;;;;;;;;;;;15699:35;15714:9;1084:15205;;;15590:95;1084:15205;;;15640:34;;;;735:10:56;15640:34:31;;;1084:15205;15640:34;1084:15205;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;:::i;:::-;735:10:56;;1084:15205:31;;;5421:34:28;5417:102;;1084:15205:31;5529:37:28;1084:15205:31;;;5529:37:28;:::i;5417:102::-;1084:15205:31;;;5478:30:28;;;;1084:15205:31;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;4330:25:28;1084:15205:31;;3282:12:28;1084:15205:31;;;:::i;3282:12:28:-;4330:25;:::i;1084:15205:31:-;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;;;;;;;3901:22:28;1084:15205:31;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;:::i;:::-;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;:::i;:::-;12615:2;12482:11;1084:15205;12551:43;;12399:56;1084:15205;;;;:::i;:::-;1276:26;1084:15205;;;;;;;;;;;;;;;;;;;;;;;;;;;5347:26;5343:87;;1084:15205;12399:56;;;;;;:::i;:::-;12482:11;;;;;:::i;:::-;12528:7;;;;;;:::i;:::-;1084:15205;12551:43;;;;;:::i;:::-;;;;12615:2;:::i;5343:87::-;5406:12;735:10:56;5406:12:31;:::i;:::-;5343:87;;1084:15205;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;1276:26;1084:15205;;;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;;;;;;774:49:47;;789:34;774:49;;:89;;;;;1084:15205:31;;;;;;;;;774:89:47;2673:47:28;;;2688:32;2673:47;;:87;;;;;774:89:47;;;;;;2673:87:28;876:25:65;861:40;;;2673:87:28;;;1084:15205:31;;;;;;;;-1:-1:-1;;1084:15205:31;;;;;;;:::i;:::-;;;;;;;;;;;;9430:61;1084:15205;;;;;;;:::i;:::-;;;;;;;9430:61;1084:15205;;;;;735:10:56;3282:12:28;735:10:56;3282:12:28;:::i;:::-;9332:53:31;;;;;;;;:::i;:::-;9409:5;;;;;;;:::i;:::-;1084:15205;;9430:61;;;;;:::i;:::-;;;;9505:18;9501:72;;1084:15205;;;9501:72;9544:18;1084:15205;;;;;;;9544:18;9501:72;;;1084:15205;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;1084:15205:31;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;-1:-1:-1;;1084:15205:31;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1084:15205:31;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;6607:134::-;6689:21;6607:134;6689:21;:::i;:::-;1084:15205;;;;;;6714:20;6689:45;6607:134;:::o;1084:15205::-;;-1:-1:-1;1084:15205:31;;;;;-1:-1:-1;1084:15205:31;6820:132;6901:21;6820:132;6901:21;:::i;:::-;1084:15205;;;;;;6926:19;6901:44;6820:132;:::o;5998:129::-;6075:21;5998:129;6075:21;:::i;:::-;1084:15205;;;;;;6075:45;;5998:129;:::o;6262:209::-;6362:21;6262:209;6362:21;:::i;:::-;1084:15205;;;;;;6409:22;6400:31;;:64;;;;;6393:71;6262:209;:::o;6400:64::-;6444:20;6435:29;;;6262:209;:::o;7270:460::-;-1:-1:-1;1084:15205:31;7189:11;1084:15205;;;-1:-1:-1;1084:15205:31;;7414:14;;7410:314;7414:14;;;7444:27;-1:-1:-1;7444:27:31;:::o;7410:314::-;7189:11;7492:28;;7189:11;;7536:26;7543:19;7536:26;:::o;7488:236::-;7595:15;-1:-1:-1;7595:15:31;;;7189:11;7626:29;:::o;7579:145::-;7693:20;7686:27;:::o;8134:279::-;;1084:15205;8355:50;8134:279;;;;1084:15205;;8355:50;;;1084:15205;8355:50;;;1084:15205;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;8355:50;;;;;;;;:::i;:::-;1084:15205;8345:61;;8134:279;:::o;1084:15205::-;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;8529:320::-;;;;;;;;;1084:15205;;8785:56;;;;;;1084:15205;;;;;;;;;;;;;;-1:-1:-1;1084:15205:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1084:15205:31;;;;;;;;;;;;;8785:56;1084:15205;;;;;;;;;;8785:56;;;;;;;;:::i;1084:15205::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10776:399;;10844:15;;;:::i;:::-;10840:131;;8005:9;1084:15205;11026:16;;;11022:96;;11145:15;;1084:15205;11145:15;;;1084:15205;;;-1:-1:-1;1084:15205:31;11127:11;1084:15205;;;-1:-1:-1;1084:15205:31;;10776:399::o;1084:15205::-;;-1:-1:-1;1084:15205:31;;;;;-1:-1:-1;1084:15205:31;11022:96;1084:15205;;;;;11065:42;;;;;;;1084:15205;;;;;11065:42;10840:131;1084:15205;;;;10882:78;;;;1084:15205;10882:78;;1084:15205;;;;;;10882:78;3432:197:28;1084:15205:31;;2954:6:28;1084:15205:31;;;;;;;;;;1204:26;;1084:15205;;3519:23:28;3515:108;;3432:197;;:::o;3515:108::-;1084:15205:31;;;;;3565:47:28;;;;;;;1084:15205:31;;;;;3565:47:28;3432:197;1084:15205:31;;2954:6:28;1084:15205:31;;;;;;;;;;1276:26;;1084:15205;;3519:23:28;3515:108;;3432:197;;:::o;:::-;1084:15205:31;2954:6:28;1084:15205:31;2954:6:28;1084:15205:31;;;;2954:6:28;1084:15205:31;;;;;2954:6:28;1084:15205:31;;;;;2954:6:28;1084:15205:31;;;3519:23:28;3515:108;;3432:197;;:::o;14407:367:31:-;14489:20;;;:::i;:::-;14488:21;14484:137;;14634:25;;;;:58;;;14407:367;14630:138;;14407:367;:::o;14630:138::-;1084:15205;;;;14715:42;;;;;;;1084:15205;14715:42;14634:58;14664:28;;;;:::i;:::-;14663:29;14634:58;;14484:137;1084:15205;;;;14532:78;;;;1084:15205;14532:78;;1084:15205;;;;;;14532:78;14092:232;14272:45;14092:232;14231:31;14092:232;;;;1084:15205;;;;;;;;;;;;;14231:31;;;;1084:15205;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;14231:31;1084:15205;;;;14272:45;:::i;:::-;;14092:232::o;1084:15205::-;;;14272:45;:::i;14856:236::-;14911:20;;;:::i;:::-;14910:21;14906:137;;-1:-1:-1;1084:15205:31;1434:1;1084:15205;;1434:1;1084:15205;-1:-1:-1;1084:15205:31;;14856:236::o;6179:316:28:-;;2954:6;1084:15205:31;;;;;;;;;;;;;;;;;;;;;;;;;6276:23:28;6272:217;1084:15205:31;;;;;;;;;;;;;;;;;;;;6347:4:28;1084:15205:31;;;;;;;6370:40:28;735:10:56;6370:40:28;;;6347:4;6424:11;:::o;6272:217::-;6466:12;;;:::o;6730:317::-;;2954:6;1084:15205:31;;;;;;;;;;;;;;;;;;;;;;;;;6824:217:28;1084:15205:31;;;;;;;;;;;;;;;;;;;;;;;;;;6922:40:28;735:10:56;6922:40:28;;;1084:15205:31;6976:11:28;:::o;5407:224:55:-;;;;5523:8;;-1:-1:-1;1084:15205:31;;5874:21:55;:17;;6046:142;;;;;;5870:383;6225:17;1084:15205:31;;6225:17:55;;;;5519:106;5597:17::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "CANCELLER_ROLE()": "b08e51c0",
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "EXECUTOR_ROLE()": "07bd0265",
    "PROPOSER_ROLE()": "8f61f4f5",
    "cancel(bytes32)": "c4d252f5",
    "execute(address,uint256,bytes,bytes32,bytes32)": "134008d3",
    "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)": "e38335e5",
    "getMinDelay()": "f27a0c92",
    "getOperationState(bytes32)": "7958004c",
    "getRoleAdmin(bytes32)": "248a9ca3",
    "getTimestamp(bytes32)": "d45c4435",
    "grantRole(bytes32,address)": "2f2ff15d",
    "hasRole(bytes32,address)": "91d14854",
    "hashOperation(address,uint256,bytes,bytes32,bytes32)": "8065657f",
    "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)": "b1c5f427",
    "isOperation(bytes32)": "31d50750",
    "isOperationDone(bytes32)": "2ab0f529",
    "isOperationPending(bytes32)": "584b153e",
    "isOperationReady(bytes32)": "13bc9f20",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": "bc197c81",
    "onERC1155Received(address,address,uint256,uint256,bytes)": "f23a6e61",
    "onERC721Received(address,address,uint256,bytes)": "150b7a02",
    "renounceRole(bytes32,address)": "36568abe",
    "revokeRole(bytes32,address)": "d547741f",
    "schedule(address,uint256,bytes,bytes32,bytes32,uint256)": "01d5062a",
    "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)": "8f2a0bb0",
    "supportsInterface(bytes4)": "01ffc9a7",
    "updateDelay(uint256)": "64d62353"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"minDelay\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"proposers\",\"type\":\"address[]\"},{\"internalType\":\"address[]\",\"name\":\"executors\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AccessControlBadConfirmation\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"neededRole\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"delay\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minDelay\",\"type\":\"uint256\"}],\"name\":\"TimelockInsufficientDelay\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"targets\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"payloads\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"values\",\"type\":\"uint256\"}],\"name\":\"TimelockInvalidOperationLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"TimelockUnauthorizedCaller\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"predecessorId\",\"type\":\"bytes32\"}],\"name\":\"TimelockUnexecutedPredecessor\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"operationId\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"expectedStates\",\"type\":\"bytes32\"}],\"name\":\"TimelockUnexpectedOperationState\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"CallExecuted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"}],\"name\":\"CallSalt\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"predecessor\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"delay\",\"type\":\"uint256\"}],\"name\":\"CallScheduled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"Cancelled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"oldDuration\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newDuration\",\"type\":\"uint256\"}],\"name\":\"MinDelayChange\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"CANCELLER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"EXECUTOR_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PROPOSER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"cancel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"payload\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"predecessor\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"}],\"name\":\"execute\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"targets\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes[]\",\"name\":\"payloads\",\"type\":\"bytes[]\"},{\"internalType\":\"bytes32\",\"name\":\"predecessor\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"}],\"name\":\"executeBatch\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMinDelay\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"getOperationState\",\"outputs\":[{\"internalType\":\"enum TimelockController.OperationState\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"getTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"predecessor\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"}],\"name\":\"hashOperation\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"targets\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes[]\",\"name\":\"payloads\",\"type\":\"bytes[]\"},{\"internalType\":\"bytes32\",\"name\":\"predecessor\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"}],\"name\":\"hashOperationBatch\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"isOperation\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"isOperationDone\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"isOperationPending\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"isOperationReady\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"callerConfirmation\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"predecessor\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"delay\",\"type\":\"uint256\"}],\"name\":\"schedule\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"targets\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes[]\",\"name\":\"payloads\",\"type\":\"bytes[]\"},{\"internalType\":\"bytes32\",\"name\":\"predecessor\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"delay\",\"type\":\"uint256\"}],\"name\":\"scheduleBatch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newDelay\",\"type\":\"uint256\"}],\"name\":\"updateDelay\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"details\":\"Contract module which acts as a timelocked controller. When set as the owner of an `Ownable` smart contract, it enforces a timelock on all `onlyOwner` maintenance operations. This gives time for users of the controlled contract to exit before a potentially dangerous maintenance operation is applied. By default, this contract is self administered, meaning administration tasks have to go through the timelock process. The proposer (resp executor) role is in charge of proposing (resp executing) operations. A common use case is to position this {TimelockController} as the owner of a smart contract, with a multisig or a DAO as the sole proposer.\",\"errors\":{\"AccessControlBadConfirmation()\":[{\"details\":\"The caller of a function is not the expected one. NOTE: Don't confuse with {AccessControlUnauthorizedAccount}.\"}],\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"details\":\"The `account` is missing a role.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"TimelockInsufficientDelay(uint256,uint256)\":[{\"details\":\"The schedule operation doesn't meet the minimum delay.\"}],\"TimelockInvalidOperationLength(uint256,uint256,uint256)\":[{\"details\":\"Mismatch between the parameters length for an operation call.\"}],\"TimelockUnauthorizedCaller(address)\":[{\"details\":\"The caller account is not authorized.\"}],\"TimelockUnexecutedPredecessor(bytes32)\":[{\"details\":\"The predecessor to an operation not yet done.\"}],\"TimelockUnexpectedOperationState(bytes32,bytes32)\":[{\"details\":\"The current state of an operation is not as required. The `expectedStates` is a bitmap with the bits enabled for each OperationState enum position counting from right to left. See {_encodeStateBitmap}.\"}]},\"events\":{\"CallExecuted(bytes32,uint256,address,uint256,bytes)\":{\"details\":\"Emitted when a call is performed as part of operation `id`.\"},\"CallSalt(bytes32,bytes32)\":{\"details\":\"Emitted when new proposal is scheduled with non-zero salt.\"},\"CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)\":{\"details\":\"Emitted when a call is scheduled as part of operation `id`.\"},\"Cancelled(bytes32)\":{\"details\":\"Emitted when operation `id` is cancelled.\"},\"MinDelayChange(uint256,uint256)\":{\"details\":\"Emitted when the minimum delay for future operations is modified.\"},\"RoleAdminChanged(bytes32,bytes32,bytes32)\":{\"details\":\"Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this.\"},\"RoleGranted(bytes32,address,address)\":{\"details\":\"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.\"},\"RoleRevoked(bytes32,address,address)\":{\"details\":\"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)\"}},\"kind\":\"dev\",\"methods\":{\"cancel(bytes32)\":{\"details\":\"Cancel an operation. Requirements: - the caller must have the 'canceller' role.\"},\"constructor\":{\"details\":\"Initializes the contract with the following parameters: - `minDelay`: initial minimum delay in seconds for operations - `proposers`: accounts to be granted proposer and canceller roles - `executors`: accounts to be granted executor role - `admin`: optional account to be granted admin role; disable with zero address IMPORTANT: The optional admin can aid with initial configuration of roles after deployment without being subject to delay, but this role should be subsequently renounced in favor of administration through timelocked proposals. Previous versions of this contract would assign this admin to the deployer automatically and should be renounced as well.\"},\"execute(address,uint256,bytes,bytes32,bytes32)\":{\"details\":\"Execute an (ready) operation containing a single transaction. Emits a {CallExecuted} event. Requirements: - the caller must have the 'executor' role.\"},\"executeBatch(address[],uint256[],bytes[],bytes32,bytes32)\":{\"details\":\"Execute an (ready) operation containing a batch of transactions. Emits one {CallExecuted} event per transaction in the batch. Requirements: - the caller must have the 'executor' role.\"},\"getMinDelay()\":{\"details\":\"Returns the minimum delay in seconds for an operation to become valid. This value can be changed by executing an operation that calls `updateDelay`.\"},\"getOperationState(bytes32)\":{\"details\":\"Returns operation state.\"},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"getTimestamp(bytes32)\":{\"details\":\"Returns the timestamp at which an operation becomes ready (0 for unset operations, 1 for done operations).\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"hashOperation(address,uint256,bytes,bytes32,bytes32)\":{\"details\":\"Returns the identifier of an operation containing a single transaction.\"},\"hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)\":{\"details\":\"Returns the identifier of an operation containing a batch of transactions.\"},\"isOperation(bytes32)\":{\"details\":\"Returns whether an id corresponds to a registered operation. This includes both Waiting, Ready, and Done operations.\"},\"isOperationDone(bytes32)\":{\"details\":\"Returns whether an operation is done or not.\"},\"isOperationPending(bytes32)\":{\"details\":\"Returns whether an operation is pending or not. Note that a \\\"pending\\\" operation may also be \\\"ready\\\".\"},\"isOperationReady(bytes32)\":{\"details\":\"Returns whether an operation is ready for execution. Note that a \\\"ready\\\" operation is also \\\"pending\\\".\"},\"onERC721Received(address,address,uint256,bytes)\":{\"details\":\"See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"schedule(address,uint256,bytes,bytes32,bytes32,uint256)\":{\"details\":\"Schedule an operation containing a single transaction. Emits {CallSalt} if salt is nonzero, and {CallScheduled}. Requirements: - the caller must have the 'proposer' role.\"},\"scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)\":{\"details\":\"Schedule an operation containing a batch of transactions. Emits {CallSalt} if salt is nonzero, and one {CallScheduled} event per transaction in the batch. Requirements: - the caller must have the 'proposer' role.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"updateDelay(uint256)\":{\"details\":\"Changes the minimum timelock duration for future operations. Emits a {MinDelayChange} event. Requirements: - the caller must be the timelock itself. This can only be achieved by scheduling and later executing an operation where the timelock is the target and the data is the ABI-encoded call to this function.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/governance/TimelockController.sol\":\"TimelockController\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xa0e92d42942f4f57c5be50568dac11e9d00c93efcb458026e18d2d9b9b2e7308\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://46326c0bb1e296b67185e81c918e0b40501b8b6386165855df0a3f3c634b6a80\",\"dweb:/ipfs/QmTwyrDYtsxsk6pymJTK94PnEpzsmkpUxFuzEiakDopy4Z\"]},\"node_modules/@openzeppelin/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"node_modules/@openzeppelin/contracts/governance/TimelockController.sol\":{\"keccak256\":\"0x50ea4919331ca84a89c44be1e1fdecd597c7f5575c3d93f582197db97171c2c9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a80401f75260f9f42440c05baee0d2ff7cdd1e1e451400000eabb9c901abe383\",\"dweb:/ipfs/QmVdWjwkxmWrxcmz6ffmC8nCLwj5ixKrgWF7mKERdkZSfR\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0xb69597a63b202e28401128bed6a6d259e8730191274471af7303eafb247881a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://25addbda49a578b3318130585601344c5149a5549d749adf88e9685349a46b23\",\"dweb:/ipfs/Qme2DuD8gpsve1ZvaSMQpBwMdpU7yAtekDwr7gUp8dX4zX\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol\":{\"keccak256\":\"0xc26cd2e2bcf59b87c986fc653545b35010db9c585a3f3312fe61d7b1b3805735\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://46fe54b0ac3ee60bdff012fae7d13c1171dff433aa4fdd356fd06ce46fbe711b\",\"dweb:/ipfs/QmTTm6jBY6jQ6fx1cnCT4YepEV2aQvqLme5TSxuidfpf2q\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22\",\"dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol\":{\"keccak256\":\"0xaad20f8713b5cd98114278482d5d91b9758f9727048527d582e8e88fd4901fd8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5396e8dbb000c2fada59b7d2093b9c7c870fd09413ab0fdaba45d882959c6244\",\"dweb:/ipfs/QmXQn5XckSiUsUBpMYuiFeqnojRX4rKa9jmgjCPeTuPmhh\"]},\"node_modules/@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8\",\"dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df\",\"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL\"]}},\"version\":1}",
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
              "internalType": "uint256",
              "name": "minDelay",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "proposers",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "executors",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "admin",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "AccessControlBadConfirmation"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "AccessControlUnauthorizedAccount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FailedInnerCall"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "delay",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minDelay",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "TimelockInsufficientDelay"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "targets",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "payloads",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "values",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "TimelockInvalidOperationLength"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "caller",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "TimelockUnauthorizedCaller"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "predecessorId",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "TimelockUnexecutedPredecessor"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "operationId",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "expectedStates",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "TimelockUnexpectedOperationState"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "target",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CallExecuted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CallSalt",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "target",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes",
              "indexed": false
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "delay",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CallScheduled",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Cancelled",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "oldDuration",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "newDuration",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MinDelayChange",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleAdminChanged",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleGranted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleRevoked",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "CANCELLER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "EXECUTOR_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "PROPOSER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "cancel"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "payload",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "execute"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "payloads",
              "type": "bytes[]"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "executeBatch"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getMinDelay",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getOperationState",
          "outputs": [
            {
              "internalType": "enum TimelockController.OperationState",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getTimestamp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "grantRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "hasRole",
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
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "hashOperation",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "payloads",
              "type": "bytes[]"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "hashOperationBatch",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isOperation",
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
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isOperationDone",
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
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isOperationPending",
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
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isOperationReady",
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
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "onERC1155BatchReceived",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "onERC1155Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revokeRole"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "delay",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "schedule"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "payloads",
              "type": "bytes[]"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "delay",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "scheduleBatch"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
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
              "internalType": "uint256",
              "name": "newDelay",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateDelay"
        },
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "cancel(bytes32)": {
            "details": "Cancel an operation. Requirements: - the caller must have the 'canceller' role."
          },
          "constructor": {
            "details": "Initializes the contract with the following parameters: - `minDelay`: initial minimum delay in seconds for operations - `proposers`: accounts to be granted proposer and canceller roles - `executors`: accounts to be granted executor role - `admin`: optional account to be granted admin role; disable with zero address IMPORTANT: The optional admin can aid with initial configuration of roles after deployment without being subject to delay, but this role should be subsequently renounced in favor of administration through timelocked proposals. Previous versions of this contract would assign this admin to the deployer automatically and should be renounced as well."
          },
          "execute(address,uint256,bytes,bytes32,bytes32)": {
            "details": "Execute an (ready) operation containing a single transaction. Emits a {CallExecuted} event. Requirements: - the caller must have the 'executor' role."
          },
          "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)": {
            "details": "Execute an (ready) operation containing a batch of transactions. Emits one {CallExecuted} event per transaction in the batch. Requirements: - the caller must have the 'executor' role."
          },
          "getMinDelay()": {
            "details": "Returns the minimum delay in seconds for an operation to become valid. This value can be changed by executing an operation that calls `updateDelay`."
          },
          "getOperationState(bytes32)": {
            "details": "Returns operation state."
          },
          "getRoleAdmin(bytes32)": {
            "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
          },
          "getTimestamp(bytes32)": {
            "details": "Returns the timestamp at which an operation becomes ready (0 for unset operations, 1 for done operations)."
          },
          "grantRole(bytes32,address)": {
            "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event."
          },
          "hasRole(bytes32,address)": {
            "details": "Returns `true` if `account` has been granted `role`."
          },
          "hashOperation(address,uint256,bytes,bytes32,bytes32)": {
            "details": "Returns the identifier of an operation containing a single transaction."
          },
          "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)": {
            "details": "Returns the identifier of an operation containing a batch of transactions."
          },
          "isOperation(bytes32)": {
            "details": "Returns whether an id corresponds to a registered operation. This includes both Waiting, Ready, and Done operations."
          },
          "isOperationDone(bytes32)": {
            "details": "Returns whether an operation is done or not."
          },
          "isOperationPending(bytes32)": {
            "details": "Returns whether an operation is pending or not. Note that a \"pending\" operation may also be \"ready\"."
          },
          "isOperationReady(bytes32)": {
            "details": "Returns whether an operation is ready for execution. Note that a \"ready\" operation is also \"pending\"."
          },
          "onERC721Received(address,address,uint256,bytes)": {
            "details": "See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`."
          },
          "renounceRole(bytes32,address)": {
            "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`. May emit a {RoleRevoked} event."
          },
          "revokeRole(bytes32,address)": {
            "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event."
          },
          "schedule(address,uint256,bytes,bytes32,bytes32,uint256)": {
            "details": "Schedule an operation containing a single transaction. Emits {CallSalt} if salt is nonzero, and {CallScheduled}. Requirements: - the caller must have the 'proposer' role."
          },
          "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)": {
            "details": "Schedule an operation containing a batch of transactions. Emits {CallSalt} if salt is nonzero, and one {CallScheduled} event per transaction in the batch. Requirements: - the caller must have the 'proposer' role."
          },
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
          },
          "updateDelay(uint256)": {
            "details": "Changes the minimum timelock duration for future operations. Emits a {MinDelayChange} event. Requirements: - the caller must be the timelock itself. This can only be achieved by scheduling and later executing an operation where the timelock is the target and the data is the ABI-encoded call to this function."
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
        "node_modules/@openzeppelin/contracts/governance/TimelockController.sol": "TimelockController"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/access/AccessControl.sol": {
        "keccak256": "0xa0e92d42942f4f57c5be50568dac11e9d00c93efcb458026e18d2d9b9b2e7308",
        "urls": [
          "bzz-raw://46326c0bb1e296b67185e81c918e0b40501b8b6386165855df0a3f3c634b6a80",
          "dweb:/ipfs/QmTwyrDYtsxsk6pymJTK94PnEpzsmkpUxFuzEiakDopy4Z"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/access/IAccessControl.sol": {
        "keccak256": "0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41",
        "urls": [
          "bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26",
          "dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/governance/TimelockController.sol": {
        "keccak256": "0x50ea4919331ca84a89c44be1e1fdecd597c7f5575c3d93f582197db97171c2c9",
        "urls": [
          "bzz-raw://a80401f75260f9f42440c05baee0d2ff7cdd1e1e451400000eabb9c901abe383",
          "dweb:/ipfs/QmVdWjwkxmWrxcmz6ffmC8nCLwj5ixKrgWF7mKERdkZSfR"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol": {
        "keccak256": "0xb69597a63b202e28401128bed6a6d259e8730191274471af7303eafb247881a3",
        "urls": [
          "bzz-raw://25addbda49a578b3318130585601344c5149a5549d749adf88e9685349a46b23",
          "dweb:/ipfs/Qme2DuD8gpsve1ZvaSMQpBwMdpU7yAtekDwr7gUp8dX4zX"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol": {
        "keccak256": "0xc26cd2e2bcf59b87c986fc653545b35010db9c585a3f3312fe61d7b1b3805735",
        "urls": [
          "bzz-raw://46fe54b0ac3ee60bdff012fae7d13c1171dff433aa4fdd356fd06ce46fbe711b",
          "dweb:/ipfs/QmTTm6jBY6jQ6fx1cnCT4YepEV2aQvqLme5TSxuidfpf2q"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol": {
        "keccak256": "0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49",
        "urls": [
          "bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22",
          "dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol": {
        "keccak256": "0xaad20f8713b5cd98114278482d5d91b9758f9727048527d582e8e88fd4901fd8",
        "urls": [
          "bzz-raw://5396e8dbb000c2fada59b7d2093b9c7c870fd09413ab0fdaba45d882959c6244",
          "dweb:/ipfs/QmXQn5XckSiUsUBpMYuiFeqnojRX4rKa9jmgjCPeTuPmhh"
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
      "node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133",
        "urls": [
          "bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8",
          "dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b",
        "urls": [
          "bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df",
          "dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/governance/TimelockController.sol",
    "id": 48991,
    "exportedSymbols": {
      "AccessControl": [
        47739
      ],
      "Address": [
        51304
      ],
      "ERC1155Holder": [
        50197
      ],
      "ERC721Holder": [
        51051
      ],
      "TimelockController": [
        48990
      ]
    },
    "nodeType": "SourceUnit",
    "src": "117:16173:31",
    "nodes": [
      {
        "id": 47972,
        "nodeType": "PragmaDirective",
        "src": "117:24:31",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 47974,
        "nodeType": "ImportDirective",
        "src": "143:58:31",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/access/AccessControl.sol",
        "file": "../access/AccessControl.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 48991,
        "sourceUnit": 47740,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47973,
              "name": "AccessControl",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 47739,
              "src": "151:13:31",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47976,
        "nodeType": "ImportDirective",
        "src": "202:68:31",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol",
        "file": "../token/ERC721/utils/ERC721Holder.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 48991,
        "sourceUnit": 51052,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47975,
              "name": "ERC721Holder",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51051,
              "src": "210:12:31",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47978,
        "nodeType": "ImportDirective",
        "src": "271:71:31",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol",
        "file": "../token/ERC1155/utils/ERC1155Holder.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 48991,
        "sourceUnit": 50198,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47977,
              "name": "ERC1155Holder",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50197,
              "src": "279:13:31",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47980,
        "nodeType": "ImportDirective",
        "src": "343:45:31",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Address.sol",
        "file": "../utils/Address.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 48991,
        "sourceUnit": 51305,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47979,
              "name": "Address",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51304,
              "src": "351:7:31",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 48990,
        "nodeType": "ContractDefinition",
        "src": "1084:15205:31",
        "nodes": [
          {
            "id": 47992,
            "nodeType": "VariableDeclaration",
            "src": "1164:66:31",
            "nodes": [],
            "constant": true,
            "functionSelector": "8f61f4f5",
            "mutability": "constant",
            "name": "PROPOSER_ROLE",
            "nameLocation": "1188:13:31",
            "scope": 48990,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 47988,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1164:7:31",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "50524f504f5345525f524f4c45",
                  "id": 47990,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1214:15:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1",
                    "typeString": "literal_string \"PROPOSER_ROLE\""
                  },
                  "value": "PROPOSER_ROLE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1",
                    "typeString": "literal_string \"PROPOSER_ROLE\""
                  }
                ],
                "id": 47989,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "1204:9:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 47991,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1204:26:31",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 47997,
            "nodeType": "VariableDeclaration",
            "src": "1236:66:31",
            "nodes": [],
            "constant": true,
            "functionSelector": "07bd0265",
            "mutability": "constant",
            "name": "EXECUTOR_ROLE",
            "nameLocation": "1260:13:31",
            "scope": 48990,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 47993,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1236:7:31",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4558454355544f525f524f4c45",
                  "id": 47995,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1286:15:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63",
                    "typeString": "literal_string \"EXECUTOR_ROLE\""
                  },
                  "value": "EXECUTOR_ROLE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63",
                    "typeString": "literal_string \"EXECUTOR_ROLE\""
                  }
                ],
                "id": 47994,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "1276:9:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 47996,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1276:26:31",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 48002,
            "nodeType": "VariableDeclaration",
            "src": "1308:68:31",
            "nodes": [],
            "constant": true,
            "functionSelector": "b08e51c0",
            "mutability": "constant",
            "name": "CANCELLER_ROLE",
            "nameLocation": "1332:14:31",
            "scope": 48990,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 47998,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1308:7:31",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "43414e43454c4c45525f524f4c45",
                  "id": 48000,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1359:16:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783",
                    "typeString": "literal_string \"CANCELLER_ROLE\""
                  },
                  "value": "CANCELLER_ROLE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783",
                    "typeString": "literal_string \"CANCELLER_ROLE\""
                  }
                ],
                "id": 47999,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "1349:9:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 48001,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1349:27:31",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 48008,
            "nodeType": "VariableDeclaration",
            "src": "1382:54:31",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "_DONE_TIMESTAMP",
            "nameLocation": "1408:15:31",
            "scope": 48990,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 48003,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1382:7:31",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "31",
                  "id": 48006,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1434:1:31",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  }
                ],
                "id": 48005,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "1426:7:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_uint256_$",
                  "typeString": "type(uint256)"
                },
                "typeName": {
                  "id": 48004,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1426:7:31",
                  "typeDescriptions": {}
                }
              },
              "id": 48007,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1426:10:31",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 48012,
            "nodeType": "VariableDeclaration",
            "src": "1443:50:31",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_timestamps",
            "nameLocation": "1482:11:31",
            "scope": 48990,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
              "typeString": "mapping(bytes32 => uint256)"
            },
            "typeName": {
              "id": 48011,
              "keyName": "id",
              "keyNameLocation": "1459:2:31",
              "keyType": {
                "id": 48009,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1451:7:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1443:30:31",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                "typeString": "mapping(bytes32 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 48010,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1465:7:31",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 48014,
            "nodeType": "VariableDeclaration",
            "src": "1499:25:31",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_minDelay",
            "nameLocation": "1515:9:31",
            "scope": 48990,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 48013,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1499:7:31",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "id": 48019,
            "nodeType": "EnumDefinition",
            "src": "1531:87:31",
            "nodes": [],
            "canonicalName": "TimelockController.OperationState",
            "members": [
              {
                "id": 48015,
                "name": "Unset",
                "nameLocation": "1561:5:31",
                "nodeType": "EnumValue",
                "src": "1561:5:31"
              },
              {
                "id": 48016,
                "name": "Waiting",
                "nameLocation": "1576:7:31",
                "nodeType": "EnumValue",
                "src": "1576:7:31"
              },
              {
                "id": 48017,
                "name": "Ready",
                "nameLocation": "1593:5:31",
                "nodeType": "EnumValue",
                "src": "1593:5:31"
              },
              {
                "id": 48018,
                "name": "Done",
                "nameLocation": "1608:4:31",
                "nodeType": "EnumValue",
                "src": "1608:4:31"
              }
            ],
            "name": "OperationState",
            "nameLocation": "1536:14:31"
          },
          {
            "id": 48028,
            "nodeType": "ErrorDefinition",
            "src": "1714:88:31",
            "nodes": [],
            "documentation": {
              "id": 48020,
              "nodeType": "StructuredDocumentation",
              "src": "1624:85:31",
              "text": " @dev Mismatch between the parameters length for an operation call."
            },
            "errorSelector": "ffb03211",
            "name": "TimelockInvalidOperationLength",
            "nameLocation": "1720:30:31",
            "parameters": {
              "id": 48027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48022,
                  "mutability": "mutable",
                  "name": "targets",
                  "nameLocation": "1759:7:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48028,
                  "src": "1751:15:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48021,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1751:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48024,
                  "mutability": "mutable",
                  "name": "payloads",
                  "nameLocation": "1776:8:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48028,
                  "src": "1768:16:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48023,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1768:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48026,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "1794:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48028,
                  "src": "1786:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48025,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1786:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1750:51:31"
            }
          },
          {
            "id": 48035,
            "nodeType": "ErrorDefinition",
            "src": "1891:65:31",
            "nodes": [],
            "documentation": {
              "id": 48029,
              "nodeType": "StructuredDocumentation",
              "src": "1808:78:31",
              "text": " @dev The schedule operation doesn't meet the minimum delay."
            },
            "errorSelector": "54336609",
            "name": "TimelockInsufficientDelay",
            "nameLocation": "1897:25:31",
            "parameters": {
              "id": 48034,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48031,
                  "mutability": "mutable",
                  "name": "delay",
                  "nameLocation": "1931:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48035,
                  "src": "1923:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48030,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1923:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48033,
                  "mutability": "mutable",
                  "name": "minDelay",
                  "nameLocation": "1946:8:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48035,
                  "src": "1938:16:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48032,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1938:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1922:33:31"
            }
          },
          {
            "id": 48042,
            "nodeType": "ErrorDefinition",
            "src": "2220:84:31",
            "nodes": [],
            "documentation": {
              "id": 48036,
              "nodeType": "StructuredDocumentation",
              "src": "1962:253:31",
              "text": " @dev The current state of an operation is not as required.\n The `expectedStates` is a bitmap with the bits enabled for each OperationState enum position\n counting from right to left.\n See {_encodeStateBitmap}."
            },
            "errorSelector": "5ead8eb5",
            "name": "TimelockUnexpectedOperationState",
            "nameLocation": "2226:32:31",
            "parameters": {
              "id": 48041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48038,
                  "mutability": "mutable",
                  "name": "operationId",
                  "nameLocation": "2267:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48042,
                  "src": "2259:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48037,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2259:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48040,
                  "mutability": "mutable",
                  "name": "expectedStates",
                  "nameLocation": "2288:14:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48042,
                  "src": "2280:22:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48039,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2280:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2258:45:31"
            }
          },
          {
            "id": 48047,
            "nodeType": "ErrorDefinition",
            "src": "2384:59:31",
            "nodes": [],
            "documentation": {
              "id": 48043,
              "nodeType": "StructuredDocumentation",
              "src": "2310:69:31",
              "text": " @dev The predecessor to an operation not yet done."
            },
            "errorSelector": "90a9a618",
            "name": "TimelockUnexecutedPredecessor",
            "nameLocation": "2390:29:31",
            "parameters": {
              "id": 48046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48045,
                  "mutability": "mutable",
                  "name": "predecessorId",
                  "nameLocation": "2428:13:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48047,
                  "src": "2420:21:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48044,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2420:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2419:23:31"
            }
          },
          {
            "id": 48052,
            "nodeType": "ErrorDefinition",
            "src": "2515:49:31",
            "nodes": [],
            "documentation": {
              "id": 48048,
              "nodeType": "StructuredDocumentation",
              "src": "2449:61:31",
              "text": " @dev The caller account is not authorized."
            },
            "errorSelector": "e2850c59",
            "name": "TimelockUnauthorizedCaller",
            "nameLocation": "2521:26:31",
            "parameters": {
              "id": 48051,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48050,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "2556:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48052,
                  "src": "2548:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48049,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2548:7:31",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2547:16:31"
            }
          },
          {
            "id": 48069,
            "nodeType": "EventDefinition",
            "src": "2658:204:31",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 48053,
              "nodeType": "StructuredDocumentation",
              "src": "2570:83:31",
              "text": " @dev Emitted when a call is scheduled as part of operation `id`."
            },
            "eventSelector": "4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca",
            "name": "CallScheduled",
            "nameLocation": "2664:13:31",
            "parameters": {
              "id": 48068,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48055,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "2703:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48069,
                  "src": "2687:18:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48054,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2687:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48057,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "2731:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48069,
                  "src": "2715:21:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48056,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2715:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48059,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "2754:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48069,
                  "src": "2746:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48058,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2746:7:31",
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
                  "id": 48061,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2778:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48069,
                  "src": "2770:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48060,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2770:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48063,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "2799:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48069,
                  "src": "2793:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 48062,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2793:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48065,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "predecessor",
                  "nameLocation": "2821:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48069,
                  "src": "2813:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48064,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2813:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48067,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "delay",
                  "nameLocation": "2850:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48069,
                  "src": "2842:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48066,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2842:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2677:184:31"
            }
          },
          {
            "id": 48082,
            "nodeType": "EventDefinition",
            "src": "2956:105:31",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 48070,
              "nodeType": "StructuredDocumentation",
              "src": "2868:83:31",
              "text": " @dev Emitted when a call is performed as part of operation `id`."
            },
            "eventSelector": "c2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58",
            "name": "CallExecuted",
            "nameLocation": "2962:12:31",
            "parameters": {
              "id": 48081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48072,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "2991:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48082,
                  "src": "2975:18:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48071,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2975:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48074,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "3011:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48082,
                  "src": "2995:21:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48073,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2995:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48076,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "3026:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48082,
                  "src": "3018:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48075,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3018:7:31",
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
                  "id": 48078,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3042:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48082,
                  "src": "3034:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3034:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48080,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "3055:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48082,
                  "src": "3049:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 48079,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3049:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2974:86:31"
            }
          },
          {
            "id": 48089,
            "nodeType": "EventDefinition",
            "src": "3154:49:31",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 48083,
              "nodeType": "StructuredDocumentation",
              "src": "3067:82:31",
              "text": " @dev Emitted when new proposal is scheduled with non-zero salt."
            },
            "eventSelector": "20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d0387",
            "name": "CallSalt",
            "nameLocation": "3160:8:31",
            "parameters": {
              "id": 48088,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48085,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "3185:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48089,
                  "src": "3169:18:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48084,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3169:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48087,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "3197:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48089,
                  "src": "3189:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48086,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3189:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3168:34:31"
            }
          },
          {
            "id": 48094,
            "nodeType": "EventDefinition",
            "src": "3279:36:31",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 48090,
              "nodeType": "StructuredDocumentation",
              "src": "3209:65:31",
              "text": " @dev Emitted when operation `id` is cancelled."
            },
            "eventSelector": "baa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb70",
            "name": "Cancelled",
            "nameLocation": "3285:9:31",
            "parameters": {
              "id": 48093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48092,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "3311:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48094,
                  "src": "3295:18:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48091,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3295:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3294:20:31"
            }
          },
          {
            "id": 48101,
            "nodeType": "EventDefinition",
            "src": "3415:63:31",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 48095,
              "nodeType": "StructuredDocumentation",
              "src": "3321:89:31",
              "text": " @dev Emitted when the minimum delay for future operations is modified."
            },
            "eventSelector": "11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5",
            "name": "MinDelayChange",
            "nameLocation": "3421:14:31",
            "parameters": {
              "id": 48100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48097,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "oldDuration",
                  "nameLocation": "3444:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48101,
                  "src": "3436:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48096,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3436:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48099,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newDuration",
                  "nameLocation": "3465:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48101,
                  "src": "3457:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48098,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3457:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3435:42:31"
            }
          },
          {
            "id": 48193,
            "nodeType": "FunctionDefinition",
            "src": "4248:761:31",
            "nodes": [],
            "body": {
              "id": 48192,
              "nodeType": "Block",
              "src": "4349:660:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48116,
                        "name": "DEFAULT_ADMIN_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47473,
                        "src": "4401:18:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 48119,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "4429:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TimelockController_$48990",
                              "typeString": "contract TimelockController"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_TimelockController_$48990",
                              "typeString": "contract TimelockController"
                            }
                          ],
                          "id": 48118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4421:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 48117,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4421:7:31",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 48120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4421:13:31",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 48115,
                      "name": "_grantRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47700,
                      "src": "4390:10:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (bytes32,address) returns (bool)"
                      }
                    },
                    "id": 48121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4390:45:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48122,
                  "nodeType": "ExpressionStatement",
                  "src": "4390:45:31"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 48128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48123,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48112,
                      "src": "4476:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 48126,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4493:1:31",
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
                        "id": 48125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "4485:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 48124,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4485:7:31",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 48127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4485:10:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4476:19:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48135,
                  "nodeType": "IfStatement",
                  "src": "4472:87:31",
                  "trueBody": {
                    "id": 48134,
                    "nodeType": "Block",
                    "src": "4497:62:31",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 48130,
                              "name": "DEFAULT_ADMIN_ROLE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47473,
                              "src": "4522:18:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 48131,
                              "name": "admin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48112,
                              "src": "4542:5:31",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 48129,
                            "name": "_grantRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47700,
                            "src": "4511:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (bytes32,address) returns (bool)"
                            }
                          },
                          "id": 48132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4511:37:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 48133,
                        "nodeType": "ExpressionStatement",
                        "src": "4511:37:31"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 48161,
                    "nodeType": "Block",
                    "src": "4661:118:31",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 48148,
                              "name": "PROPOSER_ROLE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47992,
                              "src": "4686:13:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 48149,
                                "name": "proposers",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48107,
                                "src": "4701:9:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 48151,
                              "indexExpression": {
                                "id": 48150,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48137,
                                "src": "4711:1:31",
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
                              "src": "4701:12:31",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 48147,
                            "name": "_grantRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47700,
                            "src": "4675:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (bytes32,address) returns (bool)"
                            }
                          },
                          "id": 48152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4675:39:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 48153,
                        "nodeType": "ExpressionStatement",
                        "src": "4675:39:31"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 48155,
                              "name": "CANCELLER_ROLE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48002,
                              "src": "4739:14:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 48156,
                                "name": "proposers",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48107,
                                "src": "4755:9:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 48158,
                              "indexExpression": {
                                "id": 48157,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48137,
                                "src": "4765:1:31",
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
                              "src": "4755:12:31",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 48154,
                            "name": "_grantRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47700,
                            "src": "4728:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (bytes32,address) returns (bool)"
                            }
                          },
                          "id": 48159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4728:40:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 48160,
                        "nodeType": "ExpressionStatement",
                        "src": "4728:40:31"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48140,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48137,
                      "src": "4634:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 48141,
                        "name": "proposers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48107,
                        "src": "4638:9:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 48142,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4648:6:31",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "4638:16:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4634:20:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48162,
                  "initializationExpression": {
                    "assignments": [
                      48137
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 48137,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "4627:1:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 48162,
                        "src": "4619:9:31",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 48136,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4619:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 48139,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 48138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4631:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4619:13:31"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 48145,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "4656:3:31",
                      "subExpression": {
                        "id": 48144,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48137,
                        "src": "4658:1:31",
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
                    "id": 48146,
                    "nodeType": "ExpressionStatement",
                    "src": "4656:3:31"
                  },
                  "nodeType": "ForStatement",
                  "src": "4614:165:31"
                },
                {
                  "body": {
                    "id": 48181,
                    "nodeType": "Block",
                    "src": "4866:64:31",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 48175,
                              "name": "EXECUTOR_ROLE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47997,
                              "src": "4891:13:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 48176,
                                "name": "executors",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48110,
                                "src": "4906:9:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 48178,
                              "indexExpression": {
                                "id": 48177,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48164,
                                "src": "4916:1:31",
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
                              "src": "4906:12:31",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 48174,
                            "name": "_grantRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47700,
                            "src": "4880:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (bytes32,address) returns (bool)"
                            }
                          },
                          "id": 48179,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4880:39:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 48180,
                        "nodeType": "ExpressionStatement",
                        "src": "4880:39:31"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48167,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48164,
                      "src": "4839:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 48168,
                        "name": "executors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48110,
                        "src": "4843:9:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 48169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4853:6:31",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "4843:16:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4839:20:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48182,
                  "initializationExpression": {
                    "assignments": [
                      48164
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 48164,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "4832:1:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 48182,
                        "src": "4824:9:31",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 48163,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4824:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 48166,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 48165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4836:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4824:13:31"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 48172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "4861:3:31",
                      "subExpression": {
                        "id": 48171,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48164,
                        "src": "4863:1:31",
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
                    "id": 48173,
                    "nodeType": "ExpressionStatement",
                    "src": "4861:3:31"
                  },
                  "nodeType": "ForStatement",
                  "src": "4819:111:31"
                },
                {
                  "expression": {
                    "id": 48185,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 48183,
                      "name": "_minDelay",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48014,
                      "src": "4940:9:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 48184,
                      "name": "minDelay",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48104,
                      "src": "4952:8:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4940:20:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 48186,
                  "nodeType": "ExpressionStatement",
                  "src": "4940:20:31"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 48188,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4990:1:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "id": 48189,
                        "name": "minDelay",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48104,
                        "src": "4993:8:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 48187,
                      "name": "MinDelayChange",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48101,
                      "src": "4975:14:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 48190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4975:27:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48191,
                  "nodeType": "EmitStatement",
                  "src": "4970:32:31"
                }
              ]
            },
            "documentation": {
              "id": 48102,
              "nodeType": "StructuredDocumentation",
              "src": "3484:759:31",
              "text": " @dev Initializes the contract with the following parameters:\n - `minDelay`: initial minimum delay in seconds for operations\n - `proposers`: accounts to be granted proposer and canceller roles\n - `executors`: accounts to be granted executor role\n - `admin`: optional account to be granted admin role; disable with zero address\n IMPORTANT: The optional admin can aid with initial configuration of roles after deployment\n without being subject to delay, but this role should be subsequently renounced in favor of\n administration through timelocked proposals. Previous versions of this contract would assign\n this admin to the deployer automatically and should be renounced as well."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 48113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48104,
                  "mutability": "mutable",
                  "name": "minDelay",
                  "nameLocation": "4268:8:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48193,
                  "src": "4260:16:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48103,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4260:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48107,
                  "mutability": "mutable",
                  "name": "proposers",
                  "nameLocation": "4295:9:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48193,
                  "src": "4278:26:31",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48105,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4278:7:31",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 48106,
                    "nodeType": "ArrayTypeName",
                    "src": "4278:9:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48110,
                  "mutability": "mutable",
                  "name": "executors",
                  "nameLocation": "4323:9:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48193,
                  "src": "4306:26:31",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48108,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4306:7:31",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 48109,
                    "nodeType": "ArrayTypeName",
                    "src": "4306:9:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48112,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "4342:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48193,
                  "src": "4334:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48111,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4334:7:31",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4259:89:31"
            },
            "returnParameters": {
              "id": 48114,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4349:0:31"
            },
            "scope": 48990,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 48216,
            "nodeType": "ModifierDefinition",
            "src": "5291:156:31",
            "nodes": [],
            "body": {
              "id": 48215,
              "nodeType": "Block",
              "src": "5333:114:31",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 48205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "5347:26:31",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 48199,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48196,
                          "src": "5356:4:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 48202,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5370:1:31",
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
                            "id": 48201,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5362:7:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 48200,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "5362:7:31",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 48203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5362:10:31",
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 48198,
                        "name": "hasRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47524,
                        "src": "5348:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address) view returns (bool)"
                        }
                      },
                      "id": 48204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5348:25:31",
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
                  "id": 48213,
                  "nodeType": "IfStatement",
                  "src": "5343:87:31",
                  "trueBody": {
                    "id": 48212,
                    "nodeType": "Block",
                    "src": "5375:55:31",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 48207,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48196,
                              "src": "5400:4:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 48208,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51316,
                                "src": "5406:10:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 48209,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5406:12:31",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 48206,
                            "name": "_checkRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              47537,
                              47558
                            ],
                            "referencedDeclaration": 47558,
                            "src": "5389:10:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$__$",
                              "typeString": "function (bytes32,address) view"
                            }
                          },
                          "id": 48210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5389:30:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48211,
                        "nodeType": "ExpressionStatement",
                        "src": "5389:30:31"
                      }
                    ]
                  }
                },
                {
                  "id": 48214,
                  "nodeType": "PlaceholderStatement",
                  "src": "5439:1:31"
                }
              ]
            },
            "documentation": {
              "id": 48194,
              "nodeType": "StructuredDocumentation",
              "src": "5015:271:31",
              "text": " @dev Modifier to make a function callable only by a certain role. In\n addition to checking the sender's role, `address(0)` 's role is also\n considered. Granting a role to `address(0)` is equivalent to enabling\n this role for everyone."
            },
            "name": "onlyRoleOrOpenRole",
            "nameLocation": "5300:18:31",
            "parameters": {
              "id": 48197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48196,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "5327:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48216,
                  "src": "5319:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48195,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5319:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5318:14:31"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 48221,
            "nodeType": "FunctionDefinition",
            "src": "5549:29:31",
            "nodes": [],
            "body": {
              "id": 48220,
              "nodeType": "Block",
              "src": "5576:2:31",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 48217,
              "nodeType": "StructuredDocumentation",
              "src": "5453:91:31",
              "text": " @dev Contract might receive/hold ETH as part of the maintenance process."
            },
            "implemented": true,
            "kind": "receive",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 48218,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5556:2:31"
            },
            "returnParameters": {
              "id": 48219,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5576:0:31"
            },
            "scope": 48990,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 48238,
            "nodeType": "FunctionDefinition",
            "src": "5645:195:31",
            "nodes": [],
            "body": {
              "id": 48237,
              "nodeType": "Block",
              "src": "5780:60:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48234,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48224,
                        "src": "5821:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "expression": {
                        "id": 48232,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "5797:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_TimelockController_$48990_$",
                          "typeString": "type(contract super TimelockController)"
                        }
                      },
                      "id": 48233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5803:17:31",
                      "memberName": "supportsInterface",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 50152,
                      "src": "5797:23:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                        "typeString": "function (bytes4) view returns (bool)"
                      }
                    },
                    "id": 48235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5797:36:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48231,
                  "id": 48236,
                  "nodeType": "Return",
                  "src": "5790:43:31"
                }
              ]
            },
            "baseFunctions": [
              47506,
              50152
            ],
            "documentation": {
              "id": 48222,
              "nodeType": "StructuredDocumentation",
              "src": "5584:56:31",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "5654:17:31",
            "overrides": {
              "id": 48228,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 48226,
                  "name": "AccessControl",
                  "nameLocations": [
                    "5735:13:31"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47739,
                  "src": "5735:13:31"
                },
                {
                  "id": 48227,
                  "name": "ERC1155Holder",
                  "nameLocations": [
                    "5750:13:31"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 50197,
                  "src": "5750:13:31"
                }
              ],
              "src": "5726:38:31"
            },
            "parameters": {
              "id": 48225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48224,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "5688:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48238,
                  "src": "5681:18:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 48223,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "5681:6:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5671:34:31"
            },
            "returnParameters": {
              "id": 48231,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48230,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48238,
                  "src": "5774:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48229,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5774:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5773:6:31"
            },
            "scope": 48990,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48254,
            "nodeType": "FunctionDefinition",
            "src": "5998:129:31",
            "nodes": [],
            "body": {
              "id": 48253,
              "nodeType": "Block",
              "src": "6058:69:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_OperationState_$48019",
                      "typeString": "enum TimelockController.OperationState"
                    },
                    "id": 48251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 48247,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48241,
                          "src": "6093:2:31",
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
                          }
                        ],
                        "id": 48246,
                        "name": "getOperationState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48370,
                        "src": "6075:17:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_enum$_OperationState_$48019_$",
                          "typeString": "function (bytes32) view returns (enum TimelockController.OperationState)"
                        }
                      },
                      "id": 48248,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6075:21:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_OperationState_$48019",
                        "typeString": "enum TimelockController.OperationState"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 48249,
                        "name": "OperationState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48019,
                        "src": "6100:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                          "typeString": "type(enum TimelockController.OperationState)"
                        }
                      },
                      "id": 48250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6115:5:31",
                      "memberName": "Unset",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 48015,
                      "src": "6100:20:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_OperationState_$48019",
                        "typeString": "enum TimelockController.OperationState"
                      }
                    },
                    "src": "6075:45:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48245,
                  "id": 48252,
                  "nodeType": "Return",
                  "src": "6068:52:31"
                }
              ]
            },
            "documentation": {
              "id": 48239,
              "nodeType": "StructuredDocumentation",
              "src": "5846:147:31",
              "text": " @dev Returns whether an id corresponds to a registered operation. This\n includes both Waiting, Ready, and Done operations."
            },
            "functionSelector": "31d50750",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isOperation",
            "nameLocation": "6007:11:31",
            "parameters": {
              "id": 48242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48241,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "6027:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48254,
                  "src": "6019:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48240,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6019:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6018:12:31"
            },
            "returnParameters": {
              "id": 48245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48244,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48254,
                  "src": "6052:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48243,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6052:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6051:6:31"
            },
            "scope": 48990,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 48280,
            "nodeType": "FunctionDefinition",
            "src": "6262:209:31",
            "nodes": [],
            "body": {
              "id": 48279,
              "nodeType": "Block",
              "src": "6329:142:31",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    48264
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48264,
                      "mutability": "mutable",
                      "name": "state",
                      "nameLocation": "6354:5:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48279,
                      "src": "6339:20:31",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_OperationState_$48019",
                        "typeString": "enum TimelockController.OperationState"
                      },
                      "typeName": {
                        "id": 48263,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 48262,
                          "name": "OperationState",
                          "nameLocations": [
                            "6339:14:31"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 48019,
                          "src": "6339:14:31"
                        },
                        "referencedDeclaration": 48019,
                        "src": "6339:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_OperationState_$48019",
                          "typeString": "enum TimelockController.OperationState"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48268,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 48266,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48257,
                        "src": "6380:2:31",
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
                        }
                      ],
                      "id": 48265,
                      "name": "getOperationState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48370,
                      "src": "6362:17:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_enum$_OperationState_$48019_$",
                        "typeString": "function (bytes32) view returns (enum TimelockController.OperationState)"
                      }
                    },
                    "id": 48267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6362:21:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_OperationState_$48019",
                      "typeString": "enum TimelockController.OperationState"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6339:44:31"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 48277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_enum$_OperationState_$48019",
                        "typeString": "enum TimelockController.OperationState"
                      },
                      "id": 48272,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 48269,
                        "name": "state",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48264,
                        "src": "6400:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_OperationState_$48019",
                          "typeString": "enum TimelockController.OperationState"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "id": 48270,
                          "name": "OperationState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48019,
                          "src": "6409:14:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                            "typeString": "type(enum TimelockController.OperationState)"
                          }
                        },
                        "id": 48271,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6424:7:31",
                        "memberName": "Waiting",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48016,
                        "src": "6409:22:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_OperationState_$48019",
                          "typeString": "enum TimelockController.OperationState"
                        }
                      },
                      "src": "6400:31:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_enum$_OperationState_$48019",
                        "typeString": "enum TimelockController.OperationState"
                      },
                      "id": 48276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 48273,
                        "name": "state",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48264,
                        "src": "6435:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_OperationState_$48019",
                          "typeString": "enum TimelockController.OperationState"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "id": 48274,
                          "name": "OperationState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48019,
                          "src": "6444:14:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                            "typeString": "type(enum TimelockController.OperationState)"
                          }
                        },
                        "id": 48275,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6459:5:31",
                        "memberName": "Ready",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 48017,
                        "src": "6444:20:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_OperationState_$48019",
                          "typeString": "enum TimelockController.OperationState"
                        }
                      },
                      "src": "6435:29:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6400:64:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48261,
                  "id": 48278,
                  "nodeType": "Return",
                  "src": "6393:71:31"
                }
              ]
            },
            "documentation": {
              "id": 48255,
              "nodeType": "StructuredDocumentation",
              "src": "6133:124:31",
              "text": " @dev Returns whether an operation is pending or not. Note that a \"pending\" operation may also be \"ready\"."
            },
            "functionSelector": "584b153e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isOperationPending",
            "nameLocation": "6271:18:31",
            "parameters": {
              "id": 48258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48257,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "6298:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48280,
                  "src": "6290:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48256,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6290:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6289:12:31"
            },
            "returnParameters": {
              "id": 48261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48260,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48280,
                  "src": "6323:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48259,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6323:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6322:6:31"
            },
            "scope": 48990,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 48296,
            "nodeType": "FunctionDefinition",
            "src": "6607:134:31",
            "nodes": [],
            "body": {
              "id": 48295,
              "nodeType": "Block",
              "src": "6672:69:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_OperationState_$48019",
                      "typeString": "enum TimelockController.OperationState"
                    },
                    "id": 48293,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 48289,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48283,
                          "src": "6707:2:31",
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
                          }
                        ],
                        "id": 48288,
                        "name": "getOperationState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48370,
                        "src": "6689:17:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_enum$_OperationState_$48019_$",
                          "typeString": "function (bytes32) view returns (enum TimelockController.OperationState)"
                        }
                      },
                      "id": 48290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6689:21:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_OperationState_$48019",
                        "typeString": "enum TimelockController.OperationState"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 48291,
                        "name": "OperationState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48019,
                        "src": "6714:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                          "typeString": "type(enum TimelockController.OperationState)"
                        }
                      },
                      "id": 48292,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6729:5:31",
                      "memberName": "Ready",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 48017,
                      "src": "6714:20:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_OperationState_$48019",
                        "typeString": "enum TimelockController.OperationState"
                      }
                    },
                    "src": "6689:45:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48287,
                  "id": 48294,
                  "nodeType": "Return",
                  "src": "6682:52:31"
                }
              ]
            },
            "documentation": {
              "id": 48281,
              "nodeType": "StructuredDocumentation",
              "src": "6477:125:31",
              "text": " @dev Returns whether an operation is ready for execution. Note that a \"ready\" operation is also \"pending\"."
            },
            "functionSelector": "13bc9f20",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isOperationReady",
            "nameLocation": "6616:16:31",
            "parameters": {
              "id": 48284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48283,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "6641:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48296,
                  "src": "6633:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48282,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6633:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6632:12:31"
            },
            "returnParameters": {
              "id": 48287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48286,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48296,
                  "src": "6666:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48285,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6666:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6665:6:31"
            },
            "scope": 48990,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 48312,
            "nodeType": "FunctionDefinition",
            "src": "6820:132:31",
            "nodes": [],
            "body": {
              "id": 48311,
              "nodeType": "Block",
              "src": "6884:68:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_OperationState_$48019",
                      "typeString": "enum TimelockController.OperationState"
                    },
                    "id": 48309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 48305,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48299,
                          "src": "6919:2:31",
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
                          }
                        ],
                        "id": 48304,
                        "name": "getOperationState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48370,
                        "src": "6901:17:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_enum$_OperationState_$48019_$",
                          "typeString": "function (bytes32) view returns (enum TimelockController.OperationState)"
                        }
                      },
                      "id": 48306,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6901:21:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_OperationState_$48019",
                        "typeString": "enum TimelockController.OperationState"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 48307,
                        "name": "OperationState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48019,
                        "src": "6926:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                          "typeString": "type(enum TimelockController.OperationState)"
                        }
                      },
                      "id": 48308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "6941:4:31",
                      "memberName": "Done",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 48018,
                      "src": "6926:19:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_OperationState_$48019",
                        "typeString": "enum TimelockController.OperationState"
                      }
                    },
                    "src": "6901:44:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 48303,
                  "id": 48310,
                  "nodeType": "Return",
                  "src": "6894:51:31"
                }
              ]
            },
            "documentation": {
              "id": 48297,
              "nodeType": "StructuredDocumentation",
              "src": "6747:68:31",
              "text": " @dev Returns whether an operation is done or not."
            },
            "functionSelector": "2ab0f529",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isOperationDone",
            "nameLocation": "6829:15:31",
            "parameters": {
              "id": 48300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48299,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "6853:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48312,
                  "src": "6845:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48298,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6845:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6844:12:31"
            },
            "returnParameters": {
              "id": 48303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48302,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48312,
                  "src": "6878:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48301,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6878:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6877:6:31"
            },
            "scope": 48990,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 48325,
            "nodeType": "FunctionDefinition",
            "src": "7100:111:31",
            "nodes": [],
            "body": {
              "id": 48324,
              "nodeType": "Block",
              "src": "7172:39:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 48320,
                      "name": "_timestamps",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48012,
                      "src": "7189:11:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                        "typeString": "mapping(bytes32 => uint256)"
                      }
                    },
                    "id": 48322,
                    "indexExpression": {
                      "id": 48321,
                      "name": "id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48315,
                      "src": "7201:2:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7189:15:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 48319,
                  "id": 48323,
                  "nodeType": "Return",
                  "src": "7182:22:31"
                }
              ]
            },
            "documentation": {
              "id": 48313,
              "nodeType": "StructuredDocumentation",
              "src": "6958:137:31",
              "text": " @dev Returns the timestamp at which an operation becomes ready (0 for\n unset operations, 1 for done operations)."
            },
            "functionSelector": "d45c4435",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTimestamp",
            "nameLocation": "7109:12:31",
            "parameters": {
              "id": 48316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48315,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "7130:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48325,
                  "src": "7122:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48314,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7122:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7121:12:31"
            },
            "returnParameters": {
              "id": 48319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48318,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48325,
                  "src": "7163:7:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48317,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7163:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7162:9:31"
            },
            "scope": 48990,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48370,
            "nodeType": "FunctionDefinition",
            "src": "7270:460:31",
            "nodes": [],
            "body": {
              "id": 48369,
              "nodeType": "Block",
              "src": "7354:376:31",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    48335
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48335,
                      "mutability": "mutable",
                      "name": "timestamp",
                      "nameLocation": "7372:9:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48369,
                      "src": "7364:17:31",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 48334,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7364:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48339,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 48337,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48328,
                        "src": "7397:2:31",
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
                        }
                      ],
                      "id": 48336,
                      "name": "getTimestamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48325,
                      "src": "7384:12:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view returns (uint256)"
                      }
                    },
                    "id": 48338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7384:16:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7364:36:31"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48340,
                      "name": "timestamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48335,
                      "src": "7414:9:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 48341,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7427:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7414:14:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 48349,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 48347,
                        "name": "timestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48335,
                        "src": "7492:9:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 48348,
                        "name": "_DONE_TIMESTAMP",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48008,
                        "src": "7505:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7492:28:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 48357,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 48354,
                          "name": "timestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48335,
                          "src": "7583:9:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "expression": {
                            "id": 48355,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "7595:5:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 48356,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7601:9:31",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "7595:15:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7583:27:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "id": 48365,
                        "nodeType": "Block",
                        "src": "7672:52:31",
                        "statements": [
                          {
                            "expression": {
                              "expression": {
                                "id": 48362,
                                "name": "OperationState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48019,
                                "src": "7693:14:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                                  "typeString": "type(enum TimelockController.OperationState)"
                                }
                              },
                              "id": 48363,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "7708:5:31",
                              "memberName": "Ready",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 48017,
                              "src": "7693:20:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_OperationState_$48019",
                                "typeString": "enum TimelockController.OperationState"
                              }
                            },
                            "functionReturnParameters": 48333,
                            "id": 48364,
                            "nodeType": "Return",
                            "src": "7686:27:31"
                          }
                        ]
                      },
                      "id": 48366,
                      "nodeType": "IfStatement",
                      "src": "7579:145:31",
                      "trueBody": {
                        "id": 48361,
                        "nodeType": "Block",
                        "src": "7612:54:31",
                        "statements": [
                          {
                            "expression": {
                              "expression": {
                                "id": 48358,
                                "name": "OperationState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48019,
                                "src": "7633:14:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                                  "typeString": "type(enum TimelockController.OperationState)"
                                }
                              },
                              "id": 48359,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "7648:7:31",
                              "memberName": "Waiting",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 48016,
                              "src": "7633:22:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_OperationState_$48019",
                                "typeString": "enum TimelockController.OperationState"
                              }
                            },
                            "functionReturnParameters": 48333,
                            "id": 48360,
                            "nodeType": "Return",
                            "src": "7626:29:31"
                          }
                        ]
                      }
                    },
                    "id": 48367,
                    "nodeType": "IfStatement",
                    "src": "7488:236:31",
                    "trueBody": {
                      "id": 48353,
                      "nodeType": "Block",
                      "src": "7522:51:31",
                      "statements": [
                        {
                          "expression": {
                            "expression": {
                              "id": 48350,
                              "name": "OperationState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48019,
                              "src": "7543:14:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                                "typeString": "type(enum TimelockController.OperationState)"
                              }
                            },
                            "id": 48351,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7558:4:31",
                            "memberName": "Done",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 48018,
                            "src": "7543:19:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_OperationState_$48019",
                              "typeString": "enum TimelockController.OperationState"
                            }
                          },
                          "functionReturnParameters": 48333,
                          "id": 48352,
                          "nodeType": "Return",
                          "src": "7536:26:31"
                        }
                      ]
                    }
                  },
                  "id": 48368,
                  "nodeType": "IfStatement",
                  "src": "7410:314:31",
                  "trueBody": {
                    "id": 48346,
                    "nodeType": "Block",
                    "src": "7430:52:31",
                    "statements": [
                      {
                        "expression": {
                          "expression": {
                            "id": 48343,
                            "name": "OperationState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48019,
                            "src": "7451:14:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                              "typeString": "type(enum TimelockController.OperationState)"
                            }
                          },
                          "id": 48344,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "7466:5:31",
                          "memberName": "Unset",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 48015,
                          "src": "7451:20:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_OperationState_$48019",
                            "typeString": "enum TimelockController.OperationState"
                          }
                        },
                        "functionReturnParameters": 48333,
                        "id": 48345,
                        "nodeType": "Return",
                        "src": "7444:27:31"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 48326,
              "nodeType": "StructuredDocumentation",
              "src": "7217:48:31",
              "text": " @dev Returns operation state."
            },
            "functionSelector": "7958004c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOperationState",
            "nameLocation": "7279:17:31",
            "parameters": {
              "id": 48329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48328,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "7305:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48370,
                  "src": "7297:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48327,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7297:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7296:12:31"
            },
            "returnParameters": {
              "id": 48333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48332,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48370,
                  "src": "7338:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_OperationState_$48019",
                    "typeString": "enum TimelockController.OperationState"
                  },
                  "typeName": {
                    "id": 48331,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48330,
                      "name": "OperationState",
                      "nameLocations": [
                        "7338:14:31"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48019,
                      "src": "7338:14:31"
                    },
                    "referencedDeclaration": 48019,
                    "src": "7338:14:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_OperationState_$48019",
                      "typeString": "enum TimelockController.OperationState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7337:16:31"
            },
            "scope": 48990,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48379,
            "nodeType": "FunctionDefinition",
            "src": "7927:94:31",
            "nodes": [],
            "body": {
              "id": 48378,
              "nodeType": "Block",
              "src": "7988:33:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 48376,
                    "name": "_minDelay",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 48014,
                    "src": "8005:9:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 48375,
                  "id": 48377,
                  "nodeType": "Return",
                  "src": "7998:16:31"
                }
              ]
            },
            "documentation": {
              "id": 48371,
              "nodeType": "StructuredDocumentation",
              "src": "7736:186:31",
              "text": " @dev Returns the minimum delay in seconds for an operation to become valid.\n This value can be changed by executing an operation that calls `updateDelay`."
            },
            "functionSelector": "f27a0c92",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getMinDelay",
            "nameLocation": "7936:11:31",
            "parameters": {
              "id": 48372,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7947:2:31"
            },
            "returnParameters": {
              "id": 48375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48374,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48379,
                  "src": "7979:7:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48373,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7979:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7978:9:31"
            },
            "scope": 48990,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48407,
            "nodeType": "FunctionDefinition",
            "src": "8134:279:31",
            "nodes": [],
            "body": {
              "id": 48406,
              "nodeType": "Block",
              "src": "8328:85:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 48398,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48382,
                            "src": "8366:6:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 48399,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48384,
                            "src": "8374:5:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 48400,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48386,
                            "src": "8381:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          },
                          {
                            "id": 48401,
                            "name": "predecessor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48388,
                            "src": "8387:11:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 48402,
                            "name": "salt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48390,
                            "src": "8400:4:31",
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
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
                          "expression": {
                            "id": 48396,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "8355:3:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 48397,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "8359:6:31",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "8355:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 48403,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8355:50:31",
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
                      "id": 48395,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "8345:9:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 48404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8345:61:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 48394,
                  "id": 48405,
                  "nodeType": "Return",
                  "src": "8338:68:31"
                }
              ]
            },
            "documentation": {
              "id": 48380,
              "nodeType": "StructuredDocumentation",
              "src": "8027:102:31",
              "text": " @dev Returns the identifier of an operation containing a single\n transaction."
            },
            "functionSelector": "8065657f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hashOperation",
            "nameLocation": "8143:13:31",
            "parameters": {
              "id": 48391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48382,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "8174:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48407,
                  "src": "8166:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48381,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8166:7:31",
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
                  "id": 48384,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8198:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48407,
                  "src": "8190:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48383,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8190:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48386,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8228:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48407,
                  "src": "8213:19:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 48385,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8213:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48388,
                  "mutability": "mutable",
                  "name": "predecessor",
                  "nameLocation": "8250:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48407,
                  "src": "8242:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48387,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8242:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48390,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "8279:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48407,
                  "src": "8271:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48389,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8271:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8156:133:31"
            },
            "returnParameters": {
              "id": 48394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48393,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48407,
                  "src": "8319:7:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48392,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8319:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8318:9:31"
            },
            "scope": 48990,
            "stateMutability": "pure",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48438,
            "nodeType": "FunctionDefinition",
            "src": "8529:320:31",
            "nodes": [],
            "body": {
              "id": 48437,
              "nodeType": "Block",
              "src": "8758:91:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 48429,
                            "name": "targets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48411,
                            "src": "8796:7:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                              "typeString": "address[] calldata"
                            }
                          },
                          {
                            "id": 48430,
                            "name": "values",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48414,
                            "src": "8805:6:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                              "typeString": "uint256[] calldata"
                            }
                          },
                          {
                            "id": 48431,
                            "name": "payloads",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48417,
                            "src": "8813:8:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                              "typeString": "bytes calldata[] calldata"
                            }
                          },
                          {
                            "id": 48432,
                            "name": "predecessor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48419,
                            "src": "8823:11:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 48433,
                            "name": "salt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48421,
                            "src": "8836:4:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                              "typeString": "address[] calldata"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                              "typeString": "uint256[] calldata"
                            },
                            {
                              "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                              "typeString": "bytes calldata[] calldata"
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
                          "expression": {
                            "id": 48427,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "8785:3:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 48428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "8789:6:31",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "8785:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 48434,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8785:56:31",
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
                      "id": 48426,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "8775:9:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 48435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8775:67:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 48425,
                  "id": 48436,
                  "nodeType": "Return",
                  "src": "8768:74:31"
                }
              ]
            },
            "documentation": {
              "id": 48408,
              "nodeType": "StructuredDocumentation",
              "src": "8419:105:31",
              "text": " @dev Returns the identifier of an operation containing a batch of\n transactions."
            },
            "functionSelector": "b1c5f427",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hashOperationBatch",
            "nameLocation": "8538:18:31",
            "parameters": {
              "id": 48422,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48411,
                  "mutability": "mutable",
                  "name": "targets",
                  "nameLocation": "8585:7:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48438,
                  "src": "8566:26:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48409,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "8566:7:31",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 48410,
                    "nodeType": "ArrayTypeName",
                    "src": "8566:9:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48414,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "8621:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48438,
                  "src": "8602:25:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48412,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8602:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 48413,
                    "nodeType": "ArrayTypeName",
                    "src": "8602:9:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48417,
                  "mutability": "mutable",
                  "name": "payloads",
                  "nameLocation": "8654:8:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48438,
                  "src": "8637:25:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48415,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "8637:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 48416,
                    "nodeType": "ArrayTypeName",
                    "src": "8637:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48419,
                  "mutability": "mutable",
                  "name": "predecessor",
                  "nameLocation": "8680:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48438,
                  "src": "8672:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48418,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8672:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48421,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "8709:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48438,
                  "src": "8701:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48420,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8701:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8556:163:31"
            },
            "returnParameters": {
              "id": 48425,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48424,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48438,
                  "src": "8749:7:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48423,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8749:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8748:9:31"
            },
            "scope": 48990,
            "stateMutability": "pure",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48496,
            "nodeType": "FunctionDefinition",
            "src": "9096:483:31",
            "nodes": [],
            "body": {
              "id": 48495,
              "nodeType": "Block",
              "src": "9309:270:31",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    48458
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48458,
                      "mutability": "mutable",
                      "name": "id",
                      "nameLocation": "9327:2:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48495,
                      "src": "9319:10:31",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 48457,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9319:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48466,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 48460,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48441,
                        "src": "9346:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 48461,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48443,
                        "src": "9354:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 48462,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48445,
                        "src": "9361:4:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "id": 48463,
                        "name": "predecessor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48447,
                        "src": "9367:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 48464,
                        "name": "salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48449,
                        "src": "9380:4:31",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
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
                      "id": 48459,
                      "name": "hashOperation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48407,
                      "src": "9332:13:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$_t_uint256_$_t_bytes_calldata_ptr_$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (address,uint256,bytes calldata,bytes32,bytes32) pure returns (bytes32)"
                      }
                    },
                    "id": 48465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9332:53:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9319:66:31"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48468,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48458,
                        "src": "9405:2:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 48469,
                        "name": "delay",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48451,
                        "src": "9409:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 48467,
                      "name": "_schedule",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48644,
                      "src": "9395:9:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256)"
                      }
                    },
                    "id": 48470,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9395:20:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48471,
                  "nodeType": "ExpressionStatement",
                  "src": "9395:20:31"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 48473,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48458,
                        "src": "9444:2:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 48474,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9448:1:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "id": 48475,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48441,
                        "src": "9451:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 48476,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48443,
                        "src": "9459:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 48477,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48445,
                        "src": "9466:4:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "id": 48478,
                        "name": "predecessor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48447,
                        "src": "9472:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 48479,
                        "name": "delay",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48451,
                        "src": "9485:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
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
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 48472,
                      "name": "CallScheduled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48069,
                      "src": "9430:13:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256,address,uint256,bytes memory,bytes32,uint256)"
                      }
                    },
                    "id": 48480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9430:61:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48481,
                  "nodeType": "EmitStatement",
                  "src": "9425:66:31"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 48487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48482,
                      "name": "salt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48449,
                      "src": "9505:4:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 48485,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9521:1:31",
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
                        "id": 48484,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9513:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes32_$",
                          "typeString": "type(bytes32)"
                        },
                        "typeName": {
                          "id": 48483,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "9513:7:31",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 48486,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9513:10:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "9505:18:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48494,
                  "nodeType": "IfStatement",
                  "src": "9501:72:31",
                  "trueBody": {
                    "id": 48493,
                    "nodeType": "Block",
                    "src": "9525:48:31",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 48489,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48458,
                              "src": "9553:2:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 48490,
                              "name": "salt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48449,
                              "src": "9557:4:31",
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
                            "id": 48488,
                            "name": "CallSalt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48089,
                            "src": "9544:8:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32,bytes32)"
                            }
                          },
                          "id": 48491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9544:18:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48492,
                        "nodeType": "EmitStatement",
                        "src": "9539:23:31"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 48439,
              "nodeType": "StructuredDocumentation",
              "src": "8855:236:31",
              "text": " @dev Schedule an operation containing a single transaction.\n Emits {CallSalt} if salt is nonzero, and {CallScheduled}.\n Requirements:\n - the caller must have the 'proposer' role."
            },
            "functionSelector": "01d5062a",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 48454,
                    "name": "PROPOSER_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 47992,
                    "src": "9294:13:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 48455,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 48453,
                  "name": "onlyRole",
                  "nameLocations": [
                    "9285:8:31"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47484,
                  "src": "9285:8:31"
                },
                "nodeType": "ModifierInvocation",
                "src": "9285:23:31"
              }
            ],
            "name": "schedule",
            "nameLocation": "9105:8:31",
            "parameters": {
              "id": 48452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48441,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "9131:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48496,
                  "src": "9123:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48440,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9123:7:31",
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
                  "id": 48443,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9155:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48496,
                  "src": "9147:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9147:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48445,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "9185:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48496,
                  "src": "9170:19:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 48444,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "9170:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48447,
                  "mutability": "mutable",
                  "name": "predecessor",
                  "nameLocation": "9207:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48496,
                  "src": "9199:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48446,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9199:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48449,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "9236:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48496,
                  "src": "9228:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48448,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9228:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48451,
                  "mutability": "mutable",
                  "name": "delay",
                  "nameLocation": "9258:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48496,
                  "src": "9250:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48450,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9250:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9113:156:31"
            },
            "returnParameters": {
              "id": 48456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9309:0:31"
            },
            "scope": 48990,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48598,
            "nodeType": "FunctionDefinition",
            "src": "9868:807:31",
            "nodes": [],
            "body": {
              "id": 48597,
              "nodeType": "Block",
              "src": "10116:559:31",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 48528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 48522,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 48518,
                          "name": "targets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48500,
                          "src": "10130:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                            "typeString": "address[] calldata"
                          }
                        },
                        "id": 48519,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10138:6:31",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "10130:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "expression": {
                          "id": 48520,
                          "name": "values",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48503,
                          "src": "10148:6:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        },
                        "id": 48521,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10155:6:31",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "10148:13:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "10130:31:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 48527,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 48523,
                          "name": "targets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48500,
                          "src": "10165:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                            "typeString": "address[] calldata"
                          }
                        },
                        "id": 48524,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10173:6:31",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "10165:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "expression": {
                          "id": 48525,
                          "name": "payloads",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48506,
                          "src": "10183:8:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                            "typeString": "bytes calldata[] calldata"
                          }
                        },
                        "id": 48526,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10192:6:31",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "10183:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "10165:33:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "10130:68:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48539,
                  "nodeType": "IfStatement",
                  "src": "10126:184:31",
                  "trueBody": {
                    "id": 48538,
                    "nodeType": "Block",
                    "src": "10200:110:31",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 48530,
                                "name": "targets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48500,
                                "src": "10252:7:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                  "typeString": "address[] calldata"
                                }
                              },
                              "id": 48531,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10260:6:31",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "10252:14:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 48532,
                                "name": "payloads",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48506,
                                "src": "10268:8:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                                  "typeString": "bytes calldata[] calldata"
                                }
                              },
                              "id": 48533,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10277:6:31",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "10268:15:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 48534,
                                "name": "values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48503,
                                "src": "10285:6:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 48535,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10292:6:31",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "10285:13:31",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 48529,
                            "name": "TimelockInvalidOperationLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48028,
                            "src": "10221:30:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256) pure"
                            }
                          },
                          "id": 48536,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10221:78:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48537,
                        "nodeType": "RevertStatement",
                        "src": "10214:85:31"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    48541
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48541,
                      "mutability": "mutable",
                      "name": "id",
                      "nameLocation": "10328:2:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48597,
                      "src": "10320:10:31",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 48540,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "10320:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48549,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 48543,
                        "name": "targets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48500,
                        "src": "10352:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                          "typeString": "address[] calldata"
                        }
                      },
                      {
                        "id": 48544,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48503,
                        "src": "10361:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      },
                      {
                        "id": 48545,
                        "name": "payloads",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48506,
                        "src": "10369:8:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                          "typeString": "bytes calldata[] calldata"
                        }
                      },
                      {
                        "id": 48546,
                        "name": "predecessor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48508,
                        "src": "10379:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 48547,
                        "name": "salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48510,
                        "src": "10392:4:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                          "typeString": "address[] calldata"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        },
                        {
                          "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                          "typeString": "bytes calldata[] calldata"
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
                      "id": 48542,
                      "name": "hashOperationBatch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48438,
                      "src": "10333:18:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_calldata_ptr_$_t_array$_t_uint256_$dyn_calldata_ptr_$_t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr_$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (address[] calldata,uint256[] calldata,bytes calldata[] calldata,bytes32,bytes32) pure returns (bytes32)"
                      }
                    },
                    "id": 48548,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10333:64:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10320:77:31"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48551,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48541,
                        "src": "10417:2:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 48552,
                        "name": "delay",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48512,
                        "src": "10421:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 48550,
                      "name": "_schedule",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48644,
                      "src": "10407:9:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256)"
                      }
                    },
                    "id": 48553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10407:20:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48554,
                  "nodeType": "ExpressionStatement",
                  "src": "10407:20:31"
                },
                {
                  "body": {
                    "id": 48582,
                    "nodeType": "Block",
                    "src": "10482:106:31",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 48567,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48541,
                              "src": "10515:2:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 48568,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48556,
                              "src": "10519:1:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 48569,
                                "name": "targets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48500,
                                "src": "10522:7:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                  "typeString": "address[] calldata"
                                }
                              },
                              "id": 48571,
                              "indexExpression": {
                                "id": 48570,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48556,
                                "src": "10530:1:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "10522:10:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 48572,
                                "name": "values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48503,
                                "src": "10534:6:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 48574,
                              "indexExpression": {
                                "id": 48573,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48556,
                                "src": "10541:1:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "10534:9:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "baseExpression": {
                                "id": 48575,
                                "name": "payloads",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48506,
                                "src": "10545:8:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                                  "typeString": "bytes calldata[] calldata"
                                }
                              },
                              "id": 48577,
                              "indexExpression": {
                                "id": 48576,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48556,
                                "src": "10554:1:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "10545:11:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_calldata_ptr",
                                "typeString": "bytes calldata"
                              }
                            },
                            {
                              "id": 48578,
                              "name": "predecessor",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48508,
                              "src": "10558:11:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 48579,
                              "name": "delay",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48512,
                              "src": "10571:5:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                                "typeIdentifier": "t_bytes_calldata_ptr",
                                "typeString": "bytes calldata"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 48566,
                            "name": "CallScheduled",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48069,
                            "src": "10501:13:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes32_$_t_uint256_$returns$__$",
                              "typeString": "function (bytes32,uint256,address,uint256,bytes memory,bytes32,uint256)"
                            }
                          },
                          "id": 48580,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10501:76:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48581,
                        "nodeType": "EmitStatement",
                        "src": "10496:81:31"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48559,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48556,
                      "src": "10457:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 48560,
                        "name": "targets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48500,
                        "src": "10461:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                          "typeString": "address[] calldata"
                        }
                      },
                      "id": 48561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10469:6:31",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "10461:14:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10457:18:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48583,
                  "initializationExpression": {
                    "assignments": [
                      48556
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 48556,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "10450:1:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 48583,
                        "src": "10442:9:31",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 48555,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "10442:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 48558,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 48557,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10454:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "10442:13:31"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 48564,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "10477:3:31",
                      "subExpression": {
                        "id": 48563,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48556,
                        "src": "10479:1:31",
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
                    "id": 48565,
                    "nodeType": "ExpressionStatement",
                    "src": "10477:3:31"
                  },
                  "nodeType": "ForStatement",
                  "src": "10437:151:31"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 48589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48584,
                      "name": "salt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48510,
                      "src": "10601:4:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 48587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10617:1:31",
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
                        "id": 48586,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10609:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes32_$",
                          "typeString": "type(bytes32)"
                        },
                        "typeName": {
                          "id": 48585,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "10609:7:31",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 48588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10609:10:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "10601:18:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48596,
                  "nodeType": "IfStatement",
                  "src": "10597:72:31",
                  "trueBody": {
                    "id": 48595,
                    "nodeType": "Block",
                    "src": "10621:48:31",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 48591,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48541,
                              "src": "10649:2:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 48592,
                              "name": "salt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48510,
                              "src": "10653:4:31",
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
                            "id": 48590,
                            "name": "CallSalt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48089,
                            "src": "10640:8:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32,bytes32)"
                            }
                          },
                          "id": 48593,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10640:18:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48594,
                        "nodeType": "EmitStatement",
                        "src": "10635:23:31"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 48497,
              "nodeType": "StructuredDocumentation",
              "src": "9585:278:31",
              "text": " @dev Schedule an operation containing a batch of transactions.\n Emits {CallSalt} if salt is nonzero, and one {CallScheduled} event per transaction in the batch.\n Requirements:\n - the caller must have the 'proposer' role."
            },
            "functionSelector": "8f2a0bb0",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 48515,
                    "name": "PROPOSER_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 47992,
                    "src": "10101:13:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 48516,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 48514,
                  "name": "onlyRole",
                  "nameLocations": [
                    "10092:8:31"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47484,
                  "src": "10092:8:31"
                },
                "nodeType": "ModifierInvocation",
                "src": "10092:23:31"
              }
            ],
            "name": "scheduleBatch",
            "nameLocation": "9877:13:31",
            "parameters": {
              "id": 48513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48500,
                  "mutability": "mutable",
                  "name": "targets",
                  "nameLocation": "9919:7:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48598,
                  "src": "9900:26:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48498,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "9900:7:31",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 48499,
                    "nodeType": "ArrayTypeName",
                    "src": "9900:9:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48503,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "9955:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48598,
                  "src": "9936:25:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48501,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "9936:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 48502,
                    "nodeType": "ArrayTypeName",
                    "src": "9936:9:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48506,
                  "mutability": "mutable",
                  "name": "payloads",
                  "nameLocation": "9988:8:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48598,
                  "src": "9971:25:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48504,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "9971:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 48505,
                    "nodeType": "ArrayTypeName",
                    "src": "9971:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48508,
                  "mutability": "mutable",
                  "name": "predecessor",
                  "nameLocation": "10014:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48598,
                  "src": "10006:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48507,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10006:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48510,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "10043:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48598,
                  "src": "10035:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48509,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10035:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48512,
                  "mutability": "mutable",
                  "name": "delay",
                  "nameLocation": "10065:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48598,
                  "src": "10057:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48511,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10057:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9890:186:31"
            },
            "returnParameters": {
              "id": 48517,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10116:0:31"
            },
            "scope": 48990,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48644,
            "nodeType": "FunctionDefinition",
            "src": "10776:399:31",
            "nodes": [],
            "body": {
              "id": 48643,
              "nodeType": "Block",
              "src": "10830:345:31",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "arguments": [
                      {
                        "id": 48607,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48601,
                        "src": "10856:2:31",
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
                        }
                      ],
                      "id": 48606,
                      "name": "isOperation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48254,
                      "src": "10844:11:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (bytes32) view returns (bool)"
                      }
                    },
                    "id": 48608,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10844:15:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48618,
                  "nodeType": "IfStatement",
                  "src": "10840:131:31",
                  "trueBody": {
                    "id": 48617,
                    "nodeType": "Block",
                    "src": "10861:110:31",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 48610,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48601,
                              "src": "10915:2:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 48612,
                                    "name": "OperationState",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 48019,
                                    "src": "10938:14:31",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                                      "typeString": "type(enum TimelockController.OperationState)"
                                    }
                                  },
                                  "id": 48613,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "10953:5:31",
                                  "memberName": "Unset",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 48015,
                                  "src": "10938:20:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_OperationState_$48019",
                                    "typeString": "enum TimelockController.OperationState"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_OperationState_$48019",
                                    "typeString": "enum TimelockController.OperationState"
                                  }
                                ],
                                "id": 48611,
                                "name": "_encodeStateBitmap",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48989,
                                "src": "10919:18:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_enum$_OperationState_$48019_$returns$_t_bytes32_$",
                                  "typeString": "function (enum TimelockController.OperationState) pure returns (bytes32)"
                                }
                              },
                              "id": 48614,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10919:40:31",
                              "tryCall": false,
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
                            "id": 48609,
                            "name": "TimelockUnexpectedOperationState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48042,
                            "src": "10882:32:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_bytes32_$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32,bytes32) pure"
                            }
                          },
                          "id": 48615,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10882:78:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48616,
                        "nodeType": "RevertStatement",
                        "src": "10875:85:31"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    48620
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48620,
                      "mutability": "mutable",
                      "name": "minDelay",
                      "nameLocation": "10988:8:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48643,
                      "src": "10980:16:31",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 48619,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10980:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48623,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 48621,
                      "name": "getMinDelay",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48379,
                      "src": "10999:11:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 48622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10999:13:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10980:32:31"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48624,
                      "name": "delay",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48603,
                      "src": "11026:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 48625,
                      "name": "minDelay",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48620,
                      "src": "11034:8:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11026:16:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48633,
                  "nodeType": "IfStatement",
                  "src": "11022:96:31",
                  "trueBody": {
                    "id": 48632,
                    "nodeType": "Block",
                    "src": "11044:74:31",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 48628,
                              "name": "delay",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48603,
                              "src": "11091:5:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 48629,
                              "name": "minDelay",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48620,
                              "src": "11098:8:31",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 48627,
                            "name": "TimelockInsufficientDelay",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48035,
                            "src": "11065:25:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256) pure"
                            }
                          },
                          "id": 48630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11065:42:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48631,
                        "nodeType": "RevertStatement",
                        "src": "11058:49:31"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 48641,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 48634,
                        "name": "_timestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48012,
                        "src": "11127:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 48636,
                      "indexExpression": {
                        "id": 48635,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48601,
                        "src": "11139:2:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "11127:15:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 48640,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 48637,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "11145:5:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 48638,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11151:9:31",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "11145:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 48639,
                        "name": "delay",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48603,
                        "src": "11163:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "11145:23:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11127:41:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 48642,
                  "nodeType": "ExpressionStatement",
                  "src": "11127:41:31"
                }
              ]
            },
            "documentation": {
              "id": 48599,
              "nodeType": "StructuredDocumentation",
              "src": "10681:90:31",
              "text": " @dev Schedule an operation that is to become valid after a given delay."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_schedule",
            "nameLocation": "10785:9:31",
            "parameters": {
              "id": 48604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48601,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "10803:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48644,
                  "src": "10795:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48600,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "10795:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48603,
                  "mutability": "mutable",
                  "name": "delay",
                  "nameLocation": "10815:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48644,
                  "src": "10807:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48602,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10807:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10794:27:31"
            },
            "returnParameters": {
              "id": 48605,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10830:0:31"
            },
            "scope": 48990,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 48682,
            "nodeType": "FunctionDefinition",
            "src": "11317:375:31",
            "nodes": [],
            "body": {
              "id": 48681,
              "nodeType": "Block",
              "src": "11385:307:31",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 48656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11399:23:31",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 48654,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48647,
                          "src": "11419:2:31",
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
                          }
                        ],
                        "id": 48653,
                        "name": "isOperationPending",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48280,
                        "src": "11400:18:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (bytes32) view returns (bool)"
                        }
                      },
                      "id": 48655,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11400:22:31",
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
                  "id": 48671,
                  "nodeType": "IfStatement",
                  "src": "11395:230:31",
                  "trueBody": {
                    "id": 48670,
                    "nodeType": "Block",
                    "src": "11424:201:31",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 48658,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48647,
                              "src": "11495:2:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              "id": 48667,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "expression": {
                                      "id": 48660,
                                      "name": "OperationState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 48019,
                                      "src": "11534:14:31",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                                        "typeString": "type(enum TimelockController.OperationState)"
                                      }
                                    },
                                    "id": 48661,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "11549:7:31",
                                    "memberName": "Waiting",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 48016,
                                    "src": "11534:22:31",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_OperationState_$48019",
                                      "typeString": "enum TimelockController.OperationState"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_enum$_OperationState_$48019",
                                      "typeString": "enum TimelockController.OperationState"
                                    }
                                  ],
                                  "id": 48659,
                                  "name": "_encodeStateBitmap",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 48989,
                                  "src": "11515:18:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_enum$_OperationState_$48019_$returns$_t_bytes32_$",
                                    "typeString": "function (enum TimelockController.OperationState) pure returns (bytes32)"
                                  }
                                },
                                "id": 48662,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11515:42:31",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "|",
                              "rightExpression": {
                                "arguments": [
                                  {
                                    "expression": {
                                      "id": 48664,
                                      "name": "OperationState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 48019,
                                      "src": "11579:14:31",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                                        "typeString": "type(enum TimelockController.OperationState)"
                                      }
                                    },
                                    "id": 48665,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "11594:5:31",
                                    "memberName": "Ready",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 48017,
                                    "src": "11579:20:31",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_enum$_OperationState_$48019",
                                      "typeString": "enum TimelockController.OperationState"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_enum$_OperationState_$48019",
                                      "typeString": "enum TimelockController.OperationState"
                                    }
                                  ],
                                  "id": 48663,
                                  "name": "_encodeStateBitmap",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 48989,
                                  "src": "11560:18:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_enum$_OperationState_$48019_$returns$_t_bytes32_$",
                                    "typeString": "function (enum TimelockController.OperationState) pure returns (bytes32)"
                                  }
                                },
                                "id": 48666,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11560:40:31",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "src": "11515:85:31",
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
                            "id": 48657,
                            "name": "TimelockUnexpectedOperationState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48042,
                            "src": "11445:32:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_bytes32_$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32,bytes32) pure"
                            }
                          },
                          "id": 48668,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11445:169:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48669,
                        "nodeType": "RevertStatement",
                        "src": "11438:176:31"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 48675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "11634:22:31",
                    "subExpression": {
                      "baseExpression": {
                        "id": 48672,
                        "name": "_timestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48012,
                        "src": "11641:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 48674,
                      "indexExpression": {
                        "id": 48673,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48647,
                        "src": "11653:2:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "11641:15:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48676,
                  "nodeType": "ExpressionStatement",
                  "src": "11634:22:31"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 48678,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48647,
                        "src": "11682:2:31",
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
                        }
                      ],
                      "id": 48677,
                      "name": "Cancelled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48094,
                      "src": "11672:9:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 48679,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11672:13:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48680,
                  "nodeType": "EmitStatement",
                  "src": "11667:18:31"
                }
              ]
            },
            "documentation": {
              "id": 48645,
              "nodeType": "StructuredDocumentation",
              "src": "11181:131:31",
              "text": " @dev Cancel an operation.\n Requirements:\n - the caller must have the 'canceller' role."
            },
            "functionSelector": "c4d252f5",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 48650,
                    "name": "CANCELLER_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 48002,
                    "src": "11369:14:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 48651,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 48649,
                  "name": "onlyRole",
                  "nameLocations": [
                    "11360:8:31"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47484,
                  "src": "11360:8:31"
                },
                "nodeType": "ModifierInvocation",
                "src": "11360:24:31"
              }
            ],
            "name": "cancel",
            "nameLocation": "11326:6:31",
            "parameters": {
              "id": 48648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48647,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "11341:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48682,
                  "src": "11333:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48646,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11333:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11332:12:31"
            },
            "returnParameters": {
              "id": 48652,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11385:0:31"
            },
            "scope": 48990,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48733,
            "nodeType": "FunctionDefinition",
            "src": "12166:459:31",
            "nodes": [],
            "body": {
              "id": 48732,
              "nodeType": "Block",
              "src": "12376:249:31",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    48700
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48700,
                      "mutability": "mutable",
                      "name": "id",
                      "nameLocation": "12394:2:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48732,
                      "src": "12386:10:31",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 48699,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "12386:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48708,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 48702,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48685,
                        "src": "12413:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 48703,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48687,
                        "src": "12421:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 48704,
                        "name": "payload",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48689,
                        "src": "12428:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      {
                        "id": 48705,
                        "name": "predecessor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48691,
                        "src": "12437:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 48706,
                        "name": "salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48693,
                        "src": "12450:4:31",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
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
                      "id": 48701,
                      "name": "hashOperation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48407,
                      "src": "12399:13:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_address_$_t_uint256_$_t_bytes_calldata_ptr_$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (address,uint256,bytes calldata,bytes32,bytes32) pure returns (bytes32)"
                      }
                    },
                    "id": 48707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12399:56:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12386:69:31"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48710,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48700,
                        "src": "12478:2:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 48711,
                        "name": "predecessor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48691,
                        "src": "12482:11:31",
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
                      "id": 48709,
                      "name": "_beforeCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48909,
                      "src": "12466:11:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32,bytes32) view"
                      }
                    },
                    "id": 48712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12466:28:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48713,
                  "nodeType": "ExpressionStatement",
                  "src": "12466:28:31"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48715,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48685,
                        "src": "12513:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 48716,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48687,
                        "src": "12521:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 48717,
                        "name": "payload",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48689,
                        "src": "12528:7:31",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "id": 48714,
                      "name": "_execute",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48869,
                      "src": "12504:8:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_calldata_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes calldata)"
                      }
                    },
                    "id": 48718,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12504:32:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48719,
                  "nodeType": "ExpressionStatement",
                  "src": "12504:32:31"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 48721,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48700,
                        "src": "12564:2:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 48722,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12568:1:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "id": 48723,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48685,
                        "src": "12571:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 48724,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48687,
                        "src": "12579:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 48725,
                        "name": "payload",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48689,
                        "src": "12586:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
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
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
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
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "id": 48720,
                      "name": "CallExecuted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48082,
                      "src": "12551:12:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes32,uint256,address,uint256,bytes memory)"
                      }
                    },
                    "id": 48726,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12551:43:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48727,
                  "nodeType": "EmitStatement",
                  "src": "12546:48:31"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48729,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48700,
                        "src": "12615:2:31",
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
                        }
                      ],
                      "id": 48728,
                      "name": "_afterCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48936,
                      "src": "12604:10:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 48730,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12604:14:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48731,
                  "nodeType": "ExpressionStatement",
                  "src": "12604:14:31"
                }
              ]
            },
            "documentation": {
              "id": 48683,
              "nodeType": "StructuredDocumentation",
              "src": "11698:215:31",
              "text": " @dev Execute an (ready) operation containing a single transaction.\n Emits a {CallExecuted} event.\n Requirements:\n - the caller must have the 'executor' role."
            },
            "functionSelector": "134008d3",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 48696,
                    "name": "EXECUTOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 47997,
                    "src": "12361:13:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 48697,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 48695,
                  "name": "onlyRoleOrOpenRole",
                  "nameLocations": [
                    "12342:18:31"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 48216,
                  "src": "12342:18:31"
                },
                "nodeType": "ModifierInvocation",
                "src": "12342:33:31"
              }
            ],
            "name": "execute",
            "nameLocation": "12175:7:31",
            "parameters": {
              "id": 48694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48685,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "12200:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48733,
                  "src": "12192:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48684,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12192:7:31",
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
                  "id": 48687,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12224:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48733,
                  "src": "12216:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12216:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48689,
                  "mutability": "mutable",
                  "name": "payload",
                  "nameLocation": "12254:7:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48733,
                  "src": "12239:22:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 48688,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12239:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48691,
                  "mutability": "mutable",
                  "name": "predecessor",
                  "nameLocation": "12279:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48733,
                  "src": "12271:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48690,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12271:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48693,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "12308:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48733,
                  "src": "12300:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48692,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12300:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12182:136:31"
            },
            "returnParameters": {
              "id": 48698,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12376:0:31"
            },
            "scope": 48990,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48840,
            "nodeType": "FunctionDefinition",
            "src": "13133:896:31",
            "nodes": [],
            "body": {
              "id": 48839,
              "nodeType": "Block",
              "src": "13375:654:31",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 48763,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 48757,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 48753,
                          "name": "targets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48737,
                          "src": "13389:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                            "typeString": "address[] calldata"
                          }
                        },
                        "id": 48754,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13397:6:31",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "13389:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "expression": {
                          "id": 48755,
                          "name": "values",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48740,
                          "src": "13407:6:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        },
                        "id": 48756,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13414:6:31",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "13407:13:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "13389:31:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 48762,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 48758,
                          "name": "targets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48737,
                          "src": "13424:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                            "typeString": "address[] calldata"
                          }
                        },
                        "id": 48759,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13432:6:31",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "13424:14:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "expression": {
                          "id": 48760,
                          "name": "payloads",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48743,
                          "src": "13442:8:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                            "typeString": "bytes calldata[] calldata"
                          }
                        },
                        "id": 48761,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13451:6:31",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "13442:15:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "13424:33:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13389:68:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48774,
                  "nodeType": "IfStatement",
                  "src": "13385:184:31",
                  "trueBody": {
                    "id": 48773,
                    "nodeType": "Block",
                    "src": "13459:110:31",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 48765,
                                "name": "targets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48737,
                                "src": "13511:7:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                  "typeString": "address[] calldata"
                                }
                              },
                              "id": 48766,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13519:6:31",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "13511:14:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 48767,
                                "name": "payloads",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48743,
                                "src": "13527:8:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                                  "typeString": "bytes calldata[] calldata"
                                }
                              },
                              "id": 48768,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13536:6:31",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "13527:15:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 48769,
                                "name": "values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48740,
                                "src": "13544:6:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              "id": 48770,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13551:6:31",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "13544:13:31",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 48764,
                            "name": "TimelockInvalidOperationLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48028,
                            "src": "13480:30:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256) pure"
                            }
                          },
                          "id": 48771,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13480:78:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48772,
                        "nodeType": "RevertStatement",
                        "src": "13473:85:31"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    48776
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48776,
                      "mutability": "mutable",
                      "name": "id",
                      "nameLocation": "13587:2:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48839,
                      "src": "13579:10:31",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 48775,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "13579:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48784,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 48778,
                        "name": "targets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48737,
                        "src": "13611:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                          "typeString": "address[] calldata"
                        }
                      },
                      {
                        "id": 48779,
                        "name": "values",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48740,
                        "src": "13620:6:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      },
                      {
                        "id": 48780,
                        "name": "payloads",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48743,
                        "src": "13628:8:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                          "typeString": "bytes calldata[] calldata"
                        }
                      },
                      {
                        "id": 48781,
                        "name": "predecessor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48745,
                        "src": "13638:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 48782,
                        "name": "salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48747,
                        "src": "13651:4:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                          "typeString": "address[] calldata"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        },
                        {
                          "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                          "typeString": "bytes calldata[] calldata"
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
                      "id": 48777,
                      "name": "hashOperationBatch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48438,
                      "src": "13592:18:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_calldata_ptr_$_t_array$_t_uint256_$dyn_calldata_ptr_$_t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr_$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (address[] calldata,uint256[] calldata,bytes calldata[] calldata,bytes32,bytes32) pure returns (bytes32)"
                      }
                    },
                    "id": 48783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13592:64:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13579:77:31"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48786,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48776,
                        "src": "13679:2:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 48787,
                        "name": "predecessor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48745,
                        "src": "13683:11:31",
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
                      "id": 48785,
                      "name": "_beforeCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48909,
                      "src": "13667:11:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32,bytes32) view"
                      }
                    },
                    "id": 48788,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13667:28:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48789,
                  "nodeType": "ExpressionStatement",
                  "src": "13667:28:31"
                },
                {
                  "body": {
                    "id": 48833,
                    "nodeType": "Block",
                    "src": "13750:249:31",
                    "statements": [
                      {
                        "assignments": [
                          48802
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 48802,
                            "mutability": "mutable",
                            "name": "target",
                            "nameLocation": "13772:6:31",
                            "nodeType": "VariableDeclaration",
                            "scope": 48833,
                            "src": "13764:14:31",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 48801,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "13764:7:31",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 48806,
                        "initialValue": {
                          "baseExpression": {
                            "id": 48803,
                            "name": "targets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48737,
                            "src": "13781:7:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                              "typeString": "address[] calldata"
                            }
                          },
                          "id": 48805,
                          "indexExpression": {
                            "id": 48804,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48791,
                            "src": "13789:1:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "13781:10:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "13764:27:31"
                      },
                      {
                        "assignments": [
                          48808
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 48808,
                            "mutability": "mutable",
                            "name": "value",
                            "nameLocation": "13813:5:31",
                            "nodeType": "VariableDeclaration",
                            "scope": 48833,
                            "src": "13805:13:31",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 48807,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "13805:7:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 48812,
                        "initialValue": {
                          "baseExpression": {
                            "id": 48809,
                            "name": "values",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48740,
                            "src": "13821:6:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                              "typeString": "uint256[] calldata"
                            }
                          },
                          "id": 48811,
                          "indexExpression": {
                            "id": 48810,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48791,
                            "src": "13828:1:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "13821:9:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "13805:25:31"
                      },
                      {
                        "assignments": [
                          48814
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 48814,
                            "mutability": "mutable",
                            "name": "payload",
                            "nameLocation": "13859:7:31",
                            "nodeType": "VariableDeclaration",
                            "scope": 48833,
                            "src": "13844:22:31",
                            "stateVariable": false,
                            "storageLocation": "calldata",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes"
                            },
                            "typeName": {
                              "id": 48813,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "13844:5:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_storage_ptr",
                                "typeString": "bytes"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 48818,
                        "initialValue": {
                          "baseExpression": {
                            "id": 48815,
                            "name": "payloads",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48743,
                            "src": "13869:8:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                              "typeString": "bytes calldata[] calldata"
                            }
                          },
                          "id": 48817,
                          "indexExpression": {
                            "id": 48816,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48791,
                            "src": "13878:1:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "13869:11:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "13844:36:31"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 48820,
                              "name": "target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48802,
                              "src": "13903:6:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 48821,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48808,
                              "src": "13911:5:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 48822,
                              "name": "payload",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48814,
                              "src": "13918:7:31",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_calldata_ptr",
                                "typeString": "bytes calldata"
                              }
                            ],
                            "id": 48819,
                            "name": "_execute",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48869,
                            "src": "13894:8:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_calldata_ptr_$returns$__$",
                              "typeString": "function (address,uint256,bytes calldata)"
                            }
                          },
                          "id": 48823,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13894:32:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48824,
                        "nodeType": "ExpressionStatement",
                        "src": "13894:32:31"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 48826,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48776,
                              "src": "13958:2:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 48827,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48791,
                              "src": "13962:1:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 48828,
                              "name": "target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48802,
                              "src": "13965:6:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 48829,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48808,
                              "src": "13973:5:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 48830,
                              "name": "payload",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48814,
                              "src": "13980:7:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_calldata_ptr",
                                "typeString": "bytes calldata"
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                                "typeIdentifier": "t_bytes_calldata_ptr",
                                "typeString": "bytes calldata"
                              }
                            ],
                            "id": 48825,
                            "name": "CallExecuted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48082,
                            "src": "13945:12:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                              "typeString": "function (bytes32,uint256,address,uint256,bytes memory)"
                            }
                          },
                          "id": 48831,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13945:43:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48832,
                        "nodeType": "EmitStatement",
                        "src": "13940:48:31"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 48797,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48794,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48791,
                      "src": "13725:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 48795,
                        "name": "targets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48737,
                        "src": "13729:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                          "typeString": "address[] calldata"
                        }
                      },
                      "id": 48796,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "13737:6:31",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "13729:14:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "13725:18:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48834,
                  "initializationExpression": {
                    "assignments": [
                      48791
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 48791,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "13718:1:31",
                        "nodeType": "VariableDeclaration",
                        "scope": 48834,
                        "src": "13710:9:31",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 48790,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13710:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 48793,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 48792,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "13722:1:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "13710:13:31"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 48799,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "13745:3:31",
                      "subExpression": {
                        "id": 48798,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48791,
                        "src": "13747:1:31",
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
                    "id": 48800,
                    "nodeType": "ExpressionStatement",
                    "src": "13745:3:31"
                  },
                  "nodeType": "ForStatement",
                  "src": "13705:294:31"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48836,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48776,
                        "src": "14019:2:31",
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
                        }
                      ],
                      "id": 48835,
                      "name": "_afterCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48936,
                      "src": "14008:10:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 48837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14008:14:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48838,
                  "nodeType": "ExpressionStatement",
                  "src": "14008:14:31"
                }
              ]
            },
            "documentation": {
              "id": 48734,
              "nodeType": "StructuredDocumentation",
              "src": "12631:249:31",
              "text": " @dev Execute an (ready) operation containing a batch of transactions.\n Emits one {CallExecuted} event per transaction in the batch.\n Requirements:\n - the caller must have the 'executor' role."
            },
            "functionSelector": "e38335e5",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 48750,
                    "name": "EXECUTOR_ROLE",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 47997,
                    "src": "13360:13:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 48751,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 48749,
                  "name": "onlyRoleOrOpenRole",
                  "nameLocations": [
                    "13341:18:31"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 48216,
                  "src": "13341:18:31"
                },
                "nodeType": "ModifierInvocation",
                "src": "13341:33:31"
              }
            ],
            "name": "executeBatch",
            "nameLocation": "13142:12:31",
            "parameters": {
              "id": 48748,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48737,
                  "mutability": "mutable",
                  "name": "targets",
                  "nameLocation": "13183:7:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48840,
                  "src": "13164:26:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48735,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "13164:7:31",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 48736,
                    "nodeType": "ArrayTypeName",
                    "src": "13164:9:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48740,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "13219:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48840,
                  "src": "13200:25:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48738,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "13200:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 48739,
                    "nodeType": "ArrayTypeName",
                    "src": "13200:9:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48743,
                  "mutability": "mutable",
                  "name": "payloads",
                  "nameLocation": "13252:8:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48840,
                  "src": "13235:25:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 48741,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "13235:5:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 48742,
                    "nodeType": "ArrayTypeName",
                    "src": "13235:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48745,
                  "mutability": "mutable",
                  "name": "predecessor",
                  "nameLocation": "13278:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48840,
                  "src": "13270:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48744,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13270:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48747,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "13307:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48840,
                  "src": "13299:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48746,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13299:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13154:163:31"
            },
            "returnParameters": {
              "id": 48752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13375:0:31"
            },
            "scope": 48990,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 48869,
            "nodeType": "FunctionDefinition",
            "src": "14092:232:31",
            "nodes": [],
            "body": {
              "id": 48868,
              "nodeType": "Block",
              "src": "14179:145:31",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    48851,
                    48853
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48851,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "14195:7:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48868,
                      "src": "14190:12:31",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 48850,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "14190:4:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 48853,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "14217:10:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48868,
                      "src": "14204:23:31",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 48852,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "14204:5:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48860,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 48858,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48847,
                        "src": "14257:4:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_calldata_ptr",
                            "typeString": "bytes calldata"
                          }
                        ],
                        "expression": {
                          "id": 48854,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48843,
                          "src": "14231:6:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 48855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14238:4:31",
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "14231:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 48857,
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
                          "id": 48856,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48845,
                          "src": "14250:5:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "14231:25:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 48859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14231:31:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14189:73:31"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 48864,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48851,
                        "src": "14297:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 48865,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48853,
                        "src": "14306:10:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 48861,
                        "name": "Address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51304,
                        "src": "14272:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Address_$51304_$",
                          "typeString": "type(library Address)"
                        }
                      },
                      "id": 48863,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14280:16:31",
                      "memberName": "verifyCallResult",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 51285,
                      "src": "14272:24:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 48866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14272:45:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 48867,
                  "nodeType": "ExpressionStatement",
                  "src": "14272:45:31"
                }
              ]
            },
            "documentation": {
              "id": 48841,
              "nodeType": "StructuredDocumentation",
              "src": "14035:52:31",
              "text": " @dev Execute an operation's call."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_execute",
            "nameLocation": "14101:8:31",
            "parameters": {
              "id": 48848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48843,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "14118:6:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48869,
                  "src": "14110:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48842,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14110:7:31",
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
                  "id": 48845,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "14134:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48869,
                  "src": "14126:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48844,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14126:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48847,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "14156:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48869,
                  "src": "14141:19:31",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 48846,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14141:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14109:52:31"
            },
            "returnParameters": {
              "id": 48849,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14179:0:31"
            },
            "scope": 48990,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 48909,
            "nodeType": "FunctionDefinition",
            "src": "14407:367:31",
            "nodes": [],
            "body": {
              "id": 48908,
              "nodeType": "Block",
              "src": "14474:300:31",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 48880,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "14488:21:31",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 48878,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48872,
                          "src": "14506:2:31",
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
                          }
                        ],
                        "id": 48877,
                        "name": "isOperationReady",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48296,
                        "src": "14489:16:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (bytes32) view returns (bool)"
                        }
                      },
                      "id": 48879,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14489:20:31",
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
                  "id": 48890,
                  "nodeType": "IfStatement",
                  "src": "14484:137:31",
                  "trueBody": {
                    "id": 48889,
                    "nodeType": "Block",
                    "src": "14511:110:31",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 48882,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48872,
                              "src": "14565:2:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 48884,
                                    "name": "OperationState",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 48019,
                                    "src": "14588:14:31",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                                      "typeString": "type(enum TimelockController.OperationState)"
                                    }
                                  },
                                  "id": 48885,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "14603:5:31",
                                  "memberName": "Ready",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 48017,
                                  "src": "14588:20:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_OperationState_$48019",
                                    "typeString": "enum TimelockController.OperationState"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_OperationState_$48019",
                                    "typeString": "enum TimelockController.OperationState"
                                  }
                                ],
                                "id": 48883,
                                "name": "_encodeStateBitmap",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48989,
                                "src": "14569:18:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_enum$_OperationState_$48019_$returns$_t_bytes32_$",
                                  "typeString": "function (enum TimelockController.OperationState) pure returns (bytes32)"
                                }
                              },
                              "id": 48886,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "14569:40:31",
                              "tryCall": false,
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
                            "id": 48881,
                            "name": "TimelockUnexpectedOperationState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48042,
                            "src": "14532:32:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_bytes32_$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32,bytes32) pure"
                            }
                          },
                          "id": 48887,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14532:78:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48888,
                        "nodeType": "RevertStatement",
                        "src": "14525:85:31"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 48901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "id": 48896,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 48891,
                        "name": "predecessor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48874,
                        "src": "14634:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 48894,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14657:1:31",
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
                          "id": 48893,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "14649:7:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 48892,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "14649:7:31",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 48895,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14649:10:31",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "14634:25:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 48900,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "14663:29:31",
                      "subExpression": {
                        "arguments": [
                          {
                            "id": 48898,
                            "name": "predecessor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48874,
                            "src": "14680:11:31",
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
                            }
                          ],
                          "id": 48897,
                          "name": "isOperationDone",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48312,
                          "src": "14664:15:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 48899,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14664:28:31",
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
                    "src": "14634:58:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48907,
                  "nodeType": "IfStatement",
                  "src": "14630:138:31",
                  "trueBody": {
                    "id": 48906,
                    "nodeType": "Block",
                    "src": "14694:74:31",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 48903,
                              "name": "predecessor",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48874,
                              "src": "14745:11:31",
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
                              }
                            ],
                            "id": 48902,
                            "name": "TimelockUnexecutedPredecessor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48047,
                            "src": "14715:29:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32) pure"
                            }
                          },
                          "id": 48904,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14715:42:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48905,
                        "nodeType": "RevertStatement",
                        "src": "14708:49:31"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 48870,
              "nodeType": "StructuredDocumentation",
              "src": "14330:72:31",
              "text": " @dev Checks before execution of an operation's calls."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_beforeCall",
            "nameLocation": "14416:11:31",
            "parameters": {
              "id": 48875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48872,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "14436:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48909,
                  "src": "14428:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48871,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "14428:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48874,
                  "mutability": "mutable",
                  "name": "predecessor",
                  "nameLocation": "14448:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48909,
                  "src": "14440:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48873,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "14440:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14427:33:31"
            },
            "returnParameters": {
              "id": 48876,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14474:0:31"
            },
            "scope": 48990,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 48936,
            "nodeType": "FunctionDefinition",
            "src": "14856:236:31",
            "nodes": [],
            "body": {
              "id": 48935,
              "nodeType": "Block",
              "src": "14896:196:31",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 48918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "14910:21:31",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 48916,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 48912,
                          "src": "14928:2:31",
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
                          }
                        ],
                        "id": 48915,
                        "name": "isOperationReady",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48296,
                        "src": "14911:16:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (bytes32) view returns (bool)"
                        }
                      },
                      "id": 48917,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14911:20:31",
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
                  "id": 48928,
                  "nodeType": "IfStatement",
                  "src": "14906:137:31",
                  "trueBody": {
                    "id": 48927,
                    "nodeType": "Block",
                    "src": "14933:110:31",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 48920,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48912,
                              "src": "14987:2:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 48922,
                                    "name": "OperationState",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 48019,
                                    "src": "15010:14:31",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_OperationState_$48019_$",
                                      "typeString": "type(enum TimelockController.OperationState)"
                                    }
                                  },
                                  "id": 48923,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "15025:5:31",
                                  "memberName": "Ready",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 48017,
                                  "src": "15010:20:31",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_OperationState_$48019",
                                    "typeString": "enum TimelockController.OperationState"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_OperationState_$48019",
                                    "typeString": "enum TimelockController.OperationState"
                                  }
                                ],
                                "id": 48921,
                                "name": "_encodeStateBitmap",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 48989,
                                "src": "14991:18:31",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_enum$_OperationState_$48019_$returns$_t_bytes32_$",
                                  "typeString": "function (enum TimelockController.OperationState) pure returns (bytes32)"
                                }
                              },
                              "id": 48924,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "14991:40:31",
                              "tryCall": false,
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
                            "id": 48919,
                            "name": "TimelockUnexpectedOperationState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48042,
                            "src": "14954:32:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_bytes32_$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32,bytes32) pure"
                            }
                          },
                          "id": 48925,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14954:78:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48926,
                        "nodeType": "RevertStatement",
                        "src": "14947:85:31"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 48933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 48929,
                        "name": "_timestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48012,
                        "src": "15052:11:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 48931,
                      "indexExpression": {
                        "id": 48930,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48912,
                        "src": "15064:2:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "15052:15:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 48932,
                      "name": "_DONE_TIMESTAMP",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48008,
                      "src": "15070:15:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15052:33:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 48934,
                  "nodeType": "ExpressionStatement",
                  "src": "15052:33:31"
                }
              ]
            },
            "documentation": {
              "id": 48910,
              "nodeType": "StructuredDocumentation",
              "src": "14780:71:31",
              "text": " @dev Checks after execution of an operation's calls."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_afterCall",
            "nameLocation": "14865:10:31",
            "parameters": {
              "id": 48913,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48912,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "14884:2:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48936,
                  "src": "14876:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48911,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "14876:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14875:12:31"
            },
            "returnParameters": {
              "id": 48914,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14896:0:31"
            },
            "scope": 48990,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 48969,
            "nodeType": "FunctionDefinition",
            "src": "15485:286:31",
            "nodes": [],
            "body": {
              "id": 48968,
              "nodeType": "Block",
              "src": "15541:230:31",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    48943
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48943,
                      "mutability": "mutable",
                      "name": "sender",
                      "nameLocation": "15559:6:31",
                      "nodeType": "VariableDeclaration",
                      "scope": 48968,
                      "src": "15551:14:31",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 48942,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "15551:7:31",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 48946,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 48944,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51316,
                      "src": "15568:10:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 48945,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15568:12:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "15551:29:31"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 48952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 48947,
                      "name": "sender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48943,
                      "src": "15594:6:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 48950,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "15612:4:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_TimelockController_$48990",
                            "typeString": "contract TimelockController"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_TimelockController_$48990",
                            "typeString": "contract TimelockController"
                          }
                        ],
                        "id": 48949,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "15604:7:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 48948,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "15604:7:31",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 48951,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "15604:13:31",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "15594:23:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 48958,
                  "nodeType": "IfStatement",
                  "src": "15590:95:31",
                  "trueBody": {
                    "id": 48957,
                    "nodeType": "Block",
                    "src": "15619:66:31",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 48954,
                              "name": "sender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48943,
                              "src": "15667:6:31",
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
                            "id": 48953,
                            "name": "TimelockUnauthorizedCaller",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 48052,
                            "src": "15640:26:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 48955,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15640:34:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 48956,
                        "nodeType": "RevertStatement",
                        "src": "15633:41:31"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 48960,
                        "name": "_minDelay",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48014,
                        "src": "15714:9:31",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 48961,
                        "name": "newDelay",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48939,
                        "src": "15725:8:31",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 48959,
                      "name": "MinDelayChange",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48101,
                      "src": "15699:14:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 48962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15699:35:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 48963,
                  "nodeType": "EmitStatement",
                  "src": "15694:40:31"
                },
                {
                  "expression": {
                    "id": 48966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 48964,
                      "name": "_minDelay",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48014,
                      "src": "15744:9:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 48965,
                      "name": "newDelay",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48939,
                      "src": "15756:8:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15744:20:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 48967,
                  "nodeType": "ExpressionStatement",
                  "src": "15744:20:31"
                }
              ]
            },
            "documentation": {
              "id": 48937,
              "nodeType": "StructuredDocumentation",
              "src": "15098:382:31",
              "text": " @dev Changes the minimum timelock duration for future operations.\n Emits a {MinDelayChange} event.\n Requirements:\n - the caller must be the timelock itself. This can only be achieved by scheduling and later executing\n an operation where the timelock is the target and the data is the ABI-encoded call to this function."
            },
            "functionSelector": "64d62353",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateDelay",
            "nameLocation": "15494:11:31",
            "parameters": {
              "id": 48940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48939,
                  "mutability": "mutable",
                  "name": "newDelay",
                  "nameLocation": "15514:8:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48969,
                  "src": "15506:16:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48938,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15506:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15505:18:31"
            },
            "returnParameters": {
              "id": 48941,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "15541:0:31"
            },
            "scope": 48990,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 48989,
            "nodeType": "FunctionDefinition",
            "src": "16137:150:31",
            "nodes": [],
            "body": {
              "id": 48988,
              "nodeType": "Block",
              "src": "16228:59:31",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 48985,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "31",
                          "id": 48980,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "16253:1:31",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<<",
                        "rightExpression": {
                          "arguments": [
                            {
                              "id": 48983,
                              "name": "operationState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48973,
                              "src": "16264:14:31",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_OperationState_$48019",
                                "typeString": "enum TimelockController.OperationState"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_OperationState_$48019",
                                "typeString": "enum TimelockController.OperationState"
                              }
                            ],
                            "id": 48982,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "16258:5:31",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": {
                              "id": 48981,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "16258:5:31",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 48984,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16258:21:31",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "16253:26:31",
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
                      "id": 48979,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "16245:7:31",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 48978,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "16245:7:31",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 48986,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16245:35:31",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 48977,
                  "id": 48987,
                  "nodeType": "Return",
                  "src": "16238:42:31"
                }
              ]
            },
            "documentation": {
              "id": 48970,
              "nodeType": "StructuredDocumentation",
              "src": "15777:355:31",
              "text": " @dev Encodes a `OperationState` into a `bytes32` representation where each bit enabled corresponds to\n the underlying position in the `OperationState` enum. For example:\n 0x000...1000\n   ^^^^^^----- ...\n         ^---- Done\n          ^--- Ready\n           ^-- Waiting\n            ^- Unset"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_encodeStateBitmap",
            "nameLocation": "16146:18:31",
            "parameters": {
              "id": 48974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48973,
                  "mutability": "mutable",
                  "name": "operationState",
                  "nameLocation": "16180:14:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 48989,
                  "src": "16165:29:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_OperationState_$48019",
                    "typeString": "enum TimelockController.OperationState"
                  },
                  "typeName": {
                    "id": 48972,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 48971,
                      "name": "OperationState",
                      "nameLocations": [
                        "16165:14:31"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 48019,
                      "src": "16165:14:31"
                    },
                    "referencedDeclaration": 48019,
                    "src": "16165:14:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_OperationState_$48019",
                      "typeString": "enum TimelockController.OperationState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16164:31:31"
            },
            "returnParameters": {
              "id": 48977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48976,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48989,
                  "src": "16219:7:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 48975,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "16219:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16218:9:31"
            },
            "scope": 48990,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 47982,
              "name": "AccessControl",
              "nameLocations": [
                "1115:13:31"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 47739,
              "src": "1115:13:31"
            },
            "id": 47983,
            "nodeType": "InheritanceSpecifier",
            "src": "1115:13:31"
          },
          {
            "baseName": {
              "id": 47984,
              "name": "ERC721Holder",
              "nameLocations": [
                "1130:12:31"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 51051,
              "src": "1130:12:31"
            },
            "id": 47985,
            "nodeType": "InheritanceSpecifier",
            "src": "1130:12:31"
          },
          {
            "baseName": {
              "id": 47986,
              "name": "ERC1155Holder",
              "nameLocations": [
                "1144:13:31"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 50197,
              "src": "1144:13:31"
            },
            "id": 47987,
            "nodeType": "InheritanceSpecifier",
            "src": "1144:13:31"
          }
        ],
        "canonicalName": "TimelockController",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 47981,
          "nodeType": "StructuredDocumentation",
          "src": "390:693:31",
          "text": " @dev Contract module which acts as a timelocked controller. When set as the\n owner of an `Ownable` smart contract, it enforces a timelock on all\n `onlyOwner` maintenance operations. This gives time for users of the\n controlled contract to exit before a potentially dangerous maintenance\n operation is applied.\n By default, this contract is self administered, meaning administration tasks\n have to go through the timelock process. The proposer (resp executor) role\n is in charge of proposing (resp executing) operations. A common use case is\n to position this {TimelockController} as the owner of a smart contract, with\n a multisig or a DAO as the sole proposer."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          48990,
          50197,
          50116,
          51051,
          51024,
          47739,
          52758,
          52770,
          47822,
          51334
        ],
        "name": "TimelockController",
        "nameLocation": "1093:18:31",
        "scope": 48991,
        "usedErrors": [
          47749,
          47752,
          48028,
          48035,
          48042,
          48047,
          48052,
          51067
        ],
        "usedEvents": [
          47761,
          47770,
          47779,
          48069,
          48082,
          48089,
          48094,
          48101
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 31
} as const;