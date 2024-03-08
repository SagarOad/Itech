import ServiceImg from "../assets/zach.png";

const OurServices2 = () => {
  return (
    <div className="w-full relative branding-banner py-8 px-8 md:px-44 mx-auto">
      {/* <img
        className=" bg-[#f5802012] absolute top-[-20px] left-[-20px]"
        src={cube3}
      /> */}
      {/* <div className="bg-[#f58020] h-[80vh] w-[80%] absolute left-0"></div> */}
      <div className="flex  items-center flex-col md:flex-row">
        <div className="xl:basis-7/12">
          <h1 className="services2-heading mb-2 text-3xl tracking-normal md:text-[3.1rem] text-white font-[poppins] opacity-95 font-bold leading-[70px] md:text-left">
            Collaborating with Zach King to bring magic to{" "}
            <span className=" bg-white text-[3.5rem] font-[nexa] p-1 text-[#f58020]">
              Life
            </span>
          </h1>
          {/* <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-thin text-[20px] md:text-[26px] mb-8 md:text-left">
            we pride ourselves on our ability to meet the ever-evolving digital
            demands of a wide range of businesses.
          </p> */}
        </div>
        <div className="xl:basis-5/12 zach-banner pl-6">
          <img
            src={ServiceImg}
            className="w-[550px] rounded-full absolute bottom-0  mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices2;
