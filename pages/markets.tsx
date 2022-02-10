import React from 'react';
import WithLayout from '../components/HOC/withLayout';
import Markets from '../components/MainComponents/Markets/Markets';

const markets = () => {
  return <Markets/>;
};

export default WithLayout(markets, 'Markets');
