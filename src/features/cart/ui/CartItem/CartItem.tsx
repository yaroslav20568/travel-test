'use client';

import { FC, memo } from 'react';

import { useCartStore } from '@/features';

import { formatPrice, IService } from '@/entities';

import { Button } from '@/shared';

import s from './CartItem.module.scss';

interface IProps extends IService {}

export const CartItem: FC<IProps> = memo(({ id, title, price }) => {
  const removeItem = useCartStore(state => state.removeItem);

  return (
    <div className={s.item}>
      <div className={s.itemContent}>
        <h3 className={s.itemTitle}>{title}</h3>
        <p className={s.itemPrice}>{formatPrice(price)} ₽</p>
      </div>
      <Button onClick={() => removeItem(id)} size="small">
        Remove
      </Button>
    </div>
  );
});

CartItem.displayName = 'CartItem';
