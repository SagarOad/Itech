import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetQuote from '../Components/GetQuote';

const WebPortal = () => {
  const [openModal, setOpenModal] = useState();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        
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
   
    <Slider {...settings} className='block md:hidden'>


 {/* new Pricing  */}


 <div>
      <div class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Startup Web Portal</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-4xl">$4999.00</p>
                 
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
            <li>Complete Custom Design &amp; Development </li>
    <li>Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One) </li>
    <li>Unique, User Friendly, Interactive, Dynamic, High End UI Design </li>
    <li>Unlimited Banner Designs </li>
    <li>Interactive Sliding Banners </li>
    <li>Special Hover Effects </li>
    <li>Unlimited Stock Images </li>
    <li>User Signup Area </li>
    <li>Client/User Dashboard Area </li>
    <li>Custom Coding and Development </li>
    <li>Content Management System (Custom) </li>
    <li>Online Appointment/Scheduling/Online Ordering Integration (Optional) </li>
    <li>Online Payment Integration (Optional) </li>
    <li>Multi Lingual (Optional) </li>
    <li>Custom Dynamic Forms (Optional) </li>
    <li>Shopping Cart Integration (Optional) </li>
    <li>Complete Database Creation </li>
    <li>Signup Automated Email Authentication </li>
    <li>Web Traffic Analytics Integration </li>
    <li>3rd Party API Integrations </li>
    <li>Signup Area (For Newsletters, Offers etc.) </li>
    <li>Search Bar for Easy Search </li>
    <li>Live Feeds of Social Networks integration (Optional) </li>
    <li>Search Engine Submission </li>
    <li>Module-wise Architecture </li>
    <li>Extensive Admin Panel </li>
    <li>Award Winning Team of Expert Designers and Developers </li>
    <li>Complete Deployment </li>
    <li>– Value Added Services </li>
    <li>Complete Source Files </li>
    <li>Dedicated Project Manager </li>
    <li>100% Ownership Rights </li>
    <li>100% Satisfaction Guarantee </li>
    <li>100% Money Back Guarantee</li>
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
                <p class="font-extrabold text-3xl mb-2">Web Portal Plus</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-4xl">$7999.00</p>
                 
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
<li>Complete Custom Design &amp; Development </li>
<li>Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One) </li>
<li>Unique, User Friendly, Interactive, Dynamic, High End UI Design </li>
<li>Unlimited Banner Designs </li>
<li>Interactive Sliding Banners </li>
<li>Special Hover Effects </li>
<li>Unlimited Stock Images </li>
<li>User Signup Area </li>
<li>Client/User Dashboard Area </li>
<li>Custom Coding and Development </li>
<li>Content Management System (Custom) </li>
<li>Online Appointment/Scheduling/Online Ordering Integration (Optional) </li>
<li>Online Payment Integration (Optional) </li>
<li>Multi Lingual (Optional) </li>
<li>Custom Dynamic Forms (Optional) </li>
<li>Shopping Cart Integration (Optional) </li>
<li>Complete Database Creation </li>
<li>Signup Automated Email Authentication </li>
<li>Web Traffic Analytics Integration </li>
<li>3rd Party API Integrations </li>
<li>Signup Area (For Newsletters, Offers etc.) </li>
<li>Search Bar for Easy Search </li>
<li>Live Feeds of Social Networks integration (Optional) </li>
<li>Search Engine Submission </li>
<li>Module-wise Architecture </li>
<li>Extensive Admin Panel </li>
<li>Award Winning Team of Expert Designers and Developers </li>
<li>Complete Deployment </li>
<li>Value Added Services </li>
<li>Complete Source Files </li>
<li>Dedicated Project Manager </li>
<li>100% Ownership Rights </li>
<li>100% Satisfaction Guarantee </li>
<li>100% Money Back Guarantee </li>
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

<div className='md:flex justify-center hidden'>

