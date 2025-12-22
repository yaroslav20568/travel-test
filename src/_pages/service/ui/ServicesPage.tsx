'use client';

import { Cart, ServicesList } from '@/widgets';

import { useServices } from '@/entities/service';

import s from './ServicesPage.module.scss';

export const ServicesPage = () => {
  const { isLoading } = useServices();

  return (
    <div className={s.servicesPage}>
      <ServicesList />
      {!isLoading && <Cart />}
    </div>
  );
};
