---
name: Node.js & Express
description: Server-side JavaScript development
---

# Node.js & Express Skills

## Setup
- **TypeScript**: Highly recommended for strict typing.
- **Nodemon** / **tsx**: For hot-reloading during dev.

## Architecture Patterns
- **MVC (Model-View-Controller)**: Classic pattern.
- **Review/Service/Layer**: Separation of concerns logic.
  - `Controller`: Handles HTTP request/response.
  - `Service`: Business logic.
  - `Repository`: Data access layer.

## Middleware
- Use middleware for:
  - Auth checks.
  - Request logging (Morgan/Pino).
  - Body parsing.
  - Error handling (must have 4 args: `err, req, res, next`).

## Security
- **Helmet**: Set secure HTTP headers.
- **Rate Limiting**: Prevent abuse.
- **Input Validation**: Use libraries like Zod or Joi.
- **Sanitization**: Prevent SQL Injection/XSS.
