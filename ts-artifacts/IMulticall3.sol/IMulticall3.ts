export const IMulticall3 = {
  "abi": [
    {
      "type": "function",
      "name": "aggregate",
      "inputs": [
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Call[]",
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
          "internalType": "struct IMulticall3.Call3[]",
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
          "internalType": "struct IMulticall3.Result[]",
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
          "internalType": "struct IMulticall3.Call3Value[]",
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
          "internalType": "struct IMulticall3.Result[]",
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
          "internalType": "struct IMulticall3.Call[]",
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
          "internalType": "struct IMulticall3.Result[]",
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
          "internalType": "struct IMulticall3.Call[]",
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
          "internalType": "struct IMulticall3.Result[]",
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
          "internalType": "struct IMulticall3.Call[]",
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
          "internalType": "struct IMulticall3.Result[]",
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
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes[]\",\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3Value[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3Value\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"blockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBasefee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"basefee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBlockNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"chainid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"coinbase\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"difficulty\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryAggregate\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryBlockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":\"IMulticall3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}",
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
              "internalType": "struct IMulticall3.Call[]",
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
              "internalType": "struct IMulticall3.Call3[]",
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
              "internalType": "struct IMulticall3.Result[]",
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
              "internalType": "struct IMulticall3.Call3Value[]",
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
              "internalType": "struct IMulticall3.Result[]",
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
              "internalType": "struct IMulticall3.Call[]",
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
              "internalType": "struct IMulticall3.Result[]",
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
              "internalType": "struct IMulticall3.Call[]",
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
              "internalType": "struct IMulticall3.Result[]",
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
              "internalType": "struct IMulticall3.Call[]",
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
              "internalType": "struct IMulticall3.Result[]",
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
        "lib/forge-std/src/interfaces/IMulticall3.sol": "IMulticall3"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "lib/forge-std/src/interfaces/IMulticall3.sol": {
        "keccak256": "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
        "urls": [
          "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
          "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/interfaces/IMulticall3.sol",
    "id": 32353,
    "exportedSymbols": {
      "IMulticall3": [
        32352
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2153:20",
    "nodes": [
      {
        "id": 32191,
        "nodeType": "PragmaDirective",
        "src": "32:31:20",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".2",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 32192,
        "nodeType": "PragmaDirective",
        "src": "65:33:20",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 32352,
        "nodeType": "ContractDefinition",
        "src": "100:2084:20",
        "nodes": [
          {
            "id": 32197,
            "nodeType": "StructDefinition",
            "src": "128:67:20",
            "nodes": [],
            "canonicalName": "IMulticall3.Call",
            "members": [
              {
                "constant": false,
                "id": 32194,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "158:6:20",
                "nodeType": "VariableDeclaration",
                "scope": 32197,
                "src": "150:14:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 32193,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "150:7:20",
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
                "id": 32196,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "180:8:20",
                "nodeType": "VariableDeclaration",
                "scope": 32197,
                "src": "174:14:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 32195,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "174:5:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call",
            "nameLocation": "135:4:20",
            "scope": 32352,
            "visibility": "public"
          },
          {
            "id": 32204,
            "nodeType": "StructDefinition",
            "src": "201:95:20",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3",
            "members": [
              {
                "constant": false,
                "id": 32199,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "232:6:20",
                "nodeType": "VariableDeclaration",
                "scope": 32204,
                "src": "224:14:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 32198,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "224:7:20",
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
                "id": 32201,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "253:12:20",
                "nodeType": "VariableDeclaration",
                "scope": 32204,
                "src": "248:17:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 32200,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "248:4:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 32203,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "281:8:20",
                "nodeType": "VariableDeclaration",
                "scope": 32204,
                "src": "275:14:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 32202,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "275:5:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3",
            "nameLocation": "208:5:20",
            "scope": 32352,
            "visibility": "public"
          },
          {
            "id": 32213,
            "nodeType": "StructDefinition",
            "src": "302:123:20",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3Value",
            "members": [
              {
                "constant": false,
                "id": 32206,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "338:6:20",
                "nodeType": "VariableDeclaration",
                "scope": 32213,
                "src": "330:14:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 32205,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "330:7:20",
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
                "id": 32208,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "359:12:20",
                "nodeType": "VariableDeclaration",
                "scope": 32213,
                "src": "354:17:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 32207,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "354:4:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 32210,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "389:5:20",
                "nodeType": "VariableDeclaration",
                "scope": 32213,
                "src": "381:13:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 32209,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "381:7:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 32212,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "410:8:20",
                "nodeType": "VariableDeclaration",
                "scope": 32213,
                "src": "404:14:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 32211,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "404:5:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3Value",
            "nameLocation": "309:10:20",
            "scope": 32352,
            "visibility": "public"
          },
          {
            "id": 32218,
            "nodeType": "StructDefinition",
            "src": "431:69:20",
            "nodes": [],
            "canonicalName": "IMulticall3.Result",
            "members": [
              {
                "constant": false,
                "id": 32215,
                "mutability": "mutable",
                "name": "success",
                "nameLocation": "460:7:20",
                "nodeType": "VariableDeclaration",
                "scope": 32218,
                "src": "455:12:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 32214,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "455:4:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 32217,
                "mutability": "mutable",
                "name": "returnData",
                "nameLocation": "483:10:20",
                "nodeType": "VariableDeclaration",
                "scope": 32218,
                "src": "477:16:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 32216,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "477:5:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Result",
            "nameLocation": "438:6:20",
            "scope": 32352,
            "visibility": "public"
          },
          {
            "id": 32230,
            "nodeType": "FunctionDefinition",
            "src": "506:140:20",
            "nodes": [],
            "functionSelector": "252dba42",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate",
            "nameLocation": "515:9:20",
            "parameters": {
              "id": 32223,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32222,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "541:5:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32230,
                  "src": "525:21:20",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$32197_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32220,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32219,
                        "name": "Call",
                        "nameLocations": [
                          "525:4:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32197,
                        "src": "525:4:20"
                      },
                      "referencedDeclaration": 32197,
                      "src": "525:4:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$32197_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 32221,
                    "nodeType": "ArrayTypeName",
                    "src": "525:6:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$32197_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "524:23:20"
            },
            "returnParameters": {
              "id": 32229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32225,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "606:11:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32230,
                  "src": "598:19:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32224,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32228,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "634:10:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32230,
                  "src": "619:25:20",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32226,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "619:5:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 32227,
                    "nodeType": "ArrayTypeName",
                    "src": "619:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "597:48:20"
            },
            "scope": 32352,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32241,
            "nodeType": "FunctionDefinition",
            "src": "652:98:20",
            "nodes": [],
            "functionSelector": "82ad56cb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3",
            "nameLocation": "661:10:20",
            "parameters": {
              "id": 32235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32234,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "689:5:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32241,
                  "src": "672:22:20",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3_$32204_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32232,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32231,
                        "name": "Call3",
                        "nameLocations": [
                          "672:5:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32204,
                        "src": "672:5:20"
                      },
                      "referencedDeclaration": 32204,
                      "src": "672:5:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3_$32204_storage_ptr",
                        "typeString": "struct IMulticall3.Call3"
                      }
                    },
                    "id": 32233,
                    "nodeType": "ArrayTypeName",
                    "src": "672:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3_$32204_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "671:24:20"
            },
            "returnParameters": {
              "id": 32240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32239,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "738:10:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32241,
                  "src": "722:26:20",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$32218_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32237,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32236,
                        "name": "Result",
                        "nameLocations": [
                          "722:6:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32218,
                        "src": "722:6:20"
                      },
                      "referencedDeclaration": 32218,
                      "src": "722:6:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$32218_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 32238,
                    "nodeType": "ArrayTypeName",
                    "src": "722:8:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$32218_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "721:28:20"
            },
            "scope": 32352,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32252,
            "nodeType": "FunctionDefinition",
            "src": "756:108:20",
            "nodes": [],
            "functionSelector": "174dea71",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3Value",
            "nameLocation": "765:15:20",
            "parameters": {
              "id": 32246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32245,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "803:5:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32252,
                  "src": "781:27:20",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3Value_$32213_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3Value[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32243,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32242,
                        "name": "Call3Value",
                        "nameLocations": [
                          "781:10:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32213,
                        "src": "781:10:20"
                      },
                      "referencedDeclaration": 32213,
                      "src": "781:10:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3Value_$32213_storage_ptr",
                        "typeString": "struct IMulticall3.Call3Value"
                      }
                    },
                    "id": 32244,
                    "nodeType": "ArrayTypeName",
                    "src": "781:12:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3Value_$32213_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3Value[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:29:20"
            },
            "returnParameters": {
              "id": 32251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32250,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "852:10:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32252,
                  "src": "836:26:20",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$32218_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32248,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32247,
                        "name": "Result",
                        "nameLocations": [
                          "836:6:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32218,
                        "src": "836:6:20"
                      },
                      "referencedDeclaration": 32218,
                      "src": "836:6:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$32218_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 32249,
                    "nodeType": "ArrayTypeName",
                    "src": "836:8:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$32218_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "835:28:20"
            },
            "scope": 32352,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32267,
            "nodeType": "FunctionDefinition",
            "src": "870:168:20",
            "nodes": [],
            "functionSelector": "c3077fa9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "blockAndAggregate",
            "nameLocation": "879:17:20",
            "parameters": {
              "id": 32257,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32256,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "913:5:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32267,
                  "src": "897:21:20",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$32197_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32254,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32253,
                        "name": "Call",
                        "nameLocations": [
                          "897:4:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32197,
                        "src": "897:4:20"
                      },
                      "referencedDeclaration": 32197,
                      "src": "897:4:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$32197_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 32255,
                    "nodeType": "ArrayTypeName",
                    "src": "897:6:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$32197_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "896:23:20"
            },
            "returnParameters": {
              "id": 32266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32259,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "978:11:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32267,
                  "src": "970:19:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32258,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "970:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32261,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "999:9:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32267,
                  "src": "991:17:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32260,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32265,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1026:10:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32267,
                  "src": "1010:26:20",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$32218_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32263,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32262,
                        "name": "Result",
                        "nameLocations": [
                          "1010:6:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32218,
                        "src": "1010:6:20"
                      },
                      "referencedDeclaration": 32218,
                      "src": "1010:6:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$32218_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 32264,
                    "nodeType": "ArrayTypeName",
                    "src": "1010:8:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$32218_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "969:68:20"
            },
            "scope": 32352,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32272,
            "nodeType": "FunctionDefinition",
            "src": "1044:62:20",
            "nodes": [],
            "functionSelector": "3e64a696",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBasefee",
            "nameLocation": "1053:10:20",
            "parameters": {
              "id": 32268,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1063:2:20"
            },
            "returnParameters": {
              "id": 32271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32270,
                  "mutability": "mutable",
                  "name": "basefee",
                  "nameLocation": "1097:7:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32272,
                  "src": "1089:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32269,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1089:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1088:17:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32279,
            "nodeType": "FunctionDefinition",
            "src": "1112:85:20",
            "nodes": [],
            "functionSelector": "ee82ac5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockHash",
            "nameLocation": "1121:12:20",
            "parameters": {
              "id": 32275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32274,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1142:11:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32279,
                  "src": "1134:19:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32273,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1134:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1133:21:20"
            },
            "returnParameters": {
              "id": 32278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32277,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1186:9:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32279,
                  "src": "1178:17:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32276,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1177:19:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32284,
            "nodeType": "FunctionDefinition",
            "src": "1203:70:20",
            "nodes": [],
            "functionSelector": "42cbb15c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockNumber",
            "nameLocation": "1212:14:20",
            "parameters": {
              "id": 32280,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:2:20"
            },
            "returnParameters": {
              "id": 32283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32282,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1260:11:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32284,
                  "src": "1252:19:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32281,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1251:21:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32289,
            "nodeType": "FunctionDefinition",
            "src": "1279:62:20",
            "nodes": [],
            "functionSelector": "3408e470",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getChainId",
            "nameLocation": "1288:10:20",
            "parameters": {
              "id": 32285,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1298:2:20"
            },
            "returnParameters": {
              "id": 32288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32287,
                  "mutability": "mutable",
                  "name": "chainid",
                  "nameLocation": "1332:7:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32289,
                  "src": "1324:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32286,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1323:17:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32294,
            "nodeType": "FunctionDefinition",
            "src": "1347:76:20",
            "nodes": [],
            "functionSelector": "a8b0574e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockCoinbase",
            "nameLocation": "1356:23:20",
            "parameters": {
              "id": 32290,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1379:2:20"
            },
            "returnParameters": {
              "id": 32293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32292,
                  "mutability": "mutable",
                  "name": "coinbase",
                  "nameLocation": "1413:8:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32294,
                  "src": "1405:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32291,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:20",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1404:18:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32299,
            "nodeType": "FunctionDefinition",
            "src": "1429:80:20",
            "nodes": [],
            "functionSelector": "72425d9d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockDifficulty",
            "nameLocation": "1438:25:20",
            "parameters": {
              "id": 32295,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1463:2:20"
            },
            "returnParameters": {
              "id": 32298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32297,
                  "mutability": "mutable",
                  "name": "difficulty",
                  "nameLocation": "1497:10:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32299,
                  "src": "1489:18:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32296,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1489:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1488:20:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32304,
            "nodeType": "FunctionDefinition",
            "src": "1515:76:20",
            "nodes": [],
            "functionSelector": "86d516e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockGasLimit",
            "nameLocation": "1524:23:20",
            "parameters": {
              "id": 32300,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1547:2:20"
            },
            "returnParameters": {
              "id": 32303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32302,
                  "mutability": "mutable",
                  "name": "gaslimit",
                  "nameLocation": "1581:8:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32304,
                  "src": "1573:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32301,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1573:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1572:18:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32309,
            "nodeType": "FunctionDefinition",
            "src": "1597:78:20",
            "nodes": [],
            "functionSelector": "0f28c97d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockTimestamp",
            "nameLocation": "1606:24:20",
            "parameters": {
              "id": 32305,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1630:2:20"
            },
            "returnParameters": {
              "id": 32308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32307,
                  "mutability": "mutable",
                  "name": "timestamp",
                  "nameLocation": "1664:9:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32309,
                  "src": "1656:17:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32306,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1656:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1655:19:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32316,
            "nodeType": "FunctionDefinition",
            "src": "1681:77:20",
            "nodes": [],
            "functionSelector": "4d2301cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEthBalance",
            "nameLocation": "1690:13:20",
            "parameters": {
              "id": 32312,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32311,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "1712:4:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32316,
                  "src": "1704:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32310,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1704:7:20",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1703:14:20"
            },
            "returnParameters": {
              "id": 32315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32314,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "1749:7:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32316,
                  "src": "1741:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32313,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1740:17:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32321,
            "nodeType": "FunctionDefinition",
            "src": "1764:70:20",
            "nodes": [],
            "functionSelector": "27e86d6e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLastBlockHash",
            "nameLocation": "1773:16:20",
            "parameters": {
              "id": 32317,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1789:2:20"
            },
            "returnParameters": {
              "id": 32320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32319,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1823:9:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32321,
                  "src": "1815:17:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32318,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1815:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1814:19:20"
            },
            "scope": 32352,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32334,
            "nodeType": "FunctionDefinition",
            "src": "1840:144:20",
            "nodes": [],
            "functionSelector": "bce38bd7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryAggregate",
            "nameLocation": "1849:12:20",
            "parameters": {
              "id": 32328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32323,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "1867:14:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32334,
                  "src": "1862:19:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32322,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1862:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32327,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "1899:5:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32334,
                  "src": "1883:21:20",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$32197_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32325,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32324,
                        "name": "Call",
                        "nameLocations": [
                          "1883:4:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32197,
                        "src": "1883:4:20"
                      },
                      "referencedDeclaration": 32197,
                      "src": "1883:4:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$32197_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 32326,
                    "nodeType": "ArrayTypeName",
                    "src": "1883:6:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$32197_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1861:44:20"
            },
            "returnParameters": {
              "id": 32333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32332,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1972:10:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32334,
                  "src": "1956:26:20",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$32218_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32330,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32329,
                        "name": "Result",
                        "nameLocations": [
                          "1956:6:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32218,
                        "src": "1956:6:20"
                      },
                      "referencedDeclaration": 32218,
                      "src": "1956:6:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$32218_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 32331,
                    "nodeType": "ArrayTypeName",
                    "src": "1956:8:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$32218_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1955:28:20"
            },
            "scope": 32352,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 32351,
            "nodeType": "FunctionDefinition",
            "src": "1990:192:20",
            "nodes": [],
            "functionSelector": "399542e9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryBlockAndAggregate",
            "nameLocation": "1999:20:20",
            "parameters": {
              "id": 32341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32336,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "2025:14:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32351,
                  "src": "2020:19:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 32335,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32340,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "2057:5:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32351,
                  "src": "2041:21:20",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$32197_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32338,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32337,
                        "name": "Call",
                        "nameLocations": [
                          "2041:4:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32197,
                        "src": "2041:4:20"
                      },
                      "referencedDeclaration": 32197,
                      "src": "2041:4:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$32197_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 32339,
                    "nodeType": "ArrayTypeName",
                    "src": "2041:6:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$32197_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2019:44:20"
            },
            "returnParameters": {
              "id": 32350,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32343,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "2122:11:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32351,
                  "src": "2114:19:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32342,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2114:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32345,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "2143:9:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32351,
                  "src": "2135:17:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 32344,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2135:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32349,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "2170:10:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 32351,
                  "src": "2154:26:20",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$32218_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 32347,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 32346,
                        "name": "Result",
                        "nameLocations": [
                          "2154:6:20"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 32218,
                        "src": "2154:6:20"
                      },
                      "referencedDeclaration": 32218,
                      "src": "2154:6:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$32218_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 32348,
                    "nodeType": "ArrayTypeName",
                    "src": "2154:8:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$32218_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:68:20"
            },
            "scope": 32352,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IMulticall3",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          32352
        ],
        "name": "IMulticall3",
        "nameLocation": "110:11:20",
        "scope": 32353,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 20
} as const;