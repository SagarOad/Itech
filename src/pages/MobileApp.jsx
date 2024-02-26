import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import mobApp from "../assets/vectors/mobileDev.png";
// import growth from "../assets/vectors/growth.jpg";
// import mob1 from "../assets/mobileapps/1 (4).png";
// import mob2 from "../assets/mobileapps/2 (5).png";np
import mob3 from "../assets/vectors/3dAnime.png";
import newMob from "../assets/vectors/newMob.png";
import Mobile from "../Components/MobileApp";
import ContactSection from "../Components/ContactSection";

import { MdOutlineDesignServices } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { SiAzurefunctions } from "react-icons/si";
import { Helmet } from "react-helmet";

const MobileApp = () => {
  const [openModal, setOpenModal] = useState();


  useEffect(() => {
    // Set meta tags dynamically
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Fameitech have offers Mobile application development services for all bussiness to grow your bussiness in this digital world and also provide Andriod, iOS and cross plateform development services.';
    document.head.appendChild(metaDescription);

    // Add other meta tags as needed   


    const colonicalTag = document.createElement("link")

colonicalTag.rel = "colonical"
colonicalTag.href = "https://fameitech.net/servicepage"

document.head.appendChild(colonicalTag)

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

<meta property="og:image" content="https://fameitech.net/assets/mobileDev-a79a6780.png" />
</Helmet>
  
  
    <div
      id="mobile-app"
      className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
    >
      <Navbar />
      <div className=" pt-6 pb-32">
        <div className="px-8 md:px-24 relative flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                {/* <img src={shineSvt} className="w-[80px]" /> */}
              </span>{" "}
              Mobile 
              Application
              <br />
              <span
                id="typed"
                className="power-text span-color bg-clip-text text-[#f58020]"
              >
                Development
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
            Our Mobile app Development services are creation of custom apps for iOS and Andriod plateform. Mobile App development services will meet the needs of bussinesses sizes, from startups to large enterprises.If you are looking to create a simple app for your own use or a complex app for your bussiness, there is a mobile app development company that can help you.
            </p>
          </div>
          <div className="w-full xl:w-[50%] rounded-2xl  overflow-hidden">
            <img src={mobApp} className="w-[600px]  top-[-120px]  mx-auto" />
          </div>
        </div>
      </div>

      <div className="pt-16">
        <h1 className="services2-heading text-center mb-6 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
          App Portfolio
        </h1>
        <div className=" my-6 flex flex-col justify-center  p-4  font-bold items-center">
          <h1 className="leading-normal text-[#f58020] font-sans font-medium text-[24px] md:text-[26px] text-center">
            It's not our complete portfolio{" "}
            <span className=" font-extrabold"> Explore further </span>tap the
            button Below for More of Our Work
          </h1>
          <button className="leading-normal ml-2 mt-4 text-white bg-[#f58020] rounded-2xl px-4 font-sans font-medium text-[22px] md:text-[26px]">
            Contact Us
          </button>
        </div>

        <Mobile />
      </div>


      <div className="px-8 xl:px-24 py-24 bg-white">
        <h1 className="services2-heading text-center mb-6 xl:mb-12 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[48px]">
          App Effective Features
        </h1>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-3 group flex justify-center transition-all hover:shadow-lg hover:bg-[#f69e55]  rounded-[50px] items-center  p-8 m-4">
            <div className="px-2 ">
              <MdOutlineDesignServices className=" text-[92px] mx-auto mb-8 text-[#f58020] group-hover:text-white" />
              <h1 className="leading-normal text-[#212121] group-hover:opacity-100 group-hover:text-white opacity-75 font-sans font-bold text-[20px] text-center md:text-[24px] mb-5">
                User-Centric Design
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 group-hover:opacity-100 font-sans group-hover:text-white font-medium text-base md:text-[18px]  text-center">
                Prioritize intuitive navigation and a clean interface for a
                seamless user experience
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex group justify-center transition-all hover:shadow-lg hover:bg-[#f69e55] rounded-[50px] items-center  p-8 m-4">
            <div className="px-2 ">
              <MdSecurity className=" text-[92px] mx-auto mb-8 text-[#f58020] group-hover:text-white" />
              <h1 className="leading-normal text-[#212121] group-hover:opacity-100 group-hover:text-white hover:opacity-100 opacity-75 font-sans font-bold text-[22px] text-center md:text-[24px] mb-5">
                Security and Privacy
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 group-hover:opacity-100 font-sans group-hover:text-white font-medium text-base md:text-[18px]  text-center">
                Instill trust by prioritizing data security and privacy measures
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-center transition-all hover:shadow-lg hover:bg-[#f69e55] rounded-[50px] group items-center p-8 m-4">
            <div className="px-2 ">
              <MdUpdate className=" text-[92px] mx-auto mb-8 text-[#f58020] group-hover:text-white" />
              <h1 className="leading-normal text-[#212121] opacity-75 group-hover:opacity-100  group-hover:text-white font-sans font-bold text-[22px] text-center md:text-[24px] mb-5">
                Updates and Support
              </h1>
              <p className="leading-normal text-[#212121] opacity-75 group-hover:text-white group-hover:opacity-100 font-sans font-medium text-base md:text-[18px]  text-center">
                Maintain the app with updates and offer responsive customer
                support
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-center transition-all hover:shadow-lg hover:bg-[#f69e55] rounded-[50px] group items-center p-8 m-4">
            <div className="px-2 ">
              <SiAzurefunctions className=" text-[92px] mx-auto mb-8 text-[#f58020] group-hover:text-white" />
              <h1 className="leading-normal text-[#212121] group-hover:opacity-100 opacity-75 group-hover:text-white font-sans font-bold text-[22px] text-center md:text-[24px] mb-5">
                Purposeful Functionality
              </h1>
              <p className="leading-normal text-[#212121] group-hover:opacity-100 opacity-75 group-hover:text-white font-sans font-medium text-base md:text-[18px]  text-center">
                Include features that add clear value to the user, avoiding
                unnecessary complexity
              </p>
            </div>
          </div>
        </div>
      </div>

    


      <div className="py-24 relative">
        <div className="px-8 md:px-24 xl:flex flex-wrap flex-col md:flex-row items-center">
          <div className="w-full basis-2/6 ml-[-100px] xl:ml-[0px] rounded-2xl overflow-hidden">
            <img
              src={mob3}
              className="md:w-[700px] xl:absolute top-28 left-0 opacity-75 mx-0"
            />
          </div>

          <div className="flex basis-4/6 flex-col w-full justify-center lg:items-start ">
            <div className="xl:ml-32">
            <h1 className="main-banner-heading relative mb-5 text-3xl md:text-[3rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]"></span>{" "}
              Crafting Mobile Experiences That
              <span
                id="typed"
                className="power-text ml-4 span-color bg-clip-text text-[#f58020]"
              >
                Ignite Innovation
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium text-base md:text-[18px] md:text-left">
              Elevate your business with our expert mobile app development
              services. <br /> We create intuitive, feature-rich apps that
              captivate users and drive growth.
            </p>

            <div className="pr-0 xl:pr-40">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-12">
                <div className="border-2 mb-5 sm:mb-0 py-6 px-8 rounded-full mr-12">
                  <h1 className="text-[24px]">01</h1>
                </div>
                <div>
                  <h2 className="leading-normal text-[#212121] mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] md:text-left">
                    User-Centric Approach
                  </h2>
                  <p className="leading-normal text-[#212121] opacity-60 font-sans font-medium text-base md:text-[18px] md:text-left">
                    Our apps prioritize seamless user experiences, fostering
                    engagement and loyalty.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-12">
                <div className="border-2 mb-5 sm:mb-0 py-6 px-8 rounded-full mr-12">
                  <h1 className="text-[24px]">02</h1>
                </div>
                <div>
                  <h2 className="leading-normal text-[#212121] mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] md:text-left">
                    Cutting-Edge Solutions
                  </h2>
                  <p className="leading-normal text-[#212121] opacity-60 font-sans font-medium text-base md:text-[18px] md:text-left">
                    We blend the latest technologies to create high-performance
                    apps that stand out in the competitive market.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-24 bg-white py-24">
        <h1 className="services2-heading text-center mb-8 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[48px]">
          The Process
        </h1>
        <p className="leading-normal text-[#212121] mb-14 opacity-75 group-hover:opacity-100 font-sans group-hover:text-white font-medium text-base md:text-[18px] text-center">
          Elevating Mobile App Development Through a Streamlined Journey
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-evenly items-center">
            <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row items-center">
              <div>
                <h2 className="leading-normal text-[#212121] mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] text-center lg:text-right">
                  Conceptualization
                </h2>
                <p className="leading-normal text-[#212121] opacity-60 font-sans font-medium text-base md:text-[18px] text-center lg:text-right">
                  Clarify objectives, target audience, and features to outline
                  the app's core concept.
                </p>
              </div>
              <div className="border-2 py-6 px-8 mb-3 md:mb-0 rounded-full lg:ml-8 md:mr-8 ld:mr-0">
                <h1 className="text-[24px]">01</h1>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row items-center mt-6 md:mt-0">
              <div>
                <h2 className="leading-normal text-[#212121] mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] text-center lg:text-right">
                  Design & Prototyping
                </h2>
                <p className="leading-normal text-[#212121] opacity-60 font-sans font-medium text-base md:text-[18px] text-center lg:text-right">
                  Create wireframes and interactive prototypes to map out the
                  app's layout and functionalities.
                </p>
              </div>
              <div className="border-2 py-6 px-8 mb-3 md:mb-0 rounded-full lg:ml-8 md:mr-8 ld:mr-0">
                <h1 className="text-[24px]">02</h1>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row items-center mt-6 md:mt-0">
              <div>
                <h2 className="leading-normal text-[#212121] mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] text-center lg:text-right">
                  Development & Coding
                </h2>
                <p className="leading-normal text-[#212121] opacity-60 font-sans font-medium text-base md:text-[18px] text-center lg:text-right">
                  Convert designs into functional code while adhering to best
                  practices and coding standards.
                </p>
              </div>
              <div className="border-2 py-6 px-8 mb-3 md:mb-0 rounded-full lg:ml-8 md:mr-8 ld:mr-0">
                <h1 className="text-[24px]">02</h1>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
            <img src={newMob} className=" w-[500px]" />
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col justify-evenly items-center">
            <div className="flex lg:flex-row-reverse flex-col items-center mt-6 md:mt-0">
              <div className="border-2 py-6 px-8 mb-3 md:mb-0 rounded-full lg:ml-8 md:mr-8 ld:mr-0">
                <h1 className="text-[24px]">02</h1>
              </div>
              <div>
                <h2 className="leading-normal text-[#212121] mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] text-center lg:text-right">
                  Testing & Quality Assurance
                </h2>
                <p className="leading-normal text-[#212121] opacity-60 font-sans font-medium text-base md:text-[18px] text-center lg:text-right">
                  Rigorously test the app for performance, security, and
                  usability to ensure a seamless user experience.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row-reverse flex-col items-center mt-6 md:mt-0">
              <div className="border-2 py-6 px-8 mb-3 md:mb-0 rounded-full lg:ml-8 md:mr-8 ld:mr-0">
                <h1 className="text-[24px]">02</h1>
              </div>
              <div>
                <h2 className="leading-normal text-[#212121] mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] text-center lg:text-right">
                  Deployment & Launch
                </h2>
                <p className="leading-normal text-[#212121] opacity-60 font-sans font-medium text-base md:text-[18px] text-center lg:text-right">
                  Prepare and deploy the app to app stores, ensuring a smooth
                  launch and availability to users.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row-reverse flex-col items-center mt-6 md:mt-0">
              <div className="border-2 py-6 px-8 mb-3 md:mb-0 rounded-full lg:ml-8 md:mr-8 ld:mr-0">
                <h1 className="text-[24px]">02</h1>
              </div>
              <div>
                <h2 className="leading-normal text-[#212121] mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] text-center lg:text-right">
                  Ongoing Support & Maintenance
                </h2>
                <p className="leading-normal text-[#212121] opacity-60 font-sans font-medium text-base md:text-[18px] text-center lg:text-right">
                  Provide continuous support, updates, and enhancements to keep
                  the app optimized and up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid  py-8 grid-cols-12 px-8 md:px-24">
        <div className="col-span-12 md:col-span-4flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 text-[22px] md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How do you measure success for a mobile app?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              Success for a mobile app is measured by key performance indicators
              (KPIs) like user engagement, retention rates, downloads, and
              conversions. User feedback and reviews also provide insights for
              improvement. By monitoring these metrics, we ensure our apps
              deliver exceptional value and meet client goals.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 text-[22px] md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How much money does an mobile app development cost?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              The cost of an explainer video varies based on factors like video
              length, animation complexity, customization, and the production
              company's expertise. It can range from low-budget options (around
              $500 to $3,000) to mid-range choices (about $3,000 to $10,000) and
              high-end productions (starting from $10,000 and going up to
              $50,000 or more). Investing in a well-crafted explainer video can
              significantly impact brand image, customer engagement, and
              marketing efforts.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 text-[22px] md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How long can it be to develop an mobile app?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              The development time for a mobile app varies based on its
              complexity and features. Simple apps may take 2 to 4 months,
              moderately complex apps 4 to 6 months, and highly complex apps 6
              months to a year or more. Efficient planning and collaboration are
              crucial for meeting development timelines and delivering a
              successful mobile app.
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

export default MobileApp;
