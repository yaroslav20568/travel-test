'use client';

import { FC } from 'react';

import { useCartStore } from '@/features/cart/model';

import s from './CartSummary.module.scss';

export const CartSummary: FC = () => {
  const totalPrice = useCartStore(state =>
    state.items.reduce((total, item) => total + item.price, 0)
  );

  return (
    <div className={s.total}>
      <div className={s.totalContent}>
        <span className={s.totalLabel}>Итого:</span>
        <span className={s.totalPrice}>{totalPrice} ₽</span>
      </div>
    </div>
  );
};
