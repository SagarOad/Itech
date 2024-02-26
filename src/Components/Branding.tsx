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
    </div>
  );
};

export default Branding;
