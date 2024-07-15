export const IAccessControl = {
  "abi": [
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
    "getRoleAdmin(bytes32)": "248a9ca3",
    "grantRole(bytes32,address)": "2f2ff15d",
    "hasRole(bytes32,address)": "91d14854",
    "renounceRole(bytes32,address)": "36568abe",
    "revokeRole(bytes32,address)": "d547741f"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AccessControlBadConfirmation\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"neededRole\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"callerConfirmation\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"External interface of AccessControl declared to support ERC165 detection.\",\"errors\":{\"AccessControlBadConfirmation()\":[{\"details\":\"The caller of a function is not the expected one. NOTE: Don't confuse with {AccessControlUnauthorizedAccount}.\"}],\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"details\":\"The `account` is missing a role.\"}]},\"events\":{\"RoleAdminChanged(bytes32,bytes32,bytes32)\":{\"details\":\"Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this.\"},\"RoleGranted(bytes32,address,address)\":{\"details\":\"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.\"},\"RoleRevoked(bytes32,address,address)\":{\"details\":\"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)\"}},\"kind\":\"dev\",\"methods\":{\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {AccessControl-_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/access/IAccessControl.sol\":\"IAccessControl\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]}},\"version\":1}",
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
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getRoleAdmin(bytes32)": {
            "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {AccessControl-_setRoleAdmin}."
          },
          "grantRole(bytes32,address)": {
            "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role."
          },
          "hasRole(bytes32,address)": {
            "details": "Returns `true` if `account` has been granted `role`."
          },
          "renounceRole(bytes32,address)": {
            "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`."
          },
          "revokeRole(bytes32,address)": {
            "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role."
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
        "node_modules/@openzeppelin/contracts/access/IAccessControl.sol": "IAccessControl"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/access/IAccessControl.sol": {
        "keccak256": "0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41",
        "urls": [
          "bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26",
          "dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/access/IAccessControl.sol",
    "id": 47823,
    "exportedSymbols": {
      "IAccessControl": [
        47822
      ]
    },
    "nodeType": "SourceUnit",
    "src": "109:3150:29",
    "nodes": [
      {
        "id": 47741,
        "nodeType": "PragmaDirective",
        "src": "109:24:29",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 47822,
        "nodeType": "ContractDefinition",
        "src": "225:3033:29",
        "nodes": [
          {
            "id": 47749,
            "nodeType": "ErrorDefinition",
            "src": "317:76:29",
            "nodes": [],
            "documentation": {
              "id": 47743,
              "nodeType": "StructuredDocumentation",
              "src": "256:56:29",
              "text": " @dev The `account` is missing a role."
            },
            "errorSelector": "e2517d3f",
            "name": "AccessControlUnauthorizedAccount",
            "nameLocation": "323:32:29",
            "parameters": {
              "id": 47748,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47745,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "364:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47749,
                  "src": "356:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47744,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:7:29",
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
                  "id": 47747,
                  "mutability": "mutable",
                  "name": "neededRole",
                  "nameLocation": "381:10:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47749,
                  "src": "373:18:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47746,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "355:37:29"
            }
          },
          {
            "id": 47752,
            "nodeType": "ErrorDefinition",
            "src": "552:37:29",
            "nodes": [],
            "documentation": {
              "id": 47750,
              "nodeType": "StructuredDocumentation",
              "src": "399:148:29",
              "text": " @dev The caller of a function is not the expected one.\n NOTE: Don't confuse with {AccessControlUnauthorizedAccount}."
            },
            "errorSelector": "6697b232",
            "name": "AccessControlBadConfirmation",
            "nameLocation": "558:28:29",
            "parameters": {
              "id": 47751,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "586:2:29"
            }
          },
          {
            "id": 47761,
            "nodeType": "EventDefinition",
            "src": "854:110:29",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 47753,
              "nodeType": "StructuredDocumentation",
              "src": "595:254:29",
              "text": " @dev Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole`\n `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\n {RoleAdminChanged} not being emitted signaling this."
            },
            "eventSelector": "bd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff",
            "name": "RoleAdminChanged",
            "nameLocation": "860:16:29",
            "parameters": {
              "id": 47760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47755,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "893:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47761,
                  "src": "877:20:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47754,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "877:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47757,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "previousAdminRole",
                  "nameLocation": "915:17:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47761,
                  "src": "899:33:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47756,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "899:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47759,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newAdminRole",
                  "nameLocation": "950:12:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47761,
                  "src": "934:28:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47758,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "934:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "876:87:29"
            }
          },
          {
            "id": 47770,
            "nodeType": "EventDefinition",
            "src": "1187:89:29",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 47762,
              "nodeType": "StructuredDocumentation",
              "src": "970:212:29",
              "text": " @dev Emitted when `account` is granted `role`.\n `sender` is the account that originated the contract call, an admin role\n bearer except when using {AccessControl-_setupRole}."
            },
            "eventSelector": "2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
            "name": "RoleGranted",
            "nameLocation": "1193:11:29",
            "parameters": {
              "id": 47769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47764,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1221:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47770,
                  "src": "1205:20:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47763,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1205:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47766,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1243:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47770,
                  "src": "1227:23:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47765,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1227:7:29",
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
                  "id": 47768,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "1268:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47770,
                  "src": "1252:22:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47767,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1204:71:29"
            }
          },
          {
            "id": 47779,
            "nodeType": "EventDefinition",
            "src": "1562:89:29",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 47771,
              "nodeType": "StructuredDocumentation",
              "src": "1282:275:29",
              "text": " @dev Emitted when `account` is revoked `role`.\n `sender` is the account that originated the contract call:\n   - if using `revokeRole`, it is the admin role bearer\n   - if using `renounceRole`, it is the role bearer (i.e. `account`)"
            },
            "eventSelector": "f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b",
            "name": "RoleRevoked",
            "nameLocation": "1568:11:29",
            "parameters": {
              "id": 47778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47773,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1596:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47779,
                  "src": "1580:20:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47772,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1580:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47775,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1618:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47779,
                  "src": "1602:23:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47774,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1602:7:29",
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
                  "id": 47777,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "1643:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47779,
                  "src": "1627:22:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47776,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1627:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1579:71:29"
            }
          },
          {
            "id": 47789,
            "nodeType": "FunctionDefinition",
            "src": "1738:77:29",
            "nodes": [],
            "documentation": {
              "id": 47780,
              "nodeType": "StructuredDocumentation",
              "src": "1657:76:29",
              "text": " @dev Returns `true` if `account` has been granted `role`."
            },
            "functionSelector": "91d14854",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "hasRole",
            "nameLocation": "1747:7:29",
            "parameters": {
              "id": 47785,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47782,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1763:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47789,
                  "src": "1755:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47781,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1755:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47784,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1777:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47789,
                  "src": "1769:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47783,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1769:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1754:31:29"
            },
            "returnParameters": {
              "id": 47788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47787,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47789,
                  "src": "1809:4:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47786,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1809:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1808:6:29"
            },
            "scope": 47822,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 47797,
            "nodeType": "FunctionDefinition",
            "src": "2010:68:29",
            "nodes": [],
            "documentation": {
              "id": 47790,
              "nodeType": "StructuredDocumentation",
              "src": "1821:184:29",
              "text": " @dev Returns the admin role that controls `role`. See {grantRole} and\n {revokeRole}.\n To change a role's admin, use {AccessControl-_setRoleAdmin}."
            },
            "functionSelector": "248a9ca3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRoleAdmin",
            "nameLocation": "2019:12:29",
            "parameters": {
              "id": 47793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47792,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2040:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47797,
                  "src": "2032:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47791,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2032:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2031:14:29"
            },
            "returnParameters": {
              "id": 47796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47795,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47797,
                  "src": "2069:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47794,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2069:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2068:9:29"
            },
            "scope": 47822,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 47805,
            "nodeType": "FunctionDefinition",
            "src": "2328:59:29",
            "nodes": [],
            "documentation": {
              "id": 47798,
              "nodeType": "StructuredDocumentation",
              "src": "2084:239:29",
              "text": " @dev Grants `role` to `account`.\n If `account` had not been already granted `role`, emits a {RoleGranted}\n event.\n Requirements:\n - the caller must have ``role``'s admin role."
            },
            "functionSelector": "2f2ff15d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "grantRole",
            "nameLocation": "2337:9:29",
            "parameters": {
              "id": 47803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47800,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2355:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47805,
                  "src": "2347:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47799,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2347:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47802,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2369:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47805,
                  "src": "2361:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47801,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2361:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2346:31:29"
            },
            "returnParameters": {
              "id": 47804,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2386:0:29"
            },
            "scope": 47822,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 47813,
            "nodeType": "FunctionDefinition",
            "src": "2621:60:29",
            "nodes": [],
            "documentation": {
              "id": 47806,
              "nodeType": "StructuredDocumentation",
              "src": "2393:223:29",
              "text": " @dev Revokes `role` from `account`.\n If `account` had been granted `role`, emits a {RoleRevoked} event.\n Requirements:\n - the caller must have ``role``'s admin role."
            },
            "functionSelector": "d547741f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokeRole",
            "nameLocation": "2630:10:29",
            "parameters": {
              "id": 47811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47808,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2649:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47813,
                  "src": "2641:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47807,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2641:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47810,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2663:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47813,
                  "src": "2655:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47809,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2655:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2640:31:29"
            },
            "returnParameters": {
              "id": 47812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2680:0:29"
            },
            "scope": 47822,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 47821,
            "nodeType": "FunctionDefinition",
            "src": "3183:73:29",
            "nodes": [],
            "documentation": {
              "id": 47814,
              "nodeType": "StructuredDocumentation",
              "src": "2687:491:29",
              "text": " @dev Revokes `role` from the calling account.\n Roles are often managed via {grantRole} and {revokeRole}: this function's\n purpose is to provide a mechanism for accounts to lose their privileges\n if they are compromised (such as when a trusted device is misplaced).\n If the calling account had been granted `role`, emits a {RoleRevoked}\n event.\n Requirements:\n - the caller must be `callerConfirmation`."
            },
            "functionSelector": "36568abe",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "renounceRole",
            "nameLocation": "3192:12:29",
            "parameters": {
              "id": 47819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47816,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3213:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47821,
                  "src": "3205:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47815,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3205:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47818,
                  "mutability": "mutable",
                  "name": "callerConfirmation",
                  "nameLocation": "3227:18:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 47821,
                  "src": "3219:26:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47817,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3219:7:29",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3204:42:29"
            },
            "returnParameters": {
              "id": 47820,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3255:0:29"
            },
            "scope": 47822,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IAccessControl",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 47742,
          "nodeType": "StructuredDocumentation",
          "src": "135:89:29",
          "text": " @dev External interface of AccessControl declared to support ERC165 detection."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          47822
        ],
        "name": "IAccessControl",
        "nameLocation": "235:14:29",
        "scope": 47823,
        "usedErrors": [
          47749,
          47752
        ],
        "usedEvents": [
          47761,
          47770,
          47779
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 29
} as const;