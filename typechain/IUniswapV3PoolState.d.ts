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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IUniswapV3PoolStateInterface extends ethers.utils.Interface {
  functions: {
    "feeGrowthGlobal0X128()": FunctionFragment;
    "feeGrowthGlobal1X128()": FunctionFragment;
    "liquidity()": FunctionFragment;
    "observations(uint256)": FunctionFragment;
    "positions(bytes32)": FunctionFragment;
    "protocolFees()": FunctionFragment;
    "slot0()": FunctionFragment;
    "tickBitmap(int16)": FunctionFragment;
    "ticks(int24)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "feeGrowthGlobal0X128",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobal1X128",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "observations",
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFees",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "slot0", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tickBitmap",
    values: [BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "feeGrowthGlobal0X128",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobal1X128",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "observations",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolFees",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tickBitmap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;

  events: {};
}

export class IUniswapV3PoolState extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
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
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IUniswapV3PoolStateInterface;

  functions: {
    feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [number, BigNumber, BigNumber, boolean] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulativeX128: BigNumber;
        initialized: boolean;
      }
    >;

    positions(
      key: BytesLike,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _liquidity: BigNumber;
        feeGrowthInside0LastX128: BigNumber;
        feeGrowthInside1LastX128: BigNumber;
        tokensOwed0: BigNumber;
        tokensOwed1: BigNumber;
      }
    >;

    protocolFees(
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & { token0: BigNumber; token1: BigNumber }
    >;

    slot0(overrides?: CallOverrides): Promise<
      [BigNumber, number, number, number, number, number, boolean] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        observationIndex: number;
        observationCardinality: number;
        observationCardinalityNext: number;
        feeProtocol: number;
        unlocked: boolean;
      }
    >;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean,
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;
  };

  feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;

  feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  observations(
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [number, BigNumber, BigNumber, boolean] & {
      blockTimestamp: number;
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulativeX128: BigNumber;
      initialized: boolean;
    }
  >;

  positions(
    key: BytesLike,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      _liquidity: BigNumber;
      feeGrowthInside0LastX128: BigNumber;
      feeGrowthInside1LastX128: BigNumber;
      tokensOwed0: BigNumber;
      tokensOwed1: BigNumber;
    }
  >;

  protocolFees(
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { token0: BigNumber; token1: BigNumber }>;

  slot0(overrides?: CallOverrides): Promise<
    [BigNumber, number, number, number, number, number, boolean] & {
      sqrtPriceX96: BigNumber;
      tick: number;
      observationIndex: number;
      observationCardinality: number;
      observationCardinalityNext: number;
      feeProtocol: number;
      unlocked: boolean;
    }
  >;

  tickBitmap(
    wordPosition: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  ticks(
    tick: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean,
    ] & {
      liquidityGross: BigNumber;
      liquidityNet: BigNumber;
      feeGrowthOutside0X128: BigNumber;
      feeGrowthOutside1X128: BigNumber;
      tickCumulativeOutside: BigNumber;
      secondsPerLiquidityOutsideX128: BigNumber;
      secondsOutside: number;
      initialized: boolean;
    }
  >;

  callStatic: {
    feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [number, BigNumber, BigNumber, boolean] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulativeX128: BigNumber;
        initialized: boolean;
      }
    >;

    positions(
      key: BytesLike,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _liquidity: BigNumber;
        feeGrowthInside0LastX128: BigNumber;
        feeGrowthInside1LastX128: BigNumber;
        tokensOwed0: BigNumber;
        tokensOwed1: BigNumber;
      }
    >;

    protocolFees(
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & { token0: BigNumber; token1: BigNumber }
    >;

    slot0(overrides?: CallOverrides): Promise<
      [BigNumber, number, number, number, number, number, boolean] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        observationIndex: number;
        observationCardinality: number;
        observationCardinalityNext: number;
        feeProtocol: number;
        unlocked: boolean;
      }
    >;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean,
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;
  };

  filters: {};

  estimateGas: {
    feeGrowthGlobal0X128(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobal1X128(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    positions(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    protocolFees(overrides?: CallOverrides): Promise<BigNumber>;

    slot0(overrides?: CallOverrides): Promise<BigNumber>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    feeGrowthGlobal0X128(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    feeGrowthGlobal1X128(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    observations(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    positions(
      key: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    protocolFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    slot0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
