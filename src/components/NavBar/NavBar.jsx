import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { useAuth } from "../../context/AuthContext";
import "./NavBar.css";

export const NavBar = () => {
  const { user } = useAuth();
  const [scrolling, setScrolling] = useState(false);

  // Agrega un evento de scroll al montar el componente
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar nav ${scrolling ? "scroll-header" : ""}`}>
      <ul>
        <li className="adicional">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        {/* <li>
          <Link to="/cart">
            <Cart />
          </Link>
        </li> */}
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>{user && <Link to="/profile">Mi perfil</Link>}</li>
      </ul>
    </div>
  );
};
