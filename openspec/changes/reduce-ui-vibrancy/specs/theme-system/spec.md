## MODIFIED Requirements

### Requirement: Palette Structure

Each theme palette SHALL define a complete set of color tokens required by the theme generator.

#### Scenario: Palette defines all required tokens

- **WHEN** a palette is created
- **THEN** it SHALL include:
  - Base colors: `background`, `foreground`, `foregroundBright`, `foregroundDim`
  - Accent: `primary`
  - Syntax: `keyword`, `function`, `string`, `number`, `comment`, `operator`, `type`, `constant`, `error`
  - UI: `border`, `surface`, `surfaceDark`, `surfaceLight`, `overlay`, `lineNumber`, `panelBackground`
  - Git: `added`, `deleted`, `modified`, `ignored`, `conflicting`
  - Terminal: `red`, `green`, `yellow`, `blue`, `magenta`

#### Scenario: Syntax colors have moderate vibrancy for focus

- **WHEN** defining syntax colors (`keyword`, `function`, `string`, `number`, `type`, `constant`)
- **THEN** colors SHALL have moderate saturation (20-30% saturation range)
- **AND** colors SHALL be distinguishable from each other
- **AND** colors SHALL be the primary visual focus in the editor

#### Scenario: UI colors are subtle to reduce distraction

- **WHEN** defining UI/chrome colors (`primary`, git colors, terminal colors, `error`)
- **THEN** colors SHALL have low saturation (10-15% saturation range)
- **AND** colors SHALL recede visually behind syntax colors
- **AND** colors SHALL still be functional and recognizable
