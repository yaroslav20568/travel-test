'use client';

import { FC } from 'react';

import { useCartStore } from '@/features/cart';

import { Button, useIsMobile } from '@/shared';

import s from './Header.module.scss';

interface IProps {
  title: string;
}

export const Header: FC<IProps> = ({ title }) => {
  const isMobile = useIsMobile();
  const setIsOpen = useCartStore(state => state.setIsOpen);

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  return (
    <header className={s.header}>
      <div className={s.title}>{title}</div>
      {isMobile && (
        <Button onClick={handleOpenCart} className={s.cartButton}>
          Open Cart
        </Button>
      )}
    </header>
  );
};
