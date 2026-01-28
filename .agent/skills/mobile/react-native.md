---
name: React Native
description: Cross-platform mobile development
---

# React Native Skills

## Core Components
- Use `View`, `Text`, `Image`, `ScrollView`, `FlatList`.
- Avoid HTML tags (`div`, `p`, etc.).

## Styling
- `StyleSheet.create` for performance.
- Flexbox works slightly differently (default `flexDirection: 'column'`).

## Platform Specifics
- Use `Platform.OS` or `.ios.js` / `.android.js` extensions.
- Test on both simulators regularly.

## Navigation
- **React Navigation**: Standard library.
  - `Stack`
  - `Tab`
  - `Drawer`

## Performance
- **FlatList**: Use for long lists. Implement `getItemLayout` and `keyExtractor`.
- **Images**: Cache remote images. Use optimized formats.
- **Re-renders**: Fix unnecessary renders explicitly.

## Expo vs CLI
- Default to **Expo** for rapid development unless native modules are strictly required that Expo doesn't support (rare nowadays).
