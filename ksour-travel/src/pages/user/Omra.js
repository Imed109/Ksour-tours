import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchOmra } from "../../JS/omraSlice";
import { Link } from "react-router-dom";
import UserLayout from "./useLayout/userlayout";

const Omra = () => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.omra.offers);

  useEffect(() => {
    dispatch(fetchOmra());
  }, [dispatch]);

  return (
    <UserLayout>
    <div>
      <h2>Omra Offers</h2>
      <div className="d-flex flex-wrap">
        {offers.map((offer, index) => (
          <Card key={index} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={offer.image} alt={offer.title} />
            <Card.Body>
              <Card.Title>{offer.title}</Card.Title>
              <Card.Text>{offer.description}</Card.Text>
              <Card.Text>Price: {offer.price}</Card.Text>
              <Button as={Link} to="/formulaire" variant="primary">
                Reservation
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    </UserLayout>
  );
};

export default Omra;
