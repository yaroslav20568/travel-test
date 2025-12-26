import { IService } from '@/entities/service/model';

import { serviceApi } from './serviceApi';

const checkServices = (services: Array<IService>) => {
  services.forEach((service): asserts service is IService => {
    expect(service).toMatchObject({
      id: expect.any(Number),
      price: expect.any(Number),
      title: expect.any(String)
    });
  });
};

describe('test serviceApi', () => {
  test('is array', async () => {
    const services = await serviceApi.getServices();

    expect(Array.isArray(services)).toBe(true);
  });

  test('all data', async () => {
    const services = await serviceApi.getServices();

    checkServices(services);
  });

  test('first page', async () => {
    const services = await serviceApi.getServices({ limit: 20, page: 1 });

    checkServices(services);
  });

  test('second page', async () => {
    const services = await serviceApi.getServices({ limit: 20, page: 2 });

    checkServices(services);
  });

  test('third page', async () => {
    const services = await serviceApi.getServices({ limit: 20, page: 3 });

    checkServices(services);
  });

  test('empty data', async () => {
    const services = await serviceApi.getServices({ limit: 20, page: 8 });

    if (!services.length) {
      expect(services.length).toEqual(0);
    } else {
      checkServices(services);
    }
  });
});
