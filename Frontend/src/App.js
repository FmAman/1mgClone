import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import CartMain from "./pages/CartMain";
import CartNotFoundMain from "./pages/CartNotFoundMain";
import Login from "./components/Login";
import AddressMain from "./pages/AddressMain";
import AddAddress from "./components/AddAddress";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route exact path="/" element={<Main />} />
            <Route path="/cart" element={<CartMain />} />
            <Route path="/cartnotfound" element={<CartNotFoundMain />} />
            <Route path="/address-page" element={<AddressMain />} />
            <Route path="/add-address-page" element={<AddAddress />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
