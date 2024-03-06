import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import digiMarket from "../assets/vectors/gd.png";
import gd2 from "../assets/vectors/gd2.jpg";
import grphics from "../assets/vectors/graphics1.png";
import Web from "../Components/PortfolioGallery";
import ContactSection from "../Components/ContactSection";
import { Helmet } from "react-helmet";

const GraphicsDesign = () => {
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    // Set meta tags dynamically

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Fameitech have offers graphic design service that cost effective, scalable and unique design for your bussiness.we have top skilled designer that can create logo design, print design and banner design.";
    document.head.appendChild(metaDescription);

    // Add other meta tags as needed
    const colonicalTag = document.createElement("link");

    colonicalTag.rel = "colonical";
    colonicalTag.href = "https://fameitech.net/graphicsdesign";

    document.head.appendChild(colonicalTag);

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
          content="https://fameitech.net/assets/gd-d8f4f0c8.png"
        />
      </Helmet>

      <div
        id="graphics-designing"
        className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
      >
        <Navbar />
        <div className=" md:container mx-auto">
          <div className=" pt-48 pb-32">
            <div className="px-8 md:px-24  flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex flex-col w-full xl:w-[60%] justify-center lg:items-start ">
                <h1 className="main-banner-heading mix-blend-multiply mb-2 text-5xl tracking-normal md:text-[4rem] text-[#f58020] font-[poppins] opacity-95 font-bold md:leading-[70px] md:text-left">
                  <span className="flex justify-center absolute left-44 top-[-33px]">
                    {/* <img src={shineSvt} className="w-[80px]" /> */}
                  </span>{" "}
                  Graphics <br />
                  <span
                    id="typed"
                    className="span-color bg-clip-text text-[#e4563aef]"
                  >
                    Design
                  </span>
                </h1>

                <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-thin text-[20px] md:text-[20px] mb-8 md:text-left">
                  Graphic Design is the art of creating visual concepts using
                  images and text to communicate ideas that inspire and inform.
                  Graphic design service can help bussinesses of all sizes to
                  create a strong visual identity and communication their
                  message effectively to their target audience.
                </p>
              </div>
              <div className="w-full xl:w-[40%] service-banner-shape4 rounded-2xl ">
                <img src={digiMarket} className="w-[800px] mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-[50px] line-banner">
          <div id="services" className="container mx-auto px-8 py-16 my-24 ">
            <div className="md:w-[80%] mb-28">
              <h1 className="services2-heading mb-2 text-3xl tracking-normal md:text-[3.5rem] text-white font-[poppins] opacity-95 font-bold leading-[70px]">
                <span className="flex justify-center absolute left-56 top-[70px]"></span>
                What makes <br />
                Graphic Designing{" "}
                <span className=" bg-white text-[#e4563aef]">great</span>
              </h1>
            </div>

            <div className="grid grid-cols-12">
              <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mb-4 md:mb-0 md:mr-6">
                <img src={gd2} className="rounded-[26px] w-[300px]" />

                <p className="leading-normal mt-3 text-black font-[poppins] text-center font-[300] text-[18px] md:text-[22px]">
                  Turning Visions into Visuals
                </p>
              </div>

              <div className="xl:col-span-9 col-span-12">
                <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                  <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Striking Visual Appeal
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Great graphic design captures attention with visually
                          compelling elements that resonate with viewers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4 ">
                          Clear Communication
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Effective design communicates messages concisely,
                          conveying information effortlessly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Consistency and Branding
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Cohesive design elements establish a strong brand
                          identity and build recognition.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Balanced Layouts
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Well-structured layouts guide the eye and create a
                          harmonious viewing experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Creativity and Innovation
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Innovative design solutions showcase originality and
                          leave a memorable impression.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Emotional Connection
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Successful graphic design evokes emotions, fostering a
                          deeper connection with the audience.
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
          <div className="col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className="main-banner-faq relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[poppins] font-medium  md:text-left">
                What Defines a Great Graphic Design?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                A great graphic design transcends aesthetics, weaving a tale of
                visual brilliance that captivates and communicates effortlessly.
                It is a harmonious fusion of creativity, purpose, and precision
                that elevates your message beyond words. From captivating
                imagery and thoughtfully chosen colors to seamless layouts,
                every element is meticulously crafted to resonate with your
                audience. A great graphic design leaves an indelible mark,
                etching your brand's identity into the hearts and minds of those
                who engage with it. It's the symphony of creativity and
                functionality that transforms mere visuals into a powerful means
                of connection and expression.
              </p>
            </div>
          </div>
          <div className="col-span-4 flex justify-center items-start p-6">
            <div>
              <img src={grphics} className="w-[600px] mx-auto" />
            </div>
          </div>
          <div className="col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className="main-banner-faq relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[poppins] font-medium  md:text-left">
                Project Milestones in Graphic Design.
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                Translating your vision into captivating visuals involves a
                strategic journey that we meticulously navigate. Our
                deliverables encompass tailored designs crafted to reflect your
                brand's essence, while our project milestones ensure timely
                execution with precision. With every project, we embark on a
                collaborative venture, crafting designs that align with your
                objectives and adhering to timelines that bring your ideas to
                life in the most efficient and impressive manner.
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

export default GraphicsDesign;
