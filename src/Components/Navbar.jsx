import React, { useState } from "react";
import logo from "../assets/fame-itech-png.png";
import GetQuote from "./GetQuote";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [navs, setNavs] = useState(false);

  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  const handleAbout = () => {
    navigate("/about");
  };

  
  return (
    <div className="shadow-lg bg-white z-[999] w-full fixed top-0 transition-transform duration-500 transform translate-y-0">
      <nav className="p-4 px-6 md:px-32 mx-auto z-20">
        <div className="flex md:flex-wrap items-center justify-between mx-auto">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Link to="/" className="flex items-center cursor-pointer mr-12">
              <img src={logo} className="md:w-[168px] w-[120px]" />
            </Link>
          </a>
          <div className="flex md:order-2 md:flex-row flex-col-reverse">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="bg-[#f58020] mr-0 md:mr-[22px] z-20 text-white opacity-75 md:py-3 py-2 md:px-5 px-3 rounded-full font-[poppins] font-[500] text-[12px] md:text-[18px]"
            >
              Request a Quote
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex justify-end items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only text-white">Open main menu</span>
              <svg
                onClick={() => setNavs(!navs)}
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-[500] border  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <Link to="/">
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Home
                  </p>
                </Link>
              </li>
              <li
                className="py-2 pl-[1rem] md:py-0 md:border-0 border-t-2 border-white text-end"
                onMouseLeave={handleDropdownClose}
              >
                <div className="group relative cursor-pointer">
                  <div
                    onMouseEnter={handleDropdownToggle}
                    onClick={handleDropdownToggle}
                  >
                    <HashLink
                      smooth
                      to={"/#services"}
                      data-dropdown-toggle="dropdownHover"
                      data-dropdown-trigger="hover"
                      id="dropdownHoverButton"
                      className="text-[#212121] menu-hover hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]"
                      aria-current="page"
                    >
                      Services
                    </HashLink>
                  </div>
                  <div
                    className={`${
                      isDropdownVisible ? "block" : "hidden"
                    } invisible md:visible w-64 absolute z-50 flex font-[poppins] font-[500] flex-col bg-gray-100 py-1 text-gray-800 shadow-xl`}
                  >
                    <Link to="/servicepage">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left  hover:text-white md:mx-2">
                        Mobile Application
                      </p>
                    </Link>
                    <Link to="/ecommerce">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        Web Development
                      </p>
                    </Link>
                    <Link to="/digitalmarketing">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        Social Media Marketing
                      </p>
                    </Link>
                    <Link to="/animation">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        2D / 3D Animation
                      </p>
                    </Link>
                    <Link to="/graphicsdesign">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        Graphics Design
                      </p>
                    </Link>
                    <Link to="/softwaredevelopment">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        Video Editing
                      </p>
                    </Link>
                    <Link to="/nftdesigning">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        NTF Design{" "}
                      </p>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <HashLink smooth to={"/#our-work"}>
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Projects
                  </p>
                </HashLink>
              </li>
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <HashLink smooth to={"/#pricing"}>
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Prices
                  </p>
                </HashLink>
              </li>
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end cursor-pointer">
                <a href="https://blog.fameitech.net" target="_blank">
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Blog
                  </p>
                </a>
              </li>

              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end cursor-pointer">
                <HashLink to={"/about"}>
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    About
                  </p>
                </HashLink>
              </li>
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <HashLink to={"/#contact"}>
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Contact
                  </p>
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {navs && (
        <header className="flex md:hidden">
          <div className="flex justify-center w-full">
            <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 w-full">
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2  text-end">
                <Link to="/">
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Home
                  </p>
                </Link>
              </li>
              <li
                className="py-2 pl-[1rem] md:py-0 md:border-0 border-t-2  text-end"
                onMouseLeave={handleDropdownClose}
                onMouseEnter={() => setDropdownVisible(true)}
              >
                <div className="group relative cursor-pointer">
                  <div>
                    <HashLink
                      smooth
                      to={"/#services"}
                      data-dropdown-toggle="dropdownHover"
                      data-dropdown-trigger="hover"
                      id="dropdownHoverButton"
                      className="text-[#212121] menu-hover hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]"
                      aria-current="page"
                      onClick={handleDropdownToggle}
                    >
                      Services
                    </HashLink>
                  </div>
                  <div
                    className={`${
                      isDropdownVisible ? "block" : "hidden"
                    } visible w-64 absolute z-50 flex font-[poppins] font-[500] flex-col bg-gray-100 py-1 text-gray-800 shadow-xl`}
                  >
                    <Link to="/servicepage">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left  hover:text-white md:mx-2">
                        Mobile Application
                      </p>
                    </Link>
                    <Link to="/ecommerce">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        Web Development
                      </p>
                    </Link>
                    <Link to="/digitalmarketing">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        Social Media Marketing
                      </p>
                    </Link>
                    <Link to="/animation">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        2D / 3D Animation
                      </p>
                    </Link>
                    <Link to="/graphicsdesign">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        Graphics Design
                      </p>
                    </Link>
                    <Link to="/softwaredevelopment">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        Video Editing
                      </p>
                    </Link>
                    <Link to="/nftdesigning">
                      <p className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                        Nft Designing
                      </p>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2  text-end">
                <HashLink smooth to={"/#our-work"}>
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Projects
                  </p>
                </HashLink>
              </li>
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2  text-end">
                <HashLink smooth to={"/#pricing"}>
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Prices
                  </p>
                </HashLink>
              </li>

              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2 text-end cursor-pointer">
                <a href="https://blog.fameitech.net" target="_blank">
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Blog
                  </p>
                </a>
              </li>
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2  text-end">
                <a href="https://blog.fameitech.net" target="_blank">
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Prices
                  </p>
                </a>
              </li>

              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2  text-end">
                <Link to="/about">
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    About
                  </p>
                </Link>
              </li>
              <li className="pl-[1rem] py-2 md:py-0 md:border-0 border-t-2  text-end">
                <HashLink to={"/#contact"}>
                  <p className="text-[#212121] hover:text-[#f58020] font-[poppins] font-[500] text-[18px] md:text-[18px]">
                    Contact
                  </p>
                </HashLink>
              </li>
            </ul>
          </div>
        </header>
      )}

      {openModal && (
        <GetQuote
          closeModal={() => setOpenModal(false)}
          Title="Request a Quote"
        />
      )}
    </div>
  );
};

export default Navbar;
