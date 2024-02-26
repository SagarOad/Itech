import React from 'react'
import AboutUs from './AboutUs'
import { Helmet } from 'react-helmet'

const About = () => {
    
    return (

<>
<Helmet>

<meta property="og:image" content="https://fameitech.net/assets/mobileDev-a79a6780.png" />
<meta name="title" content="About Fame Itech" />
      </Helmet>


      <AboutUs />
</>
        
        )
}

export default About