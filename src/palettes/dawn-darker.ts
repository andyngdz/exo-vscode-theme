/**
 * Exo Dawn - Darker Palette
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * Background: Darker (#0b0e14)
 */

import { dawnBase } from '@/palettes/dawn-base'
import { darkerBg } from '@/palettes/shared'

export const dawnDarker = {
  name: 'Exo Dawn - Darker',
  ...darkerBg,
  ...dawnBase,
} as const
