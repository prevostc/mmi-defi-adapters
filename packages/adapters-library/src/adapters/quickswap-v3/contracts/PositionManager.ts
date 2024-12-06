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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace INonfungiblePositionManager {
  export type CollectParamsStruct = {
    tokenId: BigNumberish;
    recipient: AddressLike;
    amount0Max: BigNumberish;
    amount1Max: BigNumberish;
  };

  export type CollectParamsStructOutput = [
    tokenId: bigint,
    recipient: string,
    amount0Max: bigint,
    amount1Max: bigint
  ] & {
    tokenId: bigint;
    recipient: string;
    amount0Max: bigint;
    amount1Max: bigint;
  };

  export type DecreaseLiquidityParamsStruct = {
    tokenId: BigNumberish;
    liquidity: BigNumberish;
    amount0Min: BigNumberish;
    amount1Min: BigNumberish;
    deadline: BigNumberish;
  };

  export type DecreaseLiquidityParamsStructOutput = [
    tokenId: bigint,
    liquidity: bigint,
    amount0Min: bigint,
    amount1Min: bigint,
    deadline: bigint
  ] & {
    tokenId: bigint;
    liquidity: bigint;
    amount0Min: bigint;
    amount1Min: bigint;
    deadline: bigint;
  };

  export type IncreaseLiquidityParamsStruct = {
    tokenId: BigNumberish;
    amount0Desired: BigNumberish;
    amount1Desired: BigNumberish;
    amount0Min: BigNumberish;
    amount1Min: BigNumberish;
    deadline: BigNumberish;
  };

  export type IncreaseLiquidityParamsStructOutput = [
    tokenId: bigint,
    amount0Desired: bigint,
    amount1Desired: bigint,
    amount0Min: bigint,
    amount1Min: bigint,
    deadline: bigint
  ] & {
    tokenId: bigint;
    amount0Desired: bigint;
    amount1Desired: bigint;
    amount0Min: bigint;
    amount1Min: bigint;
    deadline: bigint;
  };

  export type MintParamsStruct = {
    token0: AddressLike;
    token1: AddressLike;
    tickLower: BigNumberish;
    tickUpper: BigNumberish;
    amount0Desired: BigNumberish;
    amount1Desired: BigNumberish;
    amount0Min: BigNumberish;
    amount1Min: BigNumberish;
    recipient: AddressLike;
    deadline: BigNumberish;
  };

  export type MintParamsStructOutput = [
    token0: string,
    token1: string,
    tickLower: bigint,
    tickUpper: bigint,
    amount0Desired: bigint,
    amount1Desired: bigint,
    amount0Min: bigint,
    amount1Min: bigint,
    recipient: string,
    deadline: bigint
  ] & {
    token0: string;
    token1: string;
    tickLower: bigint;
    tickUpper: bigint;
    amount0Desired: bigint;
    amount1Desired: bigint;
    amount0Min: bigint;
    amount1Min: bigint;
    recipient: string;
    deadline: bigint;
  };
}

