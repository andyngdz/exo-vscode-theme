# Theme System - Delta

## ADDED Requirements

### Requirement: High-contrast component identifiers
Component-oriented identifiers (classes, modules, aliases) SHALL maintain high readability against the shared neutral backgrounds.

#### Scenario: Component and class names remain legible
- **WHEN** token scopes `support.class`, `entity.name`, and `support.type` are rendered
- **THEN** the palette token driving them (currently `palette.type`) SHALL achieve at least 7:1 contrast against the theme background
- **AND** each theme SHALL keep its unique hue bias while meeting the contrast threshold

#### Scenario: Import/module aliases are consistent across languages
- **WHEN** scopes such as `meta.import variable.other.readwrite.alias` and `meta.module-reference` are highlighted
- **THEN** they SHALL reuse the same high-contrast identifier token as TSX components
- **AND** this requirement SHALL apply to all supported languages (JS/TS, Python, Rust, etc.)
