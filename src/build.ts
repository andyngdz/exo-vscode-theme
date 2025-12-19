import { theme } from '@/theme'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const outputPath = resolve(__dirname, '../themes/Exo Theme-color-theme.json')

writeFileSync(outputPath, JSON.stringify(theme, null, 2))

console.log(`✓ Theme generated: ${outputPath}`)
