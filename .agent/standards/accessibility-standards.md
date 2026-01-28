# Accessibility Standards

## Rationale
The web must be accessible to everyone, including people with disabilities. It is also often a legal requirement (ADA, GDPR).

## 1. Compliance Level
-   **Target**: WCAG 2.1 Level AA.

## 2. Core Requirements
-   **Semantic HTML**: Use `<button>`, `<nav>`, `<main>` correctly. Don't make `div`s clickable without aria.
-   **Keyboard Nav**: Everything must be usable with ONLY a keyboard (Tab, Enter, Space). Visible focus states are mandatory.
-   **Color Contrast**: Text must have 4.5:1 contrast against background.
-   **Alt Text**: All meaningful images need `alt` tags. Decorative ones need `alt=""`.

## 3. Forms
-   **Labels**: Every input must have an associated label (`for` attribute). Placeholders are NOT labels.
-   **Errors**: Error messages must be linked to inputs via `aria-describedby`.

## 4. Testing
-   **Automated**: `axe-core` scan in CI.
-   **Manual**: Navigate flow with keyboard only. Use a Screen Reader (VoiceOver/NVDA) once per sprint.

## Enforcement
-   **Linting**: `eslint-plugin-jsx-a11y`.

## Exceptions
-   **Maps/Canvas**: Inherently hard, provide alternative text lists.
