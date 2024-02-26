import React from "react";
import { useState } from "react";
import GalleryWeb from "../Components/PortfolioGallery";
import WebDesign from "../Components/WebDesign";
import LogoDesign from "../Components/LogoDesign";
import MobileApp from "../Components/MobileApp";
import Animation from "../Components/Animation";
import GetQuote from "./GetQuote";
import LogoDesignTemplate from "./LogoDesignTemplate";

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState();
  return (
    <div className=" px-8 container w-[60%] mx-auto" id="our-work">
 

 
      <div className="flex flex-wrap justify-evenly md:px-4 px-0 py-4 md:mx-auto w-[100%] mb-12 z-30 rounded-full">
        <button
          className={`${activeTab === 0 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(0);
          }}
        >
          Web Development
        </button>
        <button
          className={`${activeTab === 1 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(1);
          }}
        >
          UI / UX
        </button>

        <button
          className={`${activeTab === 2 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(2);
          }}
        >
          Logo Design
        </button>

        <button
          className={`${activeTab === 3 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(3);
          }}
        >
          Mobile App
        </button>

        <button
          className={`${activeTab === 4 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(4);
          }}
        >
          2d / 3d Animation
        </button>
      </div>
      <div className=" h-[80vh] overflow-y-scroll">
        {activeTab == 0 ? (
          <LogoDesignTemplate setActiveTab={setActiveTab} />
        ) : activeTab == 1 ? (
          <WebDesign setActiveTab={setActiveTab} />
        ) : activeTab == 2 ? (
          <LogoDesign setActiveTab={setActiveTab} />
        ) : activeTab == 3 ? (
          <MobileApp setActiveTab={setActiveTab} />
        ) : activeTab == 4 ? (
          <Animation setActiveTab={setActiveTab} />
        ) : null}
      </div>
      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>
  );
};

export default SkillTabs;
