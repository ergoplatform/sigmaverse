import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  ignoreLocation: true,
  maxPatternLength: 12,
  minMatchCharLength: 1,
  keys: ['name', 'description', 'appCategory'],
};

export default function IndexPage({ applications }: any) {
  const [searchedValue, setSearchedValue] = useState('');
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
              <a href="https://github.com/ergoplatform/sigmaverse" target="_blank">
                Add dApp
              </a>
            </li>
            <li className="navigation-list__item">
              <a href="https://ergoplatform.org/en/" target="_blank">
                Ergo Website
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
              Your portal to the{' '}
              <a
                style={{ color: '#ff4421', textDecoration: 'none' }}
                href="https://ergoplatform.org"
                target="_blank"
              >
                Ergo
              </a>{' '}
              universe
            </p>
          </div>
          <div>
            <img className="sigma-ergonaut" src="/images/Ergonaut_4k.png" alt="ergonaut" />
          </div>
        </div>
      </div>
      <div className="search">
        <div className="search__input-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            role="img"
            className="icon fill-current search-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
            ></path>
          </svg>
          <input
            onChange={({ target: { value } }) => setSearchedValue(value)}
            value={searchedValue}
            className="search__input"
            type="text"
            placeholder="Search for dApps..."
          />
        </div>
      </div>
      <div className="dapps">
        <div className="dapps__content">
          {data.map(({ logo, preview, name, description, website }: any) => (
            <a key={website} href={website} target="_blank" className="dapps-card">
              <img src={preview} alt={`${name} preview`} className="dapps-card__preview" />
              <div className="dapps-card__content">
                <div className="dapps-card__header">
                  <img src={logo} alt={`${name} logotype`} className="dapps-card__logotype" />{' '}
                  {name}
                </div>
                <p className="dapps-card__description">{description}</p>
              </div>
            </a>
          ))}
        </div>
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

  const applications = filenames.map((filename) => {
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
