import { capitalize } from './functions';

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