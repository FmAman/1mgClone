import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/Dashboard.css";
import axios from "axios";
import EditItems from "./EditItems";
import Login from "./Login";
import Signup from "./Signup";

function Dashboard({ searchInput }) {
  const [ApiData, setApiData] = useState([]);
  const [editState, setEditState] = useState(false);
  const [sort, setSort] = useState("Relevance");
  const [email, setEmail] = useState("");
  const [itemName, SetItemName] = useState(null);
  const [role, setRole] = useState(null);
  const [quantity, SetQuantity] = useState(null);
  const [mrpPrice, SetMrpPrice] = useState(null);
  const [sellingPrice, SetSellingPrice] = useState(null);
  const [loginState, setLoginState] = useState(false);
  const [signupState, setSignupState] = useState(false);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setEmail(localStorage.getItem("emailAddress"));

    if (searchInput != "") {
      axios
        .get(`http://localhost:8888/searchitems/${searchInput}`)
        .then((response) => {
          setApiData(response.data);
        });
    } else {
      axios.get(`http://localhost:8888/getitems/${sort}`).then((response) => {
        setApiData(response.data);
      });
    }
  }, [searchInput, sort]);

  const storeToState = (data) => {
    let { itemName, quantity, mrpPrice, sellingPrice } = data;
    SetItemName(itemName);
    SetQuantity(quantity);
    SetMrpPrice(mrpPrice);
    SetSellingPrice(sellingPrice);
  };

  const storeToLocal = (data) => {
    let { itemName, quantity, mrpPrice, sellingPrice, imageUrl, discount } =
      data;
    localStorage.setItem("itemName", itemName);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("mrpPrice", mrpPrice);
    localStorage.setItem("sellingPrice", sellingPrice);
    localStorage.setItem("imageUrl", imageUrl);
    localStorage.setItem("discount", discount);
  };

  const addToCart = (data) => {
    axios.post(`http://localhost:8888/addtocart/${email}/${data.itemName}/1`);
    window.setTimeout(function () {
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-main-header">
        <div className="dashboard-main-title">Deals of the day</div>
        <div className="dashboard-main-sort">
          <span className="dashboard-main-dropdrown-title">Sort By</span>
          <select
            className='dashboard-main-dropdown'
            onChange={handleSortChange}
          >
            <option value="Relevance" className="dashboard-main-option">
              Relevance
            </option>
            <option value="NameAsc" className="dashboard-main-option">
              Name (A-Z)
            </option>
            <option value="NameDsc" className="dashboard-main-option">
              Name (Z-A)
            </option>
            <option value="PriceLH" className="dashboard-main-option">
              Price (Low to High)
            </option>
            <option value="PriceHL" className="dashboard-main-option">
              Price (High to Low)
            </option>
            <option value="Discount" className="dashboard-main-option">
              Discount
            </option>
          </select>
        </div>
      </div>
      <div
        className="dashboard-main-cards"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
      >
        {ApiData.map((data) => {
          return (
            <div className="dashboard-card">
              <div className="dashboard-card-item-image">
                <img src={data.imageUrl} className="dashboard-card-image" />
              </div>
              <div className="dashboard-card-item-name">{data.itemName}</div>
              <div className="dashboard-card-item-quantity">
                {data.quantity}
              </div>
              <div className="dashboard-card-item-discount">
                <div className="dashboard-card-item-mrp">
                  MRP{" "}
                  <span className="dashboard-card-item-mrp-span">
                    ₹{data.mrpPrice}
                  </span>
                </div>
                <div className="dashboard-card-item-discount-offer">
                  {data.discount}% off
                </div>
              </div>
              <div className="dashboard-card-item-price-add">
                <div className="dashboard-card-item-price">
                  ₹{data.sellingPrice}
                </div>
                {role == "USER" && (
                  <button
                    className="dashboard-card-item-add"
                    onClick={() => {
                      storeToState(data);
                      addToCart(data);
                    }}
                  >
                    ADD
                  </button>
                )}
                {role == null && (
                  <button
                    className="dashboard-card-item-add"
                    onClick={() => {
                      setLoginState(true);
                    }}
                  >
                    ADD
                  </button>
                )}
                {role == "ADMIN" && (
                  <button
                    className="dashboard-card-item-add"
                    onClick={() => {
                      setEditState(true);
                      storeToLocal(data);
                    }}
                  >
                    EDIT
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {editState && <EditItems passEdit={setEditState} passApi={ApiData} />}
      {loginState && (
        <Login passLogin={setLoginState} passSign={setSignupState} />
      )}
      {signupState && (
        <Signup passSign={setSignupState} passLogin={setLoginState} />
      )}
    </div>
  );
}

export default Dashboard;
