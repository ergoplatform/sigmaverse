import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function Oracle({ data, filter }: any) {
  const oracle = data.filter((element: any) => element.category == 'oracle');
  if ((oracle.length != 0 && filter == 'Oracle') || (oracle.length != 0 && filter == 'All')) {
    return <CategoryPresentation data={oracle} />;
  } else return null;
}
