import { useQuery } from '@tanstack/react-query';

import { IGetServicesParams, IService, serviceApi } from '@/entities/service';

export const useServices = (params?: IGetServicesParams) => {
  return useQuery<Array<IService>>({
    queryKey: ['services', params?.limit, params?.page],
    queryFn: () =>
      serviceApi.getServices({
        limit: params?.limit,
        page: params?.page
      })
  });
};
