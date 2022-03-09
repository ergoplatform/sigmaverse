import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import Dapps from '../components/categories/dapps';
import Filters from '../components/Filters/filters';
import Header from '../components/Header/Header';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  ignoreLocation: true,
  maxPatternLength: 12,
  minMatchCharLength: 1,
  keys: ['name', 'description', 'appCategory'],
};

export default function IndexPage({ applications }: any) {
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
      <Header
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />
      <Filters
        filter={filter}
        setFilter={setFilter}/>
      <div className="dapps">
        <Dapps data={data} filter={filter} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const applicationsDirectory = path.join(process.cwd(), 'applications');
  const applicationsImagesDirectory = path.join(process.cwd(), 'public/images/applications');

  if (!fs.existsSync(applicationsImagesDirectory)) {
    fs.mkdirSync(applicationsImagesDirectory);
  }

  const filenames = fs.readdirSync(applicationsDirectory);

  const applications = filenames
    .filter((filename) => !filename.match('.DS_Store'))
    .map((filename) => {
      const filePath = path.join(applicationsDirectory, filename);

      const { data }: any = matter(fs.readFileSync(`${filePath}/overview.md`, 'utf8'));

      const newLogoPath = `/images/applications/${data.logo_image}`;
      const newPreviewPath = `/images/applications/${data.preview_image}`;

      fs.copyFileSync(
        `${filePath}/${data.logo_image}`,
        `${applicationsImagesDirectory}/${data.logo_image}`,
      );
      fs.copyFileSync(
        `${filePath}/${data.preview_image}`,
        `${applicationsImagesDirectory}/${data.preview_image}`,
      );

      return {
        ...data,
        logo: newLogoPath,
        preview: newPreviewPath,
      };
    });

  return {
    props: {
      applications,
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
