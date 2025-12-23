'use client';

import { FC } from 'react';

import { useCartStore } from '@/features';

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
      <Button
        onClick={handleOpenCart}
        className={s.cartButton}
        disabled={!isMobile}
      >
        Open Cart
      </Button>
    </header>
  );
};
