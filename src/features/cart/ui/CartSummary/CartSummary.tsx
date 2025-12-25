'use client';

import { FC, useEffect, useState } from 'react';
import {
  animate,
  useMotionValue,
  useMotionValueEvent,
  useTransform
} from 'motion/react';

import { useCartStore } from '@/features';

import { formatPrice } from '@/entities';

import { Button } from '@/shared';

import s from './CartSummary.module.scss';

export const CartSummary: FC = () => {
  const items = useCartStore(state => state.items);
  const totalPrice = useCartStore(state =>
    state.items.reduce((total, item) => total + item.price, 0)
  );

  const count = useMotionValue(0);
  const rounded = useTransform(count, value => Math.round(value));
  const [displayPrice, setDisplayPrice] = useState('0');

  useMotionValueEvent(rounded, 'change', latest => {
    setDisplayPrice(formatPrice(latest));
  });

  useEffect(() => {
    const controls = animate(count, totalPrice, { duration: 0.5 });

    return () => controls.stop();
  }, [totalPrice]);

  const handleCheckout = () => {};

  return (
    <div className={s.total}>
      <div className={s.totalContent}>
        <span className={s.totalLabel}>Total:</span>
        <span className={s.totalPrice}>{displayPrice} ₽</span>
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
