import './Login.css'
import loginimg from './Images/Login.jpg'
let Login =()=>{
    return(
        <>
        
        <div className="login-wrapper">
      <div className="login-box">
        <div className="login-form">
          <h2>Log In To Your Account</h2>
          <p>Check your order status, update your billing info, and review past purchases.</p>

          <label>* Email *</label>
          <input type="email" placeholder="Enter Your Email" />

          <label>* Password *</label>
          <div className="password">
            <input type="password" placeholder="Enter Your Password" />
          </div>

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button className="login-button">LOG IN</button>

          <p className="signup-text">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
        <div className="login-image">
          <img src={loginimg} alt="Decor" />
        </div>
      </div>
    </div>
        </>
    )
}

export default Login