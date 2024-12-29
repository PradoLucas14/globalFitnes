import React from 'react'
import Hero from "../../components/homeComponents/hero/Hero"
import About from '../../components/homeComponents/about/About'
import Services from '../../components/homeComponents/services/Services'
import Month from '../../components/homeComponents/month/Month'
import "./Home.css"

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Month/>
    </div>
  )
}

export default Home
