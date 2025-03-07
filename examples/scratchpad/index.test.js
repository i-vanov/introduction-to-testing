import { test, expect, vi } from 'vitest';

// Ensure that the side effect of a function happened
const logSpy = vi.spyOn(console, 'log')

test('a super simple mock test', () => {
  const mockFn = vi.fn();

  mockFn('Hello world');

  expect(mockFn).toHaveBeenCalled(); 
  expect(mockFn).toHaveBeenCalledWith("Hello world");
  expect(mockFn).toHaveBeenCalledOnce();
  expect(mockFn).toHaveBeenCalledTimes(1); 
});

test('a super simple spy test', () => {
  console.log("Hello world");

  expect(logSpy).toHaveBeenCalled(); 
  expect(logSpy).toHaveBeenCalledWith("Hello world");
  expect(logSpy).toHaveBeenCalledOnce();
  expect(logSpy).toHaveBeenCalledTimes(1); 
})
