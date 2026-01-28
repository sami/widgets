# Mobile App Context

## Overview
Mobile development constraints differ significantly from web. Devices have limited battery, unstable networks, and varied form factors.

## Core Requirements
1.  **Offline First**: Apps should function without internet. Sync data when connectivity returns.
2.  **Permissions**: Accessing Camera, Location, Contacts requires explicit user permission (Runtime permissions).
3.  **Push Notifications**: Engagement strategy (FCM/APNS).
4.  **Deep Linking**: Opening the app from a URL.

## Architecture Decisions
-   **Local Storage**: SQLite (heavy relational data) vs MMKV/SharedPreferences (key-value settings).
-   **Sync Strategy**: Last-write-wins vs conflict resolution.

## Logic Constraints
-   **Main Thread**: Never block the UI thread. Use background threads/coroutines for DB and Network.
-   **Lifecycle**: Handle App Backgrounding/Foregrounding efficiently (release resources).

## Security Checklist
- [ ] **Data Storage**: Encrypt sensitive data at rest (Keychain/Keystore).
- [ ] **Certificate Pinning**: Prevent Man-in-the-Middle attacks.
- [ ] **Jailbreak/Root Detection**: Prevent running on compromised devices (Banking apps).

## Common Pitfalls
-   Assuming stable network. Test with "Network Link Conditioner".
-   Draining battery by polling. Use Push Notifications or Background Fetch.
