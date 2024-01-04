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
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", width: "90%" }}>
      <div>
        <h2 className="mb-4">Ferries List</h2>
        <div className="mb-4">
          <h3>Add Ship</h3>
          <Form>
            <Form.Group controlId="shipName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={newShip.name}
                onChange={(e) => setNewShip({ ...newShip, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="shipImage">
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={newShip.image}
                onChange={(e) => setNewShip({ ...newShip, image: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="shipDescription">
              <Form.Control
                type="text"
                placeholder="Description"
                value={newShip.description}
                onChange={(e) => setNewShip({ ...newShip, description: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddShip}>
              Add
            </Button>
          </Form>
        </div>
        <div>
          <h3>Ships List</h3>
          <ListGroup>
            {ships.map((ship, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                {ship.name}
                <Button variant="danger" onClick={() => handleRemoveShip(ship.name)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </Container>
    </AdminLayout>
  );
};

export default AdminFerries;

