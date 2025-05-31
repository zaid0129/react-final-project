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
        <img src="/images/member2.jpg" alt="Team Member" />
        <img src="/images/member3.jpg" alt="Team Member" />
        <img src="/images/member4.jpg" alt="Team Member" />
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



        </>
    )
}

export default Index