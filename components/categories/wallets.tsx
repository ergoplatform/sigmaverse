import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function Wallets({ data, filter }: any) {
  const wallets = data.filter((element: any) => element.category == 'wallets');
  if ((wallets.length != 0 && filter == 'Wallet') || (wallets.length != 0 && filter == 'All')) {
    return <CategoryPresentation data={wallets} />;
  } else return null;
}
