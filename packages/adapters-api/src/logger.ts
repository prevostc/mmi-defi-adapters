import { pino } from 'pino'

export const logger = pino({
  base: { service: 'defi-adapters-api' },
  transport:
    process.env.LOG_PRETTY === 'true' ? { target: 'pino-pretty' } : undefined,
  level: process.env.LOG_LEVEL || 'info',
})
