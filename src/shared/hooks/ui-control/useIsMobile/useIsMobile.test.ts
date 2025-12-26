import { renderHook, waitFor } from '@testing-library/react';

import { useIsMobile } from './useIsMobile';

describe('test useBodyScrollLock', () => {
  test('is mobile', async () => {
    window.innerWidth = 600;
    const { result } = renderHook(() => useIsMobile());

    await waitFor(() => {
      expect(result.current).toBeTruthy();
    });
  });

  test('is not mobile', async () => {
    window.innerWidth = 1200;
    const { result } = renderHook(() => useIsMobile());

    await waitFor(() => {
      expect(result.current).toBeFalsy();
    });
  });
});
