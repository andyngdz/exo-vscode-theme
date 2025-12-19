# Theme System

## Purpose

The foundational framework for generating VS Code color themes from palette definitions. Provides the build system, color utilities, and theme generator that transforms palette objects into valid VS Code theme JSON files.

## Requirements

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

### Requirement: Theme Generation

The system SHALL generate valid VS Code color theme JSON files from palette definitions.

#### Scenario: Generate theme from palette

- **WHEN** `createTheme(palette, type)` is called
- **THEN** it SHALL return a valid VS Code theme object with:
  - `name`: The palette name
  - `type`: Either 'dark' or 'light'
  - `colors`: UI color mappings
  - `tokenColors`: Syntax highlighting rules

#### Scenario: Build process outputs theme files

- **WHEN** the build script runs
- **THEN** it SHALL generate JSON files in `themes/` directory
- **AND** each file SHALL be named `{palette.name}-color-theme.json`

### Requirement: Color Utilities

The system SHALL provide utility functions for color manipulation.

#### Scenario: Apply opacity to color

- **WHEN** `withOpacity(hex, opacity)` is called
- **THEN** it SHALL return a hex color with the specified alpha value

#### Scenario: Lighten color

- **WHEN** `lighten(hex, amount)` is called
- **THEN** it SHALL return a lighter version of the color

#### Scenario: Darken color

- **WHEN** `darken(hex, amount)` is called
- **THEN** it SHALL return a darker version of the color

### Requirement: Theme Type Support

The system SHALL support both dark and light theme types.

#### Scenario: Dark theme generation

- **WHEN** a theme is generated with `type: 'dark'`
- **THEN** the theme SHALL use `vs-dark` as the VS Code UI theme base
- **AND** contrast adjustments SHALL lighten colors where needed

#### Scenario: Light theme generation

- **WHEN** a theme is generated with `type: 'light'`
- **THEN** the theme SHALL use `vs` as the VS Code UI theme base
- **AND** contrast adjustments SHALL darken colors where needed

### Requirement: Palette Export

All palettes SHALL be exported from a central index file.

#### Scenario: Import palettes

- **WHEN** importing from `@/palettes`
- **THEN** all available palettes SHALL be accessible
- **AND** the `Palette` type SHALL be exported for type safety

### Requirement: Theme Registration

Each theme SHALL be registered in `package.json` for VS Code to discover.

#### Scenario: Theme appears in VS Code

- **WHEN** the extension is installed
- **THEN** each theme SHALL appear in the theme selector
- **AND** each theme SHALL have a unique label matching its palette name
