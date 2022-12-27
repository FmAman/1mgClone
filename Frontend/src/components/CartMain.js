import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Cart from "./Cart";

function CartMain() {
  return (
    <div>
      <SearchBar /> 
      <Navbar />
      <Cart />
    </div>
  );
}

export default CartMain;
