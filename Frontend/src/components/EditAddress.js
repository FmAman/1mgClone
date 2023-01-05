import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/EditAddress.css";
function EditAddress({ passEdit }) {
  const email = localStorage.getItem("emailAddress");
  const [streetName, setStreetName] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    setStreetName(localStorage.getItem("streetName"));
    setCityName(localStorage.getItem("cityName"));
    setStateName(localStorage.getItem("stateName"));
    setPhoneNumber(localStorage.getItem("customerAddressName"));
    setCustomerName(localStorage.getItem("phoneNumber"));
    setPincode(localStorage.getItem("pincode"));
  }, []);
  const editData = () => {
    axios.put(
      `http://localhost:8888/editAddress/${email}/${customerName}`
    );
  };
  return (
    <div className="edit-address-main-container">
      <div className="edit-address-main-title">Add New Address</div>
      <div className="edit-address-main-form">
        <form>
          <div className="edit-address-main-street-name">
            <textarea
              className="edit-address-main-street-name-input"
              placeholder="Flat Number, Building Name, Street/Locality"
              value={streetName}
              onChange={(e) => {
                setStreetName(e.target.value);
              }}
            />
          </div>
          <div className="edit-address-main-city-name">
            <input
              className="edit-address-main-city-name-input"
              type="text"
              placeholder="City Name"
              value={cityName}
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </div>
          <div className="edit-address-main-state-name">
            <input
              className="edit-address-main-state-name-input"
              type="text"
              value={stateName}
              placeholder="State Name"
              onChange={(e) => {
                setStateName(e.target.value);
              }}
            />
          </div>
          <div className="edit-address-main-pincode">
            <input
              className="edit-address-main-pincode-input"
              type="text"
              value={pincode}
              placeholder="Pincode"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
          </div>
          <div className="edit-address-main-customer-name">
            <input
              className="edit-address-main-customer-name-input"
              type="text"
              value={customerName}
              placeholder="Customer Name"
              onChange={(e) => {
                setCustomerName(e.target.value);
              }}
            />
          </div>
          <div className="edit-address-main-phone-number">
            <input
              className="edit-address-main-phone-number-input"
              type="text"
              value={phoneNumber}
              placeholder="10 Digit Mobile Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="edit-address-main-cancel-save">
            <div className="edit-address-main-cancel-button-main">
              <button
                className="edit-address-main-cancel-button"
                onClick={() => {
                  
                  passEdit(false);
                }}
              >
                CANCEL
              </button>
            </div>
            <div className="edit-address-main-save-button-main">
              <button
                className="edit-address-main-save-button"
                onClick={() => {
                  editData();
                  passEdit(false);
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

export default EditAddress;
