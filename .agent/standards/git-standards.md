# Git Standards

## Rationale
Git history is documentation. It allows us to revert changes safely and understand the evolution of the codebase.

## 1. Branch Naming
Format: `type/ticket-ID-description`
-   `feat/PROJ-123-add-login`
-   `fix/PROJ-124-fix-crash`
-   `chore/update-deps`
-   `refactor/auth-logic`

## 2. Commit Messages
Standard: **Conventional Commits**
Format: `type(scope): description`

Types:
-   `feat`: New feature
-   `fix`: Bug fix
-   `docs`: Documentation only
-   `style`: Formatting (no code change)
-   `refactor`: Code change (no feature/fix)
-   `test`: Adding tests
-   `chore`: Build/Tools

#### Example
✅ **Correct**: `feat(auth): implement jwt token handling`
❌ **Incorrect**: `fixed bug`, `wip`

## 3. Pull Requests (Merge Request)
-   **Title**: Matches commit format.
-   **Size**: < 400 lines ideally.
-   **Review**: 1 Approval minimum. CI Passing.
-   **Merge Strategy**: Squash & Merge (results in one clean commit on main).

## 4. Tagging & Releases
-   **Tags**: Semantic Versioning (`v1.0.0`).
-   **Branching Strategy**: Trunk-based Development (short lived branches off main).

## Enforcement
-   **Linting**: `commitlint` in pre-commit hook.
-   **Branch Protection**: Lock `main` branch.

## Exceptions
-   **Hotfixes**: Can bypass some checks if designated P0 Emergency.
