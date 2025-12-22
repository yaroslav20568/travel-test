'use client';

import { FC } from 'react';

import { useCartStore } from '@/features/cart';

import { IService } from '@/entities/service/model';

import { Button } from '@/shared';

import s from './ServiceCard.module.scss';

interface IProps {
  service: IService;
}

export const ServiceCard: FC<IProps> = ({ service }) => {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className={s.item}>
      <div className={s.content}>
        <h3 className={s.title}>{service.title}</h3>
        <p className={s.price}>{service.price} ₽</p>
      </div>
      <Button onClick={() => addItem(service)}>Добавить</Button>
    </div>
  );
};
