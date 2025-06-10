import React, { useState } from 'react';
import './css/SignupPage.css';
import { useNavigate } from 'react-router-dom';


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
    </>
  );
}

export default SignupPage;