---
description: Standard procedure for implementing a new feature
---

# Feature Implementation Workflow

Follow this workflow to implement new features with high quality and consistency.

## 1. Planning
- [ ] Understand requirements. Read the user request or ticket carefully.
- [ ] Create an `implementation_plan.md` (or equivalent artifact) detailing:
    - Code changes (files to create/modify)
    - Data model updates
    - API changes
- [ ] **Review**: Get user/peer approval on the plan.

## 2. Setup
- [ ] Checkout a new branch: `git checkout -b feat/your-feature-name`.
- [ ] Ensure local environment is up-to-date (`npm install`, `pip install`, etc.).

## 3. Implementation (Iterative)
- [ ] Write a failing test for the new functionality (TDD), if applicable.
- [ ] Implement the backend/logic first.
- [ ] Implement the frontend/UI.
- [ ] Connect frontend and backend.
- [ ] Ensure code matches style guide (check `.agent/context/code-style.md`).

## 4. Verification
- [ ] Run unit tests.
- [ ] Run linting checks.
- [ ] Manual testing: Verification of the feature in the application.

## 5. Cleanup & Commit
- [ ] Remove temporary logs or comments.
- [ ] Commit changes: `feat: add [feature name]`.
- [ ] Push branch and open a Pull Request (or merge request).
