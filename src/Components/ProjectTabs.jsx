import React from "react";
import { useState } from "react";
import GalleryWeb from "../Components/PortfolioGallery";
import WebDesign from "../Components/WebDesign";
import LogoDesign from "../Components/LogoDesign";
import MobileApp from "../Components/MobileApp";
import Animation from "../Components/Animation";
import GetQuote from "./GetQuote";
const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState();
  return (
    <div className=" py-20" id="our-work">
      <div className=" px-8 container w-[60%] mx-auto">
        <h1 className="services2-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] md:text-center">
          Portfolio
        </h1>
        <div className=" flex flex-col justify-center  p-4 ml-auto font-bold items-center">
          <h1 className="leading-normal text-[#4e4e4e] font-[poppins] text-center font-[300] text-[18px] md:text-[30px]">
            It's not our complete portfolio Explore further tap the button Below
            for More of Our Work
          </h1>
          {/* <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="leading-normal ml-2 mt-4 text-white bg-[#f58020] rounded-2xl px-4 font-sans font-medium text-[22px] md:text-[26px]"
        >
          Contact Us
        </button> */}
        </div>
        <div className="flex flex-wrap justify-evenly md:px-4 px-0 py-4 md:mx-auto w-[100%] mb-12 z-30 rounded-full">
          <button
            className={`${
              activeTab === 0
                ? "bg-[#292A33] bg-[#e4563aef] text-white"
                : ""
            } 
                 py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(0);
            }}
          >
            Web Development
          </button>
          <button
            className={`${
              activeTab === 1
                ? "bg-[#292A33] bg-[#e4563aef] text-white"
                : ""
            } 
               py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(1);
            }}
          >
            UI / UX
          </button>

          <button
            className={`${
              activeTab === 2
                ? "bg-[#292A33] bg-[#e4563aef] text-white"
                : ""
            } 
                py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Logo Design
          </button>

          <button
            className={`${
              activeTab === 3
                ? "bg-[#292A33] bg-[#e4563aef] text-white"
                : ""
            } 
                 py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(3);
            }}
          >
            Mobile App
          </button>

          <button
            className={`${
              activeTab === 4
                ? "bg-[#292A33] bg-[#e4563aef] text-white"
                : ""
            } 
                 py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(4);
            }}
          >
            2d / 3d Animation
          </button>
        </div>
      </div>
      <div className=" h-[80vh] overflow-y-scroll">
        {activeTab == 0 ? (
          <GalleryWeb setActiveTab={setActiveTab} />
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

export default ProjectTabs;
