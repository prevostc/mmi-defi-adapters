import { Chain } from '../../../core/constants/chains'
import type { TestCase } from '../../../types/testCase'

export const testCases: TestCase[] = [
  {
    chainId: Chain.Arbitrum,
    key: 'moo-token',
    method: 'deposits',
    input: {
      fromBlock: 198188138,
      toBlock: 200597430,
      userAddress: '0xbc0a54c02a1e80c8e25e8173a8a80baf116205b5',
      protocolTokenAddress: '0x3bAa857646e5A0B475E75a1dbD38E7f0a6742058',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'moo-token',
    method: 'positions',
    input: {
      userAddress: '0x161D61e30284A33Ab1ed227beDcac6014877B3DE',
      filterProtocolTokens: [
        '0xb39a6c02BB32199c5C2e937a9c96Fe8F79E18763',
        '0x3bAa857646e5A0B475E75a1dbD38E7f0a6742058',
        '0xd37025aC6227334C7762AeD5929Ce3272fbb6fdC',
      ],
    },
    blockNumber: 219137472,
  },
  {
    chainId: Chain.Arbitrum,
    key: 'moo-token',
    method: 'prices',
    filterProtocolToken: '0x3bAa857646e5A0B475E75a1dbD38E7f0a6742058',
    blockNumber: 219137472,
  },
  {
    chainId: Chain.Arbitrum,
    key: 'moo-token',
    method: 'withdrawals',
    input: {
      fromBlock: 220443009,
      toBlock: 220443209,
      userAddress: '0xe395f0243ae29c41c865971d9e5603c16c0065b4',
      protocolTokenAddress: '0xb39a6c02BB32199c5C2e937a9c96Fe8F79E18763',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Base,
    key: 'moo-token',
    method: 'deposits',
    input: {
      fromBlock: 15190963,
      toBlock: 15192963,
      userAddress: '0x50fa50fa2032d85eb2dda303929bf56886aa9afb',
      protocolTokenAddress: '0xb63682961B3dC55d2aD8AD756beAEcDDe8474E83',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Base,
    key: 'moo-token',
    method: 'positions',
    input: {
      userAddress: '0x50fa50fa2032d85eb2dda303929bf56886aa9afb',

      filterProtocolTokens: [
        '0xb63682961B3dC55d2aD8AD756beAEcDDe8474E83',
        '0x4Fc0E7cDfe0CF92762eaf3CEE9133239A2197391',
        '0x92868C059CfCd035ea204e3163Bd84b308dD358e',
      ],
    },

    blockNumber: 15374682,
  },
  {
    chainId: Chain.Base,
    key: 'moo-token',
    method: 'withdrawals',
    input: {
      fromBlock: 15683014,
      toBlock: 15683214,
      userAddress: '0xCD02B4cc9C1BBE166139cE4288941ab7ca2e2079',
      protocolTokenAddress: '0x3b5F990364fa9BF1Db34d9d24B0Bdca6eE4bD4B1',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Bsc,
    key: 'moo-token',
    method: 'deposits',
    input: {
      fromBlock: 40723579,
      toBlock: 40723581,
      userAddress: '0x0bD0B724D8803685530fD6CECAb24B4Eb0814828',
      protocolTokenAddress: '0x2A1b2B05A3c54C86F3f3AB837cA423ad60CF35d1',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Bsc,
    key: 'moo-token',
    method: 'positions',

    input: {
      userAddress: '0x518B7892B898322FC77ae9C51bEb88Ee199Bb6C3',
      filterProtocolTokens: ['0x45070826065cF98C4A843fe3D811dBFc0e4bF107'],
    },

    blockNumber: 40771740,
  },
  {
    chainId: Chain.Bsc,
    key: 'moo-token',
    method: 'withdrawals',
    input: {
      fromBlock: 40771740,
      toBlock: 40771742,
      userAddress: '0x518B7892B898322FC77ae9C51bEb88Ee199Bb6C3',
      protocolTokenAddress: '0x45070826065cF98C4A843fe3D811dBFc0e4bF107',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Ethereum,
    key: 'moo-token',
    method: 'deposits',
    input: {
      fromBlock: 20062163,
      toBlock: 20068824,
      userAddress: '0xE582B5233e2b64AaC98076B13E3DfCf072D91cC8',
      protocolTokenAddress: '0xBF7fc2A3d96d80f47b3b89BE84afe10376CE96A5',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Ethereum,
    key: 'moo-token',
    method: 'positions',
    input: {
      userAddress: '0x161D61e30284A33Ab1ed227beDcac6014877B3DE',

      filterProtocolTokens: [
        '0x5dA90BA82bED0AB701E6762D2bF44E08634d9776',
        '0x1153211f7E810C73cC45eE09FF9A0742fBB6b467',
        '0x3E1c2C604f60ef142AADAA51aa864f8438f2aaC1',
        '0xAB28C317B34084f29d7623208b5F09C0Dd566a18',
        '0x9E90aD4810C9eaE0ADFc15801838Dc53cC6ed48a',
        '0xB2975e68b3FAc3b8ff444660cc4cee907367EB0C',
      ],
    },
    blockNumber: 20035548,
  },
  {
    chainId: Chain.Ethereum,
    key: 'moo-token',
    method: 'withdrawals',
    input: {
      fromBlock: 20073364,
      toBlock: 20073564,
      userAddress: '0xf2c929c22d491c2a2c4ec92ec6c2c11e6b861428',
      protocolTokenAddress: '0xBF7fc2A3d96d80f47b3b89BE84afe10376CE96A5',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Fantom,
    key: 'moo-token',
    method: 'deposits',
    input: {
      fromBlock: 79552496,
      toBlock: 79552696,
      userAddress: '0x5435F60E625560E899f6D5829ceDa7C40224de86',
      protocolTokenAddress: '0xf385b50F66A0443B629EA60EB7b26713f00B225B',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Fantom,
    key: 'moo-token',
    method: 'positions',
    input: {
      userAddress: '0x06B4151A410350030FDDBb0a78777e6f4e817a9E',
      filterProtocolTokens: ['0xfe55295462d7395C6C6586aC433509048ED26F88'],
    },
    blockNumber: 78163555,
  },
  {
    chainId: Chain.Fantom,
    key: 'moo-token',
    method: 'withdrawals',
    input: {
      fromBlock: 81963281,
      toBlock: 81963481,
      userAddress: '0xCc84E8B142e4fD6647350e95bb56Da32e3503867',
      protocolTokenAddress: '0xfe55295462d7395C6C6586aC433509048ED26F88',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Linea,
    key: 'moo-token',
    method: 'deposits',
    input: {
      fromBlock: 5039110,
      toBlock: 5039310,
      userAddress: '0x793Cf10f2542Ad8A98b5951F632BF8526Bc2aC63',
      protocolTokenAddress: '0x35884E8C569b9f7714A35EDf056A82535A43F5AD',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Linea,
    key: 'moo-token',
    method: 'positions',
    input: {
      userAddress: '0x20782263d459e3b0EA8e3B825E5017c80248728e',
      filterProtocolTokens: ['0x35884E8C569b9f7714A35EDf056A82535A43F5AD'],
    },
    blockNumber: 5220484,
  },
  {
    chainId: Chain.Linea,
    key: 'moo-token',
    method: 'withdrawals',
    input: {
      fromBlock: 4418003,
      toBlock: 4418113,
      userAddress: '0x793Cf10f2542Ad8A98b5951F632BF8526Bc2aC63',
      protocolTokenAddress: '0x35884E8C569b9f7714A35EDf056A82535A43F5AD',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Optimism,
    key: 'moo-token',
    method: 'deposits',
    input: {
      fromBlock: 114733477,
      toBlock: 114733677,
      userAddress: '0xD00530913E32Bc8FA74a7d6Eca2CD90DA27a44a8',
      protocolTokenAddress: '0x6C8E91f43AAB94Ee43e834517548d1b8aF6dD7CB',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Optimism,
    key: 'moo-token',
    method: 'positions',
    input: {
      userAddress: '0x579CaC71BB7159e7657D68f1ae429b0Ab01A9261',

      filterProtocolTokens: [
        '0x416c578DFBEB2f1b07b0165a2e5F4C467F4Ed2F8',
        '0x1B9eb90884F3566AE923366B65a49B1E30cbcE28',
        '0x6C8E91f43AAB94Ee43e834517548d1b8aF6dD7CB',
        '0x04c4a21D7439eD05fd33469565541bF6464F7157',
      ],
    },
    blockNumber: 121055758,
  },
  {
    chainId: Chain.Optimism,
    key: 'moo-token',
    method: 'withdrawals',
    input: {
      fromBlock: 119739775,
      toBlock: 119739975,
      userAddress: '0xD00530913E32Bc8FA74a7d6Eca2CD90DA27a44a8',
      protocolTokenAddress: '0x6C8E91f43AAB94Ee43e834517548d1b8aF6dD7CB',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Polygon,
    key: 'moo-token',
    method: 'deposits',
    input: {
      fromBlock: 57771024,
      toBlock: 57771891,
      userAddress: '0x4d2fDC2b76eca584Dc067518e179916ea178656d',
      protocolTokenAddress: '0x86aAd005769D9aedeb59df6e4B4b68974Bdd86fD',
      productId: 'moo-token',
    },
  },
  {
    chainId: Chain.Polygon,
    key: 'moo-token',
    method: 'positions',
    input: {
      userAddress: '0x19f1c9e42cdBf308EbD266adEa7E0fAEdc299e6d',
      filterProtocolTokens: ['0x1B197B90c86BF04D221D94F773e5C7984d6a1D4c'],
    },
    blockNumber: 58086367,
  },
  {
    chainId: Chain.Polygon,
    key: 'moo-token',
    method: 'withdrawals',
    input: {
      fromBlock: 58080065,
      toBlock: 58080265,
      userAddress: '0xe063DC804128BCfa468221BF7CEB69Bf2728e937',
      protocolTokenAddress: '0x1B197B90c86BF04D221D94F773e5C7984d6a1D4c',
      productId: 'moo-token',
    },
  },

  /// cow tokens
  {
    chainId: Chain.Arbitrum,
    key: 'cow-token',
    method: 'deposits',
    input: {
      fromBlock: 224830313,
      toBlock: 224830513,
      userAddress: '0x652498c164f39e866eb8f62f7ea9f294d96aa188',
      protocolTokenAddress: '0x073819cff8229BC2f5Af33012e69C8289779E7aC',
      productId: 'cow-token',
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'cow-token',
    method: 'positions',
    input: {
      userAddress: '0x161D61e30284A33Ab1ed227beDcac6014877B3DE',

      filterProtocolTokens: [
        '0xA297024a99098d52aae466AC5F48520d514262bA',
        '0xF0eB29f3E21f8F88a6c93dE44993bac27c4B519F',
        '0x2Ba14a1308789322694a69C06acDFEbA824B7e2A',
        '0xf7ac5f7F05fB27AB4974607aa9EBcD24BBD2192a',
        '0xEe839B08Ac1Fb711Fd4A583fB450EeD60ce52446',
        '0x79899918e6AdA2cb5D984f444A9c188bd2B7daae',
        '0x8bc2AE3862617838357c329ccfd9eD8Fded58cfc',
        '0x168285c55a871fd2219329F680EB0CA8fB8711e4',
        '0x663B0d9ddB6e86cB5E1F87ebCbDafb5A53a45798',
        '0xDa3E652A86B3FD320512cadd87D6504fa18aEC65',
      ],
    },
    blockNumber: 228323745,
  },
  {
    chainId: Chain.Arbitrum,
    key: 'cow-token',
    method: 'prices',
    filterProtocolToken: '0x073819cff8229BC2f5Af33012e69C8289779E7aC',
    blockNumber: 228323745,
  },
  {
    chainId: Chain.Arbitrum,
    key: 'cow-token',
    method: 'withdrawals',
    input: {
      fromBlock: 224790891,
      toBlock: 224791091,
      userAddress: '0xbba45503705fd9ed0f21b04506f091bbbb1e6e43',
      protocolTokenAddress: '0x073819cff8229BC2f5Af33012e69C8289779E7aC',
      productId: 'cow-token',
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'cow-token',
    method: 'profits',
    blockNumber: 228323745,
    input: {
      userAddress: '0x161D61e30284A33Ab1ed227beDcac6014877B3DE',

      filterProtocolTokens: [
        '0xf3D5c975de1c0Fd358a593Bcef7a41c61366127C',
        '0xc720D97B2327B1AE9bCC5dD135fAfa78D8c80B12',
      ],
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'cow-token',
    method: 'tvl',
    blockNumber: 228323745,
    filterProtocolTokens: [
      '0x073819cff8229BC2f5Af33012e69C8289779E7aC',
      '0xF0eB29f3E21f8F88a6c93dE44993bac27c4B519F',
    ],
  },

  /// rcow tokens
  {
    chainId: Chain.Arbitrum,
    key: 'rcow-token',
    method: 'deposits',
    input: {
      fromBlock: 229797751,
      toBlock: 229797771,
      userAddress: '0xE35E50e7FbE118Ce410d3B1EE35495fDC1E5e35B',
      protocolTokenAddress: '0xde05F28Cb643240cF30c308F968566487AB43183',
      productId: 'rcow-token',
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rcow-token',
    method: 'positions',
    input: {
      userAddress: '0x161D61e30284A33Ab1ed227beDcac6014877B3DE',

      filterProtocolTokens: [
        '0xde05F28Cb643240cF30c308F968566487AB43183',
        '0xFc7106651D7D85e3c303f4f40B1de979B3981FdE',
      ],
    },
    blockNumber: 236870450,
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rcow-token',
    method: 'prices',
    filterProtocolToken: '0xde05F28Cb643240cF30c308F968566487AB43183',
    blockNumber: 236870450,
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rcow-token',
    method: 'withdrawals',
    input: {
      fromBlock: 233457151,
      toBlock: 233457171,
      userAddress: '0xf1e3eE005c0814dB407952Ff0961360919cCEdbc',
      protocolTokenAddress: '0x5459Af5E99D5EaC068D2A10CB13c1C7E7c553ab6',
      productId: 'rcow-token',
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rcow-token',
    method: 'profits',
    blockNumber: 236870450,
    input: {
      userAddress: '0x161D61e30284A33Ab1ed227beDcac6014877B3DE',

      filterProtocolTokens: [
        '0xde05F28Cb643240cF30c308F968566487AB43183',
        '0xFc7106651D7D85e3c303f4f40B1de979B3981FdE',
      ],
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rcow-token',
    method: 'tvl',
    blockNumber: 236870450,
    filterProtocolTokens: [
      '0x5459Af5E99D5EaC068D2A10CB13c1C7E7c553ab6',
      '0xc82764746855370F6369A83C91E44c3D373e4ce1',
      '0x7Ff5dfCA85C45f817826AD3c45Ab31757E0d37D7',
    ],
  },

  /// rmoo tokens
  {
    chainId: Chain.Arbitrum,
    key: 'rmoo-token',
    method: 'deposits',
    input: {
      fromBlock: 236679336,
      toBlock: 236679356,
      userAddress: '0x560858580455B2E277dde49E4e907653761DF20c',
      protocolTokenAddress: '0x9cbB28eE98699aB491afE05653804B7aa426880b',
      productId: 'rcow-token',
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rmoo-token',
    method: 'positions',
    input: {
      userAddress: '0x161D61e30284A33Ab1ed227beDcac6014877B3DE',

      filterProtocolTokens: [
        '0x9cbB28eE98699aB491afE05653804B7aa426880b',
        '0x6c69b6146536467525894527a1c47141A5D9A128',
      ],
    },
    blockNumber: 236870450,
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rmoo-token',
    method: 'prices',
    filterProtocolToken: '0x9cbB28eE98699aB491afE05653804B7aa426880b',
    blockNumber: 236870450,
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rmoo-token',
    method: 'withdrawals',
    input: {
      fromBlock: 233457151,
      toBlock: 233457171,
      userAddress: '0xf1e3eE005c0814dB407952Ff0961360919cCEdbc',
      protocolTokenAddress: '0x5459Af5E99D5EaC068D2A10CB13c1C7E7c553ab6',
      productId: 'rmoo-token',
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rmoo-token',
    method: 'profits',
    blockNumber: 236870450,
    input: {
      userAddress: '0x161D61e30284A33Ab1ed227beDcac6014877B3DE',

      filterProtocolTokens: [
        '0x9cbB28eE98699aB491afE05653804B7aa426880b',
        '0x6c69b6146536467525894527a1c47141A5D9A128',
      ],
    },
  },
  {
    chainId: Chain.Arbitrum,
    key: 'rmoo-token',
    method: 'tvl',
    blockNumber: 236870450,
    filterProtocolTokens: [
      '0x9cbB28eE98699aB491afE05653804B7aa426880b',
      '0x6c69b6146536467525894527a1c47141A5D9A128',
    ],
  },
]
