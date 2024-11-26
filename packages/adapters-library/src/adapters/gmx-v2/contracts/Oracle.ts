/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Price {
  export type PropsStruct = { min: BigNumberish; max: BigNumberish };

  export type PropsStructOutput = [min: bigint, max: bigint] & {
    min: bigint;
    max: bigint;
  };
}

export declare namespace OracleUtils {
  export type SetPricesParamsStruct = {
    tokens: AddressLike[];
    providers: AddressLike[];
    data: BytesLike[];
  };

  export type SetPricesParamsStructOutput = [
    tokens: string[],
    providers: string[],
    data: string[]
  ] & { tokens: string[]; providers: string[]; data: string[] };

  export type ValidatedPriceStruct = {
    token: AddressLike;
    min: BigNumberish;
    max: BigNumberish;
    timestamp: BigNumberish;
    provider: AddressLike;
  };

  export type ValidatedPriceStructOutput = [
    token: string,
    min: bigint,
    max: bigint,
    timestamp: bigint,
    provider: string
  ] & {
    token: string;
    min: bigint;
    max: bigint;
    timestamp: bigint;
    provider: string;
  };
}

export interface OracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "clearAllPrices"
      | "dataStore"
      | "eventEmitter"
      | "getPrimaryPrice"
      | "getTokensWithPrices"
      | "getTokensWithPricesCount"
      | "maxTimestamp"
      | "minTimestamp"
      | "primaryPrices"
      | "roleStore"
      | "sequencerUptimeFeed"
      | "setPrices"
      | "setPricesForAtomicAction"
      | "setPrimaryPrice"
      | "setTimestamps"
      | "validatePrices"
      | "validateSequencerUp"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "clearAllPrices",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eventEmitter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrimaryPrice",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokensWithPrices",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokensWithPricesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "primaryPrices",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sequencerUptimeFeed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPrices",
    values: [OracleUtils.SetPricesParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setPricesForAtomicAction",
    values: [OracleUtils.SetPricesParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrimaryPrice",
    values: [AddressLike, Price.PropsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setTimestamps",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validatePrices",
    values: [OracleUtils.SetPricesParamsStruct, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "validateSequencerUp",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "clearAllPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eventEmitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrimaryPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokensWithPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokensWithPricesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "primaryPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sequencerUptimeFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrices", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPricesForAtomicAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrimaryPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTimestamps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatePrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateSequencerUp",
    data: BytesLike
  ): Result;
}

export interface Oracle extends BaseContract {
  connect(runner?: ContractRunner | null): Oracle;
  waitForDeployment(): Promise<this>;

  interface: OracleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  clearAllPrices: TypedContractMethod<[], [void], "nonpayable">;

  dataStore: TypedContractMethod<[], [string], "view">;

  eventEmitter: TypedContractMethod<[], [string], "view">;

  getPrimaryPrice: TypedContractMethod<
    [token: AddressLike],
    [Price.PropsStructOutput],
    "view"
  >;

  getTokensWithPrices: TypedContractMethod<
    [start: BigNumberish, end: BigNumberish],
    [string[]],
    "view"
  >;

  getTokensWithPricesCount: TypedContractMethod<[], [bigint], "view">;

  maxTimestamp: TypedContractMethod<[], [bigint], "view">;

  minTimestamp: TypedContractMethod<[], [bigint], "view">;

  primaryPrices: TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, bigint] & { min: bigint; max: bigint }],
    "view"
  >;

  roleStore: TypedContractMethod<[], [string], "view">;

  sequencerUptimeFeed: TypedContractMethod<[], [string], "view">;

  setPrices: TypedContractMethod<
    [params: OracleUtils.SetPricesParamsStruct],
    [void],
    "nonpayable"
  >;

  setPricesForAtomicAction: TypedContractMethod<
    [params: OracleUtils.SetPricesParamsStruct],
    [void],
    "nonpayable"
  >;

  setPrimaryPrice: TypedContractMethod<
    [token: AddressLike, price: Price.PropsStruct],
    [void],
    "nonpayable"
  >;

  setTimestamps: TypedContractMethod<
    [_minTimestamp: BigNumberish, _maxTimestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  validatePrices: TypedContractMethod<
    [params: OracleUtils.SetPricesParamsStruct, forAtomicAction: boolean],
    [OracleUtils.ValidatedPriceStructOutput[]],
    "nonpayable"
  >;

  validateSequencerUp: TypedContractMethod<[], [void], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "clearAllPrices"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "dataStore"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "eventEmitter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getPrimaryPrice"
  ): TypedContractMethod<
    [token: AddressLike],
    [Price.PropsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokensWithPrices"
  ): TypedContractMethod<
    [start: BigNumberish, end: BigNumberish],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokensWithPricesCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "primaryPrices"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, bigint] & { min: bigint; max: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "roleStore"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sequencerUptimeFeed"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setPrices"
  ): TypedContractMethod<
    [params: OracleUtils.SetPricesParamsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPricesForAtomicAction"
  ): TypedContractMethod<
    [params: OracleUtils.SetPricesParamsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPrimaryPrice"
  ): TypedContractMethod<
    [token: AddressLike, price: Price.PropsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTimestamps"
  ): TypedContractMethod<
    [_minTimestamp: BigNumberish, _maxTimestamp: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "validatePrices"
  ): TypedContractMethod<
    [params: OracleUtils.SetPricesParamsStruct, forAtomicAction: boolean],
    [OracleUtils.ValidatedPriceStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "validateSequencerUp"
  ): TypedContractMethod<[], [void], "view">;

  filters: {};
}
