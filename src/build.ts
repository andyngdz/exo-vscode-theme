import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { dawn, dusk, eclipse, midnight } from '@/palettes'
import { createTheme } from '@/theme'

const themes = [
  { palette: dusk, type: 'dark' as const },
  { palette: dawn, type: 'dark' as const },
  { palette: midnight, type: 'dark' as const },
  { palette: eclipse, type: 'dark' as const },
]

for (const { palette, type } of themes) {
  const theme = createTheme(palette, type)
  const outputPath = resolve(__dirname, `../themes/${palette.name}-color-theme.json`)

  writeFileSync(outputPath, JSON.stringify(theme, null, 2))

  console.log(`✓ ${palette.name} generated`)
}
