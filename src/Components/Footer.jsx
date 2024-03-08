import Logo from ".././assets/fame-itech1-png.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import ContactPage from "../pages/ContactPage";

const Footer = () => {
  return (
    <>
      <ContactPage />
      <div></div>
      <div className="bg-[#F8F6F2]">
        <div className=" md:container mx-auto">
          <hr className="w-full bg-[#212121] opacity-30 h-[1px]" />
          <hr className="w-full bg-black opacity-40 h-[3px]" />

          <div className="py-20 px-6 mx-auto">
            <div className="block">
              <div>
                <div className="flex flex-col justify-between">
                  <img className="w-[200px] mb-4 md:mx-0" src={Logo} />
                  <p className="leading-normal text-black pr-20 font-[poppins] font-medium text-base md:text-[18px] mb-8 md:text-left">
                    Grow with our tech magic
                  </p>

                  <div className=" flex items-center mt-4">
                    <TbLocation className=" text-black mr-4 font-bold text-[24px]" />
                    <p className="text-black mx-2 font-[poppins] font-medium text-[18px] md:text-[18px]s">
                      8 The Green #14675; Dover, DE 19901
                    </p>
                  </div>

                  <div className=" flex items-center mt-4">
                    <FiPhone className=" text-black mr-4 text-[24px]" />
                    <p className="text-black mx-2 font-[poppins] font-medium text-[18px] md:text-[18px]s">
                      (302) 501-7152
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e4563aef]">
        <div className=" container mx-auto flex justify-center mt-10 items-center">
          <div className="py-8 mx-auto tracking-[1px] ml-3 text-[14px] text-white font-medium font-[poppins]">
            © 2024 Fame Itech, All Rights Reserved
          </div>

          <div className="flex my-8 md:my-0 justify-center md:justify-end item-center">
            <a target="_blank" href="https://www.instagram.com/fameitechllc/">
              <BsInstagram className="text-white mx-2  text-[26px]" />
            </a>
            <a target="_blank" href="https://www.facebook.com/fameitechllc/">
              <FaFacebookF className="text-white mx-2 text-[26px]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
