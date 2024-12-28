import React from 'react';
import HeroImage from '../../../assets/images/img1about.jpg';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <img src={HeroImage} alt="Imagen sobre el gimnasio" className="about-image" />
        <div className="about-text">
          <h2>Conoce más sobre nosotros</h2>
          <p>En nuestro gimnasio, cada miembro es parte de nuestra familia. Trabajamos juntos para lograr tus objetivos de fitness.</p>
        </div>
      </div>
    </div>
  );
}

export default About;

