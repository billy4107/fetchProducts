import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./containers/Header";
import "./App.css";
import ProductListing from "./containers/ProductListing";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./containers/ProductDetails";
import AddProduct from "./containers/AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
