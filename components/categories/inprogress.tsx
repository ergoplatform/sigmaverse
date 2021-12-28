import React from 'react';
import CategoryPresentation from './categoryPresentation';

export default function InProgress({ data, filter }: any) {
  const workInProgress = data.filter((element: any) => element.category == 'InProgress');
  if (
    (workInProgress.length != 0 && filter == 'inProgress') ||
    (workInProgress.length != 0 && filter == 'All')
  ) {
    return <CategoryPresentation data={workInProgress} />;
  } else return null;
}
