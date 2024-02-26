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
import Img1 from "../assets/vectors/6 (1).png"
import { Helmet } from "react-helmet";

const ecommerce = () => {
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    // Set meta tags dynamically
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'We are social media marketing agency helping online bussiness create and implement social media strategies that achieve their marketing goals. we are providing social media marketing service to all size of busssiness to grow in this digital world.';
    document.head.appendChild(metaDescription);





    const colonicalTag = document.createElement("link")

colonicalTag.rel = "colonical"
colonicalTag.href = "https://fameitech.net/digitalmarketing"


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
      id="digital-marketing"
      className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
    >
      <Navbar />
      <div className=" pt-6 pb-32">
        <div className="px-8 md:px-24  flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                {/* <img src={shineSvt} className="w-[80px]" /> */}
              </span>{" "}
              Social Media <br />
              <span
                id="typed"
                className="power-text span-color bg-clip-text text-[#f58020]"
              >
                Marketing
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
            Social Media Marketing services help bussiness of all sizes reach their target audience, build brand awarness and drive sales.The strategy of social media marketing agency is Creating and sharing engaging content across various social media plateform, bussinesses can connect with potential and existing customers, promote their products, services and generate lead, bussiness achieve their goal.
            </p>
          </div>
          <div className="w-full xl:w-[50%] rounded-2xl  overflow-hidden">
            {/* <Player
              src={anime}
              
              loop
              autoplay
            /> */}
            <img src={Img1} className="w-[650px] mx-auto"/>
          </div>
        </div>
      </div>

      <div>
        
      </div>

      <div className="bg-[#f69e55] rounded-[50px]">
        <div
          id="services"
          className="w-full pt-30 md:pt-10 relative pb-20 px-8 md:px-24 mx-auto my-16"
        >
          <div className="md:w-[80%] mb-12 md:mb-24 p-5">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl sm:text-5xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-56 top-[70px]"></span>
              What Elevates Effective  <br />
              Social Media Marketing
            </h1>
          </div>

          <div className="grid grid-cols-12 ">
            <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mb-4 md:mb-0 md:mr-6">
              <img src={lineArt} className="rounded-[26px] w-[300px]" />

              <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium md:text-[22px] mb-8 text-center">
                Amplify Your Brand's Reach with Our Social Media Marketing Solutions!
              </p>
            </div>

            <div className="xl:col-span-9 col-span-12">
              <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Strategic Approach:
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        A great social media marketing strategy is well-planned and
                        aligns with business objectives, ensuring every effort
                        serves a purpose.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4 ">
                        Data-Driven Decision-Making
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Leveraging data and analytics allows for informed
                        decisions, optimizing campaigns for better results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Personalized Content
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Tailored content resonates with the audience, fostering
                        meaningful connections and driving engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Multi-Channel Campaigns
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        An effective social media marketing approach utilizes various
                        channels to reach a broader audience and reinforce brand
                        messaging.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Audience Targeting
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Precise targeting ensures marketing efforts reach the
                        right people, increasing the likelihood of conversion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Continuous Analysis
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Regular assessment and improvement based on performance
                        data ensure ongoing success and adaptability to trends
                        and audience preferences.
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
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How do you measure success for social media marketing?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              Success in social media marketing is gauged through key performance
              indicators (KPIs) like conversion rates, ROI, website traffic,
              CTR, engagement metrics, lead generation, search engine rankings,
              social media metrics, customer retention, and cost per
              acquisition. Analyzing these metrics provides valuable insights
              into the effectiveness of marketing strategies, allowing for
              continuous optimization and achieving meaningful results in the
              digital landscape.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How much money does social media marketing cost?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              The cost of social media marketing varies widely based on factors such
              as campaign scope and objectives. On average, small businesses may
              spend $500 to $2,000 per month, medium-sized businesses may
              allocate $2,000 to $5,000, and larger enterprises may invest
              $10,000 or more for comprehensive campaigns. Specific figures
              depend on tailored strategies and desired outcomes.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              Results & Timelines in Social Media Marketing.
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              Results from social media marketing efforts can vary. Some tactics like
              PPC and social media ads show quick results (within weeks), while
              SEO and content marketing may take longer (around 3-6 months) for
              significant impact. Consistency and optimization are vital for
              sustained success.
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
