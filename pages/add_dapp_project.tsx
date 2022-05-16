import React from 'react';
import Header from '../components/Header/Header';

type Props = {};

const AddDappProjectPage = (props: Props) => {
  return (
    <div className="container">
      <Header searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
    </div>
  );
};

export default AddDappProjectPage;
