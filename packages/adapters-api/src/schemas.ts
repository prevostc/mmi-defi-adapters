import { Chain, Protocol } from '@metamask-institutional/defi-adapters'
import { getAddress } from 'ethers'
import { type ZodTypeAny, z } from 'zod'

export const IsEthAddress = z
  .string()
  .refine((address) => /^0x[0-9a-fA-F]{40}$/.test(address), {
    message: 'Invalid ethereum address',
  })
  .transform((address) => getAddress(address.toLowerCase()))

const StringToJSONSchema = z.string().transform((str, ctx): unknown => {
  try {
    return JSON.parse(str)
  } catch (_) {
    ctx.addIssue({ code: 'custom', message: 'Invalid JSON' })
    return z.NEVER
  }
})

const parseAndCheck = <T extends ZodTypeAny>(schema: T) => {
  return z
    .string()
    .optional()
    .transform((str) => {
      if (!str) {
        return undefined
      }

      return StringToJSONSchema.parse(str)
    })
    .pipe(schema)
}

export const GetPositionsSchema = z
  .object({
    userAddress: IsEthAddress,
    filterProtocolIds: parseAndCheck(
      z.array(z.nativeEnum(Protocol)),
    ).optional(),
    filterProductIds: parseAndCheck(z.array(z.string())).optional(),
    filterChainIds: parseAndCheck(z.array(z.nativeEnum(Chain))).optional(),
    blockNumbers: parseAndCheck(z.record(z.string(), z.number())).optional(),
    filterProtocolTokens: parseAndCheck(z.array(z.string())).optional(),
    filterTokenIds: parseAndCheck(z.array(z.string())).optional(),
  })
  .strict()

export const GetSupportSchema = z.object({
  filterProtocolIds: parseAndCheck(z.array(z.nativeEnum(Protocol))).optional(),
  filterChainIds: parseAndCheck(z.array(z.nativeEnum(Chain))).optional(),
  includeProtocolTokens: parseAndCheck(z.boolean()).optional(),
})
