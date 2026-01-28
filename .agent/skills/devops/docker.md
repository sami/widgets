---
name: Docker
description: Containerization basics and best practices
---

# Docker Skills

## Dockerfile Best Practices
1.  **Base Image**: Use specific tags (e.g., `node:18-alpine` instead of `node:latest`).
2.  **Layers**: Order commands from least-changing to most-changing to leverage cache.
3.  **Multi-stage Builds**: Separate build environment from runtime environment to keep images small.
4.  **User**: Run as non-root user for security.

## Docker Compose
- Use `docker-compose.yml` for local development orchestration.
- Define services, networks, and volumes explicitly.

## Commands
- `docker build -t name .`
- `docker run -p 80:80 name`
- `docker-compose up -d`
- `docker system prune` (Cleanup)
