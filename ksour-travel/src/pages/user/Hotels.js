import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotels } from "../../JS/hotelsSlice"; // Update the path to your hotelsSlice
import UserLayout from "./useLayout/userlayout";

const CustomHotelCard = ({ hotel }) => {
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
        src={hotel.image}
        alt={hotel.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
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
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {hotels.map((hotel, index) => (
          <CustomHotelCard key={index} hotel={hotel} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button as={Link} to="/reservation" variant="primary">
          Reservation
        </Button>
      </div>
    </div>
    </UserLayout>
  );
};

export default Hotels;
