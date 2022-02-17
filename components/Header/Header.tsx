import React from 'react';

export default function Header() {
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
                Add New Project
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
    </div>
  );
}
