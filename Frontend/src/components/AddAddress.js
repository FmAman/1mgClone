import axios from "axios";
import React from "react";
import { useState } from "react";
import "../styles/AddAddress.css";

function AddAddress({ passState, passSetState }) {
  const email = localStorage.getItem("emailAddress");
  const [streetName, setStreetName] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pincode, setPincode] = useState("");
  
  const postData = (e) => {
    console.log(email);
    axios.post(`http://localhost:8888/addaddress/${email}`, {
      streetName,
      cityName,
      stateName,
      pincode,
      phoneNumber,
      customerName,
    });
    e.preventDefault();
  };
  return (
    <div className="add-address-main-container">
      <div className="add-address-main-title">Add New Address</div>
      <div className="add-address-main-form">
        <form>
          <div className="add-address-main-street-name">
            <textarea
              className="add-address-main-street-name-input"
              placeholder="Flat Number, Building Name, Street/Locality"
              onChange={(e) => {
                setStreetName(e.target.value);
              }}
            />
          </div>
          <div className="add-address-main-city-name">
            <input
              className="add-address-main-city-name-input"
              type="text"
              placeholder="City Name"
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </div>
          <div className="add-address-main-state-name">
            <input
              className="add-address-main-state-name-input"
              type="text"
              placeholder="State Name"
              onChange={(e) => {
                setStateName(e.target.value);
              }}
            />
          </div>
          <div className="add-address-main-pincode">
            <input
              className="add-address-main-pincode-input"
              type="text"
              placeholder="Pincode"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
          </div>
          <div className="add-address-main-customer-name">
            <input
              className="add-address-main-customer-name-input"
              type="text"
              placeholder="Customer Name"
              onChange={(e) => {
                setCustomerName(e.target.value);
              }}
            />
          </div>
          <div className="add-address-main-phone-number">
            <input
              className="add-address-main-phone-number-input"
              type="text"
              placeholder="10 Digit Mobile Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="add-address-main-cancel-save">
            <div className="add-address-main-cancel-button-main">
              <button
                className="add-address-main-cancel-button"
                onClick={() => {
                  passSetState(false);
                  passState(true);
                }}
              >
                CANCEL
              </button>
            </div>
            <div className="add-address-main-save-button-main">
              <button
                className="add-address-main-save-button"
                onClick={(e) => {
                  postData(e);
                  window.setTimeout(function () {
                    window.location.reload();
                  }, 1500);
                }}
              >
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAddress;
