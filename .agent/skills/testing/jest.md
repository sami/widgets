---
name: Jest Testing
description: Unit and integration testing with Jest
---

# Jest Skills

## Basics
- **Describe**: specific a block of tests.
- **Test/It**: Define a single test.
- **Expect**: Assertions.

```javascript
describe('MathUtils', () => {
  it('should add numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

## Mocking
- **`jest.fn()`**: Mock simple functions.
- **`jest.spyOn()`**: Spy on object methods.
- **`jest.mock('./module')`**: Mock entire modules.

## Best Practices
- **AAA Pattern**: Arrange, Act, Assert.
- **Isolation**: Tests should not depend on each other.
- **Coverage**: Aim for high line and branch coverage, but prioritize critical paths.
