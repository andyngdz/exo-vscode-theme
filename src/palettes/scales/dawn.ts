/**
 * Dawn Theme Scales
 *
 * Warm Sunrise - Bright coral, golden orange, soft peach
 * Identity: Energetic morning warmth (70-80% saturation)
 * Base colors at 50% lightness with increased saturation for vibrancy
 */

import { createThemeScales } from '@/scales'

export const dawnScales = createThemeScales({
  // Primary: Bright coral for keywords (vibrant warm)
  primary: '#ff6040',

  // Secondary: Bright golden orange for functions
  secondary: '#ff9933',

  // Tertiary: Soft peach for strings (warm tertiary)
  tertiary: '#ffa64d',

  // Neutral: Warm gray (unchanged)
  neutral: '#837c7c',

  // Success: Mint green for types (cool contrast, 58% saturation)
  success: '#5ac994',

  // Danger: Bright coral-red for errors
  danger: '#ff5c47',

  // Warning: Bright gold for numbers/constants
  warning: '#ffb34d',

  // Info: Cyan-green accent for cool contrast
  info: '#40d9a6',
})
