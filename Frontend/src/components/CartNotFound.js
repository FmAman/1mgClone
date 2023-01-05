import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/CartNotFound.css"

function CartNotFound() {
    const navigate = useNavigate();
  return (
    <div className='cart-not-found-main'>
    <div className="cart-not-found-image-container">
        <img className='cart-not-found-image' src='https://www.1mg.com/images/online_consultation/empty-cart-icon.svg'/>
    </div>
    <div className="cart-not-found-title">Oops!</div>
    <div className="cart-not-found-text">Looks like there is no item in your cart yet.</div>
    <div className="cart-not-found-button-container">
        <button className='cart-not-found-button' 
        onClick={()=>{
            navigate("/");
        }}
        >ADD MEDICINES</button>
    </div>
    </div>
  )
}

export default CartNotFound