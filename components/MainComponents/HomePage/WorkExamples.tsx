import { useRouter } from 'next/router';
import React from 'react';

const WorkExamples = () => {
    const router = useRouter();
    return (
        <div className='my-12' >
            <div className='text-customLightBlue-1 text-center' >PRODUCTS</div>
            <div className='text-3xl text-center my-2' >My Work Examples</div>
            <div className='grid grid-cols-4 gap-9 container mx-auto mt-14 ' >
                <img src="/images/WE1.png" />
                <img src="/images/WE2.png" />
                <img src="/images/WE3.png" />
                <img src="/images/WE4.png" />
            </div>
            <div className='flex justify-center my-11' >
                <button onClick={() => router.push('/') } className='bg-customRed-1 text-customWhite-1 px-9 py-2 rounded' >
                View All
            </button>
            </div>
        </div>
    );
};

export default WorkExamples;
