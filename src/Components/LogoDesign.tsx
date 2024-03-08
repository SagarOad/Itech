import img1 from "../assets/logodesign/logos/ezgif.com-webp-to-png (1).png"
import img2 from "../assets/logodesign/logos/ezgif.com-webp-to-png (2).png"
import img3 from "../assets/logodesign/logos/ezgif.com-webp-to-png (3).png"
import img4 from "../assets/logodesign/logos/ezgif.com-webp-to-png (4).png"
import img5 from "../assets/logodesign/logos/ezgif.com-webp-to-png.png"
import img6 from "../assets/logodesign/logos/CIRCLE-OF-LIFE-THERAPY-LOGO.png"
import img7 from "../assets/logodesign/logos/IOTA-OMICRON-LOGO-2.jpg"
import img8 from "../assets/logodesign/logos/TRUE-NARRATIVE-LOGO-4.png"

const WebDesign = () => {
  return (
    <div className="px-0 md:px-6  mx-auto">
      <section className="portfolio-section" id="portfolio">
        <div className="container-fluid">
          <div className=" mx-auto px-2 md:px-5 py-2 lg:px-6 lg:pt-4">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-full flex-wrap">
                <div className=" flex justify-center bg-white items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
                  <img
                    alt="gallery"
                    className="block w-[400px] rounded-lg object-cover object-center "
                    src={img1}
                  />
                </div>
                <div className=" flex justify-center bg-white items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
                  <img
                    alt="gallery"
                    className="block w-[400px] rounded-lg object-cover object-center"
                    src={img2}
                  />
                </div>
                <div className=" flex justify-center bg-white items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
                  <img
                    alt="gallery"
                    className="block w-[400px] rounded-lg object-cover object-center"
                    src={img3}
                  />
                </div>
                <div className=" flex justify-center bg-white items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
                  <img
                    alt="gallery"
                    className="block w-[400px] rounded-lg object-cover object-center"
                    src={img4}
                  />
                </div>
                <div className=" flex justify-center bg-white items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
                  <img
                    alt="gallery"
                    className="block w-[400px] rounded-lg object-cover object-center"
                    src={img5}
                  />
                </div>
                <div className=" flex justify-center bg-white items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
                  <img
                    alt="gallery"
                    className="block w-[400px] rounded-lg object-cover object-center"
                    src={img6}
                  />
                </div>
                <div className=" flex justify-center bg-white items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
                  <img
                    alt="gallery"
                    className="block w-[400px] rounded-lg object-cover object-center"
                    src={img7}
                  />
                </div>
                <div className=" flex justify-center bg-white items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
                  <img
                    alt="gallery"
                    className="block w-[400px] rounded-lg object-cover object-center"
                    src={img8}
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default WebDesign;
