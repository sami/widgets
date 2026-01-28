# Testing Requirements Rules

## Rationale
Untested code is broken code. Coverage gates ensure we don't backslide.

## 1. Coverage Gates
-   **Unit Tests**: MUST maintain > 80% line coverage.
-   **New Code**: PRs with new logic MUST include corresponding tests.
-   **Legacy**: Touching a legacy file requires increasing its coverage by at least 1%.

## 2. Test Types
-   **Unit**: REQUIRED for all business logic / utils.
-   **Integration**: REQUIRED for API endpoints.
-   **E2E**: REQUIRED for Critical Happy Paths (Login, Buying).

## 3. Best Practices
-   **Determinism**: Tests MUST NOT depend on external systems (Network/Time). Mock them.
-   **Independence**: Tests MUST run in any order. No shared mutable state between tests.
-   **Speed**: Unit test suite MUST run in < 2 minutes.

## Enforcement
-   **CI Failure**: PR is blocked if coverage target is missed.
