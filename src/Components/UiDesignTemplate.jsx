import React from "react";
import ui from "../assets/serviceIcons/ui1.png";
import social from "../assets/serviceIcons/socialmedia.jpg";
import { Link } from "react-router-dom";


const UiDesignTemplate = () => {
  return (
    <div className="md:px-8 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full py-8 md:py-24 md:pr-12 xl:w-[60%] justify-center lg:items-start">
        <h2 className="main-banner-heading relative mt-4 mb-3 md:text-[2.5rem] text-[#f58020] font-[poppins] font-medium leading-tight md:text-center">
          Social Marketing
        </h2>
        <h3 className=" font-[poppins] text-[24px]">
          Social Media Marketing services help bussiness of all sizes reach
          their target audience.
        </h3>
        <p className="leading-normal mt-3 text-[#212121] font-[poppins] font-[300] text-[18px] md:text-[18px]">
          Social Media Marketing services help bussiness of all sizes reach
          their target audience, build brand awarness and drive sales.The
          strategy of social media marketing agency is Creating and sharing
          engaging content across various social media plateform
        </p>

        <div className=" mt-5">
          <Link
            to="/digitalmarketing"
            className=" text-[#f58020] py-2 px-6 font-[poppins] font-bold my-8 border-2 border-[#f58020]"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
      <div className=" w-full relative z-[50] py-2 ml-auto xl:w-[40%] overflow-hidden">
        <img src={social} />
      </div>
    </div>
  );
};

export default UiDesignTemplate;
