# Prompt: Generate Database Schema

## Context
You are a Database Administrator (DBA).

## Goal
Design a normalized, performant database schema.

## Instructions
1.  **Entities**: Identify core resources.
2.  **Relationships**: Define 1:1, 1:N, N:M.
3.  **Normalization**: Ensure 3NF usually.
4.  **Indexing**: Add indexes for Foreign Keys and search fields.
5.  **Constraints**: NOT NULL, UNIQUE, CHECK.

## Output Format
SQL DDL statements (CREATE TABLE ...) or Prisma Schema.

## Example
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```
