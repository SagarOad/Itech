import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetQuote from "../Components/GetQuote";

const WebsitePricing = () => {
  const [openModal, setOpenModal] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
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
      <Slider {...settings}>
        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Basic Website
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">
                      $199.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>3 Page Website </li>
                <li>Custom Layout Design </li>
                <li>Contact/Query Form </li>
                <li>1 Banner Design </li>
                <li>2 Stock Photos</li>
                <li>
                  <span>FREE Favicon Design</span>
                </li>
                <li>Cross Browser Compatible </li>
                <li>Complete W3C Certified HTML</li>
                <li>
                  <span>Website Initial Concepts in 48 Hours</span>
                </li>
                <li>Complete Design &amp; Deployment </li>
                <li>Complete Source Files </li>
                <li>Dedicated Project Manager </li>
                <li>100% Ownership Rights </li>
                <li>100% Satisfaction Guarantee </li>
                <li>100% Money Back Guarantee </li>
                <li>Value Added Services </li>
                <li>Mobile Responsive will be Additional $200* </li>
                <li>CMS will be Additional $250* </li>
                <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Startup Website
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">
                      $699.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>5 Page Website </li>
                <li>Custom Layout Design </li>
                <li>Contact/Query Form </li>
                <li>3 Banner Designs </li>
                <li>5 Stock Photos</li>
                <li>
                  {" "}
                  <span>FREE Favicon Design</span>
                </li>
                <li>FREE Google Friendly Sitemap</li>
                <li>
                  <span>Unlimited Revisions</span>
                </li>
                <li>Complete W3C Certified HTML </li>
                <li>Website Initial Concepts in 48 Hours </li>
                <li>Complete Design &amp; Deployment </li>
                <li>Complete Source Files </li>
                <li>Dedicated Project Manager </li>
                <li>100% Ownership Rights </li>
                <li>100% Satisfaction Guarantee </li>
                <li>100% Money Back Guarantee </li>
                <li>Value Added Services </li>
                <li>Mobile Responsive will be Additional $200* </li>
                <li>CMS will be Additional $250* </li>
                <li> *NO MONTHLY OR ANY HIDDEN FEE*</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Professional Website
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">
                      $999.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>Up to 10 Unique Pages Website </li>
                <li>CMS /Admin Panel Integration </li>
                <li>5+ Stock Photos &amp; Banner Designs </li>
                <li>FREE Social Media Integration </li>
                <li>FREE Favicon Design </li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Unlimited Revisions</li>
                <li>Cross Browser Compatible </li>
                <li>Complete W3C Certified HTML </li>
                <li>Website Initial Concepts in 48 Hours</li>
                <li>Complete Design &amp; Deployment</li>
                <li>Custom, Interactive &amp; Dynamic Web Design </li>
                <li>
                  Industry specified Team of Expert Designers and Developers{" "}
                </li>
                <li>Complete Source Files </li>
                <li>Dedicated Project Manager </li>
                <li>100% Ownership Rights </li>
                <li>100% Satisfaction Guarantee </li>
                <li>100% Money Back Guarantee </li>
                <li>Value Added Services </li>
                <li>Mobile Responsive will be Additional $200* </li>
                <li>CMS will be Additional $250* </li>
                <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    E-Commerce Website
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">
                      $1499.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>Custom Ecommerce Website </li>
                <li>Up to 200 Products </li>
                <li>CMS /Admin Panel Integration </li>
                <li>Fully Mobile Responsive </li>
                <li>Shopping Cart Integration </li>
                <li>Payment Gateway Integration </li>
                <li>
                  <span>Product Listing &amp; Management</span>
                </li>
                <li>Order Management &amp; Tracking </li>
                <li>Banner Designs </li>
                <li>Unlimited Revisions</li>
                <li>
                  <span>FREE Social Media Integration</span>
                </li>
                <li>FREE Favicon Design </li>
                <li>FREE Google Friendly Sitemap Search Engine Submission </li>
                <li>Complete W3C Certified HTML </li>
                <li>
                  Industry specified Team of Expert Designers and Developers{" "}
                </li>
                <li>Complete Deployment </li>
                <li>Complete Source Files </li>
                <li>Dedicated Project Manager </li>
                <li>100% Ownership Rights </li>
                <li>100% Satisfaction Guarantee </li>
                <li>100% Money Back Guarantee </li>
                <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Corporate Website
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">
                      $1999.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>Up to 15 Unique Pages Website </li>
                <li>Custom Made, Interactive &amp; Dynamic Design </li>
                <li>Customized WordPress or PHP Development </li>
                <li>Fully Mobile Responsive </li>
                <li>Interactive Sliding Banners </li>
                <li>Up to 10 Custom Made Banner Designs</li>
                <li>
                  <span>10 Stock Images</span>
                </li>
                <li>Unlimited Revisions</li>
                <li>
                  <span>Content Management System</span>
                </li>
                <li>Online Signup Area (For Newsletters, Offers etc.) </li>
                <li>Search Bar </li>
                <li>Live Feeds of Social Networks integration (Optional)</li>
                <li>
                  <span>Up to 15 Professional Email ID’s</span>
                </li>
                <li>Google Friendly Sitemap </li>
                <li>Search Engine Submission </li>
                <li>Cross Browser Compatible </li>
                <li>Complete W3C Certified HTML </li>
                <li>
                  Industry specified Team of Expert Designers and Developers{" "}
                </li>
                <li>Complete Deployment </li>
                <li>Complete Source Files </li>
                <li>Dedicated Project Manager </li>
                <li>100% Ownership Rights </li>
                <li>100% Satisfaction Guarantee </li>
                <li>100% Money Back Guarantee </li>
                <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Platinum Website
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">
                      $3499.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>Up to 15 Unique Pages Website </li>
                <li>Custom Made, Interactive &amp; Dynamic Design </li>
                <li>Customized WordPress or PHP Development </li>
                <li>Fully Mobile Responsive </li>
                <li>Interactive Sliding Banners </li>
                <li>Up to 10 Custom Made Banner Designs</li>
                <li>
                  <span>10 Stock Images</span>
                </li>
                <li>Unlimited Revisions</li>
                <li>
                  <span>Content Management System</span>
                </li>
                <li>Online Signup Area (For Newsletters, Offers etc.) </li>
                <li>Search Bar </li>
                <li>Live Feeds of Social Networks integration (Optional)</li>
                <li>
                  <span>Up to 15 Professional Email ID’s</span>
                </li>
                <li>Google Friendly Sitemap </li>
                <li>Search Engine Submission </li>
                <li>Cross Browser Compatible </li>
                <li>Complete W3C Certified HTML </li>
                <li>
                  Industry specified Team of Expert Designers and Developers{" "}
                </li>
                <li>Complete Deployment </li>
                <li>Complete Source Files </li>
                <li>Dedicated Project Manager </li>
                <li>100% Ownership Rights </li>
                <li>100% Satisfaction Guarantee </li>
                <li>100% Money Back Guarantee </li>
                <li>*NO MONTHLY OR ANY HIDDEN FEE*</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}
    </>
  );
};

export default WebsitePricing;
