'use client';

import { FC } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { CartItem, useCartStore } from '@/features';

import s from './CartList.module.scss';

export const CartList: FC = () => {
  const items = useCartStore(state => state.items);

  return (
    <div className={s.items}>
      <AnimatePresence>
        {items.map(item => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CartItem key={item.id} {...item} />
          </motion.li>
        ))}
      </AnimatePresence>
    </div>
  );
};
