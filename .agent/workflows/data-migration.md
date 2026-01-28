---
description: Workflow for safe database schema changes and data migration
---

# Data Migration Workflow

## 1. Migration Planning
**Goal**: Assessing risk and scope.

- [ ] **Scope**: What data is changing? Volume?
- [ ] **Impact**: Will it lock tables? (Avoid locking large tables in peak hours).
- [ ] **Dependencies**: Which services use this data?
- [ ] **Timeline**: Maintenance window required?

---

## 2. Backup & Rollback Strategy
**Goal**: Safety net.

- **Backup**: Take a snapshot immediately before migration.
- **Rollback Script**: Always write the `down` migration script.
- **Test Rollback**: Verify the rollback script works in Staging.

---

## 3. Zero-Downtime Techniques
**Goal**: Availability.

### Pattern: Expand and Contract
1. **Expand**: Add new column `new_col` (nullable).
2. **Double Write**: Update app to write to `old_col` AND `new_col`.
3. **Backfill**: Run script to copy data `old` -> `new` in background batches.
4. **Verify**: Check data consistency.
5. **Switch Read**: Update app to read from `new_col`.
6. **Contract**: Remove `old_col` (after backup period).

---

## 4. Staging Verification
**Goal**: Dry run.

- Import a subset of production anonymized data to Staging.
- Run the migration.
- Measure execution time.
- Verify application functionality post-migration.

---

## 5. Execution (Cutover)
**Goal**: Production deployment.

1. **Announce**: Notify team "Migration Starting".
2. **Deploy Code**: (If strictly additive).
3. **Run Migration**: Execute via CI or Admin shell.
4. **Monitor**: Watch DB CPU, Memory, Locks.

---

## 6. Post-Migration Verification
**Goal**: Data integrity.

- **Row Counts**: Do match expected?
- **Sampling**: Spot check random records.
- **Logs**: Check for SQL errors in application logs.

### Success Criteria
- [ ] Schema updated successfully.
- [ ] Data integrity maintained.
- [ ] No application downtime (or within window).
