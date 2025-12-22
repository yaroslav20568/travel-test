'use client';

import { FC } from 'react';

import { useCartStore } from '@/features/cart/model';

import { formatPrice } from '@/entities/service/utils';

import s from './CartSummary.module.scss';

export const CartSummary: FC = () => {
  const totalPrice = useCartStore(state =>
    state.items.reduce((total, item) => total + item.price, 0)
  );

  return (
    <div className={s.total}>
      <div className={s.totalContent}>
        <span className={s.totalLabel}>Total:</span>
        <span className={s.totalPrice}>{formatPrice(totalPrice)} ₽</span>
      </div>
    </div>
  );
};
