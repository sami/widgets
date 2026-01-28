---
name: React Development
description: Best practices and patterns for React development
---

# React Development Skills

## Core Principles
1.  **Component Composition**: Build small, reusable components.
2.  **Unidirectional Data Flow**: Props down, events up.
3.  **Hooks**: Use built-in hooks (`useState`, `useEffect`) and custom hooks for logic reuse.

## File Structure
- `src/components`: Reusable UI components.
- `src/pages` or `src/views`: Page-level components.
- `src/hooks`: Custom hooks.
- `src/context`: React Context definitions.
- `src/utils`: Helper functions.

## Best Practices
- **Functional Components**: Use functional components with hooks.
- **Prop Types**: Use TypeScript or PropTypes for validation.
- **Memoization**: Use `useMemo` and `useCallback` judiciously to prevent unnecessary re-renders.
- **Keys**: Always use unique, stable keys for lists.

## State Management
- Use local state (`useState`) for component-specific data.
- Use Context API for global theming/auth.
- Use libraries like Redux Toolkit, Zustand, or Recoil for complex global state.
