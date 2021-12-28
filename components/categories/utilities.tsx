import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function Utilities({ data, filter }: any) {
  const utilities = data.filter((element: any) => element.category == 'utilities');
  if (
    (utilities.length != 0 && filter == 'Utility') ||
    (utilities.length != 0 && filter == 'All')
  ) {
    return <CategoryPresentation data={utilities} />;
  } else return null;
}
