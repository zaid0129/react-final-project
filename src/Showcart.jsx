import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Row } from 'react-bootstrap';
import { removeFromCart } from './Cardslice';
import './css/Showcart.css'


const Showcart = () => {
  const cartItems = useSelector((state) => state.cart.carditems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };


  return (
    // <div style={{ padding: '30px' }}>
    //   <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Cart</h2>

    //   <Row className="gap-4 justify-content-center">
    //     {cartItems.length === 0 ? (
    //       <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
    //     ) : (
    //       cartItems.map((item) => (
    //         <Card key={item.id} style={{ width: '19rem', border: "solid 2px pink" }}>
    //           <Card.Img variant="top" src={item.img} height="250" style={{ objectFit: "cover" }} />
    //           <Card.Body>
    //             <Card.Title>{item.pname}</Card.Title>
    //             <Card.Text>
    //               <p><b>Price: Rs. {item.price}</b></p>
    //             </Card.Text>

    //               <Button
    //               onClick={() => handleRemove(item.id)}>
    //               Remove Item
    //             </Button>
    //           </Card.Body>
    //         </Card>
    //       ))
    //     )}
    //   </Row>

    //   {cartItems.length > 0 && (
    //     <div style={{ textAlign: 'center', marginTop: '30px' }}>
    //       <h4>Total Price: Rs. {totalPrice}</h4>
    //       <Button variant="success" style={{ marginTop: '10px' }}>Proceed to Checkout</Button>
    //     </div>
    //   )}
    // </div>


    <div className="cart-container">
  <h2 className="cart-title">Your Cart</h2>

  <div className="cart-items-row">
    {cartItems.length === 0 ? (
      <p className="cart-empty">Your cart is empty.</p>
    ) : (
      cartItems.map((item) => (
        <Card key={item.id} className="cart-card">
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.pname}</Card.Title>
            <Card.Text><b>Price: Rs. {item.price}</b></Card.Text>
            <Button onClick={() => handleRemove(item.id)}>Remove Item</Button>
          </Card.Body>
        </Card>
      ))
    )}
  </div>

  {cartItems.length > 0 && (
    <div className="cart-summary">
      <h4>Total Price: Rs. {totalPrice}</h4>
      <Button >Proceed to Checkout</Button>
    </div>
  )}
</div>




  );
};

export default Showcart;
