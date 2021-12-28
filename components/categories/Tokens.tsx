import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function Tokens({ data, filter }: any) {
  const token = data.filter((element: any) => element.category == 'token');
  if ((token.length != 0 && filter == 'Token') || (token.length != 0 && filter == 'All')) {
    return <CategoryPresentation data={token} />;
  } else return null;
}
