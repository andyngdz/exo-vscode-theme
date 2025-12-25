/**
 * Shared Colors
 * Common colors used across all Exo themes
 */

export const shared = {
  // Text colors (WCAG AAA compliant)
  foreground: '#dcdcdc',
  foregroundDim: '#b8b8b8',

  // Neutral grey for subtle elements
  neutral: '#a6a6a6',

  // Selection color for lists/menus
  neutralSelection: '#637599',

  // Theme-specific foregroundBright variants
  foregroundBrightDusk: '#f4ecfc',    // purple tint
  foregroundBrightWarm: '#f8f0e8',    // dawn, eclipse
  foregroundBrightCool: '#f0f4f8',    // midnight
  foregroundBrightForest: '#f0f8e8',  // green tint
} as const

/**
 * Standard background colors
 * Used by all standard (non-darker) theme variants
 */
export const standardBg = {
  background: '#1a1e28',
  surface: '#1a1e28',
  surfaceDark: '#171b24',
  surfaceLight: '#1f2430',
  border: '#14171f',
  overlay: '#1f2430',
  panelBackground: '#1a1e28',
} as const

/**
 * Darker background colors
 * Used by all darker theme variants
 */
export const darkerBg = {
  background: '#0b0e14',
  surface: '#0b0e14',
  surfaceDark: '#08090d',
  surfaceLight: '#111722',
  border: '#0d0f14',
  overlay: '#111722',
  panelBackground: '#0b0e14',
} as const
