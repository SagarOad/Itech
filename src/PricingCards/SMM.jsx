import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetQuote from '../Components/GetQuote';

const SMM = () => {
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
 
        {/* <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg w-full" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Bronze Monthly
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$397.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className='text-[#f58020]'>
    <li>Optimize FB Page</li>
    <li>1 Social Cover</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>3 Posts per Week</li>
    <li>1 Facebook Event</li>
    <li>Monthly Reporting</li>
    <li>Ad spend Up to $50</li>
</ul>
            </div>
            <div></div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg w-full" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Silver Monthly
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$597.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className='text-[#f58020]'>
    <li>Optimize FB Page</li>
    <li>1 Social Cover</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>Shares</li>
    <li>Mentions</li>
    <li>Invite to Like</li>
    <li>Inbox Responses</li>
    <li>4 Posts per Week</li>
    <li>2 Facebook Events</li>
    <li>Monthly Reporting</li>
    <li>Ad Spend Up to $65</li>
    
</ul>
            </div>
            <div></div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
     
        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg w-full" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Gold Monthly
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$997.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className='text-[#f58020]'>
    <li>Optimize FB Page</li>
    <li>1 Social Cover</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>Shares</li>
    <li>Mentions</li>
    <li>Invite to Like</li>
    <li>Inbox Responses</li>
    <li>5 Posts per Week</li>
    <li>2 Facebook Events</li>
    <li>1 Lead Generation Campaign</li>
    <li>Monthly Reporting</li>
    <li>Ad Spend Up to $120</li>
</ul>
            </div>
            <div></div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg w-full" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Platinum Monthly
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$1497.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className='text-[#f58020]'>
    <li>Optimize FB Page</li>
    <li>1 Social Cover + Holiday Covers</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>Shares</li>
    <li>Mentions</li>
    <li>Invite to Like</li>
    <li>Inbox Responses</li>
    <li>6 Posts per Week</li>
    <li>2 Facebook Events</li>
    <li>1 Lead Generation Campaign</li>
    <li>Monthly Reporting</li>
    <li>Ad Spend Up to $170</li>
</ul>
            </div>
            <div></div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg w-full" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Bronze Monthly
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$397.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className='text-[#f58020]'>
    <li>Optimize FB Page</li>
    <li>1 Social Cover</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>3 Posts per Week</li>
    <li>1 Facebook Event</li>
    <li>Monthly Reporting</li>
    <li>Ad spend Up to $50</li>
</ul>
            </div>
            <div></div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg w-full" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Silver Monthly
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$597.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className='text-[#f58020]'>
    <li>Optimize FB Page</li>
    <li>1 Social Cover</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>Shares</li>
    <li>Mentions</li>
    <li>Invite to Like</li>
    <li>Inbox Responses</li>
    <li>4 Posts per Week</li>
    <li>2 Facebook Events</li>
    <li>Monthly Reporting</li>
    <li>Ad Spend Up to $65</li>
    
</ul>
            </div>
            <div></div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div> */}

         {/* new Pricing  */}


    <div>
      <div class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-medium font-[poppins] text-2xl mb-2">Bronze Monthly</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$397.00</p>
                  
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
            <li>Optimize FB Page</li>
    <li>1 Social Cover</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>3 Posts per Week</li>
    <li>1 Facebook Event</li>
    <li>Monthly Reporting</li>
    <li>Ad spend Up to $50</li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="get-start-btn w-full">
                Get Started
              </button>
            </div>
          </div>
      </div>
    </div>

    <div>
      <div class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-medium font-[poppins] text-2xl mb-2">Silver Monthly</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$597.00</p>
                  
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
            <li>Optimize FB Page</li>
    <li>1 Social Cover</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>Shares</li>
    <li>Mentions</li>
    <li>Invite to Like</li>
    <li>Inbox Responses</li>
    <li>4 Posts per Week</li>
    <li>2 Facebook Events</li>
    <li>Monthly Reporting</li>
    <li>Ad Spend Up to $65</li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="get-start-btn w-full">
                Get Started
              </button>
            </div>
          </div>
      </div>
    </div>

    <div>
      <div class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-medium font-[poppins] text-2xl mb-2">Gold Monthly</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$997.00</p>
                  
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
            <li>Optimize FB Page</li>
    <li>1 Social Cover</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>Shares</li>
    <li>Mentions</li>
    <li>Invite to Like</li>
    <li>Inbox Responses</li>
    <li>5 Posts per Week</li>
    <li>2 Facebook Events</li>
    <li>1 Lead Generation Campaign</li>
    <li>Monthly Reporting</li>
    <li>Ad Spend Up to $120</li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="get-start-btn w-full">
                Get Started
              </button>
            </div>
          </div>
      </div>
    </div>

    <div>
      <div class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-medium font-[poppins] text-2xl mb-2">Platinum Monthly</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-[#e4563aef] font-[poppins] text-4xl">$997.00</p>
                  
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
            <li>Optimize FB Page</li>
    <li>1 Social Cover + Holiday Covers</li>
    <li>Engagement</li>
    <li>Reviews</li>
    <li>Check-ins</li>
    <li>Posts</li>
    <li>Shares</li>
    <li>Mentions</li>
    <li>Invite to Like</li>
    <li>Inbox Responses</li>
    <li>6 Posts per Week</li>
    <li>2 Facebook Events</li>
    <li>1 Lead Generation Campaign</li>
    <li>Monthly Reporting</li>
    <li>Ad Spend Up to $170</li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="get-start-btn w-full">
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

export default SMM