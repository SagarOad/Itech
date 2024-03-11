import React from "react";
import { MdScreenSearchDesktop } from "react-icons/md";
import { VscGithubAction } from "react-icons/vsc";
import { BsRocket } from "react-icons/bs";
import arrow1 from "../assets/arrow1.jpg"
import arrow2 from "../assets/arrow2.jpg"
import cube5 from "../assets/Untitled-5-02.png";

const Process = () => {
  return (
    <div className=" relative pb-12">
      <img src={cube5} className=" absolute top-28 left-[-20px]" />
      <div className=" px-8 md:container md:w-[60%] mx-auto">
        <h1 className="text-[48px] md:text-[3.5rem] text-[#f58020] text-center font-[poppins] opacity-95 font-bold leading-tight">
          Transforming Visions Into{""}
          <span className="mx-4 span-color bg-clip-text text-[#e4563aef]">
            Reality
          </span>
        </h1>
        <p className="leading-normal mt-3 text-[#828282] font-[poppins] text-center font-[300] text-[18px] md:text-[32px]">
          Our digital agency is optimized for producing exceptional end-results.
          We conquer each phase of the project and ensure that we deliver the
          best quality work possible.
        </p>
          <video
            className="w-[700px] p-4 mx-auto my-14 border-2 border-[#d7d7d7] shadow-lg relative"
            loop
            autoPlay
            muted
            src="https://video-previews.elements.envatousercontent.com/h264-video-previews/57d9d4bf-b06c-4030-a1c6-785bec07df66/46121601.mp4"
          />
      </div>

      <div className="container mx-auto relative">
      {/* <img src={arrow1} className="bg-black absolute w-[230px] top-6 left-[400px]" /> */}
      {/* <img src={arrow2} className="bg-black absolute w-[230px] top-12 right-[400px]" /> */}

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 flex p-12 flex-col justify-center items-center">
            <MdScreenSearchDesktop className=" text-[86px] mb-1 text-[#f58020]" />
            <h2 className="text-black text-center text-[26px] font-[nexa] mb-4">
              Initial Phase
            </h2>
            <p className="leading-normal mt-3 text-[#212121] text-center font-[poppins] font-[300] text-[18px] md:text-[18px]">
              We listen to our clients to get the initial idea of the project.
              Then our creative teams join their head and polish it into a
              shining diamond.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex p-12 flex-col justify-center items-center">
            <VscGithubAction className=" text-[86px] mb-1 text-[#f58020]" />
            <h2 className="text-black text-center text-[26px] font-[nexa] mb-4">
              Executive
            </h2>
            <p className="leading-normal mt-3 text-[#212121] text-center font-[poppins] font-[300] text-[18px] md:text-[18px]">
              We are equipped with skilled people and state-of-the-art rendering
              machines. Coming up with brilliant products is our habit.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex p-12 flex-col justify-center items-center">
            <BsRocket className=" text-[86px] mb-1 text-[#f58020]" />
            <h2 className="text-black text-center text-[26px] font-[nexa] mb-4">
              Delivery
            </h2>
            <p className="leading-normal mt-3 text-[#212121] text-center font-[poppins] font-[300] text-[18px] md:text-[18px]">
              On-time delivery is our best service. Our healthy work environment
              ensures that you get your project handed over to you ASAP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
