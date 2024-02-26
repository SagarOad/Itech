import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import GetQuote from "../Components/GetQuote";

import web1 from "../assets/vectors/Nftss.png";
import web2 from "../assets/vectors/Nfts.png";
import lineArt from "../assets/vectors/lineArt.jpg";
import Nft from "../Components/NftGallery";
import ContactSection from "../Components/ContactSection";
import { Helmet } from "react-helmet";

const NftDesigning = () => {
  const [openModal, setOpenModal] = useState();


  useEffect(() => {
    // Set meta tags dynamically
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Top NFT development company we specialize in creating and managing non-fungible tokens.Our NFT developemnt service encompass smart contract creation, metadata integration and NFT marketplace startup.';
    document.head.appendChild(metaDescription);

    // Add other meta tags as needed
    const colonicalTag = document.createElement("link")

colonicalTag.rel = "colonical"
colonicalTag.href = "https://fameitech.net/nftdesigning"



document.head.appendChild(colonicalTag)

    // Cleanup function (optional)
    return () => {
      // Remove dynamically added meta tags when the component unmounts
      document.head.removeChild(metaDescription);
      document.head.removeChild(colonicalTag);
      // Remove other dynamically added meta tags
    };
  }, []); 



  return (
    <>
    <Helmet>

<meta property="og:image" content="https://fameitech.net/assets/Nftss-e70630a2.png" />
</Helmet>
  
  
    <div
      id="web-development"
      className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
    >
      <Navbar />
      <div className=" pt-6 pb-32">
        <div className="px-8 md:px-24  flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-[50%] justify-center lg:items-start ">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl md:text-[4rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-44 top-[-33px]">
                {/* <img src={shineSvt} className="w-[80px]" /> */}
              </span>{" "}
              NFTs <br />
              <span
                id="typed"
                className="power-text span-color bg-clip-text text-[#f58020]"
              ></span>
            </h1>

            <p className="leading-normal text-[#212121] opacity-75 pr-20 font-sans font-medium text-base md:text-[18px] mb-8 md:text-left">
            Nft development services can be beneficial for bussinessess of all sizes.Nft development services help bussinesses and inividuals create, launch and manage their own nft projects. we help bussiness to adopt blockchain technology and tokens to create new products and services, improve their existing operations and connect with their customer in new ways. <br />
               {/* We build applications and marketplaces
              that have the capability to market, create, mint, and sell NFTs
              and other digital assets. Marketing nfts is only part of what we
              do. We connect brands and developers with artists and design
              experiences for digital spaces, based on market research. */}
            </p>
          </div>
          <div className="w-full xl:w-[50%] rounded-2xl  overflow-hidden">
            <img src={web1} className="w-[600px] mx-auto" />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="services2-heading text-center mb-6 text-3xl md:text-[3.5rem] text-[#212121] font-[nexa] opacity-95 font-bold leading-[70px]">
          NFT Portfolio
        </h1>

        <div className=" my-6 flex flex-col justify-center p-4 font-bold items-center">
          <h1 className="leading-normal text-[#f58020] font-sans font-medium text-[24px] md:text-[26px] text-center">
            It's not our complete portfolio{" "}
            <span className=" font-extrabold"> Explore further </span>tap the
            button Below for More of Our Work
          </h1>
          <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="leading-normal ml-2 mt-4 text-white bg-[#f58020] rounded-2xl px-4 font-sans font-medium text-[22px] md:text-[26px]">
            Contact Us
          </button>
        </div>
        <Nft />
      </div>

      <div className="bg-[#f69e55] rounded-[50px]">
        <div
          id="services"
          className="w-full  relative py-14 px-8 md:px-24 mx-auto my-16"
        >
          {/* <div className="md:w-[80%] mb-28">
            <h1 className="main-banner-heading relative mt-4 mb-5 text-3xl sm:text-5xl md:text-[5rem] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              <span className="flex justify-center absolute left-56 top-[70px]"></span>
            </h1>
          </div> */}

          <div className="grid grid-cols-12">
            <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mr-6">
              <img src={lineArt} className="rounded-[26px] w-[300px]" />

              <p className="leading-normal mt-3 text-[#212121] opacity-75 font-sans font-medium md:text-[22px] mb-8 text-center">
              Unlock Digital Treasures with NFTs!
              </p>
            </div>

            <div className="xl:col-span-9 col-span-12 flex flex-col justify-center">
              <div className="2xl:mt-7.5 2xl:gap-7.5">
                <h1 className="services2-heading mb-6 text-3xl md:text-[4.5rem] text-[white] font-[nexa] opacity-95 font-bold leading-[70px]">
                  About NFT's
                </h1>
                <p className="leading-normal text-white font-sans font-medium md:text-[22px] mb-8">
                  A non-fungible token (NFT) is a term used to describe a unique
                  digital asset whose ownership is tracked using Blockchain
                  technologies, such as Ethereum. Assets that can be represented
                  as NFTs range from digital goods, such as items that exist
                  within virtual worlds, to even physical goods authenticated on
                  the blockchain. <br />
                  NFT marketing will take your brand beyond influencer
                  marketing, content marketing, media buying, email marketing,
                  video marketing and traditional social media marketing. NFT
                  assets connect the artist, with communities, fans, and brands
                  with ownable digital content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid bg-white py-8 grid-cols-12 px-8 md:px-24">
        <div className="col-span-12 lg:col-span-4 flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How do you measure success for a website?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-0 xl:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              An exceptional NFT is born from a unique concept brought to life
              with masterful artistry. Its rarity and utility create allure,
              while its creator's story adds depth. Blockchain ensures
              authenticity, community engagement fosters connection, and
              innovative presentation captivates. A great NFT is timeless,
              leaving an enduring impact on collectors and the digital
              landscape.
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-center items-start p-6">
          <div>
            <img src={web2} className="w-[600px] mx-auto" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-center items-start p-6">
          <div>
            <h1 className="main-banner-heading relative mt-4 mb-6 md:text-[24px] text-[#212121] font-[nexa] font-bold leading-tight  md:text-left">
              How long can it be to develop website?
            </h1>
            <p className="leading-normal text-[#212121] opacity-75 pr-0 xl:pr-20 font-sans font-medium text-base md:text-[18px] mb-8 text-justify">
              The timeframe for web development depends on the website's
              complexity, design, functionalities, and the development team's
              expertise. A basic informational website may be completed in 1 to
              2 months. More complex websites, such as e-commerce platforms or
              custom solutions, may take 2 to 6 months to develop. Large-scale
              projects or highly customized platforms may require 6 months to a
              year or more. The development team's efficiency and collaboration
              with clients play a vital role in meeting project timelines. By
              discussing your specific needs with a web development agency, you
              can receive a more accurate estimate for your project's
              completion.
            </p>
          </div>
        </div>
      </div>

      <div>
        <ContactSection />
        <Footer />
      </div>
      {openModal && (
        <GetQuote closeModal={setOpenModal} Title="Request a Quote" />
      )}
    </div>
  </>

  );
};

export default NftDesigning;
