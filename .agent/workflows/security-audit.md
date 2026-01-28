---
description: Workflow for conducting security assessments and audits
---

# Security Audit Workflow

## 1. Threat Assessment
**Goal**: Know your enemy.

- **Asset Inventory**: What data do we hold? (PII, Financial, Secrets).
- **Attack Surface**: Public APIs, Admin Panels, 3rd party libs.
- **Threat Modeling**: "STRIDE" analysis (Spoofing, Tampering, Repudiation, Info Disclosure, Denial of Service, Elevation of Privilege).

---

## 2. Automated Scanning
**Goal**: Low hanging fruit.

### Software Composition Analysis (SCA)
- **Tool**: `npm audit`, Snyk, Dependabot.
- **Action**: Update vulnerable dependencies.

### Static Application Security Testing (SAST)
- **Tool**: SonarQube, CodeQL.
- **Action**: Scan source code for SQLi, XSS patterns.

### Dynamic Application Security Testing (DAST)
- **Tool**: OWASP ZAP, Burp Suite.
- **Action**: Scan running application for vulnerabilities.

---

## 3. Code Security Review Checklist
**Goal**: Manual verification.

- [ ] **Injection**: Are Prepared Statements used for ALL SQL?
- [ ] **AuthN**: Is MFA enabled/supported? Are passwords hashed (bcrypt/argon2)?
- [ ] **AuthZ**: Are IDORs (Insecure Direct Object References) blocked? Can User A see User B's data?
- [ ] **XSS**: Is user input escaped? Content-Security-Policy (CSP) headers set?
- [ ] **Secrets**: Are keys in `.env` and NOT in git?
- [ ] **Logging**: No sensitive data (passwords/tokens) in logs?

---

## 4. OWASP Top 10 Review
**Goal**: Standard compliance.

Verify protection against:
1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Auth Failures
8. Integrity Failures
9. Logging Failures
10. SSRF

---

## 5. Remediation & Reporting
**Goal**: Fix issues.

- **Critical/High**: Stop ship. Fix immediately.
- **Medium**: Fix in upcoming sprint.
- **Low**: Backlog / Accept Risk.

**Report**: Document findings, fix plan, and re-test date.

---

## 6. Incident Response Plan Preparation
**Goal**: Be ready.

- Ensure contact list is up to date.
- Verify logs retention policy.
- Test backup restoration.
