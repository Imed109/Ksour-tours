import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotels } from "../../JS/hotelsSlice";
import UserLayout from "./useLayout/userlayout";
import "./css/hotels.scss";
import HotelsHero from "./heros/HotelsHero";
const CustomHotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-info">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="hotel-image"
        />
        <div className="hotel-description">
          <h3>{hotel.name}</h3>
          <p>{hotel.localisation}</p> {/* Display localization */}
          <p className="note" >{hotel.description}</p>
          <p>Prix: {hotel.prix} TND</p> {/* Display price */}
        </div>
      </div>
    </div>
  );
};
const Hotels = () => {
  const hotels = useSelector((state) => state.hotels.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  return (
    <UserLayout>
      <HotelsHero/>
      <div className="hotels-container">
        <h1>Les Hôtels Recommandés</h1>
        <div className="hotels-list">
          {hotels.map((hotel, index) => (
            <CustomHotelCard key={index} hotel={hotel} />
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

export default Hotels;
