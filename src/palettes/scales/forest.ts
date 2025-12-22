/**
 * Forest Theme Scales
 *
 * Woodland - emerald, tan, moss
 * Base colors at 50% lightness, derived from target syntax colors
 */

import { createThemeScales } from '@/scales'

export const forestScales = createThemeScales({
  // Primary: Emerald for keywords (target: #78d898)
  primary: '#39c668',

  // Secondary: Tan for functions (target: #d0b888)
  secondary: '#b69249',

  // Tertiary: Moss for strings (target: #a8d8b8)
  tertiary: '#4fb06f',

  // Neutral: Deep olive (target: #687860)
  neutral: '#7b8e71',

  // Success: Green for added (target: #78c890)
  success: '#4ab56a',

  // Danger: Rust for error/deleted (target: #d88878)
  danger: '#c65139',

  // Warning: Amber for number/constant (target: #d0c088)
  warning: '#b69f49',

  // Info: Moss green accent for modified (target: #80b888)
  info: '#5ca367',
})
