import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home"
import ProductDetals from"./pages/productDetals"
import CartStore from "./pages/cartStore";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetals/>}/>
          <Route path="/cart" element={<CartStore/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
