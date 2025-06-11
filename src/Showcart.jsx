import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button, Card } from 'react-bootstrap';

import { removeFromCart, clearCart } from './Cardslice';

import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"


import './css/Showcart.css';

import paypal from "./Images/foot-paypal.png"
import { GrLocationPin } from "react-icons/gr";
import { MdAddCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import foot1 from "./Images/foot1.jpg.jpg"
import foot2 from "./Images/foot2.jpg.jpg"
import foot3 from "./Images/foot3.jpg.jpg"
import foot4 from "./Images/foot4.jpg.jpg"
import foot5 from "./Images/foot5.jpg.jpg"
import foot6 from "./Images/foot6.jpg.jpg"




const Showcart = () => {

  const cartItems = useSelector((state) => state.cart.carditems);

  const dispatch = useDispatch();

  const navigate = useNavigate();



  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);



  const handleRemove = (id) => {

    dispatch(removeFromCart(id));

  };



  const handleCheckout = () => {

    // ✅ Save the order to localStorage

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];



    const newOrder = {

      id: Date.now(),

      items: cartItems,

      total: totalPrice,

      date: new Date().toLocaleString()

    };



    localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));



    dispatch(clearCart()); // ✅ Clear the cart

    navigate('/admin/orderlist'); // ✅ Redirect to admin panel

  };


  return (
<>

           
        <div className="calla-hero">
          <header className="calla-header">
            <div className="calla-logo">CALLA</div>
            <nav className="calla-nav">
              <ul>
                <li> <Link to='/'> HOME</Link></li>
                <li> <Link to='/login'>LOGIN</Link> </li>
                <li> <Link to='/SignupPage'>SignUp</Link></li>
                <li> <Link to='/'> BLOG</Link></li>
                <li> <Link to='/'>SHOP</Link></li>
                <li><Link to='/'>ELEMENTS</Link></li>
              </ul>
            </nav>
          </header>
        </div>
         


    <div className="cart-container">

      <h2 className="cart-title">Your Cart</h2>



      <div className="cart-items-row">

        {cartItems.length === 0 ? (

          <p className="cart-empty">Your cart is empty.</p>

        ) : (

          cartItems.map((item) => (

            <Card key={item.id} className="cart-card">

              <Card.Img variant="top" src={item.img} alt={item.pname} />

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

          <Button onClick={handleCheckout}>Proceed to Checkout</Button>

        </div>

      )}

    </div>

  {/* SEVENTH SECTION */}

 <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h2 className="logo">CALLA <span className="logo-icon">⟡</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur tetur a elit. Inutark ullamcorper leo, ege euismod orci natoquepen etma.</p>
          <div className="payment-icons">
            <img src={paypal} alt="" />

          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="">About Us</a></li>
            <li><a href="">What We Do</a></li>
            <li><a href="">Meet The Team</a></li>
            <li><a href="">FAQ Page</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>FIND A STORE</h3>
          <ul className="contact-info">
            <li><GrLocationPin /> Hemlock, Brooklyn, NY 11208</li>
            <li><GrLocationPin /> 5 Bridge, Brooklyn, NY 11201</li>
            <li><MdAddCall /> +321856964108</li>
          </ul>
          <div className="social-icons">
            <FaInstagram />
            <FaSquareXTwitter /> 
            <FaFacebookF /> 
            <FaSnapchat /> 
          </div>
        </div>
        {/* Column 4 */}
        <div className="footer-column">
          <h3>INSTAGRAM</h3>
          <div className="insta-gallery">
            <img src={foot1 } alt="" />
            <img src={foot2 } alt="" />
            <img src={foot3 } alt="" />
            <img src={foot4 } alt="" />
            <img src={foot5 } alt="" />
            <img src={foot6 }alt="" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2018 Qode Interactive, All Rights Reserved
      </div>
    </footer>


    </>

  );

};



export default Showcart;
