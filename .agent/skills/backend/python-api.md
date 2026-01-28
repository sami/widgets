---
name: Python API Development
description: Building robust APIs with Python
---

# Python API Skills

## Frameworks
- **FastAPI**: Modern, fast, type-safe (Pydantic). Good for most new projects.
- **Django REST Framework (DRF)**: Batteries-included, great with ORM.
- **Flask**: Lightweight, flexible.

## Project Structure (FastAPI example)
```text
app/
├── routers/    # API interactions
├── models/     # Database models
├── schemas/    # Pydantic models (IO)
├── crud/       # DB operations
├── core/       # Config, security
└── main.py     # Entry point
```

## Best Practices
1.  **Type Hinting**: Use strict type hints for better tooling and validation.
2.  **Dependency Injection**: Use DI for DB sessions and services.
3.  **Async/Await**: Utilize async view handlers for I/O bound operations.
4.  **Error Handling**: Return structured JSON error responses (e.g., HTTP 4xx, 5xx).

## Testing
- Use `pytest` for testing.
- Use `httpx` or `TestClient` for API integration tests.
