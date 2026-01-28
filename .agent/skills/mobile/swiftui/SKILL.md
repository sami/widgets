---
name: SwiftUI
description: Build apps across all Apple platforms with less code
---

# SwiftUI Skill

## Best Practices
1.  **State Management**: Understand `@State` (local), `@Binding` (passed), and `@EnvironmentObject` (global).
2.  **Views**: Keep views small and reusable. Break complex views into smaller `struct`s.
3.  **Modifiers**: Order matters. `.padding().background(color)` != `.background(color).padding()`.

## Common Pitfalls
*   **Body Property logic**: The `body` property is recomputed often. Do NOT put heavy logic or expensive allocs there.
*   **Navigation**: Mixing NavigationStack with deprecated NavigationView.

## References
*   [SwiftUI Documentation](https://developer.apple.com/xcode/swiftui/)
