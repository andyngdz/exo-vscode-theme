## ADDED Requirements

### Requirement: Module Reference Highlighting

The theme generator SHALL apply a distinct syntax color to module references (import paths) to improve scanability.

#### Scenario: JavaScript/TypeScript module reference

- **WHEN** a token is emitted with TextMate scope `meta.module-reference`
- **THEN** the theme SHALL apply `palette.type` for that token

#### Scenario: TypeScript import binding reference

- **WHEN** a token is emitted within `meta.import` with scope `variable.other.readwrite.alias`
- **THEN** the theme SHALL apply `palette.type` for that token
- **AND** it SHALL visually override the generic `variable` styling when both match

#### Scenario: Rule precedence is stable

- **WHEN** applying `tokenColors` rules
- **THEN** the module reference rule SHALL appear after the generic `Variables` rule
- **AND** it SHALL appear before any more-specific language rules that intentionally override module references
