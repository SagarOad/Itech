import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import digiMarket from "../assets/vectors/digitalMarketing.png";
import digiMarket2 from "../assets/vectors/digitalMarketingg.png";
import lineArt from "../assets/vectors/animee.jpg";
import Web from "../Components/PortfolioGallery";
import ContactSection from "../Components/ContactSection";
import Work from "../Components/Animation";
import { Helmet } from "react-helmet";

const Animation = () => {
  const [openModal, setOpenModal] = useState();


  useEffect(() => {
    // Set meta tags dynamically
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Fameitech offers the 2d/3d animation services and provide quality animation services to the clients. we have high skilled experts that create a unique, engaging and informative animation.';
    document.head.appendChild(metaDescription);


    const colonicalTag = document.createElement("link")

colonicalTag.rel = "colonical"
colonicalTag.href = "https://fameitech.net/animation"

document.head.appendChild(colonicalTag)

    // Add other meta tags as needed

    // Cleanup function (optional)
    return () => {
      // Remove dynamically added meta tags when the component unmounts
      document.head.removeChild(metaDescription);
      document.head.removeChild(colonicalTag);
      // Remove other dynamically added meta tags
    };
  }, []); 


  
  return (

<>

<Helmet>

<meta property="og:image" content="https://fameitech.net/assets/6%20(1)-024fe3e6.png" />
</Helmet>  

    
    <div
      id="animation"
      className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
    >
      <Navbar />
      <div className=" pt-6 pb-16">
        <div className="px-8 md:px-24  flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                {/* <img src={shineSvt} className="w-[80px]" /> */}
              </span>{" "}
              2d/3d <br />
              <span
                id="typed"
                className="power-text span-color bg-clip-text text-[#f58020]"
              >
                Animation
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
            Our 2D and 3D animation services are the process of creating moving images through the manipulation of digital images. our 2D animation uses a flat plane, while 3D animation uses a three dimensional space. our skilled team crete high quality 2D/3D animations. <br />
              {/* We are equally filigree working with all types of animation. All
              of our animated assets are fully customized according to project
              requirements.
              <br />
              We are proud of our portfolio of animated design production
              services. Our game animation inhouse team uses powerful tools to
              represent the exact nature of an animated film, cartoon, game, and
              advertisement. */}
            </p>
          </div>
          <div className="w-full xl:w-[50%] rounded-2xl  overflow-hidden">
            <img src={digiMarket2} className="w-[800px] mx-auto" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-20 md:px-20 pt-28 bg-white">
          <h1 className="main-banner-heading text-center mb-6 mt-4 text-2xl sm:text-4xl md:text-[3.5rem] text-black font-[nexa] font-bold leading-tight">
            Our Video Animation Portfolio
          </h1>
          <div className=" my-6 flex flex-col justify-center  p-4  font-bold items-center">
            <h1 className="leading-normal text-[#f58020] font-sans font-medium text-[24px] md:text-[26px] text-center">
              It's not our complete portfolio{" "}
              <span className=" font-extrabold"> Explore further </span>tap the
              button Below for More of Our Work
            </h1>
            <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="leading-normal ml-2 mt-4 text-white bg-[#f58020] rounded-2xl px-4 font-sans font-medium text-[22px] md:text-[26px]">
              Contact Us
            </button>
          </div>
          <div className="mt-6 relative rounded-3xl backdrop-blur-xl bg-white/30">
            <Work />
          </div>
        </div>
      </div>

      <div className="bg-[#f69e55] rounded-[50px]">
        <div
          id="services"
          className="w-full pt-30 md:pt-10 relative pb-20 px-8 md:px-24 mx-auto my-16"
        >
          <div className="md:w-[80%] mb-12 md:mb-24 p-5">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl sm:text-5xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-56 top-[70px]"></span>
              What Makes 2D/3D <br />
              Animation Outstanding
            </h1>

            <p className="text-white text-[22px]  font-[Poppins]">
              Our game animation inhouse team uses powerful tools to represent
              the exact nature of an animated film, cartoon, game, and
              advertisement.
            </p>
          </div>

          <div className="grid grid-cols-12">
            <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mb-4 md:mb-0 md:mr-6">
              <img src={lineArt} className="rounded-[26px] w-[300px]" />

              <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium md:text-[22px] mb-8 text-center">
                Unlock the Magic of 2D/3D Animation!
              </p>
            </div>

            <div className="xl:col-span-9 col-span-12">
              <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Visual Storytelling
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Animation breathes life into narratives, making complex
                        ideas and stories easily understandable and engaging.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4 ">
                        Creative Freedom
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        2D/3D animation offers limitless possibilities, allowing
                        concepts to transcend reality and captivate audiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Memorable Impact:
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Animated visuals leave a lasting impression, enabling
                        brand messages and concepts to linger in viewers' minds.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Versatility
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Animation suits various contexts – from explainer videos
                        to entertainment, delivering compelling content across
                        platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Emotional Resonance:
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Characters and scenes in animation evoke emotions,
                        forging connections with audiences in ways other media
                        can't.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Innovative Expression
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        2D/3D animation allows for unique expression, enabling
                        brands to stand out in a visually saturated landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid bg-white py-8 grid-cols-12 px-8 md:px-24">
        <div className="col-span-12 lg:col-span-4 flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              Who we are?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-0 xl:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              We specialize in crafting impactful video content and animations
              that drive marketing campaigns, captivating new audiences. Our
              dedication to quality and creativity shines in every project, from
              TV commercials to social media videos. With a blend of creativity
              and technical expertise, we ensure your business goals come to
              life. Over time, we've produced corporate videos, TV commercials,
              documentaries, and animations for multinational clients. We're a
              team passionate about visually stunning storytelling.
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-center items-start p-6">
          <div>
            <img src={digiMarket} className="w-[600px] mx-auto" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              Why choose us?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-0 xl:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              Our team specializes in translating your message into captivating
              visual narratives that yield tangible results. With an unwavering
              commitment to quality, we create masterpieces across diverse
              formats, infusing innovative creativity with technical finesse.
              Our extensive portfolio showcases our adaptability and
              client-centric approach, while our proven track record with
              multinational clients reflects our ability to exceed expectations.
              Choose us to unlock a world of passionate storytelling through
              visually compelling content that resonates with audiences.
            </p>
          </div>
        </div>
      </div>

      <div>
        <ContactSection />
        <Footer />
      </div>
      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>

</>


  );
};

export default Animation;
