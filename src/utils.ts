/**
 * Color utilities
 */

import { colord } from 'colord'

export function withOpacity(hex: string, opacity: number): string {
  return colord(hex).alpha(opacity).toHex()
}

export function lighten(hex: string, amount: number): string {
  return colord(hex).lighten(amount).toHex()
}

export const transparent = '#00000000'
