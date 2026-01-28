# Security Standards

## Rationale
Security is not a feature; it's a fundamental requirement. These standards protect user data and the company's reputation.

## 1. Authentication & Authorization

### Standards
-   **Passwords**: Never store plain text. Use `bcrypt`, `Argon2`, or `PBKDF2`.
-   **MFA**: Mandate Multi-Factor Authentication for Admin access.
-   **Sessions**: Use HttpOnly, Secure cookies for web sessions.
-   **API**: Use Bearer Tokens (JWT). Short lifespan (15m) + Refresh Tokens.

## 2. Data Protection

### Encryption
-   **At Rest**: All DB volumes must be encrypted in cloud provider.
-   **In Transit**: TLS 1.2+ mandatory for internal and external traffic.
-   **Secrets**: No secrets in Git. Use Secret Manager (AWS/Vault) or `.env` not committed to repo.

## 3. Input Validation

### Rule: "All Input is Evil"
-   **Sanitization**: Strip XSS vectors (e.g., `<script>`).
-   **Validation**: Check types, length, format at the API edge.
-   **Output Encoding**: Context-aware encoding when rendering HTML.

#### Examples
✅ **Correct**:
```php
echo htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');
```

❌ **Incorrect**:
```php
echo $userInput;
```

## 4. Vulnerability Management
-   **Dependencies**: Run `npm audit` / `snyk` in CI. Block Critical/High.
-   **Response**: 
    -   Critical: Fix < 24h.
    -   High: Fix < 7 days.

## Enforcement
-   **SAST/DAST**: Static/Dynamic scanning in pipeline.
-   **Pen Tests**: Annual external audit.

## Exceptions
-   **Internal-only tools** (non-prod data) may relax MFA requirements.
