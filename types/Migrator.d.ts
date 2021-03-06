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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MigratorInterface extends ethers.utils.Interface {
  functions: {
    "desiredLiquidity()": FunctionFragment;
    "factory()": FunctionFragment;
    "migrate(address)": FunctionFragment;
    "notBeforeBlock()": FunctionFragment;
    "oldFactory()": FunctionFragment;
    "put()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "desiredLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "migrate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "notBeforeBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oldFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "put", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "desiredLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notBeforeBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oldFactory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "put", data: BytesLike): Result;

  events: {};
}

export class Migrator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MigratorInterface;

  functions: {
    desiredLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    "desiredLiquidity()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    migrate(orig: string, overrides?: Overrides): Promise<ContractTransaction>;

    "migrate(address)"(
      orig: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    notBeforeBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "notBeforeBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    oldFactory(overrides?: CallOverrides): Promise<[string]>;

    "oldFactory()"(overrides?: CallOverrides): Promise<[string]>;

    put(overrides?: CallOverrides): Promise<[string]>;

    "put()"(overrides?: CallOverrides): Promise<[string]>;
  };

  desiredLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  "desiredLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  migrate(orig: string, overrides?: Overrides): Promise<ContractTransaction>;

  "migrate(address)"(
    orig: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  notBeforeBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "notBeforeBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  oldFactory(overrides?: CallOverrides): Promise<string>;

  "oldFactory()"(overrides?: CallOverrides): Promise<string>;

  put(overrides?: CallOverrides): Promise<string>;

  "put()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    desiredLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "desiredLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    migrate(orig: string, overrides?: CallOverrides): Promise<string>;

    "migrate(address)"(
      orig: string,
      overrides?: CallOverrides
    ): Promise<string>;

    notBeforeBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "notBeforeBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    oldFactory(overrides?: CallOverrides): Promise<string>;

    "oldFactory()"(overrides?: CallOverrides): Promise<string>;

    put(overrides?: CallOverrides): Promise<string>;

    "put()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    desiredLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "desiredLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    migrate(orig: string, overrides?: Overrides): Promise<BigNumber>;

    "migrate(address)"(orig: string, overrides?: Overrides): Promise<BigNumber>;

    notBeforeBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "notBeforeBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    oldFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "oldFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    put(overrides?: CallOverrides): Promise<BigNumber>;

    "put()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    desiredLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "desiredLiquidity()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    migrate(orig: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "migrate(address)"(
      orig: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    notBeforeBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "notBeforeBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oldFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "oldFactory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    put(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "put()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
