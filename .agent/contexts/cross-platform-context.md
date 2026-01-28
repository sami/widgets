# Cross-Platform App Context

## Overview
React Native and Flutter allow building for iOS and Android from a single codebase, trading off some native performance/features for velocity.

## Core Requirements
1.  **Code Sharing**: Aim for > 90% shared logic. Separate files (`.ios.js`, `.android.js`) only when necessary.
2.  **Native Modules**: Interface with platform features (Bluetooth, Native SDKs) via Bridges/Channels.
3.  **OTA Updates**: CodePush (React Native) allows updating logic without App Store review.

## Architecture Decisions
-   **React Native**: JavaScript/TypeScript. Uses "Bridge" (or JSI - New Architecture).
-   **Flutter**: Dart. Uses Skia engine to draw pixels directly.

## Logic Constraints
-   **Performance**: Avoid heavy computations on the JS thread (RN).
-   **Upgrades**: Dealing with native dependency conflicts is the hardest part.

## Tech Stack Recommendations
-   **React Native**: Expo (Managed workflow) is recommended for 95% of apps today.
-   **State**: React Query + Zustand (RN), Riverpod/Bloc (Flutter).
-   **Nav**: React Navigation (RN), GoRouter (Flutter).

## Common Pitfalls
-   "Uncanny Valley": UI that looks almost native but feels slightly "off".
-   Dependencies: Relying on abandoned community libraries for critical native features.
