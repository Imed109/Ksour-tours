import React from "react";
import "./css/home.css"; // Import your CSS file for styling
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import VoyagesOrganise from "../../components/VoyagesOrganise";
const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Hero />
     
      <Services />
      <VoyagesOrganise />
      <Footer />
    </div>
  );
};

export default Home;
