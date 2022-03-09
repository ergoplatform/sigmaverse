import React, { useState } from 'react';
import classNames from 'classnames';
import SearchBar from '../SearchBar/SearchBar';

export default function Header({ searchedValue, setSearchedValue }: any) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className={classNames('navigation', { 'navigation--open': isOpen })}>
          <button
            className="navigation__toggle"
            onClick={() => {
              document.body.classList.add('sidebar-open');
              setIsOpen(true);
            }}
          >
            <img src="/images/icons/burger-menu.svg" alt="Burger" />
          </button>
          <div className="navigation__logo">
            <img src="/images/logo_new.svg" alt="Logotype" />
          </div>
          <button
            className="navigation__close"
            onClick={() => {
              document.body.classList.remove('sidebar-open');
              setIsOpen(false);
            }}
          >
            <img src="/images/icons/close.svg" alt="Close" />
          </button>
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <SearchBar value={searchedValue} setSearchedValue={setSearchedValue} />
            </li>
            <li className="navigation-list__item">
              <a
                href="https://ergoplatform.org/en/blog/2020-12-08-ergo-headless-dapp-framework-now-available/"
                target="_blank"
                className="navigation-list__link"
              >
                About DApp Framework
              </a>
            </li>
            <li className="navigation-list__item">
              <a
                href="https://github.com/ergoplatform/sigmaverse"
                target="_blank"
                className="button"
              >
                Add New DApp
              </a>
            </li>
          </ul>
        </nav>
      </header>

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
  );
}
