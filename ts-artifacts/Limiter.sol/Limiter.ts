export const Limiter = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_usdPerEth",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_globalUsdLimit",
          "type": "uint256",
          "internalType": "uint256"
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
      "name": "computeGlobalDepositsInUsd",
      "inputs": [
        {
          "name": "vaults",
          "type": "address[]",
          "internalType": "contract IVault[]"
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
      "name": "computeUserMaximumDeposit",
      "inputs": [
        {
          "name": "vaults",
          "type": "address[]",
          "internalType": "contract IVault[]"
        },
        {
          "name": "vaultToDeposit",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "user",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "walletBalance",
          "type": "uint256",
          "internalType": "uint256"
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
      "name": "denormalizeVaultAssetValue",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
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
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "globalUsdLimit",
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
      "name": "isLimitBreached",
      "inputs": [
        {
          "name": "vaults",
          "type": "address[]",
          "internalType": "contract IVault[]"
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
      "name": "normalizeVaultAssetValue",
      "inputs": [
        {
          "name": "vault",
          "type": "address",
          "internalType": "contract IVault"
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
          "type": "uint256",
          "internalType": "uint256"
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
      "name": "remainingGlobalUsdLimit",
      "inputs": [
        {
          "name": "vaults",
          "type": "address[]",
          "internalType": "contract IVault[]"
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
      "name": "setGlobalUsdLimit",
      "inputs": [
        {
          "name": "_limit",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setUsdPerEth",
      "inputs": [
        {
          "name": "_usdPerEth",
          "type": "uint256",
          "internalType": "uint256"
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
      "name": "usdPerEth",
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
    },
    {
      "type": "error",
      "name": "UnsupportedAsset",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x608034608657601f610e4238819003918201601f19168301916001600160401b03831184841017608b578084926040948552833981010312608657602081519101519033638b78c6d819553360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3600155600055604051610da090816100a28239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6040608081526004908136101561001557600080fd5b600091823560e01c908163175b0d7c1461064857816325692962146105fd57816354d1f13d146105b757816360bce2f41461059857816360cfb20414610557578163715018a6146104f6578163749936cf146104b95781638da5cb5b14610465578163a10c285314610428578163b6753e45146103ff578163ca36695c146103dd578163d0c59226146103bc578163d25cc4301461039f578163d8911d6814610255578163f04e283e146101aa578163f2fde38b14610114575063fee81cf4146100de57600080fd5b34610110576020600319360112610110576020916100fa610671565b9063389a75e1600c525281600c20549051908152f35b5080fd5b839060206003193601126101105761012a610671565b90610133610d32565b8160601b1561019f575073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a35580f35b637448fbae8352601cfd5b836020600319360112610252576101bf610671565b6101c7610d32565b63389a75e1600c528082526020600c20928354421161024757508173ffffffffffffffffffffffffffffffffffffffff929355167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a35580f35b636f5e88188352601cfd5b80fd5b90503461039b57608060031936011261039b57803567ffffffffffffffff8111610397576102869036908301610709565b6024359073ffffffffffffffffffffffffffffffffffffffff9081831691828403610393576044359081168091036103935760246102c5602093610b92565b95875194859384927f402d267d0000000000000000000000000000000000000000000000000000000084528301525afa908115610389578591610352575b509060209461031661033b94938361081f565b6103226064358461081f565b915083811061034a575b50828110610342575b50610bf3565b9051908152f35b915038610335565b92503861032c565b90506020813d602011610381575b8161036d60209383610699565b8101031261037d57516020610303565b8480fd5b3d9150610360565b84513d87823e3d90fd5b8680fd5b8380fd5b8280fd5b505034610110578160031936011261011057602091549051908152f35b839034610110576020600319360112610110576103d7610d32565b35815580f35b839034610110576020600319360112610110576103f8610d32565b3560015580f35b50503461011057806003193601126101105760209061033b61041f610671565b60243590610bf3565b8284346102525760206003193601126102525782359067ffffffffffffffff8211610252575061046060209361033b92369101610709565b610b92565b50503461011057816003193601126101105760209073ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7487392754915191168152f35b8284346102525760206003193601126102525782359067ffffffffffffffff821161025257506104f160209361033b92369101610709565b610a8a565b83806003193601126102525761050a610d32565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a35580f35b90503461039b57602060031936011261039b57803567ffffffffffffffff8111610397576104f16020949261058e92369101610709565b9054109051908152f35b5050346101105781600319360112610110576020906001549051908152f35b83806003193601126102525763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b83806003193601126102525763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b50503461011057806003193601126101105760209061033b610668610671565b6024359061081f565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361069457565b600080fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176106da57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f820112156106945780359160209167ffffffffffffffff84116106da578360051b906040519461073e85840187610699565b85528380860192820101928311610694578301905b828210610761575050505090565b813573ffffffffffffffffffffffffffffffffffffffff81168103610694578152908301908301610753565b90816020910312610694575160058110156106945790565b818102929181159184041417156107b857565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b90816020910312610694575160ff811681036106945790565b60ff166012039060ff82116107b857565b604d81116107b857600a0a90565b73ffffffffffffffffffffffffffffffffffffffff166040908151907f3fe3347a000000000000000000000000000000000000000000000000000000009081835260209160049383818681865afa908115610a3c57600091610a1f575b5060058110156109f157600203610927575081908451938480927f313ce5670000000000000000000000000000000000000000000000000000000082525afa92831561091d57506108e16108ed94936108e79360ff936000926108f0575b5050610800565b16610811565b906107a5565b90565b61090f9250803d10610916575b6109078183610699565b8101906107e7565b38806108da565b503d6108fd565b513d6000823e3d90fd5b829084869596518094819382525afa9182156109e6576000926109b9575b5050600581101561098b576001036109655750506001546108ed916107a5565b517f24a01144000000000000000000000000000000000000000000000000000000008152fd5b6021837f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b6109d89250803d106109df575b6109d08183610699565b81019061078d565b3880610945565b503d6109c6565b83513d6000823e3d90fd5b6021857f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b610a369150843d86116109df576109d08183610699565b3861087c565b86513d6000823e3d90fd5b8051821015610a5b5760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000805b8351821015610b8d5773ffffffffffffffffffffffffffffffffffffffff80610ab88487610a47565b511690610ac58487610a47565b511690604080518080947f01e1d114000000000000000000000000000000000000000000000000000000008252602091829160049788915afa92831561091d5750600092610b5c575b5050610b199161081f565b8201809211610b2e5750600190910190610a8f565b6011907f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b81819392933d8311610b86575b610b738183610699565b81010312610252575051610b1938610b0e565b503d610b69565b925050565b610b9b90610a8a565b6000549080821115610bb35781039081116107b85790565b5050600090565b8115610bc4570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff166040908151907f3fe3347a000000000000000000000000000000000000000000000000000000009081835260209160049383818681865afa908115610a3c57600091610d15575b5060058110156109f157600203610cba575081908451938480927f313ce5670000000000000000000000000000000000000000000000000000000082525afa92831561091d57506108e16108ed9493610cb49360ff936000926108f0575050610800565b90610bba565b829084869596518094819382525afa9182156109e657600092610cf8575b5050600581101561098b576001036109655750506001546108ed91610bba565b610d0e9250803d106109df576109d08183610699565b3880610cd8565b610d2c9150843d86116109df576109d08183610699565b38610c50565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927543303610d5c57565b6382b429006000526004601cfdfea26469706673582212202a02c98f95bcb98d67dd164c46fe7420f29f7ba3b6dcfab946b1a04ad568c52164736f6c63430008190033",
    "sourceMap": "309:3338:81:-:0;;;;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;-1:-1:-1;;;;;309:3338:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;641:10;;5710:347:69;;;641:10:81;-1:-1:-1;5710:347:69;;;;309:3338:81;;-1:-1:-1;309:3338:81;;;;;;;;;;;-1:-1:-1;309:3338:81;;;;;;-1:-1:-1;309:3338:81;;;;;-1:-1:-1;309:3338:81",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6040608081526004908136101561001557600080fd5b600091823560e01c908163175b0d7c1461064857816325692962146105fd57816354d1f13d146105b757816360bce2f41461059857816360cfb20414610557578163715018a6146104f6578163749936cf146104b95781638da5cb5b14610465578163a10c285314610428578163b6753e45146103ff578163ca36695c146103dd578163d0c59226146103bc578163d25cc4301461039f578163d8911d6814610255578163f04e283e146101aa578163f2fde38b14610114575063fee81cf4146100de57600080fd5b34610110576020600319360112610110576020916100fa610671565b9063389a75e1600c525281600c20549051908152f35b5080fd5b839060206003193601126101105761012a610671565b90610133610d32565b8160601b1561019f575073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a35580f35b637448fbae8352601cfd5b836020600319360112610252576101bf610671565b6101c7610d32565b63389a75e1600c528082526020600c20928354421161024757508173ffffffffffffffffffffffffffffffffffffffff929355167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a35580f35b636f5e88188352601cfd5b80fd5b90503461039b57608060031936011261039b57803567ffffffffffffffff8111610397576102869036908301610709565b6024359073ffffffffffffffffffffffffffffffffffffffff9081831691828403610393576044359081168091036103935760246102c5602093610b92565b95875194859384927f402d267d0000000000000000000000000000000000000000000000000000000084528301525afa908115610389578591610352575b509060209461031661033b94938361081f565b6103226064358461081f565b915083811061034a575b50828110610342575b50610bf3565b9051908152f35b915038610335565b92503861032c565b90506020813d602011610381575b8161036d60209383610699565b8101031261037d57516020610303565b8480fd5b3d9150610360565b84513d87823e3d90fd5b8680fd5b8380fd5b8280fd5b505034610110578160031936011261011057602091549051908152f35b839034610110576020600319360112610110576103d7610d32565b35815580f35b839034610110576020600319360112610110576103f8610d32565b3560015580f35b50503461011057806003193601126101105760209061033b61041f610671565b60243590610bf3565b8284346102525760206003193601126102525782359067ffffffffffffffff8211610252575061046060209361033b92369101610709565b610b92565b50503461011057816003193601126101105760209073ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7487392754915191168152f35b8284346102525760206003193601126102525782359067ffffffffffffffff821161025257506104f160209361033b92369101610709565b610a8a565b83806003193601126102525761050a610d32565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a35580f35b90503461039b57602060031936011261039b57803567ffffffffffffffff8111610397576104f16020949261058e92369101610709565b9054109051908152f35b5050346101105781600319360112610110576020906001549051908152f35b83806003193601126102525763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b83806003193601126102525763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b50503461011057806003193601126101105760209061033b610668610671565b6024359061081f565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361069457565b600080fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176106da57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81601f820112156106945780359160209167ffffffffffffffff84116106da578360051b906040519461073e85840187610699565b85528380860192820101928311610694578301905b828210610761575050505090565b813573ffffffffffffffffffffffffffffffffffffffff81168103610694578152908301908301610753565b90816020910312610694575160058110156106945790565b818102929181159184041417156107b857565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b90816020910312610694575160ff811681036106945790565b60ff166012039060ff82116107b857565b604d81116107b857600a0a90565b73ffffffffffffffffffffffffffffffffffffffff166040908151907f3fe3347a000000000000000000000000000000000000000000000000000000009081835260209160049383818681865afa908115610a3c57600091610a1f575b5060058110156109f157600203610927575081908451938480927f313ce5670000000000000000000000000000000000000000000000000000000082525afa92831561091d57506108e16108ed94936108e79360ff936000926108f0575b5050610800565b16610811565b906107a5565b90565b61090f9250803d10610916575b6109078183610699565b8101906107e7565b38806108da565b503d6108fd565b513d6000823e3d90fd5b829084869596518094819382525afa9182156109e6576000926109b9575b5050600581101561098b576001036109655750506001546108ed916107a5565b517f24a01144000000000000000000000000000000000000000000000000000000008152fd5b6021837f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b6109d89250803d106109df575b6109d08183610699565b81019061078d565b3880610945565b503d6109c6565b83513d6000823e3d90fd5b6021857f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b610a369150843d86116109df576109d08183610699565b3861087c565b86513d6000823e3d90fd5b8051821015610a5b5760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000805b8351821015610b8d5773ffffffffffffffffffffffffffffffffffffffff80610ab88487610a47565b511690610ac58487610a47565b511690604080518080947f01e1d114000000000000000000000000000000000000000000000000000000008252602091829160049788915afa92831561091d5750600092610b5c575b5050610b199161081f565b8201809211610b2e5750600190910190610a8f565b6011907f4e487b71000000000000000000000000000000000000000000000000000000006000525260246000fd5b81819392933d8311610b86575b610b738183610699565b81010312610252575051610b1938610b0e565b503d610b69565b925050565b610b9b90610a8a565b6000549080821115610bb35781039081116107b85790565b5050600090565b8115610bc4570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff166040908151907f3fe3347a000000000000000000000000000000000000000000000000000000009081835260209160049383818681865afa908115610a3c57600091610d15575b5060058110156109f157600203610cba575081908451938480927f313ce5670000000000000000000000000000000000000000000000000000000082525afa92831561091d57506108e16108ed9493610cb49360ff936000926108f0575050610800565b90610bba565b829084869596518094819382525afa9182156109e657600092610cf8575b5050600581101561098b576001036109655750506001546108ed91610bba565b610d0e9250803d106109df576109d08183610699565b3880610cd8565b610d2c9150843d86116109df576109d08183610699565b38610c50565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927543303610d5c57565b6382b429006000526004601cfdfea26469706673582212202a02c98f95bcb98d67dd164c46fe7420f29f7ba3b6dcfab946b1a04ad568c52164736f6c63430008190033",
    "sourceMap": "309:3338:81:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;;;:::i;:::-;11885:237:69;;;;;;;;;309:3338:81;;;;;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;:::i;:::-;12478:70:69;;;:::i;:::-;8479:183;;;;;;6813:405;;;;;;;;;;;;309:3338:81;;8479:183:69;;;;;;309:3338:81;;;-1:-1:-1;;309:3338:81;;;;;;;:::i;:::-;12478:70:69;;:::i;:::-;10506:526;;;;;;309:3338:81;10506:526:69;;;;;;;;;;;6813:405;10506:526;;;6813:405;;;;;;;;;;309:3338:81;;10506:526:69;;;;;;309:3338:81;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;1816:31;309:3338;1816:31;;:::i;:::-;309:3338;;;1941:41;;;;;309:3338;1941:41;;;;309:3338;1941:41;;;;;;;;;;;309:3338;1900:83;;309:3338;1900:83;;2554:66;1900:83;;;;:::i;:::-;2023:55;309:3338;;2023:55;;:::i;:::-;2089:30;2232:46;;2292:45;;2288:121;;309:3338;2422:44;;;;2418:119;;309:3338;2554:66;;:::i;:::-;309:3338;;;;;;2418:119;2482:44;-1:-1:-1;2418:119:81;;;2288:121;2353:45;-1:-1:-1;2288:121:81;;;1941:41;;;309:3338;1941:41;;309:3338;1941:41;;;;;;309:3338;1941:41;;;:::i;:::-;;;309:3338;;;;;;1941:41;;309:3338;;;;1941:41;;;-1:-1:-1;1941:41:81;;;309:3338;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;12478:70:69;;:::i;:::-;309:3338:81;;;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;12478:70:69;;:::i;:::-;309:3338:81;;;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;-1:-1:-1;;309:3338:81;;;;;;11523:61:69;309:3338:81;11523:61:69;;309:3338:81;;;;;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;309:3338:81;;;;;12478:70:69;;:::i;:::-;6813:405;;;;;;;;;;309:3338:81;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;;;;;;;;;;857:34;309:3338;;;;;:::i;857:34::-;309:3338;;-1:-1:-1;309:3338:81;;;;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;526:24;309:3338;;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;9831:339:69;;;;;;;;;;;;;;;;309:3338:81;;;;;-1:-1:-1;;309:3338:81;;;;;9239:383:69;;;;;;7972:9;9132:15;309:3338:81;9239:383:69;;;;;;;;;309:3338:81;;;;;;;;;-1:-1:-1;;309:3338:81;;;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::o;:::-;;;;;;;;;:::o;2847:395::-;309:3338;;;;;;;;2954:17;;;;;;;;;;;;;;;;;;;;;;;;2847:395;309:3338;;;;;;;2975:23;2954:44;2975:23;;309:3338;;;;;3049:16;;;;309:3338;3049:16;;;;;;;;;;3044:21;3021:46;3049:16;;3030:36;3049:16;309:3338;3049:16;2954:17;3049:16;;;2950:286;3044:21;;;:::i;:::-;309:3338;3030:36;:::i;:::-;3021:46;;:::i;:::-;3014:53;:::o;3049:16::-;;;;;;-1:-1:-1;3049:16:81;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;309:3338;;2954:17;309:3338;;;;;2950:286;309:3338;;;;;;;3088:17;;;;;;;;;;;;;2954;3088;;;2950:286;309:3338;;;;;;;;;3088:41;309:3338;;-1:-1:-1;;309:3338:81;;3152:17;;;:::i;3084:152::-;309:3338;3207:18;;;;309:3338;;;;2954:17;309:3338;;;2954:17;309:3338;3088:17;;;;;;-1:-1:-1;3088:17:81;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;309:3338;;;2954:17;309:3338;;;;;;;;;2954:17;309:3338;;;2954:17;309:3338;2954:17;;;;;;;;;;;;;;:::i;:::-;;;;;309:3338;;;2954:17;309:3338;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;1247:332;;309:3338;;1423:3;309:3338;;1404:17;;;;;309:3338;1490:9;;;;;:::i;:::-;309:3338;;1501:9;;;;;:::i;:::-;309:3338;;;;;;1501:23;;;309:3338;1501:23;;;;;;;;;;;;;;;;;;309:3338;1501:23;;;1423:3;1465:60;;;;;:::i;:::-;309:3338;;;;;;;1442:83;309:3338;1442:83;1423:3;309:3338;1389:13;;;309:3338;;;;;;;;;;1501:23;;;;;;;;;;;;;;;;:::i;:::-;;;309:3338;;;;-1:-1:-1;309:3338:81;1465:60;1501:23;;;;;;;;1404:17;;-1:-1:-1;;1247:332:81:o;957:284::-;1084:34;957:284;1084:34;:::i;:::-;1133:14;309:3338;1133:37;;;;;1129:51;;309:3338;;;;;;;957:284;:::o;1129:51::-;1172:8;;1133:14;1172:8;:::o;309:3338::-;;;;;;;:::o;:::-;;;;;;;;;;3248:397;309:3338;;;;;;;;3357:17;;;;;;;;;;;;;;;;;;;;;;;;3248:397;309:3338;;;;;;;3378:23;3357:44;3378:23;;309:3338;;;;;3452:16;;;;309:3338;3452:16;;;;;;;;;;3447:21;3424:46;3452:16;;3433:36;3452:16;309:3338;3452:16;3357:17;3452:16;;;3447:21;;;:::i;3433:36::-;3424:46;;:::i;3353:286::-;309:3338;;;;;;;3491:17;;;;;;;;;;;;;3357;3491;;;3353:286;309:3338;;;;;;;;;3491:41;309:3338;;-1:-1:-1;;309:3338:81;;3555:17;;;:::i;3491:::-;;;;;;-1:-1:-1;3491:17:81;;;;;;:::i;:::-;;;;;3357;;;;;;;;;;;;;;:::i;:::-;;;;7292:355:69;7390:251;;;;;;7292:355::o;7390:251::-;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "cancelOwnershipHandover()": "54d1f13d",
    "completeOwnershipHandover(address)": "f04e283e",
    "computeGlobalDepositsInUsd(address[])": "749936cf",
    "computeUserMaximumDeposit(address[],address,address,uint256)": "d8911d68",
    "denormalizeVaultAssetValue(address,uint256)": "b6753e45",
    "globalUsdLimit()": "d25cc430",
    "isLimitBreached(address[])": "60cfb204",
    "normalizeVaultAssetValue(address,uint256)": "175b0d7c",
    "owner()": "8da5cb5b",
    "ownershipHandoverExpiresAt(address)": "fee81cf4",
    "remainingGlobalUsdLimit(address[])": "a10c2853",
    "renounceOwnership()": "715018a6",
    "requestOwnershipHandover()": "25692962",
    "setGlobalUsdLimit(uint256)": "d0c59226",
    "setUsdPerEth(uint256)": "ca36695c",
    "transferOwnership(address)": "f2fde38b",
    "usdPerEth()": "60bce2f4"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_usdPerEth\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_globalUsdLimit\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NewOwnerIsZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoHandoverRequest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedAsset\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"cancelOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"completeOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"}],\"name\":\"computeGlobalDepositsInUsd\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"},{\"internalType\":\"contract IVault\",\"name\":\"vaultToDeposit\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"walletBalance\",\"type\":\"uint256\"}],\"name\":\"computeUserMaximumDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"denormalizeVaultAssetValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"globalUsdLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"}],\"name\":\"isLimitBreached\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"normalizeVaultAssetValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"result\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"ownershipHandoverExpiresAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault[]\",\"name\":\"vaults\",\"type\":\"address[]\"}],\"name\":\"remainingGlobalUsdLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"requestOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_limit\",\"type\":\"uint256\"}],\"name\":\"setGlobalUsdLimit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_usdPerEth\",\"type\":\"uint256\"}],\"name\":\"setUsdPerEth\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"usdPerEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AlreadyInitialized()\":[{\"details\":\"Cannot double-initialize.\"}],\"NewOwnerIsZeroAddress()\":[{\"details\":\"The `newOwner` cannot be the zero address.\"}],\"NoHandoverRequest()\":[{\"details\":\"The `pendingOwner` does not have a valid handover request.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}]},\"events\":{\"OwnershipHandoverCanceled(address)\":{\"details\":\"The ownership handover to `pendingOwner` has been canceled.\"},\"OwnershipHandoverRequested(address)\":{\"details\":\"An ownership handover to `pendingOwner` has been requested.\"},\"OwnershipTransferred(address,address)\":{\"details\":\"The ownership is transferred from `oldOwner` to `newOwner`. This event is intentionally kept the same as OpenZeppelin's Ownable to be compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173), despite it not being as lightweight as a single argument event.\"}},\"kind\":\"dev\",\"methods\":{\"cancelOwnershipHandover()\":{\"details\":\"Cancels the two-step ownership handover to the caller, if any.\"},\"completeOwnershipHandover(address)\":{\"details\":\"Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`.\"},\"owner()\":{\"details\":\"Returns the owner of the contract.\"},\"ownershipHandoverExpiresAt(address)\":{\"details\":\"Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`.\"},\"renounceOwnership()\":{\"details\":\"Allows the owner to renounce their ownership.\"},\"requestOwnershipHandover()\":{\"details\":\"Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default.\"},\"transferOwnership(address)\":{\"details\":\"Allows the owner to transfer the ownership to `newOwner`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Limiter.sol\":\"Limiter\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"src/Limiter.sol\":{\"keccak256\":\"0x3960a5f3b06a01ad4382d9ffe9ac6f27058a0af753bccb3d5602a96317ec9f52\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://f5fffc3bbe2ad75bc8ef98b01ec0ec8a6ed5902b1adb954903e04af37c21a7e7\",\"dweb:/ipfs/QmTy9jD8BazbpyJa5yADVP687EpQYKk8z5mDGtUCKF8NxP\"]},\"src/interfaces/Errors.sol\":{\"keccak256\":\"0x4cc73a0432757cdbabe85ae592c36f7a5b9b6da4313dec6c2c1b31e6597e0c27\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://71a6f3cfd19582756517839c314bfa128d16b5ad95b1f5b5554f4b1d416da915\",\"dweb:/ipfs/QmVFjwrBDcmV75jnMYRH55GHzKFZEiidTVzfqGsUpp6LU2\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892\",\"dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0x805ac2164fdaa590e1c3f4c420820e2e24ee9bc74b8ef28aad9317dfe632d436\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://9614260fd01d490d2bdd4f758aaf14110c8f16b4e9206511114d6a66a7a75693\",\"dweb:/ipfs/QmPLRcE5A9jZN25Yafq1BCiPmXUYh2xvhaMzRr3Gn33JfM\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0xba4b8ffdac93c233644e11c53d03cd1e88545d96f99f3e92ad68ae4848637c9a\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://82d121e7429be4f538a27f5c139b7073ce523094ff8847517a76dd609f8700c4\",\"dweb:/ipfs/QmUChJsn6Tn7CZqWKpjVXLnZWkNxim6hSF2M92NEocSjkt\"]}},\"version\":1}",
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
              "name": "_usdPerEth",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_globalUsdLimit",
              "type": "uint256"
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
          "inputs": [],
          "type": "error",
          "name": "UnsupportedAsset"
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
          "inputs": [
            {
              "internalType": "contract IVault[]",
              "name": "vaults",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "computeGlobalDepositsInUsd",
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
              "internalType": "contract IVault[]",
              "name": "vaults",
              "type": "address[]"
            },
            {
              "internalType": "contract IVault",
              "name": "vaultToDeposit",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "walletBalance",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "computeUserMaximumDeposit",
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
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "denormalizeVaultAssetValue",
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
          "name": "globalUsdLimit",
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
              "internalType": "contract IVault[]",
              "name": "vaults",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isLimitBreached",
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
              "internalType": "contract IVault",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "normalizeVaultAssetValue",
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
          "inputs": [
            {
              "internalType": "contract IVault[]",
              "name": "vaults",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "remainingGlobalUsdLimit",
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
              "internalType": "uint256",
              "name": "_limit",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setGlobalUsdLimit"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_usdPerEth",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setUsdPerEth"
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
          "name": "usdPerEth",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
        "src/Limiter.sol": "Limiter"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
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
      "src/Limiter.sol": {
        "keccak256": "0x3960a5f3b06a01ad4382d9ffe9ac6f27058a0af753bccb3d5602a96317ec9f52",
        "urls": [
          "bzz-raw://f5fffc3bbe2ad75bc8ef98b01ec0ec8a6ed5902b1adb954903e04af37c21a7e7",
          "dweb:/ipfs/QmTy9jD8BazbpyJa5yADVP687EpQYKk8z5mDGtUCKF8NxP"
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
      "src/interfaces/ILimiter.sol": {
        "keccak256": "0xef2181dc26d4277c4b29aa973c9ac13ed619f1022196a2821d08d922a1208adc",
        "urls": [
          "bzz-raw://501598bf0cf8c07f3f71b2f10f08f8c7801acdae28835938ca7b90dca361c892",
          "dweb:/ipfs/QmTpVneSZAnmGKF72SKS7omkZW71aXgBeaxA6P6VMLzXcb"
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
    "absolutePath": "src/Limiter.sol",
    "id": 60573,
    "exportedSymbols": {
      "ArrayLengthsNotEqual": [
        62991
      ],
      "CrossedDepositLimit": [
        63001
      ],
      "ExpiredSign": [
        62997
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
      "Limiter": [
        60572
      ],
      "MaxStakerVault": [
        62967
      ],
      "MinWithdrawDelayNotPassed": [
        62961
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
      "PermitFailed": [
        62995
      ],
      "RoleNotGranted": [
        62983
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
    "src": "51:3597:81",
    "nodes": [
      {
        "id": 60250,
        "nodeType": "PragmaDirective",
        "src": "51:24:81",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 60252,
        "nodeType": "ImportDirective",
        "src": "77:52:81",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/auth/Ownable.sol",
        "file": "solady/src/auth/Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60573,
        "sourceUnit": 54124,
        "symbolAliases": [
          {
            "foreign": {
              "id": 60251,
              "name": "Ownable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 54123,
              "src": "85:7:81",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 60254,
        "nodeType": "ImportDirective",
        "src": "130:73:81",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol",
        "file": "@openzeppelin/contracts/interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60573,
        "sourceUnit": 49200,
        "symbolAliases": [
          {
            "foreign": {
              "id": 60253,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 49199,
              "src": "138:8:81",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 60255,
        "nodeType": "ImportDirective",
        "src": "204:35:81",
        "nodes": [],
        "absolutePath": "src/interfaces/ILimiter.sol",
        "file": "./interfaces/ILimiter.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60573,
        "sourceUnit": 63121,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60256,
        "nodeType": "ImportDirective",
        "src": "240:33:81",
        "nodes": [],
        "absolutePath": "src/interfaces/Errors.sol",
        "file": "./interfaces/Errors.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60573,
        "sourceUnit": 63004,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60257,
        "nodeType": "ImportDirective",
        "src": "274:33:81",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./interfaces/IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 60573,
        "sourceUnit": 63272,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 60572,
        "nodeType": "ContractDefinition",
        "src": "309:3338:81",
        "nodes": [
          {
            "id": 60263,
            "nodeType": "VariableDeclaration",
            "src": "396:29:81",
            "nodes": [],
            "constant": false,
            "functionSelector": "d25cc430",
            "mutability": "mutable",
            "name": "globalUsdLimit",
            "nameLocation": "411:14:81",
            "scope": 60572,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 60262,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "396:7:81",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "id": 60265,
            "nodeType": "VariableDeclaration",
            "src": "526:24:81",
            "nodes": [],
            "constant": false,
            "functionSelector": "60bce2f4",
            "mutability": "mutable",
            "name": "usdPerEth",
            "nameLocation": "541:9:81",
            "scope": 60572,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 60264,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "526:7:81",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "id": 60286,
            "nodeType": "FunctionDefinition",
            "src": "557:176:81",
            "nodes": [],
            "body": {
              "id": 60285,
              "nodeType": "Block",
              "src": "614:119:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 60273,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "641:3:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 60274,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "645:6:81",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "641:10:81",
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
                      "id": 60272,
                      "name": "_initializeOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54002,
                      "src": "624:16:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 60275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "624:28:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60276,
                  "nodeType": "ExpressionStatement",
                  "src": "624:28:81"
                },
                {
                  "expression": {
                    "id": 60279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60277,
                      "name": "usdPerEth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60265,
                      "src": "662:9:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60278,
                      "name": "_usdPerEth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60267,
                      "src": "674:10:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "662:22:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 60280,
                  "nodeType": "ExpressionStatement",
                  "src": "662:22:81"
                },
                {
                  "expression": {
                    "id": 60283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60281,
                      "name": "globalUsdLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60263,
                      "src": "694:14:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60282,
                      "name": "_globalUsdLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60269,
                      "src": "711:15:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "694:32:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 60284,
                  "nodeType": "ExpressionStatement",
                  "src": "694:32:81"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 60270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60267,
                  "mutability": "mutable",
                  "name": "_usdPerEth",
                  "nameLocation": "577:10:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60286,
                  "src": "569:18:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60266,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "569:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60269,
                  "mutability": "mutable",
                  "name": "_globalUsdLimit",
                  "nameLocation": "597:15:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60286,
                  "src": "589:23:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60268,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "589:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "568:45:81"
            },
            "returnParameters": {
              "id": 60271,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "614:0:81"
            },
            "scope": 60572,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 60306,
            "nodeType": "FunctionDefinition",
            "src": "739:212:81",
            "nodes": [],
            "body": {
              "id": 60305,
              "nodeType": "Block",
              "src": "817:134:81",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60296
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60296,
                      "mutability": "mutable",
                      "name": "globalDepositsInUsd",
                      "nameLocation": "835:19:81",
                      "nodeType": "VariableDeclaration",
                      "scope": 60305,
                      "src": "827:27:81",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60295,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "827:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60300,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60298,
                        "name": "vaults",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60290,
                        "src": "884:6:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                          "typeString": "contract IVault[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                          "typeString": "contract IVault[] memory"
                        }
                      ],
                      "id": 60297,
                      "name": "computeGlobalDepositsInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60373,
                      "src": "857:26:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (contract IVault[] memory) view returns (uint256)"
                      }
                    },
                    "id": 60299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "857:34:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "827:64:81"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60303,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60301,
                      "name": "globalDepositsInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60296,
                      "src": "908:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 60302,
                      "name": "globalUsdLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60263,
                      "src": "930:14:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "908:36:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 60294,
                  "id": 60304,
                  "nodeType": "Return",
                  "src": "901:43:81"
                }
              ]
            },
            "baseFunctions": [
              63109
            ],
            "functionSelector": "60cfb204",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isLimitBreached",
            "nameLocation": "748:15:81",
            "parameters": {
              "id": 60291,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60290,
                  "mutability": "mutable",
                  "name": "vaults",
                  "nameLocation": "780:6:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60306,
                  "src": "764:22:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                    "typeString": "contract IVault[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60288,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 60287,
                        "name": "IVault",
                        "nameLocations": [
                          "764:6:81"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63271,
                        "src": "764:6:81"
                      },
                      "referencedDeclaration": 63271,
                      "src": "764:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "id": 60289,
                    "nodeType": "ArrayTypeName",
                    "src": "764:8:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                      "typeString": "contract IVault[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "763:24:81"
            },
            "returnParameters": {
              "id": 60294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60293,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60306,
                  "src": "811:4:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 60292,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:4:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "810:6:81"
            },
            "scope": 60572,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60332,
            "nodeType": "FunctionDefinition",
            "src": "957:284:81",
            "nodes": [],
            "body": {
              "id": 60331,
              "nodeType": "Block",
              "src": "1044:197:81",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60316
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60316,
                      "mutability": "mutable",
                      "name": "globalDepositsInUsd",
                      "nameLocation": "1062:19:81",
                      "nodeType": "VariableDeclaration",
                      "scope": 60331,
                      "src": "1054:27:81",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60315,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1054:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60320,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60318,
                        "name": "vaults",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60310,
                        "src": "1111:6:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                          "typeString": "contract IVault[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                          "typeString": "contract IVault[] memory"
                        }
                      ],
                      "id": 60317,
                      "name": "computeGlobalDepositsInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60373,
                      "src": "1084:26:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (contract IVault[] memory) view returns (uint256)"
                      }
                    },
                    "id": 60319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1084:34:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1054:64:81"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60321,
                      "name": "globalUsdLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60263,
                      "src": "1133:14:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 60322,
                      "name": "globalDepositsInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60316,
                      "src": "1151:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1133:37:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60326,
                  "nodeType": "IfStatement",
                  "src": "1129:51:81",
                  "trueBody": {
                    "expression": {
                      "hexValue": "30",
                      "id": 60324,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1179:1:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "functionReturnParameters": 60314,
                    "id": 60325,
                    "nodeType": "Return",
                    "src": "1172:8:81"
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60329,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60327,
                      "name": "globalUsdLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60263,
                      "src": "1198:14:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 60328,
                      "name": "globalDepositsInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60316,
                      "src": "1215:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1198:36:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60314,
                  "id": 60330,
                  "nodeType": "Return",
                  "src": "1191:43:81"
                }
              ]
            },
            "functionSelector": "a10c2853",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remainingGlobalUsdLimit",
            "nameLocation": "966:23:81",
            "parameters": {
              "id": 60311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60310,
                  "mutability": "mutable",
                  "name": "vaults",
                  "nameLocation": "1006:6:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60332,
                  "src": "990:22:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                    "typeString": "contract IVault[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60308,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 60307,
                        "name": "IVault",
                        "nameLocations": [
                          "990:6:81"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63271,
                        "src": "990:6:81"
                      },
                      "referencedDeclaration": 63271,
                      "src": "990:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "id": 60309,
                    "nodeType": "ArrayTypeName",
                    "src": "990:8:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                      "typeString": "contract IVault[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "989:24:81"
            },
            "returnParameters": {
              "id": 60314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60313,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60332,
                  "src": "1035:7:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60312,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1035:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1034:9:81"
            },
            "scope": 60572,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 60373,
            "nodeType": "FunctionDefinition",
            "src": "1247:332:81",
            "nodes": [],
            "body": {
              "id": 60372,
              "nodeType": "Block",
              "src": "1337:242:81",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60342
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60342,
                      "mutability": "mutable",
                      "name": "globalDepositsInUsd",
                      "nameLocation": "1355:19:81",
                      "nodeType": "VariableDeclaration",
                      "scope": 60372,
                      "src": "1347:27:81",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60341,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1347:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60343,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1347:27:81"
                },
                {
                  "body": {
                    "id": 60368,
                    "nodeType": "Block",
                    "src": "1428:108:81",
                    "statements": [
                      {
                        "expression": {
                          "id": 60366,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 60355,
                            "name": "globalDepositsInUsd",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60342,
                            "src": "1442:19:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "baseExpression": {
                                  "id": 60357,
                                  "name": "vaults",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60336,
                                  "src": "1490:6:81",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                                    "typeString": "contract IVault[] memory"
                                  }
                                },
                                "id": 60359,
                                "indexExpression": {
                                  "id": 60358,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 60345,
                                  "src": "1497:1:81",
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
                                "src": "1490:9:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IVault_$63271",
                                  "typeString": "contract IVault"
                                }
                              },
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "baseExpression": {
                                      "id": 60360,
                                      "name": "vaults",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60336,
                                      "src": "1501:6:81",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                                        "typeString": "contract IVault[] memory"
                                      }
                                    },
                                    "id": 60362,
                                    "indexExpression": {
                                      "id": 60361,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 60345,
                                      "src": "1508:1:81",
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
                                    "src": "1501:9:81",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IVault_$63271",
                                      "typeString": "contract IVault"
                                    }
                                  },
                                  "id": 60363,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "1511:11:81",
                                  "memberName": "totalAssets",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 63259,
                                  "src": "1501:21:81",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                    "typeString": "function () view external returns (uint256)"
                                  }
                                },
                                "id": 60364,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1501:23:81",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IVault_$63271",
                                  "typeString": "contract IVault"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 60356,
                              "name": "normalizeVaultAssetValue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60520,
                              "src": "1465:24:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_contract$_IVault_$63271_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (contract IVault,uint256) view returns (uint256)"
                              }
                            },
                            "id": 60365,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1465:60:81",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1442:83:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 60367,
                        "nodeType": "ExpressionStatement",
                        "src": "1442:83:81"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60348,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60345,
                      "src": "1404:1:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 60349,
                        "name": "vaults",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60336,
                        "src": "1408:6:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                          "typeString": "contract IVault[] memory"
                        }
                      },
                      "id": 60350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1415:6:81",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1408:13:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1404:17:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60369,
                  "initializationExpression": {
                    "assignments": [
                      60345
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 60345,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "1397:1:81",
                        "nodeType": "VariableDeclaration",
                        "scope": 60369,
                        "src": "1389:9:81",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 60344,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1389:7:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 60347,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 60346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1401:1:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1389:13:81"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 60353,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1423:3:81",
                      "subExpression": {
                        "id": 60352,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60345,
                        "src": "1423:1:81",
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
                    "id": 60354,
                    "nodeType": "ExpressionStatement",
                    "src": "1423:3:81"
                  },
                  "nodeType": "ForStatement",
                  "src": "1384:152:81"
                },
                {
                  "expression": {
                    "id": 60370,
                    "name": "globalDepositsInUsd",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60342,
                    "src": "1553:19:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60340,
                  "id": 60371,
                  "nodeType": "Return",
                  "src": "1546:26:81"
                }
              ]
            },
            "functionSelector": "749936cf",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeGlobalDepositsInUsd",
            "nameLocation": "1256:26:81",
            "parameters": {
              "id": 60337,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60336,
                  "mutability": "mutable",
                  "name": "vaults",
                  "nameLocation": "1299:6:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60373,
                  "src": "1283:22:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                    "typeString": "contract IVault[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60334,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 60333,
                        "name": "IVault",
                        "nameLocations": [
                          "1283:6:81"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63271,
                        "src": "1283:6:81"
                      },
                      "referencedDeclaration": 63271,
                      "src": "1283:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "id": 60335,
                    "nodeType": "ArrayTypeName",
                    "src": "1283:8:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                      "typeString": "contract IVault[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1282:24:81"
            },
            "returnParameters": {
              "id": 60340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60339,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60373,
                  "src": "1328:7:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60338,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1328:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1327:9:81"
            },
            "scope": 60572,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 60445,
            "nodeType": "FunctionDefinition",
            "src": "1585:1042:81",
            "nodes": [],
            "body": {
              "id": 60444,
              "nodeType": "Block",
              "src": "1774:853:81",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    60390
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60390,
                      "mutability": "mutable",
                      "name": "globalMaxDepositInUsd",
                      "nameLocation": "1792:21:81",
                      "nodeType": "VariableDeclaration",
                      "scope": 60444,
                      "src": "1784:29:81",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60389,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1784:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60394,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60392,
                        "name": "vaults",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60377,
                        "src": "1840:6:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                          "typeString": "contract IVault[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                          "typeString": "contract IVault[] memory"
                        }
                      ],
                      "id": 60391,
                      "name": "remainingGlobalUsdLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60332,
                      "src": "1816:23:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (contract IVault[] memory) view returns (uint256)"
                      }
                    },
                    "id": 60393,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1816:31:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1784:63:81"
                },
                {
                  "assignments": [
                    60396
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60396,
                      "mutability": "mutable",
                      "name": "vaultMaxDepositInUsd",
                      "nameLocation": "1865:20:81",
                      "nodeType": "VariableDeclaration",
                      "scope": 60444,
                      "src": "1857:28:81",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60395,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1857:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60406,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60398,
                        "name": "vaultToDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60380,
                        "src": "1925:14:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 60403,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60382,
                            "src": "1977:4:81",
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
                            "arguments": [
                              {
                                "id": 60400,
                                "name": "vaultToDeposit",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60380,
                                "src": "1950:14:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IVault_$63271",
                                  "typeString": "contract IVault"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IVault_$63271",
                                  "typeString": "contract IVault"
                                }
                              ],
                              "id": 60399,
                              "name": "IERC4626",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 49199,
                              "src": "1941:8:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC4626_$49199_$",
                                "typeString": "type(contract IERC4626)"
                              }
                            },
                            "id": 60401,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1941:24:81",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC4626_$49199",
                              "typeString": "contract IERC4626"
                            }
                          },
                          "id": 60402,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1966:10:81",
                          "memberName": "maxDeposit",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 49098,
                          "src": "1941:35:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 60404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1941:41:81",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 60397,
                      "name": "normalizeVaultAssetValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60520,
                      "src": "1900:24:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_contract$_IVault_$63271_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (contract IVault,uint256) view returns (uint256)"
                      }
                    },
                    "id": 60405,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1900:83:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1857:126:81"
                },
                {
                  "assignments": [
                    60408
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60408,
                      "mutability": "mutable",
                      "name": "userMaxDepositInUsd",
                      "nameLocation": "2001:19:81",
                      "nodeType": "VariableDeclaration",
                      "scope": 60444,
                      "src": "1993:27:81",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60407,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1993:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60413,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 60410,
                        "name": "vaultToDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60380,
                        "src": "2048:14:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      {
                        "id": 60411,
                        "name": "walletBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60384,
                        "src": "2064:13:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 60409,
                      "name": "normalizeVaultAssetValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60520,
                      "src": "2023:24:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_contract$_IVault_$63271_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (contract IVault,uint256) view returns (uint256)"
                      }
                    },
                    "id": 60412,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2023:55:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1993:85:81"
                },
                {
                  "assignments": [
                    60415
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60415,
                      "mutability": "mutable",
                      "name": "minimumMaxDepositInUsd",
                      "nameLocation": "2097:22:81",
                      "nodeType": "VariableDeclaration",
                      "scope": 60444,
                      "src": "2089:30:81",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 60414,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2089:7:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 60416,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2089:30:81"
                },
                {
                  "expression": {
                    "id": 60419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60417,
                      "name": "minimumMaxDepositInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60415,
                      "src": "2232:22:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60418,
                      "name": "globalMaxDepositInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60390,
                      "src": "2257:21:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2232:46:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 60420,
                  "nodeType": "ExpressionStatement",
                  "src": "2232:46:81"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60423,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60421,
                      "name": "vaultMaxDepositInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60396,
                      "src": "2292:20:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 60422,
                      "name": "minimumMaxDepositInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60415,
                      "src": "2315:22:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2292:45:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60429,
                  "nodeType": "IfStatement",
                  "src": "2288:121:81",
                  "trueBody": {
                    "id": 60428,
                    "nodeType": "Block",
                    "src": "2339:70:81",
                    "statements": [
                      {
                        "expression": {
                          "id": 60426,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 60424,
                            "name": "minimumMaxDepositInUsd",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60415,
                            "src": "2353:22:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 60425,
                            "name": "vaultMaxDepositInUsd",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60396,
                            "src": "2378:20:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2353:45:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 60427,
                        "nodeType": "ExpressionStatement",
                        "src": "2353:45:81"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 60432,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 60430,
                      "name": "userMaxDepositInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60408,
                      "src": "2422:19:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 60431,
                      "name": "minimumMaxDepositInUsd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60415,
                      "src": "2444:22:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2422:44:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60438,
                  "nodeType": "IfStatement",
                  "src": "2418:119:81",
                  "trueBody": {
                    "id": 60437,
                    "nodeType": "Block",
                    "src": "2468:69:81",
                    "statements": [
                      {
                        "expression": {
                          "id": 60435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 60433,
                            "name": "minimumMaxDepositInUsd",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60415,
                            "src": "2482:22:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 60434,
                            "name": "userMaxDepositInUsd",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60408,
                            "src": "2507:19:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2482:44:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 60436,
                        "nodeType": "ExpressionStatement",
                        "src": "2482:44:81"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 60440,
                        "name": "vaultToDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60380,
                        "src": "2581:14:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        }
                      },
                      {
                        "id": 60441,
                        "name": "minimumMaxDepositInUsd",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60415,
                        "src": "2597:22:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IVault_$63271",
                          "typeString": "contract IVault"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 60439,
                      "name": "denormalizeVaultAssetValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60571,
                      "src": "2554:26:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_contract$_IVault_$63271_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (contract IVault,uint256) view returns (uint256)"
                      }
                    },
                    "id": 60442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2554:66:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60388,
                  "id": 60443,
                  "nodeType": "Return",
                  "src": "2547:73:81"
                }
              ]
            },
            "functionSelector": "d8911d68",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "computeUserMaximumDeposit",
            "nameLocation": "1594:25:81",
            "parameters": {
              "id": 60385,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60377,
                  "mutability": "mutable",
                  "name": "vaults",
                  "nameLocation": "1645:6:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60445,
                  "src": "1629:22:81",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_memory_ptr",
                    "typeString": "contract IVault[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 60375,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 60374,
                        "name": "IVault",
                        "nameLocations": [
                          "1629:6:81"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 63271,
                        "src": "1629:6:81"
                      },
                      "referencedDeclaration": 63271,
                      "src": "1629:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVault_$63271",
                        "typeString": "contract IVault"
                      }
                    },
                    "id": 60376,
                    "nodeType": "ArrayTypeName",
                    "src": "1629:8:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IVault_$63271_$dyn_storage_ptr",
                      "typeString": "contract IVault[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60380,
                  "mutability": "mutable",
                  "name": "vaultToDeposit",
                  "nameLocation": "1668:14:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60445,
                  "src": "1661:21:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 60379,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60378,
                      "name": "IVault",
                      "nameLocations": [
                        "1661:6:81"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "1661:6:81"
                    },
                    "referencedDeclaration": 63271,
                    "src": "1661:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60382,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1700:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60445,
                  "src": "1692:12:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60381,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1692:7:81",
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
                  "id": 60384,
                  "mutability": "mutable",
                  "name": "walletBalance",
                  "nameLocation": "1722:13:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60445,
                  "src": "1714:21:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60383,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1619:122:81"
            },
            "returnParameters": {
              "id": 60388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60387,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60445,
                  "src": "1765:7:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60386,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1765:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1764:9:81"
            },
            "scope": 60572,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60457,
            "nodeType": "FunctionDefinition",
            "src": "2633:102:81",
            "nodes": [],
            "body": {
              "id": 60456,
              "nodeType": "Block",
              "src": "2695:40:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 60454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60452,
                      "name": "globalUsdLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60263,
                      "src": "2705:14:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60453,
                      "name": "_limit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60447,
                      "src": "2722:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2705:23:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 60455,
                  "nodeType": "ExpressionStatement",
                  "src": "2705:23:81"
                }
              ]
            },
            "baseFunctions": [
              63114
            ],
            "functionSelector": "d0c59226",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 60450,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60449,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2685:9:81"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "2685:9:81"
                },
                "nodeType": "ModifierInvocation",
                "src": "2685:9:81"
              }
            ],
            "name": "setGlobalUsdLimit",
            "nameLocation": "2642:17:81",
            "parameters": {
              "id": 60448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60447,
                  "mutability": "mutable",
                  "name": "_limit",
                  "nameLocation": "2668:6:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60457,
                  "src": "2660:14:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60446,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2660:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2659:16:81"
            },
            "returnParameters": {
              "id": 60451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2695:0:81"
            },
            "scope": 60572,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60469,
            "nodeType": "FunctionDefinition",
            "src": "2741:100:81",
            "nodes": [],
            "body": {
              "id": 60468,
              "nodeType": "Block",
              "src": "2802:39:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 60466,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 60464,
                      "name": "usdPerEth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60265,
                      "src": "2812:9:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 60465,
                      "name": "_usdPerEth",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60459,
                      "src": "2824:10:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2812:22:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 60467,
                  "nodeType": "ExpressionStatement",
                  "src": "2812:22:81"
                }
              ]
            },
            "baseFunctions": [
              63119
            ],
            "functionSelector": "ca36695c",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 60462,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 60461,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2792:9:81"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54122,
                  "src": "2792:9:81"
                },
                "nodeType": "ModifierInvocation",
                "src": "2792:9:81"
              }
            ],
            "name": "setUsdPerEth",
            "nameLocation": "2750:12:81",
            "parameters": {
              "id": 60460,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60459,
                  "mutability": "mutable",
                  "name": "_usdPerEth",
                  "nameLocation": "2771:10:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60469,
                  "src": "2763:18:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60458,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2763:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2762:20:81"
            },
            "returnParameters": {
              "id": 60463,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2802:0:81"
            },
            "scope": 60572,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 60520,
            "nodeType": "FunctionDefinition",
            "src": "2847:395:81",
            "nodes": [],
            "body": {
              "id": 60519,
              "nodeType": "Block",
              "src": "2940:302:81",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_AssetType_$63196",
                      "typeString": "enum IVault.AssetType"
                    },
                    "id": 60485,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 60479,
                          "name": "vault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60472,
                          "src": "2954:5:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IVault_$63271",
                            "typeString": "contract IVault"
                          }
                        },
                        "id": 60480,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2960:9:81",
                        "memberName": "assetType",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63270,
                        "src": "2954:15:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_enum$_AssetType_$63196_$",
                          "typeString": "function () view external returns (enum IVault.AssetType)"
                        }
                      },
                      "id": 60481,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2954:17:81",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 60482,
                          "name": "IVault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63271,
                          "src": "2975:6:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                            "typeString": "type(contract IVault)"
                          }
                        },
                        "id": 60483,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2982:9:81",
                        "memberName": "AssetType",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63196,
                        "src": "2975:16:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_AssetType_$63196_$",
                          "typeString": "type(enum IVault.AssetType)"
                        }
                      },
                      "id": 60484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "2992:6:81",
                      "memberName": "STABLE",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63193,
                      "src": "2975:23:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      }
                    },
                    "src": "2954:44:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      },
                      "id": 60507,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "id": 60501,
                            "name": "vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60472,
                            "src": "3088:5:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          },
                          "id": 60502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3094:9:81",
                          "memberName": "assetType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 63270,
                          "src": "3088:15:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_enum$_AssetType_$63196_$",
                            "typeString": "function () view external returns (enum IVault.AssetType)"
                          }
                        },
                        "id": 60503,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3088:17:81",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetType_$63196",
                          "typeString": "enum IVault.AssetType"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "expression": {
                            "id": 60504,
                            "name": "IVault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63271,
                            "src": "3109:6:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                              "typeString": "type(contract IVault)"
                            }
                          },
                          "id": 60505,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3116:9:81",
                          "memberName": "AssetType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 63196,
                          "src": "3109:16:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_AssetType_$63196_$",
                            "typeString": "type(enum IVault.AssetType)"
                          }
                        },
                        "id": 60506,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "3126:3:81",
                        "memberName": "ETH",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63192,
                        "src": "3109:20:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetType_$63196",
                          "typeString": "enum IVault.AssetType"
                        }
                      },
                      "src": "3088:41:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 60516,
                      "nodeType": "Block",
                      "src": "3186:50:81",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 60513,
                              "name": "UnsupportedAsset",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63003,
                              "src": "3207:16:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 60514,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3207:18:81",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 60515,
                          "nodeType": "RevertStatement",
                          "src": "3200:25:81"
                        }
                      ]
                    },
                    "id": 60517,
                    "nodeType": "IfStatement",
                    "src": "3084:152:81",
                    "trueBody": {
                      "id": 60512,
                      "nodeType": "Block",
                      "src": "3131:49:81",
                      "statements": [
                        {
                          "expression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60510,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60508,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60474,
                              "src": "3152:5:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 60509,
                              "name": "usdPerEth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60265,
                              "src": "3160:9:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3152:17:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "functionReturnParameters": 60478,
                          "id": 60511,
                          "nodeType": "Return",
                          "src": "3145:24:81"
                        }
                      ]
                    }
                  },
                  "id": 60518,
                  "nodeType": "IfStatement",
                  "src": "2950:286:81",
                  "trueBody": {
                    "id": 60500,
                    "nodeType": "Block",
                    "src": "3000:78:81",
                    "statements": [
                      {
                        "expression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60498,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60486,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60474,
                            "src": "3021:5:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 60496,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 60487,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3030:2:81",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "arguments": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 60494,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "hexValue": "3138",
                                        "id": 60490,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3044:2:81",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_18_by_1",
                                          "typeString": "int_const 18"
                                        },
                                        "value": "18"
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "arguments": [],
                                        "expression": {
                                          "argumentTypes": [],
                                          "expression": {
                                            "id": 60491,
                                            "name": "vault",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 60472,
                                            "src": "3049:5:81",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_IVault_$63271",
                                              "typeString": "contract IVault"
                                            }
                                          },
                                          "id": 60492,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3055:8:81",
                                          "memberName": "decimals",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 63264,
                                          "src": "3049:14:81",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_external_view$__$returns$_t_uint8_$",
                                            "typeString": "function () view external returns (uint8)"
                                          }
                                        },
                                        "id": 60493,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3049:16:81",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "src": "3044:21:81",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    ],
                                    "id": 60489,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3036:7:81",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 60488,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3036:7:81",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 60495,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3036:30:81",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3030:36:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 60497,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3029:38:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3021:46:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 60478,
                        "id": 60499,
                        "nodeType": "Return",
                        "src": "3014:53:81"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "175b0d7c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "normalizeVaultAssetValue",
            "nameLocation": "2856:24:81",
            "parameters": {
              "id": 60475,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60472,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "2888:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60520,
                  "src": "2881:12:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 60471,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60470,
                      "name": "IVault",
                      "nameLocations": [
                        "2881:6:81"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "2881:6:81"
                    },
                    "referencedDeclaration": 63271,
                    "src": "2881:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60474,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2903:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60520,
                  "src": "2895:13:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60473,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2895:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2880:29:81"
            },
            "returnParameters": {
              "id": 60478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60477,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60520,
                  "src": "2931:7:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60476,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2931:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2930:9:81"
            },
            "scope": 60572,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 60571,
            "nodeType": "FunctionDefinition",
            "src": "3248:397:81",
            "nodes": [],
            "body": {
              "id": 60570,
              "nodeType": "Block",
              "src": "3343:302:81",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_AssetType_$63196",
                      "typeString": "enum IVault.AssetType"
                    },
                    "id": 60536,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 60530,
                          "name": "vault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60523,
                          "src": "3357:5:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IVault_$63271",
                            "typeString": "contract IVault"
                          }
                        },
                        "id": 60531,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3363:9:81",
                        "memberName": "assetType",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63270,
                        "src": "3357:15:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_enum$_AssetType_$63196_$",
                          "typeString": "function () view external returns (enum IVault.AssetType)"
                        }
                      },
                      "id": 60532,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3357:17:81",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 60533,
                          "name": "IVault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63271,
                          "src": "3378:6:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                            "typeString": "type(contract IVault)"
                          }
                        },
                        "id": 60534,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3385:9:81",
                        "memberName": "AssetType",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63196,
                        "src": "3378:16:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_AssetType_$63196_$",
                          "typeString": "type(enum IVault.AssetType)"
                        }
                      },
                      "id": 60535,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3395:6:81",
                      "memberName": "STABLE",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63193,
                      "src": "3378:23:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      }
                    },
                    "src": "3357:44:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_enum$_AssetType_$63196",
                        "typeString": "enum IVault.AssetType"
                      },
                      "id": 60558,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "id": 60552,
                            "name": "vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60523,
                            "src": "3491:5:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault_$63271",
                              "typeString": "contract IVault"
                            }
                          },
                          "id": 60553,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3497:9:81",
                          "memberName": "assetType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 63270,
                          "src": "3491:15:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_enum$_AssetType_$63196_$",
                            "typeString": "function () view external returns (enum IVault.AssetType)"
                          }
                        },
                        "id": 60554,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3491:17:81",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetType_$63196",
                          "typeString": "enum IVault.AssetType"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "expression": {
                            "id": 60555,
                            "name": "IVault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63271,
                            "src": "3512:6:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IVault_$63271_$",
                              "typeString": "type(contract IVault)"
                            }
                          },
                          "id": 60556,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3519:9:81",
                          "memberName": "AssetType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 63196,
                          "src": "3512:16:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_AssetType_$63196_$",
                            "typeString": "type(enum IVault.AssetType)"
                          }
                        },
                        "id": 60557,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "3529:3:81",
                        "memberName": "ETH",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63192,
                        "src": "3512:20:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetType_$63196",
                          "typeString": "enum IVault.AssetType"
                        }
                      },
                      "src": "3491:41:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 60567,
                      "nodeType": "Block",
                      "src": "3589:50:81",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 60564,
                              "name": "UnsupportedAsset",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63003,
                              "src": "3610:16:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 60565,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3610:18:81",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 60566,
                          "nodeType": "RevertStatement",
                          "src": "3603:25:81"
                        }
                      ]
                    },
                    "id": 60568,
                    "nodeType": "IfStatement",
                    "src": "3487:152:81",
                    "trueBody": {
                      "id": 60563,
                      "nodeType": "Block",
                      "src": "3534:49:81",
                      "statements": [
                        {
                          "expression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 60561,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 60559,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60525,
                              "src": "3555:5:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 60560,
                              "name": "usdPerEth",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 60265,
                              "src": "3563:9:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3555:17:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "functionReturnParameters": 60529,
                          "id": 60562,
                          "nodeType": "Return",
                          "src": "3548:24:81"
                        }
                      ]
                    }
                  },
                  "id": 60569,
                  "nodeType": "IfStatement",
                  "src": "3353:286:81",
                  "trueBody": {
                    "id": 60551,
                    "nodeType": "Block",
                    "src": "3403:78:81",
                    "statements": [
                      {
                        "expression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 60549,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 60537,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60525,
                            "src": "3424:5:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 60547,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 60538,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3433:2:81",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "arguments": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 60545,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "hexValue": "3138",
                                        "id": 60541,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3447:2:81",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_18_by_1",
                                          "typeString": "int_const 18"
                                        },
                                        "value": "18"
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "arguments": [],
                                        "expression": {
                                          "argumentTypes": [],
                                          "expression": {
                                            "id": 60542,
                                            "name": "vault",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 60523,
                                            "src": "3452:5:81",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_IVault_$63271",
                                              "typeString": "contract IVault"
                                            }
                                          },
                                          "id": 60543,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3458:8:81",
                                          "memberName": "decimals",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 63264,
                                          "src": "3452:14:81",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_external_view$__$returns$_t_uint8_$",
                                            "typeString": "function () view external returns (uint8)"
                                          }
                                        },
                                        "id": 60544,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3452:16:81",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "src": "3447:21:81",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    ],
                                    "id": 60540,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3439:7:81",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 60539,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3439:7:81",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 60546,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3439:30:81",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3433:36:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 60548,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3432:38:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3424:46:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 60529,
                        "id": 60550,
                        "nodeType": "Return",
                        "src": "3417:53:81"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "b6753e45",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "denormalizeVaultAssetValue",
            "nameLocation": "3257:26:81",
            "parameters": {
              "id": 60526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60523,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "3291:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60571,
                  "src": "3284:12:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$63271",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 60522,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 60521,
                      "name": "IVault",
                      "nameLocations": [
                        "3284:6:81"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63271,
                      "src": "3284:6:81"
                    },
                    "referencedDeclaration": 63271,
                    "src": "3284:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$63271",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 60525,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3306:5:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 60571,
                  "src": "3298:13:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60524,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3298:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3283:29:81"
            },
            "returnParameters": {
              "id": 60529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60528,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60571,
                  "src": "3334:7:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60527,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3334:7:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3333:9:81"
            },
            "scope": 60572,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 60258,
              "name": "ILimiter",
              "nameLocations": [
                "329:8:81"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63120,
              "src": "329:8:81"
            },
            "id": 60259,
            "nodeType": "InheritanceSpecifier",
            "src": "329:8:81"
          },
          {
            "baseName": {
              "id": 60260,
              "name": "Ownable",
              "nameLocations": [
                "339:7:81"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 54123,
              "src": "339:7:81"
            },
            "id": 60261,
            "nodeType": "InheritanceSpecifier",
            "src": "339:7:81"
          }
        ],
        "canonicalName": "Limiter",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          60572,
          54123,
          63120
        ],
        "name": "Limiter",
        "nameLocation": "318:7:81",
        "scope": 60573,
        "usedErrors": [
          53935,
          53938,
          53941,
          53944,
          63003
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
  "id": 81
} as const;