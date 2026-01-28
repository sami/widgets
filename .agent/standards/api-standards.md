# API Standards

## Rationale
Consistent APIs are easier to consume, debug, and maintain.

## 1. REST Principles

### Resources
-   **Nouns, not Verbs**: `/users` not `/getUsers`.
-   **Plural**: Use plural nouns. `/items/{id}`.

### HTTP Methods
-   `GET`: Read (Safe, Idempotent).
-   `POST`: Create (Not Idempotent).
-   `PUT`: Replace/Update (Idempotent).
-   `PATCH`: Partial Update.
-   `DELETE`: Remove (Idempotent).

## 2. Data Formats

### Request/Response
-   **Content-Type**: `application/json`.
-   **Casing**: `snake_case` (preferred) or `camelCase` (consistent per project).

### Error Responses
Standard envelope:
```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "Email is required.",
    "details": []
  }
}
```

## 3. Status Codes
-   `200`: OK.
-   `201`: Created (Return `Location` header).
-   `204`: No Content (Delete success).
-   `400`: Bad Request (Validation).
-   `401`: Unauthorized (No numeric token).
-   `403`: Forbidden (Has token, but no permission).
-   `404`: Not Found.
-   `500`: Internal Server Error.

## 4. Versioning
-   **URI Versioning**: `/v1/users`.
-   **Breaking Changes**: Require new version. Non-breaking (adding field) do not.

## Enforcement
-   **Linting**: Use Spectral to lint OpenAPI specs.

## Exceptions
-   **GraphQL**: Follows graph standard, single endpoint.
