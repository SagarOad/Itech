import React from "react";
import trustpillot from "../assets/trustpillot.PNG";

const LineBanner = () => {
  return (
    <div className="line-banner">
      <div className=" container mx-auto my-6">
        <div className=" md:container py-6 md:py-0 px-6 md:px-0  mx-auto flex justify-between items-center">
          <h2 className="text-[32px] md:text-[2.4rem] text-white font-[poppins] opacity-95 font-bold leading-tight">
            Discover genuine client feedback and testimonials!
          </h2>
          <a
            target="_black"
            href="https://www.trustpilot.com/review/fameitech.net"
            className="text-white bg-white text-[14px] md:text-[20px] py-2 px-8 font-[poppins] font-medium my-8 border-2 border-white"
          >
            <img className=" h-16" src={trustpillot} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LineBanner;
