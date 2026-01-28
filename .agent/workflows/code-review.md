---
description: Standards and guidelines for conducting effective code reviews
---

# Code Review Workflow

## 1. Pre-Review Checklist (For Authors)
**Goal**: Respect the reviewer's time.

- [ ] **Self-Review**: Have you read your own diff?
- [ ] **Tests**: Are unit/integration tests added/updated?
- [ ] **Lint**: Does the code pass linting/formatting checks?
- [ ] **Description**: Does the PR description explain *why* and *how*?
- [ ] **Visuals**: Are screenshots attached for UI changes?
- [ ] **Size**: Is the PR small (< 400 lines)? If not, split it.

---

## 2. Review Criteria (For Reviewers)
**Goal**: Ensure quality and maintainability.

### Functionality
- Does it meet the requirements?
- Are edge cases handled?
- Are error states handled?

### Architecture & Design
- Is the code in the right place?
- Does it follow standard patterns (SOLID, DRY)?
- Is it verifiable/testable?

### Code Style & Readability
- Are variable names descriptive?
- Is the logic easy to follow?
- **Note**: Let automated linters handle strict formatting issues.

### Security
- Data validation/sanitisation?
- Authorization checks?
- Secrets exposed? (Never!)

---

## 3. Communication Guidelines
**Goal**: Constructive feedback.

- **Ask, Don't Command**: "Have you considered X?" instead of "Change Y to X."
- **Criticise Code, Not People**: Avoid "You". Use "This code" or "We".
- **Be Explicit**:
  - `[Nit]`: Minor suggestion (optional).
  - `[Blocker]`: Must be fixed before merge.
  - `[Question]`: Seeking clarification.
- **Praise**: Good code deserves recognition!

---

## 4. Approval Process
**Goal**: Gatekeeping.

### Rules
1. **Approvals Needed**: Minimum 1 (Standard) or 2 (Critical paths).
2. **Owners**: Code Owners must review changes to their domains.
3. **CI Status**: All checks must pass.

### Resolving Disagreements
- Discuss in comments first.
- If stalled, take it to synchronous chat or a call.
- Tech Lead casting vote if deadlocked.

---

## 5. Merge & Post-Merge
**Goal**: Integration.

### Steps
1. **Squash and Merge**: Keeps history clean.
2. **Delete Branch**: Remove the feature branch.
3. **Verify**: Check the deployment pipeline status.
