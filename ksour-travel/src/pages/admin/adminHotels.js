import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../JS/hotelsSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import axios from "axios";
import AdminLayout from "./adminLayout/adminLayout";
import "./admincss/adminHotels.scss"; // Import your custom CSS for styling

const AdminHotels = () => {
  const [newHotel, setNewHotel] = useState({
    name: "",
    image: "",
    description: "",
  });
  const hotels = useSelector((state) => state.hotels.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const handleAddHotel = async () => {
    try {
      await axios.post("http://localhost:3001/hotels", newHotel);
      setNewHotel({ name: "", image: "", description: "" });
      dispatch(fetchHotels());
    } catch (error) {
      console.error("Error adding hotel:", error);
    }
  };

  const handleRemoveHotel = async (hotelName) => {
    try {
      await axios.delete(`http://localhost:3001/hotels/${hotelName}`);
      dispatch(fetchHotels());
    } catch (error) {
      console.error("Error removing hotel:", error);
    }
  };

  return (
    <AdminLayout>
      <Container fluid className="admin-hotels-container">
        <div className="left-section">
          <h2 className="mb-4">Hotels List</h2>
          <ListGroup>
            {hotels.map((hotel, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <div style={{ flex: 1 }}>
                  <h5>{hotel.name}</h5>
                  <p>{hotel.description}</p>
                </div>
                <Button variant="danger" onClick={() => handleRemoveHotel(hotel.name)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="right-section">
          <h2 className="mb-4">Add Hotel</h2>
          <Form>
            <Form.Group controlId="hotelName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={newHotel.name}
                onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="hotelImage">
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={newHotel.image}
                onChange={(e) => setNewHotel({ ...newHotel, image: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="hotelDescription">
              <Form.Control
                type="text"
                placeholder="Description"
                value={newHotel.description}
                onChange={(e) => setNewHotel({ ...newHotel, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="hotelPrix">
              <Form.Control
                type="number"
                placeholder="Prix"
                value={newHotel.prix}
                onChange={(e) => setNewHotel({ ...newHotel, prix: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="hotelLocalisation">
              <Form.Control
                type="text"
                placeholder="Localisation"
                value={newHotel.localisation}
                onChange={(e) => setNewHotel({ ...newHotel, localisation: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddHotel}>
              Add
            </Button>
          </Form>
        </div>
      </Container>
    </AdminLayout>
  );
  
};

export default AdminHotels;
