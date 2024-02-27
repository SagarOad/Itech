import React from "react";
import ui from "../assets/serviceIcons/ui1.png";

const UiDesignTemplate = () => {
  return (
    <div className="px-8 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full py-24 pr-12 xl:w-[60%] justify-center lg:items-start ">
        <h2 className="main-banner-heading relative mt-4 mb-3 md:text-[2.5rem] text-[#f58020] font-[poppins] font-medium leading-tight md:text-center">
          UI/UX Designing
        </h2>
        <h3 className=" font-[poppins] text-[24px]">
          Elevate user experiences with sleek UI/UX designs for business growth.
        </h3>
        <p className="leading-normal mt-3 text-[#212121] font-[poppins] font-[300] text-[18px] md:text-[18px]">
          Experience tailored UI/UX design services crafted by our skilled team
          to meet your unique business needs. From conceptualization to
          implementation and ongoing support, benefit from our expertise
          regardless of your company's size.
        </p>

        <div>
          <button className=" text-[#f58020] py-2 px-6 font-[poppins] font-bold my-8 border-2 border-[#f58020]">
            VIEW DETAILS
          </button>
        </div>
      </div>
      <div className=" w-full relative z-[99] py-2 ml-auto xl:w-[40%] overflow-hidden">
        <img src={ui} />
      </div>
    </div>
  );
};

export default UiDesignTemplate;
