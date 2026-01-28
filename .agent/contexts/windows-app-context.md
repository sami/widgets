# Windows App Context

## Overview
Windows apps need to support a vast array of hardware configurations and input methods (Touch, Mouse, Pen).

## Core Requirements
1.  **UI Framework**:
    -   *WinUI 3*: The modern standard (Windows App SDK).
    -   *WPF*: Mature, stable, huge enterprise usage.
    -   *WinForms*: Legacy, maintenance only.
2.  **Distribution**: MSIX containers or classic MSI installers. Microsoft Store.
3.  **Theming**: Light/Dark mode and High Contrast mode support.

## Architecture Decisions
-   **Single Instance**: Handling "Open File" events when app is already running.
-   **DPI Awareness**: Windows scaling (100%, 125%, 150%) must be handled correctly.

## Logic Constraints
-   **File Paths**: Use `\` vs `/`. Handle MAX_PATH limitations (260 chars).
-   **Permissions**: UAC (User Account Control) for admin tasks.

## Tech Stack Recommendations
-   **Native**: C# / .NET 6+.
-   **Hybrid**: Tauri (uses WebView2 / Edge).

## Common Pitfalls
-   Blocking the UI thread (WPF Dispatcher).
-   Assuming dependencies (WebView2 runtime) are installed on user machine.
