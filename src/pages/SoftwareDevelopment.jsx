import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import web1 from "../assets/vectors/videoAnimation.png";
import web2 from "../assets/vectors/videoVector.png";
import lineArt from "../assets/vectors/lineartVideo.jpg";
import Web from "../Components/PortfolioGallery";
import ContactSection from "../Components/ContactSection";
import VideoAnime from "../Components/VideoAnime";

import cardImg1 from "../assets/vectors/videoEditing.jpg";
import cardImg2 from "../assets/vectors/videoThumbnail.jpg";
import cardImg3 from "../assets/vectors/verticalVideo.jpg";

const SoftwareDevelopment = () => {
  const [openModal, setOpenModal] = useState();


  useEffect(() => {
    // Set meta tags dynamically
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Fameitech are provide video production service sound design, color correction corporate and post production service. We have a professional video editors that can creates and edit video content.';
    document.head.appendChild(metaDescription);

    // Add other meta tags as needed
    const colonicalTag = document.createElement("link")

colonicalTag.rel = "colonical"
colonicalTag.href = "https://fameitech.net/softwaredevelopment"

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
    <div
      id="video-animation"
      className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
    >
      <Navbar />
      <div className="pt-6 pb-32">
        <div className="px-8 md:px-24 flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-4xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                {/* <img src={shineSvt} className="w-[80px]" /> */}
              </span>{" "}
              Video
              <span
                id="typed"
                className="power-text ml-4 span-color bg-clip-text text-[#f58020]"
              >
                Editing
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
            Video editing service can help individuals and bussinesses create professional looking videos that engage and inform their audience. A good video editing service will work closely with you to undderstand your needs and goals. video editing enhances storytelling, color correction, special effects and transitions.
              {/* <br />
               */}
            </p>
          </div>
          <div className="w-full xl:w-[50%] rounded-2xl overflow-hidden">
            <img src={web1} className="w-[600px] opacity-75 mx-auto" />
          </div>
        </div>
      </div>

      <div className="pt-16 pb-8 bg-white">
        <h1 className="services2-heading text-center mb-6 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
          Video Editing Portfolio
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

        <VideoAnime />
      </div>

      <div className="py-6">
        <div className="px-8 md:px-24 flex flex-wrap flex-col md:flex-row items-center">
          <div className="w-full xl:w-[50%] rounded-2xl overflow-hidden">
            <img
              src={web2}
              className="md:w-[800px] opacity-75 mx-0 md:mx-auto"
            />
          </div>
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-4xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                {/* <img src={shineSvt} className="w-[80px]" /> */}
              </span>{" "}
              How unlimited is
              <span
                id="typed"
                className="power-text ml-4 span-color bg-clip-text text-[#f58020]"
              >
                "unlimited"
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium text-base md:text-[18px] md:text-left">
              There's no cap on the number of video projects you can send our
              way. Our plan offers limitless revisions, ensuring your
              satisfaction. Your dedicated editor focuses on one video at a
              time, ensuring swift turnaround and a quality outcome, minus
              unnecessary delays from excessive revisions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f69e55] rounded-[50px]">
        <div
          id="services"
          className="w-full pt-30 md:pt-10 relative pb-20 px-8 md:px-24 mx-auto my-16"
        >
          <div className="md:w-[80%] mb-12 md:mb-24 p-5">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl sm:text-5xl md:text-[5rem] text-[#212121] font-[nexa] font-bold leading-tight md:text-left">
              <span className="flex justify-center absolute left-56 top-[70px]"></span>
              What makes a <br />
              video great
            </h1>

            <p className="text-white text-[22px]  font-[Poppins]">
            Our dedicated editing team, including an account manager and
              editor, handles your entire editing workload seamlessly.<br /> Plus,
              your personalized project dashboard keeps everything organized and
              secure in one convenient location.
            </p>
          </div>

          <div className="grid grid-cols-12">
            <div className="lg:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mb-4 md:mb-0 md:mr-6">
              <img src={lineArt} className="rounded-[26px] w-[300px]" />

              <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium md:text-[22px] mb-4">
                Transforming Footage into Stories!
              </p>
            </div>

            <div className="xl:col-span-9 col-span-12">
              <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Compelling Storytelling
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        A great video animation is driven by a clear and
                        engaging narrative that captivates viewers from start to
                        finish.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4 ">
                        Visually Captivating
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Eye-catching visuals, vibrant colors, and creative
                        design elements hold viewers' attention and enhance the
                        visual experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Seamless Transitions
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Smooth transitions between scenes maintain a coherent
                        flow and prevent distractions, ensuring a seamless
                        viewing experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Synchronized Audio
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        The perfect blend of audio, whether it's narration,
                        music, or sound effects, enhances the emotional impact
                        and reinforces the message.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Attention to Detail
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Small nuances, intricate animations, and thoughtful
                        details demonstrate a commitment to quality and
                        contribute to the overall impact of the animation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[nexa] mb-4">
                        Well-Paced Narrative
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        A balanced pacing ensures that the animation's storyline
                        unfolds naturally, keeping viewers engaged and
                        intrigued.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 xl:px-24 py-14">
        <h1 className="services2-heading text-center mb-6 xl:mb-12 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[48px]">
          How Does this Work?
        </h1>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-3 flex justify-center group transition-all hover:shadow-lg hover:bg-[#f69e55] items-center bg-white p-6 m-4">
            <div className="px-2 md:px-6">
              <h1 className="leading-normal text-[#f58020] opacity-75 font-sans font-bold transition-all group-hover:text-white group-hover:opacity-100 text-[22px] md:text-[26px] mb-4">
                Step 1
              </h1>
              <p className="leading-normal transition-all text-[#212121] group-hover:text-white group-hover:opacity-100 opacity-75 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
                Gather your footage and project details. Our team carefully
                examines your content's potential.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-center group items-center bg-white transition-all hover:shadow-lg hover:bg-[#f69e55] p-6 m-4">
            <div className="px-2 md:px-6">
              <h1 className="leading-normal text-[#f58020]  opacity-75 font-sans font-bold transition-all group-hover:text-white group-hover:opacity-100 text-[22px] md:text-[26px] mb-4">
                Step 2
              </h1>
              <p className="leading-normal text-[#212121] group-hover:text-white group-hover:opacity-100 opacity-75 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
                We weave magic into your footage, enhancing visuals, refining
                audio, and building a coherent narrative.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-center group items-center bg-white transition-all hover:shadow-lg hover:bg-[#f69e55] p-6 m-4">
            <div className="px-2 md:px-6">
              <h1 className="leading-normal text-[#f58020] opacity-75 font-sans font-bold transition-all group-hover:text-white group-hover:opacity-100 text-[22px] md:text-[26px] mb-4">
                Step 3
              </h1>
              <p className="leading-normal text-[#212121] group-hover:text-white group-hover:opacity-100 opacity-75 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
                Fine-tune transitions, color correction, and effects to achieve
                a polished, professional look.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-center group  items-center bg-white transition-all hover:shadow-lg hover:bg-[#f69e55] p-6 m-4">
            <div className="px-2 md:px-6">
              <h1 className="leading-normal text-[#f58020] opacity-75 font-sans font-bold transition-all group-hover:text-white group-hover:opacity-100 text-[22px] md:text-[26px] mb-4">
                Step 4
              </h1>
              <p className="leading-normal text-[#212121] group-hover:text-white group-hover:opacity-100 opacity-75 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
                Receive your masterpiece. Our final touch ensures your video
                shines across platforms, captivating your audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid bg-white py-8 grid-cols-12 px-8 md:px-24">
        <div className="col-span-12 lg:col-span-4 md:m-8">
          <div className="shadow-lg transition-all hover:scale-105 rounded-[24px]">
            <h1 className="services2-heading text-center m-4 mb-6 text-2xl md:text-[2.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
              Video Editing
            </h1>
            <div className="h-[200px] w-full">
              <img src={cardImg1} className="object-cover w-full h-full" />
            </div>

            <div className="h-auto flex flex-col p-12 justify-between">
              <p className="text-center mb-6">
                Unleash Creativity through Expert Video Editing. Elevate Your
                Visuals, Captivate Your Audience.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className="bg-[#f58020] z-20 text-white opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[12px] md:text-[18px]"
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 md:m-8">
          <div className="shadow-lg transition-all hover:scale-105 rounded-[24px]">
            <h1 className="services2-heading text-center m-4 mb-6 text-2xl md:text-[2.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
              Thumbnails
            </h1>
            <div className="h-[200px] w-full">
              <img src={cardImg2} className="object-cover w-full h-full" />
            </div>

            <div className="h-auto flex flex-col p-12 justify-between">
              <p className="text-center mb-6">
                "Instant Allure: Expert Thumbnail Design. Click-Worthy Visuals
                for Unforgettable Content.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className="bg-[#f58020] z-20 text-white opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[12px] md:text-[18px]"
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>

        

        <div className="col-span-12 transition-all hover:scale-105 lg:col-span-4 md:m-8">
          <div className="shadow-lg rounded-[24px]">
            <h1 className="services2-heading text-center m-4 mb-6 text-2xl md:text-[2.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
              Verticals
            </h1>
            <div className="h-[200px] w-full">
              <img src={cardImg3} className="object-cover w-full h-full" />
            </div>

            <div className="h-auto flex flex-col p-12 justify-between">
              <p className="text-center mb-6">
                Elevate Your Brand with Vertical Videos: Tailored for Niche
                Impact.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className="bg-[#f58020] z-20 text-white opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[12px] md:text-[18px]"
                >
                  Contact Now
                </button>
              </div>
            </div>
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
  );
};

export default SoftwareDevelopment;
