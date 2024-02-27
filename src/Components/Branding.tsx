import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';



const Branding = () => {
  return (
    <div className="bg-white rounded-t-[50px]">
      <div className="w-full py-20 xl:px-24  mx-auto">
        <div className="xl:flex flex-col justify-between items-center md:flex-row">
          <div className='basis-4/4 mb-12 xl:mb-0 px-12 md:basis-2/4'>
          <div className="opacity-100 my-4 p-8 border-[#f58020] border-2 group shadow-md z-50 bg-white hover:shadow-lg  transition-all  xl:col-span-4 col-span-12 rounded-[26px]">
            
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#212121]  service-card- text-[24px] font-[nexa] mb-4">
                    App Store Optimization
                    </h1>
                    <p className="text-[#212121]  font-[Poppins]">
                    Enhance app visibility and downloads with strategic optimization in app stores.
                    </p>
                  </div>
                </div>
             
            </div>

            <div className="opacity-100 my-4 py-12 p-8 border-[#f58020] border-4 group  shadow-md z-50 bg-white hover:shadow-lg  transition-all  xl:col-span-4 col-span-12 rounded-[26px]">
             
             <div className="flex">
               <div className="">
                 <h1 className="text-[#f58020]  service-card- text-[34px] font-[nexa] mb-4">
                 Search Engine Optimization
                 </h1>
                 <p className="text-[#212121] font-[Poppins]">
                 Boost website visibility on search engines and drive organic traffic.
                 </p>
               </div>
             </div>
      
         </div>

            <div className="opacity-100 my-4 p-8 border-[#f58020] border-2 group  shadow-md z-50 bg-white hover:shadow-lg  transition-all  xl:col-span-4 col-span-12 rounded-[26px]">
             
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#212121]  service-card- text-[24px] font-[nexa] mb-4">
                    Social Media Marketing
                    </h1>
                    <p className="text-[#212121]  font-[Poppins]">
                    Amplify brand presence and engagement through targeted social media strategies
                    </p>
                  </div>
                </div>
            
            </div>

           
          </div>
          <div className="basis-4/4 md:basis-2/4 px-12">
            <h1 className="main-banner-heading relative mt-4 mb-12 text-[52px] sm:text-5xl md:text-[5rem] text-[#212121] font-[nexa] font-bold leading-tight text-center xl:text-left">
              Business
              <br className='sm:hidden visible' />
              <span className="mx-4 span-color bg-clip-text text-[#f58020]">
                Growth
              </span>
            </h1>
            <ul>
              <li className="flex items-center justify-center xl:justify-start mb-8">
                <BsFillRocketTakeoffFill className="text-[#f58020] text-[42px] md:text-[52px]" />
                <p className="leading-normal text-[#212121] opacity-75 ml-6 px-0 md:pr-20 font-sans font-medium text-[22px] md:text-[26px] md:text-left">
                  Boosting Brands
                </p>
              </li>
              <li className="flex items-center justify-center xl:justify-start mb-7">
                <IoIosPeople className="text-[#f58020] text-[52px] md:text-[72px]"/>
                <p className="leading-normal text-[#212121] opacity-75 ml-4 px-0 md:pr-20 font-sans font-medium text-[22px] md:text-[26px] md:text-left">
                  Targeting Leads
                </p>
              </li>
              <li className="flex items-center justify-center xl:justify-start mb-8">
              <GiReceiveMoney className="text-[#f58020] text-[52px] md:text-[72px]" />
                <p className="leading-normal text-[#212121] opacity-75 ml-6 px-0 md:pr-20 font-sans font-medium text-[22px] md:text-[26px] md:text-left">
                  Maximizing ROI
                </p>
              </li>
            </ul>
         
          </div>
        </div>
      </div>

<div className="grid grid-cols-12">
        <div className="xl:col-span-3 mb-12 xl:mb-0 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mr-6">
          {/* <img src={services} className="rounded-[26px]" /> */}

          <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium text-[20px] md:text-[22px] mb-8 text-center">
            boost your online presence and make the most of the digital world!
          </p>
        </div>

        <div className="xl:col-span-9 col-span-12">
          <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      Mobile Application
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      Seamlessly connect with your audience through our
                      cutting-edge mobile app solutions
                    </p>
                  </div>
                </div>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white group-hover:text-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4 ">
                      Website Development
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      The best Website Development solutions for your business
                      to prosper and reach the global market.{" "}
                    </p>
                  </div>
                </div>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      Social Media Marketing
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      Best social media marketing solutions to take your brand
                      to the next level
                    </p>
                  </div>
                </div>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      2D / 3D Animation
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      Bring your imagination to life with our exceptional 2D /
                      3D animation services
                    </p>
                  </div>
                </div>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      Graphics Design
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      We provide custom design solutions that range from Logo
                      Design to Mobile and Web{" "}
                    </p>
                  </div>
                </div>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                <div className="flex">
                  <div className="">
                    <h1 className="text-[#f58020] group-hover:text-white service-card- text-[24px] font-[nexa] mb-4">
                      NFT Design
                    </h1>
                    <p className="text-[#212121] group-hover:text-white font-[Poppins]">
                      We craft unique NFT designs, elevating your project with
                      innovative solutions.{" "}
                    </p>
                  </div>
                </div>
     
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Branding;
