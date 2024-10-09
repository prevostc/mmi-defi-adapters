import { promises as fs } from 'node:fs'
import path from 'node:path'
import { Command } from 'commander'
import { parse, print, types, visit } from 'recast'
import {
  getAggregatedValues,
  getAggregatedValuesMovements,
} from '../adapters/aggrigateValues'
import { Protocol } from '../adapters/protocols'
import type { GetTransactionParams } from '../adapters/supportedProtocols'
import { Chain, ChainIdToChainNameMap } from '../core/constants/chains'
import { ProviderMissingError } from '../core/errors/errors'
import { CustomJsonRpcProvider } from '../core/provider/CustomJsonRpcProvider'
import { bigintJsonStringify } from '../core/utils/bigintJson'
import { kebabCase } from '../core/utils/caseConversion'
import { writeAndLintFile } from '../core/utils/writeAndLintFile'
import { DefiProvider } from '../defiProvider'
import { DefiPositionResponse, DefiProfitsResponse } from '../types/response'
import type { TestCase } from '../types/testCase'
import { multiProtocolFilter } from './commandFilters'
import { startRpcSnapshot } from './rpcInterceptor'
import n = types.namedTypes
import b = types.builders

export function buildSnapshots(program: Command) {
  program
    .command('build-snapshots')
    .option(
      '-p, --protocols <protocols>',
      'comma-separated protocols filter (e.g. stargate,aave-v2)',
    )
    .option(
      '-k, --key <test-key>',
      'test key must be used with protocols filter',
    )
    .showHelpAfterError()
    .action(async ({ protocols, key }) => {
      const filterProtocolIds = multiProtocolFilter(protocols)

      for (const protocolId of Object.values(Protocol)) {
        if (filterProtocolIds && !filterProtocolIds.includes(protocolId)) {
          continue
        }

        const testCases: TestCase[] = (
          await import(
            path.resolve(__dirname, `../adapters/${protocolId}/tests/testCases`)
          )
        ).testCases

        for (const [index, testCase] of testCases.entries()) {
          if (key && testCase.key !== key) {
            continue
          }

          const defiProvider = new DefiProvider({
            useMulticallInterceptor: false,
          })

          const msw = startRpcSnapshot(
            Object.values(defiProvider.chainProvider.providers).map(
              (provider) => provider._getConnection().url,
            ),
          )

          const chainId = testCase.chainId

          const snapshotFileContent = await (async () => {
            switch (testCase.method) {
              case 'positions': {
                const blockNumber =
                  testCase.blockNumber ??
                  (await getLatestStableBlock(
                    defiProvider.chainProvider.providers[chainId],
                    chainId,
                  ))

                const startTime = Date.now()

                const snapshot = await defiProvider.getPositions({
                  ...testCase.input,
                  filterChainIds: [chainId],
                  filterProtocolIds: [protocolId],
                  blockNumbers: {
                    [chainId]: blockNumber,
                  },
                })

                const endTime = Date.now()

                const aggregatedValues = getAggregatedValues(snapshot, chainId)

                const result = {
                  blockNumber,
                  latency: `Latency: ${(endTime - startTime) / 1000} seconds`,
                  aggregatedValues,
                  snapshot,
                }

                await updateBlockNumber(protocolId, index, blockNumber)

                await updateFilters(protocolId, index, result.snapshot)

                return result
              }

              case 'profits': {
                const blockNumber =
                  testCase.blockNumber ??
                  (await getLatestStableBlock(
                    defiProvider.chainProvider.providers[chainId],
                    chainId,
                  ))

                const startTime = Date.now()

                const snapshot = await defiProvider.getProfits({
                  ...testCase.input,
                  filterChainIds: [chainId],
                  filterProtocolIds: [protocolId],
                  toBlockNumbersOverride: {
                    [chainId]: blockNumber,
                  },
                })

                const endTime = Date.now()

                const result = {
                  blockNumber,
                  latency: `Latency: ${(endTime - startTime) / 1000} seconds`,
                  snapshot,
                }

                await updateBlockNumber(protocolId, index, blockNumber)

                await updateFilters(protocolId, index, result.snapshot)

                return result
              }

              case 'deposits': {
                const startTime = Date.now()
                const snapshot = await defiProvider.getDeposits({
                  ...testCase.input,
                  chainId: chainId,
                  protocolId: protocolId,
                })

                const aggregatedValues = getAggregatedValuesMovements(
                  snapshot,
                  chainId,
                )

                const endTime = Date.now()

                return {
                  aggregatedValues,
                  latency: `Latency: ${(endTime - startTime) / 1000} seconds`,
                  snapshot,
                }
              }

              case 'withdrawals': {
                const startTime = Date.now()
                const result = await defiProvider.getWithdrawals({
                  ...testCase.input,
                  chainId: chainId,
                  protocolId: protocolId,
                })

                const aggregatedValues = getAggregatedValuesMovements(
                  result,
                  chainId,
                )

                const endTime = Date.now()

                return {
                  aggregatedValues,
                  latency: `Latency: ${(endTime - startTime) / 1000} seconds`,
                  snapshot: result,
                }
              }
              case 'repays': {
                const startTime = Date.now()

                const snapshot = await defiProvider.getRepays({
                  ...testCase.input,
                  chainId: chainId,
                  protocolId: protocolId,
                })

                const endTime = Date.now()

                return {
                  latency: `Latency: ${(endTime - startTime) / 1000} seconds`,
                  snapshot,
                }
              }

              case 'borrows': {
                const startTime = Date.now()
                const result = await defiProvider.getBorrows({
                  ...testCase.input,
                  chainId: chainId,
                  protocolId: protocolId,
                })

                const aggregatedValues = getAggregatedValuesMovements(
                  result,
                  chainId,
                )

                const endTime = Date.now()

                return {
                  latency: `Latency: ${(endTime - startTime) / 1000} seconds`,
                  snapshot: result,
                  aggregatedValues,
                }
              }

              case 'prices': {
                const blockNumber =
                  testCase.blockNumber ??
                  (await getLatestStableBlock(
                    defiProvider.chainProvider.providers[chainId],
                    chainId,
                  ))

                const startTime = Date.now()

                const snapshot = await defiProvider.unwrap({
                  filterChainIds: [chainId],
                  filterProtocolIds: [protocolId],
                  blockNumbers: {
                    [chainId]: blockNumber,
                  },
                  filterProtocolToken: testCase.filterProtocolToken,
                })

                const endTime = Date.now()

                const result = {
                  latency: `Latency: ${(endTime - startTime) / 1000} seconds`,
                  blockNumber,
                  snapshot,
                }

                await updateBlockNumber(protocolId, index, blockNumber)

                return result
              }

              case 'tvl': {
                const blockNumber =
                  testCase.blockNumber ??
                  (await getLatestStableBlock(
                    defiProvider.chainProvider.providers[chainId],
                    chainId,
                  ))

                const startTime = Date.now()
                const snapshot = await defiProvider.getTotalValueLocked({
                  filterChainIds: [chainId],
                  filterProtocolIds: [protocolId],
                  filterProtocolTokens: testCase.filterProtocolTokens,
                  blockNumbers: {
                    [chainId]: blockNumber,
                  },
                })

                const endTime = Date.now()

                const result = {
                  latency: `Latency: ${(endTime - startTime) / 1000} seconds`,
                  blockNumber,
                  snapshot,
                }

                await updateBlockNumber(protocolId, index, blockNumber)

                return result
              }

              case 'tx-params': {
                const inputs = {
                  ...testCase.input,
                  protocolId,
                  chainId,
                } as GetTransactionParams

                return {
                  snapshot: await defiProvider.getTransactionParams(inputs),
                }
              }
            }
          })()

          const filePath = `./packages/adapters-library/src/adapters/${protocolId}/tests/snapshots/${
            ChainIdToChainNameMap[testCase.chainId]
          }.${testCase.method}${
            testCase.key ? `.${kebabCase(testCase.key)}` : ''
          }.json`

          await writeAndLintFile(
            filePath,
            bigintJsonStringify(
              {
                ...snapshotFileContent,
                rpcResponses: msw.interceptedRequests,
              },
              2,
            ),
          )

          msw.stop()
        }
      }

      process.exit()
    })
}

