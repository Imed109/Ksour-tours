import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import registerImage from "../../assests/hero4.jpg";
import "./authcss/register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("User registered:", response.data);
    } catch (error) {
      console.error("There was a problem registering the user:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    registerUser(formData);
    setFormData({
      fullName: "",
      email: "",
      age: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="registration-page">
      <Container>
        <Row>
          <Col md={6} className="image-column">
            <img
              src={registerImage}
              alt="Example"
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </Col>
          <Col md={6} className="registration-column">
            <div className="registration-container">
              <div className="registration-content">
                <h2>Inscription</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="fullName">
                    <Form.Label>Nom complet</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez votre nom complet"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Entrez votre email"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Entrez votre âge"
                      name="age"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Numéro de téléphone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Entrez votre numéro de téléphone"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Créez votre mot de passe"
                      name="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirmer le mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirmez votre mot de passe"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Button variant="warning" type="submit" block>
                    S'inscrire
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

export default Register;

