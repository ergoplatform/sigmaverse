import { GetStaticProps } from 'next';
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import Dapps from '../components/Dapps/Dapps';
import Filters from '../components/Filters/filters';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import { getApplcations } from '../utils/getApplications';
import { getCarouselItems } from '../utils/getCarouselItems';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  ignoreLocation: true,
  maxPatternLength: 12,
  minMatchCharLength: 1,
  keys: ['name', 'description', 'appCategory'],
};

export default function IndexPage({ applications, carouselItems }: any) {
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [filter, setFilter] = useState<string>('All');

  const fuse = useMemo(() => new Fuse(applications, fuseOptions), [applications]);
  const searchedApplications = useMemo(() => fuse.search(searchedValue).map(({ item }) => item), [
    searchedValue,
    fuse,
  ]);

  const data = searchedValue ? searchedApplications : applications;

  return (
    <div className="container">
      <Header searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
      <Carousel carouselItems={carouselItems} />
      <Filters filter={filter} setFilter={setFilter} />
      <div className="dapps">
        <Dapps data={data} filter={filter} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const applications = getApplcations();
  const carouselItems = getCarouselItems();
  return {
    props: {
      applications,
      carouselItems,
    },
  };
};

// dapps
// utilities
// Oracle
// mining
// NFT projects
// token projects
// wallets
// Work in Progress projects
// DEX
// faucet
