import React from 'react';

interface IBreadCrumbProps{
    title: string
}

const BreadCrumb = ({title}: IBreadCrumbProps) => {
  return (<div className='text-center text-customGray-4 text-sm mt-5 mb-24 ' >
    <span className='mr-2' ><a href='/' >Home</a> </span>
    &gt;
    <span className='ml-2' >{title}</span>
  </div>);
};

export default BreadCrumb;
