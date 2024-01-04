import React , { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchAirlines } from "../../JS/airlinesSlice";
import UserLayout from "./useLayout/userlayout";


const CustomCard = ({ company }) => {
  return (
    <div
      style={{
        width: "10rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={company.image}
        alt={company.name}
        style={{
          width: "100%",
          height: "100px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div style={{ padding: "10px" }}>
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
    <div>
    

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {companies.map((company, index) => (
          <CustomCard key={index} company={company} />
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

export default Airlines;
