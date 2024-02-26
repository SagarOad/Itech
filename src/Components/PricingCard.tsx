//@ts-nocheck

import { useState } from "react";
import GetQuote from "./GetQuote";
interface Props {
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  firstPrice: string;
  secondPrice: string;
  thirdPrice: string;
  firstDiscount: string;
  seoncdDiscount: string;
  thirdDiscount: string;

  WebDesignMsg1: string;
  WebDesignMsg2: string;
  WebDesignMsg3: string;
  WebDesignMsg4: string;
  WebDesignMsg5: string;
  WebDesignMsg6: string;
  WebDesignMsg7: string;
  WebDesignMsg8: string;

  WebDesignMsg9: string;
  WebDesignMsg10: string;
  WebDesignMsg11: string;
  WebDesignMsg12: string;
  WebDesignMsg13: string;
  WebDesignMsg14: string;
  WebDesignMsg15: string;
  WebDesignMsg16: string;

  WebDesignMsg17: string;
  WebDesignMsg18: string;
  WebDesignMsg19: string;
  WebDesignMsg20: string;
  WebDesignMsg21: string;
  WebDesignMsg22: string;
  WebDesignMsg23: string;
  WebDesignMsg24: string;
  WebDesignMsg25: string;
  WebDesignMsg26: string;

  WebDesignMsg27: string;
  WebDesignMsg28: string;
  WebDesignMsg29: string;
  WebDesignMsg30: string;
  WebDesignMsg31: string;
  WebDesignMsg32: string;
  WebDesignMsg33: string;
  WebDesignMsg34: string;
}

const PricingCard = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  firstPrice,
  secondPrice,
  thirdPrice,
  firstDiscount,
  seoncdDiscount,
  thirdDiscount,
  WebDesignMsg1,
  WebDesignMsg2,
  WebDesignMsg3,
  WebDesignMsg4,
  WebDesignMsg5,
  WebDesignMsg6,
  WebDesignMsg7,
  WebDesignMsg8,

  WebDesignMsg9,
  WebDesignMsg10,
  WebDesignMsg11,
  WebDesignMsg12,
  WebDesignMsg13,
  WebDesignMsg14,
  WebDesignMsg15,
  WebDesignMsg16,

  WebDesignMsg17,
  WebDesignMsg18,
  WebDesignMsg19,
  WebDesignMsg20,
  WebDesignMsg21,
  WebDesignMsg22,
  WebDesignMsg23,
  WebDesignMsg24,
  WebDesignMsg25,
  WebDesignMsg26,
  WebDesignMsg27,
  WebDesignMsg28,
  WebDesignMsg29,
  WebDesignMsg30,
  WebDesignMsg31,
  WebDesignMsg32,
  WebDesignMsg33,
  WebDesignMsg34


}: Props) => {

  const [openModal, setOpenModal] = useState();
  
  return (
    
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center  gap-8 lg:gap-3 lg:mt-4">
        <div className="flex-1 w-full mb-6 pricing rounded-xl shadow-xl lg:scale-95">
          <div className="text-center p-12">
            <p className="text-3xl text-white lg:text-2xl xl:text-3xl pb-4">
              {firstTitle}
            </p>
            <div className="flex justify justify-center items-center">
              <span className="font-normal text-xl text-white inline-block align-text-middle">
                {firstDiscount}
              </span>
              <span className="font-extrabold text-white text-5xl lg:text-4xl xl:text-6xl align-text-middle px-3">
                {firstPrice}
              </span>
            </div>
          </div>
          <div className="border-t-2 backdrop-blur-sm p-10">
            <div className="info-container flex flex-col overflow-y-scroll h-[240px] bg-white/30 rounded-b-xl">
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
                {WebDesignMsg1}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
                {WebDesignMsg2}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
                {WebDesignMsg3}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
                {WebDesignMsg4}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
                {WebDesignMsg5}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
                {WebDesignMsg6}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
                {WebDesignMsg7}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
                {WebDesignMsg8}
              </span>
            </div>
            <button
            onClick={() => {
              setOpenModal(true);
            }}
              type="button"
              className="w-full text-center bg-white text-lg text-black mt-8 p-3 rounded shadow-xl transition"
            >
              Start your trial
            </button>
          </div>
        </div>



        <div className="lg:max-w-[500px] mb-6 relative w-full pricing rounded-xl shadow-xl lg:scale-110">
          <div className="text-center p-12">
            <p className="text-3xl text-white lg:text-2xl xl:text-3xl pb-4 font-semibold">
              {secondTitle}
            </p>
            <div className="flex justify justify-center items-center">
              <span className="font-normal text-xl text-white inline-block align-text-middle">
                {seoncdDiscount}
              </span>
              <span className="font-extrabold text-white text-5xl lg:text-4xl xl:text-6xl align-text-middle px-3">
                {secondPrice}
              </span>
            </div>
          </div>
          <div className="backdrop-blur-sm  border-t-2  p-10">
            <div className="info-container flex flex-col overflow-y-scroll h-[240px] bg-white/30 rounded-b-xl">
            <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg9}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg10}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg11}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg12}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg13}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg14}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg15}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg16}
              </span>
            </div>
            <button
             onClick={() => {
              setOpenModal(true);
            }}
              type="button"
              className="w-full text-center bg-[#f58020] text-lg text-white mt-8 p-3 rounded shadow-xl transition hover:text-white"
            >
              Start your trial
            </button>
          </div>
          <div className="absolute rounded-full w-40 text-white text-center text-sm tracking-wider px-4 py-6 -top-3 inset-x-0 mx-auto">
            MOST POPULAR
          </div>
        </div>



        <div className="flex-1 w-full mb-6 pricing rounded-xl shadow-xl lg:scale-95">
          <div className="text-center p-12">
            <p className="text-3xl lg:text-2xl text-white xl:text-3xl pb-4">
              {thirdTitle}
            </p>
            <div className="flex justify justify-center items-center">
              <span className="font-normal text-xl text-white inline-block align-text-middle">
                {thirdPrice}
              </span>
              <span className="font-extrabold text-white text-5xl lg:text-4xl xl:text-6xl align-text-middle px-3">
                {thirdDiscount}
              </span>
            </div>
          </div>
          <div className="backdrop-blur-sm  border-t-2  p-10">
            <div className="info-container flex flex-col overflow-y-scroll h-[240px] bg-white/30 rounded-b-xl">
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg17}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg18}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg19}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg20}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg21}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg22}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg23}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg24}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg25}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg26}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg27}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg28}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg29}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg30}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg31}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg32}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg33}
              </span>
              <span className=" m-2 font-[poppins] text-[16px] text-white py-2 px-3">
              {WebDesignMsg34}
              </span>
            </div>
            <button
            onClick={() => {
              setOpenModal(true);
            }}
              type="button"
              className="w-full text-center bg-white text-lg text-black mt-8 p-3 rounded shadow-xl transition"
            >
              Start your trial
            </button>
          </div>
        </div>
      </div>
      {openModal && <GetQuote closeModal={setOpenModal} Title="Request A Quote" />}
    </div>
  );
};

export default PricingCard;
