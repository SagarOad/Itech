import React from "react";
import app from "../assets/app-development.PNG";
import { Link } from "react-router-dom";

const MobileDevTemplate = () => {
  return (
    <div className="md:px-8 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full py-8 md:py-24 md:pr-12 xl:w-[60%] justify-center lg:items-start">
        <h2 className="main-banner-heading relative mt-4 mb-3 md:text-[2.5rem] text-[#f58020] font-[poppins] font-medium leading-tight md:text-center">
          Mobile Development
        </h2>
        <h3 className=" font-[poppins] text-[24px]">
          Our Mobile app Development services are creation of custom apps for
          iOS and Andriod plateform.
        </h3>
        <p className="leading-normal mt-3 text-[#212121] font-[poppins] font-[300] text-[18px] md:text-[18px]">
          Mobile App development services will meet the needs of bussinesses
          sizes, from startups to large enterprises.If you are looking to create
          a simple app for your own use or a complex app for your bussiness,
          there is a mobile app development company that can help you.
        </p>

        <div className=" mt-5">
        <Link
            to="/servicepage"
            className=" text-[#f58020] py-2 px-6 font-[poppins] font-bold my-8 border-2 border-[#f58020]"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
      <div className=" w-full relative z-[10] py-2 ml-auto xl:w-[40%] overflow-hidden">
        <img src={app} />
      </div>
    </div>
  );
};

export default MobileDevTemplate;
