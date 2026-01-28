# Performance Standards

## Rationale
Performance is a feature. Slow applications lose users and revenue. Benchmarks give us a definition of "done".

## 1. Web Frontend Budgets
-   **LCP (Largest Contentful Paint)**: < 2.5s.
-   **FID (First Input Delay)**: < 100ms.
-   **Bundle Size**: Initial JS bundle < 200KB (gzipped). Split code aggressively.

## 2. Backend Targets
-   **API Latency**:
    -   Read (p95): < 100ms.
    -   Write (p95): < 200ms.
-   **Throughput**: Must handle sustained 100 RPS per instance (baseline).

## 3. Database
-   **Query Time**: Any query taking > 100ms is "Slow".
-   **N+1 Queries**: Strictly forbidden. Use eager loading.

## 4. Mobile
-   **Cold Start**: < 2 seconds.
-   **Frame Rate**: No drops below 60fps allowed during scroll.

## Enforcement
-   **CI**: Lighthouse CI / bundle-size-limit checks.
-   **Monitoring**: Alerts triggered in Datadog/NewRelic if SLAs breached.

## Exceptions
-   **Internal Admin Tools**: Can relax bundle constraints.
-   **Batch Jobs**: Latency targets don't apply, throughput does.
