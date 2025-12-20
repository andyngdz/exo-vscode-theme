## MODIFIED Requirements

### Requirement: Theme Generation

The system SHALL generate valid VS Code dark theme JSON files from palette definitions.

#### Scenario: Generate theme from palette

- **WHEN** `createTheme(palette)` is called
- **THEN** it SHALL return a valid VS Code theme object with:
  - `name`: The palette name
  - `type`: Always 'dark'
  - `colors`: UI color mappings optimized for dark backgrounds
  - `tokenColors`: Syntax highlighting rules

#### Scenario: Build process outputs theme files

- **WHEN** the build script runs
- **THEN** it SHALL generate JSON files in `themes/` directory
- **AND** each file SHALL be named `{palette.name}-color-theme.json`

## REMOVED Requirements

### Requirement: Theme Type Support

**Reason**: Exo only supports dark themes. Light theme support is unnecessary complexity.

**Migration**: None required - all existing themes are dark themes.
