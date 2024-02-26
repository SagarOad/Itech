import img1 from "../assets/ecommerce/laptop.png"
import img2 from "../assets/ecommerce/laptop.png"
import img3 from "../assets/ecommerce/laptop.png"

const Ecommerce = () => {
  return (
    <div className="px-0 md:px-6 mb-20 mx-auto">
      <section className="portfolio-section" id="portfolio">
        <div className="container-fluid">
          <div className="container h-[400px] md:h-[690px] overflow-scroll mx-auto px-2 md:px-5 py-2 lg:px-6 lg:pt-4">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-full flex-wrap">
                <div className=" hover:-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                  <a href="https://www.xplorecreations.com/" target="_target">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center "
                    src={img1}
                  />
                  </a>
                </div>
                <div className=" hover:-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                  <a href="https://www.day2daywholesale.com/" target="_blank">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img2}
                  />
                  </a>
                </div>
                <div className=" hover:-0 ease-in duration-300 w-1/3 p-1 md:p-2">
                  <a href="https://morecouponcode.com/" target="_target">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img3}
                  />
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Ecommerce