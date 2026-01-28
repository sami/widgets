# Naming Conventions Rules

## Rationale
Ambiguous or inconsistent naming is the #1 cause of confusion in code reading.

## 1. Format Requirements
-   **Classes**: MUST match `^[A-Z][a-zA-Z0-9]*$` (PascalCase).
-   **Variables**: MUST match `^[a-z][a-zA-Z0-9]*$` (camelCase) OR `^[a-z][a-z0-9_]*$` (snake_case) - strict per language.
-   **Constants**: MUST match `^[A-Z][A-Z0-9_]*$` (SCREAMING_SNAKE).
-   **Interfaces**: MUST match `^I[A-Z]` (if C#) or just PascalCase (TS/Java).

## 2. Forbidden Patterns
-   **Hungarian Notation**: MUST NOT use prefixes mapping to types (e.g., `strName`, `iCount`).
-   **Single Letter**: Variables `a`, `b`, `x` are FORBIDDEN except as loop counters or math coordinates.
-   **Reserved Words**: MUST NOT use language keywords (e.g., `class`, `function`).

## 3. File Naming
-   **React Components**: `PascalCase.tsx`.
-   **Utilities**: `camelCase.ts` or `kebab-case.ts`.
-   **Matching**: File name MUST match the primary export name.

## Enforcement
-   **ESLint**: `id-match`, `filenames/match-regex`.
