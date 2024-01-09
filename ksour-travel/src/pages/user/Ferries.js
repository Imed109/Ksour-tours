import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchShips } from "../../JS/ferriesSlice"; // Replace with the correct path to ferriesSlice
import UserLayout from "./useLayout/userlayout";
import "./css/ferries.scss"; // Import your SCSS file
import FerriesHero from "./heros/FerriesHero";

// Ship card component
const CustomShipCard = ({ ship }) => {
  return (
    <div className="custom-ship-card">
      <img src={ship.image} alt={ship.name} />
      <div>
        <h3>{ship.name}</h3>
        <p>{ship.description}</p>
      </div>
    </div>
  );
};

// Ferries component
const Ferries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShips());
  }, [dispatch]);

  const ships = useSelector((state) => state.ferries.ships);

  return (
    <UserLayout>
      <FerriesHero/>
      <div className="ferries-component">
        <div className="ships-list">
          {ships.map((ship, index) => (
            <CustomShipCard key={index} ship={ship} />
          ))}
        </div>
        <div className="reservation-button">
          <Button as={Link} to="/formulaire" variant="primary">
            Reservation
          </Button>
        </div>
      </div>
    </UserLayout>
  );
};

export default Ferries;
