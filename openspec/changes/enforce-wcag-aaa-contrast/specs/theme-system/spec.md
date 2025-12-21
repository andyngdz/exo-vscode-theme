# Theme System - Delta

## ADDED Requirements

### Requirement: WCAG AAA Contrast Compliance

All text colors in themes SHALL meet WCAG AAA contrast standards for optimal readability.

#### Scenario: Foreground colors meet AAA standard

- **WHEN** defining foreground colors (`foreground`, `foregroundBright`, `foregroundDim`)
- **THEN** each color SHALL have a minimum contrast ratio of 7:1 against the theme background
- **AND** higher contrast ratios are preferred for better readability

#### Scenario: Comment colors meet AAA standard

- **WHEN** defining the `comment` syntax color
- **THEN** it SHALL have a minimum contrast ratio of 7:1 against the theme background
- **AND** comments SHALL remain visually distinct from regular code (through italics or color differentiation)

#### Scenario: Syntax colors meet AAA standard

- **WHEN** defining syntax colors (`keyword`, `function`, `string`, `number`, `type`, `constant`, `operator`)
- **THEN** each color SHALL have a minimum contrast ratio of 7:1 against the theme background

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

#### Scenario: Background colors use centralized generation

- **WHEN** defining background-related colors (`background`, `surface`, `surfaceDark`, `surfaceLight`, `border`, `overlay`, `panelBackground`)
- **THEN** palettes SHOULD use `createBackgroundColors()` from the background module
- **AND** only `lineNumber` MAY be defined separately for fine-tuning

#### Scenario: All text colors meet WCAG AAA

- **WHEN** defining any text color that appears against the theme background
- **THEN** the color SHALL have a minimum contrast ratio of 7:1 (WCAG AAA)
- **AND** this includes `foreground`, `foregroundBright`, `foregroundDim`, `comment`, and all syntax colors
