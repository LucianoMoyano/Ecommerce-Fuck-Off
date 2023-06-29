import "./App.css";
import React from "react";
import { Subtitle } from "./components/Subtitulo/Subtitle";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductList } from "./components/ProductList/ProductList";

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
        </Routes>
      </Router>
    </>
  );
}
