import React from 'react';
import backgroundImage from '../../../assests/hero4.jpg'; // Importez l'image
import './herocss/hotelHero.scss'; // Importez le fichier SCSS pour le héros

const HotelsHero = () => {
  return (
    <div className="hotel-hero-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        
      </div>
    </div>
  );
};

export default HotelsHero;
