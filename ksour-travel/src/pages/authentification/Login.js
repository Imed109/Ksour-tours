import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
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

            <Button variant="primary" type="submit" block>
              Se connecter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
