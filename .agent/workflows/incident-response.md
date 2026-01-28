---
description: Protocol for handling and recovering from production incidents
---

# Incident Response Workflow

## 1. Detection & Alerting
**Goal**: Identify the issue fast.

- **Sources**: Automated alerts (PagerDuty), Customer reports, Support tickets.
- **First Responder**: The On-Call Engineer acknowledges the alert.

---

## 2. Severity Assessment (SEV)
**Goal**: Triage.

- **SEV-1 (Critical)**: Site Down, Data Loss, Security Breach. (Wake up everyone).
- **SEV-2 (High)**: Major feature broken, degraded performance. (Fix Today).
- **SEV-3 (Medium)**: Minor bug, single user affected. (Business hours).

---

## 3. Containment (War Room)
**Goal**: Stop the bleeding.

1. **Establish Communication**:
   - Slack Channel: `#incident-YYYY-MM-DD`.
   - Video Bridge (Zoom/Meet) for SEV-1.
2. **Roles**:
   - **Commander**: Leads the coordination. Communication point.
   - **Tech Lead**: Leads the investigation.
   - **Scribe**: Records timeline of events/decisions.
3. **Status Page**: Update public status page ("Investigating").

---

## 4. Investigation & Remediation
**Goal**: Restore service.

### Investigation
- Check recent deployments/changes (Primary suspect).
- Check logs and metrics.

### Remediation (Fix it)
- **Rollback**: If deployment caused it, revert immediately.
- **Scale**: If traffic spike, add capacity.
- **Restart**: The classic fix.
- **Feature Flag**: Disable broken feature.

*Focus on Restoration first, Root Cause second.*

---

## 5. Communication
**Goal**: Keep stakeholders informed.

- **Internal**: Updates every 30 mins to Execs/Team.
- **External**: Updates to Status Page. "Identified", "Monitoring", "Resolved".

---

## 6. Post-Incident Review (PIR)
**Goal**: Prevention.

- **Schedule meeting**: Within 48 hours.
- **Timeline**: Construct detailed sequence of events.
- **5 Whys**: Drill down to root cause (Process vs Tech).
- **Action Items**: Assign owners to fix the root cause.
- **Report**: Publish PIR document to engineering.
