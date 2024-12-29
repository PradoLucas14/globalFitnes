import React from 'react'
import Hero from "../../components/homeComponents/hero/Hero"
import About from '../../components/homeComponents/about/About'
import Services from '../../components/homeComponents/services/Services'
import "./Home.css"

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default Home
