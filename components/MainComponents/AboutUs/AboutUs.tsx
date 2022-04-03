import { useRouter } from 'next/router';
import React from 'react';
import ImageContainer from '../../Shared/ImageContainer';

interface IAboutUsProps{ 
    showMoreButton?: boolean;
}

const AboutUs = ({ showMoreButton }: IAboutUsProps) => {
    const router = useRouter()
    return <div className='lg:flex lg:justify-center mb-20' >
        <ImageContainer image='/images/AboutUsImage.jpeg'/>
        <div className='lg:ml-20 px-10 lg:pt-0 pt-10' >
            <div className='uppercase text-customRed-1 text-sm ' >About Us</div>
            <div className='font-semibold my-5 text-customGray-3' >SEND &amp; POPULAR</div>
            <div className='lg:max-w-lg w-full text-customGray-3 mb-9 text-justify' >
                <p>Send & Popular is a global web site of Indian Sales, Thangadh. We are suppliers of high quality sanitary ware from India. Located at Thangadh, Gujarat, we are placed at the most important place for affordable sanitary ware. We have been inthis sector since past 25 years and have established ourselves as dependable supplier of sanitary ware.</p>
                <p>As traders of sanitary ware we pride ourselves to be one of the leading buyer as well as seller of Ceramic goods in the region.</p>
            </div>
            {showMoreButton && <button onClick={() => router.push("/about-us")}  className=' bg-customRed-1 text-customWhite-1 text-xs px-4 py-3 rounded' >
                MORE ABOUT US
            </button>}
        </div>
  </div>;
};

export default AboutUs;
