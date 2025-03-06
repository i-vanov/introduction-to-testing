import { describe, it, expect } from 'vitest';
import { add, multiply, subtract, divide } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should add two negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  it('should parse strings into numbers', () => {
    expect(add('1', '1')).toBe(2);
  });

  it('should get real angry if you give it a string that cannot be parsed into a number', () => {
    expect(() => add(2, 'potato')).toThrow(
      'One of the arguments is not a number',
    );
  });

  it('should throw if the first argument is not a number', () => {
    expect(() => add(NaN, 2)).toThrow('not a number');
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(3, 3)).toBe(0);
  });

  it('should accept an array and subtract all of the numbers', () => {
    expect(subtract([10, 5], 2)).toBe(3);
  });

  it('should default undefined values to 0', () => {
    expect(subtract(2, 3, 15, 23)).toBe(-1);
    expect(subtract(undefined, 3)).toBe(-3);
  });

  it('should defualt to 0 if either argument is null', () => {
    expect(subtract(null, 3)).toBe(-3);
  });

  it('should return null if dividing by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 2)).toBe(4);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(2, 2)).toBe(1);
  });
});
