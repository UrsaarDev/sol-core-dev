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

interface NumiStakeInterface extends ethers.utils.Interface {
  functions: {
    "BLOCK_PER_YEAR()": FunctionFragment;
    "MAX_DEPOSIT_FEE()": FunctionFragment;
    "NUMI_POOL_FACTORY()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "depositFee()": FunctionFragment;
    "emergencyRewardWithdraw(uint256)": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "endBlock()": FunctionFragment;
    "endLockWhenPoolEnds()": FunctionFragment;
    "feeAddress()": FunctionFragment;
    "hasUserLimit()": FunctionFragment;
    "initialize(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint16,address,address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "lockTimeForReward()": FunctionFragment;
    "minSupplyForReward()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingReward(address)": FunctionFragment;
    "poolLimitPerUser()": FunctionFragment;
    "recoverWrongTokens(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardPerToken()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "stakedSupply()": FunctionFragment;
    "stakedToken()": FunctionFragment;
    "startBlock()": FunctionFragment;
    "stopReward()": FunctionFragment;
    "taxForEarlyWithdraw()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateDepositFee(uint16)": FunctionFragment;
    "updateFeeAddress(address)": FunctionFragment;
    "updateLockConfiguration(uint256,uint16,bool)": FunctionFragment;
    "updateMinSupplyForReward(uint256)": FunctionFragment;
    "updatePoolLimitPerUser(bool,uint256)": FunctionFragment;
    "updateRewardPerToken(uint256)": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "userLocked(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BLOCK_PER_YEAR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_DEPOSIT_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NUMI_POOL_FACTORY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyRewardWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endBlock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "endLockWhenPoolEnds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasUserLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockTimeForReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minSupplyForReward",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLimitPerUser",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoverWrongTokens",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakedSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stopReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "taxForEarlyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDepositFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFeeAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLockConfiguration",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMinSupplyForReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePoolLimitPerUser",
    values: [boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewardPerToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "userLocked", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BLOCK_PER_YEAR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_DEPOSIT_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NUMI_POOL_FACTORY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyRewardWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endLockWhenPoolEnds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasUserLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockTimeForReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minSupplyForReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolLimitPerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverWrongTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stopReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "taxForEarlyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDepositFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFeeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLockConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMinSupplyForReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePoolLimitPerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userLocked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AdminTokenRecovery(address,uint256)": EventFragment;
    "Deposit(address,uint256)": EventFragment;
    "EmergencyRewardWithdraw(uint256)": EventFragment;
    "EmergencyWithdraw(address,uint256)": EventFragment;
    "NewDepositFee(uint16,uint16)": EventFragment;
    "NewFeeAddress(address,address)": EventFragment;
    "NewMinSupplyForReward(uint256,uint256)": EventFragment;
    "NewPoolLimit(uint256)": EventFragment;
    "NewRewardPerToken(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RewardsStop(uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminTokenRecovery"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyRewardWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDepositFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewFeeAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewMinSupplyForReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPoolLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRewardPerToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsStop"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AdminTokenRecoveryEvent = TypedEvent<
  [string, BigNumber] & { tokenRecovered: string; amount: BigNumber }
>;

export type DepositEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export type EmergencyRewardWithdrawEvent = TypedEvent<
  [BigNumber] & { amount: BigNumber }
>;

export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export type NewDepositFeeEvent = TypedEvent<
  [number, number] & { oldFee: number; newFee: number }
>;

export type NewFeeAddressEvent = TypedEvent<
  [string, string] & { oldAddress: string; newAddress: string }
>;

export type NewMinSupplyForRewardEvent = TypedEvent<
  [BigNumber, BigNumber] & { oldValue: BigNumber; newValue: BigNumber }
>;

export type NewPoolLimitEvent = TypedEvent<
  [BigNumber] & { poolLimitPerUser: BigNumber }
>;

export type NewRewardPerTokenEvent = TypedEvent<
  [BigNumber, BigNumber] & { oldReward: BigNumber; newReward: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RewardsStopEvent = TypedEvent<
  [BigNumber] & { blockNumber: BigNumber }
>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export class NumiStake extends BaseContract {
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

  interface: NumiStakeInterface;

  functions: {
    BLOCK_PER_YEAR(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_DEPOSIT_FEE(overrides?: CallOverrides): Promise<[number]>;

    NUMI_POOL_FACTORY(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositFee(overrides?: CallOverrides): Promise<[number]>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    endLockWhenPoolEnds(overrides?: CallOverrides): Promise<[boolean]>;

    feeAddress(overrides?: CallOverrides): Promise<[string]>;

    hasUserLimit(overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerToken: BigNumberish,
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _minSupplyForReward: BigNumberish,
      _lockTimeForReward: BigNumberish,
      _depositFee: BigNumberish,
      _feeAddress: string,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    lockTimeForReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    minSupplyForReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<[BigNumber]>;

    recoverWrongTokens(
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    stakedSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    stakedToken(overrides?: CallOverrides): Promise<[string]>;

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    stopReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxForEarlyWithdraw(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateDepositFee(
      _depositFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFeeAddress(
      _feeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateLockConfiguration(
      _lockTimeForReward: BigNumberish,
      _taxForEarlyWithdraw: BigNumberish,
      _endLockWhenPoolEnds: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateMinSupplyForReward(
      _minSupplyForReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePoolLimitPerUser(
      _hasUserLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRewardPerToken(
      _rewardPerToken: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        lastRewardBlock: BigNumber;
        remainedReward: BigNumber;
        lastDepositTime: BigNumber;
      }
    >;

    userLocked(_user: string, overrides?: CallOverrides): Promise<[boolean]>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BLOCK_PER_YEAR(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_DEPOSIT_FEE(overrides?: CallOverrides): Promise<number>;

  NUMI_POOL_FACTORY(overrides?: CallOverrides): Promise<string>;

  deposit(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositFee(overrides?: CallOverrides): Promise<number>;

  emergencyRewardWithdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endBlock(overrides?: CallOverrides): Promise<BigNumber>;

  endLockWhenPoolEnds(overrides?: CallOverrides): Promise<boolean>;

  feeAddress(overrides?: CallOverrides): Promise<string>;

  hasUserLimit(overrides?: CallOverrides): Promise<boolean>;

  initialize(
    _stakedToken: string,
    _rewardToken: string,
    _rewardPerToken: BigNumberish,
    _startBlock: BigNumberish,
    _endBlock: BigNumberish,
    _poolLimitPerUser: BigNumberish,
    _minSupplyForReward: BigNumberish,
    _lockTimeForReward: BigNumberish,
    _depositFee: BigNumberish,
    _feeAddress: string,
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  lockTimeForReward(overrides?: CallOverrides): Promise<BigNumber>;

  minSupplyForReward(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  poolLimitPerUser(overrides?: CallOverrides): Promise<BigNumber>;

  recoverWrongTokens(
    _tokenAddress: string,
    _tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  stakedSupply(overrides?: CallOverrides): Promise<BigNumber>;

  stakedToken(overrides?: CallOverrides): Promise<string>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  stopReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxForEarlyWithdraw(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateDepositFee(
    _depositFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFeeAddress(
    _feeAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateLockConfiguration(
    _lockTimeForReward: BigNumberish,
    _taxForEarlyWithdraw: BigNumberish,
    _endLockWhenPoolEnds: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateMinSupplyForReward(
    _minSupplyForReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePoolLimitPerUser(
    _hasUserLimit: boolean,
    _poolLimitPerUser: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRewardPerToken(
    _rewardPerToken: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      lastRewardBlock: BigNumber;
      remainedReward: BigNumber;
      lastDepositTime: BigNumber;
    }
  >;

  userLocked(_user: string, overrides?: CallOverrides): Promise<boolean>;

  withdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BLOCK_PER_YEAR(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_DEPOSIT_FEE(overrides?: CallOverrides): Promise<number>;

    NUMI_POOL_FACTORY(overrides?: CallOverrides): Promise<string>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    depositFee(overrides?: CallOverrides): Promise<number>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    endLockWhenPoolEnds(overrides?: CallOverrides): Promise<boolean>;

    feeAddress(overrides?: CallOverrides): Promise<string>;

    hasUserLimit(overrides?: CallOverrides): Promise<boolean>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerToken: BigNumberish,
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _minSupplyForReward: BigNumberish,
      _lockTimeForReward: BigNumberish,
      _depositFee: BigNumberish,
      _feeAddress: string,
      _admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    lockTimeForReward(overrides?: CallOverrides): Promise<BigNumber>;

    minSupplyForReward(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<BigNumber>;

    recoverWrongTokens(
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    stakedSupply(overrides?: CallOverrides): Promise<BigNumber>;

    stakedToken(overrides?: CallOverrides): Promise<string>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    stopReward(overrides?: CallOverrides): Promise<void>;

    taxForEarlyWithdraw(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDepositFee(
      _depositFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateFeeAddress(
      _feeAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLockConfiguration(
      _lockTimeForReward: BigNumberish,
      _taxForEarlyWithdraw: BigNumberish,
      _endLockWhenPoolEnds: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMinSupplyForReward(
      _minSupplyForReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePoolLimitPerUser(
      _hasUserLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRewardPerToken(
      _rewardPerToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        lastRewardBlock: BigNumber;
        remainedReward: BigNumber;
        lastDepositTime: BigNumber;
      }
    >;

    userLocked(_user: string, overrides?: CallOverrides): Promise<boolean>;

    withdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AdminTokenRecovery(address,uint256)"(
      tokenRecovered?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenRecovered: string; amount: BigNumber }
    >;

    AdminTokenRecovery(
      tokenRecovered?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenRecovered: string; amount: BigNumber }
    >;

    "Deposit(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Deposit(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    "EmergencyRewardWithdraw(uint256)"(
      amount?: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    EmergencyRewardWithdraw(
      amount?: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    "EmergencyWithdraw(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    EmergencyWithdraw(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    "NewDepositFee(uint16,uint16)"(
      oldFee?: null,
      newFee?: null
    ): TypedEventFilter<[number, number], { oldFee: number; newFee: number }>;

    NewDepositFee(
      oldFee?: null,
      newFee?: null
    ): TypedEventFilter<[number, number], { oldFee: number; newFee: number }>;

    "NewFeeAddress(address,address)"(
      oldAddress?: null,
      newAddress?: null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    NewFeeAddress(
      oldAddress?: null,
      newAddress?: null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    "NewMinSupplyForReward(uint256,uint256)"(
      oldValue?: null,
      newValue?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldValue: BigNumber; newValue: BigNumber }
    >;

    NewMinSupplyForReward(
      oldValue?: null,
      newValue?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldValue: BigNumber; newValue: BigNumber }
    >;

    "NewPoolLimit(uint256)"(
      poolLimitPerUser?: null
    ): TypedEventFilter<[BigNumber], { poolLimitPerUser: BigNumber }>;

    NewPoolLimit(
      poolLimitPerUser?: null
    ): TypedEventFilter<[BigNumber], { poolLimitPerUser: BigNumber }>;

    "NewRewardPerToken(uint256,uint256)"(
      oldReward?: null,
      newReward?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldReward: BigNumber; newReward: BigNumber }
    >;

    NewRewardPerToken(
      oldReward?: null,
      newReward?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldReward: BigNumber; newReward: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "RewardsStop(uint256)"(
      blockNumber?: null
    ): TypedEventFilter<[BigNumber], { blockNumber: BigNumber }>;

    RewardsStop(
      blockNumber?: null
    ): TypedEventFilter<[BigNumber], { blockNumber: BigNumber }>;

    "Withdraw(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Withdraw(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    BLOCK_PER_YEAR(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_DEPOSIT_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    NUMI_POOL_FACTORY(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositFee(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    endLockWhenPoolEnds(overrides?: CallOverrides): Promise<BigNumber>;

    feeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    hasUserLimit(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerToken: BigNumberish,
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _minSupplyForReward: BigNumberish,
      _lockTimeForReward: BigNumberish,
      _depositFee: BigNumberish,
      _feeAddress: string,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    lockTimeForReward(overrides?: CallOverrides): Promise<BigNumber>;

    minSupplyForReward(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<BigNumber>;

    recoverWrongTokens(
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    stakedSupply(overrides?: CallOverrides): Promise<BigNumber>;

    stakedToken(overrides?: CallOverrides): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    stopReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxForEarlyWithdraw(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateDepositFee(
      _depositFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFeeAddress(
      _feeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateLockConfiguration(
      _lockTimeForReward: BigNumberish,
      _taxForEarlyWithdraw: BigNumberish,
      _endLockWhenPoolEnds: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateMinSupplyForReward(
      _minSupplyForReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePoolLimitPerUser(
      _hasUserLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRewardPerToken(
      _rewardPerToken: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userLocked(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BLOCK_PER_YEAR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_DEPOSIT_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NUMI_POOL_FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endLockWhenPoolEnds(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasUserLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerToken: BigNumberish,
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _minSupplyForReward: BigNumberish,
      _lockTimeForReward: BigNumberish,
      _depositFee: BigNumberish,
      _feeAddress: string,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockTimeForReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minSupplyForReward(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverWrongTokens(
      _tokenAddress: string,
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stopReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxForEarlyWithdraw(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateDepositFee(
      _depositFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFeeAddress(
      _feeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateLockConfiguration(
      _lockTimeForReward: BigNumberish,
      _taxForEarlyWithdraw: BigNumberish,
      _endLockWhenPoolEnds: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateMinSupplyForReward(
      _minSupplyForReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePoolLimitPerUser(
      _hasUserLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRewardPerToken(
      _rewardPerToken: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userLocked(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
