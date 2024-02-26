import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetQuote from "../Components/GetQuote";

const Branding = () => {
  const [openModal, setOpenModal] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  };

  return (
    <>
      <Slider {...settings} className="block md:hidden">
        <div>
          <div
            class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-gradient-to-br from-orange-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-extrabold text-3xl mb-2">Branding Startup</p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-4xl">$799.00</p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>
                  <span>Logo Design</span>
                </li>
                <li>6 Unique Logo Concepts </li>
                <li>FREE Icon </li>
                <li>FREE Grayscale Copy </li>
                <li>Unlimited Revisions </li>
                <li>100% Ownership Right </li>
                <li>AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats</li>
                <li>
                  <span>Print Media</span>
                </li>
                <li>Stationery Design (Business Card, Letterhead, Envelope)</li>
                <li>
                  <span>Website Design</span>
                </li>
                <li>10 Pages Custom Business Website </li>
                <li>Free 12 Month Hosting &amp; Domain Registration </li>
                <li>Mobile Responsive </li>
                <li>FREE Google Friendly Sitemap Search Engine Submission </li>
                <li>Complete W3C Certified HTML </li>
                <li>Complete Deployment</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="px-4 py-2 border-[#f58020] border-4 hover:bg-orange-100 rounded-xl"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-extrabold text-3xl mb-2">Branding Plus</p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-4xl">$999.00</p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>
                  <span>Logo Design</span>
                </li>
                <li>12 Unique Logo Concepts </li>
                <li>FREE Icon </li>
                <li>FREE Grayscale Copy </li>
                <li>Unlimited Revisions </li>
                <li>100% Ownership Right </li>
                <li>AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats</li>
                <li>
                  <span>Print Material</span>
                </li>
                <li>Stationery Design(Business Card,Letterhead,Envelope) </li>
                Flyer Design / Label Design
                <li>
                  <span>Website Design</span>
                </li>
                <li>Custom Ecommerce Website </li>
                <li>Up to 200 Products </li>
                <li>CMS /Admin Panel Integration </li>
                <li>Fully Mobile Responsive </li>
                <li>Shopping Cart Integration </li>
                <li>Payment Gateway Integration </li>
                <li>Responsive Design (Mobile Compatible) </li>
                <li>Free 12 Month Hosting &amp; Domain Registration </li>
                <li>Complete Deployment</li>
                <li>
                  <span>Social Media Design</span>
                </li>
                <li>Facebook Fanpage Splash Page + Cover Photo</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="px-4 py-2 border-[#f58020] border-4 hover:bg-orange-100 rounded-xl"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="hidden md:flex justify-center">
        <div>
          <div
            class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-extrabold text-3xl mb-2">Branding Startup</p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-4xl">$799.00</p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>
                  <span>Logo Design</span>
                </li>
                <li>6 Unique Logo Concepts </li>
                <li>FREE Icon </li>
                <li>FREE Grayscale Copy </li>
                <li>Unlimited Revisions </li>
                <li>100% Ownership Right </li>
                <li>AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats</li>
                <li>
                  <span>Print Media</span>
                </li>
                <li>Stationery Design (Business Card, Letterhead, Envelope)</li>
                <li>
                  <span>Website Design</span>
                </li>
                <li>10 Pages Custom Business Website </li>
                <li>Free 12 Month Hosting &amp; Domain Registration </li>
                <li>Mobile Responsive </li>
                <li>FREE Google Friendly Sitemap Search Engine Submission </li>
                <li>Complete W3C Certified HTML </li>
                <li>Complete Deployment</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="px-4 py-2 border-[#f58020] border-4 hover:bg-orange-100 rounded-xl"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-extrabold text-3xl mb-2">Branding Plus</p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-4xl">$999.00</p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>
                  <span>Logo Design</span>
                </li>
                <li>12 Unique Logo Concepts </li>
                <li>FREE Icon </li>
                <li>FREE Grayscale Copy </li>
                <li>Unlimited Revisions </li>
                <li>100% Ownership Right </li>
                <li>AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats</li>
                <li>
                  <span>Print Material</span>
                </li>
                <li>Stationery Design(Business Card,Letterhead,Envelope) </li>
                Flyer Design / Label Design
                <li>
                  <span>Website Design</span>
                </li>
                <li>Custom Ecommerce Website </li>
                <li>Up to 200 Products </li>
                <li>CMS /Admin Panel Integration </li>
                <li>Fully Mobile Responsive </li>
                <li>Shopping Cart Integration </li>
                <li>Payment Gateway Integration </li>
                <li>Responsive Design (Mobile Compatible) </li>
                <li>Free 12 Month Hosting &amp; Domain Registration </li>
                <li>Complete Deployment</li>
                <li>
                  <span>Social Media Design</span>
                </li>
                <li>Facebook Fanpage Splash Page + Cover Photo</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="px-4 py-2 border-[#f58020] border-4 hover:bg-orange-100 rounded-xl"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}
    </>
  );
};

export default Branding;
