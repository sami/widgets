---
name: Next.js
description: The React Framework for the Web
---

# Next.js Skill

## Best Practices
1.  **App Router**: Use the `app/` directory (Next.js 13+) over `pages/`.
2.  **Server Components**: Default to Server Components. Add `'use client'` only when interactivity (useState/useEffect) is needed.
3.  **Data Fetching**: Fetch data directly in Server Components using `async/await`.
4.  **Optimization**: Use `<Image>` component for automatic optimization. Use `<Link>` for client-side nav.

## Common Pitfalls
*   **Hydration Errors**: Mismatch between Server HTML and Client HTML (e.g., using `window` during render).
*   **Clobbering Cash**: Not understanding Next.js aggressive caching. Use `revalidatePath` or `dynamic = 'force-dynamic'` when needed.

## References
*   [Next.js Documentation](https://nextjs.org/docs)
