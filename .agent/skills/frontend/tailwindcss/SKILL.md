---
name: Tailwind CSS
description: A utility-first CSS framework
---

# Tailwind CSS Skill

## Best Practices
1.  **Utility First**: Use classes directly in HTML (`flex items-center`).
2.  **Configuration**: Define colors/fonts in `tailwind.config.js`, not arbitrary values (`text-[#123456]`).
3.  **Components**: Extract repeated patterns to React components, NOT `@apply`.
    *   *Bad*: `.btn { @apply px-4 py-2 ... }`
    *   *Good*: `<Button variant="primary" />`

## Common Pitfalls
*   **Arbitrary Values**: Overusing `[]` syntax defeats consistency.
*   **Specificity Wars**: Mixing Tailwind with SCSS/Modules often breaks. Stick to one.

## References
*   [Tailwind Docs](https://tailwindcss.com/)
