import ServiceImg from "../assets/websites/all-devices-white.png";

import cube3 from "../assets/Untitled-5-03.png"

const OurServices2 = () => {
  return (
    <div className="w-full relative bg-white py-24 px-8 md:px-44 mx-auto">
      <img className=" bg-[#f5802012] absolute top-[-20px] left-[-20px]" src={cube3} />
      {/* <div className="bg-[#f58020] h-[80vh] w-[80%] absolute left-0"></div> */}
      <div className="flex items-center flex-col md:flex-row">
        <div className="xl:basis-2/4">
          <h1 className="services2-heading mix-blend-multiply mb-2 text-3xl tracking-normal md:text-[4rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] md:text-left">
            Partner with us for the{" "}
            <span className=" span-color bg-clip-text text-[#e4563aef]">
              future
            </span>
          </h1>
          <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-thin text-[20px] md:text-[26px] mb-8 md:text-left">
            we pride ourselves on our ability to meet the ever-evolving digital
            demands of a wide range of businesses.
          </p>
        </div>
        <div className="xl:basis-2/4 pl-6">
          <img className=" bg-[#e4563aef] p-6" src={ServiceImg} />
        </div>
      </div>
    </div>
  );
};

export default OurServices2;
