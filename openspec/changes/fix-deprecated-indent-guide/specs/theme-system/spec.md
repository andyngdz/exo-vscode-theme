## MODIFIED Requirements

### Requirement: Theme Generation

The system SHALL generate valid VS Code color theme JSON files from palette definitions.

#### Scenario: Generate theme from palette

- **WHEN** `createTheme(palette, type)` is called
- **THEN** it SHALL return a valid VS Code theme object with:
  - `name`: The palette name
  - `type`: Either 'dark' or 'light'
  - `colors`: UI color mappings using current (non-deprecated) VS Code properties
  - `tokenColors`: Syntax highlighting rules

#### Scenario: Build process outputs theme files

- **WHEN** the build script runs
- **THEN** it SHALL generate JSON files in `themes/` directory
- **AND** each file SHALL be named `{palette.name}-color-theme.json`

#### Scenario: Indent guide colors use current API

- **WHEN** indent guide colors are defined
- **THEN** the theme SHALL use `editorIndentGuide.background1` for inactive guides
- **AND** the theme SHALL use `editorIndentGuide.activeBackground1` for active guides
- **AND** deprecated properties SHALL NOT be used
