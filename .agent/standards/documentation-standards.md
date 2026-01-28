# Documentation Standards

## Rationale
Good documentation reduces onboarding time and allows the team to operate asynchronously.

## 1. README.md
Every repository must have a README.

### Required Sections
1.  **Title & Description**: What does it do?
2.  **Prerequisites**: Languages, Dockers, Keys.
3.  **Installation**: Step-by-step setup.
4.  **Running**: Dev vs Prod commands.
5.  **Testing**: How to run tests.

## 2. API Documentation
-   **Format**: OpenAPI 3.0 (Swagger).
-   **Location**: Hosted at `/docs` or `./openapi.yml`.
-   **Maintenance**: Generated from code preferred (e.g., TSOA, FastAPI).

## 3. Code Documentation
-   **Standard**: JSDoc (JS), Docstrings (Python/PEP257), PHPDoc.
-   **Public Interface**: All public methods/APIs must be documented.
-   **Comments**: Only for complex/non-obvious logic.

#### Example (Python)
```python
def calculate_tax(amount: float) -> float:
    """
    Calculates VAT for the given amount.
    
    Args:
        amount: The subtotal.
        
    Returns:
        The calculated tax amount.
    """
```

## 4. Operational Docs (Runbooks)
-   **Location**: `docs/runbooks/`.
-   **Content**: "What to do if X fails". Steps must be copy-pasteable.

## Enforcement
-   **PR Review**: Reject PRs that introduce new features without docs.

## Exceptions
-   **Self-documenting code**: Simple getters/setters don't need docstrings.
