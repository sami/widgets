---
name: CI/CD
description: Continuous Integration and Deployment
---

# CI/CD Skills

## Priciples
- **Fast Feedback**: CI should run quickly (fail fast).
- **Automated**: No manual steps for deployment.
- **Idempotent**: Re-running a pipeline should result in the same state.

## Stages
1.  **Lint**: Code style and static analysis.
2.  **Test**: Unit and Integration tests.
3.  **Build**: Create artifacts (Docker images, binaries).
4.  **Deploy (Staging)**: Auto-deploy to dev/staging.
5.  **Deploy (Production)**: Manual trigger or auto-deploy on tag.

## Tools
- **GitHub Actions**: Preferred for GitHub repos.
- **GitLab CI**: Integrated, robust.
- **Jenkins**: Legacy, highly configurable but complex.

## Secrets
- NEVER commit secrets to repo.
- Use CI provider's secret management (e.g., GitHub Secrets).
