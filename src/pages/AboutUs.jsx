import React from "react";
import Lottie from "lottie-react";
import anime from "../Lottie-data/aboutusAnim.json";
import newAnime from "../Lottie-data/animation_lkqlk372.json";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUs = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="pt-36 pb-32">
          <div className="md:pt-[167px] pt-6 flex flex-col md:flex-row items-center">
            <div>
              <h1 className="main-banner-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[4rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] md:text-left">
                A Vision for Digital
                <span className="span-color bg-clip-text text-[#e4563aef]">
                  Excellence
                </span>
              </h1>

              <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-thin text-[20px] md:text-[20px] mb-8 md:text-left">
                At FameItech, we're dedicated to crafting exceptional digital
                experiences that empower businesses and inspire growth. With a
                focus on innovation and creativity, we strive to exceed
                expectations, leaving a lasting mark. Join us in shaping a
                limitless digital future for your brand. Together, we achieve
                digital excellence like never before.
              </p>

              <button
                onClick={() => {
                  setOpenModal(true);
                }}
                className=" bg-[#e4563aef] font-medium font-[poppins] text-white 
              py-3 px-4 m-2 text-[14px] lg:text-[20px]"
              >
                Get a Quote
              </button>
            </div>

            <div>
              <Lottie
                className="w-auto md:w-[660px] mt-[0px]"
                animationData={anime}
              ></Lottie>
            </div>
          </div>

          <div className="flex flex-col mt-40">
            <div className="">
              <h1 className="services2-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] text-center">
                We Are
              </h1>
              <p className="leading-normal text-white opacity-75 mt-6 font-[poppins] text-base md:text-[21px] mb-8 md:text-center"></p>
              <div className="grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div>
                      <MdOutlineSentimentSatisfiedAlt className="text-[#f58020] text-[66px]" />
                      <img className="service-icons w-32" />
                    </div>
                    <div className="ml-8">
                      <h1 className="main-banner-heading mb-6 mt-4 text-3xl md:text-[2.5rem] text-[#f58020] font-[nexa] font-bold leading-tight">
                        Client-Focused
                      </h1>
                      <p className="text-[#212121] font-[Poppins]">
                        Putting your needs first, we deliver tailored solutions
                        that exceed expectations and foster lasting partnerships
                        built on trust and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div>
                      <AiOutlineBulb className="text-[#f58020] text-[66px]" />
                    </div>
                    <div className="ml-8">
                      <h1 className="main-banner-heading mb-6 mt-4 text-3xl md:text-[2.5rem] text-[#f58020] font-[nexa] font-bold leading-tight">
                        Innovative
                      </h1>
                      <p className="text-[#212121] font-[Poppins]">
                        Creativity fuels us forward as we explore fresh ideas
                        and revolutionary approaches to elevate digital
                        experiences for our clients.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div>
                      <GiElectric className="text-[#f58020] text-[66px]" />
                    </div>
                    <div className="ml-8">
                      <h1 className="main-banner-heading mb-6 mt-4 text-3xl md:text-[2.5rem] text-[#f58020] font-[nexa] font-bold leading-tight">
                        Adapting to Technology
                      </h1>
                      <p className="text-[#212121] font-[Poppins]">
                        Embracing the latest advancements to craft innovative
                        and future-ready solutions, ensuring your success in the
                        ever-evolving digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pt-[120px] mb-16 flex flex-col md:flex-row items-center">
            <div>
              <Lottie
                className="w-auto md:w-[660px] mt-[0px]"
                animationData={newAnime}
              ></Lottie>
            </div>

            <div className="md:ml-20">
              <h1 className="main-banner-heading md:mb-12 mt-4 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] font-bold leading-tight">
                What Makes Us Stand Out
              </h1>

              <p className="leading-normal text-[#212121] opacity-75 mt-6 font-[poppins] text-[20px] md:text-[21px] mb-8 md:text-left">
                At Fameitech, we shine in the market by putting our clients
                first. Our innovative and tech-forward approach, coupled with a
                talented team, ensures personalized solutions that drive real
                results. With a proven track record of success and long-term
                partnerships, we're the right choice to elevate your brand in
                the digital world.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>
  );
};

export default AboutUs;
