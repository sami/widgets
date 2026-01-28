# Troubleshooting Guide

## Overview
Solutions to common "It works on my machine" problems.

## 1. Node.js / NPM Issues

### "node-gyp" Build Error
**Symptom**: `npm install` fails on native dependencies (e.g., bcrypt, sharp).
**Fix**:
1.  Target python version: `npm config set python python3`
2.  Install build tools:
    *   Mac: `xcode-select --install`
    *   Windows: `npm install --global --production windows-build-tools`

### "EACCES: permission denied"
**Symptom**: Cannot install global packages.
**Fix**: Do NOT run sudo. Fix npm permissions or use `nvm` (Node Version Manager) to manage node/npm in user space.

## 2. Docker Issues

### "Bind for 0.0.0.0:5432 failed: port is already allocated"
**Cause**: A local Postgres instance is running.
**Fix**:
1.  Stop local service: `brew services stop postgresql` (Mac).
2.  Or find process: `lsof -i :5432` -> `kill -9 <PID>`.

### Container can't connect to Localhost API
**Cause**: `localhost` inside Docker refers to the container, not the host.
**Fix**: Use `host.docker.internal` instead of `localhost` in your DB connection string.

## 3. Git Issues

### "Detached HEAD state"
**Cause**: You checked out a specific commit, not a branch.
**Fix**: Create a branch from here to save work: `git checkout -b fix/my-fix`.
