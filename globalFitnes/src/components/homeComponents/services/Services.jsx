import React from 'react';
import './Services.css';

function Services() {
  const servicesData = [
    {
      imgSrc: 'path_to_image1.jpg',
      title: 'Entrenamiento Personalizado',
      description: 'Recibe un plan de entrenamiento adaptado a tus necesidades específicas. Nuestros entrenadores personales evaluarán tus objetivos y condiciones físicas para diseñar sesiones personalizadas que te ayuden a alcanzar tus metas más rápidamente.',
    },
    {
      imgSrc: 'path_to_image2.jpg',
      title: 'Clases Grupales',
      description: 'Únete a nuestras dinámicas clases grupales donde la motivación y la diversión están aseguradas. Desde yoga, pilates, hasta entrenamientos HIIT, nuestras clases grupales están diseñadas para mejorar tu condición física y mantenerte motivado.',
    },
    {
      imgSrc: 'path_to_image3.jpg',
      title: 'Cardio y Pesas',
      description: 'Accede a nuestras modernas instalaciones con equipos de última generación para realizar entrenamientos de cardio y pesas. Ya sea que busques perder peso, tonificar tu cuerpo o aumentar tu fuerza, tenemos todo lo que necesitas.',
    },
    {
      imgSrc: 'path_to_image4.jpg',
      title: 'Nutrición y Asesoría',
      description: 'La nutrición es clave para alcanzar tus objetivos de fitness. Nuestros expertos en nutrición te brindarán asesoría personalizada para ayudarte a llevar una dieta equilibrada que potencie tus entrenamientos y acelere tus resultados.',
    }
  ];

  return (
    <div className="services">
      <div className="servicesOverlay">
        <h2 className="servicesTitle">Nuestros Servicios</h2>
        <div className="servicesCards">
          {servicesData.map((service, index) => (
            <div key={index} className="serviceCard">
              <img src={service.imgSrc} alt={service.title} className="serviceImage" />
              <div className="serviceInfo">
                <h3 className="serviceTitle">{service.title}</h3>
                <p className="serviceDescription">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

