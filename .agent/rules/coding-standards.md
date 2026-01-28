# Coding Standards Rules

## Rationale
Strict limits on complexity prevent code from becoming unmaintainable "spaghetti".

## 1. Complexity Requirements
-   **Cyclomatic Complexity**: MUST be < 10 per function.
-   **Nesting Depth**: MUST NOT exceed 4 levels.
-   **File Length**: MUST be < 500 lines.
-   **Function Length**: MUST be < 50 lines (excluding comments).

## 2. Function Signature violation
-   **Parameter Count**: MUST NOT exceed 3 positional arguments. Use a config object/struct for more.
-   **Boolean Arguments**: MUST NOT use "flag" boolean arguments. Split into two functions instead.

#### Example
✅ **Correct**:
```typescript
function createUser(config: UserConfig) { ... }
```

❌ **Violation**:
```typescript
function createUser(name, email, age, isActive, isAdmin) { ... }
```

## 3. Language Constraints
-   **TypeScript**: MUST NOT use `any`. MUST enable `strict: true`.
-   **Python**: MUST use Type Hints for all public methods.
-   **Global State**: Global mutable variables are FORBIDDEN.
-   **Spelling**: MUST use British English for all variables, functions, and comments (e.g., `colour`, `organise`).

## Enforcement
-   **Linter**: ESLint (Complexity rule), SonarQube.
-   **CI**: Build fails if restrictions are breached.
