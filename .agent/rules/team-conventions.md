# Team Conventions Rules

## Rationale
Consistency in tools and process prevents "it works on my machine" issues.

## 1. Tooling Mandates
-   **Package Manager**: MUST use `npm` (Lockfile `package-lock.json`) OR `pnpm`. Do not mix.
-   **Node Version**: MUST use `.nvmrc` version.
-   **Formatter**: MUST use Prettier with the team config.

## 2. Workflow
-   **Trunk-Based**: Feature branches MUST be short-lived (< 2 days).
-   **PRs**: MUST be linked to a Ticket/Issue.
-   **Commits**: MUST follow Conventional Commits format.

## 3. Communication
-   **Async First**: Use Pull Request comments / Tickets for decisions. Slack is ephemeral.
-   **Documentation**: Decisions MUST be recorded in an ADR or the README, not just agreed verbally.

## Enforcement
-   **Onboarding**: New engineers set up environment via strict `setup.sh` script.
