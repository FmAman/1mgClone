import React, { useState } from "react";
import "../styles/Address.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import EditAddress from "./EditAddress";

function Address({ passApi }) {
  const [selectState, setSelectState] = useState(false);
  const [editState, setEditState] = useState(false);
  const email = localStorage.getItem("emailAddress");
  const [streetName, setStreetName] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pincode, setPincode] = useState("");

  const editAddress = () => {};
  const storeToLocal = () => {
    setStreetName(localStorage.setItem("streetName", passApi.streetName));
    setCityName(localStorage.setItem("cityName", passApi.cityName));
    setStateName(localStorage.setItem("stateName", passApi.stateName));
    setCustomerName(
      localStorage.setItem("customerAddressName", passApi.customerName)
    );
    setPhoneNumber(localStorage.setItem("phoneNumber", passApi.phoneNumber));
    setPincode(localStorage.setItem("pincode", passApi.pincode));
  };
  const deleteAddress = () => {
    axios.delete(
      `http://localhost:8888/deleteaddress/${email}/${passApi.customerName}`
    );
  };
  return (
    <div className="address-main-container">
      <div className="address-main">
        <div className="address-main-select-left">
          <input type="radio" name="radio" id="radio"></input>
        </div>
        <div className="address-main-body">
          <div className="address-body-name">{passApi.customerName}</div>
          <div className="address-body-number">{passApi.phoneNumber}</div>
          <div className="address-body-street">{passApi.streetName}</div>
          <div className="address-body-state">
            {passApi.cityName}, {passApi.stateName}-{passApi.pincode}
          </div>
        </div>
        <div className="address-main-select-right">
          <BsThreeDotsVertical
            className="address-main-select-right-icon"
            onClick={() => {
              setSelectState(true);
            }}
          />
          {selectState && (
            <div
              className="address-main-select-edit-delete-main"
              onMouseLeave={() => {
                setSelectState(false);
              }}
            >
              <div
                className="address-main-select-edit-delete-text"
                onClick={() => {
                  // editAddress();
                  storeToLocal();
                  editState(true);
                  // window.setTimeout(function () {
                  //   window.location.reload();
                  // }, 1500);
                }}
              >
                Edit
              </div>
              <div
                className="address-main-select-edit-delete-text"
                onClick={() => {
                  deleteAddress();
                  window.setTimeout(function () {
                    window.location.reload();
                  }, 1500);
                }}
              >
                Delete
              </div>
            </div>
          )}
        </div>
      </div>
      {editState && <EditAddress passEdit={setEditState} />}
    </div>
  );
}

export default Address;
