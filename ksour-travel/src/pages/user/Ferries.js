import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchShips } from "../../JS/ferriesSlice"; // Replace with the correct path to ferriesSlice
import UserLayout from "./useLayout/userlayout";

// Custom card structure for ships
const CustomShipCard = ({ ship }) => {
  return (
    <div
      style={{
        width: "18rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={ship.image}
        alt={ship.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3>{ship.name}</h3>
        <p>{ship.description}</p>
      </div>
    </div>
  );
};

// Ship component
const Ferries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShips());
  }, [dispatch]);

  const ships = useSelector((state) => state.ferries.ships);

  return (
    <UserLayout>
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {ships.map((ship, index) => (
          <CustomShipCard key={index} ship={ship} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button as={Link} to="/formulaire" variant="primary">
          Reservation
        </Button>
      </div>
    </div>
    </UserLayout>
  );
};

export default Ferries;

