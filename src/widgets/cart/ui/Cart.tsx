'use client';

import { FC } from 'react';

import { useCartMobileState } from '@/widgets';

import { CartHeader, useCartStore } from '@/features';

import { CartEmpty, CartList, CartSummary } from '@/entities';

import { Line, useBodyScrollLock } from '@/shared';

import s from './Cart.module.scss';

export const Cart: FC = () => {
  const items = useCartStore(state => state.items);
  const { isOpen, setIsOpen, isMobile } = useCartMobileState(items.length);

  useBodyScrollLock(isMobile && isOpen);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const cartContent = (
    <>
      <CartHeader onClose={isMobile ? handleClose : undefined} />
      <Line />
      {items.length === 0 ? <CartEmpty /> : <CartList />}
      <Line />
      <CartSummary />
    </>
  );

  if (isMobile) {
    return (
      <>
        {isOpen && <div className={s.overlay} onClick={handleOverlayClick} />}
        <div className={`${s.cart} ${s.drawer} ${isOpen ? s.open : ''}`}>
          {cartContent}
        </div>
      </>
    );
  }

  return <div className={s.cart}>{cartContent}</div>;
};
