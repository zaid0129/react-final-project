import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, Row } from 'react-bootstrap';

const Showcart = () => {
  const cartItems = useSelector((state) => state.cart.carditems);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Cart</h2>

      <Row className="gap-4 justify-content-center">
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <Card key={item.id} style={{ width: '19rem', border: "solid 2px pink" }}>
              <Card.Img variant="top" src={item.img} height="250" style={{ objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{item.pname}</Card.Title>
                <Card.Text>
                  <p><b>Price: Rs. {item.price}</b></p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        )}
      </Row>

      {cartItems.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <h4>Total Price: Rs. {totalPrice}</h4>
          <Button variant="success" style={{ marginTop: '10px' }}>Proceed to Checkout</Button>
        </div>
      )}
    </div>
  );
};

export default Showcart;
