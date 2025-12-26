import { act, renderHook } from '@testing-library/react';

import { useIsMobile } from './useIsMobile';

describe('test useBodyScrollLock', () => {
  test('is mobile', async () => {
    window.innerWidth = 600;
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBeTruthy();
  });

  test('is not mobile', async () => {
    window.innerWidth = 1200;
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBeFalsy();
  });

  test('resize', async () => {
    window.innerWidth = 1200;
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBeFalsy();

    act(() => {
      window.innerWidth = 600;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBeTruthy();
  });
});
