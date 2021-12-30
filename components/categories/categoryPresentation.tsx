import React from 'react';

export default function CategoryPresentation({ data }: any) {
  return (
    <>
      {data.map(({ logo, preview, name, description, website }: any) => (
        <a key={website} href={website} target="_blank" className="dapps-card">
          <img src={preview} alt={`${name} preview`} className="dapps-card__preview" />
          <div className="dapps-card__content">
            <div className="dapps-card__header">
              <img src={logo} alt={`${name} logotype`} className="dapps-card__logotype" /> {name}
            </div>
            <p className="dapps-card__description">{description}</p>
          </div>
        </a>
      ))}
    </>
  );
}
