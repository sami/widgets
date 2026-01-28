---
name: Git Workflow
description: Version control best practices
---

# Git Workflow Skills

## Branching Strategies
- **Git Flow**: `master`, `develop`, variable feature branches. Release branches.
- **GitHub Flow**: `main` is deployable. Create feature branch -> PR -> Merge to `main`. (Simpler, preferred for CD).
- **Trunk Based**: Small, frequent commits to main. Feature flags hide incomplete work.

## Commit Messages (Conventional Commits)
Format: `type(scope): description`

- `feat`: New feature.
- `fix`: Bug fix.
- `docs`: Documentation only.
- `style`: Formatting, missing semi-colons (no code change).
- `refactor`: Restructuring code without behavior change.
- `test`: Adding tests.
- `chore`: Build tasks, package manager configs.

## Best Practices
- **Atomic Commits**: One logical change per commit.
- **Pull Requests**: Review code before merging.
- **Rebase**: Keep history linear (use with caution on shared branches).
