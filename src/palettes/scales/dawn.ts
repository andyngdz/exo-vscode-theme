/**
 * Dawn Theme Scales
 *
 * Warm sunrise - coral, gold, peach
 * Base colors at 50% lightness, derived from target syntax colors
 */

import { createThemeScales } from '@/scales'

export const dawnScales = createThemeScales({
  // Primary: Coral for keywords (target: #f09888)
  primary: '#e33a1c',

  // Secondary: Gold for functions (target: #e8c868)
  secondary: '#deaf21',

  // Tertiary: Peach for strings (target: #f0c8a0)
  tertiary: '#dd7f22',

  // Neutral: Warm gray (target: #787070)
  neutral: '#837c7c',

  // Success: Green for added (target: #78c890)
  success: '#4ab56a',

  // Danger: Red-coral for error/deleted (target: #e08078)
  danger: '#d03d2f',

  // Warning: Gold for number/constant (target: #e0c078)
  warning: '#d0a02f',

  // Info: Warm coral accent for modified (target: #e09080)
  info: '#cd4c32',
})
