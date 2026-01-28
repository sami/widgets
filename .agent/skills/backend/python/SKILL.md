---
name: Python
description: A language that lets you work quickly and integrate systems more effectively
---

# Python Skill

## Best Practices
1.  **PEP 8**: Follow standard style guide (Snake case for vars, 4 spaces indent).
2.  **Type Hints**: Use `typing` module (List, Optional, etc.) for robust code.
3.  **Virtual Envs**: Always use `venv` or `poetry`. Never install global pip packages.
4.  **Exceptions**: Catch specific exceptions (`ValueError`), never bare `except:`.

## Common Pitfalls
*   **Mutable Defaults**: `def func(list=[]):` causes bugs. Use `None` instead.
*   **GIL**: Threads don't speed up CPU tasks. Use `multiprocessing`.

## References
*   [Python Docs](https://docs.python.org/3/)
