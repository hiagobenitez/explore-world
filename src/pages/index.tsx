import CardsSub from '@/layouts/Cards';
import HomeLayout from '@/layouts/Home';
import { PicturesLayout } from '@/layouts/Pictures';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <HomeLayout />
      <CardsSub />
      <PicturesLayout />
    </>
  );
};

export default Home;
