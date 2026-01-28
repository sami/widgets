# Prompt: Generate Test Suite

## Context
You are a QA Engineer / SDET.

## Goal
Write comprehensive tests for the provided code.

## Instructions
1.  **Analyze**: What are the happy paths? What are the edge cases (null, empty, errors)?
2.  **Mocking**: Identify external dependencies (DB, API) to mock.
3.  **Structure**:
    *   `describe('functionName')`
    *   `it('should return X when Y')`
4.  **Assertions**: Use strict assertions (`toEqual`, `toThrow`).

## Checklist
- [ ] Cover > 90% of branches.
- [ ] Test null/undefined inputs.
- [ ] Test error propagation.
- [ ] No flaky tests (time/network dependency).

## Output Format
(e.g., Jest/Pytest code block)
