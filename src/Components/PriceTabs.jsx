import React from "react";
import { useState } from "react";
import WebsitePricing from "../PricingCards/WebsitePricing";
import Ux from "../PricingCards/Ux";
import MobilePricing from "../PricingCards/MobilePricing";
import AnimationPricing from "../PricingCards/AnimationPricing";
import SEO from "../PricingCards/SEO";
import Print from "../PricingCards/Print";
import Branding from "../PricingCards/Branding";
import WebPortal from "../PricingCards/WebPortal";
import InformativeWebsite from "../PricingCards/InformativeWebsites";
import SMM from "../PricingCards/SMM";

const PriceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="pricing" className=" md:container py-16 mx-auto px-8">
      <h2 className="services2-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] text-center md:text-center">Pricing</h2>
      <div className="  flex-col hidden md:flex justify-center  p-4 ml-auto font-bold items-center">
      
      </div>
      <div className="flex flex-wrap justify-evenly md:px-4 px-0 py-4 md:mx-auto w-[100%] z-30 rounded-full">
        <button
          className={`${
            activeTab === 0
              ? "bg-[#e4563aef] font-[poppins] text-white"
              : ""
          } 
               py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(0);
          }}
        >
          Website Design
        </button>
        <button
          className={`${activeTab === 1 ? " bg-[#e4563aef] font-[poppins] text-white" : ""} 
          py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(1);
          }}
        >
          Logo
        </button>
        <button
          className={`${activeTab === 2 ? "bg-[#e4563aef] font-[poppins] text-white" : ""} 
          py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(2);
          }}
        >
          SEO
        </button>
        <button
          className={`${activeTab === 3 ? " bg-[#292A33] bg-[#e4563aef] font-[poppins] text-white" : ""} 
          py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(3);
          }}
        >
          Print
        </button>
        <button
          className={`${activeTab === 4 ? " bg-[#e4563aef] font-[poppins] text-white" : ""} 
          py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(4);
          }}
        >
          Branding
        </button>
        <button
          className={`${activeTab === 5 ? " bg-[#e4563aef] font-[poppins] text-white" : ""} 
          py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(5);
          }}
        >
          Web Portal
        </button>

        <button
          className={`${activeTab === 6 ? " bg-[#e4563aef] font-[poppins] text-white" : ""} 
          py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(6);
          }}
        >
         Mobile App
        </button>

        <button
          className={`${activeTab === 7 ? " bg-[#e4563aef] font-[poppins] text-white" : ""} 
          py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(7);
          }}
        >
          Animation
        </button>
        <button
          className={`${activeTab === 8 ? " bg-[#e4563aef] font-[poppins] text-white" : ""} 
          py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(8);
          }}
        >
          Informative Website
        </button>
        <button
          className={`${activeTab === 9 ? " bg-[#e4563aef] font-[poppins] text-white" : ""} 
          py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(9);
          }}
        >
          SMM
        </button>
      </div>
      <div className=" ">
        {activeTab == 0 ? (
          <WebsitePricing />
        ) : activeTab == 1 ? (
          <Ux />
        ) : activeTab == 2 ? (
          <SEO />
        ) : activeTab == 3 ? (
          <Print />
        ) : activeTab == 4 ? (
          <Branding />
        ) : activeTab == 5 ? (
          <WebPortal />
        ) : activeTab == 6 ? (
          <MobilePricing />
        ) : activeTab == 7 ? (
          <AnimationPricing />
          ) : activeTab == 8 ? (
            <InformativeWebsite />
            ) : activeTab == 9 ? (
              <SMM />
        ) : null}
      </div>
    </div>
  );
};

export default PriceTabs;