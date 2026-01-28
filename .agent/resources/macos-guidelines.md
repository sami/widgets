# macOS App Guidelines

## 1. Distribution Models
-   **Mac App Store (MAS)**:
    *   **Pros**: Trust, Auto-updates via Store.
    *   **Cons**: Sandboxing required, 15-30% cut.
-   **Direct Distribution (DMG)**:
    *   **Pros**: No sandbox limits, 100% revenue.
    *   **Cons**: Must handle updates (Sparkle) and Notarization.

## 2. Notarization (Direct Dist)
-   **Goal**: Apple scans binary for malware. Required for macOS Catalina+.
-   **Process**:
    1.  Sign code with usage `Developer ID Application`.
    2.  Send to notary service (`xcrun notarytool`).
    3.  Staple the ticket to the DMG.

## 3. Sandboxing (MAS)
-   **File Access**: Cannot read user files without `NSOpenPanel` user interaction (Security Scope Bookmark).
-   **Network**: Must request `com.apple.security.network.client`.

## 4. Human Interface
-   **Menu Bar**: App must control via Global Menu Bar, not just in-window.
-   **Dock**: Support drag-and-drop onto Dock icon.

## Reference
[Notarizing macOS Software Before Distribution](https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution)
