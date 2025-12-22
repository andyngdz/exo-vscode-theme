## ADDED Requirements

### Requirement: Theme Generator Maintainability

The theme generator SHALL be structured to minimize risk of accidental visual regressions when making incremental changes.

#### Scenario: UI color mappings are organized by subsystem

- **WHEN** a developer updates VS Code UI colors
- **THEN** the generator SHOULD define UI color mappings in grouped sections (e.g., Editor, Sidebar, Terminal)
- **AND** each section SHOULD be independently auditable without scanning the entire file

#### Scenario: Token rules are organized and reusable

- **WHEN** a developer updates token scopes or token rules
- **THEN** the generator SHOULD define token rules in grouped sections (e.g., core, JSON, Markdown)
- **AND** shared scope groups SHOULD be defined once and reused

#### Scenario: Token precedence is preserved during refactors

- **WHEN** the generator is refactored
- **THEN** token rule order SHALL remain stable so precedence does not change
- **AND** the generated theme output SHOULD be equivalent to the prior output
