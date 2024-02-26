import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetQuote from '../Components/GetQuote';

const Print = () => {
  const [openModal, setOpenModal] = useState();

    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
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
        
{/* 
        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm">
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Fame Basic
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-4xl">$249.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className='text-[#]'>
    <li>Print Media Design </li>
    <li>Stationery Design (Business Card, Leterhead, Envelope) </li>
    <li>Flyer Design/Postcard (any one) </li>
    <li>Printing Service </li>
    <li>500 x Business Card Prints OR 250 x Flyer Prints </li>
    <li>Multiple File Format(Ai, PNG, JPEG, etc) </li>
    <li>Turn around time 24 - 48 Hours </li>
    <li>100% Satisfaction Guaranteed* </li>
    <li><span>Add on:</span> </li>
    <li>$30 for 24 - 48 Hours Rush Delivery </li>
</ul>
            </div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm">
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Fame Plus
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-4xl">$499.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className='text-[#]'>
    <li>Print Media Design </li>
    <li>Stationery Design (Business Card, Letterhead, Envelope) </li>
    <li>Flyer Design/Postcard/Menu Card (any one) </li>
    <li>Printing Service </li>
    <li>500 x Business Card Prints </li>
    <li>500 x Letterhead Prints </li>
    <li>500 x Envelope Prints </li>
    <li>100 x Flyer Prints </li>
    <li><span>Add on:</span></li>
    <li>$60 for 24 - 48 Hours Rush Delivery</li>
</ul>
            </div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
     
        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm">
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Fame Classic
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-4xl">$1299.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul>
    <li>Print Media Design </li>
    <li>Stationery Design (Business Card, Letterhead, Envelope) Flyer Design/Postcard/Menu Card (any one) </li>
    <li>Brochure/Product Packaging Design (any one) </li>
    <li>Apparel Design (T-Shirt, Cap, Bumper Sticker </li>
    <li>Printing Service </li>
    <li>1000 Prints Each (Business Card,Letterhead, Envelope) </li>
    <li>250 x Flyer/Brochure/ Menu Card Prints </li>
    <li>50 x T-Shirt Prints </li>
    <li>Turn around time 24 - 48 Hours </li>
    <li>Multiple Files Format Ai, PSD, Png, Jpeg Etc </li>
    <li>100% Satisfaction Guaranteed* </li>
    <li><span>Add on:</span></li>
    <li>$90 for 24 - 48 Hours Rush Delivery</li>
</ul>
            </div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div> */}

 {/* new Pricing  */}


 <div>
      <div class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Fame Basic</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-4xl">$249.00</p>
                  
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
            <li>Print Media Design </li>
    <li>Stationery Design (Business Card, letterhead, Envelope) </li>
    <li>Flyer Design/Postcard (any one) </li>
    <li>Printing Service </li>
    <li>500 x Business Card Prints OR 250 x Flyer Prints </li>
    <li>Multiple File Format(Ai, PNG, JPEG, etc) </li>
    <li>Turn around time 24 - 48 Hours </li>
    <li>100% Satisfaction Guaranteed* </li>
    <li><span>Add on:</span> </li>
    <li>$30 for 24 - 48 Hours Rush Delivery </li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="px-4 py-2 border-[#f58020] border-4 hover:bg-violet-100 rounded-xl">
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
                <p class="font-extrabold text-3xl mb-2">Fame Plus</p>
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
            <li>Print Media Design </li>
    <li>Stationery Design (Business Card, Letterhead, Envelope) </li>
    <li>Flyer Design/Postcard/Menu Card (any one) </li>
    <li>Printing Service </li>
    <li>500 x Business Card Prints </li>
    <li>500 x Letterhead Prints </li>
    <li>500 x Envelope Prints </li>
    <li>100 x Flyer Prints </li>
    <li><span>Add on:</span></li>
    <li>$60 for 24 - 48 Hours Rush Delivery</li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="px-4 py-2 border-[#f58020] border-4 hover:bg-violet-100 rounded-xl">
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
                  <p class="font-extrabold text-4xl">$1299.00</p>
                  
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
            <li>Print Media Design </li>
    <li>Stationery Design (Business Card, Letterhead, Envelope) Flyer Design/Postcard/Menu Card (any one) </li>
    <li>Brochure/Product Packaging Design (any one) </li>
    <li>Apparel Design (T-Shirt, Cap, Bumper Sticker) </li>
    <li>Printing Service </li>
    <li>1000 Prints Each (Business Card,Letterhead, Envelope) </li>
    <li>250 x Flyer/Brochure/ Menu Card Prints </li>
    <li>50 x T-Shirt Prints </li>
    <li>Turn around time 24 - 48 Hours </li>
    <li>Multiple Files Format Ai, PSD, Png, Jpeg Etc </li>
    <li>100% Satisfaction Guaranteed* </li>
    <li><span>Add on:</span></li>
    <li>$90 for 24 - 48 Hours Rush Delivery</li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="px-4 py-2 border-[#f58020] border-4 hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
      </div>
    </div>

      </Slider>
      
      {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}
      
    </>
  )
}

export default Print