async function getLatestStableBlock(
  provider: CustomJsonRpcProvider,
  chainId: Chain,
): Promise<number> {
  if (!provider) {
    throw new ProviderMissingError(chainId)
  }

  return provider.getStableBlockNumber()
}

async function updateBlockNumber(
  protocolId: Protocol,
  index: number,
  blockNumber: number,
) {
  const testCasesFile = path.resolve(
    `./packages/adapters-library/src/adapters/${protocolId}/tests/testCases.ts`,
  )
  const contents = await fs.readFile(testCasesFile, 'utf-8')
  const ast = parse(contents, {
    parser: require('recast/parsers/typescript'),
  })

  visit(ast, {
    visitVariableDeclarator(path) {
      const node = path.node
      if (!n.Identifier.check(node.id)) {
        // Skips any other declaration
        return false
      }

      if (node.id.name === 'testCases') {
        const testCasesArrayNode = node.init
        if (!n.ArrayExpression.check(testCasesArrayNode)) {
          throw new Error('Incorrectly typed testCases array')
        }
        const testCaseNode = testCasesArrayNode.elements[index]
        if (!n.ObjectExpression.check(testCaseNode)) {
          return false
        }
        const blockNumberNode = testCaseNode.properties.find(
          (property) =>
            n.ObjectProperty.check(property) &&
            n.Identifier.check(property.key) &&
            property.key.name === 'blockNumber',
        )

        if (blockNumberNode) {
          return false
        }

        testCaseNode.properties.push(
          b.objectProperty(
            b.identifier('blockNumber'),
            b.numericLiteral(blockNumber),
          ),
        )
      }

      this.traverse(path)
    },
  })

  await writeAndLintFile(testCasesFile, print(ast).code)
}

