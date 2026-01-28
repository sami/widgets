# Desktop Standards

## Rationale
Desktop apps face different expectations than web apps: OS integration, offline capability, and higher performance.

## 1. User Experience
-   **Shortcuts**: Support standard OS shortcuts (Ctrl/Cmd+C, Ctrl/Cmd+S).
-   **Menus**: Native Menu Bar integration.
-   **Context Menus**: Right-click support on actionable items.

## 2. File System
-   **User Data**: Do NOT store in app directory. Use:
    -   Windows: `%APPDATA%`
    -   Mac: `~/Library/Application Support/`
    -   Linux: `~/.config/`
-   **Paths**: Use `path.join()` or equivalent. Never hardcode separators (`/` or `\`).

## 3. Updates & Installation
-   **Silent Updates**: Updates should download in background.
-   **Signing**: Binaries must be signed (Apple Notarization / Authenticode) to prevent OS warnings.

## 4. Security
-   **Dependencies**: Lock down webviews (disable Node integration if using Electron).
-   **Permissions**: Request file/camera access only when needed.

## Enforcement
-   **Review**: OS-specific review checklist before release.

## Exceptions
-   **CLI Tools**: UX standards differ for Command Line Interfaces.
