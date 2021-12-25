import React from 'react';

export default function Dex({ data }: any) {
  const Dex = data.filter((element: any) => element.category == 'DEX');
  if (Dex.length != 0) {
    return (
      <div className="dapps__content">
        <div className="dapps__title">Decentralized Exchanges</div>
        <div className="dapps__container">
          {Dex.map(({ logo, preview, name, description, website }: any) => (
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
    );
  } else return null;
}
