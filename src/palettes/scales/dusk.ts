/**
 * Dusk Theme Scales
 *
 * Purple twilight - orchid, lavender, soft violet
 * Base colors at 50% lightness, derived from target syntax colors
 */

import { createThemeScales } from '@/scales'

export const duskScales = createThemeScales({
  // Primary: Orchid/Pink-purple for keywords (target: #e098c8)
  primary: '#c43b96',

  // Secondary: Lavender for functions (target: #c8a8e8)
  secondary: '#8036c9',

  // Tertiary: Violet for strings (target: #b0a8e0)
  tertiary: '#5644bb',

  // Neutral: Purple-tinted gray (target: #706878)
  neutral: '#807788',

  // Success: Green for added (target: #78c890)
  success: '#4ab56a',

  // Danger: Coral for error/deleted (target: #e08080)
  danger: '#cd3232',

  // Warning: Gold for number/constant (target: #d8b890)
  warning: '#bd8642',

  // Info: Purple accent for modified/type (target: #b088d0)
  info: '#8549b6',
})
