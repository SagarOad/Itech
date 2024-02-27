import shineSvt from "../assets/header-illustration.svg";
import wave from "../assets/vectors/wave.png";

const OurServices = () => {
  return (
    <div
      id="services"
      className="w-full pt-16 relative px-8 md:px-24 mx-auto my-8"
    >
      <img src={wave} className="absolute bottom-[250px] opacity-[6%] z-[0]" />
      <div className="mb-16">
        <h1 className="main-banner-heading relative mt-4 mb-5 md:text-[2.5rem] text-[#f58020] font-[poppins] font-medium leading-tight md:text-center">
          <span className="flex justify-center absolute left-56 top-[70px]">
            <img src={shineSvt} className="w-[50px] hidden md:visible" />
          </span>
          Here’s what we do
        </h1>
        <div className=" md:w-[50%] mx-auto">
          <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium text-[18px] md:text-[18px] mb-8 md:text-center">
            Need recognition? We have been providing a wide range of business
            logo design, branding, development and digital marketing services to
            our customers worldwide. Rest assured, our comprehensive service
            platter will satisfy all your cravings to thrive.
          </p>
        </div>
      </div>
      {/* <div className="grid grid-cols-12">
        <div className="xl:col-span-3 mb-12 xl:mb-0 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mr-6">
          <img src={services} className="rounded-[26px]" />

          <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium text-[20px] md:text-[22px] mb-8 text-center">
            boost your online presence and make the most of the digital world!
          </p>
        </div>

        <div className="xl:col-span-9 col-span-12">
          <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="/servicepage">
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
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white group-hover:text-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="/ecommerce">
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
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
              <NavLink to="/digitalmarketing">
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
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="animation">
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
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="/graphicsdesign">
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
              </NavLink>
            </div>

            <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all hover:bg-[#f58020]  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
              <NavLink to="/nftdesigning">
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
              </NavLink>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OurServices;
