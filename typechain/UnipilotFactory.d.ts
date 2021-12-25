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

interface UnipilotFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createVault(address,address,uint24,uint160)": FunctionFragment;
    "getVaults(address,address,uint24)": FunctionFragment;
    "owner()": FunctionFragment;
    "parameters()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "uniswapFactory()": FunctionFragment;
    "vaults(address,address,uint24)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createVault",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaults",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "parameters",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "uniswapFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vaults",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVaults", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;

  events: {
    "OwnerChanged(address,address)": EventFragment;
    "VaultCreated(address,address,uint24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultCreated"): EventFragment;
}

export type OwnerChangedEvent = TypedEvent<
  [string, string] & { _oldOwner: string; _newOwner: string }
>;

export type VaultCreatedEvent = TypedEvent<
  [string, string, number] & { _tokenA: string; _tokenB: string; fee: number }
>;

export class UnipilotFactory extends BaseContract {
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

  interface: UnipilotFactoryInterface;

  functions: {
    createVault(
      _tokenA: string,
      _tokenB: string,
      _fee: BigNumberish,
      _sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getVaults(
      _tokenA: string,
      _tokenB: string,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { _vault: string }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number] & {
        factory: string;
        tokenA: string;
        tokenB: string;
        fee: number;
      }
    >;

    setOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapFactory(overrides?: CallOverrides): Promise<[string]>;

    vaults(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createVault(
    _tokenA: string,
    _tokenB: string,
    _fee: BigNumberish,
    _sqrtPriceX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getVaults(
    _tokenA: string,
    _tokenB: string,
    _fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  parameters(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number] & {
      factory: string;
      tokenA: string;
      tokenB: string;
      fee: number;
    }
  >;

  setOwner(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapFactory(overrides?: CallOverrides): Promise<string>;

  vaults(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createVault(
      _tokenA: string,
      _tokenB: string,
      _fee: BigNumberish,
      _sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getVaults(
      _tokenA: string,
      _tokenB: string,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number] & {
        factory: string;
        tokenA: string;
        tokenB: string;
        fee: number;
      }
    >;

    setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;

    uniswapFactory(overrides?: CallOverrides): Promise<string>;

    vaults(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "OwnerChanged(address,address)"(
      _oldOwner?: string | null,
      _newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { _oldOwner: string; _newOwner: string }
    >;

    OwnerChanged(
      _oldOwner?: string | null,
      _newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { _oldOwner: string; _newOwner: string }
    >;

    "VaultCreated(address,address,uint24)"(
      _tokenA?: string | null,
      _tokenB?: string | null,
      fee?: null
    ): TypedEventFilter<
      [string, string, number],
      { _tokenA: string; _tokenB: string; fee: number }
    >;

    VaultCreated(
      _tokenA?: string | null,
      _tokenB?: string | null,
      fee?: null
    ): TypedEventFilter<
      [string, string, number],
      { _tokenA: string; _tokenB: string; fee: number }
    >;
  };

  estimateGas: {
    createVault(
      _tokenA: string,
      _tokenB: string,
      _fee: BigNumberish,
      _sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getVaults(
      _tokenA: string,
      _tokenB: string,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    parameters(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapFactory(overrides?: CallOverrides): Promise<BigNumber>;

    vaults(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createVault(
      _tokenA: string,
      _tokenB: string,
      _fee: BigNumberish,
      _sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getVaults(
      _tokenA: string,
      _tokenB: string,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaults(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
