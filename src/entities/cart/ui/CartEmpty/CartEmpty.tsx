'use client';

import { FC } from 'react';

import s from './CartEmpty.module.scss';

export const CartEmpty: FC = () => {
  return (
    <div className={s.empty}>
      <h3 className={s.emptyTitle}>Корзина пуста</h3>
    </div>
  );
};
