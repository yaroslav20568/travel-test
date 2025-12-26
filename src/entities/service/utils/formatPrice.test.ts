import { formatPrice } from './formatPrice';

describe('format-price module', () => {
  test('test price 0', () => {
    expect(formatPrice(0)).toBe('0');
  });

  test('test 1 000', () => {
    expect(formatPrice(1000)).toBe('1 000');
  });

  test('test price 10 000', () => {
    expect(formatPrice(10000)).toBe('10 000');
  });

  test('test price 1 000 000', () => {
    expect(formatPrice(1000000)).toBe('1 000 000');
  });
});
