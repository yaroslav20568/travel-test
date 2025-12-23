import {
  InfiniteData,
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery
} from '@tanstack/react-query';

interface IOptions<TData, TParams> {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext<QueryKey, number>,
    params?: TParams
  ) => Promise<TData[]>;
  params?: TParams;
  limit?: number;
}

export const useInfiniteScroll = <TData, TParams = unknown>({
  queryKey,
  queryFn,
  params,
  limit
}: IOptions<TData, TParams>) => {
  return useInfiniteQuery<
    TData[],
    Error,
    InfiniteData<TData[]>,
    QueryKey,
    number
  >({
    queryKey: [...queryKey, params],
    queryFn: (context: QueryFunctionContext<QueryKey, number>) =>
      queryFn(context, params),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      if (limit && lastPage.length < limit) {
        return undefined;
      }
      return allPages.length + 1;
    },
    initialPageParam: 1
  });
};
