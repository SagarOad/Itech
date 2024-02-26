
interface Props {
  designation: string;
  name: string;
  description: string;
  img: string;
}



const TeamCarousal = ({ designation, name, description, img }: Props) => {
  return (
    <div className="anime-banner backdrop-blur-xl bg-white/30 h-auto md:h-[400px] pb-6 pt-6 md:pb-0 px-16 px-6 md:px-24 mx-auto">
      <div className="flex flex-col sm:flex-row anime-bg relative justify-between items-center">
        <div className="w-full md:w-[50%]">
            <h2 className="text-[26px] text-[nexa] text-white">{designation}</h2>
          <h1 className="text-3xl md:text-[3rem] text-[#f58020] font-[nexa] opacity-100 my-2 font-bold leading-tight md:text-left">
            {name}
          </h1>
          <p className="text-[poppins] leading-tight text-left text-[20px] text-white">
           {description}
          </p>
        </div>
        <div className="w-full md:w-[50%] pt-5 md:pt-0 mob-svg-container ease-in duration-300">
          <img className="team-img border-2 mx-auto md:mx-1 border-[#f58020] rounded-full w-[359px] md:ml-auto" src={`${img}`} />
        </div>
      </div>
    </div>
  );
};

export default TeamCarousal;
