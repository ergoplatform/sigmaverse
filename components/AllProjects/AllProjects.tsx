import { Box, Heading, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import Dapps from '../../components/Dapps/Dapps';
import Filters from '../../components/Filters/filters';
import { SearchIcon } from '@chakra-ui/icons';
import qs from 'query-string';
import { useCategories } from './hooks/useCategories';
import { useProjectCards } from './hooks/useProjectCards';

export const AllProjectsPageContent = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [filter, setFilter] = useState<string>('dApps');
  const [searchedValue, setSearchedValue] = useState<string>('');
  const { data: categories, isValidating } = useCategories();
  const { data: projects, size, setSize, filterData, debouncedSearchHandler } = useProjectCards();

  const setCategory = useCallback(
    (category) => {
      setFilter(category);

      filterData(category);

      const newurl = qs.stringifyUrl({ url: location.search, query: { category } });
      window.history.pushState({ path: newurl }, '', newurl);
    },
    [setFilter, filterData],
  );

  const onChangeSearch = (searchedValue: string) => {
    setSearchedValue(searchedValue);
    debouncedSearchHandler(searchedValue);
  };

  useEffect(() => {
    if (!isValidating && !pageLoaded) {
      setPageLoaded(true);

      const { category = 'dApps' } = qs.parse(location.search);

      setCategory(
        categories.find((value) => value.toLowerCase() === String(category).toLowerCase()) || 'All',
      );
    }
  }, [categories, isValidating, setCategory, pageLoaded]);

  if (!pageLoaded) {
    return null;
  }

  return (
    <div>
      <Box pt={{ base: 10 }} pb={{ base: 10 }} display="flex" justifyContent="center">
        <Stack spacing={{ base: 8 }}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }}>Explore the Sigmaverse</Heading>

          <Box display="flex" justifyContent="center">
            <InputGroup w={{ base: '100%', md: '85%' }}>
              <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
              <Input
                onChange={({ target: { value } }) => onChangeSearch(value)}
                variant="filled"
                bg="whiteAlpha.200"
                type="text"
                placeholder="Search Projects..."
                _placeholder={{ opacity: 1, color: 'whiteAlpha.700' }}
                value={searchedValue}
              />
            </InputGroup>
          </Box>
        </Stack>
      </Box>
      <Filters filter={filter} setCategory={setCategory} categories={categories} />
      <Dapps projects={projects} size={size} setSize={setSize} filter={filter} />
    </div>
  );
};
