// Hero.js

import React from 'react';
import backgroundImage from '../assests/hero1.jpg'; // Importez l'image
import './css/hero.scss'; // Importez le fichier SCSS pour le héros

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>Bienvenue chez Ksour Tour</h1>
        <p>Votre destination de voyage ultime</p>
        <a href="#!" className="btn btn-primary">Explorer</a>
      </div>
    </div>
  );
};

export default Hero;
