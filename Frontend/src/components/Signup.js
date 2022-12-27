import React, { useState } from "react";
import "../styles/Signup.css";
import { GrClose } from "react-icons/gr";
import axios from "axios";
function Signup({ passSign,passLogin }) {

  const[customerName,setCustomerName]= useState("");
  const[customerEmail,setCustomerEmail]= useState("");
  const[customerPassword,setCustomerPassword]= useState("");

  const openModel = () =>{
    
    passSign(false)
    passLogin(true)
  }

  const postData =()=>{
    console.log("Post")
    axios.post(`http://localhost:8888/adduser`,{
      customerName,
      customerEmail,
      customerPassword
    })
  }
  return (
    <div className="signup-main-wrapper">
      <div className="signup-main">
        <div className="signup-left-main">
          <div className="signup-left-sub">
            <div className="signup-left-image-main">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4534/4534971.png"
                alt="No Image"
                className="signup-left-image"
              />
            </div>
            <div className="signup-left-head">Make Healthcare Simpler</div>
            <div className="signup-left-body">
              Get medicine information, order medicines, book lab tests and
              consult doctors online from the comfort of your home.
            </div>
          </div>
        </div>
        <div className="signup-right-main">
          <div className="signup-right-cancel">
            <GrClose onClick={() => passSign(false)} />
          </div>
          <div className="signup-right-container">
            <div className="signup-right-head">Sign Up</div>
            <div className="signup-right-head-text">
              Please enter your Email and Password
            </div>
            <div className="signup-right-input-name">
              <input
                type="text"
                placeholder="Enter Name"
                className="signup-right-input"
                onChange={(e)=>{
                  setCustomerName(e.target.value)
                }}
              ></input>
            </div>
            <div className="signup-right-input-main">
              <input
                type="email"
                placeholder="Enter Email ID"
                className="signup-right-input"
                onChange={(e)=>{
                  setCustomerEmail(e.target.value)
                }}
              ></input>
            </div>
            <div className="signup-right-input-password">
              <input
                type="password"
                placeholder="Enter Password"
                className="signup-right-input"
                onChange={(e)=>{
                  setCustomerPassword(e.target.value)
                }}
              ></input>
            </div>
            <div className="signup-right-input-checkbox">
              <label class="container">
              Are you a healthcare professional?
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="signup-right-button-main">
              <button className="signup-right-button"
              onClick={(e)=>{

                postData();
                passSign(false);
                      window.setTimeout(function () {
                        window.location.reload();
                      }, 2000);}
              }
              >CONTINUE</button>
            </div>
            <div className="signup-right-signup">
              Have an account?
              <span className="signup-right-signup-span"
              onClick={openModel}
              > Login</span>
            </div>
            <div className="signup-right-policy">
              By logging in, you agree to our <br />
              <span className="signup-right-policy-span">
                Terms and Conditions
              </span>{" "}
              & <span className="signup-right-policy-span">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
