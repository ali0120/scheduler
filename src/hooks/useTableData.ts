import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { fetchData } from '../services/api';
import { limitState } from '../states/limitSize';

export const useTableData = () => {
  const limit = useRecoilValue(limitState);
  const { data: apiData, isLoading, isError, refetch, isFetching } = useInfiniteQuery('tableData', () => fetchData(limit));
  const tableData = apiData?.pages.flatMap((page) => page) || [];

  useEffect(() => {
    refetch();
  }, [limit, refetch]);

  return { tableData, isLoading, isError, isFetching };
};
