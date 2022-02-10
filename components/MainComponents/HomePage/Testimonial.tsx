import React from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
    const settings = {
    dots: true,
    arrows: false,
    fadeIn: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '130px',
          slidesToShow: 1,
          infinite: true
        }
      }
    ]
    };
    
    return (
        <div className='py-12 bg-[url("/images/TestimonialBG.png")] bg-local bg-no-repeat bg-center ' >
            <div className='text-customRed-1 text-center' >TESTIMONIALS</div>
            <h1 className='text-center my-2 text-3xl text-customGray-3' >What People Says</h1>
            <div className='mx-auto text-center' >
                <p className='text-customGray-3 max-w-xl mx-auto text-center text-sm my-6' >
                Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the
                lorem ipsum dolor sit amet. sed diam nonumy eirmod tempor invidunt ut labore et dolore
                is the magna aliquyam.
            </p>
                <div className='text-customGray-3 text-xl my-3' >John Doe</div>
                <div className='text-customGray-3 text-sm' >CEO, ABC Company</div>
                <Slider {...settings} className='main-slider w-full lg:w-48 mx-auto mt-10' >
                    <img src="/images/1.png" className='w-2 slides'/>
                    <img src="/images/3.png" className='w-2 slides'/>
                    <img src="/images/2.png" className='w-2 slides'/>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
