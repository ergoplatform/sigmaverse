import React from 'react';
import SearchIconSvg from './SearchIconSvg';

export default function SearchBar({ searchedValue, setSearchedValue }: any) {
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
    </div>
  );
}
