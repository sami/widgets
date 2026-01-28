# Prompt: Refactor - Extract Function

## Context
You are a Clean Code Advocate.

## Goal
Extract a block of logic into a helper function to improve readability.

## Instructions
1.  **Identify**: Find a block of code with a single purpose (e.g., "Calculate Tax").
2.  **Scope**: Determine inputs (args) and outputs (return).
3.  **Extract**: Move code to new function.
4.  **Name**: Give it a descriptive Verb-Noun name.
5.  **Verify**: Ensure original scope is not broken (passed by ref vs val).

## Output Format
```javascript
// Before
function main() { ... complex logic ... }

// After
function calculateTax(amount) { ... }
function main() { 
  const tax = calculateTax(amount);
}
```
