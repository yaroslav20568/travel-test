'use client';

import { FC } from 'react';

import { CartItem } from '@/features/cart';
import { useCartStore } from '@/features/cart/model';

import s from './CartList.module.scss';

export const CartList: FC = () => {
  const items = useCartStore(state => state.items);

  return (
    <div className={s.items}>
      {items.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};
