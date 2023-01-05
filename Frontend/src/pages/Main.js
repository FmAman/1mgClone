import React from "react";
import Dashboard from "../components/Dashboard";
import CarouselImage from "../components/CarouselImage";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
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
