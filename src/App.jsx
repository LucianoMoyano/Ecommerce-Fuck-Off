import "./App.css";
import React from "react";

//componentes
import { Subtitle } from "./components/Subtitulo/Subtitle";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductList } from "./components/ProductList/ProductList";
import { Cart } from "./components/Cart/Cart";
import { Nosotros } from "./components/Nosotros/Nosotros";

// rutas del sistema
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./components/Login/Login";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Subtitle />} />
            <Route path="/productos" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}
