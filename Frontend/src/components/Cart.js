import React from "react";
import "../styles/Cart.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [ApiCartData, setApiCartData] = useState([]);
  const [email, setEmail] = useState("");
  const [count,setCount] = useState(0);
  const navigate = useNavigate();

  let mrpTotal = ApiCartData.reduce(function (prev, current) {
    return prev + current.items.mrpPrice * current.cartQuantity;
  }, 0);

  let discountTotal = ApiCartData.reduce(function (prev, current) {
    return (
      prev +
      (current.items.mrpPrice - current.items.sellingPrice) *
        current.cartQuantity
    );
  }, 0);

  let priceTotal = ApiCartData.reduce(function (prev, current) {
    return prev + current.items.sellingPrice * current.cartQuantity;
  }, 0);

  useEffect(() => {
    setEmail(localStorage.getItem("emailAddress"));
    console.log(email)
    axios
      .get(`http://localhost:8888/getallcartitems/${email}`)
      .then((response) => {
        setApiCartData(response.data);
        setCount(response.data.length);
      })
      
      .catch((error)=>{
        if(error.response.request.status==404){
          navigate("/cartnotfound")
        }
      })
      ;
    }, [email]);

  const reduceItemQuantityCart = (data) => {
    setEmail(localStorage.getItem("emailAddress"));
    axios.delete(
      `http://localhost:8888/removecartitem/${email}/${data.items.itemName}/1`
    );
    window.setTimeout(function () {
      window.location.reload();
    }, 500);
  };

  const increaseItemQuantityCart = (data) => {
    setEmail(localStorage.getItem("emailAddress"));
    axios.post(
      `http://localhost:8888/addcartitem/${email}/${data.items.itemName}/1`
    );
    window.setTimeout(function () {
      window.location.reload();
    }, 500);
  };

  const deleteItemFromCart = (data) => {
    setEmail(localStorage.getItem("emailAddress"));
    axios.delete(
      `http://localhost:8888/deleteitemcart/${email}/${data.items.itemName}`
    );
    window.setTimeout(function () {
      window.location.reload();
    }, 500);
  };
  return (
    <div className="cart-main-container">
      <div className="cart-main-title">Cart Checkout </div>
      <div className="cart-main">
        <div className="cart-main-map" >
          {ApiCartData.map((data) => {
            return (
              <div className="cart-left-main">
                <div className="cart-left-upper">
                  <div className="cart-left-upper-text">
                    {data.items.itemName}
                  </div>
                  <div className="cart-left-upper-value">
                    ₹{data.items.sellingPrice}
                  </div>
                </div>
                <div className="cart-left-lower">
                  <div className="cart-left-lower-text">
                    {data.items.quantity}
                  </div>
                  <div className="cart-left-lower-value">
                    MRP{" "}
                    <span className="cart-left-lower-span">
                      ₹{data.items.mrpPrice}
                    </span>
                  </div>
                </div>
                <div className="cart-left-bottom-main">
                  <div
                    className="cart-left-delete"
                    onClick={() => {
                      deleteItemFromCart(data);
                    }}
                  >
                    <img src="https://img.1mg.com/images/delete_icon.svg" />
                    <span className="cart-left-delete-span">Remove</span>
                  </div>
                  <div className="cart-left-add-remove">
                    <div className="cart-left-remove-button">
                      <img
                        className="cart-left-quantity-image"
                        src="https://www.1mg.com/images/minus-cart.svg"
                        alt="remove"
                        onClick={() => {
                          reduceItemQuantityCart(data);
                        }}
                      />
                    </div>
                    <div className="cart-left-quantity">
                      <span className="cart-left-quantity-text">
                        {data.cartQuantity}
                      </span>
                    </div>
                    <div className="cart-left-add-button">
                      <img
                        className="cart-left-quantity-image"
                        src="https://www.1mg.com/images/plus-cart.svg"
                        alt="add"
                        onClick={() => {
                          increaseItemQuantityCart(data);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-right-main-container">
          <div className="cart-right-main">
            <div className="cart-right-mrp">
              <div className="cart-right-mrp-text">Item Total(MRP)</div>
              <div className="cart-right-mrp-value">₹{mrpTotal}</div>
            </div>
            <div className="cart-right-discount">
              <div className="cart-right-discount-text">Price Discount</div>
              <div className="cart-right-discount-value">-₹{discountTotal}</div>
            </div>
            <div className="cart-right-shipping">
              <div className="cart-right-shipping-text">Shipping Fees</div>
              <div className="cart-right-shipping-value">₹0</div>
            </div>
            <div className="cart-right-topay">
              <div className="cart-right-topay-text">To be paid</div>
              <div className="cart-right-topay-value">₹{priceTotal}</div>
            </div>
            <div className="cart-right-savings">
              <div className="cart-right-savings-text">Total savings</div>
              <div className="cart-right-savings-value">₹{discountTotal}</div>
            </div>
          </div>
          <div className="cart-right-cart-button-main">
            <br />
            <button className="cart-right-button"
            onClick={()=>{
              navigate("/address-page")

            }
              }
            >CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
