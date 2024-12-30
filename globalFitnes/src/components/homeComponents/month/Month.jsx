import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Month.css';

function Month() {
  const plans = [
    {
      title: 'Básico',
      price: '$25/mes',
      features: ['Acceso al gimnasio', 'Horarios limitados', '1 clase grupal por semana'],
    },
    {
      title: 'Estándar',
      price: '$50/mes',
      features: ['Acceso ilimitado', '3 clases grupales por semana', 'Acceso a zonas de cardio'],
    },
    {
      title: 'Premium',
      price: '$75/mes',
      features: ['Acceso 24/7', 'Clases grupales ilimitadas', 'Acceso a entrenadores y nutrición'],
    },
  ];

  return (
    <div className="month">
      <h2 className="monthTitle">Planes de Mensualidad</h2>
      <div className="plansContainer">
        {plans.map((plan, index) => (
          <div key={index} className="planCard">
            <FontAwesomeIcon icon={faDumbbell} className="planIcon" />
            <h3 className="planTitle">{plan.title}</h3>
            <p className="planPrice">{plan.price}</p>
            <ul className="planFeatures">
              {plan.features.map((feature, i) => (
                <li key={i} className="planFeature">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Month;
