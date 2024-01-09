// Airlines.js

import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirlines } from "../../JS/airlinesSlice";
import UserLayout from "./useLayout/userlayout";
import "./css/airlines.scss";
import AirlinesHero from "./heros/AirlinesHero";

const CustomCard = ({ company }) => {
  return (
    <div className="airline-card">
      <img src={company.image} alt={company.name} className="airline-image" />
      <div className="airline-info">
        <h3>{company.name}</h3>
      </div>
    </div>
  );
};

const Airlines = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.airlines.list);

  useEffect(() => {
    dispatch(fetchAirlines());
  }, [dispatch]);

  return (
    <UserLayout>
      <AirlinesHero/>
      <div className="airlines-container">
        <h1>Compagnies aériennes</h1>
        <h4>Réserver un vol pas cher avec la compagnie de votre choix</h4>

        <div className="airlines-list">
          {companies.map((company, index) => (
            <CustomCard key={index} company={company} />
          ))}
        </div>

        <div className="airlines-about">
          <h2>
            Réservez votre Vol & achetez vos billets d’avion aux meilleurs
            tarifs
          </h2>
          <p>
            Vous êtes en train de planifier votre prochain voyage, pour
            découvrir une nouvelle destination, pour un voyage en famille, pour
            une virée entre amis ou pour un voyage d'affaires ? Vous souhaitez
            dénicher les billets d’avion qui respectent votre budget et qui vous
            permettent de profiter de votre voyage ? Ksour Tour vous propose les
            meilleures offres et vous facilite la réservation de vos billets
            d’avion à prix imbattables selon votre plan de voyage et surtout
            selon votre budget !
          </p>
          <h2>Trouvez votre Vol & comparez les meilleures offres</h2>
          <p>
            Au départ des aéroports de la Tunisie et de partout dans le monde,
            nous vous proposons les meilleures offres des compagnies aériennes
            nationales et internationales : Tunisair, Nouvelair, Air France,
            Lufthansa, Qatar Airways Turkish Airlines,… Recherchez vos billets
            d’avion selon vos critères et vos besoins. Comparez puis
            selectionnez le vol qui respecte vos dates, vos horaires de départs
            et d’arrivée et surtout votre budget.
          </p>
          {/* The provided French text goes here */}
        </div>

        <div className="reservation-button">
          <Button as={Link} to="/formulaire" variant="primary">
            Réservation
          </Button>
        </div>
      </div>
    </UserLayout>
  );
};

export default Airlines;
