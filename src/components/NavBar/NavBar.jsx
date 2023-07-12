import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart"; // Importa el componente Cart correctamente

import { useAuth } from "../../context/AuthContext";

import "./NavBar.css";

export const NavBar = () => {
  const { user } = useAuth();

  return (
    <div className="navbar">
      <ul>
        <li className="adicional">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/cart">
            <Cart />
          </Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>{user && <Link to="/profile">Mi perfil</Link>}</li>
      </ul>
    </div>
  );
};
