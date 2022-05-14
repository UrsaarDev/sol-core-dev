/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DividendDistributor,
  DividendDistributorInterface,
} from "../DividendDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "claimDividend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "dividendsPerShare",
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
    inputs: [],
    name: "dividendsPerShareAccuracyFactor",
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
        internalType: "address",
        name: "shareholder",
        type: "address",
      },
    ],
    name: "getUnpaidEarnings",
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
    inputs: [],
    name: "minDistribution",
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
    inputs: [],
    name: "minPeriod",
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
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "process",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minDistribution",
        type: "uint256",
      },
    ],
    name: "setDistributionCriteria",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "shareholder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "shares",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalExcluded",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRealised",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDistributed",
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
    inputs: [],
    name: "totalDividends",
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
    inputs: [],
    name: "totalShares",
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
];

const _bytecode =
  "0x6080604052600180546001600160a01b03191673e9e7cea3dedca5984780bafc599bd69add087d561790556ec097ce7bc90715b34b9f1000000000600b55610e10600c55670de0b6b3a7640000600d5534801561005b57600080fd5b50604051610efe380380610efe83398101604081905261007a916100d4565b6001600160a01b0381166100a2577310ed43c718714eb63d5aa57b78b54704e256024e6100a4565b805b600280546001600160a01b03929092166001600160a01b0319928316179055600080549091163317905550610102565b6000602082840312156100e5578081fd5b81516001600160a01b03811681146100fb578182fd5b9392505050565b610ded806101116000396000f3fe6080604052600436106100dd5760003560e01c8063ce7c2ac21161007f578063efca2eed11610059578063efca2eed14610224578063f0fc6bca1461023a578063ffb2c4791461024f578063ffd49c841461026f576100dd565b8063ce7c2ac2146101af578063d0e30db014610206578063e2d2e2191461020e576100dd565b80632d48e896116100bb5780632d48e8961461014d5780633a98ef391461016d5780634fab0ae814610183578063997664d714610199576100dd565b806311ce023d146100e257806314b6ca961461010b57806328fd31981461012d575b600080fd5b3480156100ee57600080fd5b506100f8600b5481565b6040519081526020015b60405180910390f35b34801561011757600080fd5b5061012b610126366004610bfe565b610285565b005b34801561013957600080fd5b506100f8610148366004610bc6565b6103fd565b34801561015957600080fd5b5061012b610168366004610c79565b610489565b34801561017957600080fd5b506100f860075481565b34801561018f57600080fd5b506100f8600d5481565b3480156101a557600080fd5b506100f860085481565b3480156101bb57600080fd5b506101eb6101ca366004610bc6565b60066020526000908152604090208054600182015460029092015490919083565b60408051938452602084019290925290820152606001610102565b61012b6104ab565b34801561021a57600080fd5b506100f8600a5481565b34801561023057600080fd5b506100f860095481565b34801561024657600080fd5b5061012b610783565b34801561025b57600080fd5b5061012b61026a366004610c49565b61078e565b34801561027b57600080fd5b506100f8600c5481565b6000546001600160a01b0316331461029c57600080fd5b6001600160a01b038216600090815260066020526040902054156102c3576102c3826108ad565b6000811180156102e957506001600160a01b038216600090815260066020526040902054155b1561034f57600380546001600160a01b0384166000818152600460205260408120839055600183018455929092527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319169091179055610382565b8015801561037457506001600160a01b03821660009081526006602052604090205415155b1561038257610382826109da565b6001600160a01b0382166000908152600660205260409020546007546103b39183916103ad91610b27565b90610b3a565b6007556001600160a01b03821660009081526006602052604090208190556103da81610b46565b6001600160a01b0390921660009081526006602052604090206001019190915550565b6001600160a01b03811660009081526006602052604081205461042257506000610484565b6001600160a01b03821660009081526006602052604081205461044490610b46565b6001600160a01b03841660009081526006602052604090206001015490915080821161047557600092505050610484565b61047f8282610b27565b925050505b919050565b6000546001600160a01b031633146104a057600080fd5b600c91909155600d55565b6000546001600160a01b031633146104c257600080fd5b6001546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561050657600080fd5b505afa15801561051a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053e9190610c61565b60408051600280825260608201835292935060009290916020830190803683375050600254604080516315ab88c960e31b815290519394506001600160a01b039091169263ad5c464892506004808301926020929190829003018186803b1580156105a857600080fd5b505afa1580156105bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e09190610be2565b8160008151811061060157634e487b7160e01b600052603260045260246000fd5b6001600160a01b039283166020918202929092010152600180548351921691839190811061063f57634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260025460405163b6f9de9560e01b815291169063b6f9de9590349061068590600090869030904290600401610c9a565b6000604051808303818588803b15801561069e57600080fd5b505af11580156106b2573d6000803e3d6000fd5b50506001546040516370a0823160e01b81523060048201526000945061074193508692506001600160a01b03909116906370a082319060240160206040518083038186803b15801561070357600080fd5b505afa158015610717573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073b9190610c61565b90610b27565b6008549091506107519082610b3a565b600855600754600b5461077b916107729161076c9085610b69565b90610b75565b600a5490610b3a565b600a55505050565b61078c336108ad565b565b6000546001600160a01b031633146107a557600080fd5b600354806107b357506108aa565b6000805a905060005b84831080156107ca57508381105b156108a55783600e54106107de576000600e555b61081e6003600e548154811061080457634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b0316610b81565b15610863576108636003600e548154811061084957634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03166108ad565b6108786108715a8490610b27565b8490610b3a565b92505a600e8054919350600061088d83610d71565b9190505550808061089d90610d71565b9150506107bc565b505050505b50565b6001600160a01b0381166000908152600660205260409020546108cf576108aa565b60006108da826103fd565b905080156109d6576009546108ef9082610b3a565b60095560015460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb90604401602060405180830381600087803b15801561094057600080fd5b505af1158015610954573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109789190610c29565b506001600160a01b038216600090815260056020908152604080832042905560069091529020600201546109ac9082610b3a565b6001600160a01b03831660009081526006602052604090206002810191909155546103da90610b46565b5050565b600380546109ea90600190610d5a565b81548110610a0857634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b0384811684526004909252604090922054600380549290931692918110610a5457634e487b7160e01b600052603260045260246000fd5b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055918316815260049182905260408120546003805491939291610aa090600190610d5a565b81548110610abe57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020556003805480610b0257634e487b7160e01b600052603160045260246000fd5b600082815260209020810160001990810180546001600160a01b031916905501905550565b6000610b338284610d5a565b9392505050565b6000610b338284610d03565b6000610b63600b5461076c600a5485610b6990919063ffffffff16565b92915050565b6000610b338284610d3b565b6000610b338284610d1b565b600c546001600160a01b03821660009081526005602052604081205490914291610bab9190610d03565b108015610b635750600d54610bbf836103fd565b1192915050565b600060208284031215610bd7578081fd5b8135610b3381610da2565b600060208284031215610bf3578081fd5b8151610b3381610da2565b60008060408385031215610c10578081fd5b8235610c1b81610da2565b946020939093013593505050565b600060208284031215610c3a578081fd5b81518015158114610b33578182fd5b600060208284031215610c5a578081fd5b5035919050565b600060208284031215610c72578081fd5b5051919050565b60008060408385031215610c8b578182fd5b50508035926020909101359150565b600060808201868352602060808185015281875180845260a0860191508289019350845b81811015610ce35784516001600160a01b031683529383019391830191600101610cbe565b50506001600160a01b039690961660408501525050506060015292915050565b60008219821115610d1657610d16610d8c565b500190565b600082610d3657634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610d5557610d55610d8c565b500290565b600082821015610d6c57610d6c610d8c565b500390565b6000600019821415610d8557610d85610d8c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146108aa57600080fdfea2646970667358221220910d4a39e4f2efdfcadf6d215deaebd20ac9cadb22555a0a6b139a04684d1a4364736f6c63430008020033";

export class DividendDistributor__factory extends ContractFactory {
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
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DividendDistributor> {
    return super.deploy(
      _router,
      overrides || {}
    ) as Promise<DividendDistributor>;
  }
  getDeployTransaction(
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_router, overrides || {});
  }
  attach(address: string): DividendDistributor {
    return super.attach(address) as DividendDistributor;
  }
  connect(signer: Signer): DividendDistributor__factory {
    return super.connect(signer) as DividendDistributor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DividendDistributorInterface {
    return new utils.Interface(_abi) as DividendDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DividendDistributor {
    return new Contract(address, _abi, signerOrProvider) as DividendDistributor;
  }
}