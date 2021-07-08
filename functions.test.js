import { capitalize, reverseString, calculator } from './functions';

describe('capitalize', () => {
  test('leave an empty string the same', () => {
    expect(capitalize('')).toBe('');
  });
  test('capitalize a lowercase letter', () => {
    expect(capitalize('a')).toBe('A');
  });
  test('leave an uppercase letter the same', () => {
    expect(capitalize('B')).toBe('B');
  });
  test('leave a string with no letters the same', () => {
    expect(capitalize('1234')).toBe('1234');
  });
  test('leave a capitalized string the same', () => {
    expect(capitalize('Mighty')).toBe('Mighty');
  });
  test('capitalize an uncapitalized string', () => {
    expect(capitalize('pillow')).toBe('Pillow');
  });
  test('throw an error for non-strings', () => {
    expect(() => capitalize(1234).toThrow('Not a string'));
  });
});

describe('reverseString', () => {
  test('leave an empty string the same', () => {
    expect(reverseString('')).toBe('');
  });
  test('leave one character string the same', () => {
    expect(reverseString('a')).toBe('a');
  });
  test('leave short palindrome the same', () => {
    expect(reverseString('aha')).toBe('aha');
  });
  test('leave long palindrome the same', () => {
    expect(reverseString('rotavator')).toBe('rotavator');
  });
  test('reverse a short string', () => {
    expect(reverseString('apple')).toBe('elppa');
  });
  test('reverse a long string with spaces', () => {
    expect(reverseString('reverse a long string with spaces')).toBe('secaps htiw gnirts gnol a esrever');
  });
  test('throw an error for non-strings', () => {
    expect(() => reverseString(1234).toThrow('Not a string'));
  });
});

describe('calculator', () => {
  describe('add', () => {
    test('add two numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test('add three numbers', () => {
      expect(calculator.add(1, 2, 3)).toBe(6);
    });
    test('throw an error when first argument is not a number', () => {
      expect(() => calculator.add('a', 1).toThrow('One or more arguments not a number'));
    });
    test('throw an error when second argument is not a number', () => {
      expect(() => calculator.add(1, 'b').toThrow('One or more arguments not a number'));
    });
  });
  describe('subtract', () => {
    test('subtract two numbers', () => {
      expect(calculator.subtract(2, 1)).toBe(1);
    });
    test('subtract three numbers', () => {
      expect(calculator.subtract(3, 2, 1)).toBe(0);
    });
    test('throw an error when first argument is not a number', () => {
      expect(() => calculator.subtract('a', 1).toThrow('One or more arguments not a number'));
    });
    test('throw an error when second argument is not a number', () => {
      expect(() => calculator.subtract(1, 'b').toThrow('One or more arguments not a number'));
    });
  });
  describe('multiply', () => {
    test('multiply two numbers', () => {
      expect(calculator.multiply(1, 2)).toBe(2);
    });
    test('multiply three numbers', () => {
      expect(calculator.multiply(1, 2, 3)).toBe(6);
    });
    test('throw an error when first argument is not a number', () => {
      expect(() => calculator.multiply('a', 1).toThrow('One or more arguments not a number'));
    });
    test('throw an error when second argument is not a number', () => {
      expect(() => calculator.multiply(1, 'b').toThrow('One or more arguments not a number'));
    });
  });
  describe('divide', () => {
    test('divide two numbers', () => {
      expect(calculator.divide(2, 1)).toBe(2);
    });
    test('divide three numbers', () => {
      expect(calculator.divide(3, 2, 1)).toBe(1.5);
    });
    test('divide by zero', () => {
      expect(() => calculator.divide(1, 0).toThrow('Divide by zero'));
    });
    test('throw an error when first argument is not a number', () => {
      expect(() => calculator.divide('a', 1).toThrow('One or more arguments not a number'));
    });
    test('throw an error when second argument is not a number', () => {
      expect(() => calculator.divide(1, 'b').toThrow('One or more arguments not a number'));
    });
  });
});