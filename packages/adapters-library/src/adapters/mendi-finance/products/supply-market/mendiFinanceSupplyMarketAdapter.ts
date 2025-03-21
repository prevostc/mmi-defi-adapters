import { getAddress } from 'ethers'

import { CompoundV2SupplyMarketForkAdapter } from '../../../../core/adapters/CompoundV2SupplyMarketForkAdapter'
import { Chain } from '../../../../core/constants/chains'
import { PositionType, ProtocolDetails } from '../../../../types/adapter'

import { Protocol } from '../../../protocols'

import { Cerc20__factory } from '../../contracts'

export const contractAddresses: Partial<
  Record<
    Chain,
    {
      comptrollerAddress: string
      speed: string
      oracle: string
      velocore: string
      converter: string
      mendi: string
      usdcE: string
      cUSDCv3Address: string
    }
  >
> = {
  [Chain.Linea]: {
    comptrollerAddress: getAddress(
      '0x1b4d3b0421dDc1eB216D230Bc01527422Fb93103',
    ),
    speed: getAddress('0x3b9B9364Bf69761d308145371c38D9b558013d40'),
    oracle: getAddress('0xCcBea2d7e074744ab46e28a043F85038bCcfFec2'),
    velocore: getAddress('0xaA18cDb16a4DD88a59f4c2f45b5c91d009549e06'),
    converter: getAddress('0xAADAa473C1bDF7317ec07c915680Af29DeBfdCb5'),
    mendi: getAddress('0x43E8809ea748EFf3204ee01F08872F063e44065f'),
    usdcE: getAddress('0x176211869cA2b568f2A7D4EE941E073a821EE1ff'),
    cUSDCv3Address: '0x', // compound version 3 transaction params
  },
}

export class MendiFinanceSupplyMarketAdapter extends CompoundV2SupplyMarketForkAdapter {
  productId = 'supply-market'

  contractAddresses: Partial<
    Record<Chain, { comptrollerAddress: string; cUSDCv3Address: string }>
  > = contractAddresses

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'MendiFinance',
      description: 'MendiFinance supply adapter',
      siteUrl: 'https://mendi.finance/:',
      iconUrl: 'https://mendi.finance/mendi-token.svg',
      positionType: PositionType.Supply,
      chainId: this.chainId,
      productId: this.productId,
    }
  }
}
