import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import Dex from '../components/categories/dex';
import Dapps from '../components/categories/dapps';
import Tokens from '../components/categories/Tokens';
import Nft from '../components/categories/nft';
import InProgress from '../components/categories/inprogress';
import Faucet from '../components/categories/faucets';
import Wallets from '../components/categories/wallets';
import Mining from '../components/categories/mining';
import Utilities from '../components/categories/utilities';
import Oracle from '../components/categories/oracle';
import SearchBar from '../components/SearchBar/SearchBar';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  ignoreLocation: true,
  maxPatternLength: 12,
  minMatchCharLength: 1,
  keys: ['name', 'description', 'appCategory'],
};

export default function IndexPage({ applications }: any) {
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");

  const fuse = useMemo(() => new Fuse(applications, fuseOptions), [applications]);
  const searchedApplications = useMemo(() => fuse.search(searchedValue).map(({ item }) => item), [
    searchedValue,
    fuse,
  ]);

  const data = searchedValue ? searchedApplications : applications;

  return (
    <div>
      <header>
        <nav className="navigation">
          <div className="logotype">
            <img src="/images/logo_original.svg" alt="Logotype" />
          </div>
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <a
                href="https://github.com/ergoplatform/sigmaverse"
                target="_blank"
              >
                Add New DApp
              </a>
            </li>
            <li className="navigation-list__item">
              <a
                href="https://ergoplatform.org/en/blog/2020-12-08-ergo-headless-dapp-framework-now-available/"
                target="_blank"
              >
                DApp Framework
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="header">
          <div className="header__content">
            <h1 className="header__introduce">SIGMAVERSE</h1>
            <p className="header__paragraph">
              Your portal to the{" "}
              <a
                style={{ color: "#ff4421", textDecoration: "none" }}
                href="https://ergoplatform.org"
                target="_blank"
              >
                Ergo
              </a>{" "}
              universe
            </p>
          </div>
          <div>
            <img
              className="sigma-ergonaut"
              src="/images/Ergonaut_4k.png"
              alt="ergonaut"
            />
          </div>
        </div>
      </div>
      <SearchBar
        filter={filter}
        setFilter={setFilter}
        value={searchedValue}
        setSearchedValue={setSearchedValue}
      />
      <div className="dapps">
        <Dapps data={data} filter={filter} />
        <Tokens data={data} filter={filter} />
        <Nft data={data} filter={filter} />
        <Dex data={data} filter={filter} />
        <Utilities data={data} filter={filter} />
        <Wallets data={data} filter={filter} />
        <Mining data={data} filter={filter} />
        <Oracle data={data} filter={filter} />
        <Faucet data={data} filter={filter} />
        <InProgress data={data} filter={filter} />
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
