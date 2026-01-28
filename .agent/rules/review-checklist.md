# Review Checklist Rules

## Rationale
To ensure code reviews are consistent and thorough, not just a "box ticking" exercise.

## 1. Automated Checks (Must Pass First)
-   [ ] Linting & Formatting.
-   [ ] Unit & Integration Tests.
-   [ ] Security Scan (Secrets/SAST).
-   [ ] Build verification.

## 2. Reviewer Checklist
-   **Architecture**: Does this fit the [Architecture Patterns](./architecture-patterns.md)?
-   **Security**: Are inputs validated? Authorisation checked?
-   **Performance**: Any N+1 queries? Heavy loops?
-   **Readability**: Can I understand this without the author explaining it?
-   **Tests**: Do the tests actually test the logic? (No `expect(true).toBe(true)`).

## 3. Approval criteria
-   **Wait**: Do NOT approve if there are open "Blocker" comments.
-   **Sign-off**: Minimum 1 senior engineer approval for core architecture changes.

## Enforcement
-   **Branch Protection**: Merge button disabled until checklist satisfied.
