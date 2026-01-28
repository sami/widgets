---
name: Web Accessibility (A11y)
description: Ensuring web content is accessible to everyone
---

# Web Accessibility Skills

## Standards
Follow **WCAG (Web Content Accessibility Guidelines)** 2.1 Level AA.

## Semantic HTML
- Use `<button>` for actions, `<a>` for navigation.
- Use `<header>`, `<main>`, `<footer>`, `<nav>`, `<aside>` for structure.
- Maintain correct heading hierarchy (`h1` -> `h2` -> `h3`).

## Keyboard Navigation
- Ensure all interactive elements are focusable.
- Visible focus indicators (don't remove `outline` without replacement).
- Logical tab order.

## ARIA (Accessible Rich Internet Applications)
- **Rule #1**: Don't use ARIA if HTML5 elements suffice.
- Use `aria-label` or `aria-labelledby` for elements without visible text.
- Use `role` attributes sparingly.

## Visuals
- **Contrast**: Ensure sufficient color contrast (at least 4.5:1 for text).
- **Alt Text**: Provide descriptive alt text for images.
- **Motion**: Respect `prefers-reduced-motion`.
