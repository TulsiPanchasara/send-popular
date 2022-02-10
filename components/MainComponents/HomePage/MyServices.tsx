import React from 'react';
import { SendArrow } from '../../../assets/svgs/sendArrow';

const MyServices = () => {
    return <div className='my-12 w-full' >
        <div className='text-customRed-1 text-center' >MY SERVICES</div>
        <h1 className='text-center my-2 font-semibold text-4xl' >Our Provided Features &amp; Expertise</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-9 container mx-auto mt-14 px-10' >
            <div className='shadow-xl p-5' >
                <img src="/images/Service.png" />
                <div className='text-customGray-3 mt-8 mb-3 '>ABOUT US</div>
                <img src="/images/Line 20.png" />
                <p className='mt-8 mb-10' >Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.</p>
                <button  className=' bg-customRed-1 text-customWhite-1 text-xs px-4 py-3 rounded' >
                <a href="/about-us" className='flex' >KNOW MORE <SendArrow className='w-4 h-4 ml-2' /></a> </button>
            </div>
            <div className='shadow-xl p-5' >
                <img src="/images/Service.png" />
                <div className='text-customGray-3 mt-8 mb-3 '>OUR VISION</div>
                <img src="/images/Line 20.png" />
                <p className='mt-8 mb-10' >Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.</p>
                <button  className=' bg-customRed-1 text-customWhite-1 text-xs px-4 py-3 rounded' >
                <a href="/about-us" className='flex' >KNOW MORE <SendArrow className='w-4 h-4 ml-2' /></a> </button>
            </div>
            <div className='shadow-xl p-5' >
                <img src="/images/Service.png" />
                <div className='text-customGray-3 mt-8 mb-3 '>OUR MISSION</div>
                <img src="/images/Line 20.png" />
                <p className='mt-8 mb-10' >Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.</p>
                <button  className=' bg-customRed-1 text-customWhite-1 text-xs px-4 py-3 rounded' >
                <a href="/about-us" className='flex' >KNOW MORE <SendArrow className='w-4 h-4 ml-2' /></a> </button>
            </div>
        </div>
  </div>;
};

export default MyServices;
