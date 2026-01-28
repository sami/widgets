# Android App Context

## Overview
Android development involves handling a massive variety of devices (Fragmentation) and complying with Material Design guidelines.

## Core Requirements
1.  **UI**: Jetpack Compose (Modern) vs XML Layouts (Legacy).
2.  **Navigation**: Jetpack Navigation component.
3.  **Backwards Compatibility**: Supporting older SDK versions.

## Architecture Decisions
-   **Architecture**: MVVM with Clean Architecture is the standard.
-   **Dependency Injection**: Hilt (Standard) or Koin.
-   **Asynchrony**: Kotlin Coroutines & Flow.

## Logic Constraints
-   **Fragmentation**: Test on various screen sizes and API levels.
-   **Lifecycle**: Activities and Fragments are destroyed on rotation. Use `ViewModel` to persist state.
-   **Permissions**: Handle runtime permissions gracefully.

## Tech Stack Recommendations
-   **Language**: Kotlin (Java is legacy).
-   **Libraries**: Retrofit (Network), Room (DB), Coil (Images).
-   **CI/CD**: Fastlane + Gradle Play Publisher.

## Common Pitfalls
-   Memory Leaks: Holding Context references (Activity/View) in long-lived objects.
-   Not handling "Don't Keep Activities" developer setting causing crashes.
