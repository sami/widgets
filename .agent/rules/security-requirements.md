# Security Requirements Rules

## Rationale
Security cannot be an afterthought. These rules mitigate top OWASP risks.

## 1. Input/Output
-   **Sanitization**: All user input MUST be validated against a whitelist of allowed types/patterns.
-   **Encoding**: All user-generated content displayed in browsers MUST be HTML-encoded.
-   **SQL**: All queries MUST use Parameterized Statements or ORM bindings (No String Concat).

## 2. Authentication & Secrets
-   **Secrets**: API Keys/Passwords MUST NOT be committed to version control.
-   **Auth**: Endpoints accessing private data MUST require an authenticated session/token.
-   **Passwords**: MUST enforce complexity: Min 12 chars, mixed case/numbers.

## 3. Data Protection
-   **HTTPS**: All traffic MUST use TLS 1.2+.
-   **Headers**: Web servers MUST send `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`.

## Enforcement
-   **GitLeaks**: Scans for secrets.
-   **SAST**: CodeQL scan in CI.
