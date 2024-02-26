import "./App.css";
import Home from "./pages/home";
import MobileApp from "./pages/MobileApp";
import Ecommerce from "./pages/Ecommerce";
import DigitalMarketing from "../src/pages/DigitalMarketing"
import GraphicsDesign from "../src/pages/GraphicsDesign"
import Animation from "../src/pages/Animation"
import SoftwareDevelopment from "../src/pages/SoftwareDevelopment"
import { Route, Routes, useRoutes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NftDesigning from "./pages/NftDesigning";
import ScrollToTop from "./ScrollToTop";
import About from "./pages/About";
import { Helmet } from 'react-helmet';


const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/servicepage', element: <MobileApp /> },
    { path: '/ecommerce', element: <Ecommerce /> },
    { path: '/digitalmarketing', element: <DigitalMarketing /> },
    { path: '/animation', element: <Animation /> },
    { path: '/graphicsdesign', element: <GraphicsDesign /> },
    { path: '/softwaredevelopment', element: <SoftwareDevelopment /> },
    { path: '/nftdesigning', element: <NftDesigning /> },
  ]);

  return (
    <>
<Helmet>
    <script>
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID'); // Replace 'YOUR_PIXEL_ID' with your Facebook Pixel ID
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            />
          `}
        </noscript>
        
      </Helmet>
      <ScrollToTop />
      {routes}
    </>
  )
};

export default App;
