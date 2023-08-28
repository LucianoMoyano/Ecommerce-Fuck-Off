import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section about-us">
        <h3>ACERCA DE NOSOTROS</h3>
        <p>
          <strong>Somos una tienda oficial de NIKE®, que comenzó en 2023 con una pagina
          online.</strong>
          <br />
          Buscamos que nuestros clientes se sientan plenamente involucrados con
          lo que representamos, ya sea a través de nuestras tiendas en línea o
          nuestros productos. Queremos que formen parte de nuestro movimiento.
          <br />
          <strong><em>Actualmente, contamos con envíos a todo el país.</em></strong>
        </p>
      </div>
      <div className="footer-section information">
        <h3>INFORMACIÓN</h3>
        <p>
          <span className="footer-span">Sucursales</span>
          <span className="footer-span">Cómo Comprar?</span>
          <span className="footer-span">Medios de Pago</span>
          <span className="footer-span">Métodos de Envío</span>
          <span className="footer-span">Cambios y Devoluciones</span>
          <span className="footer-span">Contacto</span>
        </p>
      </div>
    </footer>
  );
};
