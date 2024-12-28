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
            <p>En nuestro gimnasio, cada miembro es parte de nuestra familia. Nos dedicamos a crear un ambiente inclusivo y motivador donde todos, 
            sin importar su nivel de experiencia, puedan alcanzar sus metas de salud y bienestar. Nuestro equipo de entrenadores 
            altamente calificados está aquí para apoyarte en cada paso de tu viaje fitness, proporcionándote entrenamientos personalizados y consejos prácticos. 
            Ya sea que busques mejorar tu fuerza, resistencia, flexibilidad o simplemente mantenerte activo, trabajamos juntos para lograr tus objetivos. 
            Nos enfocamos en ofrecer un espacio donde el esfuerzo y la disciplina se convierten en una experiencia gratificante, ¡y donde cada pequeño logro cuenta! 
            Únete a nosotros y sé parte de un equipo que no solo se preocupa por tu rendimiento, sino también por tu bienestar integral.</p>
            <h3>Horario de atención: Lunes a Sabado de 7:00 hrs a 21:00 hrs</h3>
            <h3>Ubicacion: Balcarce n°1050 - Alderetes</h3>
            <div className='btnAboutContainer'>
            <button className='btnAbout'>
                <span>ver más</span>
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default About;

