import React, { useEffect, useState } from 'react';
import WithLayout from '../components/HOC/withLayout';
import ProductsList from '../components/MainComponents/Products/ProductsList';
import { API_SERVICE_URL } from '../config/constants';

const products = () => {
  const [allProducts, setAllProducts]= useState<any>();

  useEffect(() => {
    getContent();
  }, [])

  const getContent = async () => {
    const res = await fetch(`${API_SERVICE_URL}/products/read.php`);
    const response = await res.json();
    if (response) {
      setAllProducts(response);
    }
  }
  

  return <ProductsList allProducts={allProducts} />;
};

export default WithLayout(products, 'Products');
