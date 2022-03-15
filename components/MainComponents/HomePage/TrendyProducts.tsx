import React from 'react';
import { SendArrow } from '../../../assets/svgs/sendArrow';

const TrendyProducts = () => {
    return (
        <div className='my-12' >
            <div className='text-customRed-1 text-center' >PRODUCTS</div>
            <div className='text-3xl text-center my-2' >Trendy Products</div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-9 container mx-auto mt-14 px-10 ' >
            <div className='shadow-xl' >
                <img src="/images/fish-1.png"  className='w-full' />
                <div className='p-5' >
                    <div className='text-customRed-1' >26th</div>
                    <div className='text-customGray-3 mb-3'>Lorem ipsum dolor sit amet, consetetur </div>
                    <img src="/images/Line 20.png" />
                    <p className='mt-8 mb-10' >Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.</p>
                    
                    <a href="/about-us" className='flex text-customRed-1 items-center text-sm ' >Know <SendArrow className='w-4 h-4 ml-2' /></a> 
                </div>
            </div>
            <div className='shadow-xl' >
                <img src="/images/fish-1.png"  className='w-full' />
                <div className='p-5' >
                    <div className='text-customRed-1' >26th</div>
                    <div className='text-customGray-3 mb-3'>Lorem ipsum dolor sit amet, consetetur </div>
                    <img src="/images/Line 20.png" />
                    <p className='mt-8 mb-10' >Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.</p>
                    
                    <a href="/about-us" className='flex text-customRed-1 items-center text-sm ' >Know <SendArrow className='w-4 h-4 ml-2' /></a> 
                </div>
            </div>
            <div className='shadow-xl' >
                <img src="/images/fish-1.png"  className='w-full' />
                <div className='p-5' >
                    <div className='text-customRed-1' >26th</div>
                    <div className='text-customGray-3 mb-3'>Lorem ipsum dolor sit amet, consetetur </div>
                    <img src="/images/Line 20.png" />
                    <p className='mt-8 mb-10' >Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.</p>
                    
                    <a href="/about-us" className='flex text-customRed-1 items-center text-sm ' >Know <SendArrow className='w-4 h-4 ml-2' /></a> 
                </div>
            </div>
            </div>
            <div className='flex justify-center mt-10' >
                <a href="/products" className=' bg-customRed-1 text-customWhite-1 text-xs px-4 py-3 rounded ' >
                View All
            </a>
            </div>
        </div>);
};

export default TrendyProducts;
