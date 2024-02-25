import React from 'react';
import HomeHead from '../components/HomeHead';
import Sponsors from '../components/Sponsors';
import Carousell from '../components/Carousell';
import Solutions from '../components/Solutions';
import DownPart from '../components/DownPart';

const Home = () => {
  return (
    <div>
      <HomeHead />
      <Sponsors />
      <Carousell />
      <Solutions />
      <DownPart />
    </div>
  );
};

export default Home;
