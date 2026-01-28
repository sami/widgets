---
name: Security
description: Security fundamentals
---

# Security Skills

## OWASP Top 10
Be familiar with:
1.  **Injection**: SQL, command injection.
2.  **Broken Auth**: Weak passwords, session hijacking.
3.  **Sensitive Data Exposure**: Encryption at rest and transit.
4.  **XXE**: XML External Entities.
5.  **Broken Access Control**: User vs Admin checks.

## Practices
- **HTTPS**: Everywhere.
- **Dependencies**: Audit `npm audit` / `pip audit`.
- **Headers**: CSP (Content Security Policy), HSTS.
- **Secrets Management**: Never commit `.env` files.
- **Sanitization**: Escape all user input before rendering (XSS).
