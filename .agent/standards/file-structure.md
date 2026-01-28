# File Structure Standards

## Rationale
A predictable project structure allows any developer to find any file in any project immediately.

## 1. Root Directory
```
/
├── .agent/              # Agent templates/prompts
├── .github/             # CI/CD Workflows
├── src/                 # Source Code
├── tests/               # Tests (or co-located, see below)
├── docs/                # Documentation
├── dist/ (or build/)    # Build outputs (Gitignored)
├── tools/ (or scripts/) # Dev scripts
├── README.md
└── package.json (or requirements.txt)
```

## 2. Source Code (`src/`)

### Feature-Based (Preferred)
Grouping by feature is scalable.
```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   └── types/
│   └── users/
├── shared/              # Reusable code
│   ├── components/
│   └── utils/
```

### Type-Based (Legacy/Small)
```
src/
├── components/
├── services/
├── utils/
```

## 3. Test Placement
-   **Unit Tests**: Co-located with source. `UserProfile.ts` -> `UserProfile.test.ts`.
-   **Integration/E2E**: Separate `tests/` directory.

## 4. Asset Organization
-   `public/` or `assets/`.
-   Subfolders: `images/`, `fonts/`, `locales/`.

## Enforcement
-   **Scaffolding**: Use generators to create new projects with correct structure.

## Exceptions
-   **Frameworks**: If a framework (Next.js, Django) mandates a specific structure, follow it.
