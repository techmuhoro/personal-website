import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const LazyHome = dynamic(() => import('components/Home'), {
   suspense: true,
   ssr: false,
});

const Home: NextPage = () => {
   return (
      <Suspense fallback="Loading...">
         <LazyHome />
      </Suspense>
   );
};

export default Home;
