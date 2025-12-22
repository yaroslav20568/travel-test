'use client';

import { ServiceCard } from '@/features/service-card';

import { useServices } from '@/entities/service';

import s from './ServicesList.module.scss';

export const ServicesList = () => {
  const { data: services, isLoading } = useServices();

  if (isLoading) {
    return <div className={s.loading}>Загрузка...</div>;
  }

  if (!services || services.length === 0) {
    return <div className={s.empty}>Услуги не найдены</div>;
  }

  return (
    <div className={s.list}>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};
