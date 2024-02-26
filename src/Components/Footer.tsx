import Logo from ".././assets/fame-itech-png.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TbLocation } from 'react-icons/tb';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className=" bg-white">
      <hr className="w-full bg-[#212121] opacity-30 h-[1px]" />

      <div className="py-24 px-6 md:px-24 mx-auto">
        <div className="block">
          <div>
            <div className="flex flex-col justify-between">
              <img className="w-[220px] mb-3  md:mx-0" src={Logo} />
              <p className="leading-normal text-[#212121] opacity-75 ml-3 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
                Unlock digital excellence with us
              </p>

              <div>
                {/* <ul className="flex flex-col leading-10 p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                  <li className="md:pl-3 py-2 md:py-0 md:border-0 border-t-2 border-white md:text-end">
                    <a
                      href="#projects"
                      className="text-[#212121] hover:text-[#f58020] font-sans font-bold text-[18px] md:text-[18px]"
                    >
                      Projects
                    </a>
                  </li>
                  <li className="md:pl-[3.5rem] py-2 md:py-0 md:border-0 border-t-2 border-white md:text-end">
                    <a
                      href="#pricing"
                      className="text-[#212121] hover:text-[#f58020] font-sans font-bold text-[18px] md:text-[18px]"
                    >
                      Prices
                    </a>
                  </li>
                  <li className="md:pl-[3.5rem] py-2 md:py-0 md:border-0 border-t-2 border-white md:text-end">
                    <NavLink to="/about">
                    <a
                      href="#pricing"
                      className="text-[#212121] hover:text-[#f58020] font-sans font-bold text-[18px] md:text-[18px]"
                    >
                      About
                    </a>
                    </NavLink>
                  </li>
                  <li className="md:pl-[3.5rem] py-2 md:py-0 md:border-0 border-t-2 border-white md:text-end">
                    <a
                      href="#contact"
                      className="text-[#212121] hover:text-[#f58020] font-sans font-bold text-[18px] md:text-[18px]"
                    >
                      Contact
                    </a>
                  </li>
                </ul> */}
              </div>
              <div className=" flex items-center mt-4">
              <TbLocation className=" text-[#f58020] mr-4 font-bold text-[24px]" />
              <p className="text-[#212121] mx-2 font-sans font-medium text-[18px] md:text-[18px]s">
              8 The Green #14675; Dover, DE 19901
              </p>
              </div>

              <div className=" flex items-center mt-4">
              <FiPhone className=" text-[#f58020] mr-4 text-[24px]" />
              <p className="text-[#212121] mx-2 font-sans font-medium text-[18px] md:text-[18px]s">
              (302) 501-7152
              </p>
              </div>
            </div>    

            <div className="flex justify-center mt-10 items-center">
              <div className="py-8 mx-auto tracking-[1px] ml-3 text-[14px] text-[#212121] font-bold font-[nexa-light]">
                © 2023 Fame Itech, All Rights Reserved
              </div>

              <div className="flex my-8 md:my-0 justify-center md:justify-end item-center">
                <a target="_blank" href="https://www.instagram.com/fameitechllc/">
                  <BsInstagram className="text-[#6d6d6d] mx-2  text-[26px]" />
                </a>
                <a target="_blank" href="https://www.facebook.com/fameitechllc/">
                  <FaFacebookF className="text-[#6d6d6d] mx-2 text-[26px]" />
                </a>
              </div>

              
            </div>
            
            <hr className="w-full bg-[#f58020] opacity-40 h-[3px]" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
