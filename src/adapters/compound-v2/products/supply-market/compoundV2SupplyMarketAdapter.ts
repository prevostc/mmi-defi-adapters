import { z } from 'zod'
import { CompoundV2SupplyMarketForkAdapter } from '../../../../core/adapters/CompoundV2SupplyMarketForkAdapter'
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

export class CompoundV2SupplyMarketAdapter extends CompoundV2SupplyMarketForkAdapter {
  productId = 'supply-market'

  contractAddresses: Partial<
    Record<Chain, { comptrollerAddress: string; cUSDCv3Address: string }>
  > = contractAddresses

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'CompoundV2',
      description: 'CompoundV2 supply market adapter',
      siteUrl: 'https:',
      iconUrl: 'https://',
      positionType: PositionType.Supply,
      chainId: this.chainId,
      productId: this.productId,
      assetDetails: {
        type: AssetType.StandardErc20,
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
      case WriteActions.Deposit: {
        return poolContract.supply.populateTransaction(asset, amount)
      }

      case WriteActions.Withdraw: {
        return poolContract.withdraw.populateTransaction(asset, amount)
      }
    }
  }
}

export const WriteActionInputs = {
  [WriteActions.Deposit]: z.object({
    asset: z.string(),
    amount: z.string(),
  }),
  [WriteActions.Withdraw]: z.object({
    asset: z.string(),
    amount: z.string(),
  }),
}

const commonFields = {
  protocolId: z.literal(Protocol.CompoundV2),
  productId: z.literal('supply-market'),
  chainId: z.nativeEnum(Chain),
}

const DepositParams = z.object({
  ...commonFields,
  action: z.literal(WriteActions.Deposit),
  inputs: WriteActionInputs[WriteActions.Deposit],
})

const WithdrawParams = z.object({
  ...commonFields,
  action: z.literal(WriteActions.Withdraw),
  inputs: WriteActionInputs[WriteActions.Withdraw],
})

export const GetTransactionParamsSchema = z.discriminatedUnion('action', [
  DepositParams,
  WithdrawParams,
])
export type GetTransactionParams = z.infer<typeof GetTransactionParamsSchema>
