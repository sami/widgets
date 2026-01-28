---
description: Process for planning and executing safe code refactoring
---

# Refactoring Workflow

## 1. Identification (Code Smells)
**Goal**: Identify code that needs improvement.

### Common Signs
- **Duplicate Code**: DRY violations.
- **Long Methods/Classes**: Violation of Single Responsibility Principle.
- **Complex Logic**: Deep nesting, hard to read.
- **Rigidity**: Hard to add new features without breaking old ones.
- **Performance Issues**: Slow queries, memory leaks.

---

## 2. Scope Definition
**Goal**: Avoid "Refactoring Rabbit Holes".

### Rules
- **Separate from Features**: Do NOT refactor and build features in the same PR.
- **Incremental**: Break large refactors into small, safe steps.
- **Timeboxing**: Allocate specific time (e.g., 20% of sprint).

---

## 3. Pre-Refactor Checklist
**Goal**: Safety First.

- [ ] **Tests Exist**: Do not refactor without test coverage.
- [ ] **Baseline Established**: If performance refactor, measure current metric.
- [ ] **Plan Approved**: For major structural changes, get Design Review sign-off.

---

## 4. Execution Strategies
**Goal**: Clean code.

### The "Boy Scout Rule"
- *Always leave the code behind in a better state than you found it.*
- Small cleanups during regular work (renaming var, extracting method).

### The "Strangler Fig" Pattern
- For legacy systems replacement.
- Build new system alongside old.
- Gradually route traffic to new system.
- Remove old system when traffic is 0%.

### Parallel Change (Expand-Contract)
- **Expand**: Add new method/signature.
- **Migrate**: Update callers to use new method.
- **Contract**: Remove old method.

---

## 5. Verification
**Goal**: Ensure behavior is unchanged.

1. **Run Tests**: All green.
2. **Regression Testing**: Manual check of affected features.
3. **Performance Check**: Ensure no degradation.

---

## 6. Review & Commit
**Goal**: Documentation.

- **Commit Message**: `refactor: extract user validation logic`
- **PR Description**: explicit statement that *logic should remain unchanged*.
- **Documentation**: Update wikis/ADRs if architecture changed.

### Success Criteria
- [ ] Code is more readable/maintainable.
- [ ] Tests pass.
- [ ] No functional changes observed.
