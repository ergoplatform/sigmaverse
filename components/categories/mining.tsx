import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function Mining({ data, filter }: any) {
  const mining = data.filter((element: any) => element.category == 'mining');
  if ((mining.length != 0 && filter == 'Mining') || (mining.length != 0 && filter == 'All')) {
    return <CategoryPresentation data={mining} />;
  } else return null;
}
