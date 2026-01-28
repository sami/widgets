# Database Standards

## Rationale
A well-designed database ensures data integrity, performance, and ease of reporting.

## 1. Schema Design

### Rules
-   **Normalization**: 3NF (Third Normal Form) by default. Denormalize only for proven performance needs.
-   **Primary Keys**: Every table must have a Primary Key (`id`). Use UUIDs for distributed systems, Integers for simple internal apps.
-   **Foreign Keys**: Explicitly define FK constraints to ensure referential integrity.
-   **UTC**: Store all datetimes in UTC.

## 2. Naming Conventions

### Standard
-   **Tables**: Plural, `snake_case`. (e.g., `users`, `order_items`).
-   **Columns**: Singular, `snake_case`. (e.g., `first_name`, `created_at`).
-   **Indexes**: `idx_<table_name>_<column_name>`.
-   **Foreign Keys**: `fk_<table_name>_<ref_table_name>`.

#### Examples
✅ **Correct**: `orders`, `user_id`
❌ **Incorrect**: `Order`, `orderInfo`, `UserId`

## 3. Indexing Strategy
-   **FKs**: Always index foreign keys.
-   **Search**: Index columns frequently used in `WHERE`, `ORDER BY`, `JOIN`.
-   **Selectivity**: Don't index low-cardinality columns (e.g., boolean `is_active`) unless dealing with massive skew.

## 4. Migrations
-   **Versioning**: All changes via migration scripts (Flyway/Liquibase/Sequelize).
-   **Reversibility**: `down()` script is mandatory.
-   **Non-Breaking**: Add column -> Backfill -> Update App -> Drop column.

## Enforcement
-   **PR Review**: DB Specialist must review schema changes.

## Exceptions
-   **Analytics Tables**: Star schema / Snowflake schema permissible.
