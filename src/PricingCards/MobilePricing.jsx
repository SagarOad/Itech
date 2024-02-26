import React, { useState } from "react";
import GetQuote from "../Components/GetQuote";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobilePricing = () => {
  const [openModal, setOpenModal] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  };

  return (
    <>
      <div>
        <div className=" ">
          <div class="py-8 px-4 mx-auto sm:py-16 lg:px-6 bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg  mt-20">
            <div class="mx-auto max-w-screen-sm text-center">
              <h2 class="mb-4 text-3xl tracking-tight font-bold leading-tight text-black">
                Unlock Exclusive Pricing Today!
              </h2>
              <p class="mb-6 text-black md:text-lg">
                Reach out to Our Representative Now!
              </p>

              <a
                href="tel:+13015017152"
                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#f58020] hover:bg-[#f58020bd] focus:ring-4 focus:ring-[#f58020a5] "
              >
                Call Us
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}
    </>
  );
};

export default MobilePricing;
