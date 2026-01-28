# Logging Standards Rules

## Rationale
Logs are the eyes and ears of the system. Noise reduction and security are paramount.

## 1. Log Levels
-   **ERROR**: System is broken. Human intervention required immediately.
-   **WARN**: Something odd happened, but system recovered. Worth investigating.
-   **INFO**: Key business events (User Signed Up, Order Paid).
-   **DEBUG**: Granular developer details. DISABLED in Production.

## 2. Structure & Format
-   **JSON**: Logs in Production MUST be structured JSON. No raw text lines.
-   **Correlation**: All logs MUST include `trace_id` and `request_id` to trace flows across services.

## 3. Data Sensitivity
-   **PII**: Passwords, Tokens, and Credit Card numbers are FORBIDDEN in logs.
-   **Redaction**: System MUST sanitize logs before writing.

## Enforcement
-   **Review**: Check for `console.log` in PRs (Use Logger lib).
