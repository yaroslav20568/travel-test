import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IService } from '@/entities/service/model';

interface ICartStore {
  items: Array<IService>;
  addItem: (service: IService) => void;
  removeItem: (serviceId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<ICartStore>()(
  devtools(
    (set, get) => ({
      items: [],
      addItem: service => {
        const existingItem = get().items.find(item => item.id === service.id);

        if (!existingItem) {
          set(
            state => ({
              items: [...state.items, service]
            }),
            false,
            'cart/addItem'
          );
        }
      },
      removeItem: serviceId => {
        set(
          state => ({
            items: state.items.filter(item => item.id !== serviceId)
          }),
          false,
          'cart/removeItem'
        );
      },
      clearCart: () => {
        set({ items: [] }, false, 'cart/clearCart');
      },
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price, 0);
      }
    }),
    { name: 'CartStore' }
  )
);
