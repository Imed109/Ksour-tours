import React from 'react';
import backgroundImage from '../../../assests/omraHero.jpg'; // Importez l'image
import './herocss/omraHero.scss'; // Importez le fichier SCSS pour le héros

const OmraHero = () => {
  return (
    <div className="omra-hero-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        
      </div>
    </div>
  );
};

export default OmraHero;
