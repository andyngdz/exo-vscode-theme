import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { dawn, dusk, eclipse, forest, midnight } from '@/palettes'
import { createTheme } from '@/theme'

const palettes = [dusk, dawn, midnight, eclipse, forest]

for (const palette of palettes) {
  const theme = createTheme(palette)
  const outputPath = resolve(__dirname, `../themes/${palette.name}-color-theme.json`)

  writeFileSync(outputPath, JSON.stringify(theme, null, 2))

  console.log(`✓ ${palette.name} generated`)
}
