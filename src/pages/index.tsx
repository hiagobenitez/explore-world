import CardsSub from '@/layouts/Cards';
import HomeLayout from '@/layouts/Home';
import AnimationLayout from '@/layouts/Loader';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <AnimationLayout />
      <HomeLayout />
      <CardsSub />
    </>
  );
};

export default Home;
