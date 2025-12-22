'use client';

import { useCallback } from 'react';
import { QueryFunctionContext } from '@tanstack/react-query';

import { ServiceCard } from '@/features/service-card';

import { IGetServicesParams, IService, serviceApi } from '@/entities/service';

import { Loader, useInfiniteScroll, useIntersectionObserver } from '@/shared';

import s from './ServicesList.module.scss';

export const ServicesList = () => {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteScroll<IService, Omit<IGetServicesParams, 'limit'>>({
      queryKey: ['services', 'infinite'],
      queryFn: (
        context: QueryFunctionContext<readonly unknown[], number>,
        queryParams?: Omit<IGetServicesParams, 'limit'>
      ) =>
        serviceApi.getServices({
          ...queryParams,
          limit: 20,
          page: context.pageParam ?? 1
        })
    });

  const handleIntersection = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage]
  );

  const loadMoreRef = useIntersectionObserver<HTMLDivElement>(
    handleIntersection,
    {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    }
  );

  const services = data?.pages.flat() ?? [];

  if (isLoading) {
    return (
      <div className={s.loading}>
        <Loader />
      </div>
    );
  }

  if (services.length === 0) {
    return <div className={s.empty}>Services not found</div>;
  }

  return (
    <div className={s.container}>
      <div className={s.list}>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div ref={loadMoreRef} className={s.loadMore}>
        {isFetchingNextPage && (
          <div className={s.loadingMore}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};
