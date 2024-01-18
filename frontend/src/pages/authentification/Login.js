import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./authcss/login.scss"; // Import your SCSS file for styling
import loginImage from "../../assests/hero2.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/user/login", formData);
      const { token, user } = res.data;

    

      localStorage.setItem("token", token);
      localStorage.setItem("user", user.fullName);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user._id);
      localStorage.setItem("role", "user");


      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <Container fluid>
        <Row>
          <Col md={6} className="image-column">
            <div className="image-container">
              <img src={loginImage} alt="Login" />
            </div>
          </Col>
          <Col md={6} className="login-column">
            <div className="login-container">
              <div className="login-content">
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

                  <Button variant="warning" type="submit" block>
                    Se connecter
                  </Button>
                </Form>
                <p className="register-link">Pas encore membre ? <Link to="/register">Inscrivez-vous ici </Link></p>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
