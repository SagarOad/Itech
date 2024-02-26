import ServiceImg from "../assets/websites/all-devices-white.png";

const OurServices2 = () => {
  return (
    <div className="w-full bg-white py-16 px-8 md:px-44 mx-auto">
      {/* <div className="bg-[#f58020] h-[80vh] w-[80%] absolute left-0"></div> */}
      <div className="flex items-center flex-col md:flex-row">
        <div className="xl:basis-2/4">
          <h1 className="services2-heading mb-6 text-3xl md:text-[2.5rem] text-[#f58020] font-[poppins] opacity-95 font-medium leading-[70px]  md:text-left">
            Partner with us for the{" "}
            <span className=" span-color bg-clip-text text-[#f58020]">
              future
            </span>
          </h1>
          <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-[20px] md:text-[20px] mb-8 md:text-left">
            we pride ourselves on our ability to meet the ever-evolving digital
            demands of a wide range of businesses.
          </p>
        </div>
        <div className="xl:basis-2/4 pl-6">
          <img src={ServiceImg} />
        </div>
      </div>
    </div>
  );
};

export default OurServices2;
