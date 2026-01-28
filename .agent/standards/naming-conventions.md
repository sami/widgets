# Naming Conventions Standards

## Rationale
Naming is the hardest problem in Computer Science. Standardizing it reduces friction and debate.

## 1. General Principles
-   **Intent-Revealing**: `daysUntilExpiry` vs `d`.
-   **Pronounceable**: `generateReport` vs `genRpt`.
-   **Searchable**: Unique enough to grep.

## 2. Variables & Functions
-   **Booleans**: Prefix with `is`, `has`, `should`. (e.g., `isValid`, `hasPermission`).
-   **Functions**: Verb-Noun. (e.g., `getUser`, `calculateTotal`).
-   **Collections**: Plural. (e.g., `users`, `items`).

## 3. Casing Table

| Type | Style | Example |
|---|---|---|
| Class / Component | PascalCase | `UserProfile` |
| Variable / Function | camelCase / snake_case* | `firstName` |
| Constant | SCREAMING_SNAKE | `MAX_RETRIES` |
| File (JS/TS) | Pascal (Component) / camel | `UserProfile.tsx`, `utils.ts` |
| File (Python) | snake_case | `user_profile.py` |
| Database Table | snake_case (plural) | `users` |
| URL Path | kebab-case | `/api/user-profiles` |

*\*Adhere to language idioms (Python=snake, JS=camel).*

## 4. Forbidden Names
-   `data`, `info`, `item` (too generic, unless in a generic iterator).
-   `manager`, `processor` (often god classes, be more specific).

## Enforcement
-   **Linters**: Eslint/Pylint.
