import "./App.css";
import React from "react";

//componentes
import { Subtitle } from "./components/Subtitulo/Subtitle";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductList } from "./components/ProductList/ProductList";
import { Cart } from "./components/Cart/Cart";

// rutas del sistema
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Subtitle />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}
