import React from 'react';
import WithLayout from '../components/HOC/withLayout';
import Quality from '../components/MainComponents/Quality/Quality';

const quality = () => {
  return <Quality/>;
};

export default WithLayout(quality, 'Quality');