/**
 * Updates filterProtocolToken and filterTokenId properties
 * @param protocolId
 * @param index
 * @param snapshot
 * @returns
 */
async function updateFilters(
  protocolId: Protocol,
  index: number,
  snapshot: DefiPositionResponse[] | DefiProfitsResponse[],
) {
  const protocolTokenAddresses = snapshot.flatMap((position) => {
    if (!position.success) {
      return []
    }

    return position.tokens.map((token) => token.address)
  })

  if (!protocolTokenAddresses.length) {
    return
  }

  // Also update tokenId if exists

  const protocolTokenIds = snapshot.flatMap((position) => {
    if (!position.success) {
      return []
    }

    return position.tokens
      .map((token) => token.tokenId)
      .filter((tokenId) => tokenId !== undefined)
  })

  const testCasesFile = path.resolve(
    `./packages/adapters-library/src/adapters/${protocolId}/tests/testCases.ts`,
  )
  const contents = await fs.readFile(testCasesFile, 'utf-8')
  const ast = parse(contents, {
    parser: require('recast/parsers/typescript'),
  })

  visit(ast, {
    visitVariableDeclarator(path) {
      const node = path.node
      if (!n.Identifier.check(node.id)) {
        // Skips any other declaration
        return false
      }

      if (node.id.name === 'testCases') {
        const testCasesArrayNode = node.init
        if (!n.ArrayExpression.check(testCasesArrayNode)) {
          throw new Error('Incorrectly typed testCases array')
        }
        const testCaseNode = testCasesArrayNode.elements[index]
        if (!n.ObjectExpression.check(testCaseNode)) {
          return false
        }

        const inputNode = testCaseNode.properties.find(
          (property): property is n.ObjectProperty =>
            n.ObjectProperty.check(property) &&
            n.Identifier.check(property.key) &&
            property.key.name === 'input',
        )

        if (!inputNode || !n.ObjectExpression.check(inputNode.value)) {
          throw new Error('Incorrectly typed testCases array')
        }

        const filterProtocolTokensNode = inputNode.value.properties.find(
          (property) =>
            n.ObjectProperty.check(property) &&
            n.Identifier.check(property.key) &&
            property.key.name === 'filterProtocolTokens',
        )

        if (filterProtocolTokensNode) {
          return false
        }

        // update filterProtocolTokens
        inputNode.value.properties.push(
          b.objectProperty(
            b.identifier('filterProtocolTokens'),
            b.arrayExpression(
              protocolTokenAddresses.map((protocolTokenAddress) =>
                b.stringLiteral(protocolTokenAddress),
              ),
            ),
          ),
        )

        // update filterTokenIds if exists
        if (protocolTokenIds.length > 0) {
          const filterTokenIdsNode = inputNode.value.properties.find(
            (property) =>
              n.ObjectProperty.check(property) &&
              n.Identifier.check(property.key) &&
              property.key.name === 'filterTokenIds',
          )

          if (filterTokenIdsNode) {
            return false
          }

          inputNode.value.properties.push(
            b.objectProperty(
              b.identifier('filterTokenIds'),
              b.arrayExpression(
                protocolTokenIds.map((tokenId) =>
                  b.stringLiteral(tokenId as string),
                ),
              ),
            ),
          )
        }

        return false
      }

      this.traverse(path)
    },
  })

  await writeAndLintFile(testCasesFile, print(ast).code)
}
