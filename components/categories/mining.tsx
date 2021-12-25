import React from 'react';

export default function Mining({ data }: any) {
  const mining = data.filter((element: any) => element.category == 'mining');
  if (mining.length != 0) {
    return (
      <div className="dapps__content">
        <div className="dapps__title">Mining projects</div>
        <div className="dapps__container">
          {mining.map(({ logo, preview, name, description, website }: any) => (
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
