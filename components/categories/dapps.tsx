import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function Dapps({ data, filter }: any) {
  const dapps = data.filter((element: any) => element.category == 'dapps');
  if ((dapps.length != 0 && filter == 'Dapp') || (dapps.length != 0 && filter == 'All')) {
    return <CategoryPresentation data={dapps} />;
  } else return null;
}
