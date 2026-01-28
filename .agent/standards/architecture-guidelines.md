# Architecture Guidelines

## Rationale
A well-defined architecture allows the system to scale in complexity without collapsing under its own weight. It promotes testability and maintainability.

## 1. Top-Level Patterns

### Layered Architecture (Standard)
For most backend services:
1.  **Presentation Layer** (Controllers/Routes): Handles HTTP, validation, parsing.
2.  **Service Layer** (Business Logic): The meaty part. Orchestrates data.
3.  **Data Layer** (Repositories/Models): Direct DB access.

### Modularity
-   **High Cohesion**: Things that change together stay together.
-   **Low Coupling**: Classes should depend on interfaces, not concrete implementations (Dependency Inversion).

## 2. S.O.L.I.D. Principles

### Single Responsibility (SRP)
-   A class should have one, and only one, reason to change.
-   *Example*: A `User` class should not handle `exportToCSV()`. Make a `UserExporter`.

### Open/Closed (OCP)
-   Open for extension, closed for modification.
-   *Example*: Use strategies/polymorphism instead of giant `switch` statements.

### Dependency Inversion (DIP)
-   Depend on abstractions.
-   *Enforcement*: Use Dependency Injection (DI) containers.

## 3. Component Communication
-   **Sync**: Direct calls for critical paths within same service.
-   **Async**: Events (Pub/Sub) for decoupling side effects (e.g., Send Email after Signup).

## Enforcement
-   **Code Review**: Flag violations of SRP or layered boundaries (e.g., SQL queries in Controllers).
-   **ArchUnit**: (Java/Kotlin) Automated tests for architecture constraints.

## Exceptions
-   **Scripts/One-offs**: Can bypass layers for simplicity.
-   **Prototypes**: Speed over structure.
