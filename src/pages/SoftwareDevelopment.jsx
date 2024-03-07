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

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Fameitech are provide video production service sound design, color correction corporate and post production service. We have a professional video editors that can creates and edit video content.";
    document.head.appendChild(metaDescription);

    // Add other meta tags as needed
    const colonicalTag = document.createElement("link");

    colonicalTag.rel = "colonical";
    colonicalTag.href = "https://fameitech.net/softwaredevelopment";

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
    <div
      id="video-animation"
      className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
    >
      <Navbar />
      <div className=" container mx-auto">
        <div className=" pt-48 pb-32">
          <div className="md:px-8 flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full xl:w-[60%] justify-center lg:items-start ">
              <h1 className="main-banner-heading mix-blend-multiply mb-2 text-5xl tracking-normal md:text-[4rem] text-[#f58020] font-[poppins] opacity-95 font-bold md:leading-[70px] md:text-left">
                <span className="flex justify-center absolute left-44 top-[-33px]">
                  {/* <img src={shineSvt} className="w-[80px]" /> */}
                </span>
                Video{" "}
                <span
                  id="typed"
                  className="span-color bg-clip-text text-[#e4563aef]"
                >
                  Editing
                </span>
              </h1>

              <p className="leading-normal text-[#212121] opacity-75 md:pr-20 font-sans font-thin text-[20px] md:text-[20px] mb-16 md:mb-8 md:text-left">
                Video editing service can help individuals and bussinesses
                create professional looking videos that engage and inform their
                audience. A good video editing service will work closely with
                you to undderstand your needs and goals. video editing enhances
                storytelling, color correction, special effects and transitions.
                {/* <br />
                 */}
              </p>
            </div>
            <div className="w-full xl:w-[40%] service-banner-shape5 rounded-2xl">
              <img src={web1} className="w-[450px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:pt-16">
        <h1 className="services2-heading mix-blend-multiply mb-6 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] text-center">
          Video Editing Portfolio
        </h1>
        {/* <div className=" my-6 flex flex-col justify-center  p-4  font-bold items-center">
          <h1 className="leading-normal text-[#4e4e4e] font-[poppins] text-center font-[300] text-[18px] md:text-[30px]">
            It's not our complete portfolio Explore further tap the button Below
            for More of Our Work
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
        </div> */}

        <VideoAnime />
      </div>

      <div className="py-6">
        <div className="px-8 container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="w-full xl:w-[50%]  rounded-2xl">
            <img
              src={web2}
              className="md:w-[800px] opacity-75 mx-0 md:mx-auto"
            />
          </div>
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="services2-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px]">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                {/* <img src={shineSvt} className="w-[80px]" /> */}
              </span>{" "}
              How unlimited is
              <span
                id="typed"
                className="span-color bg-clip-text text-[#e4563aef]"
              >
                "unlimited"
              </span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 font-sans font-thin text-[20px] md:text-[20px] mb-8 md:text-left">
              There's no cap on the number of video projects you can send our
              way. Our plan offers limitless revisions, ensuring your
              satisfaction. Your dedicated editor focuses on one video at a
              time, ensuring swift turnaround and a quality outcome, minus
              unnecessary delays from excessive revisions.
            </p>
          </div>
        </div>
      </div>

      <div className="  px-8 xl:px-24 md:py-24 py-16 line-banner">
        <div id="services" className="container relative pb-20 px-8 mx-auto">
          <div className="md:w-[80%] mb-12 p-5">
            <h1 className="services2-heading mb-2 text-3xl tracking-normal md:text-[3.5rem] text-white font-[poppins] opacity-95 font-bold leading-[70px]">
              What makes a video{"  "}
              <span className=" bg-white text-[#e4563aef]">great</span>
            </h1>

            <p className="text-white text-[22px]  font-[Poppins]">
              Our dedicated editing team, including an account manager and
              editor, handles your entire editing workload seamlessly. Plus,
              your personalized project dashboard keeps everything organized and
              secure in one convenient location.
            </p>
          </div>

          <div className="grid grid-cols-12">
            <div className="lg:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mb-4 md:mb-0 md:mr-6">
              <img src={lineArt} className="rounded-[26px] w-[300px]" />

              <p className="leading-normal mt-3 text-black font-[poppins] text-center font-[300] text-[18px] md:text-[22px]">
                Transforming Footage into Stories!
              </p>
            </div>

            <div className="xl:col-span-9 col-span-12">
              <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                        Compelling Storytelling
                      </h1>
                      <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
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
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4 ">
                        Visually Captivating
                      </h1>
                      <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
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
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                        Seamless Transitions
                      </h1>
                      <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
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
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                        Synchronized Audio
                      </h1>
                      <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
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
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                        Attention to Detail
                      </h1>
                      <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
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
                      <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                        Well-Paced Narrative
                      </h1>
                      <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
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

      <div className="px-8 md:container mx-auto py-24">
        <h1 className="services2-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] text-center">
          How Does this Work?
        </h1>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-3 flex justify-center group transition-all hover:shadow-lg  items-center bg-white p-6 m-4">
            <div className="px-2 md:px-6">
              <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                Step 1
              </h1>
              <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                Gather your footage and project details. Our team carefully
                examines your content's potential.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-center group items-center bg-white transition-all hover:shadow-lg  p-6 m-4">
            <div className="px-2 md:px-6">
              <h1 className="text-[#f58020] service-card- text-[24px] font-[poppins] mb-4">
                Step 2
              </h1>
              <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                We weave magic into your footage, enhancing visuals, refining
                audio, and building a coherent narrative.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-center group items-center bg-white transition-all hover:shadow-lg  p-6 m-4">
            <div className="px-2 md:px-6">
              <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                Step 3
              </h1>
              <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                Fine-tune transitions, color correction, and effects to achieve
                a polished, professional look.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-center group  items-center bg-white transition-all hover:shadow-lg  p-6 m-4">
            <div className="px-2 md:px-6">
              <h1 className="text-[#f58020]  service-card- text-[24px] font-[poppins] mb-4">
                Step 4
              </h1>
              <p className="leading-normal mt-3 text-black font-[poppins] font-[300] text-[18px] md:text-[18px]">
                Receive your masterpiece. Our final touch ensures your video
                shines across platforms, captivating your audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid bg-white container mx-auto py-8 grid-cols-12 px-8">
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
