import React, { useRef } from 'react';
import classNames from 'classnames';
import SearchBar from '../SearchBar/SearchBar';
import useSideBar from '../../hooks/useSideBar';

export default function Header({ searchedValue, setSearchedValue }: any) {
  const sideBarRef = useRef(null);
  let { isOpen, open, close } = useSideBar(sideBarRef);
  return (
    <div>
      <header>
        <nav className={classNames('navigation', { 'navigation--open': isOpen })}>
          <button className="navigation__toggle" onClick={() => open()}>
            <img src="/images/icons/burger-menu.svg" alt="Burger" />
          </button>
          <div className="navigation__logo">
            <img src="/images/logo_new.svg" alt="Logotype" />
          </div>
          <button className="navigation__close" onClick={() => close()}>
            <img src="/images/icons/close.svg" alt="Close" />
          </button>
          <ul ref={sideBarRef} className="navigation-list">
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
    </div>
  );
}
