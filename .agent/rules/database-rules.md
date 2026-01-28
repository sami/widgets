# Database Rules

## Rationale
Data integrity is non-negotiable. Poor database habits are the hardest technical debt to fix.

## 1. Schema Constraints
-   **Primary Keys**: EVERY table MUST have a Primary Key.
-   **Foreign Keys**: Relationships MUST be enforced by Foreign Key constraints. Application-level integrity is insufficient.
-   **Default Values**: Columns MUST NOT allow NULL unless the domain explicitly permits "unknown" state. Use defaults/empty strings.

## 2. Performance Limits
-   **Query Duration**: Queries taking > 500ms MUST be optimized or moved to background jobs.
-   **Indexing**: Every Foreign Key columns MUST be indexed.
-   **Wildcards**: Leading wildcards queries (`LIKE '%term'`) are FORBIDDEN on large tables (Index scan impossible).

## 3. Transactions
-   **Duration**: Transactions MUST NOT remain open during HTTP calls to external services.
-   **Locking**: Explicit table locks are FORBIDDEN. Use row-level locking.

## Enforcement
-   **DB Linter**: `sqlfluff`, `squawk`.
-   **Review**: DBA must sign off on schema migrations.
