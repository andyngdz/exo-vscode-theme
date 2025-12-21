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
- **THEN** colors SHALL have 40-60% saturation for clear visibility
- **AND** colors SHALL be easily distinguishable from each other
- **AND** backgrounds SHALL remain muted to maintain eye comfort

#### Scenario: Accent colors are vivid

- **WHEN** defining the `primary` accent color
- **THEN** it SHALL be visually prominent with 30-40% saturation
- **AND** it SHALL clearly stand out against muted backgrounds

## ADDED Requirements

### Requirement: Variable Visibility

Variables and identifiers SHALL be clearly visible across all languages.

#### Scenario: Variables use bright foreground

- **WHEN** displaying variable names, imports, or identifiers
- **THEN** the theme SHALL use `foregroundBright` color
- **AND** text SHALL be clearly readable against the background

#### Scenario: Import statements are visible

- **WHEN** displaying import or module names (Python, JS, TS, etc.)
- **THEN** the text SHALL have sufficient contrast to be easily read
- **AND** it SHALL NOT appear dim or washed out

### Requirement: Theme Identity

Each theme SHALL have a distinct visual identity through unique signature colors.

#### Scenario: Themes have unique keyword colors

- **WHEN** comparing keyword colors across themes
- **THEN** each theme SHALL use a different hue for keywords
- **AND** the color SHALL reflect the theme's personality

#### Scenario: Themes have unique function colors

- **WHEN** comparing function colors across themes
- **THEN** each theme SHALL use a different hue for functions
- **AND** the color SHALL complement the theme's keyword color

#### Scenario: Theme identity table

- **WHEN** defining theme palettes
- **THEN** they SHALL follow these identity guidelines:
  - **Dusk**: Orchid keywords, Amber functions, Violet types (evening sunset mood)
  - **Dawn**: Coral keywords, Gold functions, Teal types (morning sunrise mood)
  - **Midnight**: Periwinkle keywords, Cyan functions, Sky blue types (night sky mood)
  - **Eclipse**: Rose keywords, Gold functions, Violet types (solar eclipse mood)
  - **Forest**: Sage keywords, Amber functions, Teal types (woodland mood)

### Requirement: UI Color Balance

UI colors SHALL be balanced to not distract from code.

#### Scenario: Git colors are recognizable

- **WHEN** displaying git status colors (added, deleted, modified)
- **THEN** colors SHALL have 25-35% saturation
- **AND** colors SHALL be instantly recognizable (green=added, red=deleted, yellow=modified)

#### Scenario: Terminal colors are functional

- **WHEN** displaying terminal output colors
- **THEN** colors SHALL have 30-40% saturation
- **AND** colors SHALL be distinguishable from each other
