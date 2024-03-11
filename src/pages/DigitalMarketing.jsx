import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import digiMarket from "../assets/vectors/digitalMarketing.png";
import lineArt from "../assets/vectors/bwink_ppl_09_single_10.jpg";
import Web from "../Components/PortfolioGallery";
import ContactSection from "../Components/ContactSection";
import anime from "../Lottie-data/marketing-anime.json";
import { Player } from "@lottiefiles/react-lottie-player";
import Img1 from "../assets/vectors/6 (1).png";
import { Helmet } from "react-helmet";
import icon1 from "../assets/icons/carbon_cloud-service-management.SVG";
import icon2 from "../assets/icons/dollar.SVG";
import icon3 from "../assets/icons/ep_data-analysis.SVG";
import icon4 from "../assets/icons/foundation_social-myspace.SVG";
import icon5 from "../assets/icons/carbon_id-management.SVG";
import icon6 from "../assets/icons/sg2.SVG";

import desc1 from "../assets/desktop.PNG"
import desc2 from "../assets/desktop.PNG"
import desc3 from "../assets/desktop.PNG"
import desc4 from "../assets/desktop.PNG"
import SocialMediaGallery from "./SocialMediaGallery";

const ecommerce = () => {
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    // Set meta tags dynamically

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "We are social media marketing agency helping online bussiness create and implement social media strategies that achieve their marketing goals. we are providing social media marketing service to all size of busssiness to grow in this digital world.";
    document.head.appendChild(metaDescription);

    const colonicalTag = document.createElement("link");

    colonicalTag.rel = "colonical";
    colonicalTag.href = "https://fameitech.net/digitalmarketing";

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
        id="digital-marketing"
        className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
      >
        <Navbar />
        <div className="container mx-auto">
          <div className=" pt-60 pb-32">
            <div className="md:px-8 flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex flex-col w-full xl:w-[60%] justify-center lg:items-start ">
                <h1 className="main-banner-heading mix-blend-multiply mb-2 text-5xl tracking-normal md:text-[4rem] text-[#f58020] font-[poppins] opacity-95 font-bold md:leading-[70px] md:text-left">
                  <span className="flex justify-center absolute left-44 top-[-33px]">
                    {/* <img src={shineSvt} className="w-[80px]" /> */}
                  </span>{" "}
                  Social Media <br />
                  <span
                    id="typed"
                    className="span-color bg-clip-text text-[#e4563aef]"
                  >
                    Marketing
                  </span>
                </h1>

                <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-thin text-[20px] md:text-[20px] mb-16 md:mb-8 md:text-left">
                  Social Media Marketing services help bussiness of all sizes
                  reach their target audience, build brand awarness and drive
                  sales.The strategy of social media marketing agency is
                  Creating and sharing engaging content across various social
                  media plateform, bussinesses can connect with potential and
                  existing customers, promote their products, services and
                  generate lead, bussiness achieve their goal.
                </p>
              </div>
              <div className="w-full xl:w-[40%] rounded-2xl">
                {/* <Player
              src={anime}
              
              loop
              autoplay
            /> */}
                <div className="service-banner-shape2">
                  <img src={Img1} className="w-[650px] mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>

        <div>
        <SocialMediaGallery />
        </div>

        <div className=" px-8 xl:px-24 md:py-24 py-16 line-banner">
          <div
            id="services"
            className="md:container relative pb-20 md:px-8 mx-auto"
          >
            <div className="md:w-[80%] mb-12 p-5">
              <h1 className="services2-heading mb-2 text-3xl tracking-normal md:text-[3.5rem] text-white font-[poppins] opacity-95 font-bold leading-[70px]">
                <span className="flex justify-center absolute left-56 top-[70px]"></span>
                What Elevates Effective <br />
                Social Media{" "}
                <span className=" bg-white text-[#e4563aef]">Marketing</span>
              </h1>
            </div>

            <div className="grid grid-cols-12 ">
              <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mb-4 md:mb-0 md:mr-6">
                <img src={lineArt} className="rounded-[26px] w-[300px]" />

                <p className="leading-normal mt-3 text-black font-[poppins] text-center font-[300] text-[18px] md:text-[22px]">
                  Amplify Your Brand's Reach with Our Social Media Marketing
                  Solutions!
                </p>
              </div>

              <div className="xl:col-span-9 col-span-12">
                <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                  <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex justify-center items-center">
                      <div className="">
                        <img src={icon4} className=" mb-4 mx-auto" />

                        <h1 className="text-[#f58020] font-[600] service-card- text-[22px] font-[poppins] mb-4">
                          Strategic Approach
                        </h1>
                        {/* <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          A great social media marketing strategy is
                          well-planned and aligns with business objectives,
                          ensuring every effort serves a purpose.
                        </p> */}
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex justify-center items-center">
                      <div className="">
                        <img src={icon3} className=" mb-8 mx-auto" />
                        <h1 className="text-[#f58020] font-[600] service-card- text-[22px] font-[poppins] mb-4 ">
                          Data analysis & ROI modeling
                        </h1>
                        {/* <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Leveraging data and analytics allows for informed
                          decisions, optimizing campaigns for better results.
                        </p> */}
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                    <div className="flex justify-center items-center">
                      <div className="">
                        <img src={icon1} className=" mb-6 mx-auto" />
                        <h1 className="text-[#f58020] font-[600] service-card- text-[22px] font-[poppins] mb-4">
                          Personalized Content
                        </h1>
                        {/* <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Tailored content resonates with the audience,
                          fostering meaningful connections and driving
                          engagement.
                        </p> */}
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex justify-center items-center">
                      <div className="">
                        <img src={icon2} className=" mb-4 mx-auto" />
                        <h1 className="text-[#f58020] font-[600] service-card- text-[22px] font-[poppins] mb-4">
                          Multi-Channel Campaigns
                        </h1>
                        {/* <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          An effective social media marketing approach utilizes
                          various channels to reach a broader audience and
                          reinforce brand messaging.
                        </p> */}
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex justify-center items-center">
                      <div className="">
                        <img src={icon6} className=" mb-4 mx-auto" />

                        <h1 className="text-[#f58020] font-[600] service-card- text-[22px] font-[poppins] mb-4">
                          Audience Targeting
                        </h1>
                        {/* <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Precise targeting ensures marketing efforts reach the
                          right people, increasing the likelihood of conversion.
                        </p> */}
                      </div>
                    </div>
                  </div>

                  <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                    <div className="flex justify-center items-center">
                      <div className="">
                        <img src={icon5} className=" mb-8 mx-auto" />
                        <h1 className="text-[#f58020] font-[600] service-card- text-[22px] font-[poppins] mb-4">
                          Continuous Analysis
                        </h1>
                        {/* <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                          Regular assessment and improvement based on
                          performance data ensure ongoing success and
                          adaptability to trends and audience preferences.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:container mx-auto grid bg-white py-8 grid-cols-12 px-8 md:px-24">
          <div className="col-span-12 md:col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className="main-banner-faq relative mt-4 mb-6 md:text-[22px] text-[#212121] font-[poppins] font-medium  md:text-left">
                How do you measure success for social media marketing?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                Success in social media marketing is gauged through key
                performance indicators (KPIs) like conversion rates, ROI,
                website traffic, CTR, engagement metrics, lead generation,
                search engine rankings, social media metrics, customer
                retention, and cost per acquisition. Analyzing these metrics
                provides valuable insights into the effectiveness of marketing
                strategies, allowing for continuous optimization and achieving
                meaningful results in the digital landscape.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className="main-banner-faq relative mt-4 mb-6 md:text-[22px] text-[#212121] font-[poppins] font-medium  md:text-left">
                How much money does social media marketing cost?
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                The cost of social media marketing varies widely based on
                factors such as campaign scope and objectives. On average, small
                businesses may spend $500 to $2,000 per month, medium-sized
                businesses may allocate $2,000 to $5,000, and larger enterprises
                may invest $10,000 or more for comprehensive campaigns. Specific
                figures depend on tailored strategies and desired outcomes.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-center items-start p-6">
            <div>
              <h1 className="main-banner-faq relative mt-4 mb-6 md:text-[22px] text-[#212121] font-[poppins] font-medium  md:text-left">
                Results & Timelines in Social Media Marketing.
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 font-[poppins] font-medium text-base md:text-[18px] mb-8 text-justify">
                Results from social media marketing efforts can vary. Some
                tactics like PPC and social media ads show quick results (within
                weeks), while SEO and content marketing may take longer (around
                3-6 months) for significant impact. Consistency and optimization
                are vital for sustained success.
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
