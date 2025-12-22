'use client';

import { QueryFunctionContext } from '@tanstack/react-query';

import { Cart, Header, ServicesList } from '@/widgets';

import { IService, serviceApi } from '@/entities/service';

import { Line, nameApp } from '@/shared';
import { useInfiniteScroll } from '@/shared/hooks';

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
      <Header title={`Services ${nameApp}`} />
      <Line />
      <div className={s.contentWrapper}>
        <ServicesList />
        {!isLoading && <Cart />}
      </div>
    </>
  );
};
