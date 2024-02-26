import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetQuote from "../Components/GetQuote";

const AnimationPricing = () => {
  const [openModal, setOpenModal] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
      // Add more breakpoints as needed
    ]
  };

  return (
    <>
    
    <Slider {...settings}>
      {/* <div>
        <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
          <div>
            <h2 class="font-extrabold text-3xl text-center mb-2">
              Fame Teaser
            </h2>

            <div class="flex flex-col items-center my-8">
              <p class="font-extrabold text-4xl">$499.00</p>
              
            </div>
          </div>
          <div>
            <div className="list-container">
              <ul className="text-[#f58020]">
                <li>
                  Suitable for Small Business, Suitable for potential
                  super-startups
                </li>
                <li>
                  and brand revamps for companies.rt-ups &amp; Enterprises
                </li>
                <li>15 Second Video - HD 1080 </li>
                <li>Professional Script </li>
                <li>Storyboard </li>
                <li>Animation </li>
                <li>Professional Voice-Over &amp; Sound Effects </li>
                <li>Custom Artwork </li>
                <li>Background Music </li>
                <li>Sample Theme </li>
                <li>2 Weeks Delivery </li>
                <li>Unlimited Storyboard Revisions </li>
                <li>Dedicated Support </li>
              </ul>
            </div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-orange-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
          <div>
            <h2 class="font-extrabold text-3xl text-center mb-2">
              Fame Startup
            </h2>
          
            <div class="flex flex-col items-center my-8">
              <p class="font-extrabold text-4xl">$799.00</p>
              
            </div>
          </div>
          <div>
            <div className="list-container">
              <ul className="text-[#f58020]">
                <li>
                  Suitable for potential super-startups and brand revamps for
                  companies.
                </li>
                <li>30 Second Video - HD 1080 </li>
                <li>Professional Script </li>
                <li>Storyboard </li>
                <li>Animation </li>
                <li>Professional Voice-Over &amp; Sound Effects </li>
                <li>Custom Artwork </li>
                <li>Background Music </li>
                <li>Sample Theme </li>
                <li>4 Weeks Delivery </li>
                <li>Unlimited Storyboard Revisions </li>
                <li>Dedicated Support</li>
              </ul>
            </div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-orange-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
          <div>
            <h2 class="font-extrabold text-3xl text-center mb-2">
              Fame Classic
            </h2>
            <div class="flex flex-col items-center my-8">
              <p class="font-extrabold text-4xl">$999.00</p>
              
            </div>
          </div>
          <div className="list-container">
            <ul class="text-[#f58020] lgo-pkg">
              <li> Unlimited Original Logo Concepts</li>
              <li> 8 Dedicated Logo Designer (Industry Specific)</li>
              <li> Unlimited Revisions</li>
              <li> Stationery Design (Business Card, Letterhead, Envelope)</li>
              <li> 500 Business Cards </li>
              <li> Email Signature Design</li>
              <li> Social Media Designs (Facebook, Twitter, Instagram)</li>
              <li> With Grey Scale Format</li>
            </ul>
          </div>
          <div></div>
          <div class="flex justify-center mt-8 ">
            <button class="border px-4 py-2 border-[#f58020]  hover:bg-orange-100 rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
          <div>
            <h2 class="font-extrabold text-3xl text-center mb-2">
              Fame Classic
            </h2>
            <div class="flex flex-col items-center my-8">
              <p class="font-extrabold text-4xl">$999.00</p>
              
            </div>
          </div>
          <div className="list-container">
            <ul class="text-[#f58020] lgo-pkg">
              <li> Unlimited Original Logo Concepts</li>
              <li> 8 Dedicated Logo Designer (Industry Specific)</li>
              <li> Unlimited Revisions</li>
              <li> Stationery Design (Business Card, Letterhead, Envelope)</li>
              <li> 500 Business Cards </li>
              <li> Email Signature Design</li>
              <li> Social Media Designs (Facebook, Twitter, Instagram)</li>
              <li> With Grey Scale Format</li>
            </ul>
          </div>
          <div></div>
          <div class="flex justify-center mt-8 ">
            <button class="border px-4 py-2 border-[#f58020]  hover:bg-orange-100 rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
 */}












      <div>
      <div class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Fame Teaser</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-4xl">$499.00</p>
                  
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
                <li>
                  Suitable for Small Business, Suitable for potential
                  super-startups
                </li>
                <li>
                  and brand revamps for companies.rt-ups &amp; Enterprises
                </li>
                <li>15 Second Video - HD 1080 </li>
                <li>Professional Script </li>
                <li>Storyboard </li>
                <li>Animation </li>
                <li>Professional Voice-Over &amp; Sound Effects </li>
                <li>Custom Artwork </li>
                <li>Background Music </li>
                <li>Sample Theme </li>
                <li>2 Weeks Delivery </li>
                <li>Unlimited Storyboard Revisions </li>
                <li>Dedicated Support </li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="px-4 py-2 border-[#f58020] border-4 hover:bg-orange-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
      </div>
    </div>


    <div>
      <div class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Fame Startup</p>
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
                  Suitable for potential super-startups and brand revamps for
                  companies.
                </li>
                <li>30 Second Video - HD 1080 </li>
                <li>Professional Script </li>
                <li>Storyboard </li>
                <li>Animation </li>
                <li>Professional Voice-Over &amp; Sound Effects </li>
                <li>Custom Artwork </li>
                <li>Background Music </li>
                <li>Sample Theme </li>
                <li>4 Weeks Delivery </li>
                <li>Unlimited Storyboard Revisions </li>
                <li>Dedicated Support</li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="px-4 py-2 border-[#f58020] border-4 hover:bg-orange-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
      </div>
    </div>


    <div>
      <div class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Fame Classic</p>
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
            <li>Suitable for potential super-startups and brand revamps for companies. </li>
    <li>60 Second Video - HD 1080 </li>
    <li>Professional Script </li>
    <li>Storyboard </li>
    <li>Animation </li>
    <li>Professional Voice-Over &amp; Sound Effects </li>
    <li>Custom Artwork </li>
    <li>Background Music </li>
    <li>Sample Theme </li>
    <li>4 Weeks Delivery </li>
    <li>Unlimited Revisions </li>
    <li>24x7 Support </li>
    <li>Dedicated Team </li>
    <li>Moneyback Guarantee </li>
    <li>100% Ownership Rights </li>
    <li>FREE All File Formats </li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="px-4 py-2 border-[#f58020] border-4 hover:bg-orange-100 rounded-xl">
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

export default AnimationPricing;
