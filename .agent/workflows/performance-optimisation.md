---
description: Workflow for analyzing and improving system performance
---

# Performance Optimisation Workflow

## 1. Benchmarking & Baseline
**Goal**: Measure before fixing. "You can't improve what you don't measure."

- **Establish Baseline**:
  - Request Latency (p50, p95, p99).
  - Throughput (RPS).
  - Resource Usage (CPU, RAM).
- **Tools**: Apache Benchmark (ab), k6, Lighthouse (Frontend).

---

## 2. Profiling & Bottleneck Identification
**Goal**: Find the slow part.

### Layers
1. **Frontend**:
   - Chrome DevTools (Performance Tab).
   - Check Bundle Size, LCP (Largest Contentful Paint), CLS.
2. **Backend**:
   - APM (NewRelic/Datadog).
   - Flame graphs (CPU profiling).
3. **Database**:
   - Slow Query Log.
   - Updates without indexes? Full table scans?

---

## 3. Optimisation Strategies
**Goal**: Fix the bottleneck.

### Database
- Add Indexes.
- Optimize Queries (Select only needed columns).
- Cache results (Redis).

### Backend
- Parallelize independent tasks (Async/Await).
- Computational caching (Memoization).
- Upgrade infrastructure (Vertical scaling).
- Scale out (Horizontal scaling).

### Frontend
- Code splitting / Lazy loading.
- Image optimization (WebP, proper sizing).
- CDN caching for static assets.

---

## 4. Verification (Load Testing)
**Goal**: Verify fix works under pressure.

1. Re-run benchmark scripts.
2. Compare against baseline.
3. Ensure no regression in functional correctness.

---

## 5. Monitoring & Alerting Setup
**Goal**: Sustain performance.

- **Set SLOs (Service Level Objectives)**: e.g., "API Latency < 200ms for 99% of requests".
- **Set Alerts**: Notify team if SLO is breached.
- **Dashboard**: Keep key metrics visible.
