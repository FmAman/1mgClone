import React, { useContext } from "react";
import "../styles/Header.css";
import logo from "../images/1mg_Logo.png";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Header() {
  const [loginState, setLoginState] = useState(false);
  const [signupState, setSignupState] = useState(false);
  const [role, setRole] = useState(null);
  const [name, SetName] = useState(null);
  const [ApiCartData, setApiCartData] = useState([]);
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.setTimeout(function () {
      window.location.reload();
    }, 500);
  };
  useEffect(() => {
    setRole(localStorage.getItem("role"));
    SetName(localStorage.getItem("customerName"));
    setEmail(localStorage.getItem("emailAddress"));
    axios
      .get(`http://localhost:8888/getallcartitems/${email}`)
      .then((response) => {
        setApiCartData(response.data);
        setCount(response.data.length);
      });
  }, [email]);
  return (
    <div className="main-header-container">
      <div className="header-left-main">
        <div className="header-icon">
          <img
            className="header-icon-image"
            src={logo}
            alt="1mg, best e pharmacy in India"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="header-medicines">MEDICINES</div>
        <div className="header-lab-tests">LAB TESTS</div>
        <div className="header-safe">SAFE</div>
        <div className="header-consult-doctors">CONSULT DOCTORS</div>
        <div className="header-covid-19">COVID-19</div>
        <div className="header-ayurveda">AYURVEDA</div>
        <div className="header-care-plan">CARE PLAN</div>
        <div className="header-save-more">SAVE MORE</div>
      </div>
      <div className="header-right-main">
        {role == "ADMIN" && (
          <div className="header-right-login-signup">
            <div
              className="header-login-admin"
              onClick={() => setLoginState(true)}
            >
              Hi {name}
            </div>
            <div className="header-split">|</div>
            <div
              className="header-signup"
              onClick={() => {
                localStorage.clear();
                window.setTimeout(function () {
                  window.location.reload();
                }, 500);
              }}
            >
              Log Out
            </div>
          </div>
        )}
        {role == "USER" && (
          <div className="header-right-login-signup">
            <div
              className="header-login-admin"
              onClick={() => setLoginState(true)}
            >
              Hi {name}
            </div>
            <div className="header-split">|</div>
            <div
              className="header-signup"
              onClick={() => {
                logout();
              }}
            >
              Log Out
            </div>
          </div>
        )}
        {role == null && (
          <div className="header-right-login-signup">
            <div className="header-login" onClick={() => setLoginState(true)}>
              Login
            </div>
            <div className="header-split">|</div>
            <div className="header-signup" onClick={() => setSignupState(true)}>
              Sign Up
            </div>
          </div>
        )}

        <div className="header-offers">Offers</div>
        <div className="header-shopping-cart" onClick={() => navigate("/cart")}>
          <GrCart className="header-cart-icon" />
        </div>
        <div className="header-cart-count">{count}</div>
        <div className="header-need-help">Need Help?</div>
      </div>
      {loginState && (
        <Login passLogin={setLoginState} passSign={setSignupState} />
      )}
      {signupState && (
        <Signup passSign={setSignupState} passLogin={setLoginState} />
      )}
    </div>
  );
}

export default Header;
