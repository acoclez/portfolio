// scripts/build-icons.mjs
// Collects every icon name used in src/ and writes the matching SVG data to src/data/icons.json,
// so the site ships its icons instead of fetching them from the Iconify API at runtime.
// Runs before `npm run dev` and `npm run build`; run `npm run icons` after adding an icon.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { createRequire } from 'node:module'
import { getIcons } from '@iconify/utils'

const require = createRequire(import.meta.url)
const SRC = 'src'
const OUT = 'src/data/icons.json'

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name)
  return statSync(path).isDirectory() ? walk(path) : [path]
})

const names = new Set()
for (const file of walk(SRC).filter((f) => /\.(vue|js)$/.test(f) && !f.endsWith('icons.json'))) {
  for (const match of readFileSync(file, 'utf8').matchAll(/\b(mdi|simple-icons):([a-z0-9-]+)/g)) {
    names.add(`${match[1]}:${match[2]}`)
  }
}

const collections = {}
const missing = []
for (const prefix of ['mdi', 'simple-icons']) {
  const wanted = [...names].filter((n) => n.startsWith(`${prefix}:`)).map((n) => n.slice(prefix.length + 1)).sort()
  if (wanted.length === 0) continue

  const full = require(`@iconify-json/${prefix}/icons.json`)
  const subset = getIcons(full, wanted)
  if (!subset) throw new Error(`Could not read the ${prefix} collection`)

  missing.push(...(subset.not_found || []).map((n) => `${prefix}:${n}`))
  delete subset.not_found
  collections[prefix] = subset
}

writeFileSync(OUT, JSON.stringify(collections) + '\n')
console.log(`icons: ${names.size} used, written to ${OUT}`)
if (missing.length) console.warn(`icons: not found in the collections: ${missing.join(', ')}`)
