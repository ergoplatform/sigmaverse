import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function Dex({ data, filter }: any) {
  const Dex = data.filter((element: any) => element.category == 'DEX');
  if ((Dex.length != 0 && filter == 'DEX') || (Dex.length != 0 && filter == 'All')) {
    return <CategoryPresentation data={Dex} />;
  } else return null;
}
