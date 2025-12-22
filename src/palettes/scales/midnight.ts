/**
 * Midnight Theme Scales
 *
 * Cool night - periwinkle, cyan, ice blue
 * Base colors at 50% lightness, derived from target syntax colors
 */

import { createThemeScales } from '@/scales'

export const midnightScales = createThemeScales({
  // Primary: Periwinkle for keywords (target: #98a8f0)
  primary: '#2043df',

  // Secondary: Cyan for functions (target: #88d0e0)
  secondary: '#34afcb',

  // Tertiary: Ice Blue for strings (target: #a8c8f0)
  tertiary: '#2576da',

  // Neutral: Deep slate (target: #606878)
  neutral: '#717b8e',

  // Success: Teal-green for added (target: #70c898)
  success: '#47b87a',

  // Danger: Rose for error/deleted (target: #e08088)
  danger: '#cd323f',

  // Warning: Warm gold for number (target: #d8c078)
  warning: '#c6a339',

  // Info: Steel blue accent for modified (target: #6898d0)
  info: '#3c7bc3',
})
