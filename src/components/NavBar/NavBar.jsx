import React from "react";

import { Link } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Buscar" />
        <button type="submit">Buscar</button>
      </div>
    </div>
  );
};
