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
    prix: "",
    localisation: "",
  });
  const hotels = useSelector((state) => state.hotels.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const handleAddHotel = async () => {
    try {
      await axios.post("http://localhost:3001/hotels", newHotel);
      setNewHotel({
        name: "",
        image: "",
        description: "",
        prix: "",
        localisation: "",
      });
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
          <h2 className="mb-4">Liste des Hôtels</h2>
          <ListGroup>
            {hotels.map((hotel, index) => (
              <ListGroup.Item
                key={index}
                className="admin-hotel-card"
              >
                <div>
                  <h5 className="hotel-name">{hotel.name}</h5>
                  <p className="hotel-localisation">{hotel.localisation}</p>
                  <p className="hotel-description">{hotel.description}</p>
                </div>
                <Button className="remove-button"
                  variant="danger"
                  onClick={() => handleRemoveHotel(hotel.name)}
                >
                  Supprimer
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="right-section">
          <h2 className="mb-4">Ajouter un Hôtel</h2>
          <Form>
            <Form.Group controlId="hotelName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nom"
                value={newHotel.name}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="hotelImage" className="mb-3">
              <Form.Control
                type="text"
                placeholder="URL de l'image"
                value={newHotel.image}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, image: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="hotelDescription" className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                value={newHotel.description}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="hotelPrix" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Prix"
                value={newHotel.prix}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, prix: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="hotelLocalisation" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Localisation"
                value={newHotel.localisation}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, localisation: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="warning" onClick={handleAddHotel}>
              Ajouter
            </Button>
          </Form>
        </div>
      </Container>
    </AdminLayout>
  );
};

export default AdminHotels;