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

  // Accent - vivid coral like sunrise clouds
  primary: '#f07860',

  // Syntax - vibrant sunrise/morning palette
  keyword: '#f07070', // vivid coral - sunrise glow
  function: '#e0b050', // bright gold - morning rays
  string: '#50d098', // vibrant mint - morning dew
  number: '#f0a060', // bright peach - first blush
  comment: '#787070', // warm gray - morning mist
  operator: '#a8a098', // warm stone - neutral
  type: '#50c8c0', // vivid teal - clear sky
  constant: '#e0b070', // warm gold - sandy shore
  error: '#f06060', // vivid red - clear alert

  // UI - dark warm surfaces
  border: '#2a2628',
  surface: '#201c1e',
  surfaceDark: '#141214',
  surfaceLight: '#282426',
  overlay: '#242022',
  lineNumber: '#585050',
  panelBackground: '#1a1618',

  // Git - vibrant conventional colors
  added: '#50d080',
  deleted: '#f05858',
  modified: '#f07860',
  ignored: '#686060',
  conflicting: '#f0a050',

  // Terminal - vibrant morning tones
  red: '#f06060',
  green: '#50d088',
  yellow: '#f0c850',
  blue: '#50b0e0',
  magenta: '#e060a8',
} as const
