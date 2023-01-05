import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";

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