export interface PositionManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DOMAIN_SEPARATOR"
      | "PERMIT_TYPEHASH"
      | "WNativeToken"
      | "algebraMintCallback"
      | "approve"
      | "balanceOf"
      | "baseURI"
      | "burn"
      | "collect"
      | "createAndInitializePoolIfNecessary"
      | "decreaseLiquidity"
      | "factory"
      | "getApproved"
      | "increaseLiquidity"
      | "isApprovedForAll"
      | "mint"
      | "multicall"
      | "name"
      | "ownerOf"
      | "permit"
      | "poolDeployer"
      | "positions"
      | "refundNativeToken"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "selfPermit"
      | "selfPermitAllowed"
      | "selfPermitAllowedIfNecessary"
      | "selfPermitIfNecessary"
      | "setApprovalForAll"
      | "supportsInterface"
      | "sweepToken"
      | "symbol"
      | "tokenByIndex"
      | "tokenOfOwnerByIndex"
      | "tokenURI"
      | "totalSupply"
      | "transferFrom"
      | "unwrapWNativeToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "ApprovalForAll"
      | "Collect"
      | "DecreaseLiquidity"
      | "IncreaseLiquidity"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERMIT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WNativeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "algebraMintCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "collect",
    values: [INonfungiblePositionManager.CollectParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "createAndInitializePoolIfNecessary",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseLiquidity",
    values: [INonfungiblePositionManager.DecreaseLiquidityParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseLiquidity",
    values: [INonfungiblePositionManager.IncreaseLiquidityParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [INonfungiblePositionManager.MintParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "poolDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "refundNativeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermit",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowed",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowedIfNecessary",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitIfNecessary",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sweepToken",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWNativeToken",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERMIT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WNativeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "algebraMintCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAndInitializePoolIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "refundNativeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "selfPermit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowedIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwrapWNativeToken",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    approved: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [owner: string, approved: string, tokenId: bigint];
  export interface OutputObject {
    owner: string;
    approved: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApprovalForAllEvent {
  export type InputTuple = [
    owner: AddressLike,
    operator: AddressLike,
    approved: boolean
  ];
  export type OutputTuple = [
    owner: string,
    operator: string,
    approved: boolean
  ];
  export interface OutputObject {
    owner: string;
    operator: string;
    approved: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollectEvent {
  export type InputTuple = [
    tokenId: BigNumberish,
    recipient: AddressLike,
    amount0: BigNumberish,
    amount1: BigNumberish
  ];
  export type OutputTuple = [
    tokenId: bigint,
    recipient: string,
    amount0: bigint,
    amount1: bigint
  ];
  export interface OutputObject {
    tokenId: bigint;
    recipient: string;
    amount0: bigint;
    amount1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DecreaseLiquidityEvent {
  export type InputTuple = [
    tokenId: BigNumberish,
    liquidity: BigNumberish,
    amount0: BigNumberish,
    amount1: BigNumberish
  ];
  export type OutputTuple = [
    tokenId: bigint,
    liquidity: bigint,
    amount0: bigint,
    amount1: bigint
  ];
  export interface OutputObject {
    tokenId: bigint;
    liquidity: bigint;
    amount0: bigint;
    amount1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreaseLiquidityEvent {
  export type InputTuple = [
    tokenId: BigNumberish,
    liquidity: BigNumberish,
    actualLiquidity: BigNumberish,
    amount0: BigNumberish,
    amount1: BigNumberish,
    pool: AddressLike
  ];
  export type OutputTuple = [
    tokenId: bigint,
    liquidity: bigint,
    actualLiquidity: bigint,
    amount0: bigint,
    amount1: bigint,
    pool: string
  ];
  export interface OutputObject {
    tokenId: bigint;
    liquidity: bigint;
    actualLiquidity: bigint;
    amount0: bigint;
    amount1: bigint;
    pool: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, tokenId: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PositionManager extends BaseContract {
  connect(runner?: ContractRunner | null): PositionManager;
  waitForDeployment(): Promise<this>;

  interface: PositionManagerInterface;

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

  DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;

  PERMIT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  WNativeToken: TypedContractMethod<[], [string], "view">;

  algebraMintCallback: TypedContractMethod<
    [amount0Owed: BigNumberish, amount1Owed: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  approve: TypedContractMethod<
    [to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  baseURI: TypedContractMethod<[], [string], "view">;

  burn: TypedContractMethod<[tokenId: BigNumberish], [void], "payable">;

  collect: TypedContractMethod<
    [params: INonfungiblePositionManager.CollectParamsStruct],
    [[bigint, bigint] & { amount0: bigint; amount1: bigint }],
    "payable"
  >;

  createAndInitializePoolIfNecessary: TypedContractMethod<
    [token0: AddressLike, token1: AddressLike, sqrtPriceX96: BigNumberish],
    [string],
    "payable"
  >;

  decreaseLiquidity: TypedContractMethod<
    [params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct],
    [[bigint, bigint] & { amount0: bigint; amount1: bigint }],
    "payable"
  >;

  factory: TypedContractMethod<[], [string], "view">;

  getApproved: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  increaseLiquidity: TypedContractMethod<
    [params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct],
    [
      [bigint, bigint, bigint] & {
        liquidity: bigint;
        amount0: bigint;
        amount1: bigint;
      }
    ],
    "payable"
  >;

  isApprovedForAll: TypedContractMethod<
    [owner: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;

  mint: TypedContractMethod<
    [params: INonfungiblePositionManager.MintParamsStruct],
    [
      [bigint, bigint, bigint, bigint] & {
        tokenId: bigint;
        liquidity: bigint;
        amount0: bigint;
        amount1: bigint;
      }
    ],
    "payable"
  >;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "payable">;

  name: TypedContractMethod<[], [string], "view">;

  ownerOf: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  permit: TypedContractMethod<
    [
      spender: AddressLike,
      tokenId: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  poolDeployer: TypedContractMethod<[], [string], "view">;

  positions: TypedContractMethod<
    [tokenId: BigNumberish],
    [
      [
        bigint,
        string,
        string,
        string,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        nonce: bigint;
        operator: string;
        token0: string;
        token1: string;
        tickLower: bigint;
        tickUpper: bigint;
        liquidity: bigint;
        feeGrowthInside0LastX128: bigint;
        feeGrowthInside1LastX128: bigint;
        tokensOwed0: bigint;
        tokensOwed1: bigint;
      }
    ],
    "view"
  >;

  refundNativeToken: TypedContractMethod<[], [void], "payable">;

  "safeTransferFrom(address,address,uint256)": TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  "safeTransferFrom(address,address,uint256,bytes)": TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  selfPermit: TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  selfPermitAllowed: TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  selfPermitAllowedIfNecessary: TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  selfPermitIfNecessary: TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;

  setApprovalForAll: TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  sweepToken: TypedContractMethod<
    [token: AddressLike, amountMinimum: BigNumberish, recipient: AddressLike],
    [void],
    "payable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  tokenByIndex: TypedContractMethod<[index: BigNumberish], [bigint], "view">;

  tokenOfOwnerByIndex: TypedContractMethod<
    [owner: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;

  tokenURI: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  unwrapWNativeToken: TypedContractMethod<
    [amountMinimum: BigNumberish, recipient: AddressLike],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DOMAIN_SEPARATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PERMIT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WNativeToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "algebraMintCallback"
  ): TypedContractMethod<
    [amount0Owed: BigNumberish, amount1Owed: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "baseURI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "collect"
  ): TypedContractMethod<
    [params: INonfungiblePositionManager.CollectParamsStruct],
    [[bigint, bigint] & { amount0: bigint; amount1: bigint }],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createAndInitializePoolIfNecessary"
  ): TypedContractMethod<
    [token0: AddressLike, token1: AddressLike, sqrtPriceX96: BigNumberish],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "decreaseLiquidity"
  ): TypedContractMethod<
    [params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct],
    [[bigint, bigint] & { amount0: bigint; amount1: bigint }],
    "payable"
  >;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getApproved"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "increaseLiquidity"
  ): TypedContractMethod<
    [params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct],
    [
      [bigint, bigint, bigint] & {
        liquidity: bigint;
        amount0: bigint;
        amount1: bigint;
      }
    ],
    "payable"
  >;
  getFunction(
    nameOrSignature: "isApprovedForAll"
  ): TypedContractMethod<
    [owner: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [params: INonfungiblePositionManager.MintParamsStruct],
    [
      [bigint, bigint, bigint, bigint] & {
        tokenId: bigint;
        liquidity: bigint;
        amount0: bigint;
        amount1: bigint;
      }
    ],
    "payable"
  >;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "payable">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ownerOf"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "permit"
  ): TypedContractMethod<
    [
      spender: AddressLike,
      tokenId: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "poolDeployer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "positions"
  ): TypedContractMethod<
    [tokenId: BigNumberish],
    [
      [
        bigint,
        string,
        string,
        string,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        nonce: bigint;
        operator: string;
        token0: string;
        token1: string;
        tickLower: bigint;
        tickUpper: bigint;
        liquidity: bigint;
        feeGrowthInside0LastX128: bigint;
        feeGrowthInside1LastX128: bigint;
        tokensOwed0: bigint;
        tokensOwed1: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "refundNativeToken"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "safeTransferFrom(address,address,uint256)"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeTransferFrom(address,address,uint256,bytes)"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "selfPermit"
  ): TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selfPermitAllowed"
  ): TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selfPermitAllowedIfNecessary"
  ): TypedContractMethod<
    [
      token: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selfPermitIfNecessary"
  ): TypedContractMethod<
    [
      token: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setApprovalForAll"
  ): TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "sweepToken"
  ): TypedContractMethod<
    [token: AddressLike, amountMinimum: BigNumberish, recipient: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenByIndex"
  ): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokenOfOwnerByIndex"
  ): TypedContractMethod<
    [owner: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "tokenURI"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unwrapWNativeToken"
  ): TypedContractMethod<
    [amountMinimum: BigNumberish, recipient: AddressLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "ApprovalForAll"
  ): TypedContractEvent<
    ApprovalForAllEvent.InputTuple,
    ApprovalForAllEvent.OutputTuple,
    ApprovalForAllEvent.OutputObject
  >;
  getEvent(
    key: "Collect"
  ): TypedContractEvent<
    CollectEvent.InputTuple,
    CollectEvent.OutputTuple,
    CollectEvent.OutputObject
  >;
  getEvent(
    key: "DecreaseLiquidity"
  ): TypedContractEvent<
    DecreaseLiquidityEvent.InputTuple,
    DecreaseLiquidityEvent.OutputTuple,
    DecreaseLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "IncreaseLiquidity"
  ): TypedContractEvent<
    IncreaseLiquidityEvent.InputTuple,
    IncreaseLiquidityEvent.OutputTuple,
    IncreaseLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "ApprovalForAll(address,address,bool)": TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;
    ApprovalForAll: TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;

    "Collect(uint256,address,uint256,uint256)": TypedContractEvent<
      CollectEvent.InputTuple,
      CollectEvent.OutputTuple,
      CollectEvent.OutputObject
    >;
    Collect: TypedContractEvent<
      CollectEvent.InputTuple,
      CollectEvent.OutputTuple,
      CollectEvent.OutputObject
    >;

    "DecreaseLiquidity(uint256,uint128,uint256,uint256)": TypedContractEvent<
      DecreaseLiquidityEvent.InputTuple,
      DecreaseLiquidityEvent.OutputTuple,
      DecreaseLiquidityEvent.OutputObject
    >;
    DecreaseLiquidity: TypedContractEvent<
      DecreaseLiquidityEvent.InputTuple,
      DecreaseLiquidityEvent.OutputTuple,
      DecreaseLiquidityEvent.OutputObject
    >;

    "IncreaseLiquidity(uint256,uint128,uint128,uint256,uint256,address)": TypedContractEvent<
      IncreaseLiquidityEvent.InputTuple,
      IncreaseLiquidityEvent.OutputTuple,
      IncreaseLiquidityEvent.OutputObject
    >;
    IncreaseLiquidity: TypedContractEvent<
      IncreaseLiquidityEvent.InputTuple,
      IncreaseLiquidityEvent.OutputTuple,
      IncreaseLiquidityEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
