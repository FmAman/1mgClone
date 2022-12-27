import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import CartMain from "./components/CartMain";
import { useState } from "react";

function App() {
  const[cartCount,setCartCount]=useState(0);
  return(
  <div className="App">
    
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route>
          <Route exact path="/" element={<Main />} />
          <Route path="/cart" element={<CartMain />} />
          </Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
   
  </div>

  );
}

export default App;
