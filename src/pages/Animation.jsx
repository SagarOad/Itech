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

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Fameitech offers the 2d/3d animation services and provide quality animation services to the clients. we have high skilled experts that create a unique, engaging and informative animation.";
    document.head.appendChild(metaDescription);

    const colonicalTag = document.createElement("link");

    colonicalTag.rel = "colonical";
    colonicalTag.href = "https://fameitech.net/animation";

    document.head.appendChild(colonicalTag);

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
        <meta
          property="og:image"
          content="https://fameitech.net/assets/6%20(1)-024fe3e6.png"
        />
      </Helmet>

      <div
        id="animation"
        className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
      >
        <Navbar />
        <div className="container mx-auto">
          <div className="  pt-48 pb-32">
            <div className="md:px-8 flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex flex-col w-full xl:w-[60%] justify-center lg:items-start ">
                <h1 className="main-banner-heading mix-blend-multiply mb-2 text-5xl tracking-normal md:text-[4rem] text-[#f58020] font-[poppins] opacity-95 font-bold md:leading-[70px] md:text-left">
                  <span className="flex justify-center absolute left-44 top-[-33px]">
                    {/* <img src={shineSvt} className="w-[80px]" /> */}
                  </span>{" "}
                  2d/3d <br />
                  <span
                    id="typed"
                    className="span-color bg-clip-text text-[#e4563aef]"
                  >
                    Animation
                  </span>
                </h1>

                <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-thin text-[20px] md:text-[20px] mb-16 md:mb-8 md:text-left">
                  Our 2D and 3D animation services are the process of creating
                  moving images through the manipulation of digital images. our
                  2D animation uses a flat plane, while 3D animation uses a
                  three dimensional space. our skilled team crete high quality
                  2D/3D animations. <br />
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
              <div className="w-full service-banner-shape3 relative xl:w-[40%] rounded-2xl  overflow-hidden">
                <img src={digiMarket2} className="w-[800px] absolute mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto md:pt-16">
            <h1 className="services2-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] text-center">
              Our Video Animation Portfolio
            </h1>
            <div className=" my-6 flex flex-col justify-center  p-4  font-bold items-center">
              <h1 className="leading-normal text-[#4e4e4e] font-[poppins] text-center font-[300] text-[18px] md:text-[30px]">
                It's not our complete portfolio Explore further tap the button
                Below for More of Our Work
              </h1>
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
                className=" bg-[#e4563aef] font-medium font-[poppins] text-white 
                py-3 px-4 m-2 text-[14px] lg:text-[20px]"
              >
                Contact Us
              </button>
            </div>
            <div className="mt-6 relative rounded-3xl backdrop-blur-xl bg-white/30">
              <Work />
            </div>
          </div>
        </div>

        <div className=" rounded-[50px] line-banner">
          <div id="services" className="container mx-auto md:px-8 py-16 my-24 ">
            <div className="md:w-[80%] mb-12 md:mb-12 p-5">
              <h1 className="services2-heading mb-2 text-3xl tracking-normal md:text-[3.5rem] text-white font-[poppins] opacity-95 font-bold leading-[70px]">
                <span className="flex justify-center absolute left-56 top-[70px]"></span>
                What Makes 2D/3D <br />
                Animation{" "}
                <span className=" bg-white text-[#e4563aef]">Outstanding</span>
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

                <p className="leading-normal mt-3 text-black font-[poppins] text-center font-[300] text-[18px] md:text-[22px]">
                  Unlock the Magic of 2D/3D Animation!
                </p>
              </div>

              <div className="xl:col-span-9 col-span-12">
                <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                  <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Visual Storytelling
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Animation breathes life into narratives, making
                          complex ideas and stories easily understandable and
                          engaging.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4 ">
                          Creative Freedom
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          2D/3D animation offers limitless possibilities,
                          allowing concepts to transcend reality and captivate
                          audiences.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Memorable Impact:
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Animated visuals leave a lasting impression, enabling
                          brand messages and concepts to linger in viewers'
                          minds.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Versatility
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Animation suits various contexts – from explainer
                          videos to entertainment, delivering compelling content
                          across platforms.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Emotional Resonance:
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
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
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Innovative Expression
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
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

        <div className="grid container mx-auto bg-white py-8 grid-cols-12 md:px-8">
          <div className="col-span-12 lg:col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className="main-banner-faq relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[poppins] font-medium  md:text-left">
                Who we are?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                We specialize in crafting impactful video content and animations
                that drive marketing campaigns, captivating new audiences. Our
                dedication to quality and creativity shines in every project,
                from TV commercials to social media videos. With a blend of
                creativity and technical expertise, we ensure your business
                goals come to life. Over time, we've produced corporate videos,
                TV commercials, documentaries, and animations for multinational
                clients. We're a team passionate about visually stunning
                storytelling.
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
              <h1 className="main-banner-faq relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[poppins] font-medium  md:text-left">
                Why choose us?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                Our team specializes in translating your message into
                captivating visual narratives that yield tangible results. With
                an unwavering commitment to quality, we create masterpieces
                across diverse formats, infusing innovative creativity with
                technical finesse. Our extensive portfolio showcases our
                adaptability and client-centric approach, while our proven track
                record with multinational clients reflects our ability to exceed
                expectations. Choose us to unlock a world of passionate
                storytelling through visually compelling content that resonates
                with audiences.
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
