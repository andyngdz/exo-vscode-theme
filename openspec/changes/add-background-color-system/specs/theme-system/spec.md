# Theme System - Delta

## ADDED Requirements

### Requirement: Background Color Generation

The system SHALL provide a centralized background color generation system for consistent readability across all themes.

#### Scenario: Single lightness constant controls all themes

- **WHEN** the `BACKGROUND_LIGHTNESS` constant is changed
- **THEN** all theme background colors SHALL update accordingly on next build
- **AND** the default value SHALL be 0.10 (10% HSL lightness) for optimal readability

#### Scenario: Generate background colors from hue and saturation

- **WHEN** `createBackgroundColors(hue, saturation)` is called
- **THEN** it SHALL return an object containing:
  - `background`: Base background at `BACKGROUND_LIGHTNESS`
  - `surface`: Same lightness as background
  - `surfaceDark`: 60% of base lightness
  - `surfaceLight`: 150% of base lightness
  - `border`: 180% of base lightness
  - `overlay`: 130% of base lightness
  - `panelBackground`: Same as background

#### Scenario: Preserve theme identity through hue

- **WHEN** a palette uses `createBackgroundColors()`
- **THEN** the hue parameter SHALL match the theme's color identity
- **AND** the saturation SHALL be low (typically 8-15%) for readability
- **AND** each theme SHALL use a unique hue value

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
