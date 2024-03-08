import React from "react";
import video from "../assets/serviceIcons/videoediting.jpg";
import { Link } from "react-router-dom";

const VideoEditingTemplate = () => {
  return (
    <div className="md:px-8 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full py-8 md:py-24 md:pr-12 xl:w-[60%] justify-center lg:items-start">
        <h2 className="main-banner-heading relative mt-4 mb-3 md:text-[2.5rem] text-[#f58020] font-[poppins] font-medium leading-tight md:text-center">
          Video Editing
        </h2>
        <h3 className=" font-[poppins] text-[24px]">
          Transform your videos with professional editing that captivates
          audiences and drives growth.
        </h3>
        <p className="leading-normal mt-3 text-[#212121] font-[poppins] font-[300] text-[18px] md:text-[18px]">
          ideo editing service can help individuals and bussinesses create
          professional looking videos that engage and inform their audience. A
          good video editing service will work closely with you to undderstand
          your needs and goals.
        </p>

        <div className=" mt-5">
        <Link
            to="/softwaredevelopment"
            className=" text-[#f58020] py-2 px-6 font-[poppins] font-bold my-8 border-2 border-[#f58020]"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
      <div className="w-full relative z-[10] py-2 ml-auto xl:w-[40%] overflow-hidden">
        <img src={video} />
      </div>
    </div>
  );
};

export default VideoEditingTemplate;
