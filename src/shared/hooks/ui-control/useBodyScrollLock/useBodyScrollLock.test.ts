import { renderHook } from '@testing-library/react';

import { useBodyScrollLock } from './useBodyScrollLock';

describe('test useBodyScrollLock', () => {
  test('is locked', () => {
    renderHook(() => useBodyScrollLock(true));

    const overflowValue = getComputedStyle(document.body).overflow;

    expect(overflowValue).toBe('hidden');
  });

  test('is no locked', () => {
    renderHook(() => useBodyScrollLock(false));

    const overflowValue = getComputedStyle(document.body).overflow;

    expect(overflowValue).not.toBe('hidden');
  });
});
