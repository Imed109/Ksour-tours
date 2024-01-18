import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShips } from "../../JS/ferriesSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import axios from "axios";
import AdminLayout from "./adminLayout/adminLayout";

const AdminFerries = () => {
  const [newShip, setNewShip] = useState({ name: "", image: "", description: "" });
  const ships = useSelector((state) => state.ferries.ships);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShips());
  }, [dispatch]);

  const addButtonText = "Ajouter un Ferry"; // Text translation
  const addShipTitle = "Ajouter un Ferry"; // Title translation
  const removeButtonText = "Supprimer"; // Button translation
  const ferriesListTitle = "Liste des Ferries"; // Title translation
  const namePlaceholderText = "Nom"; // Placeholder translation
  const imagePlaceholderText = "URL de l'image"; // Placeholder translation
  const descriptionPlaceholderText = "Description"; // Placeholder translation

  const handleAddShip = async () => {
    try {
      await axios.post("http://localhost:3001/ferries", newShip);
      setNewShip({ name: "", image: "", description: "" });
      dispatch(fetchShips());
    } catch (error) {
      console.error("Error adding ship:", error);
    }
  };

  const handleRemoveShip = async (shipName) => {
    try {
      await axios.delete(`http://localhost:3001/ferries/${shipName}`);
      dispatch(fetchShips());
    } catch (error) {
      console.error("Error removing ship:", error);
    }
  };

  return (
    <AdminLayout>
      <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="d-flex" style={{ width: "90%" }}>
          <div style={{ flex: "1", marginRight: "50px" }}>
            <h2 className="mb-4">{ferriesListTitle}</h2>
            <ListGroup>
              {ships.map((ship, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                  {ship.name}
                  <Button variant="danger" onClick={() => handleRemoveShip(ship.name)}>
                    {removeButtonText}
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div style={{ flex: "1" }}>
            <h2 className="mb-4">{addShipTitle}</h2>
            <Form>
              <Form.Group controlId="shipName" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={namePlaceholderText}
                  value={newShip.name}
                  onChange={(e) => setNewShip({ ...newShip, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="shipImage" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={imagePlaceholderText}
                  value={newShip.image}
                  onChange={(e) => setNewShip({ ...newShip, image: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="shipDescription" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={descriptionPlaceholderText}
                  value={newShip.description}
                  onChange={(e) => setNewShip({ ...newShip, description: e.target.value })}
                />
              </Form.Group>
              <Button variant="warning" onClick={handleAddShip}>
                {addButtonText}
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </AdminLayout>
  );
};

export default AdminFerries;