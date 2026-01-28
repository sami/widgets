---
description: Procedures for safe and reliable application deployment
---

# Deployment Workflow

## 1. Pre-Deployment Checklist
**Goal**: Readiness verification.

- [ ] **CI Passed**: Build, Lint, Test are green.
- [ ] **Staging Verified**: Changes approved in staging env.
- [ ] **Migrations Reviewed**: DB changes are backwards compatible?
- [ ] **Secrets Set**: New env vars added to production config?
- [ ] **Notification**: Inform stakeholders of scheduled maintenance (if any).
- [ ] **Time**: Don't deploy on Fridays 5 PM!

---

## 2. Deployment Strategy (Blue-Green)
**Goal**: Zero downtime.

### Process
1. **Idle Environment (Green)**: Deploy new version here.
2. **Health Check**: Run smoke tests against Green env.
3. **Traffic Switch**: Update Load Balancer to point to Green.
4. **Monitor**: Watch error rates/latency.
5. **Teardown**: If stable, Blue becomes the new Idle.

### Alternative: Rolling Update (K8s)
- Replace pods one by one.
- K8s handles health checking automatically.

---

## 3. Database Migration Strategy
**Goal**: Data integrity.

- **Phase 1**: Expand Schema (Add columns/tables). Deploy Code.
- **Phase 2**: Migrate Data (Backfill).
- **Phase 3**: Contract Schema (Remove old columns) - *Only after code is stable*.

---

## 4. Rollback Procedures
**Goal**: Fast recovery.

### Triggers for Rollback
- Error Rate > 1% check.
- Latency spike > 200%.
- Core business flow broken.

### Execution
1. **Revert**: Switch Load Balancer back to Blue (Old version).
2. **Code Revert**: Revert commit in Git.
3. **Database**: *Caution*: Down migrations can be destructive. Assess usually.

---

## 5. Post-Deployment Verification
**Goal**: Confirmation.

### Smoke Tests
- [ ] Login/Auth works.
- [ ] Main dashboard loads.
- [ ] Critical path (e.g. checkout) functions.

---

## 6. Communication
**Goal**: Transparency.

- **Start**: "🚀 Deploying v1.2.0 to Production..."
- **Success**: "✅ Deployment successful. Monitoring."
- **Failure**: "❌ Deployment failed. Rolling back. Reason: ..."

### Tools
- GitHub Actions / GitLab CI
- ArgoCD (Kubernetes)
- Datadog / NewRelic (Monitoring)
