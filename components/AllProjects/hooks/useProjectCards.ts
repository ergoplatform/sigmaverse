import useSWRInfinite from 'swr/infinite';
import { PROJECT_CARDS_METHOD } from '../../../api/methods';
import { axiosGetFetcher } from '../../../api/axios';
import qs from 'qs';
import { DEFAULT_PAGE_SIZE } from '../../../config/constants';
import { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

export const useProjectCards = () => {
  const [filter, setFilter] = useState('');
  const [searchString, setSearchString] = useState('');
  const { data, error, mutate, isValidating, size, setSize } = useSWRInfinite((index) => {
    const query = qs.stringify(
      {
        populate: '*',
        pagination: {
          pageSize: DEFAULT_PAGE_SIZE,
          page: index + 1,
        },
        filters: {
          project_categories:
            filter !== 'All' && filter !== ''
              ? {
                  title: {
                    $eq: filter,
                  },
                }
              : undefined,
          $or:
            searchString !== ''
              ? [
                  {
                    name: {
                      $containsi: searchString,
                    },
                  },
                  {
                    description: {
                      $containsi: searchString,
                    },
                  },
                ]
              : undefined,
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      },
    );
    return `${PROJECT_CARDS_METHOD}?${query}`;
  }, axiosGetFetcher);

  const filterData = useCallback(
    (newFilter) => {
      setFilter(newFilter);
    },
    [setFilter],
  );
  const searchHandler = (newSearch: string) => setSearchString(newSearch);

  const debouncedSearchHandler = useMemo(() => debounce(searchHandler, 300), []);

  useEffect(() => {
    return () => {
      debouncedSearchHandler.cancel();
    };
  }, []);

  return {
    data,
    isValidating,
    isError: error,
    filterData,
    debouncedSearchHandler,
    mutate,
    size,
    setSize,
  };
};
