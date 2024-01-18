import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Envelope, Phone } from "react-bootstrap-icons";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <p style={{ fontSize: "14px", margin: 0 }}>
      
              KSOUR TOUR
            </p>
          </Col>
          <Col xs={6} md={4} className="d-none d-md-block">
            <p style={{ fontSize: "14px", margin: 0 }}>
              <Envelope style={{ marginRight: "5px" }} />
              ksourtour@gmail.com
            </p>
          </Col>
          <Col xs={6} md={4} className="d-none d-md-block">
            <p style={{ fontSize: "14px", margin: 0 }}>
              <Phone style={{ marginRight: "5px" }} />
              75863633 / 98438404
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
