const Branding = () => {
  return (
    <div className="branding-banner my-24">
      <div className=" container mx-auto">
        <div className="grid py-12 grid-cols-12">
          <div className="xl:col-span-4 mb-12 xl:mb-0 flex flex-col justify-center items-center col-span-12 p-4 mr-6">
            <h2 className="relative mt-4 mb-5 md:text-[2.5rem] text-white font-[poppins] font-bold leading-tight">
              Introduce Your Brand To Digital Media!
            </h2>
            <p className=" font-[poppins] text-white text-[26px] leading-9">
              Your brand will steal the limelight from top tier names in the
              marketspace with our creative digital services.
            </p>
          </div>

          <div className="xl:col-span-8 py-24 col-span-12">
            <div className="">
              <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 p-12 flex justify-center items-center group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all  hover: sm:px-7.5 xl:col-span-3 col-span-12 ">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-[#f58020] text-center service-card- text-[30px] font-[nexa] mb-4">
                        90%
                      </h1>
                      <p className="text-[#212121] font-[Poppins]">
                        Increase in ROI
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group justify-center items-center px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all  hover: sm:px-7.5 xl:col-span-3 col-span-12 ">
                  <div className="flex justify-center items-center">
                    <div className="">
                      <h1 className="text-[#f58020] text-center service-card- text-[30px] font-[nexa] mb-4">
                        1570+
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Project Done{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group justify-center items-center px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all   hover: sm:px-7.5 xl:col-span-3 col-span-12 ">
                  <div className="flex justify-center items-center">
                    <div className="">
                      <h1 className="text-[#f58020] text-center service-card- text-[30px] font-[nexa] mb-4">
                        NFT Design
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Daily Website Vists{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group justify-center items-center px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg hover:mt-[-12px] transition-all   hover: sm:px-7.5 xl:col-span-3 col-span-12 ">
                  <div className="flex justify-center items-center">
                    <div className="">
                      <h1 className="text-[#f58020] text-center service-card- text-[30px] font-[nexa] mb-4">
                        NFT Design
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Satisfied Customers{" "}
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
