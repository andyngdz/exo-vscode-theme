/**
 * Color Scale System
 *
 * Generates 10-shade color scales from base colors, inspired by GitHub Theme.
 * Each scale goes from lightest (index 0) to darkest (index 9).
 *
 * Usage:
 *   const purpleScale = generateScale('#b088d0');
 *   const brightPurple = purpleScale[2]; // For dark theme syntax
 */

import { colord } from 'colord'

/**
 * A 10-shade color scale from lightest to darkest
 */
export type Scale = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

/**
 * Standard scales for a theme
 */
export interface ThemeScales {
  /** Primary/keyword color scale */
  primary: Scale
  /** Secondary/function color scale */
  secondary: Scale
  /** Tertiary/string color scale */
  tertiary: Scale
  /** Neutral/gray color scale */
  neutral: Scale
  /** Success/green color scale */
  success: Scale
  /** Danger/red color scale */
  danger: Scale
  /** Warning/yellow color scale */
  warning: Scale
  /** Info/blue color scale (for UI accents) */
  info: Scale
}

/**
 * Lightness values for each scale index (0-9)
 * Index 0 = lightest (95%), Index 9 = darkest (10%)
 *
 * For dark themes, use indices 2-3 for bright syntax colors
 * For light themes, use indices 6-7 for readable syntax colors
 */
const LIGHTNESS_STEPS = [95, 88, 80, 70, 60, 50, 40, 30, 20, 10] as const

/**
 * Generate a 10-shade color scale from a base color.
 * Preserves the hue and saturation, only varying lightness.
 *
 * @param baseColor - Any valid CSS color (hex, rgb, hsl, etc.)
 * @returns 10 hex colors from lightest to darkest
 */
export function generateScale(baseColor: string): Scale {
  const base = colord(baseColor)
  const { h, s } = base.toHsl()

  const scale = LIGHTNESS_STEPS.map((l) => colord({ h, s, l }).toHex())

  return scale as unknown as Scale
}

/**
 * Create theme scales from base colors.
 * Each base color should be a mid-tone representative of that hue.
 *
 * @param bases - Object with base colors for each scale
 * @returns Complete ThemeScales object
 */
export function createThemeScales(bases: {
  primary: string
  secondary: string
  tertiary: string
  neutral: string
  success: string
  danger: string
  warning: string
  info: string
}): ThemeScales {
  return {
    primary: generateScale(bases.primary),
    secondary: generateScale(bases.secondary),
    tertiary: generateScale(bases.tertiary),
    neutral: generateScale(bases.neutral),
    success: generateScale(bases.success),
    danger: generateScale(bases.danger),
    warning: generateScale(bases.warning),
    info: generateScale(bases.info),
  }
}
