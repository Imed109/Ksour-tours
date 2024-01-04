import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div style={{ background: "#333", color: "#fff", padding: "5px 0" }}>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <p style={{ fontSize: "14px", margin: 0 }}>Company Name</p>
          </Col>
          <Col xs={6} md={4} className="d-none d-md-block">
            <p style={{ fontSize: "14px", margin: 0 }}>
              Email: ksourtour@gmail.com
            </p>
          </Col>
          <Col xs={6} md={4} className="d-none d-md-block">
            <p style={{ fontSize: "14px", margin: 0 }}>
              Phone: 75863633 / 98438404
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
