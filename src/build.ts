import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import type { Palette } from '@/palettes'
import {
  dawn,
  dawnDarker,
  dusk,
  duskDarker,
  eclipse,
  eclipseDarker,
  forest,
  forestDarker,
  midnight,
  midnightDarker,
} from '@/palettes'
import { createTheme } from '@/theme'
import { colord } from 'colord'

const palettes = [
  dusk,
  duskDarker,
  dawn,
  dawnDarker,
  midnight,
  midnightDarker,
  eclipse,
  eclipseDarker,
  forest,
  forestDarker,
]

const MIN_KEYWORD_TYPE_DISTANCE = 60
const MIN_TYPE_BACKGROUND_CONTRAST = 4.5
const MAX_TYPE_SATURATION = 0.6

function rgbDistance(a: string, b: string): number {
  const ca = colord(a).toRgb()
  const cb = colord(b).toRgb()

  const dr = ca.r - cb.r
  const dg = ca.g - cb.g
  const db = ca.b - cb.b

  return Math.sqrt(dr * dr + dg * dg + db * db)
}

function contrastRatio(foreground: string, background: string): number {
  const fg = colord(foreground).toRgb()
  const bg = colord(background).toRgb()

  const srgbToLinear = (c: number): number => {
    const v = c / 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  }

  const relativeLuminance = (c: { r: number; g: number; b: number }): number => {
    const r = srgbToLinear(c.r)
    const g = srgbToLinear(c.g)
    const b = srgbToLinear(c.b)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  const l1 = relativeLuminance(fg)
  const l2 = relativeLuminance(bg)

  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)

  return (lighter + 0.05) / (darker + 0.05)
}

function validatePalette(palette: Palette): void {
  const distance = rgbDistance(palette.keyword, palette.type)
  if (distance < MIN_KEYWORD_TYPE_DISTANCE) {
    throw new Error(
      [
        `Palette "${palette.name}" has insufficient keyword/type distinction.`,
        `keyword=${palette.keyword} type=${palette.type} distance=${distance.toFixed(2)}`,
        `Minimum required distance is ${MIN_KEYWORD_TYPE_DISTANCE}.`,
      ].join(' '),
    )
  }

  const typeContrast = contrastRatio(palette.type, palette.background)
  if (typeContrast < MIN_TYPE_BACKGROUND_CONTRAST) {
    throw new Error(
      [
        `Palette "${palette.name}" has insufficient type/background contrast.`,
        `type=${palette.type} background=${palette.background} contrast=${typeContrast.toFixed(2)}`,
        `Minimum required contrast is ${MIN_TYPE_BACKGROUND_CONTRAST}.`,
      ].join(' '),
    )
  }

  const typeSaturation = colord(palette.type).toHsl().s / 100
  if (typeSaturation > MAX_TYPE_SATURATION) {
    throw new Error(
      [
        `Palette "${palette.name}" has overly saturated type color (harsh/neon risk).`,
        `type=${palette.type} saturation=${typeSaturation.toFixed(2)}`,
        `Maximum allowed saturation is ${MAX_TYPE_SATURATION}.`,
      ].join(' '),
    )
  }
}

for (const palette of palettes) {
  validatePalette(palette)

  const theme = createTheme(palette)
  const outputPath = resolve(__dirname, `../themes/${palette.name}-color-theme.json`)

  writeFileSync(outputPath, JSON.stringify(theme, null, 2))

  console.log(`✓ ${palette.name} generated`)
}
