import React from "react";
import Dashboard from "./Dashboard";
import CarouselImage from "./CarouselImage";
import Header from "./Header";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import {useState} from 'react';

function Main() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <SearchBar setSearchInput={setSearchInput}/>
      <Navbar />
      <CarouselImage />
      <Dashboard searchInput={searchInput} />
    </div>
  );
}

export default Main;
