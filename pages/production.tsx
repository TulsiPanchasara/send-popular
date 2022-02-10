import React from 'react';
import WithLayout from '../components/HOC/withLayout';
import ProductionList from '../components/MainComponents/Production/ProductionList';

const production = () => {
  return <ProductionList/>;
};

export default WithLayout(production, 'Production');
