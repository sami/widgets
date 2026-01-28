---
description: Workflow for debugging, fixing, and verifying software bugs
---

# Bug Fix Workflow

## 1. Triage & Prioritisation
**Goal**: Assess severity and priority.

### Severity Levels
- **P0 (Critical)**: System down, data loss, blocking core revenue flow. (Immediate Action)
- **P1 (High)**: Major feature broken, no workaround. (Fix ASAP/Next Sprint)
- **P2 (Medium)**: Functional bug with workaround. (Backlog)
- **P3 (Low)**: Cosmetic/Minor. (Backlog)

### Decision Tree: Hotfix vs Regular Release
- **Is it P0?** -> **HOTFIX** (Deploy immediately off `main` or release branch).
- **Is it P1/P2?** -> **Regular Release** (Fix in `develop`/`main`, release with next cycle).

---

## 2. Root Cause Analysis (RCA)
**Goal**: Understand *why* it happened.

### Process
1. **Reproduction**:
   - Create a minimal reproduction case.
   - Verify environment (Prod vs Staging).
2. **Investigation**:
   - Check logs (Splunk/CloudWatch).
   - Check error tracking (Sentry).
   - Git bisect (if regression).
3. **Hypothesis**:
   - Formulate a theory and test it.

---

## 3. Implementation
**Goal**: Fix the bug and prevent recurrence.

### Steps
1. **Create Branch**: `fix/ID-description` or `hotfix/ID-description`.
2. **Write Test First (TDD)**:
   - Write a failing test case that reproduces the bug.
   - **Crucial**: This ensures the bug doesn't regress.
3. **Apply Fix**:
   - Modify code to pass the test.
4. **Impact Analysis**:
   - What else could this break? Check dependencies.

---

## 4. Verification
**Goal**: Validation.

### Steps
1. **Automated Verification**:
   - Run full test suite.
2. **Manual Verification**:
   - Test the fix in local/staging environment.
   - Verify edge cases.
3. **Peer Review**:
   - Specific focus on "Did we find the root cause?".

---

## 5. Release & Monitoring
**Goal**: Deploy safely.

### For Hotfix:
1. Cherry-pick to release branch.
2. Deploy to Staging -> Verified.
3. Deploy to Prod.
4. Merge back to `main` (Don't lose the fix!).

### For Regular:
- Follow standard [Deployment Workflow](./deployment.md).

---

## 6. Post-Mortem
**Goal**: Learn and improve.
**Required for**: P0 incidents.

### Deliverables
- **Root Cause**: What specifically failed?
- **Detection**: How long did it take to find? `TTD` (Time To Detect).
- **Recovery**: How long did it take to fix? `TTR` (Time To Recover).
- **Action Items**:
  - [ ] Add regression test.
  - [ ] Improve monitoring/alerting.
  - [ ] Process change to prevent recurrence.
