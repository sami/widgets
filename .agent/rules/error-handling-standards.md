# Error Handling Standards Rules

## Rationale
Silent failures make debugging impossible. Unhandled exceptions crash systems.

## 1. Exception Handling
-   **No Silent Failures**: `catch (e) {}` is FORBIDDEN. At a minimum, log the error.
-   **Scope**: `try/catch` blocks MUST be as narrow as possible.
-   **Propagation**: Low-level functions SHOULD throw/reject; Top-level controllers SHOUL handle and format.

## 2. User-Facing Errors
-   **Information Leakage**: Responses MUST NOT expose stack traces or internal DB error messages to clients in Production.
-   **Clarity**: Error messages MUST suggest recovery steps where possible.

## 3. Formatting
-   **Objects**: Exceptions MUST inherit from the standard `Error` class.
-   **Context**: Errors MUST wrap lower-level errors to provide context ("Failed to save user" <- "DB connection timeout").

## Enforcement
-   **Linting**: Rules against empty catch blocks.
