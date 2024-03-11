import React from "react";
import { useState } from "react";
import GetQuote from "./GetQuote";
import LogoDesignTemplate from "./LogoDesignTemplate";
import { MdOutlineWeb } from "react-icons/md";
import { CiPen } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { SiMaterialdesign } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";
import { TfiImage } from "react-icons/tfi";
import UiDesignTemplate from "./UiDesignTemplate";
import cube4 from "../assets/Untitled-5-02.png";
import cube5 from "../assets/Untitled-5-04.png";
import MobileDevTemplate from "./MobileDevTemplate";
import VideoEditingTemplate from "./VideoEditingTemplate";
import AnimationTemplate from "./AnimationTemplate";
import GraphicsDesignTemplate from "./GraphicsDesignTemplate";
import NftDesignTemplate from "./NftDesignTemplate";
import { SiAltiumdesigner } from "react-icons/si";
import WebDevTemplate from "./WebDevTemplate";


const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState();
  return (
    <div className=" relative">
      <div className=" md:container md:w-[70%] md:h-[815px] mx-auto" id="our-work">
        <img src={cube4} className=" absolute w-[200px] top-0 right-0" />
        <div className="flex flex-wrap border-2 border-b-[#e4563aef] justify-between p-4 md:mx-auto w-[100%] z-30">
          <button
            className={`${activeTab === 0 ? "text-[#e4563aef]" : ""} 
                rounded-full py-3 px-2 text-[14px] lg:text-[14px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(0);
            }}
          >
            <MdOutlineWeb className="mx-auto text-[42px] mb-4" />
            Web Development
          </button>
          <button
            className={`${activeTab === 1 ? "text-[#e4563aef]" : ""} 
                rounded-full py-3 px-2  text-[14px] lg:text-[14px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(1);
            }}
          >
            <SiAltiumdesigner  className="mx-auto text-[42px] mb-4" />
            Logo Design
          </button>
          <button
            className={`${activeTab === 2 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-2  text-[14px] lg:text-[14px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(2);
            }}
          >
            <CiPen className="mx-auto text-[42px] mb-4" />
            Social Media
          </button>
          <button
            className={`${activeTab === 3 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-2  text-[14px] lg:text-[14px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(3);
            }}
          >
            <SiMaterialdesign className="mx-auto text-[42px] mb-4" />
            Graphic Design
          </button>

          <button
            className={`${activeTab === 4 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-2  text-[14px] lg:text-[14px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(4);
            }}
          >
            <CiMobile1 className="mx-auto text-[42px] mb-4" />
            Mobile Development
          </button>

          <button
            className={`${activeTab === 5 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-2  text-[14px] lg:text-[14px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(5);
            }}
          >
            <CiVideoOn className="mx-auto text-[42px] mb-4" />
            Video Editing
          </button>

          <button
            className={`${activeTab === 6 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-2  text-[14px] lg:text-[14px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(6);
            }}
          >
            <MdOndemandVideo className="mx-auto text-[42px] mb-4" />
            2d / 3d Animation
          </button>
          <button
            className={`${activeTab === 7 ? "text-[#e4563aef]" : ""} 
          rounded-full py-3 px-2  text-[14px] lg:text-[14px] text-[#838383] focus:text-[#e4563aef]`}
            type="button"
            onClick={() => {
              setActiveTab(7);
            }}
          >
            <TfiImage className="mx-auto text-[42px] mb-4" />
            NFT Design
          </button>
        </div>
        <div className=" overflow-y-scroll">
          {activeTab == 0 ? (
            <LogoDesignTemplate setActiveTab={setActiveTab} />
          ) : activeTab == 1 ? (
            <WebDevTemplate setActiveTab={setActiveTab} />
          ) : activeTab == 2 ? (
            <UiDesignTemplate setActiveTab={setActiveTab} />
          ) : activeTab == 3 ? (
            <GraphicsDesignTemplate setActiveTab={setActiveTab} />
          ) : activeTab == 4 ? (
            <MobileDevTemplate setActiveTab={setActiveTab} />
          ) : activeTab == 5 ? (
            <VideoEditingTemplate setActiveTab={setActiveTab} />
          ) : activeTab == 6 ? (
            <AnimationTemplate setActiveTab={setActiveTab} />
          ) : activeTab == 7 ? (
            <NftDesignTemplate setActiveTab={setActiveTab} />
          ) : null}
        </div>
        {openModal && (
          <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
        )}
      </div>
      <img
        src={cube5}
        className=" absolute rotate-180 bg-[#f58020a6] w-[190px] bottom-[-26px]"
      />
    </div>
  );
};

export default SkillTabs;
