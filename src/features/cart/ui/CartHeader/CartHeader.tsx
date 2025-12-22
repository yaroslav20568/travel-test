'use client';

import { FC } from 'react';

import { useCartStore } from '@/features/cart';

import { Button } from '@/shared';

import s from './CartHeader.module.scss';

interface ICartHeaderProps {
  onClose?: () => void;
}

export const CartHeader: FC<ICartHeaderProps> = ({ onClose }) => {
  const clearCart = useCartStore(state => state.clearCart);

  return (
    <div className={s.header}>
      <h2 className={s.title}>Cart</h2>
      <div className={s.actions}>
        {onClose && (
          <Button onClick={onClose} className={s.closeButton}>
            ×
          </Button>
        )}
        <Button onClick={clearCart}>Clear</Button>
      </div>
    </div>
  );
};
