'use client';

import { useCartStore } from '@/features/cart';

import { useServices } from '@/entities/service';

import { Button } from '@/shared';

import s from './ServicesList.module.scss';

export const ServicesList = () => {
  const { data: services, isLoading } = useServices();
  const addItem = useCartStore(state => state.addItem);

  if (isLoading) {
    return <div className={s.loading}>Загрузка...</div>;
  }

  if (!services || services.length === 0) {
    return <div className={s.empty}>Услуги не найдены</div>;
  }

  return (
    <div className={s.list}>
      {services.map(service => (
        <div key={service.id} className={s.item}>
          <div className={s.content}>
            <h3 className={s.title}>{service.title}</h3>
            <p className={s.price}>{service.price} ₽</p>
          </div>
          <Button onClick={() => addItem(service)}>Добавить</Button>
        </div>
      ))}
    </div>
  );
};
