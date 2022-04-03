import React from 'react';

interface IImageContainerProps{
    image?: string;
}

const ImageContainer = (props: IImageContainerProps) => {
    const { image} = props;
    return <div className='flex justify-center lg:px-0 ' >
        <div className='relative ' >
            <div className='relative' >
                {/* <img src="/images/TestImage.png" className='lg:w-80 lg:h-80 w-60 h-60 ' />
                <img src="/images/Path 116.png" className='absolute -top-16 -left-16 w-36 h-36' />
                <img src="/images/Rectangle 185.png" className='lg:w-72 lg:h-72 absolute lg:top-4 lg:left-4 top-5 left-4 w-52 h-52 ' /> */}
                <img src="/images/MainBGImage.png" className='lg:w-96 w-80  relative' />
                <img src={image || "/images/Rectangle 185.png"} className='lg:w-64 lg:h-64 absolute lg:top-20 lg:left-20 top-16 left-16 w-56 h-56 ' />
            </div>
            
        </div>
  </div>;
};

export default ImageContainer;
