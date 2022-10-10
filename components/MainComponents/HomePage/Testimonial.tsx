import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    fadeIn: true,
    centerMode: true,
    centerPadding: "75px",
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "130px",
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className='py-12 bg-[url("/images/TestimonialBG.png")] bg-local bg-no-repeat bg-center '>
      <div className="text-customRed-1 mb-8 text-center">TESTIMONIALS</div>
      <h1 className="text-center my-4 text-3xl text-customGray-3">
        What People Says
      </h1>
      <div className="mx-auto text-center">
        <p className="text-customGray-3 max-w-xl mx-auto text-center  text-sm mb-10 mt-16">
          We have been purchasing Sanitary ware from Send Popular since last 5
          years and have been served well.
        </p>
        <div className="text-customGray-3 text-xl mb-3 mt-9 ">Dealer</div>
        <div className="text-customGray-3 text-sm">North India</div>
        <Slider
          {...settings}
          className="main-slider w-full lg:w-1/5 mx-auto mt-10"
        >
          <div className="slider_image">
            <img src="/images/1.jpg" className="w-full h-full rounded-full " />
          </div>
          <div className="slider_image">
            <img src="/images/2.jpg" className="w-full h-full rounded-full " />
          </div>
          <div className="slider_image">
            <img src="/images/3.jpg" className="w-full h-full rounded-full " />
          </div>
          <div className="slider_image">
            <img src="/images/4.jpg" className="w-full h-full rounded-full " />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
