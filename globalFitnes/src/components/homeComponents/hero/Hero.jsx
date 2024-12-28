import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='Hero'>
      <div className='HeroOverlay'>
        <div className='HeroText'>
            <h1>GLOBAL <span>FITNESS</span></h1>
            <p>Empieza hoy, porque cada entrenamiento es un paso hacia la mejor versión de ti mismo.</p>
        </div>
        <div className='btnHeroContainer'>
            <button className='btnHero'>
                <span>registrate</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
