export const ERC20 = {
  "abi": [
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
          "name": "",
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
          "name": "value",
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
          "name": "account",
          "type": "address",
          "internalType": "address"
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
          "name": "",
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
          "name": "value",
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
          "name": "value",
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
          "name": "value",
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
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "ERC20InsufficientAllowance",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "allowance",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "needed",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InsufficientBalance",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "balance",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "needed",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidApprover",
      "inputs": [
        {
          "name": "approver",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidReceiver",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidSender",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidSpender",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        }
      ]
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
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "decimals()": "313ce567",
    "name()": "06fdde03",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the {IERC20} interface. This implementation is agnostic to the way tokens are created. This means that a supply mechanism has to be added in a derived contract using {_mint}. TIP: For a detailed writeup see our guide https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How to implement supply mechanisms]. The default value of {decimals} is 18. To change this, you should override this function so it returns a different value. We have followed general OpenZeppelin Contracts guidelines: functions revert instead returning `false` on failure. This behavior is nonetheless conventional and does not conflict with the expectations of ERC20 applications. Additionally, an {Approval} event is emitted on calls to {transferFrom}. This allows applications to reconstruct the allowance for all accounts just by listening to said events. Other implementations of the EIP may not emit these events, as it isn't required by the specification.\",\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"constructor\":{\"details\":\"Sets the values for {name} and {symbol}. All two of these values are immutable: they can only be set once during construction.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol\":\"ERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}",
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
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC20InsufficientAllowance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC20InsufficientBalance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC20InvalidApprover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC20InvalidReceiver"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC20InvalidSender"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC20InvalidSpender"
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
              "name": "value",
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
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
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
              "name": "",
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
              "name": "value",
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
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
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
              "name": "",
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
              "name": "value",
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
              "name": "value",
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
          "allowance(address,address)": {
            "details": "See {IERC20-allowance}."
          },
          "approve(address,uint256)": {
            "details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
          },
          "balanceOf(address)": {
            "details": "See {IERC20-balanceOf}."
          },
          "constructor": {
            "details": "Sets the values for {name} and {symbol}. All two of these values are immutable: they can only be set once during construction."
          },
          "decimals()": {
            "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
          },
          "name()": {
            "details": "Returns the name of the token."
          },
          "symbol()": {
            "details": "Returns the symbol of the token, usually a shorter version of the name."
          },
          "totalSupply()": {
            "details": "See {IERC20-totalSupply}."
          },
          "transfer(address,uint256)": {
            "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."
          },
          "transferFrom(address,address,uint256)": {
            "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`."
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
        "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol": "ERC20"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
        "urls": [
          "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
          "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
        "urls": [
          "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
          "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
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
      "node_modules/@openzeppelin/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol",
    "id": 50713,
    "exportedSymbols": {
      "Context": [
        51334
      ],
      "ERC20": [
        50712
      ],
      "IERC20": [
        50790
      ],
      "IERC20Errors": [
        49266
      ],
      "IERC20Metadata": [
        50970
      ]
    },
    "nodeType": "SourceUnit",
    "src": "105:11038:48",
    "nodes": [
      {
        "id": 50199,
        "nodeType": "PragmaDirective",
        "src": "105:24:48",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 50201,
        "nodeType": "ImportDirective",
        "src": "131:36:48",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "./IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 50791,
        "symbolAliases": [
          {
            "foreign": {
              "id": 50200,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50790,
              "src": "139:6:48",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 50203,
        "nodeType": "ImportDirective",
        "src": "168:63:48",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol",
        "file": "./extensions/IERC20Metadata.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 50971,
        "symbolAliases": [
          {
            "foreign": {
              "id": 50202,
              "name": "IERC20Metadata",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50970,
              "src": "176:14:48",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 50205,
        "nodeType": "ImportDirective",
        "src": "232:48:48",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Context.sol",
        "file": "../../utils/Context.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 51335,
        "symbolAliases": [
          {
            "foreign": {
              "id": 50204,
              "name": "Context",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51334,
              "src": "240:7:48",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 50207,
        "nodeType": "ImportDirective",
        "src": "281:65:48",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "file": "../../interfaces/draft-IERC6093.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 49362,
        "symbolAliases": [
          {
            "foreign": {
              "id": 50206,
              "name": "IERC20Errors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49266,
              "src": "289:12:48",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 50712,
        "nodeType": "ContractDefinition",
        "src": "1401:9741:48",
        "nodes": [
          {
            "id": 50220,
            "nodeType": "VariableDeclaration",
            "src": "1480:53:48",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_balances",
            "nameLocation": "1524:9:48",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 50219,
              "keyName": "account",
              "keyNameLocation": "1496:7:48",
              "keyType": {
                "id": 50217,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1488:7:48",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1480:35:48",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50218,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1507:7:48",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 50226,
            "nodeType": "VariableDeclaration",
            "src": "1540:83:48",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_allowances",
            "nameLocation": "1612:11:48",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 50225,
              "keyName": "account",
              "keyNameLocation": "1556:7:48",
              "keyType": {
                "id": 50221,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1548:7:48",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1540:63:48",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50224,
                "keyName": "spender",
                "keyNameLocation": "1583:7:48",
                "keyType": {
                  "id": 50222,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1575:7:48",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1567:35:48",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 50223,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1594:7:48",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 50228,
            "nodeType": "VariableDeclaration",
            "src": "1630:28:48",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_totalSupply",
            "nameLocation": "1646:12:48",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 50227,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1630:7:48",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "id": 50230,
            "nodeType": "VariableDeclaration",
            "src": "1665:20:48",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_name",
            "nameLocation": "1680:5:48",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 50229,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1665:6:48",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 50232,
            "nodeType": "VariableDeclaration",
            "src": "1691:22:48",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_symbol",
            "nameLocation": "1706:7:48",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 50231,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1691:6:48",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 50249,
            "nodeType": "FunctionDefinition",
            "src": "1896:113:48",
            "nodes": [],
            "body": {
              "id": 50248,
              "nodeType": "Block",
              "src": "1952:57:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 50242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 50240,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50230,
                      "src": "1962:5:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50241,
                      "name": "name_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50235,
                      "src": "1970:5:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1962:13:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 50243,
                  "nodeType": "ExpressionStatement",
                  "src": "1962:13:48"
                },
                {
                  "expression": {
                    "id": 50246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 50244,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50232,
                      "src": "1985:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50245,
                      "name": "symbol_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50237,
                      "src": "1995:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1985:17:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 50247,
                  "nodeType": "ExpressionStatement",
                  "src": "1985:17:48"
                }
              ]
            },
            "documentation": {
              "id": 50233,
              "nodeType": "StructuredDocumentation",
              "src": "1720:171:48",
              "text": " @dev Sets the values for {name} and {symbol}.\n All two of these values are immutable: they can only be set once during\n construction."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 50238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50235,
                  "mutability": "mutable",
                  "name": "name_",
                  "nameLocation": "1922:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50249,
                  "src": "1908:19:48",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 50234,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1908:6:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50237,
                  "mutability": "mutable",
                  "name": "symbol_",
                  "nameLocation": "1943:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50249,
                  "src": "1929:21:48",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 50236,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1929:6:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1907:44:48"
            },
            "returnParameters": {
              "id": 50239,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1952:0:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50258,
            "nodeType": "FunctionDefinition",
            "src": "2074:89:48",
            "nodes": [],
            "body": {
              "id": 50257,
              "nodeType": "Block",
              "src": "2134:29:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 50255,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 50230,
                    "src": "2151:5:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 50254,
                  "id": 50256,
                  "nodeType": "Return",
                  "src": "2144:12:48"
                }
              ]
            },
            "baseFunctions": [
              50957
            ],
            "documentation": {
              "id": 50250,
              "nodeType": "StructuredDocumentation",
              "src": "2015:54:48",
              "text": " @dev Returns the name of the token."
            },
            "functionSelector": "06fdde03",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "2083:4:48",
            "parameters": {
              "id": 50251,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2087:2:48"
            },
            "returnParameters": {
              "id": 50254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50253,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50258,
                  "src": "2119:13:48",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 50252,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2119:6:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2118:15:48"
            },
            "scope": 50712,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50267,
            "nodeType": "FunctionDefinition",
            "src": "2276:93:48",
            "nodes": [],
            "body": {
              "id": 50266,
              "nodeType": "Block",
              "src": "2338:31:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 50264,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 50232,
                    "src": "2355:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 50263,
                  "id": 50265,
                  "nodeType": "Return",
                  "src": "2348:14:48"
                }
              ]
            },
            "baseFunctions": [
              50963
            ],
            "documentation": {
              "id": 50259,
              "nodeType": "StructuredDocumentation",
              "src": "2169:102:48",
              "text": " @dev Returns the symbol of the token, usually a shorter version of the\n name."
            },
            "functionSelector": "95d89b41",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "2285:6:48",
            "parameters": {
              "id": 50260,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2291:2:48"
            },
            "returnParameters": {
              "id": 50263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50262,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50267,
                  "src": "2323:13:48",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 50261,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2323:6:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2322:15:48"
            },
            "scope": 50712,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50276,
            "nodeType": "FunctionDefinition",
            "src": "3002:82:48",
            "nodes": [],
            "body": {
              "id": 50275,
              "nodeType": "Block",
              "src": "3058:26:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "3138",
                    "id": 50273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3075:2:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_18_by_1",
                      "typeString": "int_const 18"
                    },
                    "value": "18"
                  },
                  "functionReturnParameters": 50272,
                  "id": 50274,
                  "nodeType": "Return",
                  "src": "3068:9:48"
                }
              ]
            },
            "baseFunctions": [
              50969
            ],
            "documentation": {
              "id": 50268,
              "nodeType": "StructuredDocumentation",
              "src": "2375:622:48",
              "text": " @dev Returns the number of decimals used to get its user representation.\n For example, if `decimals` equals `2`, a balance of `505` tokens should\n be displayed to a user as `5.05` (`505 / 10 ** 2`).\n Tokens usually opt for a value of 18, imitating the relationship between\n Ether and Wei. This is the default value returned by this function, unless\n it's overridden.\n NOTE: This information is only used for _display_ purposes: it in\n no way affects any of the arithmetic of the contract, including\n {IERC20-balanceOf} and {IERC20-transfer}."
            },
            "functionSelector": "313ce567",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "3011:8:48",
            "parameters": {
              "id": 50269,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3019:2:48"
            },
            "returnParameters": {
              "id": 50272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50271,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50276,
                  "src": "3051:5:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 50270,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "3051:5:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3050:7:48"
            },
            "scope": 50712,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50285,
            "nodeType": "FunctionDefinition",
            "src": "3144:97:48",
            "nodes": [],
            "body": {
              "id": 50284,
              "nodeType": "Block",
              "src": "3205:36:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 50282,
                    "name": "_totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 50228,
                    "src": "3222:12:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 50281,
                  "id": 50283,
                  "nodeType": "Return",
                  "src": "3215:19:48"
                }
              ]
            },
            "baseFunctions": [
              50739
            ],
            "documentation": {
              "id": 50277,
              "nodeType": "StructuredDocumentation",
              "src": "3090:49:48",
              "text": " @dev See {IERC20-totalSupply}."
            },
            "functionSelector": "18160ddd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "3153:11:48",
            "parameters": {
              "id": 50278,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3164:2:48"
            },
            "returnParameters": {
              "id": 50281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50280,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50285,
                  "src": "3196:7:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50279,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3196:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3195:9:48"
            },
            "scope": 50712,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50298,
            "nodeType": "FunctionDefinition",
            "src": "3299:116:48",
            "nodes": [],
            "body": {
              "id": 50297,
              "nodeType": "Block",
              "src": "3373:42:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 50293,
                      "name": "_balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50220,
                      "src": "3390:9:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 50295,
                    "indexExpression": {
                      "id": 50294,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50288,
                      "src": "3400:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3390:18:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 50292,
                  "id": 50296,
                  "nodeType": "Return",
                  "src": "3383:25:48"
                }
              ]
            },
            "baseFunctions": [
              50747
            ],
            "documentation": {
              "id": 50286,
              "nodeType": "StructuredDocumentation",
              "src": "3247:47:48",
              "text": " @dev See {IERC20-balanceOf}."
            },
            "functionSelector": "70a08231",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "3308:9:48",
            "parameters": {
              "id": 50289,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50288,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3326:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50298,
                  "src": "3318:15:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50287,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3318:7:48",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3317:17:48"
            },
            "returnParameters": {
              "id": 50292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50291,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50298,
                  "src": "3364:7:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50290,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3364:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3363:9:48"
            },
            "scope": 50712,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50322,
            "nodeType": "FunctionDefinition",
            "src": "3610:178:48",
            "nodes": [],
            "body": {
              "id": 50321,
              "nodeType": "Block",
              "src": "3685:103:48",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    50309
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50309,
                      "mutability": "mutable",
                      "name": "owner",
                      "nameLocation": "3703:5:48",
                      "nodeType": "VariableDeclaration",
                      "scope": 50321,
                      "src": "3695:13:48",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 50308,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3695:7:48",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50312,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 50310,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51316,
                      "src": "3711:10:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 50311,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3711:12:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3695:28:48"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50314,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50309,
                        "src": "3743:5:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50315,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50301,
                        "src": "3750:2:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50316,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50303,
                        "src": "3754:5:48",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50313,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50442,
                      "src": "3733:9:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3733:27:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50318,
                  "nodeType": "ExpressionStatement",
                  "src": "3733:27:48"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 50319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3777:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 50307,
                  "id": 50320,
                  "nodeType": "Return",
                  "src": "3770:11:48"
                }
              ]
            },
            "baseFunctions": [
              50757
            ],
            "documentation": {
              "id": 50299,
              "nodeType": "StructuredDocumentation",
              "src": "3421:184:48",
              "text": " @dev See {IERC20-transfer}.\n Requirements:\n - `to` cannot be the zero address.\n - the caller must have a balance of at least `value`."
            },
            "functionSelector": "a9059cbb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "3619:8:48",
            "parameters": {
              "id": 50304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50301,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3636:2:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50322,
                  "src": "3628:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50300,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3628:7:48",
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
                  "id": 50303,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3648:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50322,
                  "src": "3640:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50302,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3640:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3627:27:48"
            },
            "returnParameters": {
              "id": 50307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50306,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50322,
                  "src": "3679:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50305,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3679:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3678:6:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50339,
            "nodeType": "FunctionDefinition",
            "src": "3846:140:48",
            "nodes": [],
            "body": {
              "id": 50338,
              "nodeType": "Block",
              "src": "3935:51:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "id": 50332,
                        "name": "_allowances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50226,
                        "src": "3952:11:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 50334,
                      "indexExpression": {
                        "id": 50333,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50325,
                        "src": "3964:5:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3952:18:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 50336,
                    "indexExpression": {
                      "id": 50335,
                      "name": "spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50327,
                      "src": "3971:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3952:27:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 50331,
                  "id": 50337,
                  "nodeType": "Return",
                  "src": "3945:34:48"
                }
              ]
            },
            "baseFunctions": [
              50767
            ],
            "documentation": {
              "id": 50323,
              "nodeType": "StructuredDocumentation",
              "src": "3794:47:48",
              "text": " @dev See {IERC20-allowance}."
            },
            "functionSelector": "dd62ed3e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "3855:9:48",
            "parameters": {
              "id": 50328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50325,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3873:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50339,
                  "src": "3865:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50324,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3865:7:48",
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
                  "id": 50327,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3888:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50339,
                  "src": "3880:15:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50326,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3880:7:48",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3864:32:48"
            },
            "returnParameters": {
              "id": 50331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50330,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50339,
                  "src": "3926:7:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50329,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3926:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3925:9:48"
            },
            "scope": 50712,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50363,
            "nodeType": "FunctionDefinition",
            "src": "4293:186:48",
            "nodes": [],
            "body": {
              "id": 50362,
              "nodeType": "Block",
              "src": "4372:107:48",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    50350
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50350,
                      "mutability": "mutable",
                      "name": "owner",
                      "nameLocation": "4390:5:48",
                      "nodeType": "VariableDeclaration",
                      "scope": 50362,
                      "src": "4382:13:48",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 50349,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4382:7:48",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50353,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 50351,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51316,
                      "src": "4398:10:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 50352,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4398:12:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4382:28:48"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50355,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50350,
                        "src": "4429:5:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50356,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50342,
                        "src": "4436:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50357,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50344,
                        "src": "4445:5:48",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50354,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        50603,
                        50663
                      ],
                      "referencedDeclaration": 50603,
                      "src": "4420:8:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50358,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4420:31:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50359,
                  "nodeType": "ExpressionStatement",
                  "src": "4420:31:48"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 50360,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4468:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 50348,
                  "id": 50361,
                  "nodeType": "Return",
                  "src": "4461:11:48"
                }
              ]
            },
            "baseFunctions": [
              50777
            ],
            "documentation": {
              "id": 50340,
              "nodeType": "StructuredDocumentation",
              "src": "3992:296:48",
              "text": " @dev See {IERC20-approve}.\n NOTE: If `value` is the maximum `uint256`, the allowance is not updated on\n `transferFrom`. This is semantically equivalent to an infinite approval.\n Requirements:\n - `spender` cannot be the zero address."
            },
            "functionSelector": "095ea7b3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "4302:7:48",
            "parameters": {
              "id": 50345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50342,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "4318:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50363,
                  "src": "4310:15:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50341,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4310:7:48",
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
                  "id": 50344,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4335:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50363,
                  "src": "4327:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50343,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4327:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4309:32:48"
            },
            "returnParameters": {
              "id": 50348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50347,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50363,
                  "src": "4366:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50346,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4366:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4365:6:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50395,
            "nodeType": "FunctionDefinition",
            "src": "5039:244:48",
            "nodes": [],
            "body": {
              "id": 50394,
              "nodeType": "Block",
              "src": "5132:151:48",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    50376
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50376,
                      "mutability": "mutable",
                      "name": "spender",
                      "nameLocation": "5150:7:48",
                      "nodeType": "VariableDeclaration",
                      "scope": 50394,
                      "src": "5142:15:48",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 50375,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5142:7:48",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50379,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 50377,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 51316,
                      "src": "5160:10:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 50378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5160:12:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5142:30:48"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50381,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50366,
                        "src": "5198:4:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50382,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50376,
                        "src": "5204:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50383,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50370,
                        "src": "5213:5:48",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50380,
                      "name": "_spendAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50711,
                      "src": "5182:15:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50384,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5182:37:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50385,
                  "nodeType": "ExpressionStatement",
                  "src": "5182:37:48"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50387,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50366,
                        "src": "5239:4:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50388,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50368,
                        "src": "5245:2:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50389,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50370,
                        "src": "5249:5:48",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50386,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50442,
                      "src": "5229:9:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5229:26:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50391,
                  "nodeType": "ExpressionStatement",
                  "src": "5229:26:48"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 50392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5272:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 50374,
                  "id": 50393,
                  "nodeType": "Return",
                  "src": "5265:11:48"
                }
              ]
            },
            "baseFunctions": [
              50789
            ],
            "documentation": {
              "id": 50364,
              "nodeType": "StructuredDocumentation",
              "src": "4485:549:48",
              "text": " @dev See {IERC20-transferFrom}.\n Emits an {Approval} event indicating the updated allowance. This is not\n required by the EIP. See the note at the beginning of {ERC20}.\n NOTE: Does not update the allowance if the current allowance\n is the maximum `uint256`.\n Requirements:\n - `from` and `to` cannot be the zero address.\n - `from` must have a balance of at least `value`.\n - the caller must have allowance for ``from``'s tokens of at least\n `value`."
            },
            "functionSelector": "23b872dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "5048:12:48",
            "parameters": {
              "id": 50371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50366,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "5069:4:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50395,
                  "src": "5061:12:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50365,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5061:7:48",
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
                  "id": 50368,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5083:2:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50395,
                  "src": "5075:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50367,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5075:7:48",
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
                  "id": 50370,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5095:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50395,
                  "src": "5087:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50369,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5087:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5060:41:48"
            },
            "returnParameters": {
              "id": 50374,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50373,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50395,
                  "src": "5126:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50372,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5126:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5125:6:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 50442,
            "nodeType": "FunctionDefinition",
            "src": "5656:300:48",
            "nodes": [],
            "body": {
              "id": 50441,
              "nodeType": "Block",
              "src": "5725:231:48",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 50410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50405,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50398,
                      "src": "5739:4:48",
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
                          "id": 50408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5755:1:48",
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
                        "id": 50407,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5747:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 50406,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5747:7:48",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50409,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5747:10:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5739:18:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50419,
                  "nodeType": "IfStatement",
                  "src": "5735:86:48",
                  "trueBody": {
                    "id": 50418,
                    "nodeType": "Block",
                    "src": "5759:62:48",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 50414,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5807:1:48",
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
                                "id": 50413,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5799:7:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 50412,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5799:7:48",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 50415,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5799:10:48",
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
                            "id": 50411,
                            "name": "ERC20InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49241,
                            "src": "5780:18:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 50416,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5780:30:48",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 50417,
                        "nodeType": "RevertStatement",
                        "src": "5773:37:48"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 50425,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50420,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50400,
                      "src": "5834:2:48",
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
                          "id": 50423,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5848:1:48",
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
                        "id": 50422,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5840:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 50421,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5840:7:48",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5840:10:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5834:16:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50434,
                  "nodeType": "IfStatement",
                  "src": "5830:86:48",
                  "trueBody": {
                    "id": 50433,
                    "nodeType": "Block",
                    "src": "5852:64:48",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 50429,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5902:1:48",
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
                                "id": 50428,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5894:7:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 50427,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5894:7:48",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 50430,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5894:10:48",
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
                            "id": 50426,
                            "name": "ERC20InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49246,
                            "src": "5873:20:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 50431,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5873:32:48",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 50432,
                        "nodeType": "RevertStatement",
                        "src": "5866:39:48"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50436,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50398,
                        "src": "5933:4:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50437,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50400,
                        "src": "5939:2:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50438,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50402,
                        "src": "5943:5:48",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50435,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50519,
                      "src": "5925:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5925:24:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50440,
                  "nodeType": "ExpressionStatement",
                  "src": "5925:24:48"
                }
              ]
            },
            "documentation": {
              "id": 50396,
              "nodeType": "StructuredDocumentation",
              "src": "5289:362:48",
              "text": " @dev Moves a `value` amount of tokens from `from` to `to`.\n This internal function is equivalent to {transfer}, and can be used to\n e.g. implement automatic token fees, slashing mechanisms, etc.\n Emits a {Transfer} event.\n NOTE: This function is not virtual, {_update} should be overridden instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_transfer",
            "nameLocation": "5665:9:48",
            "parameters": {
              "id": 50403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50398,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "5683:4:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50442,
                  "src": "5675:12:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50397,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5675:7:48",
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
                  "id": 50400,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5697:2:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50442,
                  "src": "5689:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50399,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5689:7:48",
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
                  "id": 50402,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5709:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50442,
                  "src": "5701:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50401,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5701:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5674:41:48"
            },
            "returnParameters": {
              "id": 50404,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5725:0:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50519,
            "nodeType": "FunctionDefinition",
            "src": "6271:1107:48",
            "nodes": [],
            "body": {
              "id": 50518,
              "nodeType": "Block",
              "src": "6346:1032:48",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 50457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50452,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50445,
                      "src": "6360:4:48",
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
                          "id": 50455,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6376:1:48",
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
                        "id": 50454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6368:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 50453,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6368:7:48",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50456,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6368:10:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6360:18:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 50489,
                    "nodeType": "Block",
                    "src": "6534:362:48",
                    "statements": [
                      {
                        "assignments": [
                          50464
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 50464,
                            "mutability": "mutable",
                            "name": "fromBalance",
                            "nameLocation": "6556:11:48",
                            "nodeType": "VariableDeclaration",
                            "scope": 50489,
                            "src": "6548:19:48",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 50463,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6548:7:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 50468,
                        "initialValue": {
                          "baseExpression": {
                            "id": 50465,
                            "name": "_balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50220,
                            "src": "6570:9:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 50467,
                          "indexExpression": {
                            "id": 50466,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50445,
                            "src": "6580:4:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6570:15:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6548:37:48"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 50471,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 50469,
                            "name": "fromBalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50464,
                            "src": "6603:11:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 50470,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50449,
                            "src": "6617:5:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6603:19:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 50479,
                        "nodeType": "IfStatement",
                        "src": "6599:115:48",
                        "trueBody": {
                          "id": 50478,
                          "nodeType": "Block",
                          "src": "6624:90:48",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 50473,
                                    "name": "from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50445,
                                    "src": "6674:4:48",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 50474,
                                    "name": "fromBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50464,
                                    "src": "6680:11:48",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 50475,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50449,
                                    "src": "6693:5:48",
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
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 50472,
                                  "name": "ERC20InsufficientBalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 49236,
                                  "src": "6649:24:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256,uint256) pure"
                                  }
                                },
                                "id": 50476,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6649:50:48",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 50477,
                              "nodeType": "RevertStatement",
                              "src": "6642:57:48"
                            }
                          ]
                        }
                      },
                      {
                        "id": 50488,
                        "nodeType": "UncheckedBlock",
                        "src": "6727:159:48",
                        "statements": [
                          {
                            "expression": {
                              "id": 50486,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "id": 50480,
                                  "name": "_balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50220,
                                  "src": "6834:9:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 50482,
                                "indexExpression": {
                                  "id": 50481,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50445,
                                  "src": "6844:4:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "6834:15:48",
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
                                "id": 50485,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 50483,
                                  "name": "fromBalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50464,
                                  "src": "6852:11:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 50484,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50449,
                                  "src": "6866:5:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "6852:19:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "6834:37:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 50487,
                            "nodeType": "ExpressionStatement",
                            "src": "6834:37:48"
                          }
                        ]
                      }
                    ]
                  },
                  "id": 50490,
                  "nodeType": "IfStatement",
                  "src": "6356:540:48",
                  "trueBody": {
                    "id": 50462,
                    "nodeType": "Block",
                    "src": "6380:148:48",
                    "statements": [
                      {
                        "expression": {
                          "id": 50460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 50458,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50228,
                            "src": "6496:12:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 50459,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50449,
                            "src": "6512:5:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6496:21:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 50461,
                        "nodeType": "ExpressionStatement",
                        "src": "6496:21:48"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 50496,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50491,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50447,
                      "src": "6910:2:48",
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
                          "id": 50494,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6924:1:48",
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
                        "id": 50493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6916:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 50492,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6916:7:48",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6916:10:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6910:16:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 50510,
                    "nodeType": "Block",
                    "src": "7125:206:48",
                    "statements": [
                      {
                        "id": 50509,
                        "nodeType": "UncheckedBlock",
                        "src": "7139:182:48",
                        "statements": [
                          {
                            "expression": {
                              "id": 50507,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "id": 50503,
                                  "name": "_balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50220,
                                  "src": "7284:9:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 50505,
                                "indexExpression": {
                                  "id": 50504,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50447,
                                  "src": "7294:2:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "7284:13:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "id": 50506,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50449,
                                "src": "7301:5:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7284:22:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 50508,
                            "nodeType": "ExpressionStatement",
                            "src": "7284:22:48"
                          }
                        ]
                      }
                    ]
                  },
                  "id": 50511,
                  "nodeType": "IfStatement",
                  "src": "6906:425:48",
                  "trueBody": {
                    "id": 50502,
                    "nodeType": "Block",
                    "src": "6928:191:48",
                    "statements": [
                      {
                        "id": 50501,
                        "nodeType": "UncheckedBlock",
                        "src": "6942:167:48",
                        "statements": [
                          {
                            "expression": {
                              "id": 50499,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 50497,
                                "name": "_totalSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50228,
                                "src": "7073:12:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "-=",
                              "rightHandSide": {
                                "id": 50498,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50449,
                                "src": "7089:5:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7073:21:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 50500,
                            "nodeType": "ExpressionStatement",
                            "src": "7073:21:48"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 50513,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50445,
                        "src": "7355:4:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50514,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50447,
                        "src": "7361:2:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50515,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50449,
                        "src": "7365:5:48",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50512,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50724,
                      "src": "7346:8:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50516,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7346:25:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50517,
                  "nodeType": "EmitStatement",
                  "src": "7341:30:48"
                }
              ]
            },
            "documentation": {
              "id": 50443,
              "nodeType": "StructuredDocumentation",
              "src": "5962:304:48",
              "text": " @dev Transfers a `value` amount of tokens from `from` to `to`, or alternatively mints (or burns) if `from`\n (or `to`) is the zero address. All customizations to transfers, mints, and burns should be done by overriding\n this function.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_update",
            "nameLocation": "6280:7:48",
            "parameters": {
              "id": 50450,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50445,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6296:4:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50519,
                  "src": "6288:12:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50444,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6288:7:48",
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
                  "id": 50447,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6310:2:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50519,
                  "src": "6302:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50446,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6302:7:48",
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
                  "id": 50449,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6322:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50519,
                  "src": "6314:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50448,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6314:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6287:41:48"
            },
            "returnParameters": {
              "id": 50451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6346:0:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 50552,
            "nodeType": "FunctionDefinition",
            "src": "7721:208:48",
            "nodes": [],
            "body": {
              "id": 50551,
              "nodeType": "Block",
              "src": "7777:152:48",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 50532,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50527,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50522,
                      "src": "7791:7:48",
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
                          "id": 50530,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7810:1:48",
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
                        "id": 50529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7802:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 50528,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "7802:7:48",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50531,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7802:10:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7791:21:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50541,
                  "nodeType": "IfStatement",
                  "src": "7787:91:48",
                  "trueBody": {
                    "id": 50540,
                    "nodeType": "Block",
                    "src": "7814:64:48",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 50536,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7864:1:48",
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
                                "id": 50535,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7856:7:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 50534,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7856:7:48",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 50537,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7856:10:48",
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
                            "id": 50533,
                            "name": "ERC20InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49246,
                            "src": "7835:20:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 50538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7835:32:48",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 50539,
                        "nodeType": "RevertStatement",
                        "src": "7828:39:48"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 50545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7903:1:48",
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
                          "id": 50544,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7895:7:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 50543,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "7895:7:48",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 50546,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7895:10:48",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50547,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50522,
                        "src": "7907:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50548,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50524,
                        "src": "7916:5:48",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50542,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50519,
                      "src": "7887:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7887:35:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50550,
                  "nodeType": "ExpressionStatement",
                  "src": "7887:35:48"
                }
              ]
            },
            "documentation": {
              "id": 50520,
              "nodeType": "StructuredDocumentation",
              "src": "7384:332:48",
              "text": " @dev Creates a `value` amount of tokens and assigns them to `account`, by transferring it from address(0).\n Relies on the `_update` mechanism\n Emits a {Transfer} event with `from` set to the zero address.\n NOTE: This function is not virtual, {_update} should be overridden instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mint",
            "nameLocation": "7730:5:48",
            "parameters": {
              "id": 50525,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50522,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "7744:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50552,
                  "src": "7736:15:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50521,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7736:7:48",
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
                  "id": 50524,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "7761:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50552,
                  "src": "7753:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50523,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7753:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7735:32:48"
            },
            "returnParameters": {
              "id": 50526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7777:0:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50585,
            "nodeType": "FunctionDefinition",
            "src": "8247:206:48",
            "nodes": [],
            "body": {
              "id": 50584,
              "nodeType": "Block",
              "src": "8303:150:48",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 50565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50560,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50555,
                      "src": "8317:7:48",
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
                          "id": 50563,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8336:1:48",
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
                        "id": 50562,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8328:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 50561,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "8328:7:48",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50564,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8328:10:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8317:21:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50574,
                  "nodeType": "IfStatement",
                  "src": "8313:89:48",
                  "trueBody": {
                    "id": 50573,
                    "nodeType": "Block",
                    "src": "8340:62:48",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 50569,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "8388:1:48",
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
                                "id": 50568,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "8380:7:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 50567,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "8380:7:48",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 50570,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8380:10:48",
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
                            "id": 50566,
                            "name": "ERC20InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49241,
                            "src": "8361:18:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 50571,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8361:30:48",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 50572,
                        "nodeType": "RevertStatement",
                        "src": "8354:37:48"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50576,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50555,
                        "src": "8419:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 50579,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8436:1:48",
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
                          "id": 50578,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8428:7:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 50577,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8428:7:48",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 50580,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8428:10:48",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50581,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50557,
                        "src": "8440:5:48",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50575,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50519,
                      "src": "8411:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8411:35:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50583,
                  "nodeType": "ExpressionStatement",
                  "src": "8411:35:48"
                }
              ]
            },
            "documentation": {
              "id": 50553,
              "nodeType": "StructuredDocumentation",
              "src": "7935:307:48",
              "text": " @dev Destroys a `value` amount of tokens from `account`, lowering the total supply.\n Relies on the `_update` mechanism.\n Emits a {Transfer} event with `to` set to the zero address.\n NOTE: This function is not virtual, {_update} should be overridden instead"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "8256:5:48",
            "parameters": {
              "id": 50558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50555,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "8270:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50585,
                  "src": "8262:15:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50554,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8262:7:48",
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
                  "id": 50557,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8287:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50585,
                  "src": "8279:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50556,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8279:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8261:32:48"
            },
            "returnParameters": {
              "id": 50559,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8303:0:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50603,
            "nodeType": "FunctionDefinition",
            "src": "8989:128:48",
            "nodes": [],
            "body": {
              "id": 50602,
              "nodeType": "Block",
              "src": "9063:54:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50596,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50588,
                        "src": "9082:5:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50597,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50590,
                        "src": "9089:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50598,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50592,
                        "src": "9098:5:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 50599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9105:4:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 50595,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        50603,
                        50663
                      ],
                      "referencedDeclaration": 50663,
                      "src": "9073:8:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,uint256,bool)"
                      }
                    },
                    "id": 50600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9073:37:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50601,
                  "nodeType": "ExpressionStatement",
                  "src": "9073:37:48"
                }
              ]
            },
            "documentation": {
              "id": 50586,
              "nodeType": "StructuredDocumentation",
              "src": "8459:525:48",
              "text": " @dev Sets `value` as the allowance of `spender` over the `owner` s tokens.\n This internal function is equivalent to `approve`, and can be used to\n e.g. set automatic allowances for certain subsystems, etc.\n Emits an {Approval} event.\n Requirements:\n - `owner` cannot be the zero address.\n - `spender` cannot be the zero address.\n Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "8998:8:48",
            "parameters": {
              "id": 50593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50588,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "9015:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50603,
                  "src": "9007:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50587,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9007:7:48",
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
                  "id": 50590,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "9030:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50603,
                  "src": "9022:15:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50589,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9022:7:48",
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
                  "id": 50592,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9047:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50603,
                  "src": "9039:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50591,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9039:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9006:47:48"
            },
            "returnParameters": {
              "id": 50594,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9063:0:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 50663,
            "nodeType": "FunctionDefinition",
            "src": "9949:432:48",
            "nodes": [],
            "body": {
              "id": 50662,
              "nodeType": "Block",
              "src": "10047:334:48",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 50620,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50615,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50606,
                      "src": "10061:5:48",
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
                          "id": 50618,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10078:1:48",
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
                        "id": 50617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10070:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 50616,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10070:7:48",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10070:10:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10061:19:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50629,
                  "nodeType": "IfStatement",
                  "src": "10057:89:48",
                  "trueBody": {
                    "id": 50628,
                    "nodeType": "Block",
                    "src": "10082:64:48",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 50624,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10132:1:48",
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
                                "id": 50623,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10124:7:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 50622,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10124:7:48",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 50625,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10124:10:48",
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
                            "id": 50621,
                            "name": "ERC20InvalidApprover",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49260,
                            "src": "10103:20:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 50626,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10103:32:48",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 50627,
                        "nodeType": "RevertStatement",
                        "src": "10096:39:48"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 50635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50630,
                      "name": "spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50608,
                      "src": "10159:7:48",
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
                          "id": 50633,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10178:1:48",
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
                        "id": 50632,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10170:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 50631,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10170:7:48",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50634,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10170:10:48",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10159:21:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50644,
                  "nodeType": "IfStatement",
                  "src": "10155:90:48",
                  "trueBody": {
                    "id": 50643,
                    "nodeType": "Block",
                    "src": "10182:63:48",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 50639,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10231:1:48",
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
                                "id": 50638,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10223:7:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 50637,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10223:7:48",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 50640,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10223:10:48",
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
                            "id": 50636,
                            "name": "ERC20InvalidSpender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49265,
                            "src": "10203:19:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$__$",
                              "typeString": "function (address) pure"
                            }
                          },
                          "id": 50641,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10203:31:48",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 50642,
                        "nodeType": "RevertStatement",
                        "src": "10196:38:48"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 50651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 50645,
                          "name": "_allowances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50226,
                          "src": "10254:11:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 50648,
                        "indexExpression": {
                          "id": 50646,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50606,
                          "src": "10266:5:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10254:18:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 50649,
                      "indexExpression": {
                        "id": 50647,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50608,
                        "src": "10273:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10254:27:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50650,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50610,
                      "src": "10284:5:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10254:35:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50652,
                  "nodeType": "ExpressionStatement",
                  "src": "10254:35:48"
                },
                {
                  "condition": {
                    "id": 50653,
                    "name": "emitEvent",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 50612,
                    "src": "10303:9:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50661,
                  "nodeType": "IfStatement",
                  "src": "10299:76:48",
                  "trueBody": {
                    "id": 50660,
                    "nodeType": "Block",
                    "src": "10314:61:48",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 50655,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50606,
                              "src": "10342:5:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 50656,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50608,
                              "src": "10349:7:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 50657,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50610,
                              "src": "10358:5:48",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 50654,
                            "name": "Approval",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50733,
                            "src": "10333:8:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 50658,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10333:31:48",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 50659,
                        "nodeType": "EmitStatement",
                        "src": "10328:36:48"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 50604,
              "nodeType": "StructuredDocumentation",
              "src": "9123:821:48",
              "text": " @dev Variant of {_approve} with an optional flag to enable or disable the {Approval} event.\n By default (when calling {_approve}) the flag is set to true. On the other hand, approval changes made by\n `_spendAllowance` during the `transferFrom` operation set the flag to false. This saves gas by not emitting any\n `Approval` event during `transferFrom` operations.\n Anyone who wishes to continue emitting `Approval` events on the`transferFrom` operation can force the flag to\n true using the following override:\n ```\n function _approve(address owner, address spender, uint256 value, bool) internal virtual override {\n     super._approve(owner, spender, value, true);\n }\n ```\n Requirements are the same as {_approve}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "9958:8:48",
            "parameters": {
              "id": 50613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50606,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "9975:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50663,
                  "src": "9967:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50605,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9967:7:48",
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
                  "id": 50608,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "9990:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50663,
                  "src": "9982:15:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50607,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9982:7:48",
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
                  "id": 50610,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10007:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50663,
                  "src": "9999:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9999:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50612,
                  "mutability": "mutable",
                  "name": "emitEvent",
                  "nameLocation": "10019:9:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50663,
                  "src": "10014:14:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 50611,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10014:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9966:63:48"
            },
            "returnParameters": {
              "id": 50614,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10047:0:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 50711,
            "nodeType": "FunctionDefinition",
            "src": "10663:477:48",
            "nodes": [],
            "body": {
              "id": 50710,
              "nodeType": "Block",
              "src": "10752:388:48",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    50674
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50674,
                      "mutability": "mutable",
                      "name": "currentAllowance",
                      "nameLocation": "10770:16:48",
                      "nodeType": "VariableDeclaration",
                      "scope": 50710,
                      "src": "10762:24:48",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 50673,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10762:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50679,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 50676,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50666,
                        "src": "10799:5:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50677,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50668,
                        "src": "10806:7:48",
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 50675,
                      "name": "allowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50339,
                      "src": "10789:9:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view returns (uint256)"
                      }
                    },
                    "id": 50678,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10789:25:48",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10762:52:48"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 50686,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50680,
                      "name": "currentAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50674,
                      "src": "10828:16:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 50683,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10853:7:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 50682,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10853:7:48",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            }
                          ],
                          "id": 50681,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "10848:4:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 50684,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10848:13:48",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint256",
                          "typeString": "type(uint256)"
                        }
                      },
                      "id": 50685,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "10862:3:48",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "10848:17:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10828:37:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50709,
                  "nodeType": "IfStatement",
                  "src": "10824:310:48",
                  "trueBody": {
                    "id": 50708,
                    "nodeType": "Block",
                    "src": "10867:267:48",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 50689,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 50687,
                            "name": "currentAllowance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50674,
                            "src": "10885:16:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 50688,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50670,
                            "src": "10904:5:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10885:24:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 50697,
                        "nodeType": "IfStatement",
                        "src": "10881:130:48",
                        "trueBody": {
                          "id": 50696,
                          "nodeType": "Block",
                          "src": "10911:100:48",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 50691,
                                    "name": "spender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50668,
                                    "src": "10963:7:48",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 50692,
                                    "name": "currentAllowance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50674,
                                    "src": "10972:16:48",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 50693,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50670,
                                    "src": "10990:5:48",
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
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 50690,
                                  "name": "ERC20InsufficientAllowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 49255,
                                  "src": "10936:26:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256,uint256) pure"
                                  }
                                },
                                "id": 50694,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10936:60:48",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 50695,
                              "nodeType": "RevertStatement",
                              "src": "10929:67:48"
                            }
                          ]
                        }
                      },
                      {
                        "id": 50707,
                        "nodeType": "UncheckedBlock",
                        "src": "11024:100:48",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 50699,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50666,
                                  "src": "11061:5:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 50700,
                                  "name": "spender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50668,
                                  "src": "11068:7:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 50703,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 50701,
                                    "name": "currentAllowance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50674,
                                    "src": "11077:16:48",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "id": 50702,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 50670,
                                    "src": "11096:5:48",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "11077:24:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "hexValue": "66616c7365",
                                  "id": 50704,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11103:5:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "false"
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
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                ],
                                "id": 50698,
                                "name": "_approve",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  50603,
                                  50663
                                ],
                                "referencedDeclaration": 50663,
                                "src": "11052:8:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bool_$returns$__$",
                                  "typeString": "function (address,address,uint256,bool)"
                                }
                              },
                              "id": 50705,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11052:57:48",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 50706,
                            "nodeType": "ExpressionStatement",
                            "src": "11052:57:48"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 50664,
              "nodeType": "StructuredDocumentation",
              "src": "10387:271:48",
              "text": " @dev Updates `owner` s allowance for `spender` based on spent `value`.\n Does not update the allowance value in case of infinite allowance.\n Revert if not enough allowance is available.\n Does not emit an {Approval} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_spendAllowance",
            "nameLocation": "10672:15:48",
            "parameters": {
              "id": 50671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50666,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "10696:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50711,
                  "src": "10688:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50665,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10688:7:48",
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
                  "id": 50668,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "10711:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50711,
                  "src": "10703:15:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50667,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10703:7:48",
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
                  "id": 50670,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10728:5:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 50711,
                  "src": "10720:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50669,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10720:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10687:47:48"
            },
            "returnParameters": {
              "id": 50672,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10752:0:48"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 50209,
              "name": "Context",
              "nameLocations": [
                "1428:7:48"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 51334,
              "src": "1428:7:48"
            },
            "id": 50210,
            "nodeType": "InheritanceSpecifier",
            "src": "1428:7:48"
          },
          {
            "baseName": {
              "id": 50211,
              "name": "IERC20",
              "nameLocations": [
                "1437:6:48"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 50790,
              "src": "1437:6:48"
            },
            "id": 50212,
            "nodeType": "InheritanceSpecifier",
            "src": "1437:6:48"
          },
          {
            "baseName": {
              "id": 50213,
              "name": "IERC20Metadata",
              "nameLocations": [
                "1445:14:48"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 50970,
              "src": "1445:14:48"
            },
            "id": 50214,
            "nodeType": "InheritanceSpecifier",
            "src": "1445:14:48"
          },
          {
            "baseName": {
              "id": 50215,
              "name": "IERC20Errors",
              "nameLocations": [
                "1461:12:48"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 49266,
              "src": "1461:12:48"
            },
            "id": 50216,
            "nodeType": "InheritanceSpecifier",
            "src": "1461:12:48"
          }
        ],
        "canonicalName": "ERC20",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 50208,
          "nodeType": "StructuredDocumentation",
          "src": "348:1052:48",
          "text": " @dev Implementation of the {IERC20} interface.\n This implementation is agnostic to the way tokens are created. This means\n that a supply mechanism has to be added in a derived contract using {_mint}.\n TIP: For a detailed writeup see our guide\n https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How\n to implement supply mechanisms].\n The default value of {decimals} is 18. To change this, you should override\n this function so it returns a different value.\n We have followed general OpenZeppelin Contracts guidelines: functions revert\n instead returning `false` on failure. This behavior is nonetheless\n conventional and does not conflict with the expectations of ERC20\n applications.\n Additionally, an {Approval} event is emitted on calls to {transferFrom}.\n This allows applications to reconstruct the allowance for all accounts just\n by listening to said events. Other implementations of the EIP may not emit\n these events, as it isn't required by the specification."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          50712,
          49266,
          50970,
          50790,
          51334
        ],
        "name": "ERC20",
        "nameLocation": "1419:5:48",
        "scope": 50713,
        "usedErrors": [
          49236,
          49241,
          49246,
          49255,
          49260,
          49265
        ],
        "usedEvents": [
          50724,
          50733
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 48
} as const;