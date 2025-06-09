import React from 'react';
import './css/SignupPage.css';

let   SignupPage=()=> {
  return (
    <div className="signup-container">
      <div className="left-panel">
        <h2>Create your<br />Free Account</h2>
      </div>
      <div className="right-panel">
        <form className="form-box">
          <h2>Sign up</h2>
          <p>Already have an account? <a href="/login">Login</a></p>

          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Address" required />
          <input type="tel" placeholder="Mobile No" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button className="submit-btn" type="submit">Create an Account</button>
          <button className="google-btn" type="button">Sign up with Google</button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;