'use client';

import { useEffect, useState } from 'react';

import { useIsMobile } from '@/shared';

export const useCartMobileState = (itemsCount: number) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isMobile && itemsCount > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true);
    } else if (isMobile && itemsCount === 0) {
      setIsOpen(false);
    } else if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile, itemsCount]);

  return { isOpen, setIsOpen, isMobile };
};
