import React, { useEffect, useState } from "react";
import "../styles/AddressMain.css";
import Address from "../components/Address";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import AddAddress from "../components/AddAddress";

function AddressMain() {
  const [ApiData, setApiData] = useState([]);
  const email = localStorage.getItem("emailAddress");
  const [addAddressState, setAddAddressState] = useState(false);
  const [addressState, setAddressState] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/getalladdress/${email}`)
      .then((response) => {
        setApiData(response.data);
      });
  }, [email]);

  return (
    <div className="addressmain-container">
      <SearchBar />
      <Navbar />
      {addressState && (
        <>
          {ApiData.map((data) => {
            return (
              <div className="addressmain-address-main">
                <Address passApi={data} />
              </div>
            );
          })}
          <div className="addressmain-new-address">
            <button
              className="addressmain-new-address-button"
              onClick={() => {
                setAddAddressState(true);
                setAddressState(false);
              }}
            >
              + ADD NEW ADDRESS
            </button>
          </div>
          <div className="addressmain-continue-main">
            <button className="addressmain-continue-main-button">
              CONTINUE
            </button>
          </div>
        </>
      )}
      {addAddressState && (
        <AddAddress
          passState={setAddressState}
          passSetState={setAddAddressState}
        />
      )}
      <div className="addressmain-bottom-main">
        <div className="addressmain-bottom-main-left">
          Tata 1mg is a technology platform to facilitate transaction of
          business. The products and services are offered for sale by the
          sellers. The user authorizes the delivery personel to be his agent for
          delivery of the goods. For details read{" "}
          <a className="term-condition-text" href="https://www.1mg.com/tnc">
            terms and conditions.
          </a>
        </div>
        <div className="addressmain-bottom-main-right">
          *NeuCoins will be credited 7 days after your complete order is
          delivered in case of Products and in case of Lab Services NeuCoins
          will be credited within 24 hours from the time of generation of test
          report. NeuCoins will not be credited in case a return request is
          initiated for the order. <br /> <br />
          **Coupon Discount value may change if the total order value changes.{" "}
          <br /> <br />
          ***Items in your cart will always reflect the most recent price as
          compared to the prices in their product detail page.
        </div>
      </div>
    </div>
  );
}

export default AddressMain;
