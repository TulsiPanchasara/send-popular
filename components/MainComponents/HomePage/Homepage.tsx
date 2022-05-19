import React from 'react';
import Slider from 'react-slick';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from './ContactUs';
import MyServices from './MyServices';
import Testimonial from './Testimonial';
import TrendyProducts from './TrendyProducts';


const Homepage = () => {

     const settings = {
        dots: true,
        arrows: true,
        fadeIn: true,
        centerMode: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    
    return (
        <div className='mb-20' >
            <div className="mb-32 relative flex flex-col w-full">
                <Slider {...settings} className="main-slider-d w-full">
                    <div className='relative' >
                        <img src="/images/1001.jpg" />
                        <div
                         className='absolute top-1/4 text-left font-josefin font-bold lg:text-6xl text-base' 
                         style={{ transform: "translate(-50%, -50%)", left: "45%", color:"#D1D2CE" }}  
                         >
                              Exclusive<br/> Sanitarywares<br/> Collection
                        </div>
                    </div>
                    <div className='relative' >
                        <img src="/images/1002.jpg" className='flipImage' />
                        <div
                         className='absolute  max-w-3xl left-7 font-josefin font-bold lg:text-6xl text-base' 
                         style={{ top: "20%", color:"#A08571" }}  
                         >
                              We bring you the luxuries of royalty
                        </div>
                    </div>
                    <div className='relative' >
                        <img src="/images/1004.png" />
                        <div
                         className='absolute text-customPink-1 max-w-3xl left-7 font-josefin font-bold lg:text-6xl text-base' 
                         style={{ top: "15%" }}  
                         >
                              Make your bathroom<br/> amazing
                        </div>
                    </div>
                </Slider>
            </div>
            <AboutUs showMoreButton />
            <MyServices />
            <TrendyProducts />
            {/* <WorkExamples /> */}
            <Testimonial />
            <ContactUs/>
      </div>
  );
};

export default Homepage;
