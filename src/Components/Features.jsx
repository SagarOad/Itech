import { useState } from "react";
import GetQuote from "./GetQuote";

const Features = () => {
  const [openModal, setOpenModal] = useState();

  return (
    <div>
      <section className="section section-features pt-8 px-8 lg:px-24 lg:py-2 mx-auto">
        <div className="features h-auto section-features-wrap backdrop-blur-xl bg-white/30 block md:flex items-center px-8 px-6 md:px-24 my-4 justify-between rounded-3xl">
          <div className="w-[100%] md:w-[50%]">
            <h1 className="text-3xl md:text-[3rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-tight md:text-left">
              Let's Try Our Services Now
            </h1>
            <p className="leading-normal text-[#212121] opacity-85 mt-3 font-[nexa-light] font-bold text-base md:text-[21px] md:text-left">
              Unlock the power of seamless communication and exceptional
              customer service with our cutting-edge services.
            </p>
          </div>
          <div className="w-[100%] mt-4 md:mt-0 md:w-[50%] flex justify-center md:justify-end">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="get-started text-[#212121] opacity-75 py-4 px-6 rounded-lg font-[poppins] text-[21px]"
            >
              Get Started
            </button>
          </div>
        </div>
        {/* <!-- <p>If you’re looking for an email client with more features, try <a href="">these</a>.</p> --> */}
      </section>
      {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}
    </div>
  );
};

export default Features;
