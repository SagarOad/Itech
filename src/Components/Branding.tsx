const Branding = () => {
  return (
    <div className="branding-banner py-6 my-24">
      <div className=" container mx-auto">
        <div className="grid py-2 grid-cols-12">
          <div className="xl:col-span-4 mb-12 xl:mb-0 flex flex-col justify-center items-center col-span-12 p-4">
            <h2 className="relative mt-4 mb-5 text-[3rem] md:text-[4rem] text-white font-[poppins] font-bold leading-tight">
              Introduce Your Brand To Digital
              <span className=" bg-white text-[#e4563aef] ml-4">Media!</span>
            </h2>
            {/* <p className="font-[poppins] text-white text-[26px] leading-9">
              Your brand will steal the limelight from top tier names in the
              marketspace with our creative digital services.
            </p> */}
          </div>
          <div className="xl:col-span-8 lg:ml-12 py-14 col-span-12">
            <div className="">
              <div className="grid grid-cols-12 mb-8 gap-4 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className=" xl:col-span-2 col-span-12 "></div>
                <div className="opacity-100 p-12 flex justify-center items-center group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 ">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020] text-center service-card- text-[20px] font-[nexa] mb-4">
                        Web Design & Development
                      </h1>
                      <p className="text-[#212121] text-[14px] font-[Poppins]">
                        Crafting stunning websites that captivate and engage
                        your audience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group justify-center items-center px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 ">
                  <div className="flex justify-center items-center">
                    <div className="">
                      <h1 className="text-[#f58020] text-center service-card- text-[20px] font-[nexa] mb-4">
                        Digital Marketing Solutions
                      </h1>
                      <p className="text-[#212121] text-[14px] font-[Poppins]">
                        Drive growth and reach your target market with our
                        strategic digital marketing services.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" xl:col-span-2 col-span-12 "></div>
              </div>

              <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 p-12 group justify-center items-center px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all   hover: sm:px-7.5 xl:col-span-4 col-span-12 ">
                  <div className="flex justify-center items-center">
                    <div className="">
                      <h1 className="text-[#f58020] text-center service-card- text-[20px] font-[nexa] mb-4">
                        Brand Identity & Logo Design
                      </h1>
                      <p className="text-[#212121] text-[14px] font-[Poppins]">
                        Elevate your brand with a unique identity and logo that
                        resonates with your audience.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="opacity-100 p-12 group justify-center items-center px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all   hover: sm:px-7.5 xl:col-span-4 col-span-12 ">
                  <div className="flex justify-center items-center">
                    <div className="">
                      <h1 className="text-[#f58020] text-center service-card- text-[20px] font-[nexa] mb-4">
                        SEO & Content Strategy
                      </h1>
                      <p className="text-[#212121] text-[14px] font-[Poppins]">
                        Optimize your online presence and rank higher on search
                        engines with our tailored SEO and content strategies.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="opacity-100 p-12 group justify-center items-center px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all   hover: sm:px-7.5 xl:col-span-4 col-span-12 ">
                  <div className="flex justify-center items-center">
                    <div className="">
                      <h1 className="text-[#f58020] text-center service-card- text-[20px] font-[nexa] mb-4">
                        Social Media Management
                      </h1>
                      <p className="text-[#212121] text-[14px] font-[Poppins]">
                        Build meaningful connections and enhance brand
                        visibility through expert social media management.{" "}
                      </p>
                    </div>
                  </div>
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
