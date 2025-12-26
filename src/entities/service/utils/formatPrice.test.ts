import { formatPrice } from './formatPrice';

describe('test formatPrice util', () => {
  test('price 0', () => {
    expect(formatPrice(0)).toBe('0');
  });

  test('price 1 000', () => {
    expect(formatPrice(1000)).toBe('1 000');
  });

  test('price 10 000', () => {
    expect(formatPrice(10000)).toBe('10 000');
  });

  test('price 1 000 000', () => {
    expect(formatPrice(1000000)).toBe('1 000 000');
  });
});
