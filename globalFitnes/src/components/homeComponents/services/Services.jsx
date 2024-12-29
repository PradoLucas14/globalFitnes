import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Services.css';

function Services() {
  // Datos de los servicios que ofrece el gimnasio
  const servicesData = [
    {
      imgSrc: 'https://media.istockphoto.com/id/529255833/es/foto/grupo-de-hombres-con-pesas-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=BTwtnNV6uDvPthQYXUyU2jhKqPnXDYRJSA0aNv6SGmc=',
      title: 'Entrenamiento Personalizado',
      description: 'Recibe un plan de entrenamiento adaptado a tus necesidades específicas...',
    },
    {
      imgSrc: 'https://mercadofitness.com/wp-content/uploads/2019/11/Bio-Ritmo-abrio-Tonus-Gym-su-cuarto-micro-gimnasio.jpg',
      title: 'Clases Grupales',
      description: 'Únete a nuestras dinámicas clases grupales donde la motivación y la diversión están aseguradas...',
    },
    {
      imgSrc: 'https://i.blogs.es/b3dfe7/photo-1549060279-7e168fcee0c2-1-/1366_2000.jpg',
      title: 'Cardio y Pesas',
      description: 'Accede a nuestras modernas instalaciones con equipos de última generación...',
    },
    {
      imgSrc: 'https://metanutritiva.com/wp-content/uploads/2022/10/healthy-menu-recipe-food-diet-1-1024x683.jpg',
      title: 'Nutrición y Asesoría',
      description: 'La nutrición es clave para alcanzar tus objetivos de fitness...',
    }
  ];

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1, // Muestra una tarjeta por vez
    slidesToScroll: 1, // Desplaza una tarjeta por vez
    vertical: false, // Carrusel en formato horizontal
    responsive: [
      {
        breakpoint: 768, // Para pantallas móviles, habilitar carrusel
        settings: {
          slidesToShow: 1, // Muestra una tarjeta por vez
          slidesToScroll: 1, // Desplaza una tarjeta por vez
          vertical: false, // Mantener el carrusel horizontal
        }
      }
    ]
  };  

  return (
    <div className="services">
      <div className="servicesOverlay">
        <h2 className="servicesTitle">Nuestros Servicios</h2>
        {/* Carrusel para pantallas móviles */}
        <div className="mobileServices">
          <Slider {...settings}>
            {servicesData.map((service, index) => (
              <div key={index} className="serviceCard">
                <img src={service.imgSrc} alt={service.title} className="serviceImage" />
                <div className="serviceInfo">
                  <h3 className="serviceTitle">{service.title}</h3>
                  <p className="serviceDescription">{service.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Vista normal para pantallas grandes */}
        <div className="desktopServices">
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
