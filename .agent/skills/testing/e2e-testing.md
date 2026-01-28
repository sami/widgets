---
name: E2E Testing
description: End-to-End testing strategies
---

# E2E Skills

## Tools
- **Cypress**: Developer-friendly, runs in browser.
- **Playwright**: Fast, supports multiple browsers/languages.
- **Selenium**: Legacy standard, widely supported.

## Best Practices
1.  **Selectors**: Use stable selectors like `data-testid` or `aria-label`. Avoid using CSS classes or IDs that change (like styled-components hashes).
2.  **State Setup**: Seed database or mock API responses for consistent starting state.
3.  **Flakiness**: Avoid hard waits (`sleep(1000)`). Use assertions that retry automatically.
4.  **Scope**: E2E tests are slow. Focus on "Happy Paths" and critical user flows (Login, Checkout). Use Unit/Integration tests for edge cases.
