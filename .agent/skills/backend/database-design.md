---
name: Database Design
description: Modeling data effectively
---

# Database Design Skills

## Relational (SQL)
PostgreSQL, MySQL, SQLite.

- **Normalization**: Reduce redundancy (3NF is usually sufficient).
- **Foreign Keys**: Enforce referential integrity.
- **Indexes**: Add indexes on columns frequently used in `WHERE`, `JOIN`, and `ORDER BY`.
- **Migrations**: Always verify schema changes via migration scripts (Alembic, Prisma, etc.).

## NoSQL
MongoDB, DynamoDB, Redis.

- **Denormalization**: Optimize for read performance.
- **Document Structure**: Embed related data if accessed together frequently.

## General Best Practices
- **Naming**: Use singular or plural table names consistently (snake_case).
- **Primary Keys**: Use UUIDs or auto-increment integers.
- **Timestamps**: `created_at` and `updated_at` on almost every table.
- **Soft Delete**: Consider a `deleted_at` column instead of hard deletes.
