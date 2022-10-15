import React, { useState } from "react";
import Slider from "react-slick";

const allReviews = [
  {
    review:
      "We have been purchasing Sanitary ware from Send Popular since last 5 years and have been served well.",
    designation: "Dealer",
    area: "North India",
  },
  {
    review:
      "Very good products cp and sanitaryware ewc good all cp products are very good good products finishes very good",
    designation: "User",
    area: "South India",
  },
  ,
  {
    review:
      "I purchased Kerovit bath fitting for 2 Bathrooms i.e 2 wall hung and 2 concealed tank from Gupta Trading co. Hoshiarpur. My plumber doesn't know how to install concealed tank, I called Company technician to guide our plumber. Company technician guide",
    designation: "Buyer",
    area: "North Gujarat",
  },
  {
    review:
      "Really appreciation to service team i had isssue in my commod issue resolved in same day ...really good service and the guy who spoken with me was gentle man his name tejas ... i refer hindware to purchasethank u service team...",
    designation: "Dealer",
    area: "Uttar Pradesh",
  },
];

const Testimonial = () => {
  const [showCurrentReview, setShowCurrentReview] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    fadeIn: true,
    centerMode: true,
    centerPadding: "75px",
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
          {allReviews[showCurrentReview]?.review}
        </p>
        <div className="text-customGray-3 text-xl mb-3 mt-9 ">
          {allReviews[showCurrentReview]?.designation}
        </div>
        <div className="text-customGray-3 text-sm">
          {allReviews[showCurrentReview]?.area}
        </div>
        <Slider
          {...settings}
          afterChange={(currentSlide) => {
            setShowCurrentReview(currentSlide);
          }}
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
