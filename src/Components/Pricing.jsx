
import PricingCard from "./PricingCard";
import Data from "../Data/PriceData";
import { AiOutlineArrowRight } from "react-icons/ai";
import wave from "../assets/vectors/wave.png";
import priceVector from "../assets/vectors/Ecommerce.png";
import { useState } from "react";
import GetQuote from "./GetQuote";
import PriceTabs from "./PriceTabs";

const Pricing = () => {
  const [openModal, setOpenModal] = useState();
  return (
    <div id="pricing" className="w-full py-28 px-4 md:px-24 mx-aut">
      {/* <img src={wave} className="absolute top-[10px] opacity-[12%] left-0 rotate-180 z-[0]" /> */}
      {/* <h1 className="text-center services2-heading mb-12 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
        Pricing
      </h1> */}
      <div className="xl:flex justify-between items-center">
        {/* <h1 className="visible md:hidden services2-heading mb-6 text-5xl text-center text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
          Pricing
        </h1> */}
        {/* <div className="w-full xl:w-[30%]">
          <img
            src={priceVector}
            className="mb-6 md:mb-0 w-[550px] mx-auto xl:mx-0 mt-[0px]"
          />
        </div> */}

        <div className="w-full">

          {/* <div class="flex flex-wrap items-center justify-center  ">
            <div class="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row ">
              <div class="bg-white border-2 mb-6 md:mb-0 rounded-[25px] border-[#f58020] transition-all opacity-75 hover:opacity-100  py-12 xl:py-6 px-4 w-full shadow-lg">
                <h1 class="text-[#212121] font-semibold text-center text-xl ">SEO</h1>
                <div class="text-center py-4 px-4">
                  <h1 class="text-[#212121] w-[200px] text-3xl font-black">$150</h1>
                  <p class="text-[#212121]  mt-2">Monthly</p>
                </div>
                <div class="h-px bg-gray-200"></div>
                <div class="text-center mt-3">
                  <p class="text-sm text-[#212121]">
                    <ul>
                      <li>Keyword Research</li>
                      <li>Business Directories</li>
                      <li>Onsite Optimizations</li>
                      <li>Tag Implementation</li>
                      <li>Local Business SEO</li>
                      <li>Content Creation</li>
                      <li>Backlink Building</li>
                      <li>And so much more!</li>
                    </ul>
                  </p>
                </div>
                <button
                 onClick={() => {
                  setOpenModal(true);
                }}
                class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                  Buy Now
                </button>
              </div>
              <div class="bg-white z-20 border-2 mb-6 md:mb-0 rounded-[25px] border-[#f58020]  transition-all hover:opacity-100 transform scale-105 py-12 md:py-6 px-4 w-full shadow-lg">
                <h1 class="text-[#f58020] font-semibold text-center text-xl">SMM</h1>
                <div class="text-center py-4 px-4">
                  <h1 class="text-[#f58020] w-[200px] text-3xl font-black">$599</h1>
                  <p class="text-[#212121]  mt-2">Monthly</p>
                </div>
                <div class="h-px"></div>
                <div class="text-center mt-3">
                  
                <p class="text-sm text-[#212121]">
                    <ul className=" h-[200px] overflow-scroll">
                      <li>Number of Social Media Platforms (4)</li>
                      <li>Content Calendar & Posts</li>
                      <li>Copywriting for stories and posts</li>
                      <li>Facebook Ads Management</li>
                      <li>Instagram Ads Management</li>
                      <li>Linkedin Ads Management</li>
                      <li>Youtube Ads Management</li>
                      <li>Boosted Posts Management</li>
                    </ul>
                  </p>
                </div>
                <button
                 onClick={() => {
                  setOpenModal(true);
                }}
                class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-[#212121] hover:shadow-xl duration-200">
                  Buy Now
                </button>
              </div>
              <div class="bg-white border-2 mb-6 md:mb-0 rounded-[25px] border-[#f58020] transition-all opacity-75 hover:opacity-100  py-12 xl:py-6 px-4 w-full shadow-lg">
                <h1 class="text-[#212121] text-center font-semibold text-xl ">
                  ASO
                </h1>
                <div class="text-center py-4 px-4">
                  <h1 class="text-[#212121] w-[200px] text-3xl font-black">$1200</h1>
                  <p class="text-[#212121]  mt-2">Monthly</p>
                </div>
                <div class="h-px bg-gray-200"></div>
                <div class="text-center mt-3">
                <p class="text-sm text-[#212121]">
                    <ul className=" h-[200px] overflow-scroll">
                      <li>Keyword Research and Optimization</li>
                      <li>App Title and Subtitle Optimization</li>
                      <li>App Description Optimization</li>
                      <li>Icon and Screenshots Optimization</li>
                      <li>App Preview Video</li>
                      <li>Localization</li>
                      <li>Ratings and Reviews Management</li>
                      <li>Category Selection</li>
                      <li>User Engagement and Retention</li>
                      <li>Backlinks and External Promotion</li>
                      <li>Keyword Tracking and Analytics</li>
                    </ul>
                  </p>
                </div>
                <button
                 onClick={() => {
                  setOpenModal(true);
                }}
                 class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                  Buy Now
                </button>
              </div>
            </div>
          </div> */}
               <h1 className="text-center text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold ">
        Packages
      </h1>
        <PriceTabs />

        </div>
      </div>
      {/* <div className="flex justify-center md:justify-end items-center mt-0">
        <button
        onClick={() => {
          setOpenModal(true);
        }}
        className="px-4 py-2 border-[#f58020] border-4 hover:bg-orange-100 rounded-xl text-black text-lg">
          Contact for more prices
          <AiOutlineArrowRight className="ml-2" />
        </button>
      </div> */}

      {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}
    </div>
  );
};

export default Pricing;
