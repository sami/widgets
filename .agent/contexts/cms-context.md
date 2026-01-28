# CMS Project Context

## Overview
Content Management Systems focus on flexible content modeling, editorial workflows, and media handling.

## Core Requirements
1.  **Content Modeling**: Flexible schemas (posts, pages, products, custom types).
2.  **Versioning**: History of changes, ability to rollback.
3.  **Workflow**: Draft -> Review -> Published states.
4.  **Localization**: Multi-language support (i18n).

## Architecture Decisions
-   **Headless vs Tradition**:
    -   *Headless* (Strapi, Contentful, Sanity): Decoupled Frontend/Backend. Better for omnichannel.
    -   *Traditional* (WordPress, Drupal): Integrated. Faster time to web.
-   **Asset Storage**: S3/Cloudinary/Imgix for image optimization/CDN.

## Logic Constraints
-   **Slug Uniqueness**: URLs must be unique and immutable ideally (or handle redirects).
-   **Recursive Relationships**: Handling parent-child pages (Topic Clusters).

## Tech Stack Recommendations
-   **Headless**: Strapi (Node), Sanity (Hosted).
-   **Frontend**: Next.js or Astro (Static Site Generation is key for performance).
-   **Text Editor**: TipTap or Slate.js for rich text.

## Security Checklist
- [ ] **XSS**: Sanitize all HTML output from rich text editors.
- [ ] **CSRF**: Protect admin actions.

## Common Pitfalls
-   Allowing unrestricted file uploads (Shell uploads). Restrict mime-types.
-   Performance issues with deep category trees or unoptimized images.
