# Startup MVP Context

## Overview
Minimum Viable Products (MVPs) necessitate speed, flexibility, and validating assumptions. "Perfect is the enemy of done."

## Core Priorities
1.  **Time to Market**: Ship fast to get feedback.
2.  **Core Value Proposition**: Build only what solves the primary pain point.
3.  **Feedback loops**: Integrated analytics and user feedback mechanisms.

## Architecture Decisions
-   **Monolith**: Start with a modular monolith. Avoid microservices.
-   **BaaS**: Use Backend-as-a-Service (Supabase, Firebase) to skip boilerplate.
-   **Hosting**: PAAS (Vercel, Heroku, Railway) over managing raw VPS/Kubernetes.

## Logic Constraints
-   **Scalability**: Ignore (mostly). Solve for 100 users, not 1 million.
-   **Tests**: Focus on Integration tests for critical paths. Skip strict TDD only if slowing down validation.

## Tech Stack Recommendations
-   **Fullstack**: Next.js, Remix, or Laravel.
-   **UI**: Component libraries (Shadcn/UI, Chakra, Mantine). Don't write custom CSS unless necessary.
-   **Database**: Postgres (Supabase).

## Common Pitfalls
-   Over-engineering infrastructure (K8s) too early.
-   Building features "just in case".
-   Optimizing performance before measuring bottlenecks.

## Checklists
- [ ] Analytics installed (Posthog/Mixpanel).
- [ ] Error tracking installed (Sentry).
- [ ] Legal basics (Terms/Privacy) generated.
