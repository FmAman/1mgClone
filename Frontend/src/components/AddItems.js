import React, { useState } from 'react'
import "../styles/AddItems.css"
import { GrClose } from "react-icons/gr";
import axios from 'axios';


function AddItems({passAdd}) {
  const[itemName,setItemName] = useState("")
  const[imageUrl,setItemURL] = useState("")
  const[quantity,setItemQuantity] = useState("")
  const[mrpPrice,setItemMRP] = useState("")
  const[discount,setItemDiscount] = useState("")
  const[sellingPrice,setItemSellingPrice] = useState("")

const addItems = ()=>{
axios.post(`http://localhost:8888/additems`,{
  itemName,
  imageUrl,
  quantity,
  mrpPrice,
  discount,
  sellingPrice
})
}
  return (
    <div className="add-main-wrapper">
    <div className="add-main">
      <div className="add-left-main">
        <div className="add-left-sub">
          <div className="add-left-image-main">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4534/4534971.png"
              alt="No Image"
              className="add-left-image"
              
            />
          </div>
          <div className="add-left-head">Make Healthcare Simpler</div>
          <div className="add-left-body">
            Get medicine information, order medicines, book lab tests and
            consult doctors online from the comfort of your home.
          </div>
        </div>
      </div>
      <div className="add-right-main">
        <div className="add-right-cancel">
          <GrClose onClick={()=>
              passAdd(false)}/>
        </div>
        <div className="add-right-container">
          <div className="add-right-head">Add Items</div>
          <div className="add-right-input-main">
            <input
              type="text"
              placeholder="Enter Item Name"
              className="add-right-input"
              // value={setEmail}
              onChange={(e)=>{
                setItemName(e.target.value)
              }}
            ></input>
          </div>
          <div className="add-right-input-password">
            <input
              type="text"
              placeholder="Enter Image URL"
              className="add-right-input"
              // value={setPassword}
              onChange={(e)=>{
                setItemURL(e.target.value)
              }}
            ></input>
          </div>

          <div className="add-right-input-password">
            <input
              type="text"
              placeholder="Enter Item Quantity"
              className="add-right-input"
              // value={setPassword}
              onChange={(e)=>{
                setItemQuantity(e.target.value)
              }}
            ></input>
          </div>

          <div className="add-right-input-password">
            <input
              type="text"
              placeholder="Enter Item MRP"
              className="add-right-input"
              // value={setPassword}
              onChange={(e)=>{
                setItemMRP(e.target.value)
              }}
            ></input>
          </div>

          <div className="add-right-input-password">
            <input
              type="text"
              placeholder="Enter Item Discount"
              className="add-right-input"
              // value={setPassword}
              onChange={(e)=>{
                setItemDiscount(e.target.value)
              }}
            ></input>
          </div>

          <div className="add-right-input-password">
            <input
              type="text"
              placeholder="Enter Item Selling Price"
              className="add-right-input"
              // value={setPassword}
              onChange={(e)=>{
                setItemSellingPrice(e.target.value)
              }}
            ></input>
          </div>
          <div className="add-right-button-main">
            <button className="add-right-button"
            onClick={()=>{
              addItems();
              passAdd(false);
              window.setTimeout(function () {
                      window.location.reload();
                    }, 500);
                  
              }}
            >Add Items</button>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>

  )
}

export default AddItems