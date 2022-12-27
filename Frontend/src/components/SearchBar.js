import React, { useEffect, useState } from "react";
import "../styles/SearchBar.css";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoMdLocate } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import AddItems from "./AddItems";

function SearchBar({ setSearchInput }) {
  const [role, setRole] = useState(null);
  const[addState,setAddState] = useState(false);
  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);
  return (
    <div className="search-bar-main">
      <div className="search-bar-left-main">
        <div className="search-bar-location-search">
          <div className="search-bar-pin-map">
            <RiMapPin2Fill className="search-bar-icons" />
          </div>
          <div className="search-bar-drop-down-container">
            <select className="search-bar-drop-down">
              <option value="New Delhi" className="search-bar-option">
                New Delhi
              </option>

              <option value="Mumbai" className="search-bar-option">
                Mumbai
              </option>

              <option value="Bangalore" className="search-bar-option">
                Bangalore
              </option>
            </select>
          </div>
          <div className="search-bar-locate">
            <IoMdLocate className="search-bar-icons" />
          </div>
        </div>
        <div className="search-bar-product-search">
          <div className="search-bar-seachbar">
            <input
              type="text"
              className="search-bar-search-component"
              placeholder=" Search for Medicines and Health Products"
              name="search"
              onChange={(e) => {
                e.preventDefault();
                setSearchInput(e.target.value);
              }}
            ></input>
          </div>
          <div className="search-bar-search-icon">
            <button type="submit" className="search-bar-search-button">
              <AiOutlineSearch className="search-bar-icons" />
            </button>
          </div>
        </div>
      </div>
      <div className="search-bar-right-main">
        <div className="search-bar-lightning-icon">
          <BsLightningChargeFill className="search-bar-icons-lightning" />
        </div>
        <div className="search-bar-quick-text">
          QUICK BUY! Get 25% off on <br></br>medicines*
        </div>
        <div className="search-bar-quick-order">
          {role == "ADMIN" && (
            <button className="search-bar-quick-button"
            onClick={()=>{
              setAddState(true);
            }}
            >Add Items</button>
          )}
          {role == "USER" && (
            <button className="search-bar-quick-button">Quick order</button>
          )}
          {role == null && (
            <button className="search-bar-quick-button">Quick order</button>
          )}
        </div>
      </div>
      {addState&&<AddItems passAdd={setAddState}/>}
    </div>
  );
}

export default SearchBar;
