import React, { useEffect } from 'react'
import "../App.css";
import MainBanner from '../Components/MainBanner';
import Anime from "../Components/Anime";
import ContactSection from "../Components/ContactSection";
import Features from "../Components/Features";
import OurServices from "../Components/OurServices";
import OurServices2 from "../Components/OurServices2";
import Pricing from "../Components/Pricing";
import Branding from "../Components/Branding";
import Footer from "../Components/Footer";
import ProjectTabs from "../Components/ProjectTabs";
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';
import SkillTabs from '../Components/SkillTabs';
import Process from '../Components/Process';
import LineBanner from '../Components/LineBanner';
import PriceTabs from '../Components/PriceTabs';
import ContactPage from './ContactPage';
import Testimonials from '../Components/Testimonials';
const Home = () => {
  useEffect(() => {
    // Set meta tags dynamically
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'A leading software company in the United States that provides effective solutions for their business growth. We provide high-quality IT services which are web development services, mobile application development, social media marketing, graphic design services and digital marketing services.';
    document.head.appendChild(metaDescription);

const colonicalTag = document.createElement("link")

colonicalTag.rel = "colonical"
colonicalTag.href = "https://fameitech.net/"

document.head.appendChild(colonicalTag)


    // Add other meta tags as needed

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
  <meta property="og:image" content="https://blog.fameitech.com/wp-content/uploads/2023/11/fame-itech-png-77506687-1-2048x681.png" />
</Helmet>

    <div className="bg-[#F8F6F2] leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed">
      <Navbar />
      <MainBanner />
      <OurServices />
      <SkillTabs />
      <OurServices2 />
      {/* <Features /> */}
      <LineBanner />
      <ProjectTabs />
      <Branding />
      <Process />
      {/* <Anime /> */}
      <ContactSection />
      <Testimonials />
      <PriceTabs />
      {/* <Map /> */}
      {/* <TeamSlider /> */}
      {/* <ContactPage /> */}
      <Footer />
    </div>
</>

  )
}

export default Home