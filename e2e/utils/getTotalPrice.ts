import { mockServices } from '@/entities';

export const getTotalPrice = (limit: number) => {
  return mockServices.slice(0, limit).reduce((acc, el) => {
    return acc + el.price;
  }, 0);
};
