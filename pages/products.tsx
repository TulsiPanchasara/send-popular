import React from 'react';
import WithLayout from '../components/HOC/withLayout';
import ProductsList from '../components/MainComponents/Products/ProductsList';

const products = () => {
  return <ProductsList/>;
};

export default WithLayout(products, 'Products');
