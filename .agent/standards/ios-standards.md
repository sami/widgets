# iOS Standards

## Rationale
Consistency with Apple's ecosystem makes maintenance easier and adoption of new features smoother.

## 1. Language & Frameworks
-   **Swift**: Use modern features (Guard statements, Enums with associated values).
-   **SwiftUI**: Preferred for new UI. Use ViewModels (`ObservableObject`) for state.
-   **UIKit**: Use Programmatic UI (constraints) over Storyboards/XIBs for teamwork (merge conflicts).

## 2. Naming Conventions
-   **Classes/Structs**: `PascalCase`.
-   **Variables/Functions**: `camelCase`.
-   **Protocols**: Noun (e.g., `Delegate`) or `able` suffix (`Codable`).

## 3. Memory Management
-   **ARC**: Be mindful of Retain Cycles (Strong Reference Cycles).
-   **Closure Capture**: Always use `[weak self]` in closures calling self.

#### Example
✅ **Correct**:
```swift
network.fetch { [weak self] result in
    self?.handle(result)
}
```

## 4. File Organization
-   Group by Feature (e.g., `Features/Login/View`, `Features/Login/ViewModel`).
-   Not by Type (`Views/`, `ViewModels/`).

## Enforcement
-   **SwiftLint**: Pre-commit hook to enforce style.

## Exceptions
-   **Legacy Code**: Obj-C codebases follow legacy standards.
