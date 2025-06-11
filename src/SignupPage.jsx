import React, { useState } from 'react';
import './css/SignupPage.css';
import { Link } from "react-router-dom"

import { useNavigate } from 'react-router-dom';
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



let   SignupPage=()=> {

        let[inputdata,setinputdata]=useState({
         name:"",address:"",mobileno:"",email:"",password:""
    })

    let navigate=useNavigate()

    function fun(e){

        let {name,value}= e.target
        setinputdata({...inputdata,[name]:value})
    }

    function finalSubmit(e){
       e.preventDefault()
       console.log(inputdata)
       localStorage.setItem("userdata",JSON.stringify(inputdata))
      navigate("/login");
    }



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
         



    <div className="signup-container">
      <div className="left-panel">
        <h2>Create your<br />Free Account</h2>
      </div>
      <div className="right-panel">
        <form className="form-box" onSubmit={finalSubmit}>
          <h2>Sign up</h2>
          <p>Already have an account? <a href="/login">Login</a></p>

          <input type="text" name='name' placeholder="Name" onChange={fun} />
          <input type="text" name='address' placeholder="Address"  onChange={fun}/>
          <input type="text" name='mobileno' placeholder="Mobile No" onChange={fun}/>
          <input type="email" name='email' placeholder="Email"onChange={fun} />
          <input type="password" name='password' placeholder="Password" onChange={fun} />
          

        <input className="submit-btn" type="submit" />
          <button className="google-btn" type="button">Sign up with Google</button>
        </form>
      </div>
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
}

export default SignupPage;