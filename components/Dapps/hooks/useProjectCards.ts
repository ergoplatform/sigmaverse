import useSWRInfinite from 'swr/infinite';
import { PROJECT_CARDS_METHOD } from '../../../api/methods';
import { axiosGetFetcher } from '../../../utils/axios';
import qs from 'qs';
import { DEFAULT_PAGE_SIZE } from '../../../config/constants';

export const useProjectCards = () => {
  const { data, error, mutate, isValidating, size, setSize } = useSWRInfinite((index) => {
    const query = qs.stringify(
      {
        populate: '*',
        pagination: {
          pageSize: DEFAULT_PAGE_SIZE,
          page: index + 1,
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      },
    );
    return `${PROJECT_CARDS_METHOD}?${query}`;
  }, axiosGetFetcher);

  return {
    data,
    isValidating,
    isError: error,
    mutate,
    size,
    setSize,
  };
};
