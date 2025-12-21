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

#### Scenario: Syntax colors have sufficient vibrancy

- **WHEN** defining syntax colors (`keyword`, `function`, `string`, `number`, `type`, `constant`, `error`)
- **THEN** colors SHALL have moderate-to-high saturation (30-60% saturation range)
- **AND** colors SHALL feel energetic and distinguishable
- **AND** backgrounds SHALL remain muted to maintain eye comfort

#### Scenario: Accent colors are vivid

- **WHEN** defining the `primary` accent color
- **THEN** it SHALL be visually prominent with high saturation (50-70% range)
- **AND** it SHALL clearly stand out against muted backgrounds
