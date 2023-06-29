import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart"; // Importa el componente Cart correctamente

import "./NavBar.css";

export const NavBar = () => {
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
      </ul>
    </div>
  );
};
