'use client';

import { useCartStore } from '@/features/cart';

import { useServices } from '@/entities/service';

import styles from './ServicesList.module.scss';

export const ServicesList = () => {
  const { data: services, isLoading } = useServices();
  const addItem = useCartStore(state => state.addItem);

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (!services || services.length === 0) {
    return <div className={styles.empty}>Услуги не найдены</div>;
  }

  return (
    <div className={styles.list}>
      {services.map(service => (
        <div key={service.id} className={styles.item}>
          <div className={styles.content}>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.price}>{service.price} ₽</p>
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={() => addItem(service)}
          >
            Добавить
          </button>
        </div>
      ))}
    </div>
  );
};
