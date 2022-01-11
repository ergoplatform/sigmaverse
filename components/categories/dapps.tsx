import React from 'react';
import CategoryPresentation from './categoryPresentation';

let cache: any = null;

export default function Dapps({ data, filter }: any) {
  if (data.length === 0) {
    return <>dApps not found</>;
  }

  if (cache === null) {
    cache = data.reduce((acc: any, item: any) => {
      if (acc[item.category]) {
        acc[item.category].push(item);
      } else {
        acc[item.category] = [item];
      }
      return acc;
    }, {});
  }

  if (filter === 'All') {
    return <CategoryPresentation data={data} />;
  }

  return <CategoryPresentation data={cache[filter]} />;
}
