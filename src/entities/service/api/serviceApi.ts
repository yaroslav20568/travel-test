import { mockServices } from '@/entities/service/mock';
import { IService } from '@/entities/service/model';

export interface IGetServicesParams {
  limit?: number;
  page?: number;
}

class ServiceApi {
  public static async getServices(
    params?: IGetServicesParams
  ): Promise<Array<IService>> {
    const limit = params?.limit ?? mockServices.length;
    const page = params?.page ?? 1;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    await new Promise(resolve => setTimeout(resolve, 300));

    return mockServices.slice(startIndex, endIndex);
  }
}

export const serviceApi = ServiceApi;
