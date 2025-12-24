/**
 * Dusk Theme Scales
 *
 * Purple Twilight - Bright orchid, soft lavender, ice cyan
 * Identity: Mystical evening elegance (65-75% saturation)
 * Base colors at 50% lightness with increased saturation for distinct purple identity
 */

import { createThemeScales } from '@/scales'

export const duskScales = createThemeScales({
  // Primary: Bright magenta-purple for keywords (prominent)
  primary: '#e640d9',

  // Secondary: Soft lavender for functions (purple family)
  secondary: '#bf80ff',

  // Tertiary: Ice cyan for strings (cool contrast to purple)
  tertiary: '#66d9ff',

  // Neutral: Purple-tinted gray (unchanged)
  neutral: '#807788',

  // Success: Jade green for types (natural contrast, 58% saturation)
  success: '#5ac9a6',

  // Danger: Bright pink-red for errors
  danger: '#ff4d7a',

  // Warning: Warm rose gold for numbers/constants
  warning: '#ff9933',

  // Info: Cyan-green accent for cool contrast
  info: '#40d9a6',
})
