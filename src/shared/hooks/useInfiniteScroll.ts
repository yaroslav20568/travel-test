import {
  InfiniteData,
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery
} from '@tanstack/react-query';

interface IUseInfiniteScrollParams<TData, TParams> {
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
  limit = 20
}: IUseInfiniteScrollParams<TData, TParams>) => {
  return useInfiniteQuery<
    TData[],
    Error,
    InfiniteData<TData[]>,
    QueryKey,
    number
  >({
    queryKey: [...queryKey, limit, params],
    queryFn: (context: QueryFunctionContext<QueryKey, number>) =>
      queryFn(context, params),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) {
        return undefined;
      }
      return allPages.length + 1;
    },
    initialPageParam: 1
  });
};
