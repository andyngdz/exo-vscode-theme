/**
 * Exo - Dawn Palette
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Morning glow - soft corals, rose pinks, golden rays
 * - Contrast: Light text on dark background
 * - Hierarchy: Code focus > UI chrome
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

  // Accent - muted coral (10-15% saturation for UI)
  primary: '#a08078',

  // Syntax - vibrant (30-40% saturation) for code focus
  keyword: '#d88080', // coral - sunrise glow
  function: '#d0a060', // gold - morning rays
  string: '#68c0a0', // mint - morning dew
  number: '#d89870', // peach - first blush
  comment: '#787070', // warm gray - morning mist
  operator: '#a8a098', // warm stone - neutral
  type: '#68b8b0', // teal - clear sky
  constant: '#d0a068', // gold - sandy shore
  error: '#c88080', // red - alert

  // UI - dark warm surfaces
  border: '#2a2628',
  surface: '#201c1e',
  surfaceDark: '#141214',
  surfaceLight: '#282426',
  overlay: '#242022',
  lineNumber: '#585050',
  panelBackground: '#1a1618',

  // Git - muted conventional colors (10-15% saturation)
  added: '#88a888',
  deleted: '#a88080',
  modified: '#a08078',
  ignored: '#686060',
  conflicting: '#a89878',

  // Terminal - muted morning tones (10-15% saturation)
  red: '#a88080',
  green: '#88a888',
  yellow: '#a8a078',
  blue: '#8098a8',
  magenta: '#a08090',
} as const
