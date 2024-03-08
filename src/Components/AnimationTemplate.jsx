import React from "react";
import ui from "../assets/serviceIcons/ui1.png";
import animation from "../assets/serviceIcons/animation.jpg";
import { Link } from "react-router-dom";

const AnimationTemplate = () => {
  return (
    <div className="md:px-8 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full py-8 md:py-24 md:pr-12 xl:w-[60%] justify-center lg:items-start ">
        <h2 className="main-banner-heading relative mt-4 mb-3 md:text-[2.5rem] text-[#f58020] font-[poppins] font-medium leading-tight md:text-center">
          2d / 3d Animation
        </h2>
        <h3 className=" font-[poppins] text-[24px]">
          Our 2D animation uses a flat plane, while 3D animation uses a three
          dimensional space.
        </h3>
        <p className="leading-normal mt-3 text-[#212121] font-[poppins] font-[300] text-[18px] md:text-[18px]">
          Our 2D and 3D animation services are the process of creating moving
          images through the manipulation of digital images. our 2D animation
          uses a flat plane, while 3D animation uses a three dimensional space.
          our skilled team crete high quality 2D/3D animations.
        </p>

        <div className=" mt-5">
          <Link
            className=" text-[#f58020] py-2 px-6 font-[poppins] font-bold my-8 border-2 border-[#f58020]"
            to="/animation"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
      <div className="w-full relative z-[10] py-2 ml-auto xl:w-[40%] overflow-hidden">
        <img src={animation} />
      </div>
    </div>
  );
};

export default AnimationTemplate;
