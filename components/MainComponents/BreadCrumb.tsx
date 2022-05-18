import React from 'react';

interface IBreadCrumbProps{
    title: string
}

const BreadCrumb = ({title}: IBreadCrumbProps) => {
  return (<div style={{
    backgroundImage: 'url("/images/tbg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '130px',
    paddingBottom: '100px'
  }} className='text-center text-customWhite-1 text-lg mb-24 ' >
    <span className='mr-2 text-customWhite-1 hover:text-opacity-60' ><a href='/' >Home</a> </span>
    &gt;
    <span className='ml-2' >{title}</span>
  </div>);
};

export default BreadCrumb;
