import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './css/contact.scss'; // Import the SCSS file for Contact styling
import yellowTravelImage from '../../assests/hero3.jpg'; // Import the yellow travel image
import UserLayout from "./useLayout/userlayout";

const Contact = () => {
  return (
    <UserLayout>
    <div className="contact-container" style={{ backgroundImage: `url(${yellowTravelImage})` }}>
      <Container>
        <h2>Nous Contacter</h2>
        <Row>
          <Col md={6}>
            <p>
              L'agence Ksour Tour est dédiée à fournir un service excellent. Pour toute question ou assistance, veuillez nous contacter via les informations suivantes :
            </p>
            <ul>
              <li>Email : ksourtour@gmail.com</li>
              <li>Téléphone : 75863633 / 98438404</li>
              <li>Adresse : RUE MOSBAH JARBOUA, Tataouine, Tunisie</li>
            </ul>
          </Col>
          <Col md={6}>
            {/* Vous pouvez ajouter une carte ici si nécessaire */}
          </Col>
        </Row>
      </Container>
    </div>
    </UserLayout>
  );
};

export default Contact;
