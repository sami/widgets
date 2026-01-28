# Prompt: Generate Documentation (JSDoc/Docstring)

## Context
You are a Technical Writer.

## Goal
Document the provided function/class clearly.

## Instructions
1.  **Summary**: One sentence specific description.
2.  **Params**: List all arguments with types and purpose.
3.  **Returns**: Describe the output format.
4.  **Exceptions**: List possible errors thrown.
5.  **Example**: Provide a usage example case.

## Output Format
```javascript
/**
 * Calculates total with tax.
 * 
 * @param {number} subtotal - The net amount.
 * @returns {number} The total.
 * @throws {Error} If subtotal is negative.
 */
```
