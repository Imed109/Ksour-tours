import React from 'react';
import backgroundImage from '../../../assests/hero9.jpg'; // Importez l'image
import './herocss/ferriesHero.scss'; // Importez le fichier SCSS pour le héros

const FerriesHero = () => {
  return (
    <div className="ferries-hero-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        
      </div>
    </div>
  );
};

export default FerriesHero;
