'use client';

import { QueryFunctionContext } from '@tanstack/react-query';
import { motion } from 'motion/react';

import { Cart, Header, ServicesList } from '@/widgets';

import { IService, serviceApi } from '@/entities';

import { Line, nameApp, useInfiniteScroll } from '@/shared';

import s from './ServicesPage.module.scss';

export const ServicesPage = () => {
  const { isLoading } = useInfiniteScroll<IService>({
    queryKey: ['services', 'infinite'],
    queryFn: (context: QueryFunctionContext<readonly unknown[], number>) =>
      serviceApi.getServices({
        limit: 20,
        page: context.pageParam ?? 1
      })
  });

  return (
    <>
      <motion.div
        key="cartEmpty"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Header title={`Services ${nameApp}`} />
      </motion.div>
      <Line />
      <div className={s.contentWrapper}>
        <ServicesList />
        {!isLoading && <Cart />}
      </div>
    </>
  );
};
