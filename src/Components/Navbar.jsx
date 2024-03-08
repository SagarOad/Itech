import React, { useState } from "react";
import logo from "../assets/fame-itech1-png.png";
import GetQuote from "./GetQuote";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import whiteLogo from "../assets/newLogo.png";

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
    <>
      <div className=" fixed z-[99] w-full">
        <header className=" ">
          <div class="relative z-[99] border-b bg-white">
            <div class="px-6 lg:container lg:mx-auto lg:py-4">
              <div class="flex items-center justify-between">
                <div class="relative z-20">
                  <a href="#">
                    <img src={logo} alt="logo-tailus" class="w-32" />
                  </a>
                </div>

                <div class="flex items-center justify-end border-l lg:border-l-0">
                  <input
                    type="checkbox"
                    name="hamburger"
                    id="hamburger"
                    class="peer"
                    hidden
                  />
                  <label
                    for="hamburger"
                    class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                  </label>

                  <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                    <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                      <ul class="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                        <li>
                          <Link
                            className="group relative text-[18px] font-[poppins] before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-[#f58020ae] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                            to="/"
                          >
                            <span class="relative text-[18px]">Home</span>
                          </Link>
                        </li>
                        <li onMouseLeave={handleDropdownClose}>
                          <div className="group relative cursor-pointer">
                            <div
                              className=""
                              onMouseEnter={handleDropdownToggle}
                              onClick={handleDropdownToggle}
                            >
                              <HashLink
                                smooth
                                to={"/#services"}
                                data-dropdown-toggle="dropdownHover"
                                data-dropdown-trigger="hover"
                                id="dropdownHoverButton"
                                className="group relative text-[18px] font-[poppins] before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-[#f58020ae] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
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
                                <a className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left  hover:text-white md:mx-2">
                                  Mobile Application
                                </a>
                              </Link>
                              <Link to="/ecommerce">
                                <a className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                                  Web Development
                                </a>
                              </Link>
                              <Link to="/logodesigning">
                                <a className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                                  Logo Designing
                                </a>
                              </Link>
                              <Link to="/digitalmarketing">
                                <a className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                                  Social Media Marketing
                                </a>
                              </Link>
                              <Link to="/animation">
                                <a className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                                  2D / 3D Animation
                                </a>
                              </Link>
                              <Link to="/graphicsdesign">
                                <a className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                                  Graphics Design
                                </a>
                              </Link>
                              <Link to="/softwaredevelopment">
                                <a className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                                  Video Editing
                                </a>
                              </Link>
                              <Link to="/nftdesigning">
                                <a className="my-2 block border-b border-gray-100 font-[500] text-gray-500 px-4 py-2 hover:bg-[#f58020] text-left hover:text-white md:mx-2">
                                  NTF Design{" "}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <HashLink
                            className="group relative text-[18px] font-[poppins] before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-[#f58020ae] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                            smooth
                            to={"/#our-work"}
                          >
                            <span class="relative ">Projects</span>
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="group relative text-[18px] font-[poppins] before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-[#f58020ae] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                            smooth
                            to={"#pricing"}
                          >
                            <span class="relative ">Prices</span>
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="group relative text-[18px] font-[poppins] before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-[#f58020ae] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                            smooth
                            to={"/about"}
                          >
                            <span class="relative ">About us</span>
                          </HashLink>
                        </li>
                      </ul>

                      <div class="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                        <HashLink
                          className="block px-6 py-2 bg-[#e4563aef] font-[poppins] text-center text-white"
                          smooth
                          to={"#contact-us"}
                        >
                          Get started
                        </HashLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
