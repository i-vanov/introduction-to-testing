import { test, expect, vi } from 'vitest';

// Ensure that the side effect of a function happened
const logSpy = vi.spyOn(console, 'log')

test('a super simple test', () => {
  console.log("Hello world");

  expect(logSpy).toHaveBeenCalled(); 
  expect(logSpy).toHaveBeenCalledWith("Hello world");
  expect(logSpy).toHaveBeenCalledOnce();
  expect(logSpy).toHaveBeenCalledTimes(1); 
});
