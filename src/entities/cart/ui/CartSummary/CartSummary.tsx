'use client';

import { FC } from 'react';

import { useCartStore } from '@/features/cart/model';

import { formatPrice } from '@/entities/service/utils';

import { Button } from '@/shared';

import s from './CartSummary.module.scss';

export const CartSummary: FC = () => {
  const items = useCartStore(state => state.items);
  const totalPrice = useCartStore(state =>
    state.items.reduce((total, item) => total + item.price, 0)
  );

  const handleCheckout = () => {};

  return (
    <div className={s.total}>
      <div className={s.totalContent}>
        <span className={s.totalLabel}>Total:</span>
        <span className={s.totalPrice}>{formatPrice(totalPrice)} ₽</span>
      </div>
      <Button
        onClick={handleCheckout}
        disabled={items.length === 0}
        size="big"
        fullWidth
        className={s.checkoutButton}
      >
        Checkout
      </Button>
    </div>
  );
};
