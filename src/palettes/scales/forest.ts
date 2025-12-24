/**
 * Forest Theme Scales
 *
 * Woodland Nature - Natural emerald, warm earth, sage greens
 * Identity: Deep forest and moss (55-65% saturation)
 * Base colors at 50% lightness with natural greens for earthy character
 */

import { createThemeScales } from '@/scales'

export const forestScales = createThemeScales({
  // Primary: Natural emerald for keywords (forest green, not neon)
  primary: '#5ac980',

  // Secondary: Warm tan for functions (earthy secondary, 58% saturation)
  secondary: '#cca066',

  // Tertiary: Soft sage for strings (natural earth)
  tertiary: '#a6d98c',

  // Neutral: Deep olive (unchanged)
  neutral: '#7b8e71',

  // Success: Teal green for types (cool natural contrast)
  success: '#59b38c',

  // Danger: Rusty red for errors
  danger: '#d96659',

  // Warning: Golden amber for numbers/constants
  warning: '#d9b359',

  // Info: Moss green accent
  info: '#99b366',
})
