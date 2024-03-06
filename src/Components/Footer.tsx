import Logo from ".././assets/fame-itech-png.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-white ">
      <div className=" container mx-auto">
        <hr className="w-full bg-[#212121] opacity-30 h-[1px]" />

        <div className="py-24 px-6 md:px-24 mx-auto">
          <div className="block">
            <div>
              <div className="flex flex-col justify-between">
                <img className="w-[220px]  md:mx-0" src={Logo} />
                <p className="leading-normal text-[#212121] opacity-75 ml-3 pr-20 font-[poppins] font-medium text-base md:text-[18px] mb-8 md:text-left">
                  Unlock digital excellence with us
                </p>

                <div className=" flex items-center mt-4">
                  <TbLocation className=" text-[#f58020] mr-4 font-bold text-[24px]" />
                  <p className="text-[#212121] mx-2 font-[poppins] font-medium text-[18px] md:text-[18px]s">
                    8 The Green #14675; Dover, DE 19901
                  </p>
                </div>

                <div className=" flex items-center mt-4">
                  <FiPhone className=" text-[#f58020] mr-4 text-[24px]" />
                  <p className="text-[#212121] mx-2 font-[poppins] font-medium text-[18px] md:text-[18px]s">
                    (302) 501-7152
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-10 items-center">
                <div className="py-8 mx-auto tracking-[1px] ml-3 text-[14px] text-[#212121] font-medium font-[poppins]">
                  © 2023 Fame Itech, All Rights Reserved
                </div>

                <div className="flex my-8 md:my-0 justify-center md:justify-end item-center">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/fameitechllc/"
                  >
                    <BsInstagram className="text-[#6d6d6d] mx-2  text-[26px]" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/fameitechllc/"
                  >
                    <FaFacebookF className="text-[#6d6d6d] mx-2 text-[26px]" />
                  </a>
                </div>
              </div>

              <hr className="w-full bg-[#f58020] opacity-40 h-[3px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
