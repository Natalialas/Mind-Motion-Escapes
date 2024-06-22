import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderRequest } from '../../../redux/orderRedux';
import { Form, Button, Row, Col, ListGroup, Container, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [formData, setFormData] = useState({
    clientName: '',
    clientSurname: '',
    email: '',
    phone: '',
    address: '',
    comment: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      finalAmount: cartItems.reduce((total, item) => total + item.price * item.numberOfPeople, 0),
      tours: cartItems.map(item => item.tour.id),
      status: 'pending',
    };

    try {
      await dispatch(createOrderRequest(orderData));
      setOrderPlaced(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error("Order submission failed:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Order Form</h2>
          {orderPlaced && (
            <Alert variant="success">
              Your order has been placed successfully! Redirecting to the homepage...
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="clientName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="clientName" 
                placeholder="Name" 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="clientSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control 
                type="text" 
                name="clientSurname" 
                placeholder="Surname" 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
                type="tel" 
                name="phone" 
                placeholder="Phone" 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                type="text" 
                name="address" 
                placeholder="Address" 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control 
                as="textarea" 
                name="comment" 
                placeholder="Comment" 
                onChange={handleChange} 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Order
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h2>Your Cart</h2>
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={6}>
                    <h5>{item.tour.name}</h5>
                    <p>{item.tour.description}</p>
                  </Col>
                  <Col md={3}>
                    <p>{item.price} $</p>
                  </Col>
                  <Col md={3}>
                    <p>Number of people: {item.numberOfPeople}</p>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Card className="mt-3">
            <Card.Body>
              <h5>Total: {cartItems.reduce((total, item) => total + item.price * item.numberOfPeople, 0)} $</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderForm;
