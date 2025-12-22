## ADDED Requirements

### Requirement: Keyword and Declared Type Identifier Distinction

Each palette SHALL provide clear, eye-friendly distinction between keyword/storage tokens and declared type identifiers, while preserving theme identity and maintaining good contrast.

#### Scenario: Keyword/storage tokens stay unified

- **WHEN** rendering a declaration like `export interface MyType`
- **THEN** `export` and `interface` SHALL use the themes keyword-like color family
- **AND** they SHOULD visually read as a single keyword unit

#### Scenario: Declared type identifier stands out

- **WHEN** rendering a declaration like `export interface MyType`
- **THEN** `MyType` SHALL use the themes type identifier color
- **AND** it SHALL be visually distinct from keyword/storage tokens at a glance

#### Scenario: Distinctness is enforced at build time

- **WHEN** generating themes from palettes
- **THEN** the system SHALL validate that `palette.type` and `palette.keyword` maintain minimum separation
- **AND** the system SHALL validate that `palette.type` has sufficient contrast against `palette.background`
- **AND** the build SHALL fail with a clear error indicating the offending palette when the validation fails

#### Scenario: Type identifiers stay eye-friendly

- **WHEN** generating themes from palettes
- **THEN** the system SHALL validate that `palette.type` avoids overly high saturation that could feel neon/harsh
