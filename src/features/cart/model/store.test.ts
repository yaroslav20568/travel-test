import { mockServices } from '@/entities';
import { checkServices } from '@/entities/service/api/serviceApi.test';

import { useCartStore } from './store';

describe('test cart store', () => {
  beforeAll(() => {
    useCartStore.getState().clearCart();
  });

  test('add first-item to cart', () => {
    useCartStore.getState().addItem(mockServices[0]);

    expect(useCartStore.getState().items.length).toBe(1);
    checkServices(useCartStore.getState().items);
  });

  test('add second-item to cart', () => {
    useCartStore.getState().addItem(mockServices[1]);

    expect(useCartStore.getState().items.length).toBe(2);
    checkServices(useCartStore.getState().items);
  });

  test('get total-price in cart', () => {
    useCartStore.getState().getTotalPrice();

    expect(useCartStore.getState().getTotalPrice()).toBe(6000);
  });

  test('delete item from cart', () => {
    useCartStore.getState().removeItem(mockServices[0].id);

    expect(useCartStore.getState().items.length).toBe(1);
    checkServices(useCartStore.getState().items);
  });

  test('clear cart', () => {
    useCartStore.getState().clearCart();

    expect(useCartStore.getState().items.length).toBe(0);
  });
});
