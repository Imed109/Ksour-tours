import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./authcss/adminlogin.scss"; // Import your SCSS file for styling
import loginImage from "../../assests/adminlogin.jpg";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const apiUrl = process.env.REACT_APP_API_URL ;

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/admin/login`, formData);
      const { token, admin } = res.data;
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", admin);
      localStorage.setItem("token", token);
      localStorage.setItem("user", admin.name);
      localStorage.setItem("userId", admin._id);
      localStorage.setItem("role", "admin");
  
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-login-page">
      <Container fluid>
        <Row>
          <Col md={6} className="admin-image-column">
            <div className="admin-image-container">
              <img src={loginImage} alt="Login" />
            </div>
          </Col>
          <Col md={6} className="admin-login-column">
            <div className="admin-login-container">
              <div className="admin-login-content">
                <h2>Connexion</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Entrez votre email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Entrez votre mot de passe"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button variant="info" type="submit" block>
                    Se connecter
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;
