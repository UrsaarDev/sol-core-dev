/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISushiswapV2Pair,
  ISushiswapV2PairInterface,
} from "../ISushiswapV2Pair";

const _abi = [
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISushiswapV2Pair__factory {
  static readonly abi = _abi;
  static createInterface(): ISushiswapV2PairInterface {
    return new utils.Interface(_abi) as ISushiswapV2PairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISushiswapV2Pair {
    return new Contract(address, _abi, signerOrProvider) as ISushiswapV2Pair;
  }
}