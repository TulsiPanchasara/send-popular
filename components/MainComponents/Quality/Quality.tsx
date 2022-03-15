import React from 'react';
import ImageContainer from '../../Shared/ImageContainer';

const Quality = () => {
    return (
        <div className='mb-20 mt-10 px-10' >
            <div className='lg:flex justify-center' >
                <ImageContainer />
                <div className='lg:ml-20 lg:pt-0 pt-10' >
                    <div className='uppercase text-customRed-1 text-sm ' >Quality</div>
                    <div className='max-w-lg text-customGray-3 mt-10 text-justify' >
                        <p>Indian sales has been a pioneer in introducing high quality ceramic goods as a trader. In the past years that we have worked, we have always promoted and dealt in best quality only. Our quality surpasses just products and moves on to service as well as promptness of supply. We are proud to announce that we have become one of the preferred suppliers of sanitary ware and ceramics because we have always maintained high levels of quality in both ceramic products as well as services that we provide our clients</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex justify-center mt-32' >
                <div className='lg:hidden block' >   <ImageContainer /></div>
                <div className='lg:mr-20 lg:pt-0 pt-10' >
                    <div className='uppercase text-customRed-1 text-sm ' >About Us</div>
                    <div className='max-w-lg text-customGray-3 mt-10 text-justify' >
                        <p>Send & Popular is a global web site of Indian Sales, Thangadh. We are suppliers of high quality sanitary ware from India. Located at Thangadh, Gujarat, we are placed at the most important place for affordable sanitary ware. We have been inthis sector since past 25 years and have established ourselves as dependable supplier of sanitary ware.</p>
                        <p>As traders of sanitary ware we pride ourselves to be one of the leading buyer as well as seller of Ceramic goods in the region.</p>
                    </div>
                </div>
                <div className='lg:block hidden' >   <ImageContainer /></div>
            </div>
        </div>);
};

export default Quality;
