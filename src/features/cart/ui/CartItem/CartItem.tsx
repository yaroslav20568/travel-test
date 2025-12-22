'use client';

import { FC } from 'react';

import { useCartStore } from '@/features/cart/model';

import { IService } from '@/entities/service/model';

import { Button } from '@/shared';

import s from './CartItem.module.scss';

interface ICartItemProps extends IService {}

export const CartItem: FC<ICartItemProps> = ({ id, title, price }) => {
  const removeItem = useCartStore(state => state.removeItem);

  return (
    <div className={s.item}>
      <div className={s.itemContent}>
        <h3 className={s.itemTitle}>{title}</h3>
        <p className={s.itemPrice}>{price} ₽</p>
      </div>
      <Button onClick={() => removeItem(id)} className={s.removeButton}>
        Удалить
      </Button>
    </div>
  );
};
