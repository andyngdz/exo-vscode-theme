/**
 * Exo Theme Color Palette
 */

export const palette = {
  // Base
  background: '#0f1419',
  foreground: '#a8b5c4',
  foregroundBright: '#d4dce6',
  foregroundDim: '#8090a0',

  // Accent
  primary: '#6ba3a8',

  // Syntax
  keyword: '#c49a8a',
  function: '#d4b88c',
  string: '#8cb8a0',
  number: '#d4a875',
  comment: '#4a5866',
  operator: '#7a9099',
  type: '#7aacbf',
  constant: '#a8b8c8',
  error: '#c07a7a',

  // UI
  border: '#1e262d',
  surface: '#151a1e',
  surfaceDark: '#0a0e12',
  surfaceLight: '#141a1f',
  overlay: '#162025',
  lineNumber: '#3a4550',
  panelBackground: '#0c1014',

  // Git
  added: '#7a9e8c',
  deleted: '#b07070',
  modified: '#6ba3a8',
  ignored: '#4a5866',
  conflicting: '#b8a586',

  // Terminal
  red: '#d9727a',
  green: '#8cb88c',
  yellow: '#d9b877',
  blue: '#7ba3c9',
  magenta: '#b08cba',
} as const

export type PaletteColor = keyof typeof palette
