/**
 * Eclipse Theme Scales
 *
 * Fiery corona - orange-red, orange, gold
 * Base colors at 50% lightness, derived from target syntax colors
 */

import { createThemeScales } from '@/scales'

export const eclipseScales = createThemeScales({
  // Primary: Orange-Red for keywords (target: #f08868)
  primary: '#e84817',

  // Secondary: Orange for functions (target: #f0a868)
  secondary: '#e87917',

  // Tertiary: Gold for strings (target: #e8c888)
  tertiary: '#d69c29',

  // Neutral: Warm charcoal (target: #686058)
  neutral: '#8a8075',

  // Success: Green for added (target: #78c890)
  success: '#4ab56a',

  // Danger: Bright red for error/deleted (target: #e08078)
  danger: '#d03d2f',

  // Warning: Amber for number/constant (target: #e8c080)
  warning: '#d79428',

  // Info: Crimson accent for modified (target: #d87070)
  info: '#c83737',
})
