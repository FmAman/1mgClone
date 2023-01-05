import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CartNotFound from "../components/CartNotFound.js";

function CartNotFoundMain() {
  return (
    <div>
      <SearchBar />
      <Navbar />
      <CartNotFound />
    </div>
  );
}

export default CartNotFoundMain;
