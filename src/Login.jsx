import { useState } from 'react'
import './css/Login.css'
import loginimg from './Images/Login.jpg'
import { useNavigate } from 'react-router-dom'

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
        </>
    )
}

export default Login