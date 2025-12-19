/**
 * Exo - Dawn Palette
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Morning glow - soft corals, rose pinks, golden rays
 * - Contrast: Light text on dark background
 * - Hierarchy: Clear text weight progression
 * - Variety: Sunrise-inspired syntax colors
 * - Unity: Warm morning tones throughout
 */

export const dawn = {
  name: 'Exo - Dawn',

  // Base - dark with warm undertone like pre-dawn sky
  background: '#1a1618',
  foreground: '#c8c0b8',
  foregroundBright: '#f0e8e0',
  foregroundDim: '#807870',

  // Accent - soft coral like sunrise clouds
  primary: '#e08870',

  // Syntax - sunrise/morning palette (corals, pinks, sage greens)
  keyword: '#d88880', // soft coral - sunrise glow
  function: '#c8a060', // golden honey - morning rays
  string: '#7ab890', // fresh mint - morning dew
  number: '#d8a080', // soft peach - first blush
  comment: '#686060', // warm gray - morning mist
  operator: '#989088', // warm stone - neutral
  type: '#80b0a8', // soft teal - clear sky
  constant: '#c8a888', // warm cream - sandy shore
  error: '#d07878', // soft red - gentle alert

  // UI - dark warm surfaces
  border: '#2a2628',
  surface: '#201c1e',
  surfaceDark: '#141214',
  surfaceLight: '#282426',
  overlay: '#242022',
  lineNumber: '#585050',
  panelBackground: '#1a1618',

  // Git - conventional colors with warm tint
  added: '#70b080',
  deleted: '#d06060',
  modified: '#e08870',
  ignored: '#686060',
  conflicting: '#e09868',

  // Terminal - warm morning tones
  red: '#e07070',
  green: '#78b888',
  yellow: '#d8b868',
  blue: '#78a8c8',
  magenta: '#c078a0',
} as const
