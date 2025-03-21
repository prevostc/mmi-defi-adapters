import { CacheToDb } from '../../../../core/decorators/cacheToDb'
import { ProtocolToken } from '../../../../types/IProtocolAdapter'
import {
  AdapterSettings,
  PositionType,
  ProtocolDetails,
} from '../../../../types/adapter'
import { ProtocolDataProvider } from '../../contracts'

import { SparkV1BasePoolAdapter } from '../../common/SparkV1BasePoolAdapter'

export class SparkV1SpTokenAdapter extends SparkV1BasePoolAdapter {
  productId = 'sp-token'

  adapterSettings: AdapterSettings = {
    includeInUnwrap: true,
    userEvent: 'Transfer',
  }

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'SparkV1',
      description: 'SparkV1 defi adapter',
      siteUrl: 'https://spark.fi',
      iconUrl:
        'https://github.com/marsfoundation/spark-app/blob/main/packages/app/public/favicon.ico',
      positionType: PositionType.Supply,
      chainId: this.chainId,
      productId: this.productId,
    }
  }

  @CacheToDb
  async getProtocolTokens(): Promise<ProtocolToken[]> {
    return super.getProtocolTokens()
  }

  protected getReserveTokenAddress(
    reserveTokenAddresses: Awaited<
      ReturnType<ProtocolDataProvider['getReserveTokensAddresses']>
    >,
  ): string {
    return reserveTokenAddresses.aTokenAddress
  }

  protected getReserveTokenRate(
    reserveData: Awaited<ReturnType<ProtocolDataProvider['getReserveData']>>,
  ): bigint {
    return reserveData.variableBorrowRate
  }
}
