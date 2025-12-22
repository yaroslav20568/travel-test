'use client';

import { FC } from 'react';

import { CartHeader, useCartStore } from '@/features/cart';

import { CartEmpty, CartList, CartSummary } from '@/entities/cart/ui';

import s from './Cart.module.scss';

export const Cart: FC = () => {
  const items = useCartStore(state => state.items);

  if (items.length === 0) {
    return (
      <div className={s.cart}>
        <CartEmpty />
      </div>
    );
  }

  return (
    <div className={s.cart}>
      <CartHeader />
      <CartList />
      <CartSummary />
    </div>
  );
};
