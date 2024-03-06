import React from "react";
import web from "../assets/serviceIcons/web1.png";
import { Link } from "react-router-dom";

const LogoDesignTemplate = () => {
  return (
    <div className="px-8 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full py-24 pr-12 xl:w-[60%] justify-center lg:items-start ">
        <h2 className="main-banner-heading relative mt-4 mb-3 md:text-[2.5rem] text-[#f58020] font-[poppins] font-medium leading-tight md:text-center">
          Web Development
        </h2>
        <h3 className=" font-[poppins] text-[24px]">
          Get Websites That Can Help Your Business Grow
        </h3>
        <p className="leading-normal mt-3 text-[#212121] font-[poppins] font-[300] text-[18px] md:text-[18px]">
          Our skilled team provides tailored web development services, including
          design, building, and maintenance, to meet your unique business needs.
          Benefit from our expertise regardless of your company's size.
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
      <div className="w-full relative z-[10] py-2 ml-auto xl:w-[40%] overflow-hidden">
        <img src={web} />
      </div>
    </div>
  );
};

export default LogoDesignTemplate;
