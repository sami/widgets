---
name: Docker
description: Accelerate how you build, share, and run applications
---

# Docker Skill

## Best Practices
1.  **Multi-Stage Builds**: Use a builder stage to compile, and a runner stage (Alpine/Slim) for the final image to reduce size.
2.  **Caching**: Order usage matters. Copy `package.json` and install deps BEFORE copying source code to leverage layer caching.
3.  **User**: Don't run as `root`. Create a dedicated user in the Dockerfile.

## Common Pitfalls
*   **Secrets**: Baking secrets/env vars into the image. Use Env Vars at runtime.
*   **Latest Tag**: Pin versions (`node:18`, not `node:latest`) to avoid breaking changes.

## References
*   [Dockerfile Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
