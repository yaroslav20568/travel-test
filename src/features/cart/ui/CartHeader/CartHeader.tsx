'use client';

import { FC } from 'react';

import { useCartStore } from '@/features/cart';

import { Button } from '@/shared';

import s from './CartHeader.module.scss';

export const CartHeader: FC = () => {
  const clearCart = useCartStore(state => state.clearCart);

  return (
    <div className={s.header}>
      <h2 className={s.title}>Cart</h2>
      <Button onClick={clearCart} className={s.clearButton}>
        Clear
      </Button>
    </div>
  );
};
