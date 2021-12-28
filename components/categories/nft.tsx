import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function Nft({ data, filter }: any) {
  const NFT = data.filter((element: any) => element.category == 'NFT');
  if ((NFT.length != 0 && filter == 'NFT') || (NFT.length != 0 && filter == 'All')) {
    return <CategoryPresentation data={NFT} />;
  } else return null;
}
