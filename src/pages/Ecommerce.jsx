import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import web1 from "../assets/vectors/webDev.png";
import lineArt from "../assets/vectors/Web_Services_39_.jpg";
import Web from "../Components/PortfolioGallery";
import ContactSection from "../Components/ContactSection";
import { Helmet } from "react-helmet";

const ecommerce = () => {
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    // Set meta tags dynamically

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Fameitech is providing web development services for an online business that they will achieve their goal in this digital world. we are top web development company help business to design, development and maintains of websites.";
    document.head.appendChild(metaDescription);

    // Add other meta tags as needed
    const colonicalTag = document.createElement("link");

    colonicalTag.rel = "colonical";
    colonicalTag.href = "https://fameitech.net/ecommerce";

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
                  Website <br />
                  <span
                    id="typed"
                    className="span-color bg-clip-text text-[#e4563aef]"
                  >
                    Development
                  </span>
                </h1>

                <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-thin text-[20px] md:text-[20px] mb-16 md:mb-8 md:text-left">
                  Web development services have a wide range of tasks, from
                  designing and building websites to developing and maintaining
                  websites.Our skilled team designs, build and maintain websites
                  to your unique needs. web development services can be
                  beneficial for bussinesses of all sizes.
                </p>
              </div>
              <div className="w-full xl:w-[40%] relative service-banner-shape1 rounded-2xl ">
                <img src={web1} className="w-[600px] absolute mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 bg-white">
          <h1 className="services2-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] text-center">
            Our Web Development{" "}
            <span className="span-color bg-clip-text text-[#e4563aef]">
              Portfolio
            </span>
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
          <Web />
        </div>

        <div className="line-banner rounded-[50px]">
          <div
            id="services"
            className="container w-full py-28 md:py-28 relative pb-20 px-8 mx-auto my-16"
          >
            <div className="md:w-[80%] mb-12">
              <h1 className="services2-heading mb-2 text-3xl tracking-normal md:text-[3.5rem] text-white font-[poppins] opacity-95 font-bold leading-[70px]">
                What makes a website great
              </h1>
            </div>

            <div className="grid grid-cols-12">
              <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mb-4 md:mb-0 md:mr-6">
                <img src={lineArt} className="rounded-[26px] w-[300px]" />

                <p className="leading-normal mt-3 text-black font-[poppins] text-center font-[300] text-[18px] md:text-[22px]">
                  Elevate Your Online Presence with Our Web Development
                  Services!
                </p>
              </div>

              <div className="xl:col-span-9 col-span-12">
                <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                  <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          User-Centric Design
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Prioritize intuitive navigation and a clean interface
                          for a seamless user experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4 ">
                          Responsive and Mobile-Friendly
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Ensure the website adapts to all devices and screen
                          sizes for easy access.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Compelling Visuals
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Engage visitors with captivating graphics and
                          high-quality images.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Clear Call-to-Action:
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Prompt users to take desired actions with
                          strategically placed CTAs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Valuable Content
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Offer informative and well-crafted content that
                          resonates with the target audience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex">
                      <div className="">
                        <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                          Fast Loading Speed
                        </h1>
                        <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Optimize performance for quick access and reduced
                          bounce rates.
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
                How do you measure success for a website?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                Web development success is assessed through a comprehensive
                analysis of various performance metrics. These include website
                traffic, user engagement, conversion rates, bounce rates, search
                engine rankings, and valuable user feedback. By continuously
                monitoring and optimizing these indicators, we ensure the
                website's effectiveness, user satisfaction, and alignment with
                our clients' objectives. Our data-driven approach allows us to
                refine our web development strategies, creating a powerful
                online presence that drives tangible business outcomes.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className="main-banner-faq relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[poppins] font-medium  md:text-left">
                How much money does website development cost?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                Web development costs are influenced by multiple elements, such
                as website complexity, design, functionality, content management
                systems, and the development team's skillset. Basic
                informational websites may range from $3,000 to $10,000, while
                more feature-rich websites, including e-commerce or custom
                solutions, could cost $10,000 to $50,000. Large-scale,
                enterprise-level projects or highly customized platforms may
                require budgets exceeding $50,000. To get precise pricing
                details, consulting with a web development agency and sharing
                project specifics is crucial.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className=" main-banner-faq relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[poppins] font-medium  md:text-left">
                How long can it be to develop website?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                The timeframe for web development depends on the website's
                complexity, design, functionalities, and the development team's
                expertise. A basic informational website may be completed in 1
                to 2 months. More complex websites, such as e-commerce platforms
                or custom solutions, may take 2 to 6 months to develop.
                Large-scale projects or highly customized platforms may require
                6 months to a year or more. The development team's efficiency
                and collaboration with clients play a vital role in meeting
                project timelines. By discussing your specific needs with a web
                development agency, you can receive a more accurate estimate for
                your project's completion.
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

export default ecommerce;
