import React, { useRef } from 'react';

export default function Filters({ filter, setFilter }: any) {
  const ref = useRef<any>();

  return (
    <div className="filter">
      <h1>Explore the universe of Sigmaverse</h1>
      <div className="filter__container">
        <button
          className="left_button"
          onClick={() => {
            ref.current.scrollLeft -= 120;
          }}
        />
        <div className="filter-item" ref={ref}>
          {[
            'All',
            'dApps',
            'Privacy',
            'NFTs',
            'Metaverse',
            'Explore',
            'Mining',
            'Tooling',
            'Tokens',
            'Wallets',
          ].map((e) => (
            <div
              key={e}
              className={e == filter ? 'filter-item__active' : 'filter-item__tag'}
              onClick={() => setFilter(e)}
            >
              {e}
            </div>
          ))}
        </div>
        <button
          className="right_button"
          onClick={() => {
            ref.current.scrollLeft += 120;
          }}
        />
      </div>
    </div>
  );
}
