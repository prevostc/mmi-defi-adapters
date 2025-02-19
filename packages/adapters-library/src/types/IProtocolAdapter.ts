import type { Protocol } from '../adapters/protocols'
import type { AdaptersController } from '../core/adaptersController'
import type { Chain } from '../core/constants/chains'
import { IHelpers } from '../core/helpers'
import type {
  AdapterSettings,
  GetEventsInput,
  GetPositionsInput,
  GetRewardPositionsInput,
  GetTotalValueLockedInput,
  MovementsByBlock,
  MovementsByBlockReward,
  ProtocolDetails,
  ProtocolPosition,
  ProtocolTokenTvl,
  UnderlyingReward,
  UnwrapExchangeRate,
  UnwrapInput,
} from './adapter'
import type { Erc20Metadata } from './erc20Metadata'

export type Json =
  | null
  | boolean
  | number
  | string
  | Json[]
  | { [prop: string]: Json }

export type JsonMetadata = Record<string, Json>

export type Erc20ExtendedMetadata = Erc20Metadata & JsonMetadata

export type AdditionalMetadataWithReservedFields = {
  underlyingTokens?: Erc20ExtendedMetadata[]
  rewardTokens?: Erc20ExtendedMetadata[]
  extraRewardTokens?: Erc20ExtendedMetadata[]
  tokenId?: string
} & JsonMetadata

export type ProtocolToken<
  AdditionalMetadata extends
    AdditionalMetadataWithReservedFields = JsonMetadata,
> = Erc20Metadata & {
  underlyingTokens: Erc20ExtendedMetadata[]
} & AdditionalMetadata

export interface IProtocolAdapter {
  adapterSettings: AdapterSettings

  helpers: IHelpers

  /**
   * Unique identifier of the protocol.
   */
  protocolId: Protocol

  /**
   * Unique identifier of the blockchain network.
   */
  chainId: Chain

  /**
   * Unique identifier for this protocol adapter
   */
  productId: string

  adaptersController: AdaptersController

  /**
   * @remarks Returns high level metadata for the protocol
   *
   * @returns {ProtocolDetails} Object containing details about the protocol such as name and description.
   */
  getProtocolDetails(): ProtocolDetails

  /**
   * @remarks Returns array of pool tokens (lp tokens) for the protocol
   *
   * @returns {Promise<ProtocolToken[]>} An array of objects detailing the protocol tokens.
   */
  getProtocolTokens(writeToFile?: boolean): Promise<ProtocolToken[]>

  /**
   *
   * @remarks Returns array of user positions opened in this protocol
   *
   * @param {GetPositionsInput} input - Object with user-address and optional blockNumber override.
   * @returns {Promise<ProtocolPosition[]>} An array of objects detailing the user positions.
   */
  getPositions(input: GetPositionsInput): Promise<ProtocolPosition[]>

  /**
   *
   * @remarks Returns "price" of lp-tokens in the form of the underlying tokens. Unwraps tokens to the current unwrapping exchange rate
   * @remarks Read only method, doesn't update blockchain state.
   *
   * @param {UnwrapInput} input - Object with protocol-token-address and optional blockNumber override.
   * @returns {Promise<UnwrapExchangeRate>} Object detailing the price per share of the protocol token.
   */
  unwrap(input: UnwrapInput): Promise<UnwrapExchangeRate>

  /**
   *
   * @remarks Returns the user's withdrawals from a position
   *
   * @param {GetEventsInput} input - Object specifying user-address, protocol-token-address (pool), and the block range.
   * @returns {Promise<MovementsByBlock[]>} Array of objects detailing withdrawal events within the specified block range.
   */
  getWithdrawals(input: GetEventsInput): Promise<MovementsByBlock[]>

  /**
   *
   * @remarks Returns the user's deposits to a position
   *
   * @param {GetEventsInput} input - Object specifying user-address, protocol-token-address (pool), and the block range.
   * @returns {Promise<MovementsByBlock[]>} Array of objects detailing deposit events within the specified block range.
   */
  getDeposits(input: GetEventsInput): Promise<MovementsByBlock[]>
  /**
   *
   * @remarks Returns the user's withdrawals from a position
   *
   * @param {GetEventsInput} input - Object specifying user-address, protocol-token-address (pool), and the block range.
   * @returns {Promise<MovementsByBlock[]>} Array of objects detailing withdrawal events within the specified block range.
   */
  getBorrows?(input: GetEventsInput): Promise<MovementsByBlock[]>

  /**
   *
   * @remarks Returns the user's deposits to a position
   *
   * @param {GetEventsInput} input - Object specifying user-address, protocol-token-address (pool), and the block range.
   * @returns {Promise<MovementsByBlock[]>} Array of objects detailing deposit events within the specified block range.
   */
  getRepays?(input: GetEventsInput): Promise<MovementsByBlock[]>

  /**
   *
   * @remarks Returns the Tvl per pool defined in the underlying token
   *
   * @param {GetTotalValueLockedInput} input - Object with optional blockNumber override.
   * @returns {Promise<ProtocolTokenTvl[]>} An array of objects detailing the total value locked in each protocol pool.
   */
  getTotalValueLocked(
    input: GetTotalValueLockedInput,
  ): Promise<ProtocolTokenTvl[]>

  getRewardPositions?(
    input: GetRewardPositionsInput,
  ): Promise<UnderlyingReward[]>

  getRewardWithdrawals?({
    userAddress,
    protocolTokenAddress,
    tokenId,
  }: GetEventsInput): Promise<MovementsByBlockReward[]>

  getExtraRewardPositions?(
    input: GetRewardPositionsInput,
  ): Promise<UnderlyingReward[]>

  getExtraRewardWithdrawals?({
    userAddress,
    protocolTokenAddress,
    tokenId,
  }: GetEventsInput): Promise<MovementsByBlockReward[]>
}
