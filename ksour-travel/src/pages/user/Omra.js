import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOmra } from "../../JS/omraSlice";
import UserLayout from "./useLayout/userlayout";
import "./css/omra.scss"; // Import your newly created SCSS file
import OmraHero from "./heros/OmraHero";
const CustomOmraCard = ({ offer }) => {
  return (
    <div className="omra-card">
      <div className="omra-info">
        <img
          src={offer.image}
          alt={offer.title}
          className="omra-image"
        />
        <div className="omra-description">
          <h3>{offer.title}</h3>
          <p>{offer.description}</p>
          <p className="note">{offer.price}</p>
          <p>{offer.price}</p>
        </div>
      </div>
    </div>
  );
};

const Omra = () => {
  const offers = useSelector((state) => state.omra.offers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOmra());
  }, [dispatch]);

  return (
    <UserLayout>
      <OmraHero />
      <div className="omra-container">
        <h1>Omra Offers</h1>
        <div className="omra-list">
          {offers.map((offer, index) => (
            <CustomOmraCard key={index} offer={offer} />
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

export default Omra;
