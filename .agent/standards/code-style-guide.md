# Code Style Guide

## Rationale
Code is read much more often than it is written. Consistency reduces cognitive load and allows developers to focus on logic rather than formatting.

## 1. Naming Conventions

### General Rules
-   **English**: All names must be in English.
-   **Descriptive**: Avoid single-letter variables (except `i`, `j` in loops).
-   **No Hungarian Notation**: Do not prefix types (e.g., `strName` is bad).

### Language Specifics
-   **JavaScript/TS**: `camelCase` for variables/functions. `PascalCase` for Classes/React Components.
-   **Python**: `snake_case` for variables/functions. `PascalCase` for Classes. `UPPER_CASE` for constants.
-   **PHP**: `snake_case` or `camelCase` (be consistent with framework). `PascalCase` for Classes.

#### Examples
✅ **Correct**:
```javascript
const userProfile = getUser(id);
class DataProcessor {}
const MAX_RETRIES = 3;
```

❌ **Incorrect**:
```javascript
const User = getUser(id); // Looks like class
class data_processor {} // Wrong casing
const r = 3; // Ambiguous
```

## 2. Formatting & Structure

### Rules
-   **Indentation**: 2 spaces (JS/TS/HTML/CSS), 4 spaces (Python/PHP).
-   **Max Line Length**: 100 characters (soft limit), 120 (hard limit).
-   **Braces**: K&R style (opening brace on same line).

### Enforcement
-   **Automation**: Use Prettier (JS) and Black (Python).
-   **CI**: Fails if code is not formatted.

## 3. Comments

### Rules
-   **Explain "Why", not "What"**: Code explains *what* is happening. Comments explain *why* it is done that way.
-   **TODOs**: Format as `// TODO(username): Description`.

#### Examples
✅ **Correct**:
```python
# Retry connection to handle transient network blips
retry_connection()
```

❌ **Incorrect**:
```python
# Retry connection
retry_connection()
```

## Exceptions
-   **Legacy Code**: When editing a file, follow existing style if it differs significantly, or refactor the whole file.
