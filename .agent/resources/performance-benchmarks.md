# Performance Benchmarks

## 1. Web Performance (Core Web Vitals)
Reference: [web.dev](https://web.dev/vitals/)
-   **LCP (Largest Contentful Paint)**: < 2.5s (Good), < 4.0s (Needs Improvement).
-   **FID (First Input Delay)**: < 100ms.
-   **CLS (Cumulative Layout Shift)**: < 0.1.

## 2. API / Backend
-   **Response Time**:
    *   Cached Read: < 50ms.
    *   DB Read: < 100ms.
    *   Complex Write: < 500ms.
-   **Throughput**: Baseline 100 req/sec per container (Node/Python).

## 3. Mobile
-   **Startup**: < 2s to interactive.
-   **Frame Rate**: 60fps (16ms frame budget). Dropframes are noticeable.
-   **App Size**:
    *   iOS: < 100MB (Over-the-air limit is higher now but good target).
    *   Android: < 50MB download size preferred.

## Tools
-   **Web**: Lighthouse, WebPageTest.
-   **API**: k6, Apache Benchmark (ab).
-   **Database**: `EXPLAIN ANALYZE` (SQL).
