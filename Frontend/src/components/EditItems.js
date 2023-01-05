import React, { useState } from "react";
import "../styles/EditItems.css";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import { useEffect } from "react";

function EditItems({ passEdit }) {
  const [itemName, setItemName] = useState("");
  const [imageUrl, setItemURL] = useState("");
  const [quantity, setItemQuantity] = useState("");
  const [mrpPrice, setItemMRP] = useState("");
  const [discount, setItemDiscount] = useState("");
  const [sellingPrice, setItemSellingPrice] = useState("");

  useEffect(() => {
    setItemName(localStorage.getItem("itemName"));
    setItemDiscount(localStorage.getItem("discount"));
    setItemMRP(localStorage.getItem("mrpPrice"));
    setItemQuantity(localStorage.getItem("quantity"));
    setItemURL(localStorage.getItem("imageUrl"));
    setItemSellingPrice(localStorage.getItem("sellingPrice"));
  }, []);
  const editItem = () => {
    axios.put(`http://localhost:8888/edititems`, {
      imageUrl,
      itemName,
      quantity,
      mrpPrice,
      discount,
      sellingPrice,
    });
    window.setTimeout(function () {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="edit-main-wrapper">
      <div className="edit-main">
        <div className="edit-left-main">
          <div className="edit-left-sub">
            <div className="edit-left-image-main">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4534/4534971.png"
                alt="No Image"
                className="edit-left-image"
              />
            </div>
            <div className="edit-left-head">Make Healthcare Simpler</div>
            <div className="edit-left-body">
              Get medicine information, order medicines, book lab tests and
              consult doctors online from the comfort of your home.
            </div>
          </div>
        </div>
        <div className="edit-right-main">
          <div className="edit-right-cancel">
            <GrClose
              onClick={() => {
                passEdit(false);
                localStorage.removeItem("sellingPrice");
                localStorage.removeItem("imageUrl");
                localStorage.removeItem("discount");
                localStorage.removeItem("quantity");
                localStorage.removeItem("itemName");
                localStorage.removeItem("mrpPrice");
              }}
            />
          </div>
          <div className="edit-right-container">
            <div className="edit-right-head">Edit Item</div>
            <div className="edit-right-input-main">
              <input
                type="text"
                className="edit-right-input"
                id="itemname"
                value={itemName}
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
              ></input>
            </div>
            <div className="edit-right-input-password">
              <input
                type="url"
                id="itemurl"
                value={imageUrl}
                className="edit-right-input"
                onChange={(e) => {
                  setItemURL(e.target.value);
                }}
              ></input>
            </div>

            <div className="edit-right-input-password">
              <input
                type="text"
                id="itemquantity"
                // placeholder="Enter Item Quantity"
                className="edit-right-input"
                value={quantity}
                onChange={(e) => {
                  setItemQuantity(e.target.value);
                }}
              ></input>
            </div>

            <div className="edit-right-input-password">
              <input
                type="text"
                id="itemmrp"
                // placeholder="Enter Item MRP"
                className="edit-right-input"
                value={mrpPrice}
                onChange={(e) => setItemMRP(e.target.value)}
              ></input>
            </div>

            <div className="edit-right-input-password">
              <input
                type="text"
                id="itemdiscount"
                className="edit-right-input"
                value={discount}
                onChange={(e) => {
                  setItemDiscount(e.target.value);
                }}
              ></input>
            </div>

            <div className="edit-right-input-password">
              <input
                type="text"
                id="itemsellingprice"
                // placeholder="Enter Item Selling Price"
                className="edit-right-input"
                value={sellingPrice}
                onChange={(e) => {
                  setItemSellingPrice(e.target.value);
                }}
              ></input>
            </div>
            <div className="edit-right-button-main">
              <button
                className="edit-right-button"
                onClick={() => {
                  editItem();
                  passEdit(false);
                  localStorage.removeItem("sellingPrice");
                  localStorage.removeItem("imageUrl");
                  localStorage.removeItem("discount");
                  localStorage.removeItem("quantity");
                  localStorage.removeItem("itemName");
                  localStorage.removeItem("mrpPrice");
                }}
              >
                Edit Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItems;
