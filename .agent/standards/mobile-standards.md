# Mobile Standards

## Rationale
Mobile environments are constrained by battery, network, and screen real estate.

## 1. Performance
-   **FPS**: Targeting 60fps (16ms per frame). Avoid blocking the UI thread.
-   **Startup Time**: < 2 seconds to interactive.
-   **Memory**: Avoiding leaks (cleanup listeners/subscriptions).

## 2. Network & Offline
-   **Offline-First**: App should open and show cached content without signal.
-   **Retry Logic**: Exponential backoff for failed requests.
-   **Data Sync**: Background sync when network returns.

## 3. UI/UX Consistency
-   **Touch Targets**: Minimum 44x44pt (iOS) / 48x48dp (Android).
-   **Feedback**: Immediate visual feedback on touch.
-   **Loading**: Skeleton screens over generic spinners.

## 4. Testing
-   **Real Devices**: Must test on low-end devices, not just Simulators.
-   **Network Conditioning**: Test on 3G / High Latency profiles.

## Enforcement
-   **Profiling**: Monthly performance review using Profiler tools.

## Exceptions
-   **Utilities**: Internal tool apps may ignore offline requirements.
