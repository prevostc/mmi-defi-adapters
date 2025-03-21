import { AdaptersController } from '../../../../core/adaptersController'
import { Chain } from '../../../../core/constants/chains'

import { CacheToDb } from '../../../../core/decorators/cacheToDb'

import { Helpers } from '../../../../core/helpers'
import { CustomJsonRpcProvider } from '../../../../core/provider/CustomJsonRpcProvider'
import { getTokenMetadata } from '../../../../core/utils/getTokenMetadata'
import {
  IProtocolAdapter,
  ProtocolToken,
} from '../../../../types/IProtocolAdapter'
import {
  AdapterSettings,
  GetPositionsInput,
  PositionType,
  ProtocolAdapterParams,
  ProtocolDetails,
  ProtocolPosition,
  UnwrapExchangeRate,
  UnwrapInput,
} from '../../../../types/adapter'
import { Protocol } from '../../../protocols'
import { staticChainData } from '../../common/staticChainData'
import {
  StargateFactory__factory,
  StargateToken__factory,
} from '../../contracts'

type AdditionalMetadata = { poolId: number }

export class StargatePoolAdapter implements IProtocolAdapter {
  productId = 'pool'
  helpers: Helpers
  chainId: Chain
  protocolId: Protocol
  provider: CustomJsonRpcProvider
  adaptersController: AdaptersController

  adapterSettings: AdapterSettings = {
    includeInUnwrap: true,
    userEvent: 'Transfer',
  }

  constructor({
    chainId,
    protocolId,
    helpers,
    provider,
    adaptersController,
  }: ProtocolAdapterParams) {
    this.chainId = chainId
    this.protocolId = protocolId
    this.provider = provider
    this.helpers = helpers
    this.adaptersController = adaptersController
  }

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'Stargate Liquidity Pools',
      description:
        'Stargate is a fully composable liquidity transport protocol that lives at the heart of Omnichain DeFi',
      siteUrl: 'https://stargate.finance/',
      iconUrl: 'https://stargate.finance/favicons/favicon-light.svg',
      positionType: PositionType.Supply,
      chainId: this.chainId,
      productId: this.productId,
    }
  }

  async getPositions(input: GetPositionsInput): Promise<ProtocolPosition[]> {
    return this.helpers.getBalanceOfTokens({
      ...input,
      protocolTokens: await this.getProtocolTokens(),
    })
  }

  async getProtocolTokenByAddress(
    protocolTokenAddress: string,
  ): Promise<ProtocolToken<AdditionalMetadata>> {
    return this.helpers.getProtocolTokenByAddress({
      protocolTokens: await this.getProtocolTokens(),
      protocolTokenAddress,
    })
  }

  async unwrap({
    protocolTokenAddress,
    blockNumber,
  }: UnwrapInput): Promise<UnwrapExchangeRate> {
    const protocolToken =
      await this.getProtocolTokenByAddress(protocolTokenAddress)

    const underlyingTokens = (
      await this.getProtocolTokenByAddress(protocolTokenAddress)
    ).underlyingTokens

    const oneToken = BigInt(1 * 10 ** protocolToken.decimals)

    return this.helpers.unwrapTokenWithRates({
      protocolToken,
      underlyingTokens,
      underlyingRates: [
        await StargateToken__factory.connect(
          protocolTokenAddress,
          this.provider,
        ).amountLPtoLD(oneToken, {
          blockTag: blockNumber,
        }),
      ],
    })
  }

  @CacheToDb
  async getProtocolTokens(): Promise<ProtocolToken<AdditionalMetadata>[]> {
    const lpFactoryContract = StargateFactory__factory.connect(
      staticChainData[this.chainId]!.factoryAddress,
      this.provider,
    )

    const poolsLength = Number(await lpFactoryContract.allPoolsLength())

    const metadataObject: ProtocolToken<AdditionalMetadata>[] = []

    const promises = Array.from({ length: poolsLength }, async (_, i) => {
      const poolAddress = await lpFactoryContract.allPools(i)

      const poolContract = StargateToken__factory.connect(
        poolAddress,
        this.provider,
      )

      const poolIdPromise = poolContract.poolId()
      const underlyingTokenAddressPromise = poolContract.token()

      const [poolId, underlyingTokenAddress] = await Promise.all([
        poolIdPromise,
        underlyingTokenAddressPromise,
      ])

      const protocolTokenPromise = getTokenMetadata(
        poolAddress,
        this.chainId,
        this.provider,
      )
      const underlyingTokenPromise = getTokenMetadata(
        underlyingTokenAddress,
        this.chainId,
        this.provider,
      )

      const [protocolToken, underlyingToken] = await Promise.all([
        protocolTokenPromise,
        underlyingTokenPromise,
      ])

      metadataObject.push({
        poolId: Number(poolId),
        ...protocolToken,
        underlyingTokens: [underlyingToken],
      })
    })

    await Promise.all(promises)

    return metadataObject
  }
}
