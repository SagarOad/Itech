import tech from "../assets/newBanner.png";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import anime from "../assets/Animation - 1709230557060.json";
import { TbDiscountCheckFilled } from "react-icons/tb";
// import Lottie from "lottie-react"
import logo from "../assets/fame-itech-png.png";
import GetQuote from "./GetQuote";
import Navbar from "./Navbar";
// import AnimeData from "../assets/main-anime.json"
import { NavLink } from "react-router-dom";
import bgImg from "../assets/webdesign/3274408.jpg";
import shineSvt from "../assets/header-illustration.svg";

const MainBanner = () => {
  const [openModal, setOpenModal] = useState();
  const [text, setText] = useState("");
  const [fullText] = useState("INNOVATION");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 120);
    }
  }, [index]);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  return (
    <div id="main-banner" className="">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* <div className="">
        <div className=" w-[60px] h-[60px] bg-white"></div>
        <div>
          <div className=" w-[60px] h-[60px] bg-white"></div>
          <div className=" w-[60px] h-[60px] bg-[#D1D1D1]"></div>
        </div>
        <div className=" w-[60px] h-[60px] bg-[#D1D1D1]"></div>
      </div> */}
      <div className=" container mx-auto">
        <div className=" pt-20 flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full py-32 xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-4 text-[5rem] sm:text-5xl md:text-[6rem] text-white font-[BirdLove] font-medium md:text-left">
              Grow with Our
            </h1>
            <br />
            <h1 className="main-banner-heading main-banner-heading relative mt-4 mb-5 text-[5rem] sm:text-5xl md:text-[5rem] text-white font-medium md:text-left">
              <span className="  text-[white] tracking-[1px] text-[15rem] font-[poppins] font-bold">
                <span className=" opacity-50 mt">Tech</span>
                <br />
                Magic
              </span>
            </h1>

            {/* <p className="leading-normal text-white opacity-95 pr-20 font-sans font-medium text-[20px] md:text-[20px] mb-8 md:text-left">
              Unlock digital excellence with us. Elevate your brand's potential
              and achieve success in the digital realm.
            </p> */}
            <div className="flex justify-end ">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="bg-[#e4563aef] mx-4 font-[poppins] mr-0 md:mr-[22px] z-20 text-white md:py-3 py-2 md:px-5 px-3 font-medium text-[18px] md:text-[19px]"
            >Get Started</button>
              <a
                href="#our-work"
                className=""
              >
                
              </a>
              {/* <NavLink to="/about">
                <button className="bg-[#212121] mr-0 md:mr-[22px] z-20 text-white md:py-3 py-2 md:px-5 px-3 rounded-full font-sans font-medium text-[18px] ml-3 md:text-[19px]">
                  About Us
                </button>
              </NavLink> */}
            </div>
          </div>

          <div className=" w-full relative z-[50] py-2 ml-auto xl:w-[50%] overflow-hidden">
            <video
              className="main-video h-[450px] w-[550px] object-cover ml-auto  "
              loop
              autoPlay
              muted
              type="video/mp4"
              src="https://video-previews.elements.envatousercontent.com/h264-video-previews/fcb18010-f6be-43b0-80d6-75cbee4ec03e/27659685.mp4"
            />
            <div className="video-bg-shape2 absolute z-[-1] opacity-90 top-0 shadow-xl bg-[#ffffff] h-[100%] right-0 w-[590px]"></div>
            {/* <Lottie
              className="w-auto opacity-80 md:w-[860px] mt-[0px]"
              animationData={anime}
            ></Lottie> */}
          </div>
        </div>
      </div>
      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>
  );
};

export default MainBanner;
