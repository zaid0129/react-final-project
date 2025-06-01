import './Login.css'
let Login =()=>{
    return(
        <>
        
        <div className="login-wrapper">
      <div className="login-box">
        {/* Left section - form */}
        <div className="login-form">
          <h2>Log In To Your Account</h2>
          <p>Check your order status, update your billing info, and review past purchases.</p>

          <label>Email *</label>
          <input type="email" placeholder="Yourname@gmail.com" />

          <label>Password *</label>
          <div className="password-wrapper">
            <input type="password" placeholder="Yourname@gmail.com" />
            <span className="eye-icon">👁</span>
          </div>

          <a href="#" className="forgot-password">Forgot Password</a>

          <button className="login-button">LOG IN</button>

          <p className="signup-text">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>

        {/* Right section - image */}
        <div className="login-image">
          <img src={loginImage} alt="Decor" />
        </div>
      </div>
    </div>
        </>
    )
}

export default Login