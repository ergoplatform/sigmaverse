import React /*, { useRef }*/ from 'react';
import SearchIconSvg from './SearchIconSvg';

export default function SearchBar({ searchedValue, setSearchedValue }: any) {/*  const ref = useRef<any>();*/

  return (
    <div className="search">
      <SearchIconSvg />
      <input
        onChange={({ target: { value } }) => setSearchedValue(value)}
        value={searchedValue}
        className="search__input"
        type="text"
        placeholder="Search for DApps"
      />
      {/*      <div className="filter__container">
        <button
          className="right_button"
          onClick={() => {
            ref.current.scrollLeft -= 120;
          }}
        />
        <div className="filter" ref={ref}>
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

          ].map((e) => (
            <div
              key={e}
              className={e == filter ? 'filter__active' : 'filter__tag'}
              onClick={() => setFilter(e)}
            >
              {e}
            </div>
          ))}
        </div>
        <button
          className="left_button"
          onClick={() => {
            ref.current.scrollLeft += 120;
          }}
        />
      </div>*/}
    </div>
  );
}
