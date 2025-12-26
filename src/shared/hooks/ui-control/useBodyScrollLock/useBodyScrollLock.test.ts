import { renderHook } from '@testing-library/react';

import { useBodyScrollLock } from './useBodyScrollLock';

describe('test useBodyScrollLock', () => {
  test('is locked', () => {
    renderHook(() => useBodyScrollLock(true));

    expect(document.body.style.overflow).toBe('hidden');
  });

  test('is not locked', () => {
    renderHook(() => useBodyScrollLock(false));

    expect(document.body.style.overflow).not.toBe('hidden');
  });
});
