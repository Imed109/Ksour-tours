import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios"; // Import axios
import registerImage from "../../assests/hero4.jpg"; // Assuming 'hero4.jpg' is in your assets folder

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
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          {/* Left half for the image */}
          <img
            src={registerImage} // Replace with the URL or path to your image
            alt="Example"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </Col>
        <Col md={6}>
          {/* Right half for the form */}
          <div className="d-flex justify-content-center align-items-center h-100">
            <div>
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
                      setFormData({ ...formData, phoneNumber: e.target.value })
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
  );
};

export default Register;
