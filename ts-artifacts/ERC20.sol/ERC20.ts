export const ERC20 = {
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
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "decimals()": "313ce567",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AllowanceOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"AllowanceUnderflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPermit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PermitExpired\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TotalSupplyOverflow\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"result\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/tokens/ERC20.sol)Modified from Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)Modified from OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)\",\"details\":\"Note: - The ERC20 standard allows minting and transferring to and from the zero address,   minting and transferring zero tokens, as well as self-approvals.   For performance, this implementation WILL NOT revert for such actions.   Please add any checks with overrides if desired. - The `permit` function uses the ecrecover precompile (0x1). If you are overriding: - NEVER violate the ERC20 invariant:   the total sum of all balances must be equal to `totalSupply()`. - Check that the overridden function is actually used in the function you want to   change the behavior of. Much of the code has been manually inlined for performance.\",\"errors\":{\"AllowanceOverflow()\":[{\"details\":\"The allowance has overflowed.\"}],\"AllowanceUnderflow()\":[{\"details\":\"The allowance has underflowed.\"}],\"InsufficientAllowance()\":[{\"details\":\"Insufficient allowance.\"}],\"InsufficientBalance()\":[{\"details\":\"Insufficient balance.\"}],\"InvalidPermit()\":[{\"details\":\"The permit is invalid.\"}],\"PermitExpired()\":[{\"details\":\"The permit has expired.\"}],\"TotalSupplyOverflow()\":[{\"details\":\"The total supply has overflowed.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `amount` tokens is approved by `owner` to be used by `spender`.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `amount` tokens is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"details\":\"Returns the EIP-712 domain separator for the EIP-2612 permit.\"},\"allowance(address,address)\":{\"details\":\"Returns the amount of tokens that `spender` can spend on behalf of `owner`.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Emits a {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `owner`.\"},\"decimals()\":{\"details\":\"Returns the decimals places of the token.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"nonces(address)\":{\"details\":\"Returns the current nonce for `owner`. This value is used to compute the signature for EIP-2612 permit.\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"details\":\"Sets `value` as the allowance of `spender` over the tokens of `owner`, authorized by a signed approval by `owner`. Emits a {Approval} event.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Transfer `amount` tokens from the caller to `to`. Requirements: - `from` must at least have `amount`. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `amount` tokens from `from` to `to`. Note: Does not update the allowance if it is the maximum uint256 value. Requirements: - `from` must at least have `amount`. - The caller must have at least `amount` of allowance to transfer the tokens of `from`. Emits a {Transfer} event.\"}},\"stateVariables\":{\"_ALLOWANCE_SLOT_SEED\":{\"details\":\"The allowance slot of (`owner`, `spender`) is given by: ```     mstore(0x20, spender)     mstore(0x0c, _ALLOWANCE_SLOT_SEED)     mstore(0x00, owner)     let allowanceSlot := keccak256(0x0c, 0x34) ```\"},\"_APPROVAL_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"Approval(address,address,uint256)\\\"))`.\"},\"_BALANCE_SLOT_SEED\":{\"details\":\"The balance slot of `owner` is given by: ```     mstore(0x0c, _BALANCE_SLOT_SEED)     mstore(0x00, owner)     let balanceSlot := keccak256(0x0c, 0x20) ```\"},\"_DOMAIN_TYPEHASH\":{\"details\":\"`keccak256(\\\"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\\\")`.\"},\"_NONCES_SLOT_SEED\":{\"details\":\"The nonce slot of `owner` is given by: ```     mstore(0x0c, _NONCES_SLOT_SEED)     mstore(0x00, owner)     let nonceSlot := keccak256(0x0c, 0x20) ```\"},\"_NONCES_SLOT_SEED_WITH_SIGNATURE_PREFIX\":{\"details\":\"`(_NONCES_SLOT_SEED << 16) | 0x1901`.\"},\"_PERMIT_TYPEHASH\":{\"details\":\"`keccak256(\\\"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\\\")`.\"},\"_TOTAL_SUPPLY_SLOT\":{\"details\":\"The storage slot for the total supply.\"},\"_TRANSFER_EVENT_SIGNATURE\":{\"details\":\"`keccak256(bytes(\\\"Transfer(address,address,uint256)\\\"))`.\"},\"_VERSION_HASH\":{\"details\":\"`keccak256(\\\"1\\\")`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Simple ERC20 + EIP-2612 implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/tokens/ERC20.sol\":\"ERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/tokens/ERC20.sol\":{\"keccak256\":\"0xb4a3f9ba8a05107f7370de42cff57f3ad26dafd438712c11531a5892de2f59e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f0a9ca06e3cf6dea1f9a4c5599581573b7d81cd64dc3afb582f325ccf5fdd6dc\",\"dweb:/ipfs/Qmb9r5dDceNF4W8S5u6i85RsNTgE5XG9HbTXkyS25ad3C6\"]}},\"version\":1}",
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
        "node_modules/solady/src/tokens/ERC20.sol": "ERC20"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/tokens/ERC20.sol",
    "id": 56070,
    "exportedSymbols": {
      "ERC20": [
        56069
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:24852:71",
    "nodes": [
      {
        "id": 55652,
        "nodeType": "PragmaDirective",
        "src": "32:23:71",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 56069,
        "nodeType": "ContractDefinition",
        "src": "1140:23743:71",
        "nodes": [
          {
            "id": 55656,
            "nodeType": "ErrorDefinition",
            "src": "1499:28:71",
            "nodes": [],
            "documentation": {
              "id": 55654,
              "nodeType": "StructuredDocumentation",
              "src": "1453:41:71",
              "text": "@dev The total supply has overflowed."
            },
            "errorSelector": "e5cfe957",
            "name": "TotalSupplyOverflow",
            "nameLocation": "1505:19:71",
            "parameters": {
              "id": 55655,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1524:2:71"
            }
          },
          {
            "id": 55659,
            "nodeType": "ErrorDefinition",
            "src": "1576:26:71",
            "nodes": [],
            "documentation": {
              "id": 55657,
              "nodeType": "StructuredDocumentation",
              "src": "1533:38:71",
              "text": "@dev The allowance has overflowed."
            },
            "errorSelector": "f9067066",
            "name": "AllowanceOverflow",
            "nameLocation": "1582:17:71",
            "parameters": {
              "id": 55658,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1599:2:71"
            }
          },
          {
            "id": 55662,
            "nodeType": "ErrorDefinition",
            "src": "1652:27:71",
            "nodes": [],
            "documentation": {
              "id": 55660,
              "nodeType": "StructuredDocumentation",
              "src": "1608:39:71",
              "text": "@dev The allowance has underflowed."
            },
            "errorSelector": "8301ab38",
            "name": "AllowanceUnderflow",
            "nameLocation": "1658:18:71",
            "parameters": {
              "id": 55661,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1676:2:71"
            }
          },
          {
            "id": 55665,
            "nodeType": "ErrorDefinition",
            "src": "1720:28:71",
            "nodes": [],
            "documentation": {
              "id": 55663,
              "nodeType": "StructuredDocumentation",
              "src": "1685:30:71",
              "text": "@dev Insufficient balance."
            },
            "errorSelector": "f4d678b8",
            "name": "InsufficientBalance",
            "nameLocation": "1726:19:71",
            "parameters": {
              "id": 55664,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1745:2:71"
            }
          },
          {
            "id": 55668,
            "nodeType": "ErrorDefinition",
            "src": "1791:30:71",
            "nodes": [],
            "documentation": {
              "id": 55666,
              "nodeType": "StructuredDocumentation",
              "src": "1754:32:71",
              "text": "@dev Insufficient allowance."
            },
            "errorSelector": "13be252b",
            "name": "InsufficientAllowance",
            "nameLocation": "1797:21:71",
            "parameters": {
              "id": 55667,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1818:2:71"
            }
          },
          {
            "id": 55671,
            "nodeType": "ErrorDefinition",
            "src": "1863:22:71",
            "nodes": [],
            "documentation": {
              "id": 55669,
              "nodeType": "StructuredDocumentation",
              "src": "1827:31:71",
              "text": "@dev The permit is invalid."
            },
            "errorSelector": "ddafbaef",
            "name": "InvalidPermit",
            "nameLocation": "1869:13:71",
            "parameters": {
              "id": 55670,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1882:2:71"
            }
          },
          {
            "id": 55674,
            "nodeType": "ErrorDefinition",
            "src": "1928:22:71",
            "nodes": [],
            "documentation": {
              "id": 55672,
              "nodeType": "StructuredDocumentation",
              "src": "1891:32:71",
              "text": "@dev The permit has expired."
            },
            "errorSelector": "1a15a3cc",
            "name": "PermitExpired",
            "nameLocation": "1934:13:71",
            "parameters": {
              "id": 55673,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1947:2:71"
            }
          },
          {
            "id": 55683,
            "nodeType": "EventDefinition",
            "src": "2317:73:71",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 55675,
              "nodeType": "StructuredDocumentation",
              "src": "2239:73:71",
              "text": "@dev Emitted when `amount` tokens is transferred from `from` to `to`."
            },
            "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "name": "Transfer",
            "nameLocation": "2323:8:71",
            "parameters": {
              "id": 55682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55677,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2348:4:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55683,
                  "src": "2332:20:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2332:7:71",
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
                  "id": 55679,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2370:2:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55683,
                  "src": "2354:18:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55678,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2354:7:71",
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
                  "id": 55681,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2382:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55683,
                  "src": "2374:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2374:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2331:58:71"
            }
          },
          {
            "id": 55692,
            "nodeType": "EventDefinition",
            "src": "2486:79:71",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 55684,
              "nodeType": "StructuredDocumentation",
              "src": "2396:85:71",
              "text": "@dev Emitted when `amount` tokens is approved by `owner` to be used by `spender`."
            },
            "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "name": "Approval",
            "nameLocation": "2492:8:71",
            "parameters": {
              "id": 55691,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55686,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2517:5:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55692,
                  "src": "2501:21:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55685,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2501:7:71",
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
                  "id": 55688,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2540:7:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55692,
                  "src": "2524:23:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55687,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2524:7:71",
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
                  "id": 55690,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2557:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55692,
                  "src": "2549:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55689,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2549:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2500:64:71"
            }
          },
          {
            "id": 55696,
            "nodeType": "VariableDeclaration",
            "src": "2641:127:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55693,
              "nodeType": "StructuredDocumentation",
              "src": "2571:65:71",
              "text": "@dev `keccak256(bytes(\"Transfer(address,address,uint256)\"))`."
            },
            "mutability": "constant",
            "name": "_TRANSFER_EVENT_SIGNATURE",
            "nameLocation": "2666:25:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55694,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2641:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307864646632353261643162653263383962363963326230363866633337386461613935326261376631363363346131313632386635356134646635323362336566",
              "id": 55695,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2702:66:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100389287136786176327247604509743168900146139575972864366142685224231313322991_by_1",
                "typeString": "int_const 1003...(70 digits omitted)...2991"
              },
              "value": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
            },
            "visibility": "private"
          },
          {
            "id": 55700,
            "nodeType": "VariableDeclaration",
            "src": "2845:127:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55697,
              "nodeType": "StructuredDocumentation",
              "src": "2775:65:71",
              "text": "@dev `keccak256(bytes(\"Approval(address,address,uint256)\"))`."
            },
            "mutability": "constant",
            "name": "_APPROVAL_EVENT_SIGNATURE",
            "nameLocation": "2870:25:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55698,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2845:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "307838633562653165356562656337643562643134663731343237643165383466336464303331346330663762323239316535623230306163386337633362393235",
              "id": 55699,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2906:66:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_63486140976153616755203102783360879283472101686154884697241723088393386309925_by_1",
                "typeString": "int_const 6348...(69 digits omitted)...9925"
              },
              "value": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
            },
            "visibility": "private"
          },
          {
            "id": 55704,
            "nodeType": "VariableDeclaration",
            "src": "3314:66:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55701,
              "nodeType": "StructuredDocumentation",
              "src": "3262:47:71",
              "text": "@dev The storage slot for the total supply."
            },
            "mutability": "constant",
            "name": "_TOTAL_SUPPLY_SLOT",
            "nameLocation": "3339:18:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55702,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3314:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "3078303533343563646637376562363866343463",
              "id": 55703,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3360:20:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_96006856662521017420_by_1",
                "typeString": "int_const 96006856662521017420"
              },
              "value": "0x05345cdf77eb68f44c"
            },
            "visibility": "private"
          },
          {
            "id": 55708,
            "nodeType": "VariableDeclaration",
            "src": "3595:56:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55705,
              "nodeType": "StructuredDocumentation",
              "src": "3387:203:71",
              "text": "@dev The balance slot of `owner` is given by:\n ```\n     mstore(0x0c, _BALANCE_SLOT_SEED)\n     mstore(0x00, owner)\n     let balanceSlot := keccak256(0x0c, 0x20)\n ```"
            },
            "mutability": "constant",
            "name": "_BALANCE_SLOT_SEED",
            "nameLocation": "3620:18:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55706,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3595:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783837613231316132",
              "id": 55707,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3641:10:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2275545506_by_1",
                "typeString": "int_const 2275545506"
              },
              "value": "0x87a211a2"
            },
            "visibility": "private"
          },
          {
            "id": 55712,
            "nodeType": "VariableDeclaration",
            "src": "3919:58:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55709,
              "nodeType": "StructuredDocumentation",
              "src": "3658:256:71",
              "text": "@dev The allowance slot of (`owner`, `spender`) is given by:\n ```\n     mstore(0x20, spender)\n     mstore(0x0c, _ALLOWANCE_SLOT_SEED)\n     mstore(0x00, owner)\n     let allowanceSlot := keccak256(0x0c, 0x34)\n ```"
            },
            "mutability": "constant",
            "name": "_ALLOWANCE_SLOT_SEED",
            "nameLocation": "3944:20:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55710,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3919:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783766356539663230",
              "id": 55711,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3967:10:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2136907552_by_1",
                "typeString": "int_const 2136907552"
              },
              "value": "0x7f5e9f20"
            },
            "visibility": "private"
          },
          {
            "id": 55716,
            "nodeType": "VariableDeclaration",
            "src": "4187:55:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55713,
              "nodeType": "StructuredDocumentation",
              "src": "3984:198:71",
              "text": "@dev The nonce slot of `owner` is given by:\n ```\n     mstore(0x0c, _NONCES_SLOT_SEED)\n     mstore(0x00, owner)\n     let nonceSlot := keccak256(0x0c, 0x20)\n ```"
            },
            "mutability": "constant",
            "name": "_NONCES_SLOT_SEED",
            "nameLocation": "4212:17:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55714,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "4187:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783338333737353038",
              "id": 55715,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4232:10:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_943158536_by_1",
                "typeString": "int_const 943158536"
              },
              "value": "0x38377508"
            },
            "visibility": "private"
          },
          {
            "id": 55720,
            "nodeType": "VariableDeclaration",
            "src": "4583:81:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55717,
              "nodeType": "StructuredDocumentation",
              "src": "4532:46:71",
              "text": "@dev `(_NONCES_SLOT_SEED << 16) | 0x1901`."
            },
            "mutability": "constant",
            "name": "_NONCES_SLOT_SEED_WITH_SIGNATURE_PREFIX",
            "nameLocation": "4608:39:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 55718,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "4583:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "3078333833373735303831393031",
              "id": 55719,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4650:14:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_61810837821697_by_1",
                "typeString": "int_const 61810837821697"
              },
              "value": "0x383775081901"
            },
            "visibility": "private"
          },
          {
            "id": 55724,
            "nodeType": "VariableDeclaration",
            "src": "4783:118:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55721,
              "nodeType": "StructuredDocumentation",
              "src": "4671:107:71",
              "text": "@dev `keccak256(\"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\")`."
            },
            "mutability": "constant",
            "name": "_DOMAIN_TYPEHASH",
            "nameLocation": "4808:16:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 55722,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "4783:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307838623733633363363962623866653364353132656363346366373539636337393233396637623137396230666661636161396137356435323262333934303066",
              "id": 55723,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4835:66:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_63076024560530113402979550242307453568063438748328787417531900361828837441551_by_1",
                "typeString": "int_const 6307...(69 digits omitted)...1551"
              },
              "value": "0x8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f"
            },
            "visibility": "private"
          },
          {
            "id": 55728,
            "nodeType": "VariableDeclaration",
            "src": "4939:115:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55725,
              "nodeType": "StructuredDocumentation",
              "src": "4908:26:71",
              "text": "@dev `keccak256(\"1\")`."
            },
            "mutability": "constant",
            "name": "_VERSION_HASH",
            "nameLocation": "4964:13:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 55726,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "4939:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307863383965666461613534633066323063376164663631323838326466303935306635613935313633376530333037636463623463363732663239386238626336",
              "id": 55727,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "4988:66:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_90743482286830539503240959006302832933333810038750515972785732718729991261126_by_1",
                "typeString": "int_const 9074...(69 digits omitted)...1126"
              },
              "value": "0xc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6"
            },
            "visibility": "private"
          },
          {
            "id": 55732,
            "nodeType": "VariableDeclaration",
            "src": "5173:118:71",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 55729,
              "nodeType": "StructuredDocumentation",
              "src": "5061:107:71",
              "text": "@dev `keccak256(\"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\")`."
            },
            "mutability": "constant",
            "name": "_PERMIT_TYPEHASH",
            "nameLocation": "5198:16:71",
            "scope": 56069,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 55730,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "5173:7:71",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307836653731656461653132623162393766346431663630333730666566313031303566613266616165303132363131346131363963363438343564363132366339",
              "id": 55731,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "5225:66:71",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_49955707469362902507454157297736832118868343942642399513960811609542965143241_by_1",
                "typeString": "int_const 4995...(69 digits omitted)...3241"
              },
              "value": "0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9"
            },
            "visibility": "private"
          },
          {
            "id": 55738,
            "nodeType": "FunctionDefinition",
            "src": "5625:60:71",
            "nodes": [],
            "documentation": {
              "id": 55733,
              "nodeType": "StructuredDocumentation",
              "src": "5581:39:71",
              "text": "@dev Returns the name of the token."
            },
            "functionSelector": "06fdde03",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "5634:4:71",
            "parameters": {
              "id": 55734,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5638:2:71"
            },
            "returnParameters": {
              "id": 55737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55736,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 55738,
                  "src": "5670:13:71",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 55735,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5670:6:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5669:15:71"
            },
            "scope": 56069,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55744,
            "nodeType": "FunctionDefinition",
            "src": "5737:62:71",
            "nodes": [],
            "documentation": {
              "id": 55739,
              "nodeType": "StructuredDocumentation",
              "src": "5691:41:71",
              "text": "@dev Returns the symbol of the token."
            },
            "functionSelector": "95d89b41",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "5746:6:71",
            "parameters": {
              "id": 55740,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5752:2:71"
            },
            "returnParameters": {
              "id": 55743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55742,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 55744,
                  "src": "5784:13:71",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 55741,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5784:6:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5783:15:71"
            },
            "scope": 56069,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55753,
            "nodeType": "FunctionDefinition",
            "src": "5860:82:71",
            "nodes": [],
            "body": {
              "id": 55752,
              "nodeType": "Block",
              "src": "5916:26:71",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "3138",
                    "id": 55750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5933:2:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_18_by_1",
                      "typeString": "int_const 18"
                    },
                    "value": "18"
                  },
                  "functionReturnParameters": 55749,
                  "id": 55751,
                  "nodeType": "Return",
                  "src": "5926:9:71"
                }
              ]
            },
            "documentation": {
              "id": 55745,
              "nodeType": "StructuredDocumentation",
              "src": "5805:50:71",
              "text": "@dev Returns the decimals places of the token."
            },
            "functionSelector": "313ce567",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "5869:8:71",
            "parameters": {
              "id": 55746,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5877:2:71"
            },
            "returnParameters": {
              "id": 55749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55748,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 55753,
                  "src": "5909:5:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 55747,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "5909:5:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5908:7:71"
            },
            "scope": 56069,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55761,
            "nodeType": "FunctionDefinition",
            "src": "6287:195:71",
            "nodes": [],
            "body": {
              "id": 55760,
              "nodeType": "Block",
              "src": "6355:127:71",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "6417:59:71",
                    "nodeType": "YulBlock",
                    "src": "6417:59:71",
                    "statements": [
                      {
                        "nativeSrc": "6431:35:71",
                        "nodeType": "YulAssignment",
                        "src": "6431:35:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "_TOTAL_SUPPLY_SLOT",
                              "nativeSrc": "6447:18:71",
                              "nodeType": "YulIdentifier",
                              "src": "6447:18:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "6441:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "6441:5:71"
                          },
                          "nativeSrc": "6441:25:71",
                          "nodeType": "YulFunctionCall",
                          "src": "6441:25:71"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "6431:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "6431:6:71"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55704,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6447:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55757,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6431:6:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55759,
                  "nodeType": "InlineAssembly",
                  "src": "6408:68:71"
                }
              ]
            },
            "documentation": {
              "id": 55754,
              "nodeType": "StructuredDocumentation",
              "src": "6231:51:71",
              "text": "@dev Returns the amount of tokens in existence."
            },
            "functionSelector": "18160ddd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "6296:11:71",
            "parameters": {
              "id": 55755,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6307:2:71"
            },
            "returnParameters": {
              "id": 55758,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55757,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "6347:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55761,
                  "src": "6339:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55756,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6339:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6338:16:71"
            },
            "scope": 56069,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55771,
            "nodeType": "FunctionDefinition",
            "src": "6548:286:71",
            "nodes": [],
            "body": {
              "id": 55770,
              "nodeType": "Block",
              "src": "6627:207:71",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "6689:139:71",
                    "nodeType": "YulBlock",
                    "src": "6689:139:71",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6710:4:71",
                              "nodeType": "YulLiteral",
                              "src": "6710:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_BALANCE_SLOT_SEED",
                              "nativeSrc": "6716:18:71",
                              "nodeType": "YulIdentifier",
                              "src": "6716:18:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6703:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "6703:6:71"
                          },
                          "nativeSrc": "6703:32:71",
                          "nodeType": "YulFunctionCall",
                          "src": "6703:32:71"
                        },
                        "nativeSrc": "6703:32:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "6703:32:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6755:4:71",
                              "nodeType": "YulLiteral",
                              "src": "6755:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "owner",
                              "nativeSrc": "6761:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "6761:5:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6748:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "6748:6:71"
                          },
                          "nativeSrc": "6748:19:71",
                          "nodeType": "YulFunctionCall",
                          "src": "6748:19:71"
                        },
                        "nativeSrc": "6748:19:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "6748:19:71"
                      },
                      {
                        "nativeSrc": "6780:38:71",
                        "nodeType": "YulAssignment",
                        "src": "6780:38:71",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "6806:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "6806:4:71",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6812:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "6812:4:71",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "6796:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "6796:9:71"
                              },
                              "nativeSrc": "6796:21:71",
                              "nodeType": "YulFunctionCall",
                              "src": "6796:21:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "6790:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "6790:5:71"
                          },
                          "nativeSrc": "6790:28:71",
                          "nodeType": "YulFunctionCall",
                          "src": "6790:28:71"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "6780:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "6780:6:71"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55708,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6716:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55764,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6761:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55767,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6780:6:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55769,
                  "nodeType": "InlineAssembly",
                  "src": "6680:148:71"
                }
              ]
            },
            "documentation": {
              "id": 55762,
              "nodeType": "StructuredDocumentation",
              "src": "6488:55:71",
              "text": "@dev Returns the amount of tokens owned by `owner`."
            },
            "functionSelector": "70a08231",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "6557:9:71",
            "parameters": {
              "id": 55765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55764,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "6575:5:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55771,
                  "src": "6567:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55763,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6567:7:71",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6566:15:71"
            },
            "returnParameters": {
              "id": 55768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55767,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "6619:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55771,
                  "src": "6611:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6611:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6610:16:71"
            },
            "scope": 56069,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55783,
            "nodeType": "FunctionDefinition",
            "src": "6929:375:71",
            "nodes": [],
            "body": {
              "id": 55782,
              "nodeType": "Block",
              "src": "7061:243:71",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "7123:175:71",
                    "nodeType": "YulBlock",
                    "src": "7123:175:71",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "7144:4:71",
                              "nodeType": "YulLiteral",
                              "src": "7144:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "spender",
                              "nativeSrc": "7150:7:71",
                              "nodeType": "YulIdentifier",
                              "src": "7150:7:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "7137:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "7137:6:71"
                          },
                          "nativeSrc": "7137:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7137:21:71"
                        },
                        "nativeSrc": "7137:21:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "7137:21:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "7178:4:71",
                              "nodeType": "YulLiteral",
                              "src": "7178:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_ALLOWANCE_SLOT_SEED",
                              "nativeSrc": "7184:20:71",
                              "nodeType": "YulIdentifier",
                              "src": "7184:20:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "7171:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "7171:6:71"
                          },
                          "nativeSrc": "7171:34:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7171:34:71"
                        },
                        "nativeSrc": "7171:34:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "7171:34:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "7225:4:71",
                              "nodeType": "YulLiteral",
                              "src": "7225:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "owner",
                              "nativeSrc": "7231:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "7231:5:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "7218:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "7218:6:71"
                          },
                          "nativeSrc": "7218:19:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7218:19:71"
                        },
                        "nativeSrc": "7218:19:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "7218:19:71"
                      },
                      {
                        "nativeSrc": "7250:38:71",
                        "nodeType": "YulAssignment",
                        "src": "7250:38:71",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "7276:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "7276:4:71",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "7282:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "7282:4:71",
                                  "type": "",
                                  "value": "0x34"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "7266:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "7266:9:71"
                              },
                              "nativeSrc": "7266:21:71",
                              "nodeType": "YulFunctionCall",
                              "src": "7266:21:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "7260:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "7260:5:71"
                          },
                          "nativeSrc": "7260:28:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7260:28:71"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "7250:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "7250:6:71"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55712,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7184:20:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55774,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7231:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55779,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7250:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55776,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7150:7:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55781,
                  "nodeType": "InlineAssembly",
                  "src": "7114:184:71"
                }
              ]
            },
            "documentation": {
              "id": 55772,
              "nodeType": "StructuredDocumentation",
              "src": "6840:84:71",
              "text": "@dev Returns the amount of tokens that `spender` can spend on behalf of `owner`."
            },
            "functionSelector": "dd62ed3e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "6938:9:71",
            "parameters": {
              "id": 55777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55774,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "6956:5:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55783,
                  "src": "6948:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55773,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6948:7:71",
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
                  "id": 55776,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "6971:7:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55783,
                  "src": "6963:15:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55775,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6963:7:71",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6947:32:71"
            },
            "returnParameters": {
              "id": 55780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55779,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "7049:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55783,
                  "src": "7041:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55778,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7041:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7040:16:71"
            },
            "scope": 56069,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55797,
            "nodeType": "FunctionDefinition",
            "src": "7435:573:71",
            "nodes": [],
            "body": {
              "id": 55796,
              "nodeType": "Block",
              "src": "7515:493:71",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "7577:404:71",
                    "nodeType": "YulBlock",
                    "src": "7577:404:71",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "7662:4:71",
                              "nodeType": "YulLiteral",
                              "src": "7662:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "spender",
                              "nativeSrc": "7668:7:71",
                              "nodeType": "YulIdentifier",
                              "src": "7668:7:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "7655:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "7655:6:71"
                          },
                          "nativeSrc": "7655:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7655:21:71"
                        },
                        "nativeSrc": "7655:21:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "7655:21:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "7696:4:71",
                              "nodeType": "YulLiteral",
                              "src": "7696:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_ALLOWANCE_SLOT_SEED",
                              "nativeSrc": "7702:20:71",
                              "nodeType": "YulIdentifier",
                              "src": "7702:20:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "7689:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "7689:6:71"
                          },
                          "nativeSrc": "7689:34:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7689:34:71"
                        },
                        "nativeSrc": "7689:34:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "7689:34:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "7743:4:71",
                              "nodeType": "YulLiteral",
                              "src": "7743:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "caller",
                                "nativeSrc": "7749:6:71",
                                "nodeType": "YulIdentifier",
                                "src": "7749:6:71"
                              },
                              "nativeSrc": "7749:8:71",
                              "nodeType": "YulFunctionCall",
                              "src": "7749:8:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "7736:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "7736:6:71"
                          },
                          "nativeSrc": "7736:22:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7736:22:71"
                        },
                        "nativeSrc": "7736:22:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "7736:22:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "7788:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "7788:4:71",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "7794:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "7794:4:71",
                                  "type": "",
                                  "value": "0x34"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "7778:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "7778:9:71"
                              },
                              "nativeSrc": "7778:21:71",
                              "nodeType": "YulFunctionCall",
                              "src": "7778:21:71"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "7801:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "7801:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "7771:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "7771:6:71"
                          },
                          "nativeSrc": "7771:37:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7771:37:71"
                        },
                        "nativeSrc": "7771:37:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "7771:37:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "7870:4:71",
                              "nodeType": "YulLiteral",
                              "src": "7870:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "7876:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "7876:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "7863:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "7863:6:71"
                          },
                          "nativeSrc": "7863:20:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7863:20:71"
                        },
                        "nativeSrc": "7863:20:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "7863:20:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "7901:4:71",
                              "nodeType": "YulLiteral",
                              "src": "7901:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "7907:4:71",
                              "nodeType": "YulLiteral",
                              "src": "7907:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "_APPROVAL_EVENT_SIGNATURE",
                              "nativeSrc": "7913:25:71",
                              "nodeType": "YulIdentifier",
                              "src": "7913:25:71"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "caller",
                                "nativeSrc": "7940:6:71",
                                "nodeType": "YulIdentifier",
                                "src": "7940:6:71"
                              },
                              "nativeSrc": "7940:8:71",
                              "nodeType": "YulFunctionCall",
                              "src": "7940:8:71"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "7954:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "7954:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "7964:4:71",
                                      "nodeType": "YulLiteral",
                                      "src": "7964:4:71",
                                      "type": "",
                                      "value": "0x2c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "7958:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "7958:5:71"
                                  },
                                  "nativeSrc": "7958:11:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "7958:11:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "7950:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "7950:3:71"
                              },
                              "nativeSrc": "7950:20:71",
                              "nodeType": "YulFunctionCall",
                              "src": "7950:20:71"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "7896:4:71",
                            "nodeType": "YulIdentifier",
                            "src": "7896:4:71"
                          },
                          "nativeSrc": "7896:75:71",
                          "nodeType": "YulFunctionCall",
                          "src": "7896:75:71"
                        },
                        "nativeSrc": "7896:75:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "7896:75:71"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55712,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7702:20:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55700,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7913:25:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55788,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7801:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55788,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7876:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55786,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7668:7:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55793,
                  "nodeType": "InlineAssembly",
                  "src": "7568:413:71"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 55794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "7997:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 55792,
                  "id": 55795,
                  "nodeType": "Return",
                  "src": "7990:11:71"
                }
              ]
            },
            "documentation": {
              "id": 55784,
              "nodeType": "StructuredDocumentation",
              "src": "7310:120:71",
              "text": "@dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n Emits a {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "7444:7:71",
            "parameters": {
              "id": 55789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55786,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "7460:7:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55797,
                  "src": "7452:15:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55785,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7452:7:71",
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
                  "id": 55788,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "7477:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55797,
                  "src": "7469:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55787,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7469:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7451:33:71"
            },
            "returnParameters": {
              "id": 55792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55791,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 55797,
                  "src": "7509:4:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 55790,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7509:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7508:6:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55825,
            "nodeType": "FunctionDefinition",
            "src": "8195:1406:71",
            "nodes": [],
            "body": {
              "id": 55824,
              "nodeType": "Block",
              "src": "8271:1330:71",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 55808,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "8302:3:71",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 55809,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8306:6:71",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "8302:10:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55810,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55800,
                        "src": "8314:2:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55811,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55802,
                        "src": "8318:6:71",
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
                      "id": 55807,
                      "name": "_beforeTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56057,
                      "src": "8281:20:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 55812,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8281:44:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55813,
                  "nodeType": "ExpressionStatement",
                  "src": "8281:44:71"
                },
                {
                  "AST": {
                    "nativeSrc": "8387:1134:71",
                    "nodeType": "YulBlock",
                    "src": "8387:1134:71",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "8468:4:71",
                              "nodeType": "YulLiteral",
                              "src": "8468:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_BALANCE_SLOT_SEED",
                              "nativeSrc": "8474:18:71",
                              "nodeType": "YulIdentifier",
                              "src": "8474:18:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "8461:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "8461:6:71"
                          },
                          "nativeSrc": "8461:32:71",
                          "nodeType": "YulFunctionCall",
                          "src": "8461:32:71"
                        },
                        "nativeSrc": "8461:32:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "8461:32:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "8513:4:71",
                              "nodeType": "YulLiteral",
                              "src": "8513:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "caller",
                                "nativeSrc": "8519:6:71",
                                "nodeType": "YulIdentifier",
                                "src": "8519:6:71"
                              },
                              "nativeSrc": "8519:8:71",
                              "nodeType": "YulFunctionCall",
                              "src": "8519:8:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "8506:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "8506:6:71"
                          },
                          "nativeSrc": "8506:22:71",
                          "nodeType": "YulFunctionCall",
                          "src": "8506:22:71"
                        },
                        "nativeSrc": "8506:22:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "8506:22:71"
                      },
                      {
                        "nativeSrc": "8541:44:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "8541:44:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "8574:4:71",
                              "nodeType": "YulLiteral",
                              "src": "8574:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8580:4:71",
                              "nodeType": "YulLiteral",
                              "src": "8580:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "8564:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "8564:9:71"
                          },
                          "nativeSrc": "8564:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "8564:21:71"
                        },
                        "variables": [
                          {
                            "name": "fromBalanceSlot",
                            "nativeSrc": "8545:15:71",
                            "nodeType": "YulTypedName",
                            "src": "8545:15:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "8598:41:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "8598:41:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "fromBalanceSlot",
                              "nativeSrc": "8623:15:71",
                              "nodeType": "YulIdentifier",
                              "src": "8623:15:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "8617:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "8617:5:71"
                          },
                          "nativeSrc": "8617:22:71",
                          "nodeType": "YulFunctionCall",
                          "src": "8617:22:71"
                        },
                        "variables": [
                          {
                            "name": "fromBalance",
                            "nativeSrc": "8602:11:71",
                            "nodeType": "YulTypedName",
                            "src": "8602:11:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "8726:119:71",
                          "nodeType": "YulBlock",
                          "src": "8726:119:71",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8751:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "8751:4:71",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8757:10:71",
                                    "nodeType": "YulLiteral",
                                    "src": "8757:10:71",
                                    "type": "",
                                    "value": "0xf4d678b8"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "8744:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "8744:6:71"
                                },
                                "nativeSrc": "8744:24:71",
                                "nodeType": "YulFunctionCall",
                                "src": "8744:24:71"
                              },
                              "nativeSrc": "8744:24:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "8744:24:71"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8820:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "8820:4:71",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "8826:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "8826:4:71",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "8813:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "8813:6:71"
                                },
                                "nativeSrc": "8813:18:71",
                                "nodeType": "YulFunctionCall",
                                "src": "8813:18:71"
                              },
                              "nativeSrc": "8813:18:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "8813:18:71"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "amount",
                              "nativeSrc": "8705:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "8705:6:71"
                            },
                            {
                              "name": "fromBalance",
                              "nativeSrc": "8713:11:71",
                              "nodeType": "YulIdentifier",
                              "src": "8713:11:71"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "8702:2:71",
                            "nodeType": "YulIdentifier",
                            "src": "8702:2:71"
                          },
                          "nativeSrc": "8702:23:71",
                          "nodeType": "YulFunctionCall",
                          "src": "8702:23:71"
                        },
                        "nativeSrc": "8699:146:71",
                        "nodeType": "YulIf",
                        "src": "8699:146:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "fromBalanceSlot",
                              "nativeSrc": "8920:15:71",
                              "nodeType": "YulIdentifier",
                              "src": "8920:15:71"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "fromBalance",
                                  "nativeSrc": "8941:11:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "8941:11:71"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "8954:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "8954:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "8937:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "8937:3:71"
                              },
                              "nativeSrc": "8937:24:71",
                              "nodeType": "YulFunctionCall",
                              "src": "8937:24:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "8913:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "8913:6:71"
                          },
                          "nativeSrc": "8913:49:71",
                          "nodeType": "YulFunctionCall",
                          "src": "8913:49:71"
                        },
                        "nativeSrc": "8913:49:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "8913:49:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9031:4:71",
                              "nodeType": "YulLiteral",
                              "src": "9031:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "9037:2:71",
                              "nodeType": "YulIdentifier",
                              "src": "9037:2:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9024:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "9024:6:71"
                          },
                          "nativeSrc": "9024:16:71",
                          "nodeType": "YulFunctionCall",
                          "src": "9024:16:71"
                        },
                        "nativeSrc": "9024:16:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "9024:16:71"
                      },
                      {
                        "nativeSrc": "9053:42:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "9053:42:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9084:4:71",
                              "nodeType": "YulLiteral",
                              "src": "9084:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9090:4:71",
                              "nodeType": "YulLiteral",
                              "src": "9090:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "9074:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "9074:9:71"
                          },
                          "nativeSrc": "9074:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "9074:21:71"
                        },
                        "variables": [
                          {
                            "name": "toBalanceSlot",
                            "nativeSrc": "9057:13:71",
                            "nodeType": "YulTypedName",
                            "src": "9057:13:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "toBalanceSlot",
                              "nativeSrc": "9299:13:71",
                              "nodeType": "YulIdentifier",
                              "src": "9299:13:71"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "toBalanceSlot",
                                      "nativeSrc": "9324:13:71",
                                      "nodeType": "YulIdentifier",
                                      "src": "9324:13:71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "9318:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "9318:5:71"
                                  },
                                  "nativeSrc": "9318:20:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9318:20:71"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "9340:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "9340:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "9314:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "9314:3:71"
                              },
                              "nativeSrc": "9314:33:71",
                              "nodeType": "YulFunctionCall",
                              "src": "9314:33:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "9292:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "9292:6:71"
                          },
                          "nativeSrc": "9292:56:71",
                          "nodeType": "YulFunctionCall",
                          "src": "9292:56:71"
                        },
                        "nativeSrc": "9292:56:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "9292:56:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9410:4:71",
                              "nodeType": "YulLiteral",
                              "src": "9410:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "9416:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "9416:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9403:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "9403:6:71"
                          },
                          "nativeSrc": "9403:20:71",
                          "nodeType": "YulFunctionCall",
                          "src": "9403:20:71"
                        },
                        "nativeSrc": "9403:20:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "9403:20:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9441:4:71",
                              "nodeType": "YulLiteral",
                              "src": "9441:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9447:4:71",
                              "nodeType": "YulLiteral",
                              "src": "9447:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "_TRANSFER_EVENT_SIGNATURE",
                              "nativeSrc": "9453:25:71",
                              "nodeType": "YulIdentifier",
                              "src": "9453:25:71"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "caller",
                                "nativeSrc": "9480:6:71",
                                "nodeType": "YulIdentifier",
                                "src": "9480:6:71"
                              },
                              "nativeSrc": "9480:8:71",
                              "nodeType": "YulFunctionCall",
                              "src": "9480:8:71"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "9494:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "9494:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "9504:4:71",
                                      "nodeType": "YulLiteral",
                                      "src": "9504:4:71",
                                      "type": "",
                                      "value": "0x0c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "9498:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "9498:5:71"
                                  },
                                  "nativeSrc": "9498:11:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9498:11:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "9490:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "9490:3:71"
                              },
                              "nativeSrc": "9490:20:71",
                              "nodeType": "YulFunctionCall",
                              "src": "9490:20:71"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "9436:4:71",
                            "nodeType": "YulIdentifier",
                            "src": "9436:4:71"
                          },
                          "nativeSrc": "9436:75:71",
                          "nodeType": "YulFunctionCall",
                          "src": "9436:75:71"
                        },
                        "nativeSrc": "9436:75:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "9436:75:71"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55708,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8474:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55696,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9453:25:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55802,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8705:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55802,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8954:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55802,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9340:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55802,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9416:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55800,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9037:2:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55814,
                  "nodeType": "InlineAssembly",
                  "src": "8378:1143:71"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 55816,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "9550:3:71",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 55817,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9554:6:71",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "9550:10:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55818,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55800,
                        "src": "9562:2:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55819,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55802,
                        "src": "9566:6:71",
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
                      "id": 55815,
                      "name": "_afterTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56068,
                      "src": "9530:19:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 55820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9530:43:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55821,
                  "nodeType": "ExpressionStatement",
                  "src": "9530:43:71"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 55822,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "9590:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 55806,
                  "id": 55823,
                  "nodeType": "Return",
                  "src": "9583:11:71"
                }
              ]
            },
            "documentation": {
              "id": 55798,
              "nodeType": "StructuredDocumentation",
              "src": "8014:176:71",
              "text": "@dev Transfer `amount` tokens from the caller to `to`.\n Requirements:\n - `from` must at least have `amount`.\n Emits a {Transfer} event."
            },
            "functionSelector": "a9059cbb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "8204:8:71",
            "parameters": {
              "id": 55803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55800,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "8221:2:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55825,
                  "src": "8213:10:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55799,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8213:7:71",
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
                  "id": 55802,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "8233:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55825,
                  "src": "8225:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55801,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8225:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8212:28:71"
            },
            "returnParameters": {
              "id": 55806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55805,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 55825,
                  "src": "8265:4:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 55804,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8265:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8264:6:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55853,
            "nodeType": "FunctionDefinition",
            "src": "9969:2191:71",
            "nodes": [],
            "body": {
              "id": 55852,
              "nodeType": "Block",
              "src": "10063:2097:71",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 55838,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55828,
                        "src": "10094:4:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55839,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55830,
                        "src": "10100:2:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55840,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55832,
                        "src": "10104:6:71",
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
                      "id": 55837,
                      "name": "_beforeTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56057,
                      "src": "10073:20:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 55841,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10073:38:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55842,
                  "nodeType": "ExpressionStatement",
                  "src": "10073:38:71"
                },
                {
                  "AST": {
                    "nativeSrc": "10173:1913:71",
                    "nodeType": "YulBlock",
                    "src": "10173:1913:71",
                    "statements": [
                      {
                        "nativeSrc": "10187:26:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "10187:26:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10204:2:71",
                              "nodeType": "YulLiteral",
                              "src": "10204:2:71",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "name": "from",
                              "nativeSrc": "10208:4:71",
                              "nodeType": "YulIdentifier",
                              "src": "10208:4:71"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nativeSrc": "10200:3:71",
                            "nodeType": "YulIdentifier",
                            "src": "10200:3:71"
                          },
                          "nativeSrc": "10200:13:71",
                          "nodeType": "YulFunctionCall",
                          "src": "10200:13:71"
                        },
                        "variables": [
                          {
                            "name": "from_",
                            "nativeSrc": "10191:5:71",
                            "nodeType": "YulTypedName",
                            "src": "10191:5:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10295:4:71",
                              "nodeType": "YulLiteral",
                              "src": "10295:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "caller",
                                "nativeSrc": "10301:6:71",
                                "nodeType": "YulIdentifier",
                                "src": "10301:6:71"
                              },
                              "nativeSrc": "10301:8:71",
                              "nodeType": "YulFunctionCall",
                              "src": "10301:8:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10288:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "10288:6:71"
                          },
                          "nativeSrc": "10288:22:71",
                          "nodeType": "YulFunctionCall",
                          "src": "10288:22:71"
                        },
                        "nativeSrc": "10288:22:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "10288:22:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10330:4:71",
                              "nodeType": "YulLiteral",
                              "src": "10330:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "from_",
                                  "nativeSrc": "10339:5:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "10339:5:71"
                                },
                                {
                                  "name": "_ALLOWANCE_SLOT_SEED",
                                  "nativeSrc": "10346:20:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "10346:20:71"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "10336:2:71",
                                "nodeType": "YulIdentifier",
                                "src": "10336:2:71"
                              },
                              "nativeSrc": "10336:31:71",
                              "nodeType": "YulFunctionCall",
                              "src": "10336:31:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10323:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "10323:6:71"
                          },
                          "nativeSrc": "10323:45:71",
                          "nodeType": "YulFunctionCall",
                          "src": "10323:45:71"
                        },
                        "nativeSrc": "10323:45:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "10323:45:71"
                      },
                      {
                        "nativeSrc": "10381:42:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "10381:42:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10412:4:71",
                              "nodeType": "YulLiteral",
                              "src": "10412:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10418:4:71",
                              "nodeType": "YulLiteral",
                              "src": "10418:4:71",
                              "type": "",
                              "value": "0x34"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "10402:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "10402:9:71"
                          },
                          "nativeSrc": "10402:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "10402:21:71"
                        },
                        "variables": [
                          {
                            "name": "allowanceSlot",
                            "nativeSrc": "10385:13:71",
                            "nodeType": "YulTypedName",
                            "src": "10385:13:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "10436:38:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "10436:38:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "allowanceSlot",
                              "nativeSrc": "10460:13:71",
                              "nodeType": "YulIdentifier",
                              "src": "10460:13:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "10454:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "10454:5:71"
                          },
                          "nativeSrc": "10454:20:71",
                          "nodeType": "YulFunctionCall",
                          "src": "10454:20:71"
                        },
                        "variables": [
                          {
                            "name": "allowance_",
                            "nativeSrc": "10440:10:71",
                            "nodeType": "YulTypedName",
                            "src": "10440:10:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "10575:396:71",
                          "nodeType": "YulBlock",
                          "src": "10575:396:71",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "10700:133:71",
                                "nodeType": "YulBlock",
                                "src": "10700:133:71",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "10729:4:71",
                                          "nodeType": "YulLiteral",
                                          "src": "10729:4:71",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "10735:10:71",
                                          "nodeType": "YulLiteral",
                                          "src": "10735:10:71",
                                          "type": "",
                                          "value": "0x13be252b"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "10722:6:71",
                                        "nodeType": "YulIdentifier",
                                        "src": "10722:6:71"
                                      },
                                      "nativeSrc": "10722:24:71",
                                      "nodeType": "YulFunctionCall",
                                      "src": "10722:24:71"
                                    },
                                    "nativeSrc": "10722:24:71",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "10722:24:71"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "10804:4:71",
                                          "nodeType": "YulLiteral",
                                          "src": "10804:4:71",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "10810:4:71",
                                          "nodeType": "YulLiteral",
                                          "src": "10810:4:71",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "10797:6:71",
                                        "nodeType": "YulIdentifier",
                                        "src": "10797:6:71"
                                      },
                                      "nativeSrc": "10797:18:71",
                                      "nodeType": "YulFunctionCall",
                                      "src": "10797:18:71"
                                    },
                                    "nativeSrc": "10797:18:71",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "10797:18:71"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "amount",
                                    "nativeSrc": "10680:6:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "10680:6:71"
                                  },
                                  {
                                    "name": "allowance_",
                                    "nativeSrc": "10688:10:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "10688:10:71"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nativeSrc": "10677:2:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "10677:2:71"
                                },
                                "nativeSrc": "10677:22:71",
                                "nodeType": "YulFunctionCall",
                                "src": "10677:22:71"
                              },
                              "nativeSrc": "10674:159:71",
                              "nodeType": "YulIf",
                              "src": "10674:159:71"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "allowanceSlot",
                                    "nativeSrc": "10918:13:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "10918:13:71"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "allowance_",
                                        "nativeSrc": "10937:10:71",
                                        "nodeType": "YulIdentifier",
                                        "src": "10937:10:71"
                                      },
                                      {
                                        "name": "amount",
                                        "nativeSrc": "10949:6:71",
                                        "nodeType": "YulIdentifier",
                                        "src": "10949:6:71"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nativeSrc": "10933:3:71",
                                      "nodeType": "YulIdentifier",
                                      "src": "10933:3:71"
                                    },
                                    "nativeSrc": "10933:23:71",
                                    "nodeType": "YulFunctionCall",
                                    "src": "10933:23:71"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nativeSrc": "10911:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "10911:6:71"
                                },
                                "nativeSrc": "10911:46:71",
                                "nodeType": "YulFunctionCall",
                                "src": "10911:46:71"
                              },
                              "nativeSrc": "10911:46:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "10911:46:71"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "allowance_",
                              "nativeSrc": "10560:10:71",
                              "nodeType": "YulIdentifier",
                              "src": "10560:10:71"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10572:1:71",
                              "nodeType": "YulLiteral",
                              "src": "10572:1:71",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10556:3:71",
                            "nodeType": "YulIdentifier",
                            "src": "10556:3:71"
                          },
                          "nativeSrc": "10556:18:71",
                          "nodeType": "YulFunctionCall",
                          "src": "10556:18:71"
                        },
                        "nativeSrc": "10553:418:71",
                        "nodeType": "YulIf",
                        "src": "10553:418:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11051:4:71",
                              "nodeType": "YulLiteral",
                              "src": "11051:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "from_",
                                  "nativeSrc": "11060:5:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "11060:5:71"
                                },
                                {
                                  "name": "_BALANCE_SLOT_SEED",
                                  "nativeSrc": "11067:18:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "11067:18:71"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "11057:2:71",
                                "nodeType": "YulIdentifier",
                                "src": "11057:2:71"
                              },
                              "nativeSrc": "11057:29:71",
                              "nodeType": "YulFunctionCall",
                              "src": "11057:29:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11044:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "11044:6:71"
                          },
                          "nativeSrc": "11044:43:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11044:43:71"
                        },
                        "nativeSrc": "11044:43:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "11044:43:71"
                      },
                      {
                        "nativeSrc": "11100:44:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "11100:44:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11133:4:71",
                              "nodeType": "YulLiteral",
                              "src": "11133:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11139:4:71",
                              "nodeType": "YulLiteral",
                              "src": "11139:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "11123:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "11123:9:71"
                          },
                          "nativeSrc": "11123:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11123:21:71"
                        },
                        "variables": [
                          {
                            "name": "fromBalanceSlot",
                            "nativeSrc": "11104:15:71",
                            "nodeType": "YulTypedName",
                            "src": "11104:15:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "11157:41:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "11157:41:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "fromBalanceSlot",
                              "nativeSrc": "11182:15:71",
                              "nodeType": "YulIdentifier",
                              "src": "11182:15:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "11176:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "11176:5:71"
                          },
                          "nativeSrc": "11176:22:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11176:22:71"
                        },
                        "variables": [
                          {
                            "name": "fromBalance",
                            "nativeSrc": "11161:11:71",
                            "nodeType": "YulTypedName",
                            "src": "11161:11:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "11285:119:71",
                          "nodeType": "YulBlock",
                          "src": "11285:119:71",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "11310:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "11310:4:71",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "11316:10:71",
                                    "nodeType": "YulLiteral",
                                    "src": "11316:10:71",
                                    "type": "",
                                    "value": "0xf4d678b8"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "11303:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "11303:6:71"
                                },
                                "nativeSrc": "11303:24:71",
                                "nodeType": "YulFunctionCall",
                                "src": "11303:24:71"
                              },
                              "nativeSrc": "11303:24:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "11303:24:71"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "11379:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "11379:4:71",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "11385:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "11385:4:71",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "11372:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "11372:6:71"
                                },
                                "nativeSrc": "11372:18:71",
                                "nodeType": "YulFunctionCall",
                                "src": "11372:18:71"
                              },
                              "nativeSrc": "11372:18:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "11372:18:71"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "amount",
                              "nativeSrc": "11264:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "11264:6:71"
                            },
                            {
                              "name": "fromBalance",
                              "nativeSrc": "11272:11:71",
                              "nodeType": "YulIdentifier",
                              "src": "11272:11:71"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "11261:2:71",
                            "nodeType": "YulIdentifier",
                            "src": "11261:2:71"
                          },
                          "nativeSrc": "11261:23:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11261:23:71"
                        },
                        "nativeSrc": "11258:146:71",
                        "nodeType": "YulIf",
                        "src": "11258:146:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "fromBalanceSlot",
                              "nativeSrc": "11479:15:71",
                              "nodeType": "YulIdentifier",
                              "src": "11479:15:71"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "fromBalance",
                                  "nativeSrc": "11500:11:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "11500:11:71"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "11513:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "11513:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "11496:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "11496:3:71"
                              },
                              "nativeSrc": "11496:24:71",
                              "nodeType": "YulFunctionCall",
                              "src": "11496:24:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "11472:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "11472:6:71"
                          },
                          "nativeSrc": "11472:49:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11472:49:71"
                        },
                        "nativeSrc": "11472:49:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "11472:49:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11590:4:71",
                              "nodeType": "YulLiteral",
                              "src": "11590:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "11596:2:71",
                              "nodeType": "YulIdentifier",
                              "src": "11596:2:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11583:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "11583:6:71"
                          },
                          "nativeSrc": "11583:16:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11583:16:71"
                        },
                        "nativeSrc": "11583:16:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "11583:16:71"
                      },
                      {
                        "nativeSrc": "11612:42:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "11612:42:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11643:4:71",
                              "nodeType": "YulLiteral",
                              "src": "11643:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11649:4:71",
                              "nodeType": "YulLiteral",
                              "src": "11649:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "11633:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "11633:9:71"
                          },
                          "nativeSrc": "11633:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11633:21:71"
                        },
                        "variables": [
                          {
                            "name": "toBalanceSlot",
                            "nativeSrc": "11616:13:71",
                            "nodeType": "YulTypedName",
                            "src": "11616:13:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "toBalanceSlot",
                              "nativeSrc": "11858:13:71",
                              "nodeType": "YulIdentifier",
                              "src": "11858:13:71"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "toBalanceSlot",
                                      "nativeSrc": "11883:13:71",
                                      "nodeType": "YulIdentifier",
                                      "src": "11883:13:71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "11877:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "11877:5:71"
                                  },
                                  "nativeSrc": "11877:20:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "11877:20:71"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "11899:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "11899:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "11873:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "11873:3:71"
                              },
                              "nativeSrc": "11873:33:71",
                              "nodeType": "YulFunctionCall",
                              "src": "11873:33:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "11851:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "11851:6:71"
                          },
                          "nativeSrc": "11851:56:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11851:56:71"
                        },
                        "nativeSrc": "11851:56:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "11851:56:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11969:4:71",
                              "nodeType": "YulLiteral",
                              "src": "11969:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "11975:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "11975:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11962:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "11962:6:71"
                          },
                          "nativeSrc": "11962:20:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11962:20:71"
                        },
                        "nativeSrc": "11962:20:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "11962:20:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "12000:4:71",
                              "nodeType": "YulLiteral",
                              "src": "12000:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12006:4:71",
                              "nodeType": "YulLiteral",
                              "src": "12006:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "_TRANSFER_EVENT_SIGNATURE",
                              "nativeSrc": "12012:25:71",
                              "nodeType": "YulIdentifier",
                              "src": "12012:25:71"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "12043:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "12043:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from_",
                                  "nativeSrc": "12047:5:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "12047:5:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "12039:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "12039:3:71"
                              },
                              "nativeSrc": "12039:14:71",
                              "nodeType": "YulFunctionCall",
                              "src": "12039:14:71"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "12059:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "12059:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12069:4:71",
                                      "nodeType": "YulLiteral",
                                      "src": "12069:4:71",
                                      "type": "",
                                      "value": "0x0c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "12063:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "12063:5:71"
                                  },
                                  "nativeSrc": "12063:11:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "12063:11:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "12055:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "12055:3:71"
                              },
                              "nativeSrc": "12055:20:71",
                              "nodeType": "YulFunctionCall",
                              "src": "12055:20:71"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "11995:4:71",
                            "nodeType": "YulIdentifier",
                            "src": "11995:4:71"
                          },
                          "nativeSrc": "11995:81:71",
                          "nodeType": "YulFunctionCall",
                          "src": "11995:81:71"
                        },
                        "nativeSrc": "11995:81:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "11995:81:71"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55712,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10346:20:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55708,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11067:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55696,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12012:25:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55832,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10680:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55832,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10949:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55832,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11264:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55832,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11513:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55832,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11899:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55832,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11975:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55828,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10208:4:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55830,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11596:2:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55843,
                  "nodeType": "InlineAssembly",
                  "src": "10164:1922:71"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 55845,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55828,
                        "src": "12115:4:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55846,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55830,
                        "src": "12121:2:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55847,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55832,
                        "src": "12125:6:71",
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
                      "id": 55844,
                      "name": "_afterTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56068,
                      "src": "12095:19:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 55848,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12095:37:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55849,
                  "nodeType": "ExpressionStatement",
                  "src": "12095:37:71"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 55850,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "12149:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 55836,
                  "id": 55851,
                  "nodeType": "Return",
                  "src": "12142:11:71"
                }
              ]
            },
            "documentation": {
              "id": 55826,
              "nodeType": "StructuredDocumentation",
              "src": "9607:357:71",
              "text": "@dev Transfers `amount` tokens from `from` to `to`.\n Note: Does not update the allowance if it is the maximum uint256 value.\n Requirements:\n - `from` must at least have `amount`.\n - The caller must have at least `amount` of allowance to transfer the tokens of `from`.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "9978:12:71",
            "parameters": {
              "id": 55833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55828,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "9999:4:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55853,
                  "src": "9991:12:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55827,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9991:7:71",
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
                  "id": 55830,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "10013:2:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55853,
                  "src": "10005:10:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55829,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10005:7:71",
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
                  "id": 55832,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "10025:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55853,
                  "src": "10017:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55831,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10017:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9990:42:71"
            },
            "returnParameters": {
              "id": 55836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55835,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 55853,
                  "src": "10057:4:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 55834,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10057:4:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10056:6:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55860,
            "nodeType": "FunctionDefinition",
            "src": "12591:78:71",
            "nodes": [],
            "body": {
              "id": 55859,
              "nodeType": "Block",
              "src": "12667:2:71",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 55854,
              "nodeType": "StructuredDocumentation",
              "src": "12449:137:71",
              "text": "@dev For more performance, override to return the constant value\n of `keccak256(bytes(name()))` if `name()` will never change."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_constantNameHash",
            "nameLocation": "12600:17:71",
            "parameters": {
              "id": 55855,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12617:2:71"
            },
            "returnParameters": {
              "id": 55858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55857,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "12659:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55860,
                  "src": "12651:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 55856,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12651:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12650:16:71"
            },
            "scope": 56069,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 55870,
            "nodeType": "FunctionDefinition",
            "src": "12800:340:71",
            "nodes": [],
            "body": {
              "id": 55869,
              "nodeType": "Block",
              "src": "12876:264:71",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "12938:196:71",
                    "nodeType": "YulBlock",
                    "src": "12938:196:71",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13017:4:71",
                              "nodeType": "YulLiteral",
                              "src": "13017:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_NONCES_SLOT_SEED",
                              "nativeSrc": "13023:17:71",
                              "nodeType": "YulIdentifier",
                              "src": "13023:17:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13010:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "13010:6:71"
                          },
                          "nativeSrc": "13010:31:71",
                          "nodeType": "YulFunctionCall",
                          "src": "13010:31:71"
                        },
                        "nativeSrc": "13010:31:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "13010:31:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13061:4:71",
                              "nodeType": "YulLiteral",
                              "src": "13061:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "owner",
                              "nativeSrc": "13067:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "13067:5:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13054:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "13054:6:71"
                          },
                          "nativeSrc": "13054:19:71",
                          "nodeType": "YulFunctionCall",
                          "src": "13054:19:71"
                        },
                        "nativeSrc": "13054:19:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "13054:19:71"
                      },
                      {
                        "nativeSrc": "13086:38:71",
                        "nodeType": "YulAssignment",
                        "src": "13086:38:71",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "13112:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "13112:4:71",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "13118:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "13118:4:71",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "13102:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "13102:9:71"
                              },
                              "nativeSrc": "13102:21:71",
                              "nodeType": "YulFunctionCall",
                              "src": "13102:21:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "13096:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "13096:5:71"
                          },
                          "nativeSrc": "13096:28:71",
                          "nodeType": "YulFunctionCall",
                          "src": "13096:28:71"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "13086:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "13086:6:71"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55716,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13023:17:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55863,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13067:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55866,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13086:6:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55868,
                  "nodeType": "InlineAssembly",
                  "src": "12929:205:71"
                }
              ]
            },
            "documentation": {
              "id": 55861,
              "nodeType": "StructuredDocumentation",
              "src": "12675:120:71",
              "text": "@dev Returns the current nonce for `owner`.\n This value is used to compute the signature for EIP-2612 permit."
            },
            "functionSelector": "7ecebe00",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "nonces",
            "nameLocation": "12809:6:71",
            "parameters": {
              "id": 55864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55863,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "12824:5:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55870,
                  "src": "12816:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55862,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12816:7:71",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12815:15:71"
            },
            "returnParameters": {
              "id": 55867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55866,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "12868:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55870,
                  "src": "12860:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55865,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12860:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12859:16:71"
            },
            "scope": 56069,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55912,
            "nodeType": "FunctionDefinition",
            "src": "13324:3215:71",
            "nodes": [],
            "body": {
              "id": 55911,
              "nodeType": "Block",
              "src": "13513:3026:71",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    55889
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 55889,
                      "mutability": "mutable",
                      "name": "nameHash",
                      "nameLocation": "13531:8:71",
                      "nodeType": "VariableDeclaration",
                      "scope": 55911,
                      "src": "13523:16:71",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 55888,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "13523:7:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 55892,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 55890,
                      "name": "_constantNameHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55860,
                      "src": "13542:17:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                        "typeString": "function () view returns (bytes32)"
                      }
                    },
                    "id": 55891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13542:19:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13523:38:71"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 55898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 55893,
                      "name": "nameHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55889,
                      "src": "13669:8:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 55896,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13689:1:71",
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
                        "id": 55895,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13681:7:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes32_$",
                          "typeString": "type(bytes32)"
                        },
                        "typeName": {
                          "id": 55894,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "13681:7:71",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 55897,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13681:10:71",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "13669:22:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 55909,
                  "nodeType": "IfStatement",
                  "src": "13665:63:71",
                  "trueBody": {
                    "expression": {
                      "id": 55907,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 55899,
                        "name": "nameHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55889,
                        "src": "13693:8:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 55903,
                                  "name": "name",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 55738,
                                  "src": "13720:4:71",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                                    "typeString": "function () view returns (string memory)"
                                  }
                                },
                                "id": 55904,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13720:6:71",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 55902,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "13714:5:71",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 55901,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "13714:5:71",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 55905,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13714:13:71",
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
                          "id": 55900,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "13704:9:71",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 55906,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13704:24:71",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "13693:35:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 55908,
                    "nodeType": "ExpressionStatement",
                    "src": "13693:35:71"
                  }
                },
                {
                  "AST": {
                    "nativeSrc": "13790:2743:71",
                    "nodeType": "YulBlock",
                    "src": "13790:2743:71",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "13906:113:71",
                          "nodeType": "YulBlock",
                          "src": "13906:113:71",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "13931:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "13931:4:71",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "13937:10:71",
                                    "nodeType": "YulLiteral",
                                    "src": "13937:10:71",
                                    "type": "",
                                    "value": "0x1a15a3cc"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "13924:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "13924:6:71"
                                },
                                "nativeSrc": "13924:24:71",
                                "nodeType": "YulFunctionCall",
                                "src": "13924:24:71"
                              },
                              "nativeSrc": "13924:24:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "13924:24:71"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "13994:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "13994:4:71",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "14000:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "14000:4:71",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "13987:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "13987:6:71"
                                },
                                "nativeSrc": "13987:18:71",
                                "nodeType": "YulFunctionCall",
                                "src": "13987:18:71"
                              },
                              "nativeSrc": "13987:18:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "13987:18:71"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "timestamp",
                                "nativeSrc": "13883:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "13883:9:71"
                              },
                              "nativeSrc": "13883:11:71",
                              "nodeType": "YulFunctionCall",
                              "src": "13883:11:71"
                            },
                            {
                              "name": "deadline",
                              "nativeSrc": "13896:8:71",
                              "nodeType": "YulIdentifier",
                              "src": "13896:8:71"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "13880:2:71",
                            "nodeType": "YulIdentifier",
                            "src": "13880:2:71"
                          },
                          "nativeSrc": "13880:25:71",
                          "nodeType": "YulFunctionCall",
                          "src": "13880:25:71"
                        },
                        "nativeSrc": "13877:142:71",
                        "nodeType": "YulIf",
                        "src": "13877:142:71"
                      },
                      {
                        "nativeSrc": "14032:20:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "14032:20:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14047:4:71",
                              "nodeType": "YulLiteral",
                              "src": "14047:4:71",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "14041:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "14041:5:71"
                          },
                          "nativeSrc": "14041:11:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14041:11:71"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "14036:1:71",
                            "nodeType": "YulTypedName",
                            "src": "14036:1:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "14138:32:71",
                        "nodeType": "YulAssignment",
                        "src": "14138:32:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14151:2:71",
                              "nodeType": "YulLiteral",
                              "src": "14151:2:71",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "14159:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14159:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "owner",
                                  "nativeSrc": "14163:5:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14163:5:71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "14155:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "14155:3:71"
                              },
                              "nativeSrc": "14155:14:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14155:14:71"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "14147:3:71",
                            "nodeType": "YulIdentifier",
                            "src": "14147:3:71"
                          },
                          "nativeSrc": "14147:23:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14147:23:71"
                        },
                        "variableNames": [
                          {
                            "name": "owner",
                            "nativeSrc": "14138:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "14138:5:71"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "14183:36:71",
                        "nodeType": "YulAssignment",
                        "src": "14183:36:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14198:2:71",
                              "nodeType": "YulLiteral",
                              "src": "14198:2:71",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "14206:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14206:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "spender",
                                  "nativeSrc": "14210:7:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14210:7:71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "14202:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "14202:3:71"
                              },
                              "nativeSrc": "14202:16:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14202:16:71"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "14194:3:71",
                            "nodeType": "YulIdentifier",
                            "src": "14194:3:71"
                          },
                          "nativeSrc": "14194:25:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14194:25:71"
                        },
                        "variableNames": [
                          {
                            "name": "spender",
                            "nativeSrc": "14183:7:71",
                            "nodeType": "YulIdentifier",
                            "src": "14183:7:71"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14297:4:71",
                              "nodeType": "YulLiteral",
                              "src": "14297:4:71",
                              "type": "",
                              "value": "0x0e"
                            },
                            {
                              "name": "_NONCES_SLOT_SEED_WITH_SIGNATURE_PREFIX",
                              "nativeSrc": "14303:39:71",
                              "nodeType": "YulIdentifier",
                              "src": "14303:39:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14290:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14290:6:71"
                          },
                          "nativeSrc": "14290:53:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14290:53:71"
                        },
                        "nativeSrc": "14290:53:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14290:53:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14363:4:71",
                              "nodeType": "YulLiteral",
                              "src": "14363:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "owner",
                              "nativeSrc": "14369:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "14369:5:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14356:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14356:6:71"
                          },
                          "nativeSrc": "14356:19:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14356:19:71"
                        },
                        "nativeSrc": "14356:19:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14356:19:71"
                      },
                      {
                        "nativeSrc": "14388:38:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "14388:38:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14415:4:71",
                              "nodeType": "YulLiteral",
                              "src": "14415:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "14421:4:71",
                              "nodeType": "YulLiteral",
                              "src": "14421:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "14405:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "14405:9:71"
                          },
                          "nativeSrc": "14405:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14405:21:71"
                        },
                        "variables": [
                          {
                            "name": "nonceSlot",
                            "nativeSrc": "14392:9:71",
                            "nodeType": "YulTypedName",
                            "src": "14392:9:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "14439:34:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "14439:34:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "nonceSlot",
                              "nativeSrc": "14463:9:71",
                              "nodeType": "YulIdentifier",
                              "src": "14463:9:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "14457:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "14457:5:71"
                          },
                          "nativeSrc": "14457:16:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14457:16:71"
                        },
                        "variables": [
                          {
                            "name": "nonceValue",
                            "nativeSrc": "14443:10:71",
                            "nodeType": "YulTypedName",
                            "src": "14443:10:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "14538:1:71",
                              "nodeType": "YulIdentifier",
                              "src": "14538:1:71"
                            },
                            {
                              "name": "_DOMAIN_TYPEHASH",
                              "nativeSrc": "14541:16:71",
                              "nodeType": "YulIdentifier",
                              "src": "14541:16:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14531:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14531:6:71"
                          },
                          "nativeSrc": "14531:27:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14531:27:71"
                        },
                        "nativeSrc": "14531:27:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14531:27:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "14582:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14582:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14585:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14585:4:71",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14578:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "14578:3:71"
                              },
                              "nativeSrc": "14578:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14578:12:71"
                            },
                            {
                              "name": "nameHash",
                              "nativeSrc": "14592:8:71",
                              "nodeType": "YulIdentifier",
                              "src": "14592:8:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14571:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14571:6:71"
                          },
                          "nativeSrc": "14571:30:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14571:30:71"
                        },
                        "nativeSrc": "14571:30:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14571:30:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "14625:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14625:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14628:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14628:4:71",
                                  "type": "",
                                  "value": "0x40"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14621:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "14621:3:71"
                              },
                              "nativeSrc": "14621:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14621:12:71"
                            },
                            {
                              "name": "_VERSION_HASH",
                              "nativeSrc": "14635:13:71",
                              "nodeType": "YulIdentifier",
                              "src": "14635:13:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14614:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14614:6:71"
                          },
                          "nativeSrc": "14614:35:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14614:35:71"
                        },
                        "nativeSrc": "14614:35:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14614:35:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "14673:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14673:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14676:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14676:4:71",
                                  "type": "",
                                  "value": "0x60"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14669:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "14669:3:71"
                              },
                              "nativeSrc": "14669:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14669:12:71"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "chainid",
                                "nativeSrc": "14683:7:71",
                                "nodeType": "YulIdentifier",
                                "src": "14683:7:71"
                              },
                              "nativeSrc": "14683:9:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14683:9:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14662:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14662:6:71"
                          },
                          "nativeSrc": "14662:31:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14662:31:71"
                        },
                        "nativeSrc": "14662:31:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14662:31:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "14717:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14717:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14720:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14720:4:71",
                                  "type": "",
                                  "value": "0x80"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14713:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "14713:3:71"
                              },
                              "nativeSrc": "14713:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14713:12:71"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "14727:7:71",
                                "nodeType": "YulIdentifier",
                                "src": "14727:7:71"
                              },
                              "nativeSrc": "14727:9:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14727:9:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14706:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14706:6:71"
                          },
                          "nativeSrc": "14706:31:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14706:31:71"
                        },
                        "nativeSrc": "14706:31:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14706:31:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14757:4:71",
                              "nodeType": "YulLiteral",
                              "src": "14757:4:71",
                              "type": "",
                              "value": "0x2e"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "14773:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14773:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14776:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14776:4:71",
                                  "type": "",
                                  "value": "0xa0"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "14763:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "14763:9:71"
                              },
                              "nativeSrc": "14763:18:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14763:18:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14750:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14750:6:71"
                          },
                          "nativeSrc": "14750:32:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14750:32:71"
                        },
                        "nativeSrc": "14750:32:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14750:32:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "14842:1:71",
                              "nodeType": "YulIdentifier",
                              "src": "14842:1:71"
                            },
                            {
                              "name": "_PERMIT_TYPEHASH",
                              "nativeSrc": "14845:16:71",
                              "nodeType": "YulIdentifier",
                              "src": "14845:16:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14835:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14835:6:71"
                          },
                          "nativeSrc": "14835:27:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14835:27:71"
                        },
                        "nativeSrc": "14835:27:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14835:27:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "14886:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14886:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14889:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14889:4:71",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14882:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "14882:3:71"
                              },
                              "nativeSrc": "14882:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14882:12:71"
                            },
                            {
                              "name": "owner",
                              "nativeSrc": "14896:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "14896:5:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14875:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14875:6:71"
                          },
                          "nativeSrc": "14875:27:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14875:27:71"
                        },
                        "nativeSrc": "14875:27:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14875:27:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "14926:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14926:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14929:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14929:4:71",
                                  "type": "",
                                  "value": "0x40"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14922:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "14922:3:71"
                              },
                              "nativeSrc": "14922:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14922:12:71"
                            },
                            {
                              "name": "spender",
                              "nativeSrc": "14936:7:71",
                              "nodeType": "YulIdentifier",
                              "src": "14936:7:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14915:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14915:6:71"
                          },
                          "nativeSrc": "14915:29:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14915:29:71"
                        },
                        "nativeSrc": "14915:29:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14915:29:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "14968:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "14968:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14971:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "14971:4:71",
                                  "type": "",
                                  "value": "0x60"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14964:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "14964:3:71"
                              },
                              "nativeSrc": "14964:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "14964:12:71"
                            },
                            {
                              "name": "value",
                              "nativeSrc": "14978:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "14978:5:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14957:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14957:6:71"
                          },
                          "nativeSrc": "14957:27:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14957:27:71"
                        },
                        "nativeSrc": "14957:27:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14957:27:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "15008:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "15008:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15011:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "15011:4:71",
                                  "type": "",
                                  "value": "0x80"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15004:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "15004:3:71"
                              },
                              "nativeSrc": "15004:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "15004:12:71"
                            },
                            {
                              "name": "nonceValue",
                              "nativeSrc": "15018:10:71",
                              "nodeType": "YulIdentifier",
                              "src": "15018:10:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14997:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "14997:6:71"
                          },
                          "nativeSrc": "14997:32:71",
                          "nodeType": "YulFunctionCall",
                          "src": "14997:32:71"
                        },
                        "nativeSrc": "14997:32:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "14997:32:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "15053:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "15053:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15056:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "15056:4:71",
                                  "type": "",
                                  "value": "0xa0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15049:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "15049:3:71"
                              },
                              "nativeSrc": "15049:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "15049:12:71"
                            },
                            {
                              "name": "deadline",
                              "nativeSrc": "15063:8:71",
                              "nodeType": "YulIdentifier",
                              "src": "15063:8:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15042:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "15042:6:71"
                          },
                          "nativeSrc": "15042:30:71",
                          "nodeType": "YulFunctionCall",
                          "src": "15042:30:71"
                        },
                        "nativeSrc": "15042:30:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "15042:30:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15092:4:71",
                              "nodeType": "YulLiteral",
                              "src": "15092:4:71",
                              "type": "",
                              "value": "0x4e"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "15108:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "15108:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15111:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "15111:4:71",
                                  "type": "",
                                  "value": "0xc0"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "15098:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "15098:9:71"
                              },
                              "nativeSrc": "15098:18:71",
                              "nodeType": "YulFunctionCall",
                              "src": "15098:18:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15085:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "15085:6:71"
                          },
                          "nativeSrc": "15085:32:71",
                          "nodeType": "YulFunctionCall",
                          "src": "15085:32:71"
                        },
                        "nativeSrc": "15085:32:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "15085:32:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15184:4:71",
                              "nodeType": "YulLiteral",
                              "src": "15184:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "15200:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "15200:4:71",
                                  "type": "",
                                  "value": "0x2c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15206:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "15206:4:71",
                                  "type": "",
                                  "value": "0x42"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "15190:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "15190:9:71"
                              },
                              "nativeSrc": "15190:21:71",
                              "nodeType": "YulFunctionCall",
                              "src": "15190:21:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15177:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "15177:6:71"
                          },
                          "nativeSrc": "15177:35:71",
                          "nodeType": "YulFunctionCall",
                          "src": "15177:35:71"
                        },
                        "nativeSrc": "15177:35:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "15177:35:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15232:4:71",
                              "nodeType": "YulLiteral",
                              "src": "15232:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "15242:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "15242:4:71",
                                  "type": "",
                                  "value": "0xff"
                                },
                                {
                                  "name": "v",
                                  "nativeSrc": "15248:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "15248:1:71"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "15238:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "15238:3:71"
                              },
                              "nativeSrc": "15238:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "15238:12:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15225:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "15225:6:71"
                          },
                          "nativeSrc": "15225:26:71",
                          "nodeType": "YulFunctionCall",
                          "src": "15225:26:71"
                        },
                        "nativeSrc": "15225:26:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "15225:26:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15271:4:71",
                              "nodeType": "YulLiteral",
                              "src": "15271:4:71",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "r",
                              "nativeSrc": "15277:1:71",
                              "nodeType": "YulIdentifier",
                              "src": "15277:1:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15264:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "15264:6:71"
                          },
                          "nativeSrc": "15264:15:71",
                          "nodeType": "YulFunctionCall",
                          "src": "15264:15:71"
                        },
                        "nativeSrc": "15264:15:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "15264:15:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15299:4:71",
                              "nodeType": "YulLiteral",
                              "src": "15299:4:71",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "name": "s",
                              "nativeSrc": "15305:1:71",
                              "nodeType": "YulIdentifier",
                              "src": "15305:1:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15292:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "15292:6:71"
                          },
                          "nativeSrc": "15292:15:71",
                          "nodeType": "YulFunctionCall",
                          "src": "15292:15:71"
                        },
                        "nativeSrc": "15292:15:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "15292:15:71"
                      },
                      {
                        "nativeSrc": "15320:50:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "15320:50:71",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nativeSrc": "15340:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "15340:3:71"
                              },
                              "nativeSrc": "15340:5:71",
                              "nodeType": "YulFunctionCall",
                              "src": "15340:5:71"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15347:1:71",
                              "nodeType": "YulLiteral",
                              "src": "15347:1:71",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15350:1:71",
                              "nodeType": "YulLiteral",
                              "src": "15350:1:71",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15353:4:71",
                              "nodeType": "YulLiteral",
                              "src": "15353:4:71",
                              "type": "",
                              "value": "0x80"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15359:4:71",
                              "nodeType": "YulLiteral",
                              "src": "15359:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15365:4:71",
                              "nodeType": "YulLiteral",
                              "src": "15365:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "staticcall",
                            "nativeSrc": "15329:10:71",
                            "nodeType": "YulIdentifier",
                            "src": "15329:10:71"
                          },
                          "nativeSrc": "15329:41:71",
                          "nodeType": "YulFunctionCall",
                          "src": "15329:41:71"
                        },
                        "variables": [
                          {
                            "name": "t",
                            "nativeSrc": "15324:1:71",
                            "nodeType": "YulTypedName",
                            "src": "15324:1:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "15794:113:71",
                          "nodeType": "YulBlock",
                          "src": "15794:113:71",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15819:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "15819:4:71",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15825:10:71",
                                    "nodeType": "YulLiteral",
                                    "src": "15825:10:71",
                                    "type": "",
                                    "value": "0xddafbaef"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "15812:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "15812:6:71"
                                },
                                "nativeSrc": "15812:24:71",
                                "nodeType": "YulFunctionCall",
                                "src": "15812:24:71"
                              },
                              "nativeSrc": "15812:24:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "15812:24:71"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15882:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "15882:4:71",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "15888:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "15888:4:71",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "15875:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "15875:6:71"
                                },
                                "nativeSrc": "15875:18:71",
                                "nodeType": "YulFunctionCall",
                                "src": "15875:18:71"
                              },
                              "nativeSrc": "15875:18:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "15875:18:71"
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
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "15767:14:71",
                                        "nodeType": "YulIdentifier",
                                        "src": "15767:14:71"
                                      },
                                      "nativeSrc": "15767:16:71",
                                      "nodeType": "YulFunctionCall",
                                      "src": "15767:16:71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "15761:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "15761:5:71"
                                  },
                                  "nativeSrc": "15761:23:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "15761:23:71"
                                },
                                {
                                  "name": "owner",
                                  "nativeSrc": "15786:5:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "15786:5:71"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "15758:2:71",
                                "nodeType": "YulIdentifier",
                                "src": "15758:2:71"
                              },
                              "nativeSrc": "15758:34:71",
                              "nodeType": "YulFunctionCall",
                              "src": "15758:34:71"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "15751:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "15751:6:71"
                          },
                          "nativeSrc": "15751:42:71",
                          "nodeType": "YulFunctionCall",
                          "src": "15751:42:71"
                        },
                        "nativeSrc": "15748:159:71",
                        "nodeType": "YulIf",
                        "src": "15748:159:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "nonceSlot",
                              "nativeSrc": "15981:9:71",
                              "nodeType": "YulIdentifier",
                              "src": "15981:9:71"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "nonceValue",
                                  "nativeSrc": "15996:10:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "15996:10:71"
                                },
                                {
                                  "name": "t",
                                  "nativeSrc": "16008:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "16008:1:71"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15992:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "15992:3:71"
                              },
                              "nativeSrc": "15992:18:71",
                              "nodeType": "YulFunctionCall",
                              "src": "15992:18:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "15974:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "15974:6:71"
                          },
                          "nativeSrc": "15974:37:71",
                          "nodeType": "YulFunctionCall",
                          "src": "15974:37:71"
                        },
                        "nativeSrc": "15974:37:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "15974:37:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16181:4:71",
                              "nodeType": "YulLiteral",
                              "src": "16181:4:71",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "16194:3:71",
                                      "nodeType": "YulLiteral",
                                      "src": "16194:3:71",
                                      "type": "",
                                      "value": "160"
                                    },
                                    {
                                      "name": "_ALLOWANCE_SLOT_SEED",
                                      "nativeSrc": "16199:20:71",
                                      "nodeType": "YulIdentifier",
                                      "src": "16199:20:71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "16190:3:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "16190:3:71"
                                  },
                                  "nativeSrc": "16190:30:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "16190:30:71"
                                },
                                {
                                  "name": "spender",
                                  "nativeSrc": "16222:7:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "16222:7:71"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "16187:2:71",
                                "nodeType": "YulIdentifier",
                                "src": "16187:2:71"
                              },
                              "nativeSrc": "16187:43:71",
                              "nodeType": "YulFunctionCall",
                              "src": "16187:43:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16174:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "16174:6:71"
                          },
                          "nativeSrc": "16174:57:71",
                          "nodeType": "YulFunctionCall",
                          "src": "16174:57:71"
                        },
                        "nativeSrc": "16174:57:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "16174:57:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "16261:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "16261:4:71",
                                  "type": "",
                                  "value": "0x2c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "16267:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "16267:4:71",
                                  "type": "",
                                  "value": "0x34"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "16251:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "16251:9:71"
                              },
                              "nativeSrc": "16251:21:71",
                              "nodeType": "YulFunctionCall",
                              "src": "16251:21:71"
                            },
                            {
                              "name": "value",
                              "nativeSrc": "16274:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "16274:5:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "16244:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "16244:6:71"
                          },
                          "nativeSrc": "16244:36:71",
                          "nodeType": "YulFunctionCall",
                          "src": "16244:36:71"
                        },
                        "nativeSrc": "16244:36:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "16244:36:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "16344:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "16344:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "16347:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "16347:4:71",
                                  "type": "",
                                  "value": "0x60"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "16340:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "16340:3:71"
                              },
                              "nativeSrc": "16340:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "16340:12:71"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16354:4:71",
                              "nodeType": "YulLiteral",
                              "src": "16354:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "_APPROVAL_EVENT_SIGNATURE",
                              "nativeSrc": "16360:25:71",
                              "nodeType": "YulIdentifier",
                              "src": "16360:25:71"
                            },
                            {
                              "name": "owner",
                              "nativeSrc": "16387:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "16387:5:71"
                            },
                            {
                              "name": "spender",
                              "nativeSrc": "16394:7:71",
                              "nodeType": "YulIdentifier",
                              "src": "16394:7:71"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "16335:4:71",
                            "nodeType": "YulIdentifier",
                            "src": "16335:4:71"
                          },
                          "nativeSrc": "16335:67:71",
                          "nodeType": "YulFunctionCall",
                          "src": "16335:67:71"
                        },
                        "nativeSrc": "16335:67:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "16335:67:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16422:4:71",
                              "nodeType": "YulLiteral",
                              "src": "16422:4:71",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "m",
                              "nativeSrc": "16428:1:71",
                              "nodeType": "YulIdentifier",
                              "src": "16428:1:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16415:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "16415:6:71"
                          },
                          "nativeSrc": "16415:15:71",
                          "nodeType": "YulFunctionCall",
                          "src": "16415:15:71"
                        },
                        "nativeSrc": "16415:15:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "16415:15:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16486:4:71",
                              "nodeType": "YulLiteral",
                              "src": "16486:4:71",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16492:1:71",
                              "nodeType": "YulLiteral",
                              "src": "16492:1:71",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16479:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "16479:6:71"
                          },
                          "nativeSrc": "16479:15:71",
                          "nodeType": "YulFunctionCall",
                          "src": "16479:15:71"
                        },
                        "nativeSrc": "16479:15:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "16479:15:71"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55712,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16199:20:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55700,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16360:25:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55724,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14541:16:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55720,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14303:39:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55732,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14845:16:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55728,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14635:13:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55879,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13896:8:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55879,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15063:8:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55889,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14592:8:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55873,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14138:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55873,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14163:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55873,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14369:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55873,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14896:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55873,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15786:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55873,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16387:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55883,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15277:1:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55885,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15305:1:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55875,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14183:7:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55875,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14210:7:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55875,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14936:7:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55875,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16222:7:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55875,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16394:7:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55881,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15248:1:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55877,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14978:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55877,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16274:5:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55910,
                  "nodeType": "InlineAssembly",
                  "src": "13781:2752:71"
                }
              ]
            },
            "documentation": {
              "id": 55871,
              "nodeType": "StructuredDocumentation",
              "src": "13146:173:71",
              "text": "@dev Sets `value` as the allowance of `spender` over the tokens of `owner`,\n authorized by a signed approval by `owner`.\n Emits a {Approval} event."
            },
            "functionSelector": "d505accf",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "permit",
            "nameLocation": "13333:6:71",
            "parameters": {
              "id": 55886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55873,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "13357:5:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55912,
                  "src": "13349:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55872,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13349:7:71",
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
                  "id": 55875,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "13380:7:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55912,
                  "src": "13372:15:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55874,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13372:7:71",
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
                  "id": 55877,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "13405:5:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55912,
                  "src": "13397:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55876,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13397:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55879,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "13428:8:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55912,
                  "src": "13420:16:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55878,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13420:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55881,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "13452:1:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55912,
                  "src": "13446:7:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 55880,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "13446:5:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55883,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "13471:1:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55912,
                  "src": "13463:9:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 55882,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13463:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55885,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "13490:1:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55912,
                  "src": "13482:9:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 55884,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13482:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13339:158:71"
            },
            "returnParameters": {
              "id": 55887,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13513:0:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55942,
            "nodeType": "FunctionDefinition",
            "src": "16620:693:71",
            "nodes": [],
            "body": {
              "id": 55941,
              "nodeType": "Block",
              "src": "16693:620:71",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    55919
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 55919,
                      "mutability": "mutable",
                      "name": "nameHash",
                      "nameLocation": "16711:8:71",
                      "nodeType": "VariableDeclaration",
                      "scope": 55941,
                      "src": "16703:16:71",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 55918,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "16703:7:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 55922,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 55920,
                      "name": "_constantNameHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55860,
                      "src": "16722:17:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                        "typeString": "function () view returns (bytes32)"
                      }
                    },
                    "id": 55921,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16722:19:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16703:38:71"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 55928,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 55923,
                      "name": "nameHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55919,
                      "src": "16849:8:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 55926,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "16869:1:71",
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
                        "id": 55925,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "16861:7:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes32_$",
                          "typeString": "type(bytes32)"
                        },
                        "typeName": {
                          "id": 55924,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "16861:7:71",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 55927,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "16861:10:71",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "16849:22:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 55939,
                  "nodeType": "IfStatement",
                  "src": "16845:63:71",
                  "trueBody": {
                    "expression": {
                      "id": 55937,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 55929,
                        "name": "nameHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55919,
                        "src": "16873:8:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "id": 55933,
                                  "name": "name",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 55738,
                                  "src": "16900:4:71",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                                    "typeString": "function () view returns (string memory)"
                                  }
                                },
                                "id": 55934,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16900:6:71",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 55932,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "16894:5:71",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 55931,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "16894:5:71",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 55935,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "16894:13:71",
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
                          "id": 55930,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "16884:9:71",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 55936,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16884:24:71",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "16873:35:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 55938,
                    "nodeType": "ExpressionStatement",
                    "src": "16873:35:71"
                  }
                },
                {
                  "AST": {
                    "nativeSrc": "16970:337:71",
                    "nodeType": "YulBlock",
                    "src": "16970:337:71",
                    "statements": [
                      {
                        "nativeSrc": "16984:20:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "16984:20:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16999:4:71",
                              "nodeType": "YulLiteral",
                              "src": "16999:4:71",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "16993:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "16993:5:71"
                          },
                          "nativeSrc": "16993:11:71",
                          "nodeType": "YulFunctionCall",
                          "src": "16993:11:71"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "16988:1:71",
                            "nodeType": "YulTypedName",
                            "src": "16988:1:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "17057:1:71",
                              "nodeType": "YulIdentifier",
                              "src": "17057:1:71"
                            },
                            {
                              "name": "_DOMAIN_TYPEHASH",
                              "nativeSrc": "17060:16:71",
                              "nodeType": "YulIdentifier",
                              "src": "17060:16:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17050:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "17050:6:71"
                          },
                          "nativeSrc": "17050:27:71",
                          "nodeType": "YulFunctionCall",
                          "src": "17050:27:71"
                        },
                        "nativeSrc": "17050:27:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "17050:27:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "17101:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "17101:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "17104:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "17104:4:71",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "17097:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "17097:3:71"
                              },
                              "nativeSrc": "17097:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "17097:12:71"
                            },
                            {
                              "name": "nameHash",
                              "nativeSrc": "17111:8:71",
                              "nodeType": "YulIdentifier",
                              "src": "17111:8:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17090:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "17090:6:71"
                          },
                          "nativeSrc": "17090:30:71",
                          "nodeType": "YulFunctionCall",
                          "src": "17090:30:71"
                        },
                        "nativeSrc": "17090:30:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "17090:30:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "17144:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "17144:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "17147:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "17147:4:71",
                                  "type": "",
                                  "value": "0x40"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "17140:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "17140:3:71"
                              },
                              "nativeSrc": "17140:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "17140:12:71"
                            },
                            {
                              "name": "_VERSION_HASH",
                              "nativeSrc": "17154:13:71",
                              "nodeType": "YulIdentifier",
                              "src": "17154:13:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17133:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "17133:6:71"
                          },
                          "nativeSrc": "17133:35:71",
                          "nodeType": "YulFunctionCall",
                          "src": "17133:35:71"
                        },
                        "nativeSrc": "17133:35:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "17133:35:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "17192:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "17192:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "17195:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "17195:4:71",
                                  "type": "",
                                  "value": "0x60"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "17188:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "17188:3:71"
                              },
                              "nativeSrc": "17188:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "17188:12:71"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "chainid",
                                "nativeSrc": "17202:7:71",
                                "nodeType": "YulIdentifier",
                                "src": "17202:7:71"
                              },
                              "nativeSrc": "17202:9:71",
                              "nodeType": "YulFunctionCall",
                              "src": "17202:9:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17181:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "17181:6:71"
                          },
                          "nativeSrc": "17181:31:71",
                          "nodeType": "YulFunctionCall",
                          "src": "17181:31:71"
                        },
                        "nativeSrc": "17181:31:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "17181:31:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "17236:1:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "17236:1:71"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "17239:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "17239:4:71",
                                  "type": "",
                                  "value": "0x80"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "17232:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "17232:3:71"
                              },
                              "nativeSrc": "17232:12:71",
                              "nodeType": "YulFunctionCall",
                              "src": "17232:12:71"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "17246:7:71",
                                "nodeType": "YulIdentifier",
                                "src": "17246:7:71"
                              },
                              "nativeSrc": "17246:9:71",
                              "nodeType": "YulFunctionCall",
                              "src": "17246:9:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17225:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "17225:6:71"
                          },
                          "nativeSrc": "17225:31:71",
                          "nodeType": "YulFunctionCall",
                          "src": "17225:31:71"
                        },
                        "nativeSrc": "17225:31:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "17225:31:71"
                      },
                      {
                        "nativeSrc": "17269:28:71",
                        "nodeType": "YulAssignment",
                        "src": "17269:28:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "17289:1:71",
                              "nodeType": "YulIdentifier",
                              "src": "17289:1:71"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17292:4:71",
                              "nodeType": "YulLiteral",
                              "src": "17292:4:71",
                              "type": "",
                              "value": "0xa0"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "17279:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "17279:9:71"
                          },
                          "nativeSrc": "17279:18:71",
                          "nodeType": "YulFunctionCall",
                          "src": "17279:18:71"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "17269:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "17269:6:71"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55724,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17060:16:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55728,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17154:13:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55919,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17111:8:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55916,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17269:6:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55940,
                  "nodeType": "InlineAssembly",
                  "src": "16961:346:71"
                }
              ]
            },
            "documentation": {
              "id": 55913,
              "nodeType": "StructuredDocumentation",
              "src": "16545:70:71",
              "text": "@dev Returns the EIP-712 domain separator for the EIP-2612 permit."
            },
            "functionSelector": "3644e515",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "DOMAIN_SEPARATOR",
            "nameLocation": "16629:16:71",
            "parameters": {
              "id": 55914,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "16645:2:71"
            },
            "returnParameters": {
              "id": 55917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55916,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "16685:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55942,
                  "src": "16677:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 55915,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "16677:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16676:16:71"
            },
            "scope": 56069,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 55970,
            "nodeType": "FunctionDefinition",
            "src": "17717:1172:71",
            "nodes": [],
            "body": {
              "id": 55969,
              "nodeType": "Block",
              "src": "17777:1112:71",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 55953,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "17816:1:71",
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
                          "id": 55952,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "17808:7:71",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 55951,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "17808:7:71",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 55954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "17808:10:71",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55955,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55945,
                        "src": "17820:2:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55956,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55947,
                        "src": "17824:6:71",
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
                      "id": 55950,
                      "name": "_beforeTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56057,
                      "src": "17787:20:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 55957,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17787:44:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55958,
                  "nodeType": "ExpressionStatement",
                  "src": "17787:44:71"
                },
                {
                  "AST": {
                    "nativeSrc": "17893:937:71",
                    "nodeType": "YulBlock",
                    "src": "17893:937:71",
                    "statements": [
                      {
                        "nativeSrc": "17907:50:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "17907:50:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "_TOTAL_SUPPLY_SLOT",
                              "nativeSrc": "17938:18:71",
                              "nodeType": "YulIdentifier",
                              "src": "17938:18:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "17932:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "17932:5:71"
                          },
                          "nativeSrc": "17932:25:71",
                          "nodeType": "YulFunctionCall",
                          "src": "17932:25:71"
                        },
                        "variables": [
                          {
                            "name": "totalSupplyBefore",
                            "nativeSrc": "17911:17:71",
                            "nodeType": "YulTypedName",
                            "src": "17911:17:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "17970:54:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "17970:54:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "totalSupplyBefore",
                              "nativeSrc": "17998:17:71",
                              "nodeType": "YulIdentifier",
                              "src": "17998:17:71"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "18017:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "18017:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "17994:3:71",
                            "nodeType": "YulIdentifier",
                            "src": "17994:3:71"
                          },
                          "nativeSrc": "17994:30:71",
                          "nodeType": "YulFunctionCall",
                          "src": "17994:30:71"
                        },
                        "variables": [
                          {
                            "name": "totalSupplyAfter",
                            "nativeSrc": "17974:16:71",
                            "nodeType": "YulTypedName",
                            "src": "17974:16:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "18133:119:71",
                          "nodeType": "YulBlock",
                          "src": "18133:119:71",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "18158:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "18158:4:71",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "18164:10:71",
                                    "nodeType": "YulLiteral",
                                    "src": "18164:10:71",
                                    "type": "",
                                    "value": "0xe5cfe957"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "18151:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "18151:6:71"
                                },
                                "nativeSrc": "18151:24:71",
                                "nodeType": "YulFunctionCall",
                                "src": "18151:24:71"
                              },
                              "nativeSrc": "18151:24:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "18151:24:71"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "18227:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "18227:4:71",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "18233:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "18233:4:71",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "18220:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "18220:6:71"
                                },
                                "nativeSrc": "18220:18:71",
                                "nodeType": "YulFunctionCall",
                                "src": "18220:18:71"
                              },
                              "nativeSrc": "18220:18:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "18220:18:71"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "totalSupplyAfter",
                              "nativeSrc": "18096:16:71",
                              "nodeType": "YulIdentifier",
                              "src": "18096:16:71"
                            },
                            {
                              "name": "totalSupplyBefore",
                              "nativeSrc": "18114:17:71",
                              "nodeType": "YulIdentifier",
                              "src": "18114:17:71"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nativeSrc": "18093:2:71",
                            "nodeType": "YulIdentifier",
                            "src": "18093:2:71"
                          },
                          "nativeSrc": "18093:39:71",
                          "nodeType": "YulFunctionCall",
                          "src": "18093:39:71"
                        },
                        "nativeSrc": "18090:162:71",
                        "nodeType": "YulIf",
                        "src": "18090:162:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_TOTAL_SUPPLY_SLOT",
                              "nativeSrc": "18319:18:71",
                              "nodeType": "YulIdentifier",
                              "src": "18319:18:71"
                            },
                            {
                              "name": "totalSupplyAfter",
                              "nativeSrc": "18339:16:71",
                              "nodeType": "YulIdentifier",
                              "src": "18339:16:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "18312:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "18312:6:71"
                          },
                          "nativeSrc": "18312:44:71",
                          "nodeType": "YulFunctionCall",
                          "src": "18312:44:71"
                        },
                        "nativeSrc": "18312:44:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "18312:44:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "18436:4:71",
                              "nodeType": "YulLiteral",
                              "src": "18436:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_BALANCE_SLOT_SEED",
                              "nativeSrc": "18442:18:71",
                              "nodeType": "YulIdentifier",
                              "src": "18442:18:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "18429:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "18429:6:71"
                          },
                          "nativeSrc": "18429:32:71",
                          "nodeType": "YulFunctionCall",
                          "src": "18429:32:71"
                        },
                        "nativeSrc": "18429:32:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "18429:32:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "18481:4:71",
                              "nodeType": "YulLiteral",
                              "src": "18481:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "18487:2:71",
                              "nodeType": "YulIdentifier",
                              "src": "18487:2:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "18474:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "18474:6:71"
                          },
                          "nativeSrc": "18474:16:71",
                          "nodeType": "YulFunctionCall",
                          "src": "18474:16:71"
                        },
                        "nativeSrc": "18474:16:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "18474:16:71"
                      },
                      {
                        "nativeSrc": "18503:42:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "18503:42:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "18534:4:71",
                              "nodeType": "YulLiteral",
                              "src": "18534:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "18540:4:71",
                              "nodeType": "YulLiteral",
                              "src": "18540:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "18524:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "18524:9:71"
                          },
                          "nativeSrc": "18524:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "18524:21:71"
                        },
                        "variables": [
                          {
                            "name": "toBalanceSlot",
                            "nativeSrc": "18507:13:71",
                            "nodeType": "YulTypedName",
                            "src": "18507:13:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "toBalanceSlot",
                              "nativeSrc": "18615:13:71",
                              "nodeType": "YulIdentifier",
                              "src": "18615:13:71"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "toBalanceSlot",
                                      "nativeSrc": "18640:13:71",
                                      "nodeType": "YulIdentifier",
                                      "src": "18640:13:71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "18634:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "18634:5:71"
                                  },
                                  "nativeSrc": "18634:20:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "18634:20:71"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "18656:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "18656:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "18630:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "18630:3:71"
                              },
                              "nativeSrc": "18630:33:71",
                              "nodeType": "YulFunctionCall",
                              "src": "18630:33:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "18608:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "18608:6:71"
                          },
                          "nativeSrc": "18608:56:71",
                          "nodeType": "YulFunctionCall",
                          "src": "18608:56:71"
                        },
                        "nativeSrc": "18608:56:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "18608:56:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "18726:4:71",
                              "nodeType": "YulLiteral",
                              "src": "18726:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "18732:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "18732:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "18719:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "18719:6:71"
                          },
                          "nativeSrc": "18719:20:71",
                          "nodeType": "YulFunctionCall",
                          "src": "18719:20:71"
                        },
                        "nativeSrc": "18719:20:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "18719:20:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "18757:4:71",
                              "nodeType": "YulLiteral",
                              "src": "18757:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "18763:4:71",
                              "nodeType": "YulLiteral",
                              "src": "18763:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "_TRANSFER_EVENT_SIGNATURE",
                              "nativeSrc": "18769:25:71",
                              "nodeType": "YulIdentifier",
                              "src": "18769:25:71"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "18796:1:71",
                              "nodeType": "YulLiteral",
                              "src": "18796:1:71",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "18803:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "18803:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "18813:4:71",
                                      "nodeType": "YulLiteral",
                                      "src": "18813:4:71",
                                      "type": "",
                                      "value": "0x0c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "18807:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "18807:5:71"
                                  },
                                  "nativeSrc": "18807:11:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "18807:11:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "18799:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "18799:3:71"
                              },
                              "nativeSrc": "18799:20:71",
                              "nodeType": "YulFunctionCall",
                              "src": "18799:20:71"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "18752:4:71",
                            "nodeType": "YulIdentifier",
                            "src": "18752:4:71"
                          },
                          "nativeSrc": "18752:68:71",
                          "nodeType": "YulFunctionCall",
                          "src": "18752:68:71"
                        },
                        "nativeSrc": "18752:68:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "18752:68:71"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55708,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18442:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55704,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17938:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55704,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18319:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55696,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18769:25:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55947,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18017:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55947,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18656:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55947,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18732:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55945,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18487:2:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55959,
                  "nodeType": "InlineAssembly",
                  "src": "17884:946:71"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 55963,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "18867:1:71",
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
                          "id": 55962,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "18859:7:71",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 55961,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "18859:7:71",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 55964,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "18859:10:71",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55965,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55945,
                        "src": "18871:2:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55966,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55947,
                        "src": "18875:6:71",
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
                      "id": 55960,
                      "name": "_afterTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56068,
                      "src": "18839:19:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 55967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "18839:43:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55968,
                  "nodeType": "ExpressionStatement",
                  "src": "18839:43:71"
                }
              ]
            },
            "documentation": {
              "id": 55943,
              "nodeType": "StructuredDocumentation",
              "src": "17602:110:71",
              "text": "@dev Mints `amount` tokens to `to`, increasing the total supply.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mint",
            "nameLocation": "17726:5:71",
            "parameters": {
              "id": 55948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55945,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "17740:2:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55970,
                  "src": "17732:10:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55944,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17732:7:71",
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
                  "id": 55947,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "17752:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55970,
                  "src": "17744:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55946,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17744:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17731:28:71"
            },
            "returnParameters": {
              "id": 55949,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "17777:0:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 55998,
            "nodeType": "FunctionDefinition",
            "src": "19295:1119:71",
            "nodes": [],
            "body": {
              "id": 55997,
              "nodeType": "Block",
              "src": "19357:1057:71",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 55979,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55973,
                        "src": "19388:4:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 55982,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "19402:1:71",
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
                          "id": 55981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "19394:7:71",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 55980,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "19394:7:71",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 55983,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "19394:10:71",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55984,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55975,
                        "src": "19406:6:71",
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
                      "id": 55978,
                      "name": "_beforeTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56057,
                      "src": "19367:20:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 55985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "19367:46:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55986,
                  "nodeType": "ExpressionStatement",
                  "src": "19367:46:71"
                },
                {
                  "AST": {
                    "nativeSrc": "19475:878:71",
                    "nodeType": "YulBlock",
                    "src": "19475:878:71",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "19556:4:71",
                              "nodeType": "YulLiteral",
                              "src": "19556:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_BALANCE_SLOT_SEED",
                              "nativeSrc": "19562:18:71",
                              "nodeType": "YulIdentifier",
                              "src": "19562:18:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "19549:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "19549:6:71"
                          },
                          "nativeSrc": "19549:32:71",
                          "nodeType": "YulFunctionCall",
                          "src": "19549:32:71"
                        },
                        "nativeSrc": "19549:32:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "19549:32:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "19601:4:71",
                              "nodeType": "YulLiteral",
                              "src": "19601:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "from",
                              "nativeSrc": "19607:4:71",
                              "nodeType": "YulIdentifier",
                              "src": "19607:4:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "19594:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "19594:6:71"
                          },
                          "nativeSrc": "19594:18:71",
                          "nodeType": "YulFunctionCall",
                          "src": "19594:18:71"
                        },
                        "nativeSrc": "19594:18:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "19594:18:71"
                      },
                      {
                        "nativeSrc": "19625:44:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "19625:44:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "19658:4:71",
                              "nodeType": "YulLiteral",
                              "src": "19658:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "19664:4:71",
                              "nodeType": "YulLiteral",
                              "src": "19664:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "19648:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "19648:9:71"
                          },
                          "nativeSrc": "19648:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "19648:21:71"
                        },
                        "variables": [
                          {
                            "name": "fromBalanceSlot",
                            "nativeSrc": "19629:15:71",
                            "nodeType": "YulTypedName",
                            "src": "19629:15:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "19682:41:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "19682:41:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "fromBalanceSlot",
                              "nativeSrc": "19707:15:71",
                              "nodeType": "YulIdentifier",
                              "src": "19707:15:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "19701:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "19701:5:71"
                          },
                          "nativeSrc": "19701:22:71",
                          "nodeType": "YulFunctionCall",
                          "src": "19701:22:71"
                        },
                        "variables": [
                          {
                            "name": "fromBalance",
                            "nativeSrc": "19686:11:71",
                            "nodeType": "YulTypedName",
                            "src": "19686:11:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "19810:119:71",
                          "nodeType": "YulBlock",
                          "src": "19810:119:71",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "19835:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "19835:4:71",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "19841:10:71",
                                    "nodeType": "YulLiteral",
                                    "src": "19841:10:71",
                                    "type": "",
                                    "value": "0xf4d678b8"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "19828:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "19828:6:71"
                                },
                                "nativeSrc": "19828:24:71",
                                "nodeType": "YulFunctionCall",
                                "src": "19828:24:71"
                              },
                              "nativeSrc": "19828:24:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "19828:24:71"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "19904:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "19904:4:71",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "19910:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "19910:4:71",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "19897:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "19897:6:71"
                                },
                                "nativeSrc": "19897:18:71",
                                "nodeType": "YulFunctionCall",
                                "src": "19897:18:71"
                              },
                              "nativeSrc": "19897:18:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "19897:18:71"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "amount",
                              "nativeSrc": "19789:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "19789:6:71"
                            },
                            {
                              "name": "fromBalance",
                              "nativeSrc": "19797:11:71",
                              "nodeType": "YulIdentifier",
                              "src": "19797:11:71"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "19786:2:71",
                            "nodeType": "YulIdentifier",
                            "src": "19786:2:71"
                          },
                          "nativeSrc": "19786:23:71",
                          "nodeType": "YulFunctionCall",
                          "src": "19786:23:71"
                        },
                        "nativeSrc": "19783:146:71",
                        "nodeType": "YulIf",
                        "src": "19783:146:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "fromBalanceSlot",
                              "nativeSrc": "20004:15:71",
                              "nodeType": "YulIdentifier",
                              "src": "20004:15:71"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "fromBalance",
                                  "nativeSrc": "20025:11:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "20025:11:71"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "20038:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "20038:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "20021:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "20021:3:71"
                              },
                              "nativeSrc": "20021:24:71",
                              "nodeType": "YulFunctionCall",
                              "src": "20021:24:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "19997:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "19997:6:71"
                          },
                          "nativeSrc": "19997:49:71",
                          "nodeType": "YulFunctionCall",
                          "src": "19997:49:71"
                        },
                        "nativeSrc": "19997:49:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "19997:49:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_TOTAL_SUPPLY_SLOT",
                              "nativeSrc": "20126:18:71",
                              "nodeType": "YulIdentifier",
                              "src": "20126:18:71"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_TOTAL_SUPPLY_SLOT",
                                      "nativeSrc": "20156:18:71",
                                      "nodeType": "YulIdentifier",
                                      "src": "20156:18:71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "20150:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "20150:5:71"
                                  },
                                  "nativeSrc": "20150:25:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "20150:25:71"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "20177:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "20177:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "20146:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "20146:3:71"
                              },
                              "nativeSrc": "20146:38:71",
                              "nodeType": "YulFunctionCall",
                              "src": "20146:38:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "20119:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "20119:6:71"
                          },
                          "nativeSrc": "20119:66:71",
                          "nodeType": "YulFunctionCall",
                          "src": "20119:66:71"
                        },
                        "nativeSrc": "20119:66:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "20119:66:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "20247:4:71",
                              "nodeType": "YulLiteral",
                              "src": "20247:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "20253:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "20253:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20240:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "20240:6:71"
                          },
                          "nativeSrc": "20240:20:71",
                          "nodeType": "YulFunctionCall",
                          "src": "20240:20:71"
                        },
                        "nativeSrc": "20240:20:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "20240:20:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "20278:4:71",
                              "nodeType": "YulLiteral",
                              "src": "20278:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "20284:4:71",
                              "nodeType": "YulLiteral",
                              "src": "20284:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "_TRANSFER_EVENT_SIGNATURE",
                              "nativeSrc": "20290:25:71",
                              "nodeType": "YulIdentifier",
                              "src": "20290:25:71"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "20321:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "20321:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "20329:2:71",
                                      "nodeType": "YulLiteral",
                                      "src": "20329:2:71",
                                      "type": "",
                                      "value": "96"
                                    },
                                    {
                                      "name": "from",
                                      "nativeSrc": "20333:4:71",
                                      "nodeType": "YulIdentifier",
                                      "src": "20333:4:71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "20325:3:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "20325:3:71"
                                  },
                                  "nativeSrc": "20325:13:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "20325:13:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "20317:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "20317:3:71"
                              },
                              "nativeSrc": "20317:22:71",
                              "nodeType": "YulFunctionCall",
                              "src": "20317:22:71"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "20341:1:71",
                              "nodeType": "YulLiteral",
                              "src": "20341:1:71",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "20273:4:71",
                            "nodeType": "YulIdentifier",
                            "src": "20273:4:71"
                          },
                          "nativeSrc": "20273:70:71",
                          "nodeType": "YulFunctionCall",
                          "src": "20273:70:71"
                        },
                        "nativeSrc": "20273:70:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "20273:70:71"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55708,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "19562:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55704,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20126:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55704,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20156:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55696,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20290:25:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55975,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "19789:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55975,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20038:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55975,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20177:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55975,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20253:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55973,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "19607:4:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55973,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20333:4:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 55987,
                  "nodeType": "InlineAssembly",
                  "src": "19466:887:71"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 55989,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55973,
                        "src": "20382:4:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 55992,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "20396:1:71",
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
                          "id": 55991,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "20388:7:71",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 55990,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "20388:7:71",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 55993,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "20388:10:71",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55994,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55975,
                        "src": "20400:6:71",
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
                      "id": 55988,
                      "name": "_afterTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56068,
                      "src": "20362:19:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 55995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "20362:45:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55996,
                  "nodeType": "ExpressionStatement",
                  "src": "20362:45:71"
                }
              ]
            },
            "documentation": {
              "id": 55971,
              "nodeType": "StructuredDocumentation",
              "src": "19178:112:71",
              "text": "@dev Burns `amount` tokens from `from`, reducing the total supply.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "19304:5:71",
            "parameters": {
              "id": 55976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55973,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "19318:4:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55998,
                  "src": "19310:12:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55972,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "19310:7:71",
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
                  "id": 55975,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "19332:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 55998,
                  "src": "19324:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55974,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19324:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19309:30:71"
            },
            "returnParameters": {
              "id": 55977,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "19357:0:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56022,
            "nodeType": "FunctionDefinition",
            "src": "20762:1396:71",
            "nodes": [],
            "body": {
              "id": 56021,
              "nodeType": "Block",
              "src": "20840:1318:71",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56009,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56001,
                        "src": "20871:4:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56010,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56003,
                        "src": "20877:2:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56011,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56005,
                        "src": "20881:6:71",
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
                      "id": 56008,
                      "name": "_beforeTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56057,
                      "src": "20850:20:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 56012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "20850:38:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56013,
                  "nodeType": "ExpressionStatement",
                  "src": "20850:38:71"
                },
                {
                  "AST": {
                    "nativeSrc": "20950:1155:71",
                    "nodeType": "YulBlock",
                    "src": "20950:1155:71",
                    "statements": [
                      {
                        "nativeSrc": "20964:26:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "20964:26:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "20981:2:71",
                              "nodeType": "YulLiteral",
                              "src": "20981:2:71",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "name": "from",
                              "nativeSrc": "20985:4:71",
                              "nodeType": "YulIdentifier",
                              "src": "20985:4:71"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nativeSrc": "20977:3:71",
                            "nodeType": "YulIdentifier",
                            "src": "20977:3:71"
                          },
                          "nativeSrc": "20977:13:71",
                          "nodeType": "YulFunctionCall",
                          "src": "20977:13:71"
                        },
                        "variables": [
                          {
                            "name": "from_",
                            "nativeSrc": "20968:5:71",
                            "nodeType": "YulTypedName",
                            "src": "20968:5:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "21070:4:71",
                              "nodeType": "YulLiteral",
                              "src": "21070:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "from_",
                                  "nativeSrc": "21079:5:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "21079:5:71"
                                },
                                {
                                  "name": "_BALANCE_SLOT_SEED",
                                  "nativeSrc": "21086:18:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "21086:18:71"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "21076:2:71",
                                "nodeType": "YulIdentifier",
                                "src": "21076:2:71"
                              },
                              "nativeSrc": "21076:29:71",
                              "nodeType": "YulFunctionCall",
                              "src": "21076:29:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "21063:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "21063:6:71"
                          },
                          "nativeSrc": "21063:43:71",
                          "nodeType": "YulFunctionCall",
                          "src": "21063:43:71"
                        },
                        "nativeSrc": "21063:43:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "21063:43:71"
                      },
                      {
                        "nativeSrc": "21119:44:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "21119:44:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "21152:4:71",
                              "nodeType": "YulLiteral",
                              "src": "21152:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "21158:4:71",
                              "nodeType": "YulLiteral",
                              "src": "21158:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "21142:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "21142:9:71"
                          },
                          "nativeSrc": "21142:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "21142:21:71"
                        },
                        "variables": [
                          {
                            "name": "fromBalanceSlot",
                            "nativeSrc": "21123:15:71",
                            "nodeType": "YulTypedName",
                            "src": "21123:15:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "21176:41:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "21176:41:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "fromBalanceSlot",
                              "nativeSrc": "21201:15:71",
                              "nodeType": "YulIdentifier",
                              "src": "21201:15:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "21195:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "21195:5:71"
                          },
                          "nativeSrc": "21195:22:71",
                          "nodeType": "YulFunctionCall",
                          "src": "21195:22:71"
                        },
                        "variables": [
                          {
                            "name": "fromBalance",
                            "nativeSrc": "21180:11:71",
                            "nodeType": "YulTypedName",
                            "src": "21180:11:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "21304:119:71",
                          "nodeType": "YulBlock",
                          "src": "21304:119:71",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21329:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "21329:4:71",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21335:10:71",
                                    "nodeType": "YulLiteral",
                                    "src": "21335:10:71",
                                    "type": "",
                                    "value": "0xf4d678b8"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "21322:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "21322:6:71"
                                },
                                "nativeSrc": "21322:24:71",
                                "nodeType": "YulFunctionCall",
                                "src": "21322:24:71"
                              },
                              "nativeSrc": "21322:24:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "21322:24:71"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21398:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "21398:4:71",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21404:4:71",
                                    "nodeType": "YulLiteral",
                                    "src": "21404:4:71",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "21391:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "21391:6:71"
                                },
                                "nativeSrc": "21391:18:71",
                                "nodeType": "YulFunctionCall",
                                "src": "21391:18:71"
                              },
                              "nativeSrc": "21391:18:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "21391:18:71"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "amount",
                              "nativeSrc": "21283:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "21283:6:71"
                            },
                            {
                              "name": "fromBalance",
                              "nativeSrc": "21291:11:71",
                              "nodeType": "YulIdentifier",
                              "src": "21291:11:71"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "21280:2:71",
                            "nodeType": "YulIdentifier",
                            "src": "21280:2:71"
                          },
                          "nativeSrc": "21280:23:71",
                          "nodeType": "YulFunctionCall",
                          "src": "21280:23:71"
                        },
                        "nativeSrc": "21277:146:71",
                        "nodeType": "YulIf",
                        "src": "21277:146:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "fromBalanceSlot",
                              "nativeSrc": "21498:15:71",
                              "nodeType": "YulIdentifier",
                              "src": "21498:15:71"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "fromBalance",
                                  "nativeSrc": "21519:11:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "21519:11:71"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "21532:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "21532:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "21515:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "21515:3:71"
                              },
                              "nativeSrc": "21515:24:71",
                              "nodeType": "YulFunctionCall",
                              "src": "21515:24:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "21491:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "21491:6:71"
                          },
                          "nativeSrc": "21491:49:71",
                          "nodeType": "YulFunctionCall",
                          "src": "21491:49:71"
                        },
                        "nativeSrc": "21491:49:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "21491:49:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "21609:4:71",
                              "nodeType": "YulLiteral",
                              "src": "21609:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "21615:2:71",
                              "nodeType": "YulIdentifier",
                              "src": "21615:2:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "21602:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "21602:6:71"
                          },
                          "nativeSrc": "21602:16:71",
                          "nodeType": "YulFunctionCall",
                          "src": "21602:16:71"
                        },
                        "nativeSrc": "21602:16:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "21602:16:71"
                      },
                      {
                        "nativeSrc": "21631:42:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "21631:42:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "21662:4:71",
                              "nodeType": "YulLiteral",
                              "src": "21662:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "21668:4:71",
                              "nodeType": "YulLiteral",
                              "src": "21668:4:71",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "21652:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "21652:9:71"
                          },
                          "nativeSrc": "21652:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "21652:21:71"
                        },
                        "variables": [
                          {
                            "name": "toBalanceSlot",
                            "nativeSrc": "21635:13:71",
                            "nodeType": "YulTypedName",
                            "src": "21635:13:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "toBalanceSlot",
                              "nativeSrc": "21877:13:71",
                              "nodeType": "YulIdentifier",
                              "src": "21877:13:71"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "toBalanceSlot",
                                      "nativeSrc": "21902:13:71",
                                      "nodeType": "YulIdentifier",
                                      "src": "21902:13:71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "21896:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "21896:5:71"
                                  },
                                  "nativeSrc": "21896:20:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "21896:20:71"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "21918:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "21918:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "21892:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "21892:3:71"
                              },
                              "nativeSrc": "21892:33:71",
                              "nodeType": "YulFunctionCall",
                              "src": "21892:33:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "21870:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "21870:6:71"
                          },
                          "nativeSrc": "21870:56:71",
                          "nodeType": "YulFunctionCall",
                          "src": "21870:56:71"
                        },
                        "nativeSrc": "21870:56:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "21870:56:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "21988:4:71",
                              "nodeType": "YulLiteral",
                              "src": "21988:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "21994:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "21994:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "21981:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "21981:6:71"
                          },
                          "nativeSrc": "21981:20:71",
                          "nodeType": "YulFunctionCall",
                          "src": "21981:20:71"
                        },
                        "nativeSrc": "21981:20:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "21981:20:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22019:4:71",
                              "nodeType": "YulLiteral",
                              "src": "22019:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "22025:4:71",
                              "nodeType": "YulLiteral",
                              "src": "22025:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "_TRANSFER_EVENT_SIGNATURE",
                              "nativeSrc": "22031:25:71",
                              "nodeType": "YulIdentifier",
                              "src": "22031:25:71"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "22062:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "22062:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from_",
                                  "nativeSrc": "22066:5:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "22066:5:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "22058:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "22058:3:71"
                              },
                              "nativeSrc": "22058:14:71",
                              "nodeType": "YulFunctionCall",
                              "src": "22058:14:71"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "22078:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "22078:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "22088:4:71",
                                      "nodeType": "YulLiteral",
                                      "src": "22088:4:71",
                                      "type": "",
                                      "value": "0x0c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "22082:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "22082:5:71"
                                  },
                                  "nativeSrc": "22082:11:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "22082:11:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "22074:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "22074:3:71"
                              },
                              "nativeSrc": "22074:20:71",
                              "nodeType": "YulFunctionCall",
                              "src": "22074:20:71"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "22014:4:71",
                            "nodeType": "YulIdentifier",
                            "src": "22014:4:71"
                          },
                          "nativeSrc": "22014:81:71",
                          "nodeType": "YulFunctionCall",
                          "src": "22014:81:71"
                        },
                        "nativeSrc": "22014:81:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "22014:81:71"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55708,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21086:18:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55696,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22031:25:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56005,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21283:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56005,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21532:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56005,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21918:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56005,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21994:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56001,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20985:4:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56003,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21615:2:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 56014,
                  "nodeType": "InlineAssembly",
                  "src": "20941:1164:71"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56016,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56001,
                        "src": "22134:4:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56017,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56003,
                        "src": "22140:2:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56018,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56005,
                        "src": "22144:6:71",
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
                      "id": 56015,
                      "name": "_afterTokenTransfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56068,
                      "src": "22114:19:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 56019,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "22114:37:71",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56020,
                  "nodeType": "ExpressionStatement",
                  "src": "22114:37:71"
                }
              ]
            },
            "documentation": {
              "id": 55999,
              "nodeType": "StructuredDocumentation",
              "src": "20703:54:71",
              "text": "@dev Moves `amount` of tokens from `from` to `to`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_transfer",
            "nameLocation": "20771:9:71",
            "parameters": {
              "id": 56006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56001,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "20789:4:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56022,
                  "src": "20781:12:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56000,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20781:7:71",
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
                  "id": 56003,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "20803:2:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56022,
                  "src": "20795:10:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56002,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20795:7:71",
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
                  "id": 56005,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "20815:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56022,
                  "src": "20807:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56004,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20807:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20780:42:71"
            },
            "returnParameters": {
              "id": 56007,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20840:0:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56034,
            "nodeType": "FunctionDefinition",
            "src": "22532:947:71",
            "nodes": [],
            "body": {
              "id": 56033,
              "nodeType": "Block",
              "src": "22622:857:71",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "22684:789:71",
                    "nodeType": "YulBlock",
                    "src": "22684:789:71",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22767:4:71",
                              "nodeType": "YulLiteral",
                              "src": "22767:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "spender",
                              "nativeSrc": "22773:7:71",
                              "nodeType": "YulIdentifier",
                              "src": "22773:7:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "22760:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "22760:6:71"
                          },
                          "nativeSrc": "22760:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "22760:21:71"
                        },
                        "nativeSrc": "22760:21:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "22760:21:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22801:4:71",
                              "nodeType": "YulLiteral",
                              "src": "22801:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "name": "_ALLOWANCE_SLOT_SEED",
                              "nativeSrc": "22807:20:71",
                              "nodeType": "YulIdentifier",
                              "src": "22807:20:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "22794:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "22794:6:71"
                          },
                          "nativeSrc": "22794:34:71",
                          "nodeType": "YulFunctionCall",
                          "src": "22794:34:71"
                        },
                        "nativeSrc": "22794:34:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "22794:34:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22848:4:71",
                              "nodeType": "YulLiteral",
                              "src": "22848:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "owner",
                              "nativeSrc": "22854:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "22854:5:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "22841:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "22841:6:71"
                          },
                          "nativeSrc": "22841:19:71",
                          "nodeType": "YulFunctionCall",
                          "src": "22841:19:71"
                        },
                        "nativeSrc": "22841:19:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "22841:19:71"
                      },
                      {
                        "nativeSrc": "22873:42:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "22873:42:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "22904:4:71",
                              "nodeType": "YulLiteral",
                              "src": "22904:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "22910:4:71",
                              "nodeType": "YulLiteral",
                              "src": "22910:4:71",
                              "type": "",
                              "value": "0x34"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "22894:9:71",
                            "nodeType": "YulIdentifier",
                            "src": "22894:9:71"
                          },
                          "nativeSrc": "22894:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "22894:21:71"
                        },
                        "variables": [
                          {
                            "name": "allowanceSlot",
                            "nativeSrc": "22877:13:71",
                            "nodeType": "YulTypedName",
                            "src": "22877:13:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "22928:38:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "22928:38:71",
                        "value": {
                          "arguments": [
                            {
                              "name": "allowanceSlot",
                              "nativeSrc": "22952:13:71",
                              "nodeType": "YulIdentifier",
                              "src": "22952:13:71"
                            }
                          ],
                          "functionName": {
                            "name": "sload",
                            "nativeSrc": "22946:5:71",
                            "nodeType": "YulIdentifier",
                            "src": "22946:5:71"
                          },
                          "nativeSrc": "22946:20:71",
                          "nodeType": "YulFunctionCall",
                          "src": "22946:20:71"
                        },
                        "variables": [
                          {
                            "name": "allowance_",
                            "nativeSrc": "22932:10:71",
                            "nodeType": "YulTypedName",
                            "src": "22932:10:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "23067:396:71",
                          "nodeType": "YulBlock",
                          "src": "23067:396:71",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "23192:133:71",
                                "nodeType": "YulBlock",
                                "src": "23192:133:71",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23221:4:71",
                                          "nodeType": "YulLiteral",
                                          "src": "23221:4:71",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23227:10:71",
                                          "nodeType": "YulLiteral",
                                          "src": "23227:10:71",
                                          "type": "",
                                          "value": "0x13be252b"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23214:6:71",
                                        "nodeType": "YulIdentifier",
                                        "src": "23214:6:71"
                                      },
                                      "nativeSrc": "23214:24:71",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23214:24:71"
                                    },
                                    "nativeSrc": "23214:24:71",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23214:24:71"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23296:4:71",
                                          "nodeType": "YulLiteral",
                                          "src": "23296:4:71",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23302:4:71",
                                          "nodeType": "YulLiteral",
                                          "src": "23302:4:71",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "23289:6:71",
                                        "nodeType": "YulIdentifier",
                                        "src": "23289:6:71"
                                      },
                                      "nativeSrc": "23289:18:71",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23289:18:71"
                                    },
                                    "nativeSrc": "23289:18:71",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23289:18:71"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "amount",
                                    "nativeSrc": "23172:6:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "23172:6:71"
                                  },
                                  {
                                    "name": "allowance_",
                                    "nativeSrc": "23180:10:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "23180:10:71"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nativeSrc": "23169:2:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "23169:2:71"
                                },
                                "nativeSrc": "23169:22:71",
                                "nodeType": "YulFunctionCall",
                                "src": "23169:22:71"
                              },
                              "nativeSrc": "23166:159:71",
                              "nodeType": "YulIf",
                              "src": "23166:159:71"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "allowanceSlot",
                                    "nativeSrc": "23410:13:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "23410:13:71"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "allowance_",
                                        "nativeSrc": "23429:10:71",
                                        "nodeType": "YulIdentifier",
                                        "src": "23429:10:71"
                                      },
                                      {
                                        "name": "amount",
                                        "nativeSrc": "23441:6:71",
                                        "nodeType": "YulIdentifier",
                                        "src": "23441:6:71"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sub",
                                      "nativeSrc": "23425:3:71",
                                      "nodeType": "YulIdentifier",
                                      "src": "23425:3:71"
                                    },
                                    "nativeSrc": "23425:23:71",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23425:23:71"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nativeSrc": "23403:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "23403:6:71"
                                },
                                "nativeSrc": "23403:46:71",
                                "nodeType": "YulFunctionCall",
                                "src": "23403:46:71"
                              },
                              "nativeSrc": "23403:46:71",
                              "nodeType": "YulExpressionStatement",
                              "src": "23403:46:71"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "allowance_",
                              "nativeSrc": "23052:10:71",
                              "nodeType": "YulIdentifier",
                              "src": "23052:10:71"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "23064:1:71",
                              "nodeType": "YulLiteral",
                              "src": "23064:1:71",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "23048:3:71",
                            "nodeType": "YulIdentifier",
                            "src": "23048:3:71"
                          },
                          "nativeSrc": "23048:18:71",
                          "nodeType": "YulFunctionCall",
                          "src": "23048:18:71"
                        },
                        "nativeSrc": "23045:418:71",
                        "nodeType": "YulIf",
                        "src": "23045:418:71"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55712,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22807:20:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56029,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23172:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56029,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23441:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56025,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22854:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56027,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22773:7:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 56032,
                  "nodeType": "InlineAssembly",
                  "src": "22675:798:71"
                }
              ]
            },
            "documentation": {
              "id": 56023,
              "nodeType": "StructuredDocumentation",
              "src": "22447:80:71",
              "text": "@dev Updates the allowance of `owner` for `spender` based on spent `amount`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_spendAllowance",
            "nameLocation": "22541:15:71",
            "parameters": {
              "id": 56030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56025,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "22565:5:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56034,
                  "src": "22557:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56024,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22557:7:71",
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
                  "id": 56027,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "22580:7:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56034,
                  "src": "22572:15:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56026,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22572:7:71",
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
                  "id": 56029,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "22597:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56034,
                  "src": "22589:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56028,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22589:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22556:48:71"
            },
            "returnParameters": {
              "id": 56031,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22622:0:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56046,
            "nodeType": "FunctionDefinition",
            "src": "23612:580:71",
            "nodes": [],
            "body": {
              "id": 56045,
              "nodeType": "Block",
              "src": "23695:497:71",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "23757:429:71",
                    "nodeType": "YulBlock",
                    "src": "23757:429:71",
                    "statements": [
                      {
                        "nativeSrc": "23771:28:71",
                        "nodeType": "YulVariableDeclaration",
                        "src": "23771:28:71",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "23789:2:71",
                              "nodeType": "YulLiteral",
                              "src": "23789:2:71",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "name": "owner",
                              "nativeSrc": "23793:5:71",
                              "nodeType": "YulIdentifier",
                              "src": "23793:5:71"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nativeSrc": "23785:3:71",
                            "nodeType": "YulIdentifier",
                            "src": "23785:3:71"
                          },
                          "nativeSrc": "23785:14:71",
                          "nodeType": "YulFunctionCall",
                          "src": "23785:14:71"
                        },
                        "variables": [
                          {
                            "name": "owner_",
                            "nativeSrc": "23775:6:71",
                            "nodeType": "YulTypedName",
                            "src": "23775:6:71",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "23883:4:71",
                              "nodeType": "YulLiteral",
                              "src": "23883:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "spender",
                              "nativeSrc": "23889:7:71",
                              "nodeType": "YulIdentifier",
                              "src": "23889:7:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "23876:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "23876:6:71"
                          },
                          "nativeSrc": "23876:21:71",
                          "nodeType": "YulFunctionCall",
                          "src": "23876:21:71"
                        },
                        "nativeSrc": "23876:21:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "23876:21:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "23917:4:71",
                              "nodeType": "YulLiteral",
                              "src": "23917:4:71",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "owner_",
                                  "nativeSrc": "23926:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "23926:6:71"
                                },
                                {
                                  "name": "_ALLOWANCE_SLOT_SEED",
                                  "nativeSrc": "23934:20:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "23934:20:71"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "23923:2:71",
                                "nodeType": "YulIdentifier",
                                "src": "23923:2:71"
                              },
                              "nativeSrc": "23923:32:71",
                              "nodeType": "YulFunctionCall",
                              "src": "23923:32:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "23910:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "23910:6:71"
                          },
                          "nativeSrc": "23910:46:71",
                          "nodeType": "YulFunctionCall",
                          "src": "23910:46:71"
                        },
                        "nativeSrc": "23910:46:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "23910:46:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "23986:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "23986:4:71",
                                  "type": "",
                                  "value": "0x0c"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "23992:4:71",
                                  "nodeType": "YulLiteral",
                                  "src": "23992:4:71",
                                  "type": "",
                                  "value": "0x34"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "23976:9:71",
                                "nodeType": "YulIdentifier",
                                "src": "23976:9:71"
                              },
                              "nativeSrc": "23976:21:71",
                              "nodeType": "YulFunctionCall",
                              "src": "23976:21:71"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "23999:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "23999:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "23969:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "23969:6:71"
                          },
                          "nativeSrc": "23969:37:71",
                          "nodeType": "YulFunctionCall",
                          "src": "23969:37:71"
                        },
                        "nativeSrc": "23969:37:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "23969:37:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "24068:4:71",
                              "nodeType": "YulLiteral",
                              "src": "24068:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "24074:6:71",
                              "nodeType": "YulIdentifier",
                              "src": "24074:6:71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "24061:6:71",
                            "nodeType": "YulIdentifier",
                            "src": "24061:6:71"
                          },
                          "nativeSrc": "24061:20:71",
                          "nodeType": "YulFunctionCall",
                          "src": "24061:20:71"
                        },
                        "nativeSrc": "24061:20:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "24061:20:71"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "24099:4:71",
                              "nodeType": "YulLiteral",
                              "src": "24099:4:71",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "24105:4:71",
                              "nodeType": "YulLiteral",
                              "src": "24105:4:71",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "_APPROVAL_EVENT_SIGNATURE",
                              "nativeSrc": "24111:25:71",
                              "nodeType": "YulIdentifier",
                              "src": "24111:25:71"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "24142:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "24142:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "owner_",
                                  "nativeSrc": "24146:6:71",
                                  "nodeType": "YulIdentifier",
                                  "src": "24146:6:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "24138:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "24138:3:71"
                              },
                              "nativeSrc": "24138:15:71",
                              "nodeType": "YulFunctionCall",
                              "src": "24138:15:71"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "24159:2:71",
                                  "nodeType": "YulLiteral",
                                  "src": "24159:2:71",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24169:4:71",
                                      "nodeType": "YulLiteral",
                                      "src": "24169:4:71",
                                      "type": "",
                                      "value": "0x2c"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nativeSrc": "24163:5:71",
                                    "nodeType": "YulIdentifier",
                                    "src": "24163:5:71"
                                  },
                                  "nativeSrc": "24163:11:71",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24163:11:71"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "24155:3:71",
                                "nodeType": "YulIdentifier",
                                "src": "24155:3:71"
                              },
                              "nativeSrc": "24155:20:71",
                              "nodeType": "YulFunctionCall",
                              "src": "24155:20:71"
                            }
                          ],
                          "functionName": {
                            "name": "log3",
                            "nativeSrc": "24094:4:71",
                            "nodeType": "YulIdentifier",
                            "src": "24094:4:71"
                          },
                          "nativeSrc": "24094:82:71",
                          "nodeType": "YulFunctionCall",
                          "src": "24094:82:71"
                        },
                        "nativeSrc": "24094:82:71",
                        "nodeType": "YulExpressionStatement",
                        "src": "24094:82:71"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 55712,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23934:20:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55700,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24111:25:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56041,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23999:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56041,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24074:6:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56037,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23793:5:71",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56039,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23889:7:71",
                      "valueSize": 1
                    }
                  ],
                  "id": 56044,
                  "nodeType": "InlineAssembly",
                  "src": "23748:438:71"
                }
              ]
            },
            "documentation": {
              "id": 56035,
              "nodeType": "StructuredDocumentation",
              "src": "23485:122:71",
              "text": "@dev Sets `amount` as the allowance of `spender` over the tokens of `owner`.\n Emits a {Approval} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "23621:8:71",
            "parameters": {
              "id": 56042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56037,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "23638:5:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56046,
                  "src": "23630:13:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56036,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23630:7:71",
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
                  "id": 56039,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "23653:7:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56046,
                  "src": "23645:15:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56038,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23645:7:71",
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
                  "id": 56041,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "23670:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56046,
                  "src": "23662:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23662:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23629:48:71"
            },
            "returnParameters": {
              "id": 56043,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23695:0:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56057,
            "nodeType": "FunctionDefinition",
            "src": "24588:91:71",
            "nodes": [],
            "body": {
              "id": 56056,
              "nodeType": "Block",
              "src": "24677:2:71",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 56047,
              "nodeType": "StructuredDocumentation",
              "src": "24481:102:71",
              "text": "@dev Hook that is called before any transfer of tokens.\n This includes minting and burning."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_beforeTokenTransfer",
            "nameLocation": "24597:20:71",
            "parameters": {
              "id": 56054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56049,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "24626:4:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56057,
                  "src": "24618:12:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56048,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24618:7:71",
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
                  "id": 56051,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "24640:2:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56057,
                  "src": "24632:10:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56050,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24632:7:71",
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
                  "id": 56053,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "24652:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56057,
                  "src": "24644:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56052,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24644:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24617:42:71"
            },
            "returnParameters": {
              "id": 56055,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24677:0:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 56068,
            "nodeType": "FunctionDefinition",
            "src": "24791:90:71",
            "nodes": [],
            "body": {
              "id": 56067,
              "nodeType": "Block",
              "src": "24879:2:71",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 56058,
              "nodeType": "StructuredDocumentation",
              "src": "24685:101:71",
              "text": "@dev Hook that is called after any transfer of tokens.\n This includes minting and burning."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_afterTokenTransfer",
            "nameLocation": "24800:19:71",
            "parameters": {
              "id": 56065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56060,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "24828:4:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56068,
                  "src": "24820:12:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56059,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24820:7:71",
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
                  "id": 56062,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "24842:2:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56068,
                  "src": "24834:10:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24834:7:71",
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
                  "id": 56064,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "24854:6:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 56068,
                  "src": "24846:14:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56063,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24846:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24819:42:71"
            },
            "returnParameters": {
              "id": 56066,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24879:0:71"
            },
            "scope": 56069,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "ERC20",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 55653,
          "nodeType": "StructuredDocumentation",
          "src": "57:1083:71",
          "text": "@notice Simple ERC20 + EIP-2612 implementation.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/tokens/ERC20.sol)\n @author Modified from Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)\n @author Modified from OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)\n @dev Note:\n - The ERC20 standard allows minting and transferring to and from the zero address,\n   minting and transferring zero tokens, as well as self-approvals.\n   For performance, this implementation WILL NOT revert for such actions.\n   Please add any checks with overrides if desired.\n - The `permit` function uses the ecrecover precompile (0x1).\n If you are overriding:\n - NEVER violate the ERC20 invariant:\n   the total sum of all balances must be equal to `totalSupply()`.\n - Check that the overridden function is actually used in the function you want to\n   change the behavior of. Much of the code has been manually inlined for performance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          56069
        ],
        "name": "ERC20",
        "nameLocation": "1158:5:71",
        "scope": 56070,
        "usedErrors": [
          55656,
          55659,
          55662,
          55665,
          55668,
          55671,
          55674
        ],
        "usedEvents": [
          55683,
          55692
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 71
} as const;