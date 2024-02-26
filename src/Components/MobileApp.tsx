import img1 from "../assets/mobileapps/1 (4).png"
import img2 from "../assets/mobileapps/2 (5).png"
import img3 from "../assets/mobileapps/3 (3).png"
import img4 from "../assets/mobileapps/4 (3).png"
import img5 from "../assets/mobileapps/5 (3).png"

import img6 from "../assets/mobApp/ip1.png"
import img7 from "../assets/mobApp/ip2.png"
import img8 from "../assets/mobApp/ip3.png"
import img9 from "../assets/mobApp/ip4.png"
// import img10 from "../assets/mobApp/ip5.png"

const MobileApp = () => {
  return (
    <div className="px-0 md:px-6  mx-auto">
    <section className="portfolio-section" id="portfolio">
      <div className="container-fluid">
        <div className="container  mx-auto px-2 md:px-5 py-2 lg:px-6 lg:pt-4">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-full flex-wrap">
              <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <a href="https://apps.apple.com/us/app/the-market-rewards/id1492943567" target="_blank">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center "
                  src={img1}
                />
                </a>
              </div>
              <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
              <a href="https://apps.apple.com/us/app/saferkid-protect-children/id1143802529?ls=1" target="_blank">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center"
                  src={img2}
                />
                </a>
              </div>
              <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <a href="https://play.google.com/store/apps/details?id=com.mayoclinic.patient&hl=en%27" target="_blank">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center"
                  src={img3}
                />
                </a>
              </div>
              <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <a href="https://apps.apple.com/us/app/crossfit-games/id825019869" target="_blank">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center"
                  src={img4}
                />
                </a>
              </div>
              <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center"
                  src={img5}
                />
              </div>

              <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[350px] rounded-lg object-cover object-center"
                  src={img6}
                />
              </div>

              <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[350px] rounded-lg object-cover object-center"
                  src={img7}
                />
              </div>

              <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[350px] rounded-lg object-cover object-center"
                  src={img8}
                />
              </div>

              <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[350px] rounded-lg object-cover object-center"
                  src={img9}
                />
              </div>

              {/* <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                <img
                  alt="gallery"
                  className="block w-[250px] rounded-lg object-cover object-center"
                  src={img10}
                />
              </div> */}
            </div>
            </div>
          </div>
        </div>
    </section>
  </div>
  )
}

export default MobileApp