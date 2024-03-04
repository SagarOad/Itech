import React from "react";

const LineBanner = () => {
  return (
    <div className="line-banner my-6">
      <div className=" container mx-auto flex justify-between items-center">
        <h2 className="text-[48px] md:text-[2.4rem] text-white font-[poppins] opacity-95 font-bold leading-tight">
          Pocket-Friendly Design. Just A Click Away!
        </h2>
        <button className=" text-white text-[20px] py-3 px-12 font-[poppins] font-medium my-8 border-2 border-white">
            VIEW DETAILS
          </button>
      </div>
    </div>
  );
};

export default LineBanner;
