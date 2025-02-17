#!/usr/bin/env node
import path from 'node:path'
import { ChainName, DefiProvider } from '@metamask-institutional/defi-adapters'
import {
  Chain,
  ChainIdToChainNameMap,
  EvmChain,
} from '@metamask-institutional/defi-adapters/dist/core/constants/chains.js'
import {
  buildHistoricCache,
  buildLatestCache,
  createDatabase,
  createHistoryTables,
  insertContractEntries,
} from '@metamask-institutional/workers'
import { createLatestTables } from '@metamask-institutional/workers/dist/build-latest-cache.js'
import { Command } from 'commander'
import { JsonRpcProvider, Network } from 'ethers'
import { chainFilter } from './command-filters.js'

const program = new Command('mmi-adapters')
const defiProvider = new DefiProvider()

program
  .command('build-historic-cache')
  .argument('[chain]', 'Chain to build cache for')
  .action(async (chain) => {
    const chainId = chainFilter(chain)
    if (!chainId) {
      throw new Error('Chain is required')
    }

    if (chainId === Chain.Solana) {
      throw new Error('Solana is not supported')
    }

    const providerUrl =
      defiProvider.chainProvider.providers[chainId]._getConnection().url

    const provider = new JsonRpcProvider(providerUrl, chainId, {
      staticNetwork: Network.from(chainId),
    })

    const dbDirPath =
      process.env.DB_DIR_PATH ||
      path.resolve(import.meta.dirname, '../../../databases')

    const db = createDatabase(
      dbDirPath,
      `${ChainName[chainId]}_index_history`,
      {
        fileMustExist: false,
        readonly: false,
        timeout: 5000,
      },
    )

    console.log(`${new Date().toISOString()}: Building historic cache`, {
      chainId,
    })

    createHistoryTables(db)

    // TODO: Have parameters to determine what pools to insert
    await insertContractEntries(defiProvider, chainId, db)

    await buildHistoricCache(provider, chainId, db)
  })

program
  .command('build-latest-cache')
  .option(
    '-c, --chain <chain>',
    'comma-separated chains filter (e.g. ethereum,arbitrum,linea)',
  )
  .option('-b, --block <block>', 'optional block number to start indexing from')
  .showHelpAfterError()
  .action(async ({ chain, block }: { chain?: string; block?: string }) => {
    const filterChainId = chain ? (Number(chain) as EvmChain) : undefined
    if (filterChainId && !ChainIdToChainNameMap[filterChainId]) {
      throw new Error(`No chain matches the given filter: ${chain}`)
    }
    const startBlockOverride = block ? Number(block) : undefined

    const dbDirPath =
      process.env.DB_DIR_PATH ||
      path.resolve(import.meta.dirname, '../../../databases')

    await Promise.all(
      Object.values(EvmChain)
        .filter(
          (chainId) => filterChainId === undefined || filterChainId === chainId,
        )
        .map(async (chainId) => {
          const db = createDatabase(
            dbDirPath,
            `${ChainName[chainId]}_index_latest`,
            {
              fileMustExist: false,
              readonly: false,
              timeout: 5000,
            },
          )

          createLatestTables(db)

          // TODO: Have parameters to determine what pools to insert
          await insertContractEntries(defiProvider, chainId, db)

          buildLatestCache(chainId, defiProvider, db, startBlockOverride)
        }),
    )
  })

program.parseAsync()
