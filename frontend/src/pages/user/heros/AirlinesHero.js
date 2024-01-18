import React from 'react';
import backgroundImage from '../../../assests/hero9.jpg'; // Importez l'image
import './herocss/airlinesHero.scss'; // Importez le fichier SCSS pour le héros

const AirlinesHero = () => {
  return (
    <div className="airlines-hero-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        
      </div>
    </div>
  );
};

export default AirlinesHero;