<div>
      <div class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Startup Web Portal</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-4xl">$4999.00</p>
                 
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
            <li>Complete Custom Design &amp; Development </li>
    <li>Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One) </li>
    <li>Unique, User Friendly, Interactive, Dynamic, High End UI Design </li>
    <li>Unlimited Banner Designs </li>
    <li>Interactive Sliding Banners </li>
    <li>Special Hover Effects </li>
    <li>Unlimited Stock Images </li>
    <li>User Signup Area </li>
    <li>Client/User Dashboard Area </li>
    <li>Custom Coding and Development </li>
    <li>Content Management System (Custom) </li>
    <li>Online Appointment/Scheduling/Online Ordering Integration (Optional) </li>
    <li>Online Payment Integration (Optional) </li>
    <li>Multi Lingual (Optional) </li>
    <li>Custom Dynamic Forms (Optional) </li>
    <li>Shopping Cart Integration (Optional) </li>
    <li>Complete Database Creation </li>
    <li>Signup Automated Email Authentication </li>
    <li>Web Traffic Analytics Integration </li>
    <li>3rd Party API Integrations </li>
    <li>Signup Area (For Newsletters, Offers etc.) </li>
    <li>Search Bar for Easy Search </li>
    <li>Live Feeds of Social Networks integration (Optional) </li>
    <li>Search Engine Submission </li>
    <li>Module-wise Architecture </li>
    <li>Extensive Admin Panel </li>
    <li>Award Winning Team of Expert Designers and Developers </li>
    <li>Complete Deployment </li>
    <li>– Value Added Services </li>
    <li>Complete Source Files </li>
    <li>Dedicated Project Manager </li>
    <li>100% Ownership Rights </li>
    <li>100% Satisfaction Guarantee </li>
    <li>100% Money Back Guarantee</li>
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
                <p class="font-extrabold text-3xl mb-2">Web Portal Plus</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-4xl">$7999.00</p>
                 
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
<li>Complete Custom Design &amp; Development </li>
<li>Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One) </li>
<li>Unique, User Friendly, Interactive, Dynamic, High End UI Design </li>
<li>Unlimited Banner Designs </li>
<li>Interactive Sliding Banners </li>
<li>Special Hover Effects </li>
<li>Unlimited Stock Images </li>
<li>User Signup Area </li>
<li>Client/User Dashboard Area </li>
<li>Custom Coding and Development </li>
<li>Content Management System (Custom) </li>
<li>Online Appointment/Scheduling/Online Ordering Integration (Optional) </li>
<li>Online Payment Integration (Optional) </li>
<li>Multi Lingual (Optional) </li>
<li>Custom Dynamic Forms (Optional) </li>
<li>Shopping Cart Integration (Optional) </li>
<li>Complete Database Creation </li>
<li>Signup Automated Email Authentication </li>
<li>Web Traffic Analytics Integration </li>
<li>3rd Party API Integrations </li>
<li>Signup Area (For Newsletters, Offers etc.) </li>
<li>Search Bar for Easy Search </li>
<li>Live Feeds of Social Networks integration (Optional) </li>
<li>Search Engine Submission </li>
<li>Module-wise Architecture </li>
<li>Extensive Admin Panel </li>
<li>Award Winning Team of Expert Designers and Developers </li>
<li>Complete Deployment </li>
<li>Value Added Services </li>
<li>Complete Source Files </li>
<li>Dedicated Project Manager </li>
<li>100% Ownership Rights </li>
<li>100% Satisfaction Guarantee </li>
<li>100% Money Back Guarantee </li>
              </ul>



            <div class="flex justify-center mt-8 ">
              <button onClick={()=>setOpenModal(true)} class="px-4 py-2 border-[#f58020] border-4 hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
      </div>
    </div>

</div>

    
    {openModal && <GetQuote closeModal={setOpenModal} Title="Contact Us" />}

     </>
  )
}

export default WebPortal