import  letterdecor from "./Images/LETTER DECOR.jpg"
import greenvase from "./Images/GREEN VASE.jpg"
import modernlamp from "./Images/MODERN LAMP.jpg"
import classiccandle from "./Images/CLASSIC CANDLE.jpg"
import candle from "./Images/CANDLE.jpg"
import sec3img1 from "./Images/Sec-3-img1.jpg"
import sec3img2 from "./Images/Sec-3-img2.jpg"
import sec3img3 from "./Images/Sec-3-img3.jpg"
import sec3img4 from "./Images/Sec-3-img4.jpg"
import sec3img5 from "./Images/Sec-3-img5.jpg"
import team1 from "./Images/team1.jpg" 
import team2 from "./Images/team2.jpg" 
import team3 from "./Images/team3.jpg" 
import team4 from "./Images/team4.jpg" 
import paypal from "./Images/foot-paypal.png"
import { GrLocationPin } from "react-icons/gr";
import { MdAddCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import './index.css'

let Index=()=>{
    return(
        <>

        {/* FIRST SECTION */}
       
    <div className="calla-hero">
      <header className="calla-header">
        <div className="calla-logo">CALLA</div>
        <nav className="calla-nav">
          <ul>
            <li>HOME</li>
            <li>PAGES</li>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>SHOP</li>
            <li>ELEMENTS</li>
          </ul>
        </nav>
      </header>

      <div className="calla-banner">
        <div className="calla-overlay">
          <div className="calla-text-box">
            <h1>STYLISH LOOK</h1>
            <div className="divider"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, In ut ullam leo, eget euismod orci.
            </p>
          </div>
        </div>
      </div>
    </div>
{/* -------------------------------------------------------------------------------------------------------- */}
     
     
{/* SECOND SECTION */}


 <div className="new-arrivals">
      <div className="section-title">
        <p>Home Decor</p>
        <h2>NEW ARRIVALS</h2>
        <div className="divider"></div>
      </div>

      <div className="products">
        <div className="product">
          <img src={letterdecor} alt="" />
          <h3>LETTER DECOR</h3>
          <p>Rs.50K</p>
        </div>

        <div className="product">
          <img src={greenvase} alt="" />
          <h3>MODERN VASE</h3>
          <p>Rs.75K</p>
        </div>

        <div className="product">
          <img src={modernlamp} alt="" />
          <h3>MODERN LAMP</h3>
          <p>Rs.90K</p>
        </div>

        <div className="product">
          <img src={classiccandle} alt="" />
          <h3>CLASSIC CANDLE</h3>
          <p>Rs.40K</p>
        </div>

        <div className="product">
          <img src={candle} alt="" />
          <h3>CANDLE</h3>
          <p>Rs.45K</p>
        </div>
      </div>
    </div>

    {/* ------------------------------------------------------------------------------------------------------ */}


    {/* THIRD SECTION */}

      
    <div className="section-3">
      <div className="main-image">
        <img src={sec3img1} alt="" />
      </div>

      <div className="side-boxes">
        <div className="box">
          <img src={sec3img2} alt="" />
        </div>

        <div className="box">
          <img src={sec3img3} alt="" />
        </div>

        <div className="box">
        <img src={sec3img4} alt="" />

        </div>

        <div className="box">
          <img src={sec3img5}alt="" />
        </div>
      </div>
    </div> 



   {/* ------------------------------------------------------------------------------------------------------ */}


    {/* FOURTH SECTION */}

       <div className="blog-container">
      <div className="blog-header">
        <p className="heading">New Articles</p>
        <h2>FROM OUR BLOG</h2>
        <div className="divider">⧫</div>
      </div>

      <div className="blog-cards">
        <div className="card">
          <p className="date">31.05.2025</p>
          <h3>CALLA COLLECTION</h3>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum.
          </p>
          <span>READ MORE</span>
        </div>

        <div className="card">
          <p className="date">31.05.2025</p>
          <h3>DECORATE YOUR TABLE</h3>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum.
          </p>
          <span >READ MORE</span>
        </div>

        <div className="card">
          <p className="date">31.05.2025</p>
          <h3>ROUND MIRRORS</h3>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum.
          </p>
          <span >READ MORE</span>
        </div>
      </div>

      <div className="banner">
        <h2>FIND THE RIGHT GIFT</h2>
        <div className="divider"></div>
      </div>
    </div>


    
   {/* ------------------------------------------------------------------------------------------------------ */}


    {/* FIFTH SECTION */}

       <div className="team-section">
      <div className="team-header">
        <p className="subtitle">Creative Crew</p>
        <h2>MEET OUR TEAM</h2>
        <div className="divider">⧫</div>
      </div>

      <div className="team-members">
        <img src={team1} alt="" />
        <img src={team2} alt="" />
        <img src={team3} alt="" />
        <img src={team4} alt="" />
      </div>

      <div className="features">
        <div className="feature-card fast-delivery">
          <h4>FAST DELIVERY</h4>
          <p>All over the world</p>
        </div>
        <div className="feature-card money-back">
          <h4>100% MONEY BACK</h4>
          <p>Within 14 days</p>
        </div>
        <div className="feature-card secure-payment">
          <h4>SECURE PAYMENT</h4>
          <p>Mastercard/Visa/Paypal</p>
        </div>
      </div>
    </div>

   
   {/* ------------------------------------------------------------------------------------------------------ */}


    {/* SIXTH SECTION */}

    <div className="newsletter-section">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>Newsletter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="YOUR E-MAIL ADDRESS..." />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>

       {/* ------------------------------------------------------------------------------------------------------ */}


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
            <img src="/images/insta1.jpg" alt="" />
            <img src="/images/insta2.jpg" alt="" />
            <img src="/images/insta3.jpg" alt="" />
            <img src="/images/insta4.jpg" alt="" />
            <img src="/images/insta5.jpg" alt="" />
            <img src="/images/insta6.jpg" alt="" />
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

export default Index