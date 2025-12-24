/**
 * Eclipse Theme Scales
 *
 * Fiery Corona - Intense red-orange, solar gold, bright gold
 * Identity: Dramatic solar eclipse (75-85% saturation)
 * Base colors at 50% lightness with high saturation for bold, intense character
 */

import { createThemeScales } from '@/scales'

export const eclipseScales = createThemeScales({
  // Primary: Bright flame orange for keywords (intense, prominent)
  primary: '#ff6633',

  // Secondary: Solar gold for functions (bright secondary)
  secondary: '#ff9926',

  // Tertiary: Bright gold for strings (radiant)
  tertiary: '#ffc433',

  // Neutral: Warm charcoal (unchanged)
  neutral: '#8a8075',

  // Success: Lime green for types (sharp contrast, 58% saturation)
  success: '#85c973',

  // Danger: Bright coral-red for errors
  danger: '#ff5247',

  // Warning: Bright amber for numbers/constants
  warning: '#ffa633',

  // Info: Warm orange accent
  info: '#ff8c4d',
})
