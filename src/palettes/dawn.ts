/**
 * Exo Dawn Palette (Standard)
 * Dark theme inspired by sunrise and early morning light
 *
 * Identity: Warm sunrise - coral, gold, peach
 * Background: Standard (#1a1e28)
 */

import { dawnBase } from '@/palettes/dawn-base'
import { standardBg } from '@/palettes/shared'

export const dawn = {
  name: 'Exo Dawn',
  ...standardBg,
  ...dawnBase,
} as const
