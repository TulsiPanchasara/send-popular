import React from 'react';
import { SendArrow } from '../../../assets/svgs/sendArrow';

const MyServices = () => {
    return <div className='my-12 w-full px-9' >
        <div className='text-customRed-1 text-center' >MY SERVICES</div>
        <h1 className='text-center my-2 font-semibold text-4xl' >Our Provided Features &amp; Expertise</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-9 container mx-auto mt-14 ' >
            <div className='shadow-xl hover:shadow-2xl p-5 relative' >
                <img src="/images/Service.png" />
                <div className='text-customGray-3 mt-8 mb-3 '>ABOUT US</div>
                <img src="/images/Line 20.png" />
                <p className='mt-8 mb-14' >
                    Send &amp; Popular is a global web site of Indian Sales, Thangadh. We are suppliers of high quality sanitary ware from India.
                    Located at Thangadh, Gujarat, we are placed at the most important place for affordable sanitary ware.
                    We have been inthis sector since past 25 years and have established ourselves as dependable supplier of sanitary ware.</p>
                <button  className='hover:bg-customRed-2 bg-customRed-1 text-customWhite-1 text-xs px-4 py-3 rounded absolute left-5 bottom-5' >
                <a href="/about-us" className='flex' >KNOW MORE <SendArrow className='w-4 h-4 ml-2' /></a> </button>
            </div>
            <div className='shadow-xl hover:shadow-2xl p-5 relative' >
                <img src="/images/Service.png" />
                <div className='text-customGray-3 mt-8 mb-3 '>OUR VISION</div>
                <img src="/images/Line 20.png" />
                <p className='mt-8 mb-14' >
                    Gain worldwide recognition in the field of ceramic building products through Research
                    and Innovation and bring an enhanced lifestyle within reach for every household
                </p>
                <button  className='hover:bg-customRed-2 bg-customRed-1 text-customWhite-1 text-xs px-4 py-3 rounded absolute left-5 bottom-5' >
                <a href="/about-us" className='flex' >KNOW MORE <SendArrow className='w-4 h-4 ml-2' /></a> </button>
            </div>
            <div className='shadow-xl hover:shadow-2xl p-5 relative' >
                <img src="/images/Service.png" />
                <div className='text-customGray-3 mt-8 mb-3 '>OUR MISSION</div>
                <img src="/images/Line 20.png" />
                <p className='mt-8 mb-14' >
                    Committed to delight customers with world class ceramic products and services. Make Send & Popular synonymous to
                    best quality and set new benchmarks of excellence. Pursue best business practice with utmost integrity to make Send &amp;
                    Popular an exciting organisation to work with, for vendors, channel partners, investors and employees alike.</p>
                <button  className='hover:bg-customRed-2 bg-customRed-1 text-customWhite-1 text-xs px-4 py-3 rounded absolute left-5 bottom-5' >
                <a href="/about-us" className='flex' >KNOW MORE <SendArrow className='w-4 h-4 ml-2' /></a> </button>
            </div>
        </div>
  </div>;
};

export default MyServices;
