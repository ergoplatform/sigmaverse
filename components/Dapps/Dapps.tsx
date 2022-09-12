import React, { useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import DappsCard from './DappsCard';

export default function Dapps({ projects, size, setSize }: any) {
  const transformedData = useMemo(
    () => projects?.reduce((acc: any, responses: any) => [...acc, ...responses.data], []) || [],
    [projects],
  );

  return (
    <div style={{ paddingBottom: '300px' }}>
      <InfiniteScroll
        dataLength={transformedData.length}
        next={() => setSize(size + 1)}
        hasMore={projects?.[0]?.meta.pagination.pageCount !== size}
        loader={<h4>Loading...</h4>}
        className="w-full pb-20"
      >
        <DappsCard data={transformedData} />
      </InfiniteScroll>
    </div>
  );
}
