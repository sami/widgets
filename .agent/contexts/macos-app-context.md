# macOS App Context

## Overview
macOS apps expect a high degree of polish, adhering to the "Mac-like" feel, keyboard navigation, and deep system integration.

## Core Requirements
1.  **Universal Binary**: Must support Intel (x64) and Apple Silicon (M1/M2 - arm64).
2.  **Notarization**: Apple must scan and sign the binary to run on macOS Catalina+.
3.  **Sandbox**: Isolation from other apps and system files.

## Architecture Decisions
-   **App Lifecycle**: `AppDelegate` / `NSApplication`.
-   **UI**: SwiftUI is production ready for macOS.

## Logic Constraints
-   **Hardened Runtime**: Required for Notarization.
-   **Entitlements**: Explicitly request capabilities (e.g., Camera, File Access).
-   **JIT**: JIT compilation often restricted in Hardened Runtime.

## Tech Stack Recommendations
-   **Native**: Swift (SwiftUI).
-   **Hybrid**: Tauri (uses WebKit) feels more native than Electron (Chromium).

## Common Pitfalls
-   Porting an iOS app (Catalyst) without adapting for Mouse/Keyboard interaction.
-   Ignoring the Menu Bar (Cmd+Q, Cmd+W standards).
