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
                        <img src="/images/1001.jpg" />
                        <img src="/images/1002.jpg" />
                        <img src="/images/1003.jpg" />
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
