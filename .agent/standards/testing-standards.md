# Testing Standards

## Rationale
Tests provide confidence to refactor and prevent regressions.

## 1. Coverage Targets

### Metrics
-   **Unit Tests**: > 80% Line Coverage.
-   **Integration Tests**: Critical paths covered.
-   **E2E Tests**: Key user journeys (Login, Checkout).

### Philosophy
-   **Testing Pyramid**: Many Unit tests, fewer Integration tests, very few E2E tests.
-   **Code vs Configuration**: Don't unit test configuration files or 3rd party libraries.

## 2. Naming Conventions

### Standard
`[MethodName]_[StateUnderTest]_[ExpectedBehavior]`

#### Examples
✅ **Correct**:
-   `calculateTotal_emptyCart_returnsZero()`
-   `calculateTotal_withItems_returnsSum()`

## 3. Tools & Libraries
-   **JS/TS**: Jest, React Testing Library.
-   **Python**: Pytest.
-   **PHP**: PHPUnit.
-   **E2E**: Playwright or Cypress.

## 4. Test Data
-   **Factories**: Use factories (e.g., FactoryBot, Faker) over static fixtures where possible.
-   **Isolation**: Tests must not depend on each other. Cleanup DB after run.

## Enforcement
-   **CI Gate**: PR cannot merge if tests fail or coverage drops significantly.

## Exceptions
-   **Prototypes/POCs**: Tests optional but recommended for complex logic.
-   **UI Visuals**: Snapshot testing is brittle; use sparingly.
