---
description: Workflow for scaffolding a new project from scratch
---

# New Project Workflow

This workflow guides you through setting up a new project using standard best practices.

## 1. Requirement Analysis
- [ ] Clarify the project goal and target audience.
- [ ] Determine the tech stack (Frontend, Backend, Database).
- [ ] Define key features for the MVP (Minimum Viable Product).

## 2. Project Initialization
- [ ] Create the project directory.
- [ ] Initialize Git repository: `git init`.
- [ ] Create a `.gitignore` file suitable for the stack.
- [ ] Create a `README.md` with:
    - Project Title & Description
    - Setup Instructions
    - Tech Stack

## 3. Scaffolding
- **Frontend**:
    - [ ] Install using `npm create vite@latest` (or equivalent).
    - [ ] Configure linting (ESLint) and formatting (Prettier).
    - [ ] Setup routing and state management if needed.
- **Backend**:
    - [ ] Initialize package/dependency manager (npm, pip, poetry, go mod).
    - [ ] Setup server entry point.
    - [ ] Configure environment variables (`.env`).

## 4. Workflows & CI/CD
- [ ] Copy relevant workflows from `.agent/workflows/` to the project if customizable.
- [ ] Setup basic CI pipeline (GitHub Actions, etc.) for linting/testing.

## 5. First Commit
- [ ] Stage all files.
- [ ] Commit with message: `feat: initial project setup`.
