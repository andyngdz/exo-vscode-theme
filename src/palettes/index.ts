export { dusk } from './dusk'
export { dawn } from './dawn'
export { midnight } from './midnight'
export { eclipse } from './eclipse'

export type Palette =
  | typeof import('./dusk').dusk
  | typeof import('./dawn').dawn
  | typeof import('./midnight').midnight
  | typeof import('./eclipse').eclipse
