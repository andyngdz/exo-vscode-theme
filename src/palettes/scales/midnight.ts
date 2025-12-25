/**
 * Midnight Theme Scales
 *
 * Deep Night Sky - Bright periwinkle, ice cyan, pale blue
 * Identity: Cool starlit night (70-80% saturation)
 * Base colors at 50% lightness with vibrant blues for crisp, clear character
 */

import { createThemeScales } from '@/scales'

export const midnightScales = createThemeScales({
  // Primary: Bright periwinkle for keywords (sky blue, prominent)
  primary: '#6666ff',

  // Secondary: Ice cyan for functions (cool secondary)
  secondary: '#33ccff',

  // Tertiary: Pale ice for strings (frosty)
  tertiary: '#99ddff',

  // Neutral: Deep slate (unchanged)
  neutral: '#717b8e',

  // Success: Seafoam for types (aqua, 58% saturation)
  success: '#5ac9b3',

  // Danger: Bright rose for errors
  danger: '#ff5c66',

  // Warning: Warm gold for numbers (contrast warmth)
  warning: '#ffd966',

  // Info: Cool gray-blue accent
  info: '#a6b3d9',
})
