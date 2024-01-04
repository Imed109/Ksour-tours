import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAirlines} from "../../JS/airlinesSlice"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Sidebar from "../../components/SideBar";
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
    <div>
      <Sidebar/>
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh", width: "90%" }} // Adjust the width here
    >
      <div>
        <h2 className="mb-4">Airlines List</h2> 
        <div className="mb-4">
          <h3>Add Company</h3>
          <Form>
            <Form.Group controlId="companyName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={newCompany.name}
                onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="companyImage">
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={newCompany.image}
                onChange={(e) => setNewCompany({ ...newCompany, image: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddCompany}>
              Add
            </Button>
          </Form>
        </div>
        <div>
          <h3>Companies List</h3>
          <ListGroup>
            {companies.map((company, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                {company.name}
                <Button variant="danger" onClick={() => handleRemoveCompany(company.name)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </Container>
    </div>
    </AdminLayout>
  );
};

export default AdminAirlines;
