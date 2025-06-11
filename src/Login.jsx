import { useState } from 'react'
import './css/Login.css'
import loginimg from './Images/Login.jpg'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

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



let Login =()=>{

  let navigate = useNavigate()

       let [logindata,setlogindata]= useState({
            email:"",password:""
    })

    function fun(e){
        let {name,value}=e.target;
        setlogindata({...logindata,[name]:value})
    }

    let storedata =JSON.parse(localStorage.getItem("userdata"))

    function finalSubmit(e){
        e.preventDefault()
        if((logindata.email != storedata.email )|| (logindata.password !=storedata.password)){
            alert("user not found ");
        }else{
            alert("login successfully");
            navigate('/')
            
        }
        

    }


    return(
        <>
        


      
        <div className="calla-hero">
          <header className="calla-header">
            <div className="calla-logo">CALLA</div>
            <nav className="calla-nav">
              <ul>
                <li> <Link to='/'> HOME</Link></li>
                <li> <Link>LOGIN</Link> </li>
                <li> <Link to='/SignupPage'>SignUp</Link></li>
                <li> <Link to='/'> BLOG</Link></li>
                <li> <Link to='/'>SHOP</Link></li>
                <li><Link to='/'>ELEMENTS</Link></li>
              </ul>
            </nav>
          </header>
        </div>
         


        <div className="login-wrapper">
      <div className="login-box">
        <form className="login-form" onSubmit={finalSubmit}>
          <h2>Log In To Your Account</h2>
          <p>Check your order status, update your billing info, and review past purchases.</p>
        
          <label>* Email *</label>
          <input type="email" name='email' onChange={fun} placeholder="Enter Your Email" />

          <label>* Password *</label>
          <div className="password">
            <input type="password" name='password' onChange={fun} placeholder="Enter Your Password" />
          </div>

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button className="login-button">LOG IN</button>

          <p className="signup-text">
            Don't have an account? <a href="/signuppage">Sign Up</a>
          </p>
        </form>
        <div className="login-image">
          <img src={loginimg} alt="Decor" />
        </div>
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
    )
}

export default Login