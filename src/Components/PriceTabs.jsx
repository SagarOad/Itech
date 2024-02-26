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
    <div className=" px-8" id="our-work">
      <div className=" flex flex-col justify-center  p-4 ml-auto font-bold items-center">
      
      </div>
      <div className="flex flex-wrap justify-evenly md:px-4 px-0 py-4 md:mx-auto w-[100%] mb-12 z-30 rounded-full">
        <button
          className={`${activeTab === 0 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(0);
          }}
        >
          Website Design
        </button>
        <button
          className={`${activeTab === 1 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(1);
          }}
        >
          Logo
        </button>
        <button
          className={`${activeTab === 2 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(2);
          }}
        >
          SEO
        </button>
        <button
          className={`${activeTab === 3 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(3);
          }}
        >
          Print
        </button>
        <button
          className={`${activeTab === 4 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(4);
          }}
        >
          Branding
        </button>
        <button
          className={`${activeTab === 5 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(5);
          }}
        >
          Web Portal
        </button>

        <button
          className={`${activeTab === 6 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(6);
          }}
        >
         Mobile App
        </button>

        <button
          className={`${activeTab === 7 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(7);
          }}
        >
          Animation
        </button>
        <button
          className={`${activeTab === 8 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
          type="button"
          onClick={() => {
            setActiveTab(8);
          }}
        >
          Informative Website
        </button>
        <button
          className={`${activeTab === 9 ? "bg-[#292A33] text-white" : ""} 
                rounded-full py-3 px-4 m-2 text-[14px] lg:text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
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
