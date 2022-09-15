import { PROJECT_CATEGORIES } from '../../../api/methods';
import { axiosGetFetcher } from '../../../api/axios';
import qs from 'qs';
import useSWR from 'swr';
import { useMemo } from 'react';

export const useCategories = () => {
  const { data, isValidating } = useSWR(() => {
    const query = qs.stringify(
      {
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      },
    );
    return `${PROJECT_CATEGORIES}?${query}`;
  }, axiosGetFetcher);

  const omittedData = useMemo(() => {
    return (
      data?.data
        ?.map(({ attributes }: { attributes: { title: string } }) => attributes?.title)
        .filter((title: string) => !!title) || []
    );
  }, [data]);

  return {
    data: ['All', ...omittedData],
    isValidating,
  };
};
