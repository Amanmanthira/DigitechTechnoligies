import React from 'react'
import NavBar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Gallery from './Gallery/Gallery'
import OwnersSec from './OwnerSec/OwnerSec'
import WhyChoose from './WhyChoose/WhyChoose'
import Footer from './Footer/Footer'

const MainPage = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Services/>
      <Gallery/>
      <OwnersSec/>
      <WhyChoose/>
      <Footer/>
    </div>
  )
}

export default MainPage