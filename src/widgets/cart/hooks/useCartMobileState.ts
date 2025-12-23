'use client';

import { useEffect } from 'react';

import { useCartStore } from '@/features';

import { useIsMobile } from '@/shared';

export const useCartMobileState = (itemsCount: number) => {
  const isMobile = useIsMobile();
  const isOpen = useCartStore(state => state.isOpen);
  const setIsOpen = useCartStore(state => state.setIsOpen);

  useEffect(() => {
    if (isMobile && itemsCount > 0) {
      setIsOpen(true);
    } else if (isMobile && itemsCount === 0) {
      setIsOpen(false);
    } else if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile, itemsCount, setIsOpen]);

  return { isOpen, setIsOpen, isMobile };
};
