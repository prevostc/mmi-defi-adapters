import { exec } from 'node:child_process'
import { promises as fs } from 'node:fs'
import path from 'node:path'

export async function writeAndLintFile(filePath: string, content: string) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })

  await fs.writeFile(filePath, content, 'utf-8')

  exec(`biome check --write ${filePath}`)
}
