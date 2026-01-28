---
description: Process for releasing iOS and Android applications
---

# Mobile App Release Workflow

## 1. Preparation
**Goal**: Build readiness.

- [ ] **Versioning**: Update `versionName` (1.2.0) and `versionCode`/`buildNumber` (increment).
- [ ] **Changelog**: Prepare user-facing release notes.
- [ ] **Assets**: Update generated icons/splash screens if needed.
- [ ] **Environment**: Switch config to Production (API URLs, Keys).

---

## 2. Beta Testing (Staging)
**Goal**: User validation.

### iOS (TestFlight)
1. Archive build in Xcode / CI (Fastlane).
2. Upload to App Store Connect.
3. Release to **Internal Group** (Dev Team).
4. Release to **External Group** (Beta Users) - Requires Apple Review (1 day).

### Android (Play Console)
1. Build Signed Bundle (`.aab`).
2. Upload to **Internal Testing** track.
3. Promote to **Open/Closed Beta** track.

---

## 3. Submission Checklist
**Goal**: Approval.

- [ ] **Screenshots**: Updated for new features?
- [ ] **Metadata**: Title, Keywords, Description up to date?
- [ ] **Privacy**: Data safety form updated?
- [ ] **Compliance**: Login credentials for reviewer provided?

---

## 4. Release (Phased Rollout)
**Goal**: Risk mitigation.

### iOS
- Select "Phased Release for Automatic Updates".
- Day 1: 1%, Day 2: 2%, Day 3: 5%... Day 7: 100%.
- *Note*: You can pause rollout if bugs are found.

### Android
- Start rollout at 5-10% in Production track.
- Monitor vitals (ANRs, Crashes).
- Halt release if crash rate > threshold.
- Increase to 20% -> 50% -> 100%.

---

## 5. Post-Release Monitoring
**Goal**: Stability.

### Metrics to Watch
- **Crash-Free Users**: Target > 99%.
- **ANRs (Android)**: Application Not Responding.
- **Reviews**: Check for 1-star reviews complaining of bugs.

### Hotfix Process
- If critical bug found:
  1. Fix bug on `hotfix` branch.
  2. Bump `versionCode` +1.
  3. Submit "Expedited Review" (Apple) / 100% Rollout (Google).
