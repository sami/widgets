# Desktop App Context

## Overview
Desktop applications leverage the full power of the OS, offering system integrations, global shortcuts, and file system access that web apps cannot match.

## Core Requirements
1.  **System Integration**: Tray icons, Menubars, Context menus.
2.  **Filesystem Access**: Reading/Writing files directly.
3.  **Auto-Updates**: Seamless background updates (Sparkle/Squirrel).
4.  **Installer**: `.dmg`/`.pkg` (Mac), `.exe`/`.msi` (Windows), `.deb`/`.rpm` (Linux).

## Architecture Decisions
-   **Electron**: (VSCode, Slack). Web tech, huge ecosystem, heavy RAM usage.
-   **Tauri**: (Rust). Uses system webview, tiny binary size, highly secure.
-   **Native**: (Swift/C#). Best performance, no code sharing.

## Logic Constraints
-   **Security**: Sandboxing is critical (Mac App Sandbox).
-   **Window Management**: Handling multi-monitor setups and window state persistence.

## Security Checklist
- [ ] **Code Signing**: Mandatory for OS to run the app without warnings.
- [ ] **Context Isolation**: (Electron) Isolate Renderer from Main process.

## Common Pitfalls
-   Blocking the Main process, causing the UI to freeze (use worker threads).
-   Assuming file paths (Process.cwd() behavior differs between Dev and Prod builds).
