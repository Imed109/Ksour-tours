// Footer.js
import "./css/Footer.css";
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
    <div className="footer-container">
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
            {/* Votre contenu pour la colonne du milieu */}
            {/* Vous pouvez ajouter des informations sur les services, à propos de nous, des témoignages, etc. */}
          </Col>
          <Col xs={12} md={4}>
            
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
              {/* Ajoutez plus d'icônes de médias sociaux avec leurs balises d'ancre respectives */}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ksour Tour. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default Footer;

