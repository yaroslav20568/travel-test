'use client';

import { FC } from 'react';

import { useCartStore } from '@/features';

import { Button, IconClose } from '@/shared';

import s from './CartHeader.module.scss';

interface IProps {
  onClose?: () => void;
}

export const CartHeader: FC<IProps> = ({ onClose }) => {
  const clearCart = useCartStore(state => state.clearCart);
  const items = useCartStore(state => state.items);

  return (
    <div className={s.header}>
      <h2 className={s.title}>Cart</h2>
      <div className={s.actions}>
        <Button onClick={clearCart} disabled={items.length == 0}>
          Clear
        </Button>
        {onClose && (
          <Button onClick={onClose} className={s.closeButton}>
            <IconClose />
          </Button>
        )}
      </div>
    </div>
  );
};
