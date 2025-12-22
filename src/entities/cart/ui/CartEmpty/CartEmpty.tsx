'use client';

import { FC } from 'react';

import s from './CartEmpty.module.scss';

export const CartEmpty: FC = () => {
  return (
    <div className={s.empty}>
      <h3 className={s.emptyTitle}>Cart is empty</h3>
    </div>
  );
};
