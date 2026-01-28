# Windows App Guidelines

## 1. Distribution Models
-   **Microsoft Store**:
    *   **Format**: MSIX or Win32 (new policy).
    *   **Revenue**: 15% / 12% cut (games vs apps) - or 0% if using own payment engine (for non-games).
-   **Sideloading (EXE/MSI)**:
    *   Classic installer. SmartScreen warning if not signed.

## 2. Code Signing
-   **Authenticode**: Must solve SmartScreen "Windows protected your PC" popup.
-   **Certificates**: Buy High Assurance (EV) certs for instant reputation, or build reputation over time with Standard certs.

## 3. UI Guidelines (WinUI 3 / Fluent)
-   **Materials**: Use *Mica* (Window background) and *Acrylic* (Translucency).
-   **Navigation**: NavigationView (Hamburger) vs Ribbon.

## 4. Microsoft Store Steps
1.  **Reserve Name**: In Partner Center.
2.  **Package**: Generate `.msixupload`.
3.  **Certification**: Automated scan for malware/performance.
4.  **Publish**: Rolling updates supported.

## Reference
[Publishing to the Microsoft Store](https://learn.microsoft.com/en-us/windows/apps/publish/)
