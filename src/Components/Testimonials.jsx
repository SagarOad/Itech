import React from "react";
import Slider from "react-slick";
import TestimonialCard1 from "../Testimonials/TestimonialCard1";
import TestimonialCard2 from "../Testimonials/TestimonialCard2";
import TestimonialCard3 from "../Testimonials/TestimonialCard3";
import TestimonialCard4 from "../Testimonials/TestimonialCard4";
import TestimonialCard5 from "../Testimonials/TestimonialCard5";
import TestimonialCard6 from "../Testimonials/TestimonialCard6";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container my-20 mx-auto">
      <h2 className="services2-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] text-center md:text-center">
        Testimonials
      </h2>
      <Slider {...settings}>
        <div>
          <TestimonialCard1 />
        </div>
        <div>
          <TestimonialCard2 />
        </div>
        <div>
          <TestimonialCard3 />
        </div>
        <div>
          <TestimonialCard4 />
        </div>
        <div>
          <TestimonialCard5 />
        </div>
        <div>
          <TestimonialCard6 />
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
