import React from 'react';

const ImageContainer = () => {
    return <div className='flex justify-center px-10 lg:px-0 ' >
        <div className='relative ' >
            <div className='relative' >
                <img src="/images/TestImage.png" className=' w-80 h-80 ' />
                <img src="/images/Path 116.png" className='absolute -top-16 -left-16' />
                <img src="/images/Rectangle 185.png" className='w-60 h-60 absolute top-8 left-9' />
                
            </div>
            
        </div>
  </div>;
};

export default ImageContainer;
