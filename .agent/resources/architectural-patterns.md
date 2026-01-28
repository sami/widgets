# Architectural Patterns Reference

## 1. Structure Patterns

### MVC (Model-View-Controller)
-   **Use Case**: Standard Web Frameworks (Rails, Laravel, Django).
-   **Concept**:
    *   **Model**: Data & Logic.
    *   **View**: HTML/UI.
    *   **Controller**: Handles Request, updates Model, selects View.
-   **Trade-off**: Controllers can become "Fat" if business logic leaks in.

### Clean Architecture (Onion/Hexagonal)
-   **Use Case**: Complex Enterprise Logic, long-lived apps.
-   **Concept**: Dependencies point INWARD. Inner layers (Entities) know nothing of outer layers (DB/Web).
-   **Trade-off**: High boilerplate code. Overkill for CRUD apps.

## 2. Code Patterns

### Repository Pattern
-   **Goal**: Decouple business logic from Data Access.
-   **Example**: `UserService` calls `UserRepository.find()` instead of SQL directly.
-   **Benefit**: Easy to mock DB for unit tests.

### Observer Pattern (Pub/Sub)
-   **Goal**: 1-to-N notification.
-   **Use Case**: Event listeners (Redux, Node EventEmitter).
-   **Benefit**: Decoupling components.

### Factory Pattern
-   **Goal**: Encapsulate object creation logic.
-   **Use Case**: Dependency Injection containers, complex config.
