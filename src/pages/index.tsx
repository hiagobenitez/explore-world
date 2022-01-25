import CardsSub from '@/layouts/Cards';
import HomeLayout from '@/layouts/Home';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <HomeLayout />
      <CardsSub />
    </>
  );
};

export default Home;
