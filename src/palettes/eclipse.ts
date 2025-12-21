/**
 * Exo - Eclipse Palette
 * Dark theme inspired by solar eclipse and dramatic lighting
 *
 * Identity: Total eclipse - deep crimsons, warm shadows, corona flames
 * - Contrast: High contrast for dramatic effect
 * - Hierarchy: Clear text weight progression
 * - Variety: Eclipse-inspired syntax colors
 * - Unity: Warm dramatic tones throughout
 */

export const eclipse = {
  name: 'Exo - Eclipse',

  // Base - near-black with subtle warm undertone
  background: '#12100f',
  foreground: '#c8c0b8',
  foregroundBright: '#f0e8e0',
  foregroundDim: '#706860',

  // Accent - vivid crimson like solar corona
  primary: '#e04040',

  // Syntax - vibrant eclipse corona palette
  keyword: '#e06080', // vivid rose - corona flames
  function: '#e8a840', // bright gold - scattered sunlight
  string: '#70c090', // vibrant sage - earth tone
  number: '#e8b050', // bright bronze - light rays
  comment: '#686058', // warm charcoal - deep shadow
  operator: '#a09888', // warm ash - smoke
  type: '#c080c0', // vivid violet - corona haze
  constant: '#e0b060', // warm gold - sunlit dust
  error: '#f06060', // vivid coral - warning glow

  // UI - dark warm surfaces
  border: '#201c1a',
  surface: '#181412',
  surfaceDark: '#0a0908',
  surfaceLight: '#201c1a',
  overlay: '#1c1816',
  lineNumber: '#484038',
  panelBackground: '#12100f',

  // Git - vibrant conventional colors
  added: '#60c878',
  deleted: '#f05050',
  modified: '#e04040',
  ignored: '#585048',
  conflicting: '#e8c050',

  // Terminal - vibrant dramatic tones
  red: '#f06060',
  green: '#70d070',
  yellow: '#f0c840',
  blue: '#60a0d0',
  magenta: '#e060b0',
} as const
