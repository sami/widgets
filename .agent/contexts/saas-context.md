# SaaS Application Context

## Overview
Software as a Service (SaaS) requires robust multi-tenancy, billing management, and user isolation.

## Core Requirements
1.  **Multi-Tenancy**: Logical separation of data per customer (Tenant).
2.  **Authentication**: Support for SSO (SAML/OIDC) for enterprise plans.
3.  **Billing**: Subscriptions, trials, metering usage (seats, API calls).
4.  **Team Management**: Invites, Roles (Admin, Editor, Viewer).

## Architecture Decisions
-   **Tenancy Model**:
    -   *Discriminator Column*: (e.g., `WHERE tenant_id = X`). Easiest, lowest cost.
    -   *Schema per Tenant*: (Postgres Schemas). Better isolation.
    -   *Database per Tenant*: Highest isolation, highest cost/complexity.
-   **Idempotency**: Critical for billing webhooks (Stripe).

## Logic Constraints
-   **Data Leakage**: Every query *must* filter by `tenant_id`. Middleware should enforce this context.
-   **Plan Limits**: Enforce limits (e.g., "Max 5 projects") at the service layer before Write operations.

## Tech Stack Recommendations
-   **Auth**: Auth0, Clerk, or NextAuth.js.
-   **Billing**: Stripe Billing or Paddle.
-   **Backend**: NestJS, Django, or Laravel (great SaaS starters).

## Security Checklist
- [ ] Horizontal Privilege Escalation (User A accessing User B's data).
- [ ] Audit Logs for all critical actions.

## Common Pitfalls
-   Hardcoding pricing logic. Use the payment provider as the source of truth for plan details.
-   Forgetting to offboard users (remove access) when a subscription is cancelled.
