# API References & Standards

## 1. Documentation Standard: OpenAPI 3.0
All REST APIs are documented using OpenAPI (Swagger).
-   **Editor**: [editor.swagger.io](https://editor.swagger.io/)
-   **Spec File**: Located at `docs/openapi.yaml` in repo.

## 2. Authentication
-   **Scheme**: Bearer Token (JWT).
-   **Header**: `Authorization: Bearer <token>`
-   **Refresh Flow**: `/api/v1/auth/refresh` endpoint to exchange refresh token for new access token.

## 3. Rate Limiting
-   **Standard**: 60 requests per minute per IP for anonymous.
-   **Headers**:
    *   `X-RateLimit-Limit`: 60
    *   `X-RateLimit-Remaining`: 55
    *   `X-RateLimit-Reset`: 1678900000 (Epoch)

## 4. GraphQL (If applicable)
-   **Schema**: `schema.graphql` at root.
-   **Explorer**: GraphiQL enabled on Staging only (`/graphql`).
-   **Safety**: Max query depth: 5.

## 5. Status Codes Reference
-   `200`: Success
-   `201`: Created
-   `204`: No Content (Delete)
-   `400`: Bad Request (Client Error)
-   `401`: Unauthorized (No Token)
-   `403`: Forbidden (Bad Token/Scope)
-   `404`: Not Found
-   `500`: Server Error
