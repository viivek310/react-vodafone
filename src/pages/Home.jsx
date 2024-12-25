import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../sections/HeroSection'
import Business from '../sections/Business'
import Tools from '../sections/Tools'
import HomeServices from '../sections/HomeServices'
import Download from '../sections/Download'
import Pricing from '../sections/Pricing'
import Support from '../sections/Support'
import Trial from '../sections/Trial'
import Footer from '../sections/Footer'

function Home() {
  return (
    <>
        <Navbar />  

        <HeroSection />

        <Business />

        <Tools />

        <HomeServices />

        <Download />

        <Pricing />

        <Support />

        <Trial />

        <Footer />
    </>
  )
}

export default Home
