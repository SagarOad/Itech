import arrow from "../assets/vectors/arrows_0059.png";

const Anime = () => {
  return (
    <div className="anime-banner relative py-20 md:py-28 mt-20 md:mt-10 mb-20 h-auto mx-auto">
      {/* <div className="bg-[#f58020] absolute right-0 h-[600px] w-[50%]"></div> */}
      <div className="block md:flex justify-between anime-bg relative">
        <div className="px-6 md:px-24 md:w-[50%]">
          <h1 className="text-[48px] text-center  md:text-[4rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-tight md:text-left">
            Transforming Visions <br />
            Into{" "}
            <span className="mx-4 span-color bg-clip-text text-[#f58020]">
              Reality
            </span>
          </h1>

          <p className="leading-normal text-[#212121] text-center mt-4 opacity-75 md:pr-20 font-sans font-medium text-[20px] md:text-[22px] mb-8 md:text-left">
            Your ideas brought to life with creativity and expertise
          </p>

          <img src={arrow} className="absolute left-[0px] lg:left-[-54px] rotate-[151deg] scale-x-[-1] top-[330px] lg:top-8 w-[300px] lg:w-[700px]" />
        </div>
        <div className="mob-svg-container relative md:w-[40%] h-[430px] bg-[#f58020] flex justify-center">
          <video
            className="w-[700px] left-0 lg:left-[-100px] lg:top-[-40px] shadow-lg relative md:absolute"
            loop
            autoPlay
            muted
            
            src="https://video-previews.elements.envatousercontent.com/h264-video-previews/57d9d4bf-b06c-4030-a1c6-785bec07df66/46121601.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Anime;
