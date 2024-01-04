import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Envelope,
  GeoAlt,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div style={{ background: "#333", color: "#fff", padding: "20px 0" }}>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h5>Coordonnées</h5>
            <p>
              <Envelope style={{ marginRight: "5px" }} /> ksourtour@gmail.com
            </p>
            <p>
              <Phone style={{ marginRight: "5px" }} /> 75863633 / 98438404
            </p>
            <p>
              <GeoAlt style={{ marginRight: "5px" }} /> RUE MOSBAH JARBOUA ,
              Tataouine, Tunisie
            </p>
          </Col>
          <Col xs={12} md={4}>
            {/* Your content for the middle column */}
            {/* You can add information about services, about us, testimonials, etc. */}
          </Col>
          <Col xs={12} md={4}>
            <h5>Connectez-vous avec nous</h5>
            <p>Suivez-nous sur les réseaux sociaux :</p>
            <div>
              <a
                href="https://www.facebook.com/ksourtour/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook style={{ marginRight: "10px" }} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter style={{ marginRight: "10px" }} />
              </a>
              <a
                href="https://www.instagram.com/ksourtourtataouine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram style={{ marginRight: "10px" }} />
              </a>
              {/* Add more social media icons with their respective anchor tags */}
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>
          &copy; {new Date().getFullYear()} Ksour Tour. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default Footer;
