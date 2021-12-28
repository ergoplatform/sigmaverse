import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function Faucet({ data, filter }: any) {
  const faucet = data.filter((element: any) => element.category == 'faucet');
  if ((faucet.length != 0 && filter == 'Faucet') || (faucet.length != 0 && filter == 'All')) {
    return <CategoryPresentation data={faucet} />;
  } else return null;
}
