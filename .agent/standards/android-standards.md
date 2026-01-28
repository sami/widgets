# Android Standards

## Rationale
Adhering to Google's modern Android development recommendations ensures longevity and stability.

## 1. Language & Frameworks
-   **Kotlin**: Default for all new code. Use `val` (immutable) over `var`.
-   **Compose**: Use Jetpack Compose for UI. Avoid Fragments where possible in pure Compose apps.
-   **Coroutines**: Use Flow/Coroutines for async. `viewModelScope` for lifecycle awareness.

## 2. Naming Conventions
-   **Classes**: `PascalCase`.
-   **Resources**: `snake_case` (e.g., `activity_main.xml`, `ic_launcher`).
-   **Composables**: `PascalCase` (Noun-like), e.g., `PrimaryButton()`.

## 3. Architecture
-   **Pattern**: MVVM (Model-View-ViewModel).
-   **DI**: Hilt is the standard. Avoid manual factory injection.
-   **Single Activity**: One Activity per app, navigation via Composables/Fragments.

## 4. File Organization
-   **Package by Feature**: `com.app.feature.login` instead of `com.app.ui.adapters`.

## Enforcement
-   **Ktlint**: Automated style checker.
-   **Detekt**: Static analysis.

## Exceptions
-   **Games**: Android Views/Canvas or Unity usage exempts Compose rules.
