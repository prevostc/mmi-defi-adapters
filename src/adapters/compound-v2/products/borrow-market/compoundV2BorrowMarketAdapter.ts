import { z } from 'zod'
import { CompoundV2BorrowMarketForkAdapter } from '../../../../core/adapters/CompoundV2BorrowMarketForkAdapter'
import { Chain } from '../../../../core/constants/chains'
import { CacheToFile } from '../../../../core/decorators/cacheToFile'
import {
  ProtocolDetails,
  PositionType,
  AssetType,
} from '../../../../types/adapter'
import { WriteActions } from '../../../../types/writeActions'
import { Protocol } from '../../../protocols'
import { contractAddresses } from '../../common/contractAddresses'
import { CUSDCv3__factory } from '../../contracts'

export class CompoundV2BorrowMarketAdapter extends CompoundV2BorrowMarketForkAdapter {
  productId = 'borrow-market'

  contractAddresses: Partial<
    Record<Chain, { comptrollerAddress: string; cUSDCv3Address: string }>
  > = contractAddresses

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'CompoundV2',
      description: 'CompoundV2 borrow market adapter',
      siteUrl: 'https:',
      iconUrl: 'https://',
      positionType: PositionType.Borrow,
      chainId: this.chainId,
      productId: this.productId,
      assetDetails: {
        type: AssetType.NonStandardErc20,
      },
    }
  }

  @CacheToFile({ fileKey: 'protocol-token' })
  async buildMetadata() {
    return await super.buildMetadata()
  }

  getTransactionParams({ action, inputs }: GetTransactionParams) {
    const poolContract = CUSDCv3__factory.connect(
      contractAddresses[this.chainId]!.cUSDCv3Address,
      this.provider,
    )

    const { asset, amount } = inputs

    switch (action) {
      case WriteActions.Borrow: {
        return poolContract.withdraw.populateTransaction(asset, amount)
      }

      case WriteActions.Repay: {
        return poolContract.supply.populateTransaction(asset, amount)
      }
    }
  }
}

export const WriteActionInputs = {
  [WriteActions.Borrow]: z.object({
    asset: z.string(),
    amount: z.string(),
  }),
  [WriteActions.Repay]: z.object({
    asset: z.string(),
    amount: z.string(),
  }),
}

const commonFields = {
  protocolId: z.literal(Protocol.CompoundV2),
  productId: z.literal('borrow-market'),
  chainId: z.nativeEnum(Chain),
}

export const GetTransactionParamsSchema = z.discriminatedUnion('action', [
  z.object({
    ...commonFields,
    action: z.literal(WriteActions.Borrow),
    inputs: WriteActionInputs[WriteActions.Borrow],
  }),
  z.object({
    ...commonFields,
    action: z.literal(WriteActions.Repay),
    inputs: WriteActionInputs[WriteActions.Repay],
  }),
])
export type GetTransactionParams = z.infer<typeof GetTransactionParamsSchema>
