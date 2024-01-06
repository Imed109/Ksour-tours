import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './css/contact.scss'; // Import the SCSS file for Contact styling
import yellowTravelImage from '../../assests/hero3.jpg'; // Import the yellow travel image
import UserLayout from "./useLayout/userlayout";
import GoogleMapReact from 'google-map-react';

const Contact = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

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
        <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
      </Container>
    </div>
   
    </UserLayout>
  );
};

export default Contact;
