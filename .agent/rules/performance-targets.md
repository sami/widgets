# Performance Targets Rules

## Rationale
Performance regressions directly impact user retention. Hard limits prevent "death by a thousand cuts".

## 1. Web Frontend Budgets
-   **LCP (Largest Contentful Paint)**: MUST be < 2.5s on 4G Mobile.
-   **Javascript Bundle**: Initial chunk MUST be < 150KB (gzipped).
-   **First Load JS**: Total JS loaded initially MUST be < 300KB.

## 2. API Latency Targets
-   **P95 Read**: MUST be < 150ms.
-   **P95 Write**: MUST be < 300ms.
-   **Timeout**: Application MUST default to 5s timeout for external calls.

## 3. Resource Limits
-   **Database**: Queries MUST NOT return > 1000 rows without pagination.
-   **Memory**: Node.js process MUST NOT exceed 1GB (default container limit).

## Enforcement
-   **Lighthouse CI**: Fails build if scores drop.
-   **Bundlewatch**: Fails build if size > limit.
-   **Load Testing**: Weekly k6 runs against staging.
