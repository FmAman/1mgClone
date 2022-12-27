import React, { useState } from "react";
import "../styles/Login.css";
import { GrClose } from "react-icons/gr";
import axios from "axios";
 
function Login({passSign,passLogin}) {
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const openModel = () =>{
    
    passSign(true)
    passLogin(false)
  }
  const loginUser = () =>{
    localStorage.setItem("emailAddress",email)
    axios.get(`http://localhost:8888/loginRequest/${email}/${password}`)
    .then((response)=>{
      console.log(response.data);
      localStorage.setItem("role",response.data.userRole);
      // setPassRole(localStorage.getItem("role"))
      console.log(localStorage.getItem("role"))
      // setPassName(localStorage.getItem("customerName"))
      localStorage.setItem("customerName",response.data.customerName);
    })
  }
  return (
    <div className="login-main-wrapper">
      <div className="login-main">
        <div className="login-left-main">
          <div className="login-left-sub">
            <div className="login-left-image-main">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4534/4534971.png"
                alt="No Image"
                className="login-left-image"
                
              />
            </div>
            <div className="login-left-head">Make Healthcare Simpler</div>
            <div className="login-left-body">
              Get medicine information, order medicines, book lab tests and
              consult doctors online from the comfort of your home.
            </div>
          </div>
        </div>
        <div className="login-right-main">
          <div className="login-right-cancel">
            <GrClose onClick={()=>
                passLogin(false)}/>
          </div>
          <div className="login-right-container">
            <div className="login-right-head">Login</div>
            <div className="login-right-head-text">
              Get access to your orders, lab tests & doctor consultations
            </div>
            <div className="login-right-input-main">
              <input
                type="email"
                placeholder="Enter Email ID"
                className="login-right-input"
                // value={setEmail}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              ></input>
            </div>
            <div className="login-right-input-password">
              <input
                type="password"
                placeholder="Enter Password"
                className="login-right-input"
                // value={setPassword}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              ></input>
            </div>
            <div className="login-right-button-main">
              <button className="login-right-button"
              onClick={()=>{
                loginUser();
                passLogin(false);
                window.setTimeout(function () {
                        window.location.reload();
                      }, 500);
                    
                }}
              >LOGIN</button>
            </div>
            <div className="login-right-signup">
              New on 1mg? 
              <span className="login-right-signup-span"
              onClick={openModel}> Sign Up</span>
            </div>
            <div className="login-right-policy">
              By logging in, you agree to our <br /><span className="login-right-policy-span">Terms and Conditions</span>  & <span className="login-right-policy-span">Privacy Policy</span>
             
            </div>
            <div className="login-right-needhelp">Need Help? Get In Touch</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
