# WordPress Context

## Overview
WordPress powers 40% of the web. It is a PHP environment with a unique event-driven architecture (Hooks).

## Core Requirements
1.  **Hooks**: `add_action` (Do something) vs `add_filter` (Modify data).
2.  **Security**: Sanitize Everything (Inputs), Escape Everything (Outputs). Use Nonces for form verification.
3.  **Database**: Use `$wpdb` class (Prepared statements).

## Architecture Decisions
-   **Theme vs Plugin**: Design goes in Theme. Functionality goes in Plugin.
-   **Custom Post Types**: Don't pollute the `posts` table. Use CPTs.

## Logic Constraints
-   **Global State**: WP relies heavily on globals. Be careful not to conflict.
-   **Prefixing**: Always prefix functions/classes (`myverify_function`) to avoid conflicts.

## Tech Stack Recommendations
-   **Local**: LocalWP or Docker.
-   **Build**: WP-Scripts (Webpack wrapper).

## Common Pitfalls
-   Direct SQL queries without preparation (SQL Injection).
-   Modifying core files (Never do this!).
