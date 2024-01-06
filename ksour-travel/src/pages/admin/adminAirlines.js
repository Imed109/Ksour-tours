import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirlines } from "../../JS/airlinesSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import AdminLayout from "./adminLayout/adminLayout";

const AdminAirlines = () => {
  const [newCompany, setNewCompany] = useState({ name: "", image: "" });
  const companies = useSelector((state) => state.airlines.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAirlines());
  }, [dispatch]);

  const handleAddCompany = async () => {
    try {
      await axios.post("http://localhost:3001/airline", newCompany);
      dispatch(fetchAirlines());
      setNewCompany({ name: "", image: "" });
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  const handleRemoveCompany = async (companyName) => {
    try {
      await axios.delete(`http://localhost:3001/airline/${companyName}`);
      dispatch(fetchAirlines());
    } catch (error) {
      console.error("Error removing company:", error);
    }
  };

  return (
    <AdminLayout>
      <Container className="d-flex flex-column align-items-center" style={{ minHeight: "70vh", width: "90%" }}>
        <h2 className="mb-4">Airlines Management</h2>
        <Row className="mb-4">
          <Col md={6}>
            <div style={{ width: "100%" }}>
              <h5>Liste Companies</h5>
              <ListGroup>
                {companies.map((company, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center mb-2"
                    style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}
                  >
                    <span>{company.name}</span>
                    <Button variant="danger" onClick={() => handleRemoveCompany(company.name)}>
                      effacer
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ width: "100%" }}>
              <h5>Ajouter Airlines</h5>
              <Form>
                <Form.Group controlId="companyName" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={newCompany.name}
                    onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="companyImage" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Image URL"
                    value={newCompany.image}
                    onChange={(e) => setNewCompany({ ...newCompany, image: e.target.value })}
                  />
                </Form.Group>
                <Button variant="warning" onClick={handleAddCompany}>
                  Ajouter
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
};

export default AdminAirlines;