import React from 'react';

export default function CategoryPresentation({ data }: any) {
  return (
    <>
      {data.map(({ logo, preview, name, description, website }: any) => (
        <a key={website} href={website} target="_blank" className="dapps-card">
          <div className="dapps-card__preview">
            <img src={preview} alt={`${name} preview`} />
          </div>
          <div className="dapps-card__content">
            <img src={logo} alt={`${name} logotype`} className="dapps-card__logotype" />
            <div className="dapps-card__name">{name}</div>
            <p className="dapps-card__description">{description}</p>
          </div>
        </a>
      ))}
    </>
  );
}
