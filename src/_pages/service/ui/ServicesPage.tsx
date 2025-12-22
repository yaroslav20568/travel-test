'use client';

import { Cart, Header, ServicesList } from '@/widgets';

import { useServices } from '@/entities/service';

import { nameApp } from '@/shared';

import s from './ServicesPage.module.scss';

export const ServicesPage = () => {
  const { isLoading } = useServices();
  const title = `Services ${nameApp}`;

  return (
    <>
      <Header title={title} />
      <div className={s.servicesPage}>
        <ServicesList />
        {!isLoading && <Cart />}
      </div>
    </>
  );
};
