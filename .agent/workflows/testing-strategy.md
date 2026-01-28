---
description: Comprehensive testing strategy and execution workflow
---

# Testing Strategy Workflow

## 1. Testing Pyramid
**Goal**: Balanced testing portfolio.

1. **Unit Tests (70%)**: Fast, isolated.
   - Target: Individual functions, classes, utils.
   - Mock all external dependencies.
2. **Integration Tests (20%)**: Slower, connected.
   - Target: API endpoints, Component + Hooks, DB queries.
   - Use test database/containers.
3. **E2E Tests (10%)**: Slow, realistic.
   - Target: Critical User Journeys (Login -> Checkout).
   - Run in browser/device simulator.

---

## 2. Coverage Targets
**Goal**: Quality metrics.

- **Lines**: > 80%
- **Branches**: > 70%
- **Critical Paths**: 100% E2E coverage.

*Note*: High coverage != zero bugs. Focus on meaningful assertions.

---

## 3. Test Data Management
**Goal**: Deterministic tests.

- **Fixtures**: Static JSON files for unit tests.
- **Factories**: Dynamic data generators (e.g. `faker`) for integration.
- **Seeding**: Reset DB to known state before E2E runs.
- **Cleanup**: Always tear down created data found in integration/E2E.

---

## 4. CI/CD Integration
**Goal**: Automatic gatekeeping.

### Workflow
1. **Pre-Commit**: Linting + Unit Tests (Staged files).
2. **Pull Request**: 
   - Run Unit & Integration tests.
   - Blocking: Must pass to merge.
3. **Nightly**:
   - Run full E2E suite (if too slow for PR).
   - Run Performance/Load tests.

---

## 5. Performance Testing workflow
**Goal**: Capacity planning.

- **Baseline**: Establish current req/sec and latency.
- **Load Testing**: Simulate expected traffic.
- **Stress Testing**: Find the breaking point.
- **Tools**: k6, JMeter, Artillery.

---

## 6. Bug Reproduction via Tests
**Goal**: Regression prevention.

1. Found a bug?
2. Write a red (failing) test case that mimics the bug.
3. Fix code.
4. Test goes green.
5. Commit test with fix.
