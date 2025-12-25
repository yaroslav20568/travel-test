'use client';

import { FC } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { useCartMobileState } from '@/widgets';

import { CartHeader, CartList, CartSummary, useCartStore } from '@/features';

import { CartEmpty } from '@/entities';

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
      <AnimatePresence>
        {items.length === 0 ? (
          <motion.div
            key="cartEmpty"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CartEmpty />
          </motion.div>
        ) : (
          <motion.div
            key="cartList"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'contents' }}
          >
            <CartList />
          </motion.div>
        )}
      </AnimatePresence>
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
