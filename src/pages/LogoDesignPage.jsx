import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import web1 from "../assets/vectors/webDev.png";
import lineArt from "../assets/vectors/logo-art.jpg";
import Web from "../Components/PortfolioGallery";
import LogoDesign from "../Components/LogoDesign";
import ContactSection from "../Components/ContactSection";
import { Helmet } from "react-helmet";

const LogoDesignPage = () => {
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    // Set meta tags dynamically

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Welcome to Fameitech, your premier destination for cutting-edge logo design services tailored to elevate your online business in the dynamic digital landscape.";
    document.head.appendChild(metaDescription);

    // Add other meta tags as needed
    const colonicalTag = document.createElement("link");

    colonicalTag.rel = "colonical";
    colonicalTag.href = "https://fameitech.net/logodesigning";

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
          content="https://fameitech.net/assets/webDev-6fad6169.png"
        />
      </Helmet>

      <div
        id="web-development"
        className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
      >
        <Navbar />
        <div className="container mx-auto">
          <div className="pt-48 pb-32">
            <div className="md:px-8 flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex flex-col w-full xl:w-[60%] justify-center lg:items-start ">
                <h1 className="main-banner-heading mix-blend-multiply mb-2 text-5xl tracking-normal md:text-[4rem] text-[#f58020] font-[poppins] opacity-95 font-bold md:leading-[70px] md:text-left">
                  <span className="flex justify-center absolute left-44 top-[-33px]">
                    {/* <img src={shineSvt} className="w-[80px]" /> */}
                  </span>{" "}
                  Logo <br />
                  <span
                    id="typed"
                    className="span-color bg-clip-text text-[#e4563aef]"
                  >
                    Designing
                  </span>
                </h1>

                <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-thin text-[20px] md:text-[20px] mb-16 md:mb-8 md:text-left">
                  Whether you're a burgeoning startup or a well-established
                  enterprise, our tailored logo design services are meticulously
                  curated to meet your unique requirements. From
                  conceptualization to final execution, we are dedicated to
                  delivering timeless designs that leave a lasting impression.
                </p>
              </div>
              <div className="w-full xl:w-[40%] relative service-banner-shape1 rounded-2xl ">
                <img src={web1} className="w-[600px] absolute mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 bg-white">
          <h1 className="services2-heading mix-blend-multiply text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] text-center">
            Our Logo Design{" "}
            <span className="span-color bg-clip-text text-[#e4563aef]">
              Portfolio
            </span>
          </h1>
          <LogoDesign />
        </div>

        <div className="line-banner rounded-[50px]">
          <div
            id="services"
            className="container w-full py-28 md:py-28 relative pb-20 px-8 mx-auto my-16"
          >
            <div className="md:w-[80%] mb-12">
              <h1 className="services2-heading mb-2 text-3xl tracking-normal md:text-[3.5rem] text-white font-[poppins] opacity-95 font-bold leading-[70px]">
                What makes a logo great
              </h1>
            </div>

            <div className="grid grid-cols-12">
              <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mb-4 md:mb-0 md:mr-6">
                <img src={lineArt} className="rounded-[26px] w-[250px]" />

                <p className="leading-normal mt-3 text-black font-[poppins] text-center font-[300] text-[18px] md:text-[22px]">
                  Elevate Your Brand Identity with Our Logo Designing Services!
                </p>
              </div>

              <div className="xl:col-span-9 col-span-12">
                <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                  <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Simplicity
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          A memorable logo is simple yet impactful, ensuring
                          easy recognition
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4 ">
                          Versatility
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          An adaptable logo maintains its integrity across
                          various platforms and sizes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Relevance
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          A relevant logo resonates with your brand's identity
                          and target audience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Memorability
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          A memorable logo leaves a lasting impression,
                          fostering brand recall.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Timelessness
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          A timeless logo withstands trends, ensuring longevity
                          and consistency.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Originality
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          An original logo sets your brand apart with unique
                          visual elements.
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
          <div className="col-span-12 md:col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className=" main-banner-faq relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[poppins] font-medium  md:text-left">
                How Do You Measure Success for a Logo Design?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                the effectiveness of a logo design can also be assessed through
                several key indicators. These include its ability to resonate
                with the target audience, enhance brand recognition, convey the
                brand's message clearly, and ultimately contribute to achieving
                business goals. At our agency, we understand the importance of
                creating logos that not only look visually appealing but also
                serve as powerful tools for brand communication and
                differentiation in the market.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className="main-banner-faq relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[poppins] font-medium  md:text-left">
                How Much Does Logo Designing Cost?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                the cost of logo designing can vary depending on several factors
                such as the complexity of the design, the level of customization
                required, and the experience of the designer. Factors such as
                the number of initial concepts, revisions, and additional
                services like brand identity packages can also influence the
                overall cost.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className=" main-banner-faq relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[poppins] font-medium  md:text-left">
                How Long Does It Take to Design a Logo?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                the timeline for designing a logo can vary depending on various
                factors such as the complexity of the design, the number of
                revisions needed, and the availability of client feedback. While
                some logo designs may be completed within a few days, others may
                require several weeks to ensure that every detail is perfected.
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

export default LogoDesignPage;
