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

  // Accent - deep crimson like solar corona
  primary: '#c85050',

  // Syntax - eclipse corona palette (burgundy, burnt orange, shadows)
  keyword: '#c08088', // dusty rose - corona flames
  function: '#c89860', // burnt gold - scattered sunlight
  string: '#90a888', // muted sage - earth tone
  number: '#c8a078', // warm bronze - light rays
  comment: '#585048', // warm charcoal - deep shadow
  operator: '#888078', // warm ash - smoke
  type: '#a890a8', // dusty violet - corona haze
  constant: '#b8a080', // warm sand - sunlit dust
  error: '#c87878', // deep coral - warning glow

  // UI - dark warm surfaces
  border: '#201c1a',
  surface: '#181412',
  surfaceDark: '#0a0908',
  surfaceLight: '#201c1a',
  overlay: '#1c1816',
  lineNumber: '#484038',
  panelBackground: '#12100f',

  // Git - conventional colors with warm tint
  added: '#b08860',
  deleted: '#d06060',
  modified: '#c85050',
  ignored: '#585048',
  conflicting: '#c8b080',

  // Terminal - warm dramatic tones
  red: '#e07070',
  green: '#a0b070',
  yellow: '#d8b860',
  blue: '#8090b0',
  magenta: '#c080a0',
} as const
