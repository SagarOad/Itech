import React from "react";
import { useState } from "react";
import GalleryWeb from "../Components/PortfolioGallery";
import WebDesign from "../Components/WebDesign";
import LogoDesign from "../Components/LogoDesign";
import MobileApp from "../Components/MobileApp";
import Animation from "../Components/Animation";
import GetQuote from "./GetQuote";
import LogoDesignTemplate from "./LogoDesignTemplate";
import { MdOutlineWeb } from "react-icons/md";
import { CiPen } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import UiDesignTemplate from "./UiDesignTemplate";
import cube4 from "../assets/Untitled-5-02.png";
import cube5 from "../assets/Untitled-5-04.png";

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState();
  return (
    <div className=" relative">
      <div className=" px-8 container w-[60%] mx-auto" id="our-work">
        <img src={cube4} className=" absolute w-[250px] top-0 right-0" />
        <div className="flex flex-wrap border-2 border-b-[#e4563aef] justify-between md:px-8 px-0 py-4 md:mx-auto w-[100%] z-30">
          <button
            className={`${activeTab === 0 ? "text-[#e4563aef]" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(0);
            }}
          >
            <MdOutlineWeb className="mx-auto text-[56px] mb-4" />
            Web Development
          </button>
          <button
            className={`${activeTab === 1 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(1);
            }}
          >
            <CiPen className="mx-auto text-[56px] mb-4" />
            UI / UX
          </button>

          <button
            className={`${activeTab === 2 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(2);
            }}
          >
            <CiMobile1 className="mx-auto text-[56px] mb-4" />
            Mobile Development
          </button>

          <button
            className={`${activeTab === 3 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(3);
            }}
          >
            <CiVideoOn className="mx-auto text-[56px] mb-4" />
            Video Editing
          </button>

          <button
            className={`${activeTab === 4 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(4);
            }}
          >
            <MdOndemandVideo className="mx-auto text-[56px] mb-4" />
            2d / 3d Animation
          </button>
        </div>
        <div className=" overflow-y-scroll">
          {activeTab == 0 ? (
            <LogoDesignTemplate setActiveTab={setActiveTab} />
          ) : activeTab == 1 ? (
            <UiDesignTemplate setActiveTab={setActiveTab} />
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
      <img src={cube5} className=" absolute rotate-180 bg-[#f58020a6] w-[250px] bottom-[-26px]" />
    </div>
  );
};

export default SkillTabs;
