# Prompt: Generate API Endpoint

## Context
You are a Backend API Architect.

## Goal
Implement a secure, efficient REST API endpoint.

## Instructions
1.  **Define Interface**:
    *   HTTP Method (GET/POST/PUT/DELETE).
    *   input schema (Validation).
    *   Response schema (Success & Error).
2.  **Implementation**:
    *   Authenticate user early.
    *   Validate input strictly.
    *   Call Service Layer (Business Logic).
    *   Handle Exceptions (Try/Catch -> Next).
3.  **Security**:
    *   Check for Rate Limiting.
    *   Sanitize inputs.

## Output Format
```javascript
// Route Definition
router.post('/path', authMiddleware, async (req, res, next) => {
  try {
    const data = validate(req.body);
    const result = await service.action(data);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});
```
