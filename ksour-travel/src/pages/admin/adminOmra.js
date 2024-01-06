import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { fetchOmra } from "../../JS/omraSlice";
import AdminLayout from "./adminLayout/adminLayout";

const AdminOmra = () => {
  const [newOffer, setNewOffer] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const offers = useSelector((state) => state.omra.offers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOmra());
  }, [dispatch]);

  const handleAddOffer = async () => {
    try {
      await axios.post("http://localhost:3001/omra", newOffer);
      setNewOffer({
        title: "",
        description: "",
        price: "",
        image: "",
      });
      dispatch(fetchOmra());
    } catch (error) {
      console.error("Error adding offer:", error);
    }
  };

  const handleRemoveOffer = async (offer) => {
    try {
      await axios.delete(`http://localhost:3001/omra/${offer.title}`);
      dispatch(fetchOmra());
    } catch (error) {
      console.error("Error removing offer:", error);
    }
  };

  return (
    <AdminLayout>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div>
              <h2>les offres Omra </h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div>
              <h3>Les offres Omra </h3>
              <ListGroup>
                {offers.map((offer, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {offer.title}
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveOffer(offer)}
                    >
                      effacer
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h3>Ajouter des offres Omra</h3>
              <Form>
                <Form.Group controlId="offerTitle" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={newOffer.title}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, title: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="offerDescription" className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                    value={newOffer.description}
                    onChange={(e) =>
                      setNewOffer({
                        ...newOffer,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="offerPrice" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Price"
                    value={newOffer.price}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, price: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="offerImage" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Image URL"
                    value={newOffer.image}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, image: e.target.value })
                    }
                  />
                </Form.Group>
                <Button variant="warning" onClick={handleAddOffer} block>
                  Ajouter
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
};

export default AdminOmra;