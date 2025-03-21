import { serve } from '@hono/node-server'
import { DefiProvider } from '@metamask-institutional/defi-adapters'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { ZodError } from 'zod'
import './bigint-json.js'
import { buildDbPoolFilter } from '@metamask-institutional/workers'
import { logger } from './logger.js'
import { buildMemoryUnwrapCacheProvider } from './memory-unwrap-price-cache-provider.js'
import { GetPositionsSchema, GetSupportSchema } from './schemas.js'

const port = 3000

const poolFilter =
  process.env.DEFI_ADAPTERS_USE_POSITIONS_CACHE === 'true'
    ? buildDbPoolFilter()
    : undefined

const defiProvider = new DefiProvider({
  poolFilter,
  unwrapCacheProvider: buildMemoryUnwrapCacheProvider(),
})

const app = new Hono()
app.use('*', cors())

app.get('/', (context) => context.text('Ok'))

app.get('/positions/:userAddress', async (context) => {
  try {
    const input = {
      userAddress: context.req.param('userAddress'),
      ...context.req.query(),
    }
    const parsedInput = GetPositionsSchema.parse(input)

    return context.json(await defiProvider.getPositions(parsedInput))
  } catch (error) {
    if (error instanceof ZodError) {
      return context.json({ error: error.message }, 400)
    }

    return context.json({ error: handleErrorMessage(error) }, 500)
  }
})

app.get('/support', async (context) => {
  try {
    const input = context.req.query()
    const parsedInput = GetSupportSchema.parse(input)

    return context.json(await defiProvider.getSupport(parsedInput))
  } catch (error) {
    if (error instanceof ZodError) {
      return context.json({ error: error.message }, 400)
    }

    return context.json({ error: handleErrorMessage(error) }, 500)
  }
})

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    logger.info({ port }, 'API server is running')
  },
)

function handleErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}
