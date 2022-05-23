import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React, { useMemo, useState } from 'react';
import Dapps from '../components/Dapps/Dapps';
import Filters from '../components/Filters/filters';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Fuse from 'fuse.js';
import { getApplcations } from '../utils/getApplications';
import { SearchIcon } from '@chakra-ui/icons';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  ignoreLocation: true,
  maxPatternLength: 12,
  minMatchCharLength: 1,
  keys: ['name', 'description', 'appCategory'],
};

const AllProjects = ({ applications }: any) => {
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [filter, setFilter] = useState<string>('All');

  const fuse = useMemo(() => new Fuse(applications, fuseOptions), [applications]);
  const searchedApplications = useMemo(
    () => fuse.search(searchedValue).map(({ item }) => item),
    [searchedValue, fuse],
  );

  const data = searchedValue ? searchedApplications : applications;

  return (
    <Box>
      <Container maxW={'6xl'} className="container">
        <Header />
        <Box pt={{ base: 20 }} pb={{ base: 12 }} display="flex" justifyContent="center">
          <Stack spacing={{ base: 8 }}>
            <Heading fontSize={{ base: '4xl' }}>Explore the universe of Sigmaverse</Heading>

            <Box display="flex" justifyContent="center">
              <InputGroup w={{ base: '100%', md: '70%' }}>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                <Input
                  onChange={({ target: { value } }) => setSearchedValue(value)}
                  variant="filled"
                  bg="whiteAlpha.200"
                  type="text"
                  placeholder="Seach the dApp..."
                  _placeholder={{ opacity: 1, color: 'whiteAlpha.700' }}
                />
              </InputGroup>
            </Box>
          </Stack>
        </Box>
        <Filters filter={filter} setFilter={setFilter} />
        <div className="dapps">
          <Dapps data={data} filter={filter} />
        </div>
      </Container>
      <Footer />
    </Box>
  );
};

export default AllProjects;

export const getStaticProps: GetStaticProps = async () => {
  const applications = getApplcations();
  return {
    props: {
      applications,
    },
  };
};
