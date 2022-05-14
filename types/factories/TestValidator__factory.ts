/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestValidator, TestValidatorInterface } from "../TestValidator";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousRoundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "previousAnswer",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentRoundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "currentAnswer",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialGas",
        type: "uint256",
      },
    ],
    name: "Validated",
    type: "event",
  },
  {
    inputs: [],
    name: "latestRoundId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "minGasUse",
        type: "uint32",
      },
    ],
    name: "setMinGasUse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "previousRoundId",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "previousAnswer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "currentRoundId",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "currentAnswer",
        type: "int256",
      },
    ],
    name: "validate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101fb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311a8f41314610046578063beed9b5114610064578063c4792df4146100c6575b600080fd5b61004e6100fa565b6040518082815260200191505060405180910390f35b6100ae6004803603608081101561007a57600080fd5b8101908080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610104565b60405180821515815260200191505060405180910390f35b6100f8600480360360208110156100dc57600080fd5b81019080803563ffffffff1690602001909291905050506101a2565b005b6000600154905090565b6000805a90507fdb623f4f39d41e75ae1cbe50460c3d1496b6cf9a0db391b7197f82cab2744d218686868685604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a18360018190555060008060009054906101000a900463ffffffff1663ffffffff1690505b805a8303101561019457610185565b600192505050949350505050565b806000806101000a81548163ffffffff021916908363ffffffff1602179055505056fea264697066735822122059a809a5b18340ba37fbc0ab6a8bc9cf1e05ee540f5d2811eb3bd4cf7f27fc4b64736f6c63430007050033";

export class TestValidator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestValidator> {
    return super.deploy(overrides || {}) as Promise<TestValidator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestValidator {
    return super.attach(address) as TestValidator;
  }
  connect(signer: Signer): TestValidator__factory {
    return super.connect(signer) as TestValidator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestValidatorInterface {
    return new utils.Interface(_abi) as TestValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestValidator {
    return new Contract(address, _abi, signerOrProvider) as TestValidator;
  }
}
