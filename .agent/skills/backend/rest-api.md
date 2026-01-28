---
name: REST API Design
description: Designing clean and standard HTTP APIs
---

# REST API Skills

## Resources
- Noun-based endpoints: `/users`, `/products`.
- Avoid verbs in URLs: `/create-user` (Bad) -> `POST /users` (Good).

## Methods
- `GET`: Retrieve data.
- `POST`: Create new resource.
- `PUT`: Full update of a resource.
- `PATCH`: Partial update.
- `DELETE`: Remove resource.

## Status Codes
- `200 OK`: Success (GET, PUT, PATCH).
- `201 Created`: Resource created (POST).
- `204 No Content`: Successful request, no body returned (DELETE).
- `400 Bad Request`: Client error (validation).
- `401 Unauthorized`: Not authenticated.
- `403 Forbidden`: Authenticated but not allowed.
- `404 Not Found`: Resource doesn't exist.
- `500 Internal Server Error`: Server blew up.

## Versioning
- Use URI versioning: `/api/v1/users`.

## Pagination
- Cursor-based (better for performance) or Offset-based.
- Return metadata: `page`, `limit`, `total_count`.
