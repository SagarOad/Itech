import React from "react";
import desc1 from "../assets/desktop.PNG";
import desc2 from "../assets/desktop (1).PNG";
import desc3 from "../assets/desktop (2).PNG";
import desc4 from "../assets/desktop (3).PNG";
import desc5 from "../assets/desktop5.PNG";
import desc6 from "../assets/desktop6.PNG";

const SocialMediaGallery = () => {
  return (
    <div className="px-0  mx-auto">
      <section className="portfolio-section pb-8" id="portfolio">
        <div className="container mx-auto">
          <div className="container  mx-auto px-2 md:px-5 py-2 lg:px-6 lg:pt-4">
            <h2 className="main-banner-heading mix-blend-multiply text-3xl tracking-normal md:text-[3.5rem] text-[#f58020] font-[poppins] opacity-95 font-bold leading-[70px] md:text-center">
              Our Work
            </h2>
            <p className="leading-normal mt-3 mb-8 text-[#828282] font-[poppins] text-center font-[300] text-[18px] md:text-[28px]">
              See how our services generated measurable business growth for our
              clients all across the globe.
            </p>
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-full flex-wrap">
                <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://www.instagram.com/truelinkswear/"
                    target="_blank"
                  >
                    <img
                      alt="gallery"
                      className="block w-[450px] rounded-lg object-cover object-center "
                      src={desc1}
                    />
                  </a>
                </div>
                <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://www.facebook.com/touchsupperclub/"
                    target="_blank"
                  >
                    <img
                      alt="gallery"
                      className="block w-[450px] rounded-lg object-cover object-center"
                      src={desc2}
                    />
                  </a>
                </div>
                <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://www.facebook.com/MaisonLaBiche"
                    target="_blank"
                  >
                    <img
                      alt="gallery"
                      className="block w-[450px] rounded-lg object-cover object-center"
                      src={desc3}
                    />
                  </a>
                </div>
                <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://www.instagram.com/hamptonsluxurymarketleader/"
                    target="_blank"
                  >
                    <img
                      alt="gallery"
                      className="block w-[450px] rounded-lg object-cover object-center"
                      src={desc4}
                    />
                  </a>
                </div>
                <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://www.facebook.com/hamptonsluxurymarketleader"
                    target="_blank"
                  >
                    <img
                      alt="gallery"
                      className="block w-[450px] rounded-lg object-cover object-center"
                      src={desc5}
                    />
                  </a>
                </div>
                <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://www.linkedin.com/company/true-linkswear/"
                    target="_blank"
                  >
                    <img
                      alt="gallery"
                      className="block w-[450px] rounded-lg object-cover object-center"
                      src={desc6}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaGallery;
