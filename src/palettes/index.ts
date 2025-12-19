export { dusk } from './dusk'
export { dawn } from './dawn'
export { midnight } from './midnight'

export type Palette =
  | typeof import('./dusk').dusk
  | typeof import('./dawn').dawn
  | typeof import('./midnight').midnight
