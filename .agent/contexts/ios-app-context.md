# iOS App Context

## Overview
Building for the Apple ecosystem requires adherence to strict Human Interface Guidelines (HIG) and using Xcode tooling.

## Core Requirements
1.  **Architecture**: MVVM or TCA (The Composable Architecture) are dominant modern patterns.
2.  **UI**: SwiftUI (Modern, declarative) vs UIKit (Legacy, imperative).
3.  **Distribution**: App Store, TestFlight, Ad-Hoc (Enterprise).

## Architecture Decisions
-   **SwiftUI vs UIKit**: Start with SwiftUI for new apps (iOS 15+). Drop down to UIKit only if needing complex component wrapping.
-   **Concurrency**: Use Swift Structured Concurrency (`async/await`) instead of completion handlers/Combine.

## Logic Constraints
-   **Sandboxing**: Storage is isolated to the App Container.
-   **Privacy**: Info.plist must declare "Privacy - Use Description" for all permissions.
-   **Background**: High restrictions. Use Background Tasks framework.

## Tech Stack Recommendations
-   **Language**: Swift (5.5+).
-   **CI/CD**: Fastlane + GitHub Actions.
-   **Dependency Manager**: Swift Package Manager (SPM). Avoid CocoaPods for new projects.

## Common Pitfalls
-   Blocking the Main Actor.
-   Ignoring Accessibility (VoiceOver).
-   App Store Rejection: Review guidelines carefully (e.g., In-App Purchase rules).
