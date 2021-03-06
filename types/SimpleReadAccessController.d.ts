/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SimpleReadAccessControllerInterface extends ethers.utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "addAccess(address)": FunctionFragment;
    "checkEnabled()": FunctionFragment;
    "disableAccessCheck()": FunctionFragment;
    "enableAccessCheck()": FunctionFragment;
    "hasAccess(address,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAccess(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addAccess", values: [string]): string;
  encodeFunctionData(
    functionFragment: "checkEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableAccessCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enableAccessCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasAccess",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAccess",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addAccess", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableAccessCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableAccessCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasAccess", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddedAccess(address)": EventFragment;
    "CheckAccessDisabled()": EventFragment;
    "CheckAccessEnabled()": EventFragment;
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RemovedAccess(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedAccess"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CheckAccessDisabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CheckAccessEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedAccess"): EventFragment;
}

export type AddedAccessEvent = TypedEvent<[string] & { user: string }>;

export type CheckAccessDisabledEvent = TypedEvent<[] & {}>;

export type CheckAccessEnabledEvent = TypedEvent<[] & {}>;

export type OwnershipTransferRequestedEvent = TypedEvent<
  [string, string] & { from: string; to: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { from: string; to: string }
>;

export type RemovedAccessEvent = TypedEvent<[string] & { user: string }>;

export class SimpleReadAccessController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SimpleReadAccessControllerInterface;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addAccess(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    disableAccessCheck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableAccessCheck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasAccess(
      _user: string,
      _calldata: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeAccess(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addAccess(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkEnabled(overrides?: CallOverrides): Promise<boolean>;

  disableAccessCheck(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableAccessCheck(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasAccess(
    _user: string,
    _calldata: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAccess(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    addAccess(_user: string, overrides?: CallOverrides): Promise<void>;

    checkEnabled(overrides?: CallOverrides): Promise<boolean>;

    disableAccessCheck(overrides?: CallOverrides): Promise<void>;

    enableAccessCheck(overrides?: CallOverrides): Promise<void>;

    hasAccess(
      _user: string,
      _calldata: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAccess(_user: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(_to: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AddedAccess(address)"(
      user?: null
    ): TypedEventFilter<[string], { user: string }>;

    AddedAccess(user?: null): TypedEventFilter<[string], { user: string }>;

    "CheckAccessDisabled()"(): TypedEventFilter<[], {}>;

    CheckAccessDisabled(): TypedEventFilter<[], {}>;

    "CheckAccessEnabled()"(): TypedEventFilter<[], {}>;

    CheckAccessEnabled(): TypedEventFilter<[], {}>;

    "OwnershipTransferRequested(address,address)"(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    OwnershipTransferRequested(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    "OwnershipTransferred(address,address)"(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    OwnershipTransferred(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    "RemovedAccess(address)"(
      user?: null
    ): TypedEventFilter<[string], { user: string }>;

    RemovedAccess(user?: null): TypedEventFilter<[string], { user: string }>;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addAccess(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    disableAccessCheck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableAccessCheck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasAccess(
      _user: string,
      _calldata: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAccess(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addAccess(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disableAccessCheck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableAccessCheck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasAccess(
      _user: string,
      _calldata: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAccess(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
