# API Service Context

## Overview
Backend services providing data and logic to other internal/external consumers (Frontend, Mobile, Partners).

## Core Requirements
1.  **Interface**: Strict contract (OpenAPI/Swagger/gRPC).
2.  **Versioning**: URL path (/v1/), Header, or Query param. Deprecation policy.
3.  **Idempotency**: `POST` requests should be safe to retry if `Idempotency-Key` is present.

## Architecture Decisions
-   **Communication**: REST (Standard) vs GraphQL (Flexible) vs gRPC (High Performance internal).
-   **Resiliency**: Circuit Breakers (fail fast if dependency is down), Retries with Jitter.

## Logic Constraints
-   **Statelessness**: No session stickiness. Tokens (JWT) pass state.
-   **Rate Limiting**: Protect resources (Token bucket algorithm).

## Tech Stack Recommendations
-   **Node.js**: Fast I/O, great for JSON APIs.
-   **Go**: High integrity, types, concurrency.
-   **Gateway**: Kong or Traefik.

## Security Checklist
- [ ] **Auth**: OAuth2 / OIDC.
- [ ] **Validation**: Zod/Joi for runtime input validation.
