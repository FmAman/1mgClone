import React from "react";
import "../styles/Footer.css";
import Signup from "./Signup";
import { useState } from "react";

function Footer() {
  const [signupState, setSignupState] = useState(false);
  const [loginState, setLoginState] = useState(false);

  return (
    <div className="footer-main-container">
      <div className="footer-count">
        <div className="footer-count-upper">
          INDIA'S LARGEST HEALTHCARE PLATFORM
        </div>
        <div className="footer-count-lower">
          <div className="footer-count-lower-visitor">
            <div className="footer-count-lower-number">260m+</div>
            <div className="footer-count-lower-text">Visitors</div>
          </div>
          <div className="footer-count-lower-order">
            <div className="footer-count-lower-number">31m+</div>
            <div className="footer-count-lower-text">Order Delivered</div>
          </div>
          <div className="footer-count-lower-cities">
            <div className="footer-count-lower-number">1800+</div>
            <div className="footer-count-lower-text">Cities</div>
          </div>
        </div>
      </div>
      <div className="footer-border"></div>
      <div className="footer-send-link">
        <div className="footer-send-link-text">
          Get the link to download App
        </div>
        <div className="footer-send-link-number-main">
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="footer-send-link-number"
          />
        </div>
        <div className="footer-send-link-button-main">
          <button className="footer-send-link-button">Send Link</button>
        </div>
      </div>
      <div className="footer-bottom-main">
        <div className="footer-feature">
          <div className="footer-feature-know-us">
            <div className="footer-ul-text">Know us</div>
            <br />
            <ul className="footer-feature-know-us-ul">
              <li>About us</li>
              <li>Contact us</li>
              <li>Press Coverage</li>
              <li>Careers</li>
              <li>Business Partnership</li>
              <li>Become a Health Partner</li>
              <li>Corporate Governance</li>
            </ul>
          </div>
          <div className="footer-feature-our-policy">
            <div className="footer-ul-text">Our Policies</div>
            <br />
            <ul className="footer-feature-know-us-ul">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Editorial Policy</li>
              <li>Return Policy</li>
              <li>IP Policy</li>
              <li>Grievance Redressal Policy</li>
              <li>Fake Jobs and Fraud Disclaimer</li>
            </ul>
          </div>
          <div className="footer-feature-our-service">
            <div className="footer-ul-text">Our Services</div>
            <br />
            <ul className="footer-feature-know-us-ul">
              <li>Order Medicines</li>
              <li>Book Lab Tests</li>
              <li>Consult a Doctor</li>
              <li>Ayurveda Articles</li>
              <li>Hindi Articles</li>
              <li>Care Plan</li>
            </ul>
          </div>
          <div className="footer-feature-connect">
            <div className="footer-ul-text">
              Connect
              <br />
              <br />
            </div>

            <ul className="footer-feature-connect-ul">
              <li>Social Links</li>
              <li></li>
              <li>Want daily doze of health?</li>
              <li>
                <button
                  className="footer-feature-connect-button"
                  onClick={() => setSignupState(true)}
                >
                  SIGN UP
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-feature-download-app">
            <div className="footer-ul-text">
              Download App
              <br />
              <br />
              <ul className="footer-feature-download-ul">
                <li>
                  <div className="footer-feature-download-app-li-play"></div>
                </li>
                <li>
                  <div className="footer-feature-download-app-li-app"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-border-down"></div>
        <div className="footer-secure">
          <div className="footer-secure-reliable">
            <div className="footer-secure-relaible-logo"></div>
            <div className="footer-secure-reliable-text">
              <span className="footer-secure-header">Reliable</span>
              <br />
              All products displayed on Tata 1mg are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited
            </div>
          </div>
          <div className="footer-secure-secure">
            <div className="footer-secure-secure-logo"></div>
            <div className="footer-secure-secure-text">
              <span className="footer-secure-header">Secure</span>
              <br />
              Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is
              Payment Card Industry Data Security Standard (PCI DSS) compliant
            </div>
          </div>
          <div className="footer-secure-affordable">
            <div className="footer-secure-affordable-logo"></div>
            <div className="footer-secure-affordable-text">
              <span className="footer-secure-header">Affordable</span>
              <br />
              Find affordable medicine substitutes, save up to 50% on health
              products, up to 80% off on lab tests and free doctor
              consultations.
            </div>
          </div>
        </div>
        <div className="footer-border-down"></div>
        <div className="footer-rights">
          <div className="footer-rights-left">
            © 2022 Tata 1mg. All rights reserved. In compliance with Drugs and
            Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
            process requests for Schedule X and other habit forming drugs.
          </div>
          <div className="footer-rights-right"></div>
        </div>
      </div>
      {signupState && (
        <Signup passSign={setSignupState} passLogin={setLoginState} />
      )}
      {signupState&&<Signup passSign={setSignupState} passLogin={setLoginState}/>}

    </div>
  );
}

export default Footer;
