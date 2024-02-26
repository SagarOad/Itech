import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetQuote from "../Components/GetQuote";

const Ux = () => {
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
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg  hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Basic{" "}
              </h2>

              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-4xl">$299.00</p>
                
              </div>
            </div>
            <div>
              <div className="list-container">
              <ul className="text-[#f58020]">
                <li>10 Keywords Optimization</li>
                <li>4 Keywords in top 10</li>
                <li>Search Engine Submissions</li>
                <li> 2 Blogs Writing</li>
                <li> 4 Blog Posting Links</li>
                <li> 10 Blogs Social Bookmarking Links</li>
                <li> 1 Press Release Writing</li>
                <li>2 Press Release Links</li>
              </ul>
              </div>
              <div class="flex justify-center mt-8 ">
                <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg  hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Standard{" "}
              </h2>
            
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-4xl">$499.00</p>
                
              </div>
            </div>
            <div>
              <div className="list-container">
              <ul className="text-[#f58020]">
                <li>25 Keywords Optimization</li>
                <li> 10 Keywords in Top 10</li>
                <li>Search Engine Submissions</li>
                <li> 6 Blogs Writing</li>
                <li> 12 Blog Posting Links</li>
                <li> 20 Blogs Social Bookmarking Links</li>
                <li>2 Press Release Writing</li>
                <li> 4 Press Release Links</li>
              </ul>
              </div>
              <div class="flex justify-center mt-8 ">
                <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg  hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Professional
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-4xl">$799.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className="text-[#f58020]">
                <li> 50 Keywords Optimization</li>
                <li> 20 Keywords in Top 10</li>
                <li>14 Blogs Writing</li>
                <li>28 Blog Posting Links</li>
                <li> 30 Blogs Social Bookmarking Links</li>
                <li> 4 Press Release Writing</li>
                <li> 8 Press Release Links</li>
                <li> 4 Guest Blogging Links</li>
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
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg  hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Enterprise
              </h2>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-4xl">$1499.00</p>
                
              </div>
            </div>
            <div className="list-container">
            <ul className="text-[#f58020]">
                <li>100 Keywords Optimization</li>
                <li>40 Keywords in Top 10</li>
                <li>30 Blogs Writing</li>
                <li>60 Blog Posting Links</li>
                <li>40 Blogs Social Bookmarking Links</li>
                <li> 8 Press Release Writing</li>
                <li> 8 Press Release Links</li>
                <li> 8 Guest Blogging Links </li>
              </ul>
            </div>
            <div class="flex justify-center mt-8 ">
              <button class="border px-4 py-2 border-[#f58020]  hover:bg-violet-100 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      */}

 {/* new Pricing  */}


 <div>
      <div class=" px-8 gap-10 flex justify-center text-zinc-800 mt-10" style={{height:"600px"}}>
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200  hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Basic</p>
              </div>
              {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-4xl">$299.00</p>
                  
                </div>
              </div>
            </div>
            <ul className="font-bold list-container">
            <li>10 Keywords Optimization</li>
                <li>4 Keywords in top 10</li>
                <li>Search Engine Submissions</li>
                <li> 2 Blogs Writing</li>
                <li> 4 Blog Posting Links</li>
                <li> 10 Blogs Social Bookmarking Links</li>
                <li> 1 Press Release Writing</li>
                <li>2 Press Release Links</li>
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
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200  hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Standard</p>
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
            <li>25 Keywords Optimization</li>
                <li> 10 Keywords in Top 10</li>
                <li>Search Engine Submissions</li>
                <li> 6 Blogs Writing</li>
                <li> 12 Blog Posting Links</li>
                <li> 20 Blogs Social Bookmarking Links</li>
                <li>2 Press Release Writing</li>
                <li> 4 Press Release Links</li>
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
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200  hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Professional</p>
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
            <li> 50 Keywords Optimization</li>
                <li> 20 Keywords in Top 10</li>
                <li>14 Blogs Writing</li>
                <li>28 Blog Posting Links</li>
                <li> 30 Blogs Social Bookmarking Links</li>
                <li> 4 Press Release Writing</li>
                <li> 8 Press Release Links</li>
                <li> 4 Guest Blogging Links</li>
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
          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-10 p-8 rounded-lg shadow-lg relative border-4 border-orange-200  hover:scale-105 transition-all ease-in-out" style={{height:"500px"}}>
           
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Enterprose</p>
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
            <li>100 Keywords Optimization</li>
                <li>40 Keywords in Top 10</li>
                <li>30 Blogs Writing</li>
                <li>60 Blog Posting Links</li>
                <li>40 Blogs Social Bookmarking Links</li>
                <li> 8 Press Release Writing</li>
                <li> 8 Press Release Links</li>
                <li> 8 Guest Blogging Links </li>
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
  );
};

export default Ux;